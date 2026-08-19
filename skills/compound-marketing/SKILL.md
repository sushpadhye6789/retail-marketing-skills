---
name: compound-marketing
description: "When the user wants to run a marketing unit of work — a campaign, page, email, ad, or launch — so that it makes the next one easier instead of starting from scratch. Also use when the user mentions 'compound marketing,' 'compounding engineering for marketing,' 'brief draft execute analyse optimise,' 'marketing learnings,' 'don't repeat the same mistake,' 'apply what we learned,' 'marketing operating system,' or wants briefing, drafting, execution, analysis, and optimization tied together across channels/skills instead of run as disconnected one-offs. This is the general work loop for any marketing unit — one-off or recurring. For the scheduling/automation mechanics of running this loop on a cadence, see marketing-loops. For the rigorous, statistically-driven version of the Optimise stage specifically, see ab-testing."
metadata:
  version: 1.1.1
---

# Compound Marketing

**Each campaign, page, email, or ad should make the next one easier to get right — not force you to relearn the same lesson.**

Most marketing work is run as a series of one-offs: brief a campaign, draft it, ship it, glance at the numbers, move on. The result compounds too — just in the wrong direction. The same weak hook gets retested eighteen months later because nobody wrote down that it flopped. The same "we discounted too early" mistake repeats every clearance cycle. Knowledge that should accumulate instead evaporates at the end of every campaign.

This skill closes that loop. It's the marketing translation of **compounding engineering**: plan thoroughly, execute cleanly, review honestly, and — the step almost everyone skips — **codify what you learned so the next cycle starts smarter**, not from zero.

## The Loop

**Brief → Draft → Execute → Analyse → Optimise → Compound.** Six stages, one non-negotiable: the last one.

| Stage | What happens | Skills it orchestrates |
|-------|---------------|-------------------------|
| **Brief** | Define the outcome metric (the real one, not a proxy), audience, channel, and constraints. Read `marketing-strategy` and the learnings file (below) first — don't brief blind. | `marketing-strategy`, `marketing-ideas` (if starting from nothing), `growth-playbooks` (if reaching for a proven, compounding loop mechanic rather than a one-off tactic), `specialist-lenses` (if a narrow-domain specialist's framework fits the problem), `customer-research` |
| **Draft** | Produce the actual asset. | `copywriting`, `ad-creative`, `emails`, `social`, `pos-marketing`, `sms`, or whichever channel skill fits |
| **Execute** | Stage for approval and ship. Never auto-publish without explicit authorization — see `marketing-loops`' two-tier action model (`references/loop-guardrails.md`) for the Tier 1 (autonomous-safe) vs. Tier 2 (gated) split. | The channel skill's own publishing step, `marketing-council` (Boardroom mode) as an optional pre-ship pressure-test |
| **Analyse** | Read what actually happened — the outcome metric from Brief, not whatever's easiest to pull. | `analytics`, `attribution` (apply the incrementality checkpoint — would this have happened anyway?) |
| **Optimise** | Decide: keep, kill, or iterate. Judge on the outcome metric, not a proxy that moved for the wrong reason — see the Goodhart's Law guardrail in `marketing-loops/references/loop-guardrails.md`. | `cro`, `copy-editing`, `ab-testing` (for a rigorous, statistically-valid version of this stage) |
| **Compound** | Write the lesson to the learnings file *before* moving on. This is the step that makes the next Brief faster and better instead of a cold start. | — this skill |

The **Compound** stage is what distinguishes this from just doing the work well once. Skip it and you get five good campaigns in a row that don't add up to anything. Do it and campaign #40 opens already knowing what campaign #12 proved.

## How to Use This Skill

