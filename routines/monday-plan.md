# Monday Plan

Run at the start of the week via `claude -p` or as the first message of a Monday session. Pulls the current strategy, the active priorities, and each role's Monday check from `packs/` into one short plan — the weekly-rhythm anchor `packs/` route reference throughout their own "Weekly rhythm" sections.

## What to read first

1. `.agents/marketing-strategy.md` — Section 12 (Strategic Priorities) for what's actually the focus this cycle, and the deprioritized list for what's explicitly not.
2. `.agents/marketing-learnings.md`, if it exists — anything logged last week worth acting on before repeating a mistake.
3. Whichever `packs/*.md` file matches the role running this — its "Weekly rhythm" Monday item.

## Generate

A short (under 200 words) plan covering:

- **This cycle's priority** (from Section 12), stated as the one thing that matters most this week if only one thing gets done.
- **This role's Monday check**, from the matching pack — a specific metric threshold to look at, not a vague "check performance."
- **Anything flagged in last week's learnings** that changes how this week's work should start.
- **Any Tier 2 item already pending approval** (see `AGENTS.md`) that's blocking downstream work until it clears.

## What this is not

Not a status report — that's `friday-review.md`. This is a plan for the week ahead, generated in under a minute, so the week starts from the current strategy and last week's lessons instead of from scratch.
