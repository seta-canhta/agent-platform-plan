# WBS Schema

Superset of the existing `seta-wbs.json`, so the current D3 mindmap keeps rendering. Adds the Epic framing, item types, acceptance criteria, dependencies, and status at the item level.

## Hierarchy

```
Module                product area (People / Hiring / Project Monitoring)
└─ Sub-module = EPIC  coherent feature, roadmap/release unit
   └─ Screen          organizing context: roles, mockup ref, sub-screens (UI regions, reference only)
      └─ Item         User Story OR Enabler Task  ← the single estimated, tracked unit
```

## JSON shape

```jsonc
{
  "_meta": {
    "project": "Seta People & PM",
    "version": "1.0",
    "updated": "YYYY-MM-DD",
    "story_format": "As a [role], I want to [action] so that [benefit]",
    "point_scale": [1, 2, 3, 5, 8, 13]
  },
  "out_of_scope": [ { "id": "...", "name": "...", "reason": "..." } ],
  "modules": [
    {
      "id": "M1",
      "name": "People",
      "description": "...",
      "status": "not-started | in-progress | done",
      "sub_modules": [
        {
          "id": "M1.1",
          "name": "Dashboard",          // = EPIC
          "description": "...",
          "status": "...",
          "screens": [
            {
              "id": "M1.1.S1",
              "name": "Org / Workforce Dashboard",
              "description": "...",
              "roles": ["Admin/BOD", "PMO", "AM", "EM/TL"],
              "mockup_ref": "Seta People.dc.html#org-dashboard",  // link to the design
              "sub_screens": [                                     // UI regions — reference only, NOT work items
                { "id": "M1.1.S1.1", "name": "KPI Strip", "description": "..." }
              ],
              "items": [
                {
                  "id": "US-M1.1.S1-01",
                  "type": "story",                       // "story" | "enabler"
                  "title": "View company-wide workforce KPI strip",
                  "story": "As an Admin/BOD, I want ... so that ...",   // enabler: plain statement, no As-a framing
                  "acceptance_criteria": [               // behavioral / testable — NO implementation detail
                    "Given I am an Admin, when the dashboard loads, then the KPI strip shows headcount, utilization %, bench, attrition with sparklines",
                    "Given no data for a metric, when it loads, then an empty state is shown instead of a zero"
                  ],
                  "story_points": 3,                     // Fibonacci only: 1,2,3,5,8,13
                  "roles": ["Admin/BOD"],
                  "mockup_ref": "Seta People.dc.html#kpi-strip",
                  "notes": "AM scope = own accounts only",   // optional — BUSINESS rules only, never how-to
                  "dependencies": ["EN-M1.1-01", "EN-M3.1-01"], // RESOLVED blocker item ids (cross-module allowed)
                  "external_deps": [                          // SUSPECTED needs a fan-out agent can't resolve itself
                    { "needs": "employee workload / allocation data", "likely_module": "M3",
                      "reason": "utilization % is derived from project allocations owned by the PM module" }
                  ],
                  "status": "not-started"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Field rules

- **`type`** — `story` for user-facing value (default, ~95%). `enabler` for shared/foundational technical work with no single-story home (design system, RBAC/scoping middleware, data scaffolding, auth, CI). Enablers are still Fibonacci-pointed and tracked.
- **`story`** — story type: "As a [role], I want [action] so that [benefit]". Enabler: a plain capability statement.
- **`acceptance_criteria`** — observable behavior, Given/When/Then preferred. Define DONE without prescribing endpoints or components. Include the key edge/empty/permission cases.
- **`notes`** — optional, **business context only** (rules, permissions, validation limits, data freshness). Never API/component instructions.
- **`dependencies`** — **resolved** blocker item IDs this item needs first (cross-module allowed, e.g. a People item blocked by a PM enabler). Keep minimal. Maps to Jira "is blocked by". The reconcile phase owns these.
- **`external_deps`** — optional. What a **fan-out agent flags** when a story needs data/capability owned by a module or screen it cannot see (each agent owns only its sub-module, so it is blind across boundaries). Shape: `{ needs, likely_module?, reason }`. These are **unresolved by design** — reconcile converts each into a real `dependencies` id (or a new enabler, or a flagged gap). An `external_deps` left in the final WBS is a warning: reconcile didn't finish.
- **No `technical_notes`, no `sub_tasks`, no FE/BE fields.** Those are the team's, not the WBS's.

### Cross-module blockers — why they need special handling

Fan-out agents work one sub-module each, in parallel, blind to the rest of the system. So a real dependency like *"People's utilization KPI is fed by workload owned by the PM module"* **cannot** be discovered during fan-out — the People agent never sees the PM module. Therefore: fan-out agents record the *suspicion* as `external_deps`; the **reconcile phase** (which sees everything) resolves every `external_deps` into a concrete cross-module `dependencies` id, detects implicit cross-module links the agents missed, and flags dependency cycles.

## ID scheme (deterministic — enables collision-free parallel merge)

| Level | Pattern | Example |
|-------|---------|---------|
| Module | `M{n}` | `M2` |
| Sub-module (Epic) | `M{n}.{m}` | `M2.1` |
| Screen | `M{n}.{m}.S{k}` | `M2.1.S1` |
| Sub-screen | `M{n}.{m}.S{k}.{j}` | `M2.1.S1.3` |
| User Story | `US-M{n}.{m}.S{k}-{nn}` | `US-M2.1.S1-04` |
| Enabler | `EN-M{n}.{m}-{nn}` | `EN-M2.1-01` |

Each fan-out subagent owns one sub-module prefix `M{n}.{m}` and numbers items within it. No two agents share a prefix → merge is a concat.

## Jira mapping

| WBS | Jira |
|-----|------|
| Sub-module | Epic |
| Item (story) | Story |
| Item (enabler) | Task |
| (team adds) | Sub-task |
| story_points | Story Points |
| dependencies | "is blocked by" links |
