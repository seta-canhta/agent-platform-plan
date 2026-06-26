# Sprint & Backlog Tracking — Design

**Date:** 2026-06-26
**Status:** Approved (pending spec review)
**Topic:** Add a `sprint` field to WBS items and a new Backlog page that shows items filling into sprints, with inline quick-editing of status / assignee / sprint.

## Problem

The WBS captures *what & why* and is estimable, but there is no way to track how
items flow into sprints for execution. We need:

1. A `sprint` value on each item (the thing pushed to the Jira ticket).
2. A **Backlog page** that groups items by sprint so you can see each sprint
   filling up (item count + point subtotal per sprint).
3. **Quick inline editing** of an item's **status**, **assignee**, and **sprint**
   — available both on the Backlog page rows and directly in the map-view modal,
   without opening the modal's full edit form.

## Decisions (from brainstorming)

- **Sprints are NOT first-class.** No central sprint list, no capacity, no dates.
  `sprint` is a **plain free-text string** on each item. Empty / absent =
  unscheduled (Backlog). This keeps it Jira-friendly and zero-ceremony.
- **No milestones.** Out of scope — only the sprint matters.
- **Backlog layout = sprint-grouped table**, reusing the existing table
  machinery (`toRows` + collapsible module-style bands), not a kanban board.
- **Assignment = interactive dropdown, live-saved** through the existing `/item`
  endpoint. Static snapshot renders the controls read-only.
- **Inline quick-edit lives in two places:** Backlog rows AND the modal body
  (outside the edit form). The existing Table view stays read-only.

## The PM boundary

`sprint` is execution/tracking metadata, not a frontend/backend split or a
sub-task, so it stays within the WBS's "what & why" boundary as a planning
attribute — comparable to the existing `status` and `assignee` fields.

## Data model

A new optional field on every **item**:

```jsonc
{
  "id": "US-M1.1.S1-04",
  "...": "...",
  "sprint": "Sprint 1"   // free text. "" or absent = unscheduled (Backlog)
}
```

- No change to IDs, hierarchy, or any other contract.
- Schema (`lib/schema.mjs` `validate`): if `sprint` is present it must be a
  string; otherwise it's a (non-blocking) error. No enum, no Fibonacci-style
  constraint. Does not affect coverage / dependency / cycle checks.
- The set of sprints in use is **derived** at render time = the distinct
  non-empty `sprint` strings across all items.

## Components & surfaces

The renderer already splits cleanly into shared `lib/` modules consumed by both
`build.mjs` (static) and `serve.mjs` (live). Each surface below names the file it
touches.

### 1. `lib/schema.mjs` — validation
- In `validate()`, after the existing item checks, add: if `it.sprint` is present
  and not a string → push an error (`item <id>: sprint must be a string`).
- Nothing else in schema changes.

### 2. `lib/rows.js` — shared row shaping (table + export + backlog)
- Add a `sprint` field to each emitted row: `sprint: it.sprint || ''`.
- Add a **Sprint** column to the `COLUMNS` contract so it appears in the Table
  view and flows automatically into the Excel/Jira export
  (`{ key: 'sprint', label: 'Sprint', kind: 'text', width: 14 }`), placed near
  `status`.
- `toRows` already returns `{ columns, rows, modules, total }`; no signature
  change. The backlog page consumes the same `rows` and re-groups them.

### 3. `lib/backlog.js` — NEW client script → `WBS.renderBacklog(data)`
- Fills `#backlog-container` (a new host, styled like `#table-container`).
- Calls `WBS.toRows(data)` and **re-groups rows by `row.sprint`**:
  - First band: **"Backlog (unscheduled)"** = rows with empty sprint.
  - Then one band per distinct sprint, **natural-sorted** by name
    (`"Sprint 2" < "Sprint 10"`).
  - Band header shows: name · item count · Σ points (mirrors the table's module
    bands, including collapse/expand).
- Each row shows the item essentials (WBS code, id, type, title, story points,
  roles, screen) **plus three inline controls**: Status ▾, Assignee ▾, Sprint ▾
  (see §5).
- Search box filters rows (id / title / story / roles / screen / sprint),
  reusing the table's filter approach. When searching, grouping flattens like the
  table does.
- Exposes `window.WBS.renderBacklog`.

### 4. Inline quick-edit controls (shared behavior)
A small shared helper builds the three `<select>`s and wires their `change`
handlers to POST `/item`:
- **Status** — options: `not-started`, `in-progress`, `done`, `blocked`.
- **Assignee** — `— Unassigned —` + names from `assignees` (set via
  `WBS.setAssignees`).
- **Sprint** — `Backlog (none)` (clears) + each distinct in-use sprint +
  `＋ new sprint…` which `prompt()`s for a name and patches with it.
