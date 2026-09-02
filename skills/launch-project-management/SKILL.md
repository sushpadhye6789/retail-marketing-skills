---
name: launch-project-management
description: "When the user wants to coordinate a launch or major campaign across multiple internal functions (marketing, design, product, regional/local teams) — a workback schedule, a RACI, dependency mapping, or global/regional rollout sequencing. Also use when the user mentions 'launch project management,' 'workback schedule,' 'launch timeline,' 'cross-functional coordination,' 'global rollout,' 'regional launch,' 'localization,' 'launch RACI,' 'who owns what,' or 'align marketing and design.' This is the cross-team coordination layer that sits alongside launch (the marketing mechanics) and new-store-launch (a physical-location opening) — use this when the question is 'who does what, by when, and in what order,' not 'what should we say or when should we announce it.'"
metadata:
  version: 1.0.0
---

# Launch Project Management

You help users coordinate a launch or major initiative across the functions and teams that have to work together to ship it on time — marketing, design, product, and (for a multi-market business) regional/local teams. The marketing mechanics live in `launch`; this skill answers the coordination questions those mechanics assume are already solved: who owns what, what blocks what, and in what order do markets go live.

**Scope note**: this is a coordination layer, not a full project-management platform. It gives you the artifacts (workback schedule, RACI, dependency map, approval gates) and the judgment calls (how to sequence a global rollout, how much to centralize vs. localize) that a launch spanning more than one function or market actually needs. For the marketing content and channel mechanics themselves, see `launch`. For a physical-location opening specifically, see `new-store-launch`. For the annual/quarterly strategic plan this single initiative sits inside, see `marketing-plan`.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. What's Being Coordinated
- A single-market launch spanning multiple internal functions, or a multi-market/global rollout, or both?
- Hard launch date, or a target window still subject to dependencies (production, legal review, regional readiness)?

### 2. Who's Involved
- Which functions have real work on the critical path — marketing, design, product/ops, legal/compliance, regional teams, external agencies/vendors?
- Is there a single owner accountable for the whole initiative, or does it need one assigned as part of this work?

### 3. Markets & Localization (if multi-market)
- Which markets/regions are in scope, and are they launching simultaneously or staggered?
- What genuinely needs to be localized per market (language, currency, regulatory/compliance requirements, payment methods, cultural fit) vs. what can run identically everywhere?

---

## The Coordination Artifacts

A launch spanning multiple functions or markets fails less often from bad ideas than from nobody having built these three things:

### 1. The Workback Schedule
Start from the launch date and work backward, naming what has to be *started* by each milestone — not just what happens on launch day. Every workstream (creative production, localization, legal review, regional readiness, paid media setup) gets its own backward-dated line, because they don't all take the same lead time and the slowest one sets the real deadline for everything downstream of it.

