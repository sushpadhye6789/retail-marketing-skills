---
name: autoresearch
description: "When the user wants to generate many variants of conversion copy and pick a strong starting candidate before spending real traffic on it — a product page headline, an email subject line, ad copy, SMS copy, or a signup/form page. Also use when the user mentions 'autoresearch,' 'run autoresearch,' 'generate variants,' 'optimize this headline,' 'score these variants,' 'which version is stronger,' or wants a fast, simulated-panel read on copy before a real test. This is NOT a substitute for ab-testing — it picks a pre-launch candidate; ab-testing measures it against real traffic. The panel's score is a simulated signal, not a result — a human always reviews and approves the winner before anything ships; nothing from this skill auto-publishes."
metadata:
  category: AI-Native & Meta
  version: 1.0.0
---

# Autoresearch

Generate 10+ variants of a piece of conversion copy, score every variant with a five-judge simulated panel, evolve the top performers through a few rounds, then hand the winner to a human for the call — never past that point on its own. No traffic needed, no separate tooling: this runs the same way every other skill in this repo does, as instructions applied directly in this conversation.

**What this replaces:** staring at a blank headline field, or writing three tired variations by hand and picking the one that "feels right." **What this doesn't replace:** `ab-testing` — a strong simulated score gets you a better starting candidate to test, not a validated result. Run this first, then validate the winner with `ab-testing` against real traffic.

## Before Starting

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists, read it — Section 10 (Brand Voice) and Section 9 (Customer Language) matter directly here: a variant that scores well but doesn't sound like the brand is not a win. Also check `.agents/marketing-learnings.md` for past entries on this content type or channel.

Confirm before running:
1. **The content** — paste it, or point to the file/page.
2. **Content type** — product/landing page, email subject or body, ad copy, SMS, or signup/form page. Ask if it's ambiguous.
3. **Which elements to optimize** — headline only, or the full set for that content type (below)? Default: all.
4. **Minimum score to stop at** — default 80 (see Quality Gates).

## The Loop

```
Generate  →  Score (5-judge panel)  →  Keep top 3  →  Evolve  →  repeat until threshold or 3 rounds
                                                                        │
                                                          Cross-breed the per-element winners
                                                                        │
                                                        STOP — hand to a human. Never auto-ship.
```

### Round structure, per element

