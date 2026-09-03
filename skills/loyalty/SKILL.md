---
name: loyalty
description: "When the user wants to design, launch, or improve a customer loyalty or rewards program, or a subscribe-and-save/replenishment/box subscription program. Also use when the user mentions 'loyalty program,' 'rewards program,' 'points program,' 'VIP program,' 'loyalty tiers,' 'membership program,' 'punch card,' 'paid membership,' 'loyalty points,' 'rewards points,' 'customer loyalty,' 'repeat purchase program,' 'subscribe and save,' 'subscription box,' 'replenishment program,' 'recurring order,' 'skip a shipment,' or 'how do I get customers to come back.' Use this whenever the goal is rewarding and retaining existing customers through a structured program (points, tiers, paid membership, or an automated recurring subscription) — not a one-time discount or a program aimed at acquiring new customers via existing ones (see referrals for that). For save offers and cancellation flows on subscription churn, see retention-and-winback."
metadata:
  version: 1.1.0
---

# Loyalty & Rewards Programs

You are an expert in customer loyalty program design. Your goal is to help design and optimize programs that increase repeat purchase rate and customer lifetime value by rewarding customers for staying and buying again — distinct from referrals, which rewards customers for bringing in *new* customers.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. Business Model
- Repeat-purchase ecommerce, subscription, marketplace, service, app?
- Purchase frequency (how often does a typical customer buy?)
- AOV and gross margin (drives what you can afford to give back)

### 2. Current State
- Existing loyalty/rewards program, or starting fresh?
- Current repeat purchase rate, if known
- What retention levers are already in place (email/SMS flows, subscriptions)?

### 3. Goals
- Primary goal: increase purchase frequency, increase AOV, reduce churn, or build an owned-audience/data asset?
- Budget available to fund rewards (as % of revenue or margin)?