**Build it by:**
1. Listing every workstream with real lead time (design/asset production, copywriting/localization, legal/compliance review, regional operational readiness, paid media trafficking, PR/influencer embargo timing — see `launch`'s Influencer & Press Seeding section for that specific lead time).
2. For each, working backward from launch date by its own realistic lead time (not the optimistic one) to find its start date.
3. Flagging the workstream with the latest required start date as the **critical path** — the one that, if delayed, delays the whole launch regardless of how ready everything else is.

### 2. The RACI
Name who's **R**esponsible (does the work), **A**ccountable (owns the outcome — one person, not a committee), **C**onsulted (input needed before a decision), and **I**nformed (told after) for each major decision and deliverable. A launch RACI's most common failure is having two people who both think they're Accountable for the same thing, or zero people who are — both produce the same result: nothing ships on time and nobody feels responsible for why.

`marketing-plan`'s Section 13 already builds a RACI for the broader marketing plan this initiative sits inside — this skill's RACI is initiative-specific and more granular (day/week-level, not quarter-level), and should stay consistent with that broader one rather than contradict it.

### 3. The Dependency Map
Name what blocks what, explicitly — not just a flat task list. The common real chains: design assets block localization → localization blocks regional legal/compliance review → review blocks regional launch readiness → readiness blocks that market's go-live date. A flat list hides this; a dependency map makes it visible before the chain breaks something on launch week.

---

## Approval Gates: What Proceeds vs. What Needs Sign-Off

Not every launch decision needs the same level of approval, and treating them identically either slows down everything (approval-fatigue on trivial items) or lets something genuinely risky slip through unreviewed. Split work into two tiers explicitly, adapted from the autonomous/gated task split used in this repo's `ai-cmo-os` orchestration model — the same principle, applied to a human cross-functional team instead of an AI agent pipeline:

**Proceeds without a sign-off gate:**
- Asset production and copy drafts within established brand guidelines (see `brand-guidelines`)
- Internal reviews and iteration within a function
- Standard-market localization following an already-approved template

**Needs explicit sign-off before proceeding:**
- Pricing or claims with legal/compliance exposure in any market (see `compliance`)
- The launch date itself, once committed — a slip has cross-functional and often cross-market consequences
- Any market-specific exception to the brand/legal template (a claim that can't run as-is in one market and needs a local variant)
- Budget commitments above the initiative's pre-agreed threshold
- PR/influencer embargo timing (a broken embargo damages relationships beyond this one launch — see `public-relations`)

**Name these explicitly in the workback schedule and RACI** rather than leaving them implicit — an unnamed gate is the one that gets skipped under launch-week time pressure.

---

## Global & Regional Rollout Sequencing

For a multi-market launch, the sequencing decision is as consequential as the content itself:

- **Simultaneous global launch**: maximum impact and coordinated press/PR, but every market's readiness (localization, legal, regional team capacity) has to clear at once — the slowest market sets the date for everyone. Only run this when markets are genuinely close to equally ready.
- **Staggered/waved rollout**: launch in the most-ready or highest-priority market(s) first, apply what's learned, then roll to the next wave. Lower coordination risk, and real learnings (what messaging landed, what broke operationally) feed forward into later waves — the same "learn small, then scale" logic `launch`'s five-phase approach applies within a single market, applied here across markets.
- **Hub-and-local**: a global campaign framework and asset library built centrally, with each region adapting timing, specific claims, and channel mix to local conditions. This is the most common real pattern for an established multi-market retailer.

**Centralize what should be centralized, localize what should be localized** — the same principle `local-marketing`'s Multi-Location Coordination and `new-store-launch`'s Multi-Location Rollouts sections apply to physical locations, applied here to markets/regions:
- **Centralize**: brand identity and guidelines, the core campaign concept, legal/compliance review process, the master asset library.
- **Localize**: language, specific claims and pricing, launch timing (accounting for local seasonality/holidays), channel mix (a channel that dominates in one market may be marginal in another), and any culturally-specific messaging or imagery.

**Context boundaries matter here too**: give each regional/functional team only the context relevant to their piece (their market's brief, their function's deliverables and deadlines), not the entire global plan undifferentiated — the same discipline `ai-cmo-os`'s context-boundary principle applies to prevent an AI agent's context from drifting applies just as well to a human team's attention: a regional marketer buried in an 80-page global deck misses their own actual deadlines.

---

## Status & Escalation Cadence

- **A single source of truth** for the workback schedule, RACI, and dependency map — not a version living in one function's private doc and a stale copy everyone else references.
- **A standing check-in cadence** proportional to how close the launch is — further out, weekly is enough; inside the final 2-3 weeks, a shorter cadence (or a daily async status) catches slippage while there's still time to react.
- **A named escalation path** for when a dependency is at risk — who gets told, and how fast, when a workstream on the critical path is slipping. Waiting until the weekly check-in to surface a critical-path risk often means it's too late to recover the date.
- **Post-launch retro feeding `.agents/marketing-learnings.md`** (see `compound-marketing`) — which workstream was actually the critical path, which lead-time estimate was wrong, which approval gate caused unexpected delay. The next multi-function or multi-market launch should start from this, not from zero.

---

## Common Mistakes

- **Building the workback schedule from launch day forward** instead of backward from it — forward planning hides which workstream is actually the long pole.
- **A RACI with two Accountable owners for the same deliverable**, or none — both produce the same outcome.
- **Treating every approval as equally weighted** — either approval-fatigue on trivial items, or a genuinely risky item slipping through unreviewed because it wasn't flagged as a gate.
- **Simultaneous global launch when markets aren't actually equally ready** — the least-ready market silently sets everyone else's date, or ships anyway and underperforms.
- **No named escalation path**, so a critical-path risk surfaces at the weekly check-in instead of the day it was known.
- **No retro/learnings capture**, so the next launch re-discovers the same lead-time and dependency mistakes.

---

## Task-Specific Questions

1. What's the launch date, and is it firm or still dependent on readiness?
2. Which functions and, if applicable, which markets have real work on the critical path?
3. Is there a single accountable owner for the whole initiative?
4. For a multi-market launch: simultaneous, staggered, or hub-and-local?
5. What decisions/deliverables genuinely need a sign-off gate, vs. what can proceed on established guidelines?
6. What's the check-in cadence, and who owns escalating a critical-path risk?

---

## Related Skills

- **launch**: The marketing mechanics (messaging, channels, phases) this skill's coordination artifacts support — use both together for a multi-function or multi-market launch
- **new-store-launch**: For a physical-location opening specifically, including its own multi-location rollout sequencing pattern
- **marketing-plan**: For the broader annual/quarterly plan and its own Section 13 RACI, which this initiative-level RACI should stay consistent with
- **tentpole-campaign**: For a major brand campaign tied to a calendar moment, which uses the same cross-functional coordination discipline
- **local-marketing**: For the corporate-template-vs-local-flexibility principle this skill applies at the market/region level
- **brand-guidelines** / **brand-management**: For the centralized brand standard regional/functional teams work within
- **compliance**: For the legal/regulatory sign-off gates that vary by market
- **public-relations**: For embargo timing as a specific sign-off-gated dependency
- **compound-marketing**: For capturing post-launch learnings into `.agents/marketing-learnings.md`
- **ai-cmo-os**: The autonomous/gated task-tiering and context-boundary principles this skill adapts from an AI-agent orchestration model to a human cross-functional team
