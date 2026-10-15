---
name: autoresearch
description: "When the user wants to generate many variants of a marketing asset and pick a strong starting candidate before spending real traffic or budget on it. Covers conversion copy (product page headline, email subject line, ad copy, SMS, signup page) and concepts and structures (promotion and offer framing, product or campaign names and taglines, positioning statements, landing page section order, creative briefs and campaign concepts). Also use when the user mentions 'autoresearch,' 'generate variants,' 'optimize this headline,' 'score these variants,' 'which version is stronger,' 'name options,' or wants a fast simulated-panel read before a real test. It does NOT decide channel mix, budgets, prices or discount depth, and it is not a substitute for ab-testing: it picks a pre-launch candidate, ab-testing measures it against real traffic. The score is simulated, not a result. A human approves the winner; nothing auto-publishes."
metadata:
  version: 2.0.0
---

# Autoresearch

Generate 10+ variants of a piece of conversion copy or a marketing concept, score every variant with a five-judge simulated panel, evolve the top performers through a few rounds, then hand the winner to a human for the call — never past that point on its own. No traffic needed, no separate tooling: this runs the same way every other skill in this repo does, as instructions applied directly in this conversation.

**What this replaces:** staring at a blank headline field, or writing three tired variations by hand and picking the one that "feels right." **What this doesn't replace:** `ab-testing` — a strong simulated score gets you a better starting candidate to test, not a validated result. Run this first, then validate the winner with `ab-testing` against real traffic.

## Before Starting

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists, read it — Section 10 (Brand Voice) and Section 9 (Customer Language) matter directly here: a variant that scores well but doesn't sound like the brand is not a win. Also check `.agents/marketing-learnings.md` for past entries on this content type or channel.

**Check for a taste filter:** if the brand has switched on its taste filter (a BRAND TASTE block in the prompt, or `.agents/taste.md` in a local install), read it before generating. It changes judge 5 and adds hard eliminations. See "Taste Filter" below. If it is absent or off, use the default judge 5 and say nothing about it.

Confirm before running:
1. **The content** — paste it, or point to the file/page.
2. **Content type** — pick a row from the tables below. Ask if it's ambiguous. If the request is really a decision about channel, budget, price or discount depth, stop and use the Scope Boundary section.
3. **Which elements to optimize** — headline only, or the full set for that content type (below)? Default: all.
4. **Minimum score to stop at** — default 80 (see Quality Gates).

## The Loop

