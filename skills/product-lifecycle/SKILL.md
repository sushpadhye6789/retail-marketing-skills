---
name: product-lifecycle
description: "When the user wants marketing guidance for a product moving through its lifecycle — beyond the initial launch. Also use when the user mentions 'product transition,' 'phase out,' 'phasing out,' 'discontinue a product,' 'sunset a product,' 'product replacement,' 'product succession,' 'end of life,' 'EOL,' 'replace this product,' 'reformulation,' or 'repackaging.' Covers three stages: Transition (a product continues but changes materially — reformulation, repackaging, supplier change), Phase-Out (winding a product down with no successor), and Replacement (winding a product down while introducing a successor). For the initial go-to-market launch itself, see launch, which this skill hands off to and doesn't duplicate. For disposing of the resulting excess inventory, see overstock."
metadata:
  version: 1.0.2
---

# Product Lifecycle

You help users market a product through the stages of its life beyond the initial launch — a material change to a continuing product, winding a product down, or replacing one product with another. Each stage has different risks (customer confusion, lost SEO/ad history, alarmed subscribers) and needs different marketing handling than a launch does.

**For the initial go-to-market moment**, see `launch` — it covers the ORB framework, phased rollout, and Product Hunt strategy in depth, and this skill doesn't duplicate any of it. This skill picks up *after* a product is established, when something material changes about it.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check Section 15 (Distribution Model) if dealers are involved** — see `marketing-strategy/references/distribution-model-guide.md`; a phase-out, replacement, or transition usually needs dealer notice and coordinated timing so dealers aren't left selling a discontinued product without warning, or caught off guard by a replacement they didn't know was coming.

Gather this context (ask if not provided):

### 1. Which Stage
- **Transition**: the product continues, but something material is changing (formula, packaging, materials, supplier, a significant price move) — see below
- **Phase-out**: the product is being discontinued with no successor
- **Replacement**: the product is being discontinued *and* replaced by a successor

### 2. Customer Impact
- Is this a repeat-purchase or subscription product where existing customers will notice and need direct notice (vs. a one-time-purchase product where most affected customers are future buyers, not past ones)?
- What's the risk if customers feel blindsided (subscription cancellations, review backlash, trust damage)?

### 3. Timeline & Inventory
- Hard deadline (supplier contract end, regulatory change) or flexible?
- Remaining inventory of the outgoing product/packaging — see `overstock` if there's a real excess to manage

---

## Product Transition

A product continues, but something material changes: reformulation, repackaging/redesign, a supplier or manufacturing change, or a significant price move. The core tension is **how much to say, and how loudly** — too little transparency risks customers feeling deceived when they notice; too much risks alarming customers who wouldn't have noticed or cared.

- **Decide new SKU/listing vs. same SKU updated.** A new GTIN/SKU resets accumulated review history, Shopping listing performance, and ad account learning data (see `product-feed` and the sibling `ads` decision-system files' learning-phase logic) — often worth avoiding by keeping the same SKU if the change doesn't legally or practically require a new one. But a genuinely different product (different formula, different materials) sometimes needs a new SKU for accuracy and compliance — don't force continuity where it isn't honest.
- **Match disclosure to the change.** A packaging redesign with no functional change needs minimal explanation. A reformulation, ingredient change, or supplier change that could affect the customer's experience (allergens, performance, fit) needs proactive, clear communication — before they notice on their own, not after a complaint.
- **Visual identity continuity**: if packaging/design changes, check `brand-guidelines` to make sure the update is a deliberate evolution of the identity, not an accidental drift.
- **Time the communication with the actual change**, not before — announcing a change too far ahead of availability creates a period where customers don't know which version they're getting.

---

## Product Phase-Out (No Replacement)

Winding a product down without a successor.

- **Signals it's time**: declining margin or relevance, a category in structural decline, a supplier/regulatory change making continuation impractical, or a strategic decision to exit a segment (trace this back to `marketing-strategy` Section 12 — a phase-out should connect to a stated priority or constraint, not be an ad hoc decision).
- **Marketing investment should wind down gradually, not stop abruptly** — a sudden stop while the product is still listed confuses customers about whether it's still a real option; a managed wind-down (reducing paid spend, adding "limited availability" or "while supplies last" honest messaging as the reason becomes real — see `overstock`'s discontinued/end-of-line row and `offers/references/scarcity-urgency.md` on earned urgency) matches messaging to reality.
- **Subscription/repeat-purchase customers need direct, proactive notice** with enough lead time to adjust (find an alternative, stock up, or transition to something else you offer) — silent discontinuation on a subscription is one of the most damaging things a brand can do to a customer relationship, and it shows up in churn and complaint volume, not just lost revenue from that one SKU.
- **Content and SEO cleanup**: don't leave the product page as an orphaned 404 or a dead end — redirect to a relevant alternative or category page (see `site-architecture` and `seo-audit`), and decide whether to keep the page live with clear "discontinued" messaging (useful for existing customers searching for support info) or retire it entirely.
- **Coordinate with `overstock`** for any remaining inventory disposition.

---

## Emergency Phase-Out (Recall / Safety Issue)

A recall or safety-driven withdrawal is not a slow-wind-down phase-out — it inverts almost every guideline above, and marketing is not the lead function here:

