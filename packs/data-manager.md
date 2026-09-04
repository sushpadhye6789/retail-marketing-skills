# Role Pack: Data / Attribution Manager

One page, not a new skill — a bundle of what already exists, organized around what this role actually owns: making sure the numbers everyone else acts on are actually true.

## The three metrics that matter

1. **Marketing ROMI** = (incremental gross profit − marketing spend) / marketing spend. The number that answers "what did that actually profit," not "how much did we spend."
2. **Attribution variance** — the gap between what a platform claims (Google says 50, Meta says 40, GA says 60) and what's actually true. There is no single target; the job is reconciling the gap and stating which number to trust, not picking the most flattering one.
3. **Strategy citation rate** — the share of skill outputs that actually reference the current `.agents/marketing-strategy.md` version. This is the leading indicator that the rest of the repo's governance (see `AGENTS.md`'s Strategy-First Governance) is actually working, not just documented.

## Skills this role runs

`attribution` (first-touch vs. last-touch reconciliation, incrementality checkpoints), `analytics` (the tracking and measurement layer everything else depends on), `budget-allocation` and `budget-pacing-tracker` (spend vs. plan).

## Tier 2 gates specific to this role

Per `AGENTS.md`: a budget reallocation based on this role's analysis is a Tier 2 action once it's specific enough to act on. This role's own work — pulling data, reconciling numbers, flagging a discrepancy — is Tier 1; the spend decision downstream of it is what needs the gate.

## Weekly rhythm

- **Monday**: Pull last week's attribution reconciliation. Where platforms disagree by a meaningful margin, state which number the team should act on this week and why — don't leave it as an open question.
- **Friday**: Roll up Marketing ROMI across active campaigns. Flag anything where the optimized metric (CTR, CPA, open rate) is moving while the real outcome isn't — see `marketing-loops/references/loop-guardrails.md`'s Goodhart's Law guardrail.

## Cross-department reporting

See `templates/cross-department-update.md` — this role is usually the one translating "what marketing did" into numbers finance actually trusts.

## One win this week

Run `attribution` on your last campaign. Ask directly: "what's the truth between first-touch and last-touch attribution here?" — and write down which one you're going to act on, not just that they disagree.

## Related

- `start-here` — for a full outcome-based route (e.g., "reduce CAC," "improve paid ROMI").
- `CONFLICT.md` — when this role's numbers contradict another team's read of the same campaign.