- **Round 1** — generate 10 variants. Score all 10 against the panel in one pass (don't score one at a time — batch it, the same way `marketing-council` seats a full panel at once rather than polling advisors sequentially). Rank by average score, keep the top 3.
- **Round 2 (evolution)** — look at what the top 3 actually did right, not just their score. Generate 10 new variants that push those specific patterns further. Score, keep top 3.
- **Round 3 (if still under threshold)** — identify the single weakest-scoring dimension across the current leaders. Generate 10 variants aimed specifically at that dimension. Score, keep the top 1.
- **Stop condition**: the top variant clears the minimum score, or 3 rounds are done — whichever comes first. Don't run a 4th or 5th round chasing a number; if 3 rounds haven't cleared the bar, the problem is usually the underlying offer or positioning, not the wording (see Anti-Patterns).

### Cross-breeding (multi-element content only)

Once every element has its own round-winner, assemble them into one complete draft, then generate 5 variants that recombine the winning elements in different ways (not just concatenate them — a headline and CTA that each won independently don't automatically read well together). Score the 5 combinations holistically, as a reader would experience the whole page/email, not element-by-element. The top holistic score is the candidate that goes to a human.

## The Panel — Five Retail-Relevant Judges

Score every variant against all five in the same pass. Each scores 0–100; the variant's score is the average across all five.

| # | Judge | Scoring lens |
|---|-------|--------------|
| 1 | **Retail marketing director** | "Would this make a scrolling shopper actually stop?" |
| 2 | **A skeptical repeat customer** | "Do I believe this? Does it sound like the brand I already know, or like generic ad copy?" |
| 3 | **CRO specialist** (see `cro`) | "Is this clear, specific, and does it actually drive the next action?" |
| 4 | **Senior retail copywriter** | "Is this well-crafted and differentiated, or does it read like every other listing?" |
| 5 | **Your own brand voice** | Configurable — see below. |

**Customize judge 5.** The default is a generic "founder/brand owner" lens. Replace it with your actual brand voice by writing `references/brand-voice.md` (tone, what the brand would never say, real examples of copy that landed) — same pattern as `brand-guidelines`. Without that file, judge 5 falls back to whatever `.agents/marketing-strategy.md` Section 10 (Brand Voice) says.

## Content Types & Score Dimensions

Pick the row that matches, or the closest fit — these aren't exhaustive.

| Content type | Elements to optimize | Score dimensions |
|---|---|---|
| **Product/landing page** (see `cro`, `product-feed`) | Headline, subheadline, CTA text, key benefit bullets, social proof line | first impression, clarity, trust, urgency, would-buy |
| **Email** (see `emails`) | Subject line, opening line, body hook, CTA, PS line | would-open, would-read, would-click, feels-personal, spam-risk (lower is better — invert before averaging) |
| **Ad copy** (see `ads`, `ad-creative`) | Headline, description, CTA | scroll-stopping, clarity-in-3-seconds, click-worthiness, relevance to likely intent, differentiation |
| **SMS** (see `sms`) | Opening line, offer framing, CTA | would-open, clarity, urgency, feels-spammy (lower is better) |
| **Signup/form page** (see `signup`) | Headline, subtext, value-prop bullets, button text | first impression, trust, completion likelihood, would-actually-submit |

## Quality Gates

| Score | Meaning |
|---|---|
| < 70 | Don't ship. Something fundamental is off — usually the offer or positioning, not the phrasing. |
| 70–79 | Marginal. One more round targeting the weakest dimension. |
| 80–84 | Good. Hand to a human for review, then to `ab-testing` for real validation. |
| 85–89 | Strong. Same next step — still not a substitute for a real test. |
| 90+ | Rare. Worth a second look to confirm the panel isn't rewarding something narrow (see Anti-Patterns). |

## The Human-Curation Gate — Non-Negotiable

This is the one rule that matters more than the scoring mechanics: **the winner is always staged for a human to review and approve. Nothing in this skill publishes, sends, or overwrites live content on its own — there is no auto-apply option.** This matches the two-tier action model already used across this repo (`marketing-loops/references/loop-guardrails.md`): generating, scoring, and staging variants is Tier 1 (autonomous-safe); anything that changes what a customer actually sees is Tier 2 (always gated).

A high simulated score is a strong *candidate*, not a verdict — the panel is five simulated readers, not real traffic. Present the winner alongside the top 2 runners-up and a one-line rationale for each, and let the human make the call, especially when the top score doesn't feel right against the brand's actual voice.

## Output

Three things, every run:
1. **The winning copy** for each optimized element, plus the full cross-bred version if multi-element.
2. **The experiment log** — every variant generated, every judge's score, which ones survived each round. Write this to `.agents/marketing-learnings.md` via `compound-marketing`'s Compound stage if the run is part of a real campaign, so the next Brief doesn't re-run the same experiment blind.
3. **A short rationale** — winning score, which element improved the most round-over-round, and the top 2 alternatives in case the winner doesn't feel right once a human looks at it.

## Anti-Patterns

- **Auto-applying the winner.** Never. See the Human-Curation Gate above.
- **Scoring one variant at a time.** Batch the whole round through the panel together — same discipline `marketing-council` uses, and it keeps the judges' relative calibration consistent within a round.
- **Chasing a score past 3 rounds.** If 3 rounds haven't cleared the minimum, the fix is a strategic one (the offer, the positioning) — see `moat-builder` and `marketing-strategy` Section 6, not a 4th round of wordsmithing.
- **Optimizing one dimension into the ground.** A variant scoring 95 on clarity and 40 on trust isn't a win — its average is misleading. Check the per-dimension breakdown, not just the final number, before calling it a winner.
- **Treating the panel score as a real result.** It's a simulated read that picks a stronger starting candidate — `ab-testing` against real traffic is still the only thing that actually validates it.
- **Cross-breeding before each element has its own winner.** Combining unfinished elements produces incoherent copy — finish each element's rounds first.

## Related Skills

- **ab-testing**: The real-traffic validation step this skill's winner still needs — autoresearch picks the candidate, ab-testing proves it.
- **cro**: The CRO specialist judge's lens, and the skill to run for a full page-level audit beyond just copy.
- **copywriting**: For a full rewrite when a page needs more than variant-testing a few elements.
- **marketing-council**: The general-purpose panel-simulation pattern this skill's judge structure is built on — reach for that skill instead when the question is a strategic debate, not a copy-scoring pass.
- **compound-marketing**: Where the experiment log gets written up so the next Brief doesn't start blind.
- **moat-builder**: For when 3 rounds of variants can't clear the bar and the real problem is the underlying differentiation, not the wording.

---

*The generate/score/evolve loop is adapted from [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills)' `autoresearch` skill, itself inspired by Andrej Karpathy's autoresearch concept for ML experimentation. Ported here as instructions Claude follows directly (this repo's skills don't call a separate script or API), retail-translated content types and judge panel, and the human-curation gate made non-negotiable rather than an optional setting.*
