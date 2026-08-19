---
name: budget-pacing-tracker
description: "When the user wants to track whether actual spend is on pace against a planned budget within a period, catch over/underspending early, or set up a recurring pacing check. Also use when the user mentions 'budget pacing,' 'spend pacing,' 'are we on pace,' 'burn rate,' 'budget tracking,' 'overspending,' 'underspending,' 'monthly spend pace,' or 'pacing report.' Scope note: budget-allocation decides how much a channel or campaign gets for a period; this skill tracks whether actual spend within that period is tracking to plan at the right rate over time, and flags it early if not. This skill assumes budget-allocation's split already exists — it doesn't re-decide the allocation itself."
metadata:
  version: 1.0.1
---

# Budget Pacing Tracker

You help users track whether actual marketing spend is tracking to plan within a budget period — catching overspend before campaigns exhaust budget early and pause, and catching underspend before opportunity (or a use-it-or-lose-it co-op fund) is wasted.

**Scope note**: `budget-allocation` decides how much each channel/campaign gets for the period. This skill tracks the *rate* of spend against that plan over the course of the period and flags deviations early enough to act on them — it's the operational monitoring layer, not the allocation decision itself.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists, read it — the binding constraint from Section 12 matters here: if budget itself is the binding constraint, pacing discipline is higher-stakes than if it isn't.

Gather this context (ask if not provided):

### 1. The Plan Being Tracked
- What's the period (month, quarter) and the total/per-channel budget from `budget-allocation`?
- Any known spend spikes planned within the period — a `tentpole-campaign`, a `discount-and-clearance` event — that should shape a non-linear pacing curve (see below)?

### 2. Current State
- How far into the period, and what's actual cumulative spend so far?
- Any co-op/MDF funds in this budget with their own use-it-or-lose-it deadlines? See `supplier-funded-marketing`.

### 3. Monitoring Setup
- One-time pacing check, or setting up a recurring one? See `marketing-loops` for the recurring-workflow mechanics if the latter.

---

## The Core Concept

Pacing compares **actual cumulative spend** against **planned cumulative spend** at a point in time within the period — not just "did we spend the total budget," but "are we spending it at the right rate to land on target."

```
Planned pace (naive) = total budget × (days elapsed ÷ total days in period)
Variance = actual cumulative spend − planned cumulative spend at that checkpoint
```

A naive linear plan (spend evenly every day) is the simplest baseline, but it's frequently the wrong one — see Non-Linear Pacing below before treating a flat line as "the plan."

---

## Non-Linear Pacing

Spend shouldn't always be flat across the period. Build the *planned* pace curve to reflect real patterns before comparing actual against it, or you'll get false alarms:

- **Day-of-week and day-of-month effects** — many ecommerce categories see real, predictable swings (weekday vs. weekend, pay-cycle timing) worth reflecting in the plan rather than smoothing away.
- **Planned campaign spikes** — a `tentpole-campaign` or a `discount-and-clearance` event within the period should show up as a deliberate bump in the planned curve, not a "deviation" the tracker flags as a problem.
- **Seasonal ramps** — a category with a strong seasonal pattern (e.g., a holiday ramp) should have a planned curve that reflects it, not a flat average across the period.

---

## Monitoring Cadence and Tolerance

- **Check frequently enough to catch a problem while there's still time to fix it** — daily or weekly, depending on the period length and how fast spend actually moves.
- **Weight tolerance by how far into the period you are.** A 5% variance on day 3 of a 30-day period is likely noise; the same 5% variance on day 25 is a real signal with little runway left to correct. Apply the same discipline `attribution` uses for reading a test honestly — check the trend across several checkpoints, not a single snapshot, before reacting.

---

## Overspend Risk

The most consequential failure mode: campaigns exhaust their allocated budget before the period ends and pause. This isn't just a missed-spend problem — a paused campaign that restarts resets platform learning (see `ads`' decision-system files on why editing/pausing a performing campaign is costly), so catching overspend pace early enough to slow deliberately, or to make the case for additional budget through `budget-allocation`'s reallocation triggers, is worth doing well before the campaign is actually at risk of stopping.

## Underspend Risk

- **Use-it-or-lose-it budgets** — both platform budgets that don't roll over and, especially, co-op/MDF funds with claim deadlines (see `supplier-funded-marketing`) — underspending against an available, already-committed budget wastes real opportunity, not just theoretical upside.
- **Persistent underspend can also signal an execution or capacity problem** (bids set too conservatively, creative supply not keeping pace with what the budget could support — see `ads`' creative-production math) worth surfacing, not just noting.

---

## Month/Quarter-End True-Up

At period close, reconcile actual against planned and feed the result back into `budget-allocation`'s next-period sizing — a pacing history that consistently shows the same channel underspending or overspending its allocation is itself a signal that the allocation, not just the pacing, needs adjusting. Check rollover policy before assuming unspent budget simply carries forward — this varies by platform and, for co-op funds, by the supplier's program rules.

---

## Common Mistakes

- **Assuming a flat linear pace when spend should legitimately spike** around a known campaign — see Non-Linear Pacing; the most common source of false alarms.
- **Reacting to early-period noise** instead of checking the trend across several checkpoints.
- **Not accounting for the learning-phase-reset cost of an overspend-driven pause** — see Overspend Risk; catching this early is worth more than catching it late.
- **Ignoring use-it-or-lose-it co-op fund deadlines** — see Underspend Risk and `supplier-funded-marketing`.
- **No clear escalation path** when pacing deviates significantly — decide in advance who acts on a pacing alert and what the response options are, rather than figuring it out under time pressure.

---

## Task-Specific Questions

1. What period and budget (from `budget-allocation`) is being tracked?
2. Any planned spend spikes within the period that should shape a non-linear pacing curve?
3. Any co-op/MDF funds with their own deadlines in this budget?
4. One-time check or a recurring pacing workflow?
5. What's the escalation path if pacing deviates significantly?

---

## Related Skills

- **budget-allocation**: For the plan this skill tracks against, and where pacing history should feed back into next-period sizing
- **ads**: For the learning-phase-reset cost of an overspend-driven campaign pause
- **tentpole-campaign** / **discount-and-clearance**: For the planned spend spikes that should shape a non-linear pacing curve
- **supplier-funded-marketing**: For use-it-or-lose-it co-op fund deadlines
- **attribution**: For the noise-vs-trend discipline this skill reuses for spend variance
- **marketing-loops**: For setting this up as a recurring, scheduled check rather than a one-off
- **marketing-plan**: For the period-level budget context this skill's tracking sits inside
