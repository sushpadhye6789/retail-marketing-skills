# Cross-Skill Conflict Protocol

Two skills reasoning from the same `.agents/marketing-strategy.md` should rarely disagree — most cross-channel conflict in retail marketing is two teams (or two skills) each being right about a priority that was never explicitly ranked against the other. This file exists so a disagreement resolves by lookup, not escalation.

## The rule

When two skills' outputs conflict — SEO recommends A, paid recommends B; a promotional depth that helps sell-through but contradicts a brand-tier guardrail — resolve it in this order, and stop at the first one that settles it:

1. **Cite Section 12 (Strategic Priorities).** Whichever recommendation serves the higher-ranked priority for this cycle wins. If one recommendation serves a priority explicitly listed under "Explicitly deprioritized (and why)," it loses regardless of how good the tactic is on its own merits — that's what deprioritization means.
2. **If Section 12 doesn't settle it, cite Section 14 (Brand Tier & Price Positioning) or the distribution-model context.** A tactic that's routine for a budget brand can meaningfully damage a premium one, and a channel-conflict problem (undercutting dealer pricing, a MAP violation) outranks a tactic's standalone performance.
3. **If neither settles it, name the actual disagreement and ask** — plainly state that this is a real conflict between two valid readings of the strategy doc, not one skill being wrong, and let the Head of Marketing make the call. This should be rare; frequent third-tier escalations usually mean Section 12's priorities are too vague or too numerous to actually rank anything.

Do not default to step 3. The whole point of a versioned, ranked Section 12 is that most conflicts are lookups, not meetings.

## Worked example

**Conflict:** `ads` wants to increase paid social spend on a slow-moving SKU to clear inventory before season-end. `commercial-ops` flags that the same SKU sells through a wholesale/dealer channel under a MAP agreement, and a public discount-driven push would undercut dealer pricing.

**Resolution:** Step 2 settles it — distribution-model context (MAP constraint) outranks the standalone merit of the paid-social tactic. The recommendation becomes: clear the SKU through a dealer-facing promotion or a non-public discount channel instead, or confirm with dealers before running anything public.

## Logging a conflict

When a conflict reaches step 3 and gets a human decision, note it in `.agents/marketing-learnings.md` (see `compound-marketing`) — not as a failure, but so the next time a similar conflict surfaces, the resolution is already known and doesn't need re-litigating.
