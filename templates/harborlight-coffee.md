# Industry-Specific Template Package: DTC Coffee & Consumables Retailer

## Overview

This package is a complete worked example of the `marketing-plan` skill's **order-based budget math** — the reformulation that replaced the ARR/MRR-denominated formulas with AOV, margin-per-order, and blended purchase frequency (see `budget-planning.md`, `growth-patterns.md`, `funding-stage-unlocks.md` in the public repo's `skills/marketing-plan/references/`). Where the public repo's own `skills/marketing-plan/references/example-quietude.md` demonstrates the skill for a hardware+software hybrid, this package demonstrates it for the far more common case this plan actually serves: a real, order-based, repeat-purchase consumable retailer.

The fictional company: **Harborlight Coffee Co.**, an 18-month-old DTC specialty coffee roaster. Direct-to-consumer bags of coffee, a subscribe-and-save option, no wholesale channel yet.

Everything below uses internally consistent numbers throughout — the same AOV, CAC, and margin feed every calculation, so this can be followed end-to-end as a worked proof that the reformulated formulas actually work, not just a set of disconnected examples.

## Why This Vertical Needs Specialized Marketing

- **Low AOV, high frequency** — the opposite economic shape from a considered-purchase category. The budget math lives or dies on getting blended purchase frequency right, not on a single big-ticket conversion.
- **Subscription and one-time purchase coexist** — a meaningful share of customers convert to subscribe-and-save, which genuinely is recurring revenue, sitting inside an otherwise order-based business. This is exactly the case `budget-planning.md`'s Recurring-Revenue Variant was built for: not a company that's *entirely* recurring-revenue, but one with a recurring-revenue *cohort* inside an order-based whole.
- **The order-1-to-order-2 cliff is real and expensive here.** Coffee is a "will they reorder" category, not a "will they ever buy again" category — most people who try a bag either become repeat buyers within 60-90 days or don't come back at all. This makes the payback-period discipline (not LTV:CAC) the difference between a plan that's honest about risk and one that isn't.

## Package Contents

### 1. Marketing Strategy Foundation (`.agents/marketing-strategy.md` excerpt)

```markdown
### 3.1 Primary Target Audience
Home coffee drinkers who've outgrown supermarket coffee but aren't ready for a $6/cup café habit — want café-quality at home, value the ritual of brewing, willing to pay a premium for traceable/small-batch sourcing.

### 3.2 Persona 1: The Upgrade Seeker
- Demographics: 28-45, urban/suburban, $70k-$130k household income
- Behavioral: Discovered the brand via Instagram/TikTok unboxing content or a gift subscription; buys one bag at a time initially, tries 2-3 roasts before settling on a favorite
- Pain points: "I don't know what 'single origin' actually means, I just want it to taste good and not run out"; price-sensitive against café spend, not against grocery-store coffee
- Key phrase from research: "I ran out and just re-ordered the same one without thinking about it" (the repeat-purchase signal that matters for frequency assumptions below)

### 3.3 Persona 2: The Subscriber
- Same demographic profile as Persona 1, six-plus weeks in
- Behavioral: Converted to subscribe-and-save after 2-3 one-time orders; values not having to remember to reorder more than the discount itself
- Retention driver: convenience and habit, not price — this is why subscriber retention runs meaningfully higher than the blended repeat-purchase rate for one-time buyers (see Section 8 below)
```

### 2. Full Worked Marketing Plan — Harborlight Coffee Co.

The sections below are what `marketing-plan`'s Section 3, 8, 10, and 13 actually produce when run against this business. Every number traces back to the same four inputs: **AOV $32, gross margin 58%, blended CAC $38, blended annual purchase frequency 2.6 orders/year.**

#### Section 3 — Current State

