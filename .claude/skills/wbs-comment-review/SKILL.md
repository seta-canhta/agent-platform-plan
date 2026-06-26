---
name: wbs-comment-review
description: Use when the user has left comments on WBS items (in the live mindmap modal) and wants an agent to act on that feedback — read every open comment, improve the corresponding item in wbs.json, and mark each comment resolved or unresolved. Triggers on "review the comments", "process my feedback", "run the comment agent".
---

# WBS Comment Review (act on item feedback → improve the backlog)

## Overview

The live mindmap (`node serve.mjs`) lets the user attach **comments** to any WBS item and save them to `wbs/comments.json`. This skill is the other half of that loop: read the **open** comments, improve the items they point at, and close each comment with a one-line verdict. It is the agent the user means by "run agent to review these comments".

**The contract:** you only ever touch comments whose `state == "open"`. Comments already `resolved`, `unresolved`, or `skip` are settled — never re-open, re-evaluate, or rewrite them. That is the user's guarantee that a piece of feedback they (or you) already closed will not come back.

## Data files

- `wbs/wbs.json` — the WBS (the thing you improve). Same schema and **same PM boundary** as `wbs-breakdown` (read `.claude/skills/wbs-breakdown/references/schema.md` and `references/decomposition-contract.md` — they apply verbatim here).
- `wbs/comments.json` — feedback, keyed by item id:

```jsonc
{
  "version": 1,
  "comments": {
    "US-M1.1.S1-01": [
      { "id": "c-ab12cd9", "text": "AC don't cover the empty state.",
        "author": "you", "state": "open",
        "created": "2026-06-26T10:00:00Z", "updated": "...", "agent_note": null }
    ]
  }
}
```

Comment `state`: `open` (new, your queue) · `resolved` (you acted) · `unresolved` (you reviewed but won't act) · `skip` (user parked it — ignore).

## Procedure

1. **Load both files.** Read `wbs/wbs.json` and `wbs/comments.json`. Collect every comment where `state == "open"`. If none, tell the user and stop. Group them by item id.

2. **For each open comment**, find its item (`id` → walk modules → sub_modules → screens → items). Read the comment against the item, then decide:
   - **Act on it** → edit the item *within the PM boundary*: tighten/extend the `story`, fix or add `acceptance_criteria`, re-estimate `story_points` (Fibonacci only: 1,2,3,5,8,13), adjust `roles`, add a business-rule `notes`, or fix a `dependencies` entry. **Never** add technical_notes, endpoints, components, sub-tasks, or a frontend/backend split — that violates the boundary and the comment should instead be declined as out of scope. Then set the comment `state` to `"resolved"`.
   - **Decline it** → if the feedback is out of scope for the WBS (asks for implementation detail), wrong, already satisfied, or needs a human decision, leave the item unchanged and set the comment `state` to `"unresolved"`.
   - Either way, write a **one-line `agent_note`** (≤ ~200 chars) saying what you changed or why you declined, and update `updated` to the current ISO timestamp. This note shows under the comment in the modal.

3. **If acting changes story points**, keep estimates anchored to the reference stories in `wbs-breakdown` (don't re-derive a scale). If a comment forces a cross-item change (e.g. a new shared concern), prefer the `wbs-breakdown` reconcile conventions (enabler + `dependencies`) over duplicating work.

4. **Write back** `wbs/comments.json` (only the touched comments change; preserve everything else byte-for-byte in structure) and the edited `wbs/wbs.json`.

5. **Validate.** Run `node wbs/build.mjs`. It re-validates `wbs.json` against the schema (Fibonacci points, ids, acceptance criteria, dependency resolution, screen coverage) and refuses to build on errors. If it fails, fix the item you just edited and re-run until clean.

6. **Report** a short summary: per comment — item id, `resolved`/`unresolved`, and the one-line note. The live map updates itself over SSE the moment you save `comments.json`, so the user sees the new states and notes without reloading.

## Guardrails

- Touch **only** `open` comments. Do not relabel `skip`/`resolved`/`unresolved`, and do not delete comments.
- Stay inside the PM boundary — if honoring a comment would require dictating *how*, decline it as `unresolved` with a note explaining that it's a dev-team decision.
- One comment → one verdict. Never leave an open comment still `open` after a run; every one you read ends as `resolved` or `unresolved`.
- Don't edit items that have no open comments.
