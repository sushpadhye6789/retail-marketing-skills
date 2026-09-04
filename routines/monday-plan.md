# Monday Plan

Run at the start of the week via `claude -p` or as the first message of a Monday session. Pulls the current strategy, the active priorities, and each role's Monday check from `packs/` into one short plan — the weekly-rhythm anchor `packs/` route reference throughout their own "Weekly rhythm" sections.

## What to read first

1. `.agents/marketing-strategy.md` — Section 12 (Strategic Priorities) for what's actually the focus this cycle, and the deprioritized list for what's explicitly not.
2. `.agents/marketing-learnings.md`, if it exists — anything logged last week worth acting on before repeating a mistake.
3. Whichever `packs/*.md` file matches the role running this — its "Weekly rhythm" Monday item.
4. **On the first Monday of the month only**: check for an open "Skill freshness review" issue (see `AGENTS.md`'s Skill Freshness section and `.github/workflows/skill-staleness-check.yml`, which opens/updates it on that same monthly cadence). This is the mechanism's one real gap — it flags, it doesn't notify — so this is where that gets closed. Skip this check on the other three Mondays; nothing new will have run.

## Generate

A short (under 200 words) plan covering:

- **This cycle's priority** (from Section 12), stated as the one thing that matters most this week if only one thing gets done.
- **This role's Monday check**, from the matching pack — a specific metric threshold to look at, not a vague "check performance."
- **On the first Monday of the month**: whether the "Skill freshness review" issue is open, and if so, which flagged skills (if any) belong to this role — pick one to refresh this cycle rather than letting the list grow unaddressed.
- **Anything flagged in last week's learnings** that changes how this week's work should start.
- **Any Tier 2 item already pending approval** (see `AGENTS.md`) that's blocking downstream work until it clears.

## What this is not

Not a status report — that's `friday-review.md`. This is a plan for the week ahead, generated in under a minute, so the week starts from the current strategy and last week's lessons instead of from scratch.