| Metric | Value | Note |
|---|---|---|
| Current annual revenue | $420,000 | 18 months post-launch |
| AOV | $32 | Blended across bag sizes and accessory attach |
| Gross margin | 58% | Typical specialty coffee CPG margin after roasting/packaging/shipping cost |
| Margin per order | $18.56 | $32 × 58% (see `ads/references/payback-period.md`) |
| Blended CAC | $38 | Paid social (Meta/TikTok) + content + affiliate, blended — not paid-spend-only |
| Blended annual purchase frequency | 2.6 orders/year | Across the *whole* new-customer cohort — one-time buyers and subscribers together (see note below) |
| 12-month repeat-purchase rate | 45% | Share of first-time buyers who order again at all within 12 months |
| Current monthly marketing spend | ~$9,000/mo | ≈ 25.7% of current annual revenue — Aggressive growth posture (the 20–30% band in `budget-planning.md`) |
| Capital-stage tier | Tier 2 → Tier 3 transition | Self-funded + a small business line of credit; total marketing spend is edging past Tier 2's $2–8K/mo paid band toward Tier 3's $10–30K/mo — a real transition, not a clean cutoff (see `funding-stage-unlocks.md`) |
| Growth phase | Phase 2 (~$250K–1.5M annual revenue) | The "treacherous middle" — enough revenue to prove the concept, not yet enough margin to fully staff the team (see `growth-patterns.md`) |

**Why the blended frequency is 2.6 and not higher or lower:** this number has to include the ~55% of first-time buyers who never reorder at all (frequency ≈ 1.0 for that whole slice) blended with the smaller cohort who reorder repeatedly, including subscribers. Using a "repeat-customers-only" frequency figure here (which the reformulated `budget-planning.md` explicitly warns against) would overstate new-customer revenue contribution significantly — that mistake alone can make a genuinely marginal channel look profitable on paper.

#### Section 8 — Revenue: the budget math worked two ways

**Method 1 (Revenue-Based), at the current 24% allocation:**
- Annual marketing budget: $420,000 × 24% = **$100,800**
- New customers acquired: $100,800 ÷ $38 CAC ≈ **2,653**
- Revenue per new customer: $32 × 2.6 = **$83.20**
- New-customer revenue contribution: 2,653 × $83.20 ≈ **$220,700**
- Implied end-of-year revenue (new-customer contribution only, before existing-base retained revenue): $420,000 + $220,700 ≈ **$640,700**

**Method 2 (Goal-Based), reverse-engineered from a $650,000 target:**
- Step 1 — Revenue per new customer: $32 × 2.6 = **$83.20**
- Step 2 — New customers needed: ($650,000 − $420,000) ÷ $83.20 ≈ **2,764**
- Step 3 — Acquisition cost: 2,764 × $38 ≈ **$105,000**
- Plus 15% experimental buffer: $105,000 × 1.15 ≈ **$120,800**

**The two methods converge** — $100,800 (Method 1's implied spend) and $120,800 (Method 2's derived spend) land within about 20% of each other for essentially the same outcome. That convergence is itself a health signal worth naming in the plan: when the two methods disagree by 2-3x instead of 20%, that's usually a sign the CAC or frequency assumption feeding one of them is wrong, not that one method is "right" and the other "wrong."

**The payback-period reality check (this is where the framework earns its keep):**

Using the same CAC, margin per order, and frequency:
```
Monthly purchase frequency = 2.6 / 12 = 0.217
Raw payback = $38 ÷ ($18.56 × 0.217) ≈ 9.4 months
Discounted payback (× 45% repeat rate) = $38 ÷ ($18.56 × 0.217 × 0.45) ≈ 21 months
```

**This is a real flag, not a clean success story, and the plan should say so.** A 21-month discounted payback is well past the 3–12 month directional band `ads/references/payback-period.md` describes — meaning cash spent acquiring a customer today isn't recovered, on average, for nearly two years. Recommending Method 2's $120,800 budget *without* naming this would be presenting an incomplete picture. The honest move (and what Section 13 below does) is to name the gap and give the lever that actually closes it.

**Recurring-Revenue Variant — the subscriber cohort:**

About 30% of the customer base is on subscribe-and-save, and that cohort behaves like genuine recurring revenue, not like repeat one-time orders. Per `budget-planning.md`'s Recurring-Revenue Variant, this slice gets evaluated on its own terms:

| Metric | Value | Note |
|---|---|---|
| ARPC (subscriber, monthly) | $34 | Slightly above one-time AOV — larger default bag size, free shipping built into the subscription price |
| Annual retention rate (subscribers) | 70% | Meaningfully higher than the 45% blended repeat-purchase rate — subscribers who stick past the first shipment behave very differently from one-time buyers |

