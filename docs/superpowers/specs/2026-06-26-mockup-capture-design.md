# Mockup Capture → Ticket Detail Screenshots (Phase 1)

**Date:** 2026-06-26
**Status:** Approved design, ready for implementation
**Scope:** Phase 1 — make `mockup_ref` navigable (skill fix + data rewrite), capture screens headlessly, show them in the item detail modal. Jira push is a separate follow-up (Phase 2) depending on the PNGs this phase produces.

## Problem

Every WBS item (a "ticket") carries a `mockup_ref` pointing at its related screen in the design mockup. We want the detail view to show an **image** of that screen, and to produce real **PNG files** (not a live iframe) so a later phase can attach them to Jira issues.

## Root cause (why this is also a skill fix)

`mockup_ref` is **decorative free-text with no constraint**. The `wbs-breakdown` skill's examples invent fragments (`schema.md:44` → `#org-dashboard`, `schema.md:60` → `#kpi-strip`) and the decomposition contract never says a ref must resolve to anything. So the blind fan-out agents fabricate `#whatever` per item → ~50 unique fragments, **none navigable**. The mockup (`mockup/project/Seta People.dc.html` + `seta-engine.js`) is a JS-driven SPA with **no hash routing**, so `…#dashboard-am-grant` opens nothing.

A ref that points nowhere is unverifiable and useless even without screenshots. The fix is upstream: **`mockup_ref` must be a *resolvable* pointer, recorded during the Inventory phase** (the one agent that actually parses the mockup), never an invented label. Fixing the skill makes future breakdowns correct; the current `wbs.json` is rewritten once as part of this phase.

## Capture feasibility (established)

