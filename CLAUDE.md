# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **planning repo**, not an application. It turns the "Seta People & PM" system into a trackable agile Work Breakdown Structure (WBS) for sprint planning and Jira import. Two halves:

- `mockup/` — the **source of truth for screens**: a Claude Design handoff bundle (`mockup/project/Seta People.dc.html` is the entry design; `seta-engine.js` holds the actual screen content/components). Read these to learn what screens/features exist; never invent screens.
- `wbs/` — the WBS data (`wbs.json`) plus a Node renderer that visualizes it as a live D3 mindmap.

The breakdown work itself is driven by the **`wbs-breakdown` skill** (`.claude/skills/wbs-breakdown/`), which orchestrates parallel subagents.

## Commands (all Node ≥26, ESM, zero dependencies)

```bash
cd wbs
node serve.mjs --open      # LIVE map: serves the WBS, auto-updates on wbs.json change (SSE). Watch it populate.
node build.mjs             # validate wbs.json + write a self-contained static index.html snapshot
node build.mjs path.json   # validate/render a different WBS file
# npm run serve | build | validate  — equivalent wrappers
```

There is no test suite. **`build.mjs`/`serve.mjs` ARE the validation gate**: both run `lib/schema.mjs` `validate()` and refuse to build on schema errors (non-Fibonacci points, bad IDs, missing acceptance criteria, uncovered screens, unresolved dependencies). Run `node build.mjs` after any edit to `wbs.json` to verify it.

## WBS schema (v1.0) — the data contract

Authoritative definition: `.claude/skills/wbs-breakdown/references/schema.md`. Mirrored in code by `wbs/lib/schema.mjs`. Hierarchy:

```
Module → Sub-module (= EPIC) → Screen → Item (type: "story" | "enabler")
```

An **Item** is the single estimated, tracked unit: `story` (As a/I want/so that), `acceptance_criteria[]`, Fibonacci `story_points` (1,2,3,5,8,13 only), `roles[]`, `mockup_ref`, optional `notes`, `dependencies[]` (resolved blocker ids, cross-module allowed), `external_deps[]` (a fan-out agent's *unresolved* cross-boundary flag — `{needs, likely_module?, reason}`), `status`. IDs are deterministic and namespaced (`US-M1.1.S1-04`, `EN-M1.1-01`) so parallel agents merge without collision — see the ID table in `schema.md`.

**The PM boundary (do not cross):** the WBS captures only the *what & why*. It MUST NOT contain frontend/backend split (the team is fullstack → vertical slices), `technical_notes` dictating endpoints/components, or sub-tasks. Those are the dev team's job. `notes` is for non-obvious *business* rules only (permissions, validation, computed-value definitions).

## How the breakdown runs (the skill)

`wbs-breakdown` is a 5-phase orchestration; read its `SKILL.md` before invoking. Contract → **Inventory** (one agent parses ALL mockups into the authoritative screen list — the anti-"missing-feature" backbone) → **Fan-out** (one subagent per sub-module, each handed the verbatim `references/decomposition-contract.md`) → **Reconcile** (one agent re-levels story points against the shared anchors, dedupes cross-cutting stories into enablers, **resolves every `external_deps` into a concrete cross-module `dependencies` id and detects cross-module blockers the blind fan-out agents missed**, runs the 100%-rule coverage check + dependency-cycle check) → **Emit** `wbs.json`.

Consistency across parallel agents comes from: the contract injected verbatim, real reference-story anchors for each Fibonacci value (extracted from prior calibrated work), and the reconcile pass as global normalizer. When editing the skill, keep estimation anchored to those examples, not re-derived per agent.

## Renderer architecture

`build.mjs` (static, inlines data) and `serve.mjs` (live, fetch + SSE) share one renderer: `lib/render.js` (browser D3 — `window.WBS.renderWBS`) and `lib/page.mjs` (HTML shell + CSS). Change visuals in those two `lib/` files; both entry points pick it up. `serve.mjs` preserves the user's zoom and expanded/collapsed nodes across live reloads, so re-renders don't jump the view.
