---
name: pos-marketing
description: "When the user wants to plan point-of-sale or point-of-purchase marketing materials — in-store signage, shelf talkers, displays, or other physical/in-store marketing at the moment of purchase. Also use when the user mentions 'POS,' 'point of sale,' 'point of purchase,' 'POP display,' 'shelf talker,' 'end cap,' 'in-store signage,' 'in-store display,' or 'store display.' Scope note: this covers point-of-sale marketing materials and execution, not point-of-sale transaction systems/software — if the request is actually about POS system data or checkout software, that's outside this repo's marketing scope. For the digital retail-platform counterpart, see retail-media."
metadata:
  version: 1.0.3
---

# Point-of-Sale (POS) Marketing

You help users plan point-of-purchase marketing materials — the physical (or in-store digital) marketing that reaches a shopper at the moment they're standing in front of the product, with intent already established. This is a conversion and basket-size lever, not an awareness lever — the audience is already there.

**Scope note**: this skill is about point-of-sale *marketing materials* (signage, displays, in-store execution), not point-of-sale *transaction systems* (checkout software, payment processing). If the actual need is POS system/software work, that's outside this repo's marketing scope.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists, read it. Two fields drive most of this skill's guidance:
- **Section 14 (Brand Tier)** — see `marketing-strategy/references/brand-tier-guide.md`; POS material intensity and messaging style diverges sharply by tier (see below).
- **Section 15 (Distribution Model)** — see `distribution-model-guide.md`; own-stores means full direct control, dealers means coordination, shared materials, and compliance monitoring.