The mockup exposes globals `window.showModule(mod)`, `window.showTab(tab)`, `window.go(view)`. **28 navigable screens.** Rendering is **synchronous** (~50ms settle, no fetch/Promise data loads). Persona via `<select id="persona">` (`admin | am | manager | employee`); some screens are persona-scoped. The mockup needs real **HTTP** (it uses `import()` + CSS fetches; `file://` won't boot it).

## The data contract: a resolvable `mockup_ref`

`mockup_ref` becomes **string | object**:

- **string** — a directly-openable URL/anchor, for mockups that have real routes (keeps the skill general).
- **object** — for app-shell SPAs with no addressable routes:
  ```jsonc
  "mockup_ref": {
    "screen":  "people/dashboard",        // "<module>/<tab>" — the mockup's own nav key (required)
    "persona": "am",                       // optional; default "admin"
    "actions": ["openProfile('FA-1000')"]  // optional JS one-liners, run after nav, before capture
  }
  ```

The `screen` string **is** the contract — no lookup table. The capture tool generically runs `showModule(module); showTab(tab)`, sets persona, evals `actions`. Valid `screen` keys are the 28 `module/tab` pairs (e.g. `people/dashboard`, `project/portfolio`, `hiring/candidates`, `lifecycle/lc_directory`, `ai/chat`).

**Placement:** the resolvable ref lives at the **screen** level. Items inherit it (the renderer already falls back `it.mockup_ref || sc.mockup_ref`). An item overrides only when it points at a *different* state (e.g. an edit drawer) via its own `actions`.

## Architecture

```
wbs.json                 screens carry navigable mockup_ref objects        [DATA, rewritten once]
wbs/lib/schema.mjs       validates mockup_ref is string | {screen,…}        [VALIDATION GATE]
wbs/capture.mjs          headless tool: reads mockup_ref → PNGs + index     [TOOL, new]
wbs/screens/*.png        generated screenshots, one per unique screen-state [OUTPUT, committed]
wbs/screens/index.json   generated: fragmentKey → png + { w, h, capturedAt} [OUTPUT, committed]
        ↓ consumed by
wbs/lib/render.js        detail modal renders the screenshot                [RENDERER]
```

`build.mjs` / `serve.mjs` / the renderer stay **zero-dependency** — and so does `capture.mjs`. It drives **system headless Chrome over the DevTools Protocol** using only Node 26 built-ins (`child_process` to launch `Google Chrome --headless`, the built-in global `WebSocket` to speak CDP, built-in `http` for the static server). No npm dependency, no browser download. A thin `lib/cdp.mjs` wraps the handful of CDP calls used (`Page.navigate`, `Runtime.evaluate`, `Page.captureScreenshot`, load-wait). `capture.mjs` is an offline step, run only when the mockup or refs change — not part of `build`.

## Skill changes (`.claude/skills/wbs-breakdown/`)

1. **`references/schema.md`** — replace the invented-fragment examples with the resolvable form; document `mockup_ref` as `string | { screen, persona?, actions? }` and state the rule: *must open the actual screen; never a decorative label*.
2. **`references/decomposition-contract.md`** — the `mockup_ref` bullet (`:27`) gains: *use the navigable handle the Inventory phase assigned to this screen; do not invent a fragment*.
3. **`SKILL.md`** — the **Inventory** step (`:49`) gains a responsibility: for each screen, record its **navigable handle** in the mockup's own addressing scheme (real route/anchor if one exists; otherwise the app-shell `{screen,…}` descriptor). The **Reconcile** coverage check (`:51`) additionally asserts every screen's `mockup_ref` resolves (no orphan fragments).

These keep the skill general (Inventory discovers the scheme) while making refs verifiable.

## One-time `wbs.json` rewrite

Map each existing screen's invented fragment → the navigable form, using the established nav vocabulary (28 `module/tab` keys; persona for `*-scoped-am/-em`; `actions` for the documented drawer/sub-states like `employee-profile` → `openProfile`, `pm-portfolio-exceptions-detail` → `pmExcView='detail'; renderContent()`). Item-level refs that merely duplicate their screen are dropped; genuine sub-state items keep an override. `node build.mjs` must pass after the rewrite.

## Component — discovery walkthrough (`wbs/capture.mjs --walk`)

A token-saving tool that drives the mockup and emits a small artifact, so the `wbs.json` rewrite (and any future mockup understanding) is authored from ~a few KB instead of re-reading the 595 KB `seta-engine.js`.

1. Boot the mockup (shared plumbing below).
2. **Auto-discover** the full screen list from the app itself: read `MOD_TABS` and the persona `<option>` list in page context — no hardcoded screen table.
3. For each `module/tab`: nav there, grab the rendered `#content`'s main heading + a short text digest, and write a small thumbnail (`wbs/screens/_walk/<module>-<tab>.png`, ~360px wide).
4. Emit `wbs/screens/inventory.json`: `[{ screen, heading, digest, thumb }]`.

I read `inventory.json` (small) to map each old fragment → the navigable `{screen, persona?, actions?}` form accurately and cheaply. The tool is reusable whenever the mockup changes.

## Component — capture tool (`wbs/capture.mjs`)

Run: `node capture.mjs` (add `npm run capture`).

1. Start a tiny zero-dep Node `http` static server rooted at `mockup/project/`.
2. Launch system headless Chrome via CDP (`lib/cdp.mjs`), open `Seta People.dc.html` at ~1280×800, scale 1.
3. Wait for boot: poll until `typeof window.showModule==='function'` and `#content` has children.
4. Collect the **unique** `{screen,persona,actions}` specs across all `mockup_ref`s in `wbs.json` (dedup → one PNG each; filename `<module>-<tab>[-persona][-aN].png`).
5. Per spec: set `#persona` + dispatch `change` → `showModule;showTab` → eval `actions` → 50ms settle → screenshot `#content` (clipped) → write PNG.
6. Write `wbs/screens/index.json` mapping each item/screen key → its png + dims + runtime-stamped `capturedAt`.
7. **Coverage report:** `N refs → M unique screens, 0 unresolved`; non-zero unresolved → exit 1.

## Component — detail-view integration (`wbs/lib/render.js`, `wbs/lib/page.mjs`)

Image appears in the **mindmap detail modal only** (table view untouched in Phase 1).

1. `render.js:100` — add `mockup: it.mockup_ref || screen.mockup_ref || ''` to the item node.
2. Page loads `screens/index.json`; `build.mjs` **inlines** it into the static snapshot, `serve.mjs` **fetches** it live (same split as the WBS data).
3. `detailHTML()` — when the item resolves to a PNG, append a `<img class="tt-shot" loading="lazy">` plus an "open live screen ↗" link. CSS in `page.mjs`.
4. **Graceful absence:** no PNG (capture not run / unresolved) → text-only render, exactly as today. No errors.

Generated assets (`wbs/screens/*.png`, `index.json`) are **committed to git** (like the existing generated `index.html`), keeping the snapshot portable and Phase 2 ready.

## Out of scope (Phase 1)

- Jira API push / attachment (Phase 2).
- Table-view thumbnails / hover previews.
- Clipping to a fragment's specific block (no stable selectors; whole-screen is better ticket context).
- Capturing screens not referenced by any `mockup_ref`.

## Risks / notes

- **The rewrite is the main one-time effort** (~28 screen mappings); it's plain reviewable data now living in `wbs.json` rather than a side file.
- **Persona/action correctness** is verified by eyeballing the generated PNGs — the reason the live view is built before Jira.
- **Mockup drift:** if `seta-engine.js` renames screen keys, capture navigates wrong; the coverage gate catches *unresolved* refs, not *wrong* ones — hence the human eyeball pass.
- **PNG size:** fixed ~1200px width at scale 1 keeps committed assets reasonable; revisit downscaling only if heavy.
