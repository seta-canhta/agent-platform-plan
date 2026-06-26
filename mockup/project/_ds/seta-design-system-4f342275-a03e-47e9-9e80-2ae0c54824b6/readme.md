# Seta Design System

The design system for the **Seta Agentic Platform** — an open-source, AI-first, multi-tenant enterprise platform foundation (conceptually a next-gen ERP built for the agentic era). Every business module embeds an agent that reads system state, reasons across domains, proposes concrete transactional actions, and — **only on explicit human approval** — executes them. The UI is built around that loop: a calm, keyboard-first work surface with a human-in-the-loop (HITL) approval gate at its center.

This system is a faithful port of the product's shipped design tokens and component vocabulary. It is **Linear-flavored**: dense, dark-first, hairline-bordered, with a single chromatic accent.

## Sources

Everything here was extracted from the attached codebase (read-only):

- **Codebase:** `agent-platform/` — a pnpm monorepo. GitHub: `github.com/Seta-International/agent-platform`.
- **Authoritative tokens:** `packages/shared-ui/src/styles/tokens.css` (Tailwind v4 `@theme`) — ported verbatim into `tokens/`.
- **Fonts wiring:** `packages/shared-ui/src/styles/fonts.css` (`@fontsource/geist-sans`, `geist-mono`).
- **Global resets:** `packages/shared-ui/src/styles/globals.css`.
- **Components referenced:** `packages/shared-ui/src/primitives/*` (button, badge, input, card…) and `…/composites/*` (top-bar, left-nav, app-shell, chat-*, kanban-card, hitl-card, status-pill, segmented-control…).
- **Product screens referenced:** `apps/web/src/modules/{planner,identity,agent}/…` (planner board, my-tasks, LoginCard).
- **Brand:** `apps/web/public/brand/seta-logo.svg` (full "SETA International" lockup), `apps/web/public/favicon.svg` (globe mark) — copied to `assets/`.
- **Design brief:** `agent-platform/DESIGN.md` (its YAML front-matter is authoritative; its prose body is a stale Linear template and was ignored where it conflicts with `tokens.css`).

> The reader is **not** assumed to have access to these — they are recorded so the lineage is traceable.

---

## Content fundamentals

How Seta writes copy:

- **Voice: calm, direct, operational.** Short declarative sentences. The product talks like a competent teammate, not a marketer. e.g. _"You're all caught up. Nothing is assigned to you right now."_ · _"This approval has expired."_ · _"I left the plan unchanged."_
- **Second person, present tense.** Addresses the user as "you"; the agent refers to itself as "I" in chat ("I found 3 overdue tasks", "I'd reassign…"). System UI avoids "I".
- **Sentence case everywhere** — buttons, headers, nav. Not Title Case. ("New task", "My tasks", "Approve & apply", "Browse plans".)
- **Action labels are verbs.** "Approve & reassign", "Confirm decline", "Continue", "Reset". The primary action restates what will happen.
- **Honest about consequences.** HITL summaries spell out blast radius: _"These changes write to the live plan and notify assignees."_ Risk is tagged (Write / Destructive / External).
- **Helpful, not cute.** Error copy tells you what to do next: _"Ask your admin to invite you."_, _"Too many attempts. Wait a minute, then try again."_
- **No emoji.** Status is carried by colored dots, pills, and icons — never emoji. Numbers and IDs render in mono (`TASK-4821`, `PLAN-07`).
- **Mono for the machine layer.** Tool names, task/plan IDs, keyboard hints, counts, and code all use Geist Mono.

---

## Visual foundations