- **Speed replaces the gradual wind-down.** Where a normal phase-out tapers spend and messaging over weeks, a safety issue needs marketing, site, and paid campaigns pulled or updated immediately — a live ad still promoting a recalled product is an active liability, not a lagging cleanup task.
- **Legal and compliance lead, marketing follows.** The recall notice language, scope, and required disclosures are a legal/regulatory matter (and, depending on the category and market, may be legally mandated in specific form) — see `compliance` and consult qualified counsel; this skill doesn't draft recall notices. Marketing's job is distribution and clarity of the approved message, not authoring it.
- **If the story reaches media or social before an official notice goes out**, that's a `public-relations` Crisis & Reactive PR situation running in parallel, not a separate track — the two need to be coordinated through one spokesperson and one set of approved facts.
- **Customer notification is not optional messaging, it's the core deliverable** — direct, unambiguous outreach (email/SMS at minimum, not just a site banner) to every identifiable affected customer, with clear instructions (stop use, return, replace, refund) and no promotional framing mixed in.
- **Don't quietly fold a safety-driven withdrawal into routine `overstock`/clearance messaging** — disposing of recalled stock through a discount or clearance channel is a compliance risk, not a sell-through opportunity; confirm disposition requirements with `compliance`/legal before any inventory movement.

---

## Product Replacement (Phase-Out + Successor)

The trickiest case — two products' marketing needs to be managed against each other during the transition.

- **Avoid cannibalizing the outgoing product's remaining sell-through** while not under-promoting the successor — this is a real tension, not something to wave away. If there's meaningful remaining inventory of the outgoing product, coordinate its sell-through timeline (see `overstock`) with how hard the successor is being pushed; a successor launched at full volume while the predecessor still has significant unsold stock creates internal competition for the same customer's attention and budget.
- **Decide the overlap model**: a hard cutover (old product pulled the moment the new one is available) vs. a parallel-availability window (both available for a defined period) — parallel availability reduces customer disruption but extends the cannibalization risk above; a hard cutover is cleaner but riskier if the successor has any early quality or supply issues.
- **Migration messaging**: "upgrade to X" framing works when the successor is a clear improvement; be honest if it's a lateral change (different but not strictly better) rather than forcing an upgrade narrative that doesn't hold up.
- **Manage the identity question**: does the successor inherit the predecessor's reviews, ratings, and accumulated proof, or start fresh? This is partly a platform/feed mechanic (see `product-feed`) and partly a messaging choice — a true reformulation-as-replacement can sometimes carry proof forward ("the product you love, improved"); a genuinely different product usually shouldn't.
- **Pricing relationship**: is the successor positioned at the same price tier, a premium step-up, or a value repositioning? This should be a deliberate `pricing`/`price-elasticity` decision, not just "whatever the new cost structure works out to."
- **For subscription customers on the outgoing product**: an explicit, opt-in transition path to the successor (not an automatic silent swap) protects trust — see `retention-and-winback` for the broader retention-communication discipline this borrows from.

---

## Common Mistakes

- **Silent discontinuation of a subscription/repeat-purchase product** — the single most damaging mistake in this whole skill; always give direct notice.
- **Orphaned product pages left as 404s** after phase-out — see `site-architecture`/`seo-audit`.
- **Unnecessarily resetting accumulated feed/ad performance history** on a transition that could have kept the same SKU/GTIN — check before defaulting to a new listing.
- **Launching a replacement at full volume while the predecessor still has significant unsold inventory** — creates avoidable internal cannibalization; coordinate with `overstock`.
- **No clear reason given for a material change** — customers who notice a change with no explanation assume the worst; proactive, honest communication is cheaper than the trust repair afterward.
- **Treating every lifecycle event as a launch** — a transition, phase-out, or replacement has different risks (existing customer trust, inventory, SEO continuity) than a net-new launch, and needs this skill's considerations, not just `launch`'s GTM playbook.

---

## Task-Specific Questions

1. Which stage is this — transition, phase-out, or replacement?
2. Is this a subscription/repeat-purchase product where existing customers need direct notice?
3. Same SKU/listing or a new one — and what does that mean for accumulated review/ad/feed history?
4. Is there remaining inventory to coordinate (see `overstock`)?
5. If a replacement: hard cutover or a parallel-availability window, and what's the pricing relationship between old and new?
6. Any dealer coordination needed (see `marketing-strategy` Section 15)?

---

## Related Skills

- **launch**: For the initial go-to-market moment — this skill picks up after that, not instead of it
- **overstock**: For disposing of remaining inventory during a phase-out or replacement
- **discount-and-clearance**: For any discount mechanics used to accelerate sell-through of an outgoing product
- **product-feed**: For feed/listing continuity decisions (new SKU vs. same SKU updated)
- **brand-guidelines**: For visual identity continuity through a repackaging/redesign
- **site-architecture** / **seo-audit**: For redirect and page-cleanup handling on discontinued products
- **retention-and-winback**: For the retention-communication discipline a subscription product's transition borrows from
- **pricing** / **price-elasticity**: For the pricing relationship between an outgoing and replacement product
- **marketing-strategy**: For the strategic priority a phase-out or major transition should trace back to
- **compliance**: For the regulatory/legal lead role on a recall or safety-driven emergency phase-out
- **public-relations**: For the Crisis & Reactive PR response running alongside a recall if it reaches media or social before an official notice
