# Industry-Specific Template Package: DTC Home Fragrance Retailer

**Fictional company throughout: Amberlight Candle Co.** Everything below is a worked *process* template — target lists, outreach sequences, flow redesigns, copy — not a claim about results a real campaign produced. Per the standard now applied across this repo (see `evaluations/README.md`), any "expected outcome" language here is a planning estimate to replace with real data once run, never a substitute for it.

This package demonstrates three skills together, since they naturally chain for a real DTC brand launch: `directory-submissions` (discovery/backlinks), `onboarding` (loyalty app first-run), and `signup` (checkout + loyalty account creation) — all retooled away from SaaS framing this session, with no private-tier depth behind any of them until now.

## Why This Vertical Needs Specialized Marketing

- **Gifting is a primary demand driver**, not a secondary one — candles are one of the most-searched holiday gift-guide categories, so directory/gift-guide placement is a first-order acquisition channel, not a nice-to-have.
- **Low AOV, replenishment-driven** — a well-loved scent gets rebought; the subscribe-and-save and loyalty-app mechanics matter as much as new-customer acquisition.
- **Trust signals matter disproportionately** — soy/coconut wax claims, clean-burning claims, and sustainability certifications (B Corp, 1% for the Planet) are things a gift-buyer researches before purchasing for someone else, which is exactly what sustainability/certification directories and review platforms are for.

## Package Contents

### 1. Marketing Strategy Foundation

```markdown
### 3.1 Primary Target Audience
Two distinct buyer modes: self-purchasers (buying their own signature scent, repeat/subscription-driven) and gift-buyers (holiday/birthday/housewarming, one-time but higher AOV via bundles).

### 3.2 Persona 1: The Ritual Buyer (self-purchase)
- Behavioral: Found the brand via a gift they received, or a gift-guide feature; became a repeat buyer of one specific scent
- Key phrase from research: "I don't want to run out, just put me on the subscription"

### 3.3 Persona 2: The Thoughtful Gifter
- Behavioral: Searches "best candle gifts for [occasion]" or clicks through a gift-guide listicle; researches sustainability/ingredient claims before buying for someone else
- Key phrase from research: "I want it to feel like I put real thought into it, not just grabbed something at checkout"
```

### 2. Directory Submissions — Worked Campaign

**Target list, scored per the `directory-submissions` fit framework:**

| Directory/Guide | Type | Fit | Lead time needed |
|---|---|---|---|
| "Best Candles for [Holiday]" gift guides (3-4 target publications) | Gift guide | High — direct gifting-intent traffic | 8-12 weeks pre-holiday |
| B Corp Directory | Certification/sustainability | High — matches the Thoughtful Gifter's research behavior | Certification process itself takes months; directory listing is fast once certified |
| 1% for the Planet member directory | Cause/sustainability | Medium-high | Fast once enrolled |
| Trustpilot | Review platform | High — trust signal at the exact moment a gift-buyer is deciding | Ongoing (review generation, not a one-time submission) |
| RetailMeNot / regional deal aggregators | Deal aggregator | Medium — margin-sensitive, only worth it around a real promotional moment | 2-3 weeks |
| Local/regional "best home goods shops" city guides | Vertical/lifestyle directory | Medium — if there's a physical retail or market presence | 4-6 weeks |

**Worked gift-guide pitch (the actual outreach template, filled in):**

```
Subject: Amberlight for your [Holiday] candle gift guide — samples + a real angle

Hi [Editor name],

I noticed your [Publication]'s gift guides always include a candle pick — wanted
to flag Amberlight for [Holiday] consideration.

The angle beyond "nice candle": every scent is named and blended around a specific
memory submitted by a customer (we publish the story on the product page) — gives
you a genuine narrative hook beyond "smells like autumn," if that's useful for the
piece.

Happy to send samples of our top 3 gift-set candidates + high-res photography.
Price point: $28-$58 depending on set size — flexible for whatever range your
guide is covering.

[name]
```

