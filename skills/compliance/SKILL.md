---
name: compliance
description: "When the user wants to check a marketing decision, claim, or campaign for compliance risk — advertising claims, required disclosures, email/SMS consent, data privacy, or pricing-claim accuracy. Also use when the user mentions 'marketing compliance,' 'advertising compliance,' 'FTC disclosure,' 'ad claims,' 'substantiation,' 'email compliance,' 'CAN-SPAM,' 'GDPR,' 'data privacy marketing,' 'cookie consent,' 'was/now pricing,' 'drip pricing,' 'affiliate disclosure,' 'influencer disclosure,' or 'accessibility compliance.' This skill flags where a marketing decision touches a compliance-risk area and what the general principle is — it is not legal advice and does not assert jurisdiction-specific legal thresholds, which change over time and vary by region. Route anything with real stakes to qualified legal/compliance counsel before publishing."
metadata:
  version: 1.0.2
---

# Marketing Compliance

You help users spot where a marketing decision, claim, or campaign touches compliance risk, and flag it for review before it ships — not after a complaint or regulatory inquiry surfaces it.

**This skill is not legal advice.** Specific legal thresholds (what counts as adequate disclosure, what consent model applies, what substantiation is required) vary by jurisdiction and change over time — asserting a specific rule here with confidence would be worse than useless if it's wrong or out of date. This skill's job is pattern recognition: naming the compliance-risk category a decision falls into, the general principle behind it, and when to route to a qualified lawyer or compliance professional rather than proceed on assumption. Treat every "flag this for legal review" note below as a real instruction, not boilerplate.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists, read it. **Check Section 15 (Distribution Model)** — if the business sells through dealers, dealer-executed marketing carries its own compliance exposure (co-op/MDF-funded creative, dealer-made claims about the brand's products) that's worth naming explicitly — see `supplier-funded-marketing`'s compliance-enforcement discipline.

Gather this context (ask if not provided):

### 1. What's Being Reviewed
- A specific claim, a full campaign, an email/SMS program, a pricing promotion, or a general compliance check-in?
- What markets/jurisdictions does this reach? (This matters enormously — rules that apply in one region often don't in another, and this skill won't assume a single jurisdiction's rules apply globally.)

### 2. Stakes
- Regulated category (health, finance, children's products) with typically higher compliance scrutiny, or a general consumer category?
- Has legal/compliance counsel been involved yet, or is this an early draft?

---

## Advertising Claims & Substantiation

**General principle**: a claim needs to be substantiated *before* it's published, not defended after the fact if challenged. This applies especially to:
- **Comparative claims** against named or clearly identifiable competitors — carries more scrutiny than a general claim.
- **"Clinically proven," "studies show," "#1 rated"** and similar evidence-invoking language — needs the actual study or data behind it, not just confidence in the claim.
- **Testimonials and reviews** — must be genuine, not fabricated or incentivized without disclosure (see Disclosure below), and typical-result disclaimers may be needed if a testimonial describes an atypical outcome.

This connects directly to `offers`'s existing Banned Vocabulary section — "100% guaranteed without specifying conditions" and "Worth $X with no comparable" are flagged there as bad copywriting *and* here as compliance risk; the two concerns point the same direction.

**Flag for legal review**: any claim the business can't currently point to real evidence for, any comparative claim naming a specific competitor, any health/efficacy/safety claim.

---

## Disclosure Requirements

Paid partnerships, sponsored content, and affiliate relationships generally require disclosure to the audience — the specific rules and regulator vary by jurisdiction (multiple regions have their own frameworks, not just one), but the underlying principles are consistent enough to apply broadly:

- **Clear and conspicuous** — not buried in a wall of hashtags, not requiring a "see more" click to find.
- **Understandable to an ordinary audience member** — jargon or ambiguous shorthand doesn't count as adequate disclosure.
- **Made before the audience takes action** — a disclosure that appears after someone has already clicked through or purchased is too late.

See `influencer-marketing` (which already flags FTC-style disclosure as a trigger) for the execution side — this skill is the compliance-awareness layer underneath that.

**Flag for legal review**: any influencer/affiliate program's disclosure templates and placement, before scaling the program.

---

## Email / SMS / Direct Marketing Consent

**General principle**: consent models for direct marketing vary sharply by jurisdiction — some require explicit opt-in *before* any marketing message is sent, others operate on an opt-out basis with fewer upfront restrictions. Don't assume one model applies everywhere the business markets to.

- **Purchased or rented contact lists carry materially more compliance risk** than an owned, consented list — flag any list-buying decision for review before use.
- **Unsubscribe/opt-out mechanisms need to be easy to find and use, and honored promptly** once a request is made — this is close to a universal principle even where the exact required timeframe varies.

See `emails`/`sms` for execution; this skill is the compliance layer to check before scaling a program or entering a new market.

**Flag for legal review**: entering a new market/jurisdiction with an existing list or program design, any list acquired from a third party.

---

## Data Privacy in Marketing

Consent requirements for tracking (cookies, pixels, first-party data collection) vary sharply by region — some require explicit opt-in consent before non-essential tracking runs at all, others are more permissive. See `attribution`'s first-party tracking pillar for the technical identity-graph side of this; this skill flags the consent layer that has to sit on top of it before that tracking is legally collected in a given market.

**Flag for legal review**: any new tracking implementation reaching a new market, any first-party data usage beyond what was disclosed at collection.

---

## Pricing & Promotion Claims

- **"Was/now" pricing** needs the "was" price to be a genuine, recently-charged price — not inflated specifically to make a discount look bigger. This is the direct compliance counterpart to `discount-and-clearance`'s honest-messaging principle and `offers`'s Banned Vocabulary ("Worth $X or $Y value with no comparable" is both bad copywriting and, in several jurisdictions, a real compliance risk).
- **Drip pricing** (revealing mandatory fees only late in checkout, after the customer has committed attention to the purchase) is under increasing regulatory scrutiny in multiple jurisdictions — the general principle worth flagging is: show the real total price as early as practical, not just the headline number.
- **MAP/RRP disclaimers**, if the business sells through dealers — see `pricing`'s competitive-price-monitoring reference and `marketing-strategy/references/distribution-model-guide.md`.

**Flag for legal review**: any "was/now" price claim where the "was" price wasn't the genuine recent price, any checkout flow where mandatory fees appear only at the final step.

---

## Accessibility

Marketing assets (emails, landing pages, ad creative, the site itself) have accessibility standards in play in a growing number of jurisdictions, and are worth treating as good practice regardless of whether a specific legal requirement currently applies to the business — color contrast, alt text, readable font sizing, and captioned video are the highest-leverage basics. See `cro`, `copywriting`, and `brand-guidelines`' color-palette contrast note for where this connects.

---

## A Working Process

- **Flag before publishing, not after** — build the compliance check into the review step of a campaign, not as an afterthought if something gets challenged.
- **Escalate real stakes to qualified counsel** — every "flag for legal review" note above is a genuine instruction; this skill's job is recognizing when one applies, not substituting for the review itself.
- **Keep records** — substantiation for claims, consent records for direct marketing, disclosure placement for sponsored content. Documentation is cheap before a problem; it's the thing that actually matters if one arises.

---

## Common Mistakes

- **"Everyone in the category does it" as a substitute for actual compliance review** — competitive norms aren't a legal defense.
- **Inflating a "was" price to manufacture a bigger-looking discount** — see Pricing & Promotion Claims.
- **Disclosure that's technically present but not clear or conspicuous** (buried, jargon-heavy, or after the fact).
- **Assuming one jurisdiction's rules apply globally** for a business marketing across multiple markets — see Email/SMS Consent and Data Privacy above.
- **No record-keeping** for substantiation, consent, or disclosure decisions, leaving nothing to point to if a claim is challenged later.

---

## Task-Specific Questions

1. What's being reviewed, and what markets/jurisdictions does it reach?
2. Is this a regulated category with typically higher scrutiny?
3. Has legal/compliance counsel already been involved, or is this an early draft?
4. Does this involve dealer-executed marketing with its own compliance exposure?
5. Is there existing substantiation, consent, or disclosure documentation to check against?

---

## Related Skills

- **offers**: Its Banned Vocabulary section is the copywriting-level version of several claims/pricing risks flagged here in compliance terms
- **discount-and-clearance**: For the honest-messaging discipline that "was/now" pricing compliance depends on
- **influencer-marketing**: For disclosure execution on creator/affiliate partnerships
- **emails** / **sms**: For consent-model execution in direct marketing programs
- **attribution**: For the first-party tracking technical layer this skill's data-privacy consent check sits on top of
- **pricing**: For MAP/dealer pricing context if the business sells through dealers
- **supplier-funded-marketing**: For dealer-executed marketing's own compliance exposure
- **marketing-strategy**: For the distribution-model and market-reach context this skill's jurisdiction checks depend on
- **product-lifecycle**: For the recall/safety-driven emergency phase-out this skill leads on, regulatory notice and disposition requirements included
- **public-relations**: For the external Crisis & Reactive PR response running alongside any compliance issue that reaches media or social
- **cro**: For claims-accuracy limits on stock/urgency indicators used in product page and cart CRO