```
Reality check  →  Generate  →  Score (5-judge panel)  →  Keep top 3  →  Evolve  →  repeat until threshold or 3 rounds
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

## Step 0: Reality Check Before Anything Is Scored

A clever variant that loses money, promotes stock that is gone, or makes a claim the brand cannot make is not a candidate. Before generating, confirm what the content is allowed to say, and eliminate (do not score down) any variant that breaks it:

- **Offer content** (a discount, bundle, free shipping threshold, price comparison): needs the margin floor or the approved discount range. Without it, fail closed and ask. Never assume one. See `discount-and-clearance`.
- **Specific products**: needs stock status if it is knowable. Do not build a hero around inventory that may be sold out.
- **Claims** (guarantees, comparisons, "best", "only", health or safety, "free"): needs the disclaimer or an explicit sign-off. See `compliance`.
- **Brand tier**: a variant that contradicts `.agents/marketing-strategy.md` Section 14 (for example discount-led copy for a premium brand) is eliminated.

Eliminated variants are listed in the experiment log with the reason. They do not count toward the 10.

## Scope Boundary: What This Skill Will Not Decide

The panel is simulated readers. It can judge whether words and ideas land. It cannot judge anything whose truth depends on data it does not have. Decline these and point to the right skill:

| Request | Why not | Use instead |
|---|---|---|
| Which channels to spend on, or the channel mix | Depends on real cost, reach and conversion data | `attribution`, `budget-allocation`, `ads` |
| How much to spend, bids, budget splits | Depends on margin, pacing and platform data | `budget-allocation`, `budget-pacing-tracker` |
| What price to charge, or how deep to discount | Depends on cost, margin and elasticity | `pricing`, `discount-and-clearance` |
| Forecasts or "what will the result be" | A simulated score is not a prediction | `ab-testing` |
| Anything where the right answer is a number in a report | The panel invents numbers | `analytics` |

If the request mixes the two (for example "which offer framing, and how deep should the discount be?"), run the framing and hand the depth question to the right skill, stating the depth you assumed as a fixed input.

## Content Types & Score Dimensions

Pick the row that matches, or the closest fit. These are not exhaustive. Copy rows are optimized element by element. Concept rows are optimized as whole ideas, then written up.

### Conversion copy

| Content type | Elements to optimize | Score dimensions |
|---|---|---|
| **Product/landing page** (see `cro`, `product-feed`) | Headline, subheadline, CTA text, key benefit bullets, social proof line | first impression, clarity, trust, urgency, would-buy |
| **Email** (see `emails`) | Subject line, opening line, body hook, CTA, PS line | would-open, would-read, would-click, feels-personal, spam-risk (lower is better, invert before averaging) |
| **Ad copy** (see `ads`, `ad-creative`) | Headline, description, CTA | scroll-stopping, clarity-in-3-seconds, click-worthiness, relevance to likely intent, differentiation |
| **SMS** (see `sms`) | Opening line, offer framing, CTA | would-open, clarity, urgency, feels-spammy (lower is better) |
| **Signup/form page** (see `signup`) | Headline, subtext, value-prop bullets, button text | first impression, trust, completion likelihood, would-actually-submit |

### Concepts and structures

| Content type | What a variant is | Score dimensions |
|---|---|---|
| **Promotion or offer framing** (see `offers`, `discount-and-clearance`) | The same fixed offer framed differently: how it is named, what it leads with, what it asks the customer to do. The discount depth is a fixed input, never a variable. | understood in 3 seconds, feels like a good deal (not a gimmick), fits brand tier, urgency without pressure, margin-safe |
| **Names and taglines** (see `brand-management`, `storytelling`) | A name or line for a product, range, campaign or loyalty programme | memorable, easy to say and spell, distinct from competitors, fits brand voice, no unintended meaning |
| **Positioning statement** (see `marketing-strategy`, `moat-builder`) | One sentence that says who it is for, what it is, and why it is different | believable, specific, different from named competitors, matches the real offer, usable by a sales or store team |
| **Landing page structure** (see `cro`, `website-ux`) | The order and weight of sections, not their wording: what comes first, what proof sits where, where the CTA goes | answers the visitor's first question fast, proof before ask, one clear next step, scannable on mobile |
| **Creative brief or campaign concept** (see `marketing-brief-template`, `tentpole-campaign`, `ad-creative`) | The central idea and its angle, in two or three sentences | clear single idea, ownable, works across formats, fits the audience, can actually be produced on the budget stated |

For concept rows, **variants must differ in strategy, not wording.** The 10 in Round 1 must cover at least 4 clearly different angles (for example price-led, quality-led, social-proof-led, urgency-led, emotion-led). Ten rewordings of one idea is a failed Round 1; regenerate.

## The Panel: Five Judges, Swapped Per Content Type

Score every variant against all five in the same pass. Each scores 0 to 100; the variant's score is the average across all five, with the per-dimension breakdown kept.

**Two anchor judges never change**, so scores stay comparable across runs:

| # | Anchor judge | Lens |
|---|---|---|
| A | **A skeptical repeat customer** | "Do I believe this? Does it sound like the brand I already know, or like generic marketing?" |
| B | **Your own brand voice (judge 5)** | Configurable. See "Taste Filter" and below. |

**Three specialist judges change with the content type:**

| Content type | Specialist judges |
|---|---|
| Product/landing page, signup | Retail marketing director ("would a scrolling shopper stop?"), CRO specialist (see `cro`), senior retail copywriter |
| Email, SMS | Retail marketing director, CRM and lifecycle specialist (see `emails`, `sms`), deliverability-minded copywriter |
| Ad copy | Retail marketing director, paid media buyer (see `ads`), senior retail copywriter |
| Promotion or offer framing | Retail marketing director, merchandiser or category manager (does it sell down what it should?), finance lead (does it protect margin?) |
| Names and taglines | Brand strategist (see `brand-management`), senior retail copywriter, a shopper hearing it said aloud in store |
| Positioning statement | Brand strategist, competitor strategist (is it different from named competitors in Section 5?), a sales or store-team lead who must say it out loud |
| Landing page structure | CRO specialist, UX designer (see `website-ux`), a first-time visitor on a phone |
| Creative brief or campaign concept | Creative director, retail marketing director, producer (can it be made on this budget and timeline?) |

**Customize judge 5.** The default is a generic "founder/brand owner" lens. Replace it with your actual brand voice by writing `references/brand-voice.md` (tone, what the brand would never say, real examples of copy that landed), same pattern as `brand-guidelines`. Without that file, judge 5 falls back to whatever `.agents/marketing-strategy.md` Section 10 (Brand Voice) says. If the taste filter is on, it replaces both (next section).

### Calibration guard

A panel average can hide a split. After scoring a round, check each leader:

- **Spread over 30 points between judges** (one loves it, one hates it): do not average it away. Flag it as divisive and keep it only if the divisive judge is not an anchor judge.
- **Any single dimension under 50**: not a winner regardless of average (see Anti-Patterns).
- **Every judge scoring within 5 points of each other, all high**: suspicious. Re-score the top variant once, asking each judge for the strongest objection. A panel that cannot find a flaw has stopped judging.

## Taste Filter (optional, set by the marketing leader)

Some brands record their leader's judgement: which angles work, what copy lands, which channels and tactics suit which situation, and what the brand never does. When that record exists and is switched on, it is given to you as a BRAND TASTE block (in the app) or `.agents/taste.md` (a local install). It is never on by default.

When it is present:
1. **It is judge 5.** Score each variant on how well it fits the leader's stated taste, using their examples of good and bad as the calibration.
2. **Its "never" list eliminates.** A variant that breaks a stated never is removed before scoring, and listed in the log with the rule it broke.
3. **It cannot override Step 0.** Taste shapes what is good. It cannot make an unsafe offer, an unapproved claim or a missing margin floor acceptable.
4. **Say what it did.** In the rationale, name which taste rules most influenced the winner, so the leader can see their judgement at work and correct it if it is wrong.

If the taste block contradicts the brand strategy, follow the taste for style and the strategy for facts, and point out the contradiction.

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
2. **The experiment log** — every variant generated, every judge's score, which ones survived each round, and which were eliminated before scoring (Step 0 or a taste "never") with the reason. Write this to `.agents/marketing-learnings.md` via `compound-marketing`'s Compound stage if the run is part of a real campaign, so the next Brief doesn't re-run the same experiment blind.
3. **A short rationale** — winning score, the per-judge spread, which taste rules shaped it (if a taste filter was on), which element improved the most round-over-round, and the top 2 alternatives in case the winner doesn't feel right once a human looks at it.

## Anti-Patterns

- **Auto-applying the winner.** Never. See the Human-Curation Gate above.
- **Scoring one variant at a time.** Batch the whole round through the panel together — same discipline `marketing-council` uses, and it keeps the judges' relative calibration consistent within a round.
- **Chasing a score past 3 rounds.** If 3 rounds haven't cleared the minimum, the fix is a strategic one (the offer, the positioning) — see `moat-builder` and `marketing-strategy` Section 6, not a 4th round of wordsmithing.
- **Optimizing one dimension into the ground.** A variant scoring 95 on clarity and 40 on trust isn't a win — its average is misleading. Check the per-dimension breakdown, not just the final number, before calling it a winner.
- **Treating the panel score as a real result.** It's a simulated read that picks a stronger starting candidate — `ab-testing` against real traffic is still the only thing that actually validates it.
- **Ten rewordings of one idea.** For concepts and structures, variants that differ only in wording are not 10 variants. Regenerate across distinct angles.
- **Letting taste override the reality check.** Taste decides what is good. It never makes an unsafe offer, an unapproved claim or a missing margin floor acceptable.
- **Using it to decide channels, budgets or prices.** The panel cannot know those. See Scope Boundary.
- **Cross-breeding before each element has its own winner.** Combining unfinished elements produces incoherent copy — finish each element's rounds first.

## Related Skills

- **ab-testing**: The real-traffic validation step this skill's winner still needs — autoresearch picks the candidate, ab-testing proves it.
- **cro**: The CRO specialist judge's lens, and the skill to run for a full page-level audit beyond just copy.
- **copywriting**: For a full rewrite when a page needs more than variant-testing a few elements.
- **marketing-council**: The general-purpose panel-simulation pattern this skill's judge structure is built on — reach for that skill instead when the question is a strategic debate, not a copy-scoring pass.
- **compound-marketing**: Where the experiment log gets written up so the next Brief doesn't start blind.
- **taste-builder**: Interviews the marketing leader and writes the taste record that becomes judge 5 here and a filter on every other skill's output.
- **compliance**: The claims and disclaimers Step 0 checks against.
- **offers**: The offer design this skill frames and tests; this skill never sets the depth.
- **moat-builder**: For when 3 rounds of variants can't clear the bar and the real problem is the underlying differentiation, not the wording.

---

*The generate/score/evolve loop is adapted from [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills)' `autoresearch` skill, itself inspired by Andrej Karpathy's autoresearch concept for ML experimentation. Ported here as instructions Claude follows directly (this repo's skills don't call a separate script or API), retail-translated content types and judge panel, and the human-curation gate made non-negotiable rather than an optional setting.*