1. **Read grounding first.** Before drafting a brief, read `.agents/marketing-strategy.md` (foundation: who we are, who we sell to), `.agents/marketing-learnings.md` (what's already been tried and proven, in this channel or an adjacent one), and `.agents/expert-notes.md` if it exists (personal operating principles and specialist-sourced judgment, kept private and gitignored — never repo content). None existing yet isn't a blocker — note it and proceed, but say so.
2. **Write the Brief.** Name the outcome metric explicitly, and name it as an outcome, not a proxy (revenue/retention/qualified reach — not "clicks" or "posts published"). If a past learnings entry is directly relevant, cite it in the brief instead of re-deriving it.
3. **Draft**, using the channel skill that fits. Cross-reference the Related Skills list of whichever channel skill you're in — this loop doesn't replace those skills, it sequences them.
4. **Execute** through a human checkpoint for anything that spends or publishes, per the two-tier action model. Drafting and staging are always safe; publishing and spending are gated by default.
5. **Analyse** against the Brief's outcome metric once there's enough signal to be real — not on day one, and not by declaring victory on a metric the Brief didn't name.
6. **Optimise**: keep scaling what worked, kill what didn't, and be honest when the answer is "inconclusive, need more signal" rather than forcing a verdict.
7. **Compound — always, even on a loss.** Append an entry to `.agents/marketing-learnings.md` using `references/learning-entry-template.md`. A campaign that failed and got written up is worth more to the next cycle than one that succeeded and left no trace.

## When NOT to Run the Full Loop

Not every unit of work earns all six stages:

- **A small, reversible tweak** (fixing a typo, adjusting one word of ad copy already in flight) can skip straight to Draft → Execute. Don't brief a comma fix.
- **Anything with real budget, reach, or brand exposure** should go through Brief at minimum, and always through Compound — that's exactly the work worth not repeating badly.
- **A recurring check** (weekly ranking scan, ad-fatigue watch) is this loop running on a schedule — hand it to `marketing-loops` rather than re-running Brief from scratch every time. `marketing-loops`' nine-part loop anatomy (cadence, acts-when, self-check, state) is the scheduling layer; this skill is the work-shape underneath it.
- **A single A/B test in isolation** is the Optimise stage done rigorously — go straight to `ab-testing` when that's the whole task.

## The Learnings File

Canonical path: **`.agents/marketing-learnings.md`**. One growing document, newest entries first — the same pattern `marketing-strategy.md` already uses for its own Changelog, so it's one convention across the repo, not two.

**If it doesn't exist yet**, create it on the first Compound step with a one-line header (`# Marketing Learnings` + a short description of what this file is and that every marketing skill should check it before starting new work) and the first entry.

**Every Brief stage should skim it first** — not the whole history, just entries tagged to the same channel or a closely adjacent one. A learnings file nobody rereads is worse than not having one: it creates the appearance of institutional memory without the substance. If the file is getting long enough that skimming is slow, that's a signal to prune stale or superseded entries (note the supersession, don't just delete silently) rather than to stop reading it.

See `references/learning-entry-template.md` for the entry format, fill-in prompts, and a worked example.

## The Expert Notes File

Canonical path: **`.agents/expert-notes.md`** — always gitignored (`.agents/` is excluded repo-wide), never committed. This is where personal operating principles and specialist-sourced judgment live: takeaways from a paid subscription (in your own words — never the specialist's paywalled content itself, which is copyrighted and not yours to redistribute) alongside accumulated operating rules that aren't documented anywhere else in this repo.

This is distinct from the learnings file: `marketing-learnings.md` records what happened when *you* ran something through this loop; `expert-notes.md` records judgment you're bringing in from outside it. Both get read at Brief time, but only the learnings file gets written to by this skill's Compound stage — the expert notes file is maintained by you directly, on your own schedule, whenever you read something worth applying.

## Guardrails Carried Over From `marketing-loops`

This loop reuses guardrail thinking already established there rather than inventing a second version:

- **Two-tier action model** — draft and stage freely; spend, publish, and send need a human checkpoint unless explicitly authorized with caps.
- **Goodhart's Law** — the metric in the Brief is the one the Optimise stage judges against. If the loop starts moving a proxy (CTR, post count, open rate) while the real outcome (revenue, retention, qualified reach) stalls or drops, that's a Compound entry in itself — write down what the proxy was hiding.
- **Escalate divergence, don't self-correct silently** — if Analyse turns up something that contradicts the Brief's premise (the audience was wrong, the channel doesn't reach who you thought), that's worth a human checkpoint before Optimise, not a quiet pivot.

## Anti-patterns

- **Running Draft → Execute → done.** Skipping Analyse and Optimise means you never find out if it worked. Skipping Compound means even a win teaches the org nothing.
- **A learnings file nobody reads.** Writing entries is half the point; the other half is the next Brief actually citing them. If entries pile up unread, the loop isn't compounding — it's just logging.
- **Briefing on a proxy metric** because it's the easiest one to pull. Name the real outcome even when it's harder to measure early — see the Goodhart's Law guardrail above.
- **Treating every task as loop-worthy.** A comma fix doesn't need a Brief. Reserve the full loop for work with real budget, reach, or repeatability.
- **Declaring a verdict on thin signal** just to close the loop. "Inconclusive — rerun with more traffic" is a legitimate Optimise outcome and belongs in the learnings file too.

## Related Skills

- **marketing-strategy**: The foundational context every Brief reads first — who we are, who we sell to, strategic priorities.
- **marketing-loops**: The scheduling and automation layer for running this loop on a cadence, with its own state/idempotency and the guardrails this skill reuses.
- **ab-testing**: The rigorous, statistically-driven version of the Optimise stage specifically — use it directly when the whole task is one experiment.
- **marketing-council**: Boardroom mode is a natural pre-Execute gate — a multi-advisor review of the finished Draft before it ships.
- **marketing-ideas**: A good input to Brief when starting from nothing rather than from a known gap.
- **growth-playbooks**: A good input to Brief when the goal is a proven, compounding growth mechanic (a referral loop, a flywheel, a loyalty program) rather than a one-off tactic — pick the mechanic there, run it through this loop.
- **specialist-lenses**: A good input to Brief when a narrow-domain specialist's public framework (CRO, AI search, loyalty, retail media, and a growing roster) applies directly to the problem.
- **analytics** / **attribution**: The Analyse stage's toolkit — measurement setup and the incrementality checkpoint (would this have happened anyway?).
- **cro** / **copy-editing**: Common Optimise-stage actions once a real gap is identified.
