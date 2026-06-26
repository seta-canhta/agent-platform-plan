# Decomposition Contract — hand this to every fan-out subagent VERBATIM

You are decomposing **one sub-module** of a system into a trackable agile backlog. Other agents are doing other sub-modules in parallel under identical rules. Follow this contract exactly so all output is consistent and merges cleanly.

## Your inputs (the orchestrator fills these in)

- **Assigned sub-module:** `{id}` `{name}` — own the ID prefix `{M n.m}`.
- **Screens in your sub-module** (from the authoritative inventory): `{screen list with ids, roles, sub-screens}`.
- **Mockup content** for those screens.

## Your output

A JSON fragment: the sub-module object with its `screens[]`, each screen carrying an `items[]` array. Schema and ID scheme are in `schema.md`. Emit nothing outside your prefix.

## How to slice (granularity must match every other agent)

1. **One item per role × capability per screen.** A screen viewed by 3 roles with scoped data usually yields ≥3 stories (one per role), plus action stories (edit, request, acknowledge, export).
2. **Vertical slices only.** Each story delivers user-visible value end-to-end. Never split into frontend/backend — this is a fullstack team.
3. **Apply INVEST.** Each story must be Independent, Negotiable, Valuable, Estimable, Small, Testable. If it fails "Small" or "Estimable," split it.
4. **Split big items with SPIDR:** by **role** (scoped views), by **workflow step**, by **business-rule variation**, by **data variation**, or carve off a **spike**. Anything ≥8 must be examined for splitting.
5. **Enablers:** if a screen needs shared foundational work with no single-story home (RBAC/scoping, shared chart library, data scaffolding, auth, audit logging), emit it as `type: "enabler"` at the sub-module level (`EN-{Mn.m}-{nn}`). Do NOT invent infrastructure that isn't implied by the mockups.

## What each item MUST contain

- `story` — "As a [role], I want [action] so that [benefit]" (enabler: plain statement).
- `acceptance_criteria` — 2–5 Given/When/Then lines describing observable behavior. **Cover the key empty/error/permission cases.** Define DONE. **Never name an API, endpoint, table, or component** — the dev derives those from the mockup.
- `roles`, `mockup_ref`, `status: "not-started"`.
- `dependencies` — only ids **inside your own sub-module** that you can actually see. Keep minimal. Never guess an id from another module.
- `notes` — only if there's a non-obvious **business rule** (permission scope, validation limit, computed-value definition, data freshness). Otherwise omit.

## Flagging cross-boundary needs (you are blind outside your sub-module)

You only see your own sub-module. When a story needs **data or capability that another module/screen owns**, do NOT invent a dependency id and do NOT build that capability yourself. Record the suspicion in `external_deps` and move on — the reconcile phase (which sees the whole system) will resolve it.

```jsonc
"external_deps": [
  { "needs": "employee workload / allocation data",   // what's missing, in plain words
    "likely_module": "M3",                              // your best guess (optional)
    "reason": "utilization % comes from project allocations the PM module owns" }
]
```

Trigger words that mean "flag an external_dep": *workload, allocation, utilization, headcount, billing, permissions/roles defined elsewhere, audit, notifications, anything computed by another team's screen.* Example: a People utilization KPI almost always depends on workload owned by the PM module — flag it, don't fake it.

## What you MUST NOT produce

- No frontend/backend tasks. No `technical_notes`. No sub-tasks. No endpoint/component/table names anywhere.
- No items outside your assigned ID prefix.
- No re-numbering of screens — use the inventory's IDs.

## Estimating — by analogy to these anchors, never from scratch

Pick the point value of the closest anchor. When between two, round to the lower unless it clearly carries more logic/steps.

| SP | Meaning | Anchor |
|----|---------|--------|
| 1 | Trivial single action or pure system side-effect | "Click an employee row to open their profile drawer"; "System logs account-creation to the audit trail" |
| 2 | Scoped variation of a capability that already exists elsewhere — mostly reuse | "View account-scoped workforce metrics as AM"; "View project-scoped metrics as EM/TL" |
| 3 | **DEFAULT.** One standard self-contained view or action with a few elements | "View company-wide KPI strip"; "Acknowledge my performance review"; "Request scoped access to an account" |
| 5 | Richer analytical view (multiple data series) or a multi-field edit; moderate logic | "Identify skill gap & critical roles"; "Review 6-month headcount forecast"; "Edit an employee's manager/account/project/grade" |
| 8 | Multi-step workflow with side-effects or integration, or scoring across many weighted dimensions — **must consider splitting first** | "Create account + provision MS365/Teams + send invite"; "Evaluate a team member across all weighted pillars" |
| 13 | Too large to estimate confidently — **split it**, do not emit a 13 unless splitting is genuinely impossible | — |

Use **1, 2, 3, 5, 8, 13 only.** Never 4, 6, or 7. Your distribution should center on 3; if most of your items are 5+, you are under-splitting.

## Self-check before returning

- Every screen in your assignment has ≥1 item. Every sub-screen (UI region) is covered by some item.
- Every item is a vertical slice, passes INVEST, has AC with edge cases, and a Fibonacci point anchored to the table above.
- No implementation detail leaked into any story, AC, or note.
- Any reliance on another module is recorded as `external_deps`, never as a guessed `dependencies` id.
- All IDs are inside your prefix and follow the scheme.