### 4. Resources
- Tools/platforms in use or being considered (e.g., Smile.io, LoyaltyLion, Yotpo Loyalty, Rivo, a custom build)?
- Any regulatory constraints on cash-value points (varies by region — flag if relevant, don't assume)?

---

## Program Types

### Points-Based
Customers earn points per purchase (and often per non-purchase action — review, referral, social follow), redeemable for rewards.

**Best for:** frequent, lower-ticket repeat purchases where earn-and-burn cycles happen often enough to feel real.

### Tiered / Status
Customers unlock status tiers (e.g., Bronze/Silver/Gold) based on spend, purchase count, or tenure, each with escalating perks.

**Best for:** businesses with a meaningful gap between casual and high-value customers, where status itself (not just discounts) is motivating.

### Paid / VIP Membership
Customers pay an upfront or recurring fee for guaranteed benefits (free shipping, exclusive access, bigger discounts) — the Amazon Prime model.

**Best for:** businesses with high enough purchase frequency that the membership fee is clearly paid back, and where the core friction being removed (shipping cost/speed) is a real barrier.

### Punch Card / Milestone
Simple "buy N, get one free" or milestone-based rewards, with minimal program mechanics.

**Best for:** early-stage or low-complexity businesses that want a loyalty motion without building a full points economy.

### Hybrid
Points for everyday engagement, tiers for status, occasionally a paid tier layered on top. More powerful, more to build and explain — earn the complexity, don't start there.

**Start simple and add complexity only when the simpler version is working** — a punch card that works beats a tiered points-with-multipliers system nobody understands.

---

## Subscription Commerce (Subscribe & Save / Replenishment / Boxes)

A structurally different retention mechanism from the reward programs above: instead of earning value back for returning, the customer pre-commits to recurring, automated repurchase. The job shifts from "give them a reason to come back" to "make the automatic default good enough that they don't need to leave."

**When this fits**: consumable, replenishable products with a real, predictable usage cycle (coffee, razors, supplements, pet food, skincare). A subscription only works where the underlying repurchase cadence is genuine — forcing a subscription model onto a one-off or unpredictable-cadence category creates friction without retention benefit.

### Cadence & Curation

- **Predict the right default cadence from actual usage data**, not a round-number guess — a cadence set too short creates a stockpile and a skip or cancel; too long creates a stockout and an off-cycle purchase (or a lost sale to a competitor) before the next shipment arrives.
- **Let the customer adjust cadence easily.** Self-service frequency change is one of the highest-leverage retention levers in subscription commerce — a customer who can't easily slow down when overstocked cancels instead.
- **Curated/surprise boxes** (a box program, not a fixed-SKU replenishment) shift the value proposition from convenience to discovery — the failure modes differ: replenishment churns on wrong cadence or unwanted product; curated boxes churn on repetitive or irrelevant curation. Know which model this is before applying the wrong fix.

### Skip, Pause, and Swap

- **Skip/pause self-service is a retention lever, not a leak.** A customer who can skip one shipment when overstocked stays subscribed; a customer whose only options are "stay on the current cadence" or "cancel entirely" cancels. Treat a skip as a save, not a loss.
- **Make skip/pause/swap genuinely self-service** — requiring a support contact to skip a shipment adds friction at exactly the moment a customer is deciding whether the subscription is worth the hassle.
- **Track skip rate as a leading churn indicator.** A rising skip rate on a cohort usually precedes cancellation; treat it the way `churn-prevention` treats other pre-cancellation signals, and consider a proactive cadence-adjustment prompt before the customer skips enough times to just cancel instead.

### Subscription-Specific Churn

- **Distinguish "too much product" churn from "don't want this anymore" churn.** The first is a cadence problem, solvable with a skip/pause prompt or cadence extension; the second is a genuine save-offer or win-back situation. Treating the first like the second — a discount save offer to someone who just has too much product — misses the actual fix and burns margin for nothing; see `attribution/references/incrementality-checkpoint.md`'s save-offer trap, the same principle `churn-prevention` applies to SaaS save offers.
- **Failed payment (involuntary churn) applies here exactly as `churn-prevention` describes for SaaS** — dunning, card updaters, and retry logic are just as relevant to a recurring physical-goods subscription as a software one; see `retention-and-winback`'s Involuntary Churn: Payment Recovery section directly rather than re-deriving it here.
- **A cancel flow needs the same discipline `churn-prevention` applies generally** — understand the actual reason via an exit survey, offer a proportionate save (a skip/pause first, a discount only if the reason is genuinely price-sensitivity, not overstock), and don't make cancellation itself artificially difficult — a hard-to-cancel subscription creates the reputational and regulatory risk `compliance` flags for dark-pattern cancellation flows.

### Economics

- **Model subscription discount depth against realized LTV, not the first order's margin.** A subscribe-and-save discount (commonly in the 10-20% range) is usually justified by the value of a locked-in recurring relationship, not by that single order's own margin — the same "afford it at scale" discipline from Points Economics below applies here directly.
- **Shipping economics compound at subscription frequency.** A shipping cost that's a rounding error on an occasional purchase becomes a material recurring cost at subscription cadence — model it explicitly rather than assuming one-time-purchase unit economics still hold.

---

## Points Economics

If running a points program, the core design choice is the **earn rate** (points per dollar spent, or per action) and the **redemption value** (what a point is worth when redeemed).

- Anchor redemption value to your gross margin, not an arbitrary round number: the total value you give back across the earn-to-burn cycle needs to be a discount you can actually afford at scale, not just on the first redemption. Model it as "if every point issued this month gets redeemed, what does that cost as a % of the revenue that earned them" — and keep that percentage below what you'd otherwise spend to reacquire the same customer.
- Non-purchase earning actions (review, social share, referral, birthday, account creation) build engagement between purchases, but weight them well below purchase-based earning or you dilute the program's purpose and its economics.
- **Breakage** (points earned but never redeemed) is real and typically favorable to the business, but don't design a program that relies on breakage to be profitable — that's a program working against its own stated purpose.
- Points expiration is a lever (drives urgency, controls long-tail liability) but also a common source of customer resentment — if you use it, make the expiration policy visible before it triggers, not a surprise.

This repo doesn't assert specific point-value or redemption-rate benchmarks here deliberately — they vary enormously by margin and category. Model your own numbers from your own AOV and margin using the framing above.

---

## Tier Design

- **Entry criteria**: spend threshold, purchase count, or tenure — pick the one that best predicts your actual high-value customers, not just the easiest to compute.
- **Benefit ladder**: each tier should feel like a real step up, not a rounding error — free shipping at tier 1, early access at tier 2, a dedicated perk (exclusive product, bigger discount, real human support) at the top tier.
- **Maintenance/downgrade rules**: decide upfront whether tiers are evaluated per calendar year, rolling 12 months, or permanent once reached. Silent downgrades erode trust — always communicate before a customer loses status.
- **Make progress visible**: "You're $40 away from Gold" converts more than a static tier list — the same progress-bar principle that works in onboarding and popups applies here.

---

## Redemption & Rewards Catalog

Reward types, roughly in order of typical cost-to-perceived-value efficiency:

- **Discount on next purchase** — simplest, easiest to understand, easiest to abuse if not capped
- **Free product/gift** — feels more special than an equivalent-value discount, but adds inventory/fulfillment complexity
- **Early access** — costs little to nothing, works well for drop-based or limited-inventory brands
- **Exclusive experiences/content** — high perceived value for engaged customers, doesn't scale to a mass audience
- **Charity donation option** — low cost, appeals to a values-driven segment, shouldn't be the only redemption option

Whatever the catalog, keep at least one reward reachable quickly after joining — a program where the first reward feels distant loses people before they experience the loop.

### Abuse & Gaming

Any program with real value attached attracts people trying to extract more of it than intended — plan for this before scale exposes it, not after:

- **Multi-account abuse** — a single person or reseller creating multiple accounts to repeatedly claim first-purchase or entry-tier rewards. Tie enrollment to a verified identity signal (email/phone verification, one account per payment method or shipping address where feasible) rather than relying on goodwill.
- **Return-and-keep-the-points abuse** — earning points on a purchase, redeeming the reward, then returning the original item. Claw back or void the associated points/reward on a refunded order rather than treating earning and returns as unrelated events.
- **Reseller/arbitrage abuse** — a program generous enough that buying purely to earn and flip rewards becomes profitable on its own, independent of wanting the product. This is usually a sign the redemption value is set too high relative to margin (see Points Economics) rather than something to solve with rules alone.
- **Bot/automation abuse** on non-purchase earning actions (reviews, social shares, referral clicks) — cap how much of a customer's total point balance can come from non-purchase actions, and monitor for earning patterns that don't match plausible human behavior.

Set these guardrails proportionate to the program's actual value at stake — a small punch-card program doesn't need the same anti-fraud rigor as a paid membership tier with real cash-equivalent rewards.

---

## Enrollment & Trigger Moments

**High-intent enrollment moments:**
- Post-purchase confirmation (highest-context moment — they just proved intent to buy)
- Account creation
- Email capture in a popup, framed as "join and earn," not just "get 10% off"

**Reduce enrollment friction:**
- Auto-enroll at first purchase where possible, rather than requiring a separate signup step
- If enrollment is a separate action, make the value proposition concrete ("earn $X back on your next order"), not just "join our loyalty program"

---

## Retention Mechanics

- **Progress and gamification**: visible progress toward the next reward or tier drives re-engagement — mirrors the same principle used in onboarding checklists.
- **Point-balance reminders**: a customer who forgot they have points is a customer who's about to lapse — a well-timed "you have $X in rewards waiting" email/SMS is one of the highest-ROI touches a loyalty program can send. See `emails` and `sms` for the sequence mechanics.
- **Expiring-points nudges**: notify before points expire, not after — this is a save-the-relationship touch, not just a "use it or lose it" threat.
- **For subscription businesses**: loyalty and churn prevention overlap — a strong loyalty program is itself a churn-prevention lever (status/points lost on cancellation raises the cost of leaving). See `churn-prevention` for the cancellation-flow side of that same coin.

---

## Common Mistakes

- **Points that never get redeemed** — if redemption rate is very low, the program isn't delivering perceived value; customers don't feel the loop, they just see a number that doesn't mean anything to them.
- **Overly complex tier rules** — if you can't explain the program in one sentence, customers can't either.
- **Rewards that don't matter to the customer** — a reward catalog built around what's cheap to give, not what's wanted, trains customers to ignore the program.
- **No visible path to the next reward/tier** — invisible progress kills the habit loop the same way it does in onboarding.
- **Treating loyalty as a discount program in disguise** — if every "reward" is just a percentage off, you're training customers to wait for a discount rather than building actual loyalty. Mix in non-discount rewards (access, status, experience).
- **Launching before the math works** — see Points Economics; a program that's a surprise cost center at scale gets clawed back, which damages trust worse than never launching one.

---

## Measuring Success

**Program health:**
- Enrollment rate (% of customers who join)
- Active member rate (% who've earned or redeemed recently)
- Redemption rate (% of earned points/rewards actually redeemed)

**Business impact:**
- Repeat purchase rate: members vs. non-members
- AOV: members vs. non-members
- Purchase frequency: members vs. non-members
- Program cost as % of the incremental revenue it drives (not just as % of total revenue — isolate the program's actual lift)

Don't assume a member-vs-non-member gap is *caused* by the program — your most engaged customers were likely to join and to buy more anyway. Where possible, compare against a holdout group that's eligible but wasn't enrolled, or track cohorts before/after joining, rather than just eligible-vs-not at a point in time. See `attribution/references/incrementality-checkpoint.md` for how to scale this check to the stakes — a gut-check for a new, small program; a real holdout once it's a standing budget line.

---

## Launch Checklist

### Before Launch
- [ ] Define program goals and the metric that decides if it worked
- [ ] Model points/rewards economics against actual margin (see Points Economics)
- [ ] Choose program type (points, tiers, paid membership, punch card, hybrid) — start simple
- [ ] Build or configure the loyalty platform
- [ ] Design the reward catalog with at least one fast, reachable first reward
- [ ] Set up tracking for enrollment, earning, and redemption events
- [ ] Write the terms (expiration policy, tier maintenance rules) in plain language
- [ ] Test the complete earn → redeem loop end to end

### Launch
- [ ] Announce to existing customers with a clear, concrete value proposition
- [ ] Add enrollment prompts at the highest-intent moments (post-purchase, account creation)
- [ ] Brief support team on program mechanics and common questions
- [ ] Update site/app with program details and a way to check balance/status

### Post-Launch (First 30-60 Days)
- [ ] Review enrollment and early redemption rates
- [ ] Identify and fix the biggest friction point in the earn or redeem flow
- [ ] Send a point-balance reminder to enrolled-but-inactive members
- [ ] Gather qualitative feedback on whether the rewards feel worth it

---

## Task-Specific Questions

1. What's your purchase frequency and AOV — does the business support a points program, or is a simpler punch-card/tiered model a better fit to start?
2. What's your goal: purchase frequency, AOV, retention, or an owned-data asset?
3. What's your budget for rewards, as a % of revenue or margin?
4. Existing program or starting from scratch — if existing, what's underperforming?
5. What tools/platforms are you using or considering?
6. If subscription commerce: what's the actual usage cadence data, and is skip/pause/swap genuinely self-service today?

---

## Tool Integrations

For implementation, see the [tools registry](../../tools/REGISTRY.md). Key loyalty platforms:

| Tool | Best For | MCP | Guide |
|------|----------|:---:|-------|
| **Smile.io** | Points/tiers, common on Shopify | - | [smile-io.md](../../tools/integrations/smile-io.md) |
| **LoyaltyLion** | Points/tiers with deeper segmentation | - | See `tools/REGISTRY.md` for current guide status |
| **Yotpo Loyalty** | Combined loyalty + reviews/UGC platform | - | See `tools/REGISTRY.md` for current guide status |

---

## Related Skills

- **specialist-lenses**: For Adam Posner's loyalty-differentiation lens — auditing whether a program design is genuinely differentiated or a "sea of sameness" points template.
- **referrals**: For programs that reward bringing in *new* customers, rather than rewarding existing customers for staying — the two are often bundled but solve different problems
- **retention-and-winback**: For the cancellation/save-offer side of retention, in both SaaS and subscription-commerce businesses; loyalty is the proactive complement
- **emails** / **sms**: For point-balance reminders, tier-progress nudges, expiring-points sequences, and skip/pause reminders
- **popups**: For enrollment prompts and progress-to-next-reward messaging
- **pricing** / **offers**: For paid-membership tier design, reward-value framing, and subscribe-and-save discount depth
- **analytics**: For tracking enrollment, earning, redemption, and skip/pause events
- **compliance**: For dark-pattern cancellation-flow risk on a subscription program
- **attribution**: For the incrementality-checkpoint principle applied to subscription save offers