**If this work is part of a multi-channel campaign**, check `.agents/campaigns/` for an active Campaign Brief before drafting — match its message, offer, and featured products rather than improvising your own version (see `compound-marketing`'s Cross-Channel Consistency Check). No brief there isn't a blocker; it just means this is standalone work.

Gather this context (ask if not provided):

### 1. Where This Applies
- Own stores, dealer locations, or both?
- What's driving this — a standing POS presence, a specific campaign/promotion tie-in, or a new product launch?

### 2. Production & Distribution
- Centrally produced and shipped to locations, or locally executed per store/dealer?
- Any co-op/MDF funding involved if dealers are executing it? See `supplier-funded-marketing`.

### 3. Measurement
- Any ability to compare stores/locations with vs. without the material (for lift measurement, see below)?

---

## Types of POS/POP Materials

- **Shelf talkers / shelf strips** — small signage directly at the product's shelf position, typically the highest-frequency, lowest-cost material type.
- **End-cap and secondary displays** — placement off the regular shelf, used to drive attention beyond the product's normal position.
- **Window clings / decals** — storefront-level, drives foot traffic rather than in-aisle conversion.
- **Checkout counter displays** — impulse/add-on placement at the final decision point.
- **Floor decals / wayfinding** — directs traffic toward a specific area or display.
- **Digital in-store screens** — the in-store counterpart to `retail-media`'s digital placements, where available.
- **Packaging-as-POS** — secondary/shelf-ready packaging designed to double as the display itself, reducing separate material production needs.

---

## Omnichannel Fulfillment Signage (BOPIS / Curbside / Ship-from-Store)

Buy-online-pickup-in-store, curbside pickup, and ship-from-store are fulfillment options, but the physical execution of collecting an order is a genuine point-of-sale marketing moment — it's often a shopper's only in-person contact with the brand for that transaction, and a well- or poorly-handled pickup shapes repeat-purchase intent as much as any other in-store experience:

- **Wayfinding to the pickup point** — a clearly signed, easy-to-find pickup counter or curbside zone matters more here than almost any other POS placement, since this shopper has already committed to buy and just needs a fast, low-friction handoff; a confusing pickup experience actively undoes the convenience the fulfillment option promised.
- **Use the pickup moment as a merchandising opportunity, not just a handoff** — a well-placed impulse display near (not blocking) the pickup counter reaches a shopper who's already in the store with a completed purchase in hand and a few free minutes; see `visual-merchandising` for placement logic.
- **Curbside needs its own signage system** — clear exterior signage (designated parking/zones, a phone number or app-based check-in instruction, order-ready indicators) since this shopper may never enter the store at all.
- **Making the option known is a `local-marketing` job, not this skill's** — whether a location offers pickup/curbside, and communicating that to a searching shopper, lives in the Google Business Profile and site-side messaging; this skill picks up once the shopper has already chosen to use the option and is physically retrieving the order.
- **Ship-from-store** is largely invisible to POS marketing (it's a fulfillment/logistics decision, not a shopper-facing moment) except where it affects in-store inventory availability signage — don't let a shelf that looks "in stock" mislead a shopper when available units are actually earmarked for ship-from-store fulfillment.

---

## Tier Considerations

See `marketing-strategy/references/brand-tier-guide.md` for the general pattern this extends — POS specifically:

- **Budget/mass retail**: loud, promotional materials work and are expected — bold price call-outs, discount signage, high material density.
- **Mid-market**: a mix — clear signage without overwhelming price-first messaging.
- **Premium**: minimal, restrained materials — quality over quantity, letting the product itself carry more of the message than the signage does.
- **Luxury**: POS presence is often deliberately minimal or absent — the retail environment itself (curated, high-touch) does the work a budget brand's signage would otherwise need to do. Loud POS materials in a luxury setting undercut the position the same way loud discount signage would.

---

## Distribution Model Considerations

- **Own stores**: full creative and placement control — execute directly, coordinate with `brand-guidelines` for consistency.
- **Dealers**: needs centrally-produced material kits distributed to dealer locations, with a real compliance-monitoring step — materials produced but never actually placed are a common, easy-to-miss failure (see Common Mistakes). If POS materials are co-op-funded, see `supplier-funded-marketing`'s providing-side guidance for program design and compliance enforcement — this is one of the most common categories MDF funds actual dealer-executed marketing.

---

## Coordination with Campaigns

POS materials need to stay in sync with what's happening everywhere else, not run on their own separate calendar:

- **Tentpole campaigns**: `tentpole-campaign`'s cross-channel orchestration should explicitly include POS as one of the channels for any business with physical retail presence — a major brand campaign that doesn't show up in-store is missing a channel most other campaigns rely on for that same audience.
- **Discount/clearance events**: `discount-and-clearance` promotions need matching in-store signage, coordinated on the same timeline as the digital/email announcement.
- **Product lifecycle changes**: `product-lifecycle` phase-outs and replacements need POS materials updated or removed — stale signage for a discontinued product (or missing signage for its replacement) is a common, easily-overlooked gap that undermines the transition.

---

## Measurement

Harder to directly attribute than digital channels — POS influence is largely invisible to standard ecommerce attribution (see `attribution`'s blind-spots framing; in-store influence on a later online purchase, or vice versa, is a real but hard-to-track effect). Proxy measures worth using instead:

- **Lift analysis**: compare sales in locations with the material placed against comparable locations without it — structurally the same holdout logic `attribution` uses for incrementality testing, applied to a physical rather than digital treatment.
- **Compliance/execution audits**: is the material actually up and correctly placed at dealer locations — a genuine, common retail-marketing operational gap, not just a measurement nicety. No lift analysis matters if the material was never actually displayed.
- **Trackable calls-to-action**: a QR code or promo code on POS material bridges physical placement to a digital, directly measurable action.

---

## Common Mistakes

- **Materials produced but never actually placed** at dealer locations — the compliance/execution audit above exists specifically to catch this.
- **Stale POS material** not updated when a product, campaign, or promotion changes — see Coordination with Campaigns.
- **Tier-mismatched aesthetic** — loud discount signage in a premium/luxury retail environment, or overly restrained materials in a budget setting where customers expect and respond to bold promotional signage.
- **No measurement plan at all** — treating POS as "just produce and ship it" without ever assessing whether it drives lift.
- **Ignoring co-op funding eligibility** for dealer-executed POS materials — see `supplier-funded-marketing`.

---

## Task-Specific Questions

1. Own stores, dealer locations, or both?
2. What's driving this — standing presence, a campaign tie-in, or a launch/lifecycle change?
3. Centrally produced and distributed, or locally executed?
4. Any co-op/MDF funding involved?
5. Any ability to compare locations with vs. without the material for lift measurement?

---

## Related Skills

- **marketing-strategy**: For brand tier and distribution-model context driving material style and execution model
- **brand-guidelines**: For visual identity applied to physical materials
- **supplier-funded-marketing**: For co-op-funded POS programs and dealer compliance
- **tentpole-campaign**: For coordinating POS as a channel within a major brand campaign
- **compound-marketing**: For the Cross-Channel Consistency Check and Campaign Brief that keeps in-store signage from being the channel left out of an otherwise-coordinated multi-channel promotion
- **discount-and-clearance**: For promo-driven signage
- **product-lifecycle**: For updating/removing POS materials on a transition, phase-out, or replacement
- **attribution**: For lift-measurement methodology applied to a physical placement
- **retail-media**: For the digital retail-platform counterpart to physical POS
- **brand-management**: For governance/consistency enforcement across dealer-executed POS
- **digital-out-of-home**: For the outside-the-store, place-based counterpart once the shopper hasn't arrived yet
- **visual-merchandising**: For the store layout and product-placement strategy this skill's signage and materials live within
- **local-marketing**: For driving the visit that leads to a shopper encountering these materials in the first place
- **experiential-marketing**: For in-store demo events, which often need coordinated physical setup alongside POS materials
