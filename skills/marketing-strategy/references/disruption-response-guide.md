# Supply Disruption Response Guide

What marketing does when supply is disrupted — a geopolitical event, a pandemic-style shock, a shipping/logistics crisis, a tariff change, or a single critical supplier failing. **This guide is scoped to marketing's actual job during a disruption: demand-shaping, customer communication, and channel coordination — not supply-chain management itself.** Fixing the disruption (sourcing alternatives, logistics rerouting, production reallocation) is an operations/supply-chain function this repo doesn't cover, the same way NPD isn't covered by `product-lifecycle`. If asked to solve the disruption itself, say so plainly rather than stretching a marketing skill to cover it.

## Types of disruption this covers

- **Input/component shortage** — a material or part becomes unavailable or severely constrained.
- **Logistics/shipping disruption** — port congestion, freight capacity shortage, a shipping-lane closure (e.g. a regional conflict affecting a trade route).
- **Tariff/customs cost shock** — a sudden landed-cost increase from a policy change, not a shortage of physical supply.
- **Regional conflict or sanctions cutting off a supplier or a market** — either the input side (can't source) or the demand side (can't sell into a region).
- **Pandemic-style combined shock** — simultaneous supply constraint and demand volatility (a spike in some categories, a collapse in others), plus workforce/operational disruption.

## Immediate marketing actions, in order

1. **Pause or adjust demand-generation for anything that can't be fulfilled.** A live ad or retail media placement (`ads`, `retail-media`) still driving traffic to a product that's out of stock or facing a long delay wastes spend and actively damages trust — this is the first thing to check, before any communication plan. See `overstock`'s discontinued/end-of-line messaging pattern for the tone to avoid (don't let live campaigns imply immediate availability that no longer exists).
2. **Communicate honestly and promptly, don't go silent.** Customers tolerate a real delay far better than silence followed by a surprise. State the actual expected timeline if known, or state honestly that it's unknown and when you'll update them next — see `compliance` for what "expected" and "estimated" claims need to be defensible, not just reassuring.
3. **Never let a shortage read as manufactured scarcity.** A real supply constraint and a fake urgency tactic look identical to a skeptical customer if the messaging isn't precise — see `offers/references/scarcity-urgency.md`'s distinction between earned and fabricated urgency, and `compliance` for the dark-pattern risk of a "only 2 left!" framing during a period when stock genuinely is constrained for reasons you're not disclosing. Say what's actually true.
4. **Coordinate with dealers/channel partners before they find out from a customer.** If the business sells through a dealer network (`marketing-strategy/references/distribution-model-guide.md`), dealers need advance notice of an allocation change or delay — the same cascade-notice discipline `repositioning` applies to a positioning change applies here to a supply change. A dealer caught flat-footed by a shortage they didn't know was coming is a relationship cost on top of the supply cost.
5. **Decide and communicate the allocation priority explicitly.** When stock is genuinely constrained, someone has to decide who gets it first — existing loyal customers (`loyalty`), pre-order/waitlist customers in order (`launch`'s Pre-Order phase logic), dealers by tier or historical volume (`marketing-strategy/references/distribution-model-guide.md`'s Dealer Range Tiers section), or first-come-first-served online. This is a real cross-functional decision (marketing doesn't own inventory allocation alone), but marketing needs the answer stated clearly before it can communicate consistently across channels — an inconsistent, ad hoc allocation that customers can see through erodes trust faster than the shortage itself.
6. **Offer a real substitute where one exists, rather than losing the sale silently.** See `product-feed`/`cro` for surfacing an in-stock alternative on the product page, and `range-review` for whether a substitute is close enough to recommend honestly — don't recommend a substitute that doesn't actually meet the customer's need just to convert the visit.
7. **Handle a cost-driven (tariff/logistics) price increase transparently if one is needed.** A sudden landed-cost shock sometimes forces a price change — route the actual number through `pricing`'s margin-preservation logic rather than a silent, unexplained increase (which reads as price-gouging even when it isn't) or an unsustainable absorption of the cost that quietly erodes margin. Whether to explain the reason publicly is a brand-voice call (see `brand-tier-guide.md`), but the price itself needs to be a deliberate decision, not a drift.

## What not to do

- **Don't quietly stretch inventory by degrading quality or substituting materials without disclosure** — if a formulation, material, or spec changes because of the disruption, that's a `product-lifecycle` Transition event with its own disclosure obligations, not something to fold silently into "business as usual" messaging.
- **Don't fabricate a resilience narrative.** A "committed to local sourcing" or "unaffected by global disruptions" claim needs to be true and substantiated (`compliance`) — a disruption is exactly the moment a false resilience claim is most tempting and most damaging if it's later shown to be false.
- **Don't let the disruption become the brand's whole story if it's temporary.** Communicate it clearly while it's real, then return to normal messaging once resolved — don't let a crisis-response tone linger past the point where it's still true, which reads as either stale or as covering for an ongoing problem.

## Related Skills

- **compliance** — substantiation standard for delay/availability claims, disclosure requirements for a material product change, and the dark-pattern risk of scarcity messaging during a genuine shortage
- **ads** / **retail-media** — pausing or adjusting live demand generation for unfulfillable products
- **overstock** — the inverse case (excess inventory) and its messaging patterns for "limited availability" language
- **distribution-model-guide.md** — dealer notice, coordination, and range-tier allocation priority
- **repositioning** — the cascade-notice discipline this guide borrows for dealer/partner communication
- **loyalty** — allocation priority for existing customers during a constrained-stock period
- **launch** — pre-order/waitlist sequencing logic, applicable to a constrained-allocation rollout
- **pricing** — margin-preservation logic for a cost-shock-driven price change
- **product-feed** / **cro** / **range-review** — surfacing and vetting an honest in-stock substitute