This is *why* the blended 2.6 frequency and 45% repeat rate above are correct to use for the whole-business budget math (they already average in this better-behaved subscriber slice with the worse-behaved one-time-buyer majority) — but it's also why growing the subscriber share specifically is the highest-leverage lever available (see Section 13).

**Board-context line, if this plan is going to a lender or investor:**

| Metric | Value | Note |
|---|---|---|
| LTV:CAC (narrative/board context only — not the channel-gating metric, see payback period above) | 2.4:1 | Rough blended figure for external comparison; never used inside this plan to turn a channel on or off |

#### Section 10 — 12-Month Outlook

**Budget method used:** Method 2 (Goal-Based), targeting $650,000. **Annual budget:** $120,800 (includes the 15% experimental buffer). **Growth pattern:** linear, not step-function — no single new-channel bet is expected to double revenue on its own this year.

**70/20/10 allocation** (see `growth-patterns.md`):

| Bucket | Share | Amount | What it covers |
|---|---|---|---|
| Current (70%) | 70% | $84,560 | Paid social (Meta/TikTok) driving new-customer acquisition; email/SMS to the existing base |
| Next (20%) | 20% | $24,160 | Creator/unboxing partnerships — the channel expected to graduate into "current" within 2-4 quarters |
| Experimental (10%) | 10% | $12,080 | A small wholesale trial into 3 local independent cafés — testing whether a B2B/wholesale channel (see `marketing-strategy` Section 16) is worth building out as the next growth curve |

**Capital-stage framing:** "Tier 2 → Tier 3 transition. Current monthly spend (~$10K/mo blended) is functionally already at Tier 3's paid-spend floor even though headcount and tooling are still Tier 2-shaped — the next hire (a dedicated content/lifecycle owner) is the actual Tier 3 unlock, not the budget number."

#### Section 13 — Open Decisions

1. **The 21-month discounted payback is the top open decision, not a footnote.** At current CAC and repeat rate, this budget is financing customers for nearly two years before the spend comes back — a real cash-flow risk for a business at this revenue scale. Two honest paths, not mutually exclusive: (a) lower CAC by shifting budget mix toward higher-intent channels, or (b) raise the subscriber conversion rate, since the subscriber cohort's 70% annual retention (vs. 45% blended) would meaningfully shorten payback if a larger share of new customers convert to subscribe-and-save within their first 1-2 orders. Given the subscriber cohort's economics are already known to be healthier, (b) is the higher-leverage move and should be a named 90-day priority, not left implicit.
2. **CAC is the single number every other calculation depends on.** If actual CAC comes in above $38, both budget methods and the payback figure move materially worse — flag for monthly re-check, not just annual.
3. **The wholesale trial (10% experimental bucket) is a bet on a new S-curve, not proven demand** — treat the 3-café pilot as a genuine test with a kill criterion (e.g., "if none of the three re-orders within 60 days, don't expand"), not a foregone conclusion.

### 3. What This Demonstrates — reusing this for another retail client

The pattern that generalizes beyond coffee:
1. Pull the same four inputs (AOV, gross margin, blended CAC, blended annual purchase frequency) for the real client — never substitute a repeat-customers-only frequency for the blended one.
2. Run both Method 1 and Method 2; a wide disagreement between them is a signal to interrogate the inputs, not a decision between methods.
3. Always compute discounted payback period alongside the budget number — a budget that "pencils" on Method 1/2 alone but has a payback period outside what the business's cash position can carry is not actually a fundable budget, whatever the revenue math says.
4. If any meaningful share of the customer base is genuinely recurring-revenue (subscriptions, memberships), split it out and apply the Recurring-Revenue Variant to that slice specifically — don't force the whole business into one model or the other.

## Related

- Public skill this demonstrates: `marketing-plan` (`references/budget-planning.md`, `references/growth-patterns.md`, `references/funding-stage-unlocks.md`)
- `ads` / `references/payback-period.md` — the payback-period math this package leans on throughout
- `marketing-strategy` Section 16 — the B2B/wholesale channel the experimental bucket is testing
- `loyalty` — the mechanics behind converting one-time buyers into the subscriber cohort, which is this business's highest-leverage lever per Section 13
