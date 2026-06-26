# Mockup Capture → Ticket Detail Screenshots (Phase 1)

**Date:** 2026-06-26
**Status:** Approved design, ready for implementation plan
**Scope:** Phase 1 only — capture pipeline + live detail-view screenshots. Jira push is a separate follow-up (Phase 2) that depends on the PNGs this phase produces.

## Problem

Every WBS item (a "ticket") carries a `mockup_ref` like `Seta People.dc.html#dashboard-am-grant` pointing at the related screen in the design mockup. Today the item detail is **text only** (story, acceptance criteria, roles, deps). We want the detail view to also show an **image of the related screen**, and to produce real **PNG files** (not just a live iframe) so a later phase can attach them to Jira issues.

## Key constraints discovered

1. **The mockup fragments are not navigable routes.** `mockup/project/Seta People.dc.html` loads `seta-engine.js`, a JS-driven SPA with **no hash routing**. The `#…` fragments in `mockup_ref` (≈50 unique across 97 refs) are *content blocks within* screens, not URLs. Loading `…#dashboard-am-grant` does nothing.
2. **But the app is drivable.** The engine exposes globals: `window.showModule(mod)`, `window.showTab(tab)`, `window.go(view)` (People only). There are **28 navigable screens**. Rendering is **synchronous** (a ~50ms settle is enough; no fetch/Promise data loads). Persona is set via `<select id="persona">` with values `admin | am | manager | employee`; some screens are persona-scoped.
3. **The mockup needs real HTTP.** It uses `import('./seta-engine.js')` and fetches CSS tokens, so `file://` won't boot it — the capture tool must serve `mockup/project/` over localhost.
4. **The repo is deliberately zero-dependency** (Node ≥26, ESM). The renderer, `build.mjs`, and `serve.mjs` must stay dependency-free. Headless capture has no stdlib equivalent, so the capture tool is the single, isolated place a dependency is introduced.

## Architecture

Three new pieces plus one small renderer change. Each piece has one job and a defined interface.

```
wbs/capture/map.json     hand-authored: fragment → { screen, persona?, actions? }   [INPUT, data]
wbs/capture.mjs          headless tool: drives the mockup, writes PNGs + index.json  [TOOL]
wbs/screens/*.png        generated screenshots, one per unique screen-state          [OUTPUT, committed]
wbs/screens/index.json   generated: fragment → png + { w, h, capturedAt }            [OUTPUT, committed]
        ↓ consumed by
wbs/lib/render.js        detail modal renders the screenshot                          [RENDERER]
```

The renderer / `build.mjs` / `serve.mjs` stay zero-dep. `capture.mjs` is an **offline step**, run only when the mockup changes — not part of `build`.

## Component 1 — The capture map (`wbs/capture/map.json`)

Hand-authored JSON bridging each unique `mockup_ref` fragment to a concrete capture spec. Most entries are one line, derivable from the fragment prefix.

```jsonc
{
  "dashboard-kpi":        { "screen": "people/dashboard" },
  "dashboard-overview":   { "screen": "people/dashboard" },
  "dashboard-scoped-am":  { "screen": "people/dashboard", "persona": "am" },
  "dashboard-scoped-em":  { "screen": "people/dashboard", "persona": "manager" },
  "employees-directory":  { "screen": "people/employees" },
  "employee-profile":     { "screen": "people/employees", "actions": ["openProfile('FA-1000')"] },
  "org-account":          { "screen": "people/org" },
  "pm-portfolio":         { "screen": "project/portfolio" },
  "pm-portfolio-exceptions-detail": { "screen": "project/portfolio", "actions": ["pmExcView='detail'; renderContent()"] },
  "pm-weekly-submit":     { "screen": "project/weekly", "actions": ["openPrqForm()"] }
  // …~50 entries total; the majority have no persona and no actions.
}
```

**Spec fields**
- `screen` (required): `"<module>/<tab>"` — one of the 28 keys (e.g. `people/dashboard`, `project/portfolio`, `hiring/candidates`, `lifecycle/lc_directory`, `ai/chat`).
- `persona` (optional): `admin | am | manager | employee`. Default `admin`.
- `actions` (optional): array of JS snippet strings run in page context *after* nav, *before* screenshot (e.g. open a drawer, set a sub-state). Keep to the documented one-liners; skip anything finicky in Phase 1.