- **Palette.** One chromatic accent: **Seta blue `#0047FF`** — used only for the primary CTA, focus ring, links, the "current selection" indicator, and the HITL frame. A separate **agentic accent** (violet→blue gradient, `#8b5cf6`→`#2563eb`, always paired with a Sparkles glyph) marks *only* the Agent affordance. Status uses low-saturation semantic tints (success green, warning amber, danger red, info blue). Never introduce a third brand color.
- **Surfaces.** Dark is the default. A four-step ladder lifts hierarchy without shadow: `canvas #010102` (near-black, faint blue tint — never `#000`) → `surface-1 #0f1011` → `surface-2 #181a1d` → `surface-3 #23252a` → `surface-4 #2c2f34`. Light theme (`.theme-light`) is a warm off-white ladder (`#fff → #fafaf9 → #f4f4f3 …`) used for auth and inverse contexts.
- **Borders.** 1px hairlines do the structural work: `hairline #23252a` for cards/dividers, `hairline-strong` for inputs. Cards are hairline-on-canvas, **no shadow** on dark.
- **Type.** Geist for everything (display + body share one voice), Geist Mono for code/IDs/kbd. Display tracks aggressively negative (−3px at 80px); body holds ~−0.05px. Product chrome lives small and calm: **13 / 12 px** on an 8px rhythm. Display weight 600, body 400 — Seta resists 700+ display weights.
- **Spacing.** 4px base; tokens `xxs 4 · xs 8 · sm 12 · md 16 · lg 24 · xl 32 · xxl 48 · section 96`. Card interiors 24px; the agent composer/HITL use 12–16px.
- **Radii.** `xs 4 · sm 6 · md 8 · lg 12 · xl 16`. Buttons & inputs are 8px; cards 12px; the composer and HITL card 16px. **Pill (`9999`) is reserved** for status pills, segmented toggles, and dots — CTAs are never pill-rounded.
- **Elevation.** Carried by surface lift + hairline. Shadows are restrained (`shadow-sm` on board cards only). The signature "lift" is not a drop shadow but a **focus glow**: a 3px `primary-tint` ring (inputs, the HITL card's `0 0 0 4px primary-tint`).
- **Hover / press.** Hover = a step up the surface ladder (`transparent → surface-2`) or the lighter primary (`#1A3CFF`); ghost buttons reveal a `surface-2` fill. Press/active = the darker `primary-focus #022DAD`. No scale/bounce.
- **Motion.** Minimal and fast — 80–150ms ease on color/border/box-shadow. A 1.2s pulse on the "running" tool-call dot and a ping on the system-status dot are the only loops. Everything respects `prefers-reduced-motion`.
- **Imagery.** The product leans on **product-UI density**, not photography. The one illustration asset (`assets/hero.png`) is a glossy violet isometric "stacked layers" mark. Avatars are deterministic pastel initials. No stock photos, no gradients-as-background, no spotlight cards.
- **Density.** Linear-calm: 28–32px control heights, 22–28px avatars, 18px nav rows, 6px gaps between board cards. Information-dense but never cramped — generous 24px section padding.

---

## Iconography

- **Lucide** (`lucide-react`) is the icon system throughout the app — thin 2px strokes, 14–16px in chrome, `currentColor`. Search, Building2, ChevronRight/Left/Down, Sparkles, Bell, Sun/Moon, Paperclip, Send, Check, Clock, Plus, etc. In this design system the UI kit redraws the handful it needs as inline Lucide-style stroke paths (same geometry); when building production-style work, **link Lucide from CDN** rather than hand-rolling.
- **Sparkles is special** — it is the agent's glyph and is the *only* icon ever drawn in the violet→blue gradient. Reserve it for agent surfaces.
- **Priority** is a 12px rounded square in the priority color (not an icon); **status** is a 6–8px dot + label pill.
- **Brand marks** live in `assets/`: `seta-mark.svg` (the globe, used at 20–36px beside a typed "Seta" on dark) and `seta-logo.svg` (full navy "SETA International" lockup, for light backgrounds only). The favicon mark is the globe.
- **Social/footer icons** (`assets/social-icons.svg`) — GitHub, X, Discord, Bluesky symbols, copied from `apps/web/public/icons.svg`.
- **No emoji, no unicode-as-icon.** Keycaps render as mono chips (`KbdHint`).

> Substitution flagged: the product bundles Geist via `@fontsource`; here Geist + Geist Mono load from **Google Fonts** (identical families). Lucide is referenced rather than vendored. If you want the exact `.woff2` binaries or the full Lucide sprite vendored locally, send them and I'll swap them in.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import` list only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `seta-mark.svg`, `seta-logo.svg`, `social-icons.svg`, `hero.png`.
- `readme.md` (this file), `SKILL.md`.

**Foundations** — `guidelines/` (specimen cards on the Design System tab)
- Colors: brand, surface ladder, ink ramp, semantic, task priority.
- Type: display scale, body & UI scale, mono & numerals.
- Spacing: spacing scale, radii, elevation.
- Brand: logo & mark.

**Components** — `components/` (each: `.jsx` + `.d.ts` + `.prompt.md`, one card per group)
- `core/` — Button, Badge, Input, Card, Avatar, StatusPill, SegmentedControl, KbdHint.
- `planner/` — PriorityIcon, LabelChip, KanbanCard.
- `agent/` — ChatMessage, ChatToolCall, ChatComposer, HitlCard.

**UI kit** — `ui_kits/agent-platform/` — interactive recreation: login → app shell → planner board → agent panel with HITL. (`index.html`, `login.jsx`, `app.jsx`, `README.md`.)

Components are reachable at runtime via `window.SetaDesignSystem_4f3422.<Name>` after loading `_ds_bundle.js`.