- On change: `fetch('/item', { method:'POST', body:{ id, patch } })`. The server
  validates, writes `wbs.json`, and broadcasts over SSE → every client (map,
  table, backlog) re-renders. Reuses the existing `/item` path entirely.
- **Live gating:** controls are interactive only when `liveMode` is true
  (`WBS.setLive(true)`, set only by `serve.mjs`). In the static snapshot they
  render **disabled** (read-only), the same way comments are read-only there.
- To avoid drift, this helper is the single source for status/assignee/sprint
  option HTML, used by both the backlog rows and the modal quick-edit (§5).

### 5. `lib/render.js` — modal quick-edit + data model
- The modal body gains a **quick-edit strip** (status / assignee / sprint
  selects) shown in the main detail view, **outside** the existing full edit
  form, so you can change these three fields without entering edit mode. Uses the
  same shared control helper and the same `/item` POST as today.
- The full edit form additionally gains a **Sprint** field for completeness
  (alongside its existing status/assignee).
- The item hierarchy mapping that feeds the modal/tooltip carries `sprint`
  through (so the modal can show/preselect the current sprint).
- `setLive` / `setAssignees` already exist and are reused unchanged.

### 6. `lib/page.mjs` — shell, nav, styles, script list
- `body(view, nav)`: add a third nav item →
  `◰ Mindmap · ▦ Table · ▥ Backlog`, `nav` becomes
  `{ mapHref, tableHref, backlogHref }`, active class driven by `view`.
- Add `<div id="backlog-container"></div>` and `body.page-backlog` show/hide
  rules mirroring the table view.
- Add CSS for the inline `<select>` controls and (mostly reuse) the band/table
  styles.
- `CLIENT_SCRIPTS`: add `/backlog.js` after `/table.js`
  (`['/rows.js', '/render.js', '/table.js', '/export.js', '/backlog.js', '/app.js']`).
- `assemble(...)` accepts `view: 'backlog'` and the extended `nav`.

### 7. `serve.mjs` — live route + persist sprint
- `applyItemPatch`: whitelist `sprint` —
  `if ('sprint' in patch) { const s = String(patch.sprint||'').trim(); if (s) it.sprint = s; else delete it.sprint; }`
  then the existing re-validate + write + SSE broadcast applies.
- Add route `/backlog` (and `/backlog.html`) → assemble with `view:'backlog'`.
- `SERVE_NAV` gains `backlogHref: '/backlog'`.
- `BACKLOG_BOOT = makeBoot('WBS.renderHeader(payload.data, payload.stats); WBS.setData(payload.data); WBS.setAssignees(payload.assignees); WBS.setLive(true); WBS.renderBacklog(payload.data)')`.

### 8. `build.mjs` — static snapshot
- Extend the `nav` object with `backlogHref: 'backlog.html'`.
- Emit `backlog.html` alongside `index.html` / `table.html`, using a backlog
  boot (no `setLive(true)` → read-only controls), inlining `assignees` as today.

## Data flow

```
edit (backlog row OR modal quick-edit)
   → POST /item { id, patch:{ status|assignee|sprint } }
   → serve.mjs applyItemPatch → validate → write wbs.json
   → fs.watch fires → SSE "data" broadcast
   → every open page re-fetches /data and re-renders
```

Static snapshot has no server: controls are disabled; planning is done live or by
editing `wbs.json` (an agent can bulk-assign sprints there and the build picks it
up).

## Error handling

- `/item` already returns `{ error }` on validation failure; inline controls
  surface failures via the existing flash/error channel and revert the select to
  its prior value on a non-OK response.
- Unknown assignee is already rejected server-side; sprint is free text so it
  cannot fail validation beyond the string-type check.
- Snapshot (no server): `fetch('/item')` is never wired because controls are
  disabled in non-live mode.

## Testing / verification

No unit-test suite exists; the validation gate is `node build.mjs`.

- `node build.mjs` must pass with `sprint` present on items and emit three pages
  (`index.html`, `table.html`, `backlog.html`).
- Manual: `node serve.mjs --open` → open `/backlog`; confirm bands group by
  sprint with correct subtotals; change status/assignee/sprint inline and in the
  modal quick-edit; confirm `wbs.json` updates and all open tabs refresh live;
  confirm "＋ new sprint…" creates a new band.
- Confirm the static snapshot's controls render disabled.

## Out of scope (YAGNI)

- Central sprint definitions, capacity, dates, burndown.
- Milestones.
- Drag-and-drop kanban.
- Inline editing on the existing Table view (stays read-only).
- Multi-item bulk sprint assignment UI (an agent editing `wbs.json` covers bulk).
