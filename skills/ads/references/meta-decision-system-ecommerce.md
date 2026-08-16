# Meta Decision System (Ecommerce / DTC)

A quantified kill/keep/scale engine for Meta ads, structurally adapted from the sibling B2B decision system in this skill ([meta-decision-system.md](meta-decision-system.md)) for a direct-checkout funnel: no lead-qualification step, no CRM reconciliation — the pixel sees the terminal event (purchase) directly. Pairs with the strategy-level Meta playbook in SKILL.md (creative-as-targeting, creative volume) — this file is the *operating* layer.

## Contents

- Target CPA: the anchor variable
- The ad-count ceiling
- Two-campaign structure (Scaling / Testing)
- Stage 1: delivery check (day 7)
- Stage 2: performance evaluation (weekly)
- Graduation criteria
- Fatigue detection
- Swap rules
- Creative production math
- Scaling protocol
- Weekly cadence
- Advantage+ transition
- Benchmarks and seasonality

## Target CPA: the anchor variable

Target CPA = the most you can pay to acquire a customer on the first order and still hit your margin target — **breakeven CPA = AOV × gross margin %**. See SKILL.md's "Find your break-even ROAS" section for the full derivation, including how to factor in LTV if you're deliberately acquiring above first-order breakeven.

Set your working target *below* breakeven to bank profit: target CPA = breakeven CPA × a safety margin you choose (your risk tolerance and cash position decide the number — this isn't a fixed constant). Equivalently: target ROAS = 1 ÷ gross margin %. If you're acquiring at a first-order loss for LTV reasons, anchor on blended CPA against your own cohort repeat-purchase data instead — that number only exists in your own numbers, not in a general framework.

Every rule below is expressed in multiples of target CPA. Review it whenever margin, AOV, or COGS shift — for ecommerce that can be often (promos, input costs), unlike a B2B ACV that moves slowly.

## The ad-count ceiling

More active ads than your budget can feed = every ad starves and nothing gets a fair read.

**Ceiling = (daily budget × 14) / (2 × target CPA)** — i.e., over a 14-day evaluation window, each ad needs at least 2× target CPA of spend to be judged.

Illustrative only (substitute your own numbers): $1,000/day at a $40 target CPA → ceiling of ~17 ads; run **8–12** (winners + test slots). At the ceiling, launching a new test requires killing something first.

## Two-campaign structure (Scaling / Testing)

Run two CBO campaigns over the **same audience**:

- **Scaling campaign (~80% of budget)** — holds only graduated, proven ads.
- **Testing campaign (~20%)** — holds new concepts and iterations, with its own protected budget.

Why: inside a single CBO, proven ads always starve new ads — tests never get enough spend to be judged. Why not ABO for testing: equal forced distribution keeps spending on ads Meta has already deprioritized. The separation is *budget protection*, not audience segmentation.

**Image-first validation:** launch new concepts as statics first (product photography, UGC stills); only produce the video/carousel version after the image passes the checks below. Exception: concepts that are inherently video (UGC testimonial, unboxing, demo).

## Stage 1: delivery check (day 7)

CBO's spend allocation is itself a signal — Meta pre-screens your ads. At day 7 for each test ad:

- **Fair share test:** minimum expected spend = (campaign daily budget ÷ active ads) × 7 × 0.5. Below that → **kill** (Meta actively deprioritized it). Zero spend → kill immediately.
- **Ongoing:** if an ad has spent ≥ 1× target CPA lifetime AND averaged under a low daily minimum over the last 7 days → kill. (The lifetime-spend gate stops you from killing ads CBO simply hasn't explored yet.)

When iterating on a delivery-killed ad, change the **hook/visual/format only** — the audience never got far enough for copy or offer to matter.

## Stage 2: performance evaluation (weekly, rolling 14-day data)

No separate quality-qualification step here — a purchase *is* the terminal, verifiable event, unlike a B2B lead that still has to be qualified against a CRM. Run in order; stop at the first triggered action:

1. **Data gate:** spend < 3× target CPA → **wait** (not enough signal). At true cost-per-purchase = target, 3× target CPA of spend should produce ~3 purchases; zero purchases at that spend is a low-probability outcome — so judging at 3× gives high confidence without wasting budget (judging too early inflates false kills; waiting much longer than 3× mostly just delays a call you can already make).
2. **Zero purchases** at ≥3× target CPA → **swap and abandon the concept** (don't iterate a dead concept).
3. **Cost check:** cost per purchase ≤ target CPA → candidate winner. 1–1.5× target CPA → monitor (normal variance). >1.5× target CPA → swap (structural underperformance, not noise).

**If you sell on a subscription or high-repeat-purchase model** and first-order economics alone don't clear target CPA, add a reconciliation pass once you have 60–90 days of repeat-purchase data: pull blended CPA (spend ÷ (first orders + attributable repeat orders in the window)) against your actual cohort LTV, the same way the B2B file reconciles against CRM pipeline — just with your order history standing in for the CRM.

## Graduation criteria (Testing → Scaling)

Graduate only when **all** are true: a minimum purchase count you're confident isn't noise for your own order volume (5 is a reasonable floor to start from, raise it if your AOV/margin make false positives expensive) · cost per purchase ≤ target CPA · running ≥14 days · ≥1 purchase in the last 7 days.

## Fatigue detection

The mechanism is the same as B2B — frequency, CTR decay, and CPM inflation all signal fatigue on any Meta account — but the *numeric bands* in the sibling B2B file were practitioner-reported specifically for small, B2B-sized audiences. Ecommerce audiences vary far more by niche (a mass-market DTC brand's broad audience behaves nothing like a niche brand retargeting a 5,000-person list), so a single generic band table would mislead more than it'd help without real sourcing. Build your own bands from your account's own frequency-vs-CTR decay curve instead of assuming a fixed number.

Other signals, in urgency order (these transfer directly, no recalibration needed): CTR down 20%+ from baseline over 7 days; CPM up 30%+ over 2 weeks (leading indicator — moves before CTR); ad relevance rankings "below average"; CPA up with stable targeting.

For **scaling-campaign ads**, apply a deliberately stricter bar than your own general bands — these ads carry ~80% of spend, so fatigue there costs the most: start iterations as soon as you see early warning signs (rising cost trend, softening CTR), not after full critical-band confirmation.

**Creative lifespan:** ecommerce accounts typically cycle creative faster than the B2B file's ranges (14–42 days) because ad volumes and audience overlap are usually higher — but the actual number is account-specific. Track your own trend rather than assuming a day count.

**Retire (don't iterate)** when CTR drops 30%+ from its own peak, or frequency crosses into your own critical band — the concept is exhausted, not the execution.

**Rotation without resetting learning:** never edit creative inside a performing ad — that resets the learning phase. Launch new ads alongside existing ones, or spin up a new ad set with the same targeting. Pausing doesn't reset; editing does.

## Swap rules

**Never pause without a replacement.** Keep 2–3 iterations staged; replacement live within 7 days, immediately for critical fatigue. If the pipeline is empty, redirect the budget to proven ads rather than leaving a zombie running. What to change depends on why it died: delivery kill → hook/visual; performance kill → angle, offer, or audience; fatigue → fresh execution of the same proven concept.

## Creative production math

- **Test throughput** ≈ (monthly budget × 0.20) ÷ (3 × target CPA), per month. Delivery kills free budget early, so actual throughput runs somewhat higher than the base rate.
- **Win rates:** treat the B2B file's rates (iterations ~25%, brand-new concepts ~10%, blended ~1 in 6) as an illustrative starting assumption only — replace with your own observed rate once you have testing history; ad-testing win rates aren't something this file can responsibly assert for ecommerce without your data.
- **Minimum proven-ad inventory** ≈ monthly budget ÷ (your own observed average spend-before-fatigue per proven ad, from Stage 2 + fatigue history). **You cannot scale budget ahead of creative supply**; if proven ads < minimum, fix the creative deficit before raising budget.
- **Iteration priority** when refreshing a winner (ranked by impact): 1. hook (changes who stops) → 2. visual treatment → 3. format → 4. body copy/CTA.

## Scaling protocol

Scale only when all: proven-ad count meets the next budget level's minimum; account frequency is within your own safe band; cost per purchase ≤ target CPA for 2+ consecutive weeks; 3+ replacements staged.

- **Rate:** +20% every 5 days. Never +30% or more in one move — that resets learning (a Meta platform behavior, not an ecommerce-specific rule).
- **Rollback trigger:** cost per purchase >1.5× target CPA after a scale step → cut budget 20–30% immediately, stabilize 2 weeks, resume at +10% per week.
- **Hitting the wall** (account-wide average frequency well above your own safe band): expand lookalikes 1% → 2–3%, add new seed audiences, test broad, re-open remarketing.

## Weekly cadence

- **Monday — decision day:** pull rolling 14-day data; run Stage 2 on every test ad; run the fatigue check on every scaling ad.
- **Wednesday — launch day:** launch new tests into freed slots; run Stage 1 on ads that hit day 7.
- **Friday — scaling day:** apply scale steps or rollbacks.
- **Monthly:** creative library audit + target CPA review (recompute whenever margin, AOV, or COGS have moved).

## Advantage+ transition

Manual is where you learn; Advantage+ is where you earn. Transition a campaign to Advantage+ only after: a proven offer, a validated audience, and **~50 conversions/week** on the optimization event (Meta's documented learning-phase exit bar — budget needed ≈ target CPA × 50 ÷ 7 per day). If you can't hit 50/week on purchase, optimize a higher-volume event up-funnel (add-to-cart, checkout-initiated) and retarget converters. Watch Campaign Score directionally (70+ healthy, <50 = fighting the algorithm) but never trade a profitable CPA for score.

## Benchmarks and seasonality

No built-in benchmark ranges here, deliberately — ecommerce CTR, CPM, and CPA vary enormously by AOV, category, and season, and asserting a generic range would be worse than no range at all. Build your own scorecard from your trailing 30-day account data, in the same shape as the B2B file's table, once you have volume. One structural note that does transfer safely: retail Q4 (Black Friday through the holiday season) typically sees the **opposite** seasonality from the B2B file's Q1-cheap/Q4-expensive pattern — ecommerce CPMs and competition both spike hardest in Q4 as every retailer bids up the same shopping season, so plan budget and creative supply ahead of it rather than assuming a January lull like B2B accounts see.

Weekly scorecard — eight numbers to track once you have your own baseline: spend · purchases · CPA · ROAS · frequency · AOV · landing page CVR · blended CAC (cross-check via the `attribution` skill, since platform-reported ROAS runs inflated).

---

*Structure adapted from the sibling B2B decision system in this skill, re-anchored on breakeven CPA/ROAS from your own margin and AOV instead of cost-per-qualified-lead. Deliberately ships without the B2B file's benchmark ranges and frequency bands — those were practitioner-sourced for B2B/small-audience accounts and would need real ecommerce-specific research to state responsibly here rather than be invented. Fill them in from your own account data, or source them before relying on them.*