**Timeline for a holiday gift-guide push (backward-planned from the guide's publish date, typically early-to-mid November for December gifting):**
- Week -12: Finalize which 3-4 SKUs are the "gift guide candidates" (not the full catalog — editors want a curated pick, not a menu)
- Week -10: Send the pitch above to a scored target list (see `journalist-pitching.md`'s discovery/scoring approach, adapted for gift-guide editors specifically rather than news journalists)
- Week -8: Ship samples to any editor who responds
- Week -4: Follow up once on anyone who received samples but hasn't confirmed inclusion
- Week -1: Confirm final placements are live; if a guide includes a discount code ask, have one ready that doesn't undercut the subscribe-and-save program's value

**Certification-directory note:** the B Corp and 1% for the Planet listings aren't a marketing task on their own — they're a downstream benefit of a real certification/membership process that has to happen first. Don't treat "get listed in the B Corp directory" as a marketing to-do; treat "pursue B Corp certification" as the actual (much longer) project, with the directory listing as the free distribution that comes after.

### 3. Onboarding — Loyalty App First-Run Flow

Amberlight's loyalty app (order tracking + subscribe-and-save management + VIP perks) redesigned per the `onboarding` skill:

**Before:** 6-step generic onboarding (create account → verify email → set preferences → tutorial carousel → notification permission ask → done), 34% completion rate, no persona differentiation.

**Redesigned flow:**
1. **Welcome screen asks one branching question first**: "Shopping for yourself, or already have a favorite scent?" — routes Ritual Buyers toward "manage your subscription" as the first real action, and first-time/gift-recipients toward a scent-quiz-style discovery flow instead of a generic tutorial.
2. **Skip the notification-permission ask on first open** — move it to right after the first meaningful action (setting up a subscription or completing a scent quiz), when there's already a reason to want order-status notifications. Asking cold on screen one is why the original flow lost people at step 5.
3. **First "aha moment" redefined as "subscription configured or first order tracked,"** not "account created" — account creation is a means to that end, not the activation event itself.
4. **Progress indicator + one genuine reward** (a discovery-size sample added to first subscription order) for completing setup, not just a checkmark.

**Persona-specific empty states:**
- Ritual Buyer, no subscription yet: "Never run out of [their signature scent] again — set up auto-reorder"
- Thoughtful Gifter / first-time buyer: "Tell us who this is for and we'll help you pick" (routes to the scent quiz, not a blank product grid)

### 4. Signup — Checkout & Loyalty Account Creation

Per the `signup` skill's guest-checkout-first principle:

**Before:** Account creation required before checkout could be completed — a common and costly mistake for a gift-buying-heavy category, where the buyer often doesn't want an ongoing account.

**Redesigned flow:**
1. **Guest checkout is the default path.** Account creation is offered *after* the order is placed ("Save your info for next time?"), not as a gate before purchase.
2. **Loyalty enrollment is a separate, explicit choice** — not bundled silently into account creation. A gift-buyer creating a one-time account to track a shipment shouldn't be auto-enrolled in a loyalty program they'll never use.
3. **Subscribe-and-save signup is its own short flow**, not folded into general account creation — frequency selection (monthly/bi-monthly) and scent selection are the two decisions that actually matter; everything else (password, marketing opt-in) comes after those, not before.

## What This Demonstrates — Reusing This for Another Retail Client

1. **Directory-submissions**: score the target list by directory type first (gift guide vs. certification vs. review platform vs. deal aggregator — each needs a different pitch and lead time), then work backward from the actual publish/certification date, not forward from "when we happen to get to it."
2. **Onboarding**: redefine the "aha moment" around the action that actually indicates retention risk is resolved (a configured subscription, not a completed signup form) — then design the whole flow to get there fastest.
3. **Signup**: guest checkout first, loyalty enrollment as an explicit separate choice, subscription signup as its own short flow — the same three-way split works for most retail/DTC clients regardless of category.

## Related

- Public skills this demonstrates: `directory-submissions`, `onboarding`, `signup`
- `journalist-pitching.md` (public, `public-relations` skill) — the scoring/discovery approach adapted above for gift-guide editors
- `loyalty` — the program mechanics behind the VIP perks referenced in the onboarding flow
- `compliance` — endorsement-disclosure and certification-claim review before any sustainability/certification messaging ships