**Dedup & naming.** The output filename is derived deterministically from the resolved spec:
`<module>-<tab>[-<persona>][-<actionsHash>].png` (e.g. `people-dashboard.png`, `people-dashboard-am.png`, `people-employees-profile.png`). Multiple fragments resolving to the same spec share **one** PNG — captured once.

**Coverage gate.** `capture.mjs` cross-checks every `mockup_ref` fragment present in `wbs.json` against `map.json`. Any unmapped fragment is a **hard error** (mirrors the schema validator's anti-"missing-screen" philosophy). The map is the explicit, reviewable record of what each ticket points at.

## Component 2 — The capture tool (`wbs/capture.mjs`)

Run: `node capture.mjs` (add `npm run capture`). Steps:

1. **Serve the mockup.** Start a tiny zero-dep Node `http` static server rooted at `mockup/project/` on an ephemeral port.
2. **Launch headless Chromium** (Playwright), open `http://localhost:<port>/Seta People.dc.html` at a fixed viewport (≈1280×800, deviceScaleFactor 1).
3. **Wait for boot:** poll until `typeof window.showModule === 'function'` and `#content` has children (engine loaded + first screen rendered).
4. **For each unique spec** (deduped): set `#persona` and dispatch `change` → `showModule(mod); showTab(tab)` → run `actions` → 50ms settle → screenshot the `#content` element (clipped to it) → write `wbs/screens/<name>.png`.
5. **Write `wbs/screens/index.json`:** `{ fragment: { png, w, h, capturedAt } }` for every mapped fragment (capturedAt stamped by the tool at runtime, not hard-coded).
6. **Report:** print `N fragments → M unique screens captured, 0 unmapped` (non-zero unmapped = exit 1).

**Dependency:** Playwright with bundled Chromium, as a `devDependency`, used *only* by `capture.mjs`. One-time `npx playwright install chromium`. This is the sole dependency in the repo and is isolated from the runtime renderer.

## Component 3 — Live detail-view integration (`wbs/lib/render.js`)

Image appears in the **mindmap detail modal only** (table view untouched in Phase 1).

1. **Carry the ref into the node.** At `render.js:100`, add to the item node:
   `mockup: it.mockup_ref || screen.mockup_ref || ''` (screen-level fallback, matching `rows.js`).
2. **Load the map.** The page loads `screens/index.json`. `build.mjs` **inlines** it into the static snapshot (consistent with how it already inlines `wbs.json`); `serve.mjs` **fetches** it live alongside the data.
3. **Render in `detailHTML()`.** When the item has a `mockup` fragment that resolves in the map, append after the existing text blocks:
   ```html
   <div class="tt-shot-wrap">
     <img class="tt-shot" src="screens/<png>" loading="lazy" alt="<screen name>">
     <a class="tt-shot-link" href="<mockup_ref full>" target="_blank">open live screen ↗</a>
   </div>
   ```
   Clicking the image opens it full-size; the link opens the live mockup. Add CSS for `.tt-shot` (max-width 100%, rounded, subtle border) in `lib/page.mjs`.
4. **Graceful absence.** If a fragment has no PNG yet (capture not run, or unmapped), the detail renders text-only exactly as today — the image block is simply omitted. No errors.

**Generated assets are committed to git** (like the existing generated `index.html`): `wbs/screens/*.png` and `index.json`. This keeps the static snapshot portable and gives Phase 2 (Jira) the files without re-running capture.

## Out of scope (Phase 1)

- Jira API push / attachment (Phase 2 — depends on these PNGs).
- Table-view thumbnails or hover previews (possible fast-follow).
- Clipping screenshots to the *specific* content block of a fragment (fragments have no stable selectors; we capture the whole screen, which is better ticket context anyway).
- Capturing every one of the 28 screens regardless of references — we only capture screens actually referenced by a `mockup_ref` in `wbs.json`.

## Risks / notes

- **Map authoring is the main upfront effort** — ~50 entries, mostly one line. It's plain reviewable data; prefix patterns (`dashboard-*`, `pm-portfolio-*`, `org-*`, `employee-*`) cover most.
- **Persona/action correctness** is verified by eyeballing the generated PNGs — the whole point of doing the live view first.
- **PNG size:** full-content-height screenshots can be large; a fixed viewport width (~1200) at scale 1 keeps them reasonable. Revisit downscaling only if the committed assets get heavy.
- **Mockup drift:** if `seta-engine.js` changes screen keys or persona logic, `capture.mjs` may nav to the wrong place. The coverage gate catches *missing* fragments, not *wrong* ones — hence the human eyeball pass.
