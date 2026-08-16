---
name: supplier-funded-marketing
description: "When the user wants help with marketing development funds (MDF) or co-op advertising — either requesting and using funds a supplier/manufacturer provides, or designing and administering a program that funds a dealer network's marketing. Also use when the user mentions 'MDF,' 'marketing development funds,' 'co-op advertising,' 'co-op marketing,' 'vendor funded marketing,' 'supplier funded marketing,' 'dealer marketing funds,' 'co-op claim,' or 'brand compliance funds.' Covers both directions of the channel — a business can be receiving funds from its own suppliers and providing funds to its own dealers at the same time; establish which direction a given task is about before proceeding."
metadata:
  version: 1.0.0
---

# Supplier-Funded Marketing

You help users work with marketing funds that flow through a distribution channel — either funds a supplier/manufacturer gives *to* the user's business to market their products, or funds the user's business gives *to* its own dealer network. The same disciplines (pre-approval, brand compliance, claims process, ROI measurement) apply on both sides, just with the roles reversed.

**Establish direction first.** A business can sit in the middle of a channel — receiving MDF from its own suppliers while also funding its own dealer network — but a given conversation is usually about one direction at a time. Ask which applies before giving guidance: **receiving** funds (you're the dealer/retailer), **providing** funds (you're the supplier), or the specific task spans both.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check Section 15 (Distribution Model).** This skill only applies if the business sells through dealers, or itself sells products sourced from suppliers who run co-op programs — see `marketing-strategy/references/distribution-model-guide.md`. A pure ecom-only or own-stores brand with no dealer network on either side of it doesn't need this skill.

Gather this context (ask if not provided):

### 1. Direction
- Receiving funds from suppliers, providing funds to dealers, or both?
- If multi-supplier (common for a multi-brand retailer/dealer): which supplier's program is this about — each typically has its own rules, deadlines, and compliance requirements

### 2. Program Structure (whichever direction applies)
- How funds are calculated — accrual based on purchase volume, a flat allocation, a matching-funds structure (supplier/you match dealer spend up to a cap), or something else
- Eligible spend categories, and any exclusions (some programs exclude price-promotion/discount advertising and only cover awareness activity)
- Claim/approval process and deadlines

### 3. The Task
- Planning a specific campaign to fund/spend against, submitting or processing a claim, designing a new program, or auditing utilization?

---

## Receiving Funds (you're the dealer/retailer)

- **Pre-approval is usually required before spending, not after.** Most co-op programs require the creative and media plan to be submitted and approved before the spend happens — treat this as a hard gate in the campaign timeline (see `tentpole-campaign`'s planning cadence for how this fits into a broader campaign plan), not a formality to handle after the fact. Spend that skips pre-approval is often non-reimbursable regardless of how compliant the creative turns out to be.
- **Brand compliance is the most common reason a claim gets rejected.** The supplier's brand guidelines (logo usage, approved messaging, required disclaimers) apply to funded creative — this is the same discipline this repo's own `brand-guidelines` skill covers, just applied to *the supplier's* identity rather than your own. Check their guidelines before producing funded creative, not after a rejected claim.
- **Documentation for the claim** typically needs proof of performance — tearsheets, screenshots, invoices, run dates — collected as the campaign runs, not reconstructed afterward.
- **Funds are often "use it or lose it" within a defined period.** Coordinate your own campaign calendar (`tentpole-campaign`, `discount-and-clearance`) with fund availability and deadlines so allocated funds don't go unused — a fund that expires unused is a real, avoidable cost.
- **Multi-supplier coordination**: if funded by several suppliers with different programs, track each one's rules, deadlines, and compliance requirements separately — conflating them (using one supplier's approved creative template for another's funded campaign) is a common compliance mistake.
- **Approval isn't final — retain the proof-of-performance documentation past the claim's payment date.** Many programs reserve the right to audit funded claims after payment and claw back funds found non-compliant on review, even after initial approval and reimbursement. Keep tearsheets, screenshots, and run-date records for the program's stated audit window (or a reasonable default if none is stated), not just until the claim clears.

---

## Providing Funds (you're the supplier)

- **Design the fund structure deliberately** — accrual-based (tied to dealer purchase volume, scales naturally with the relationship), flat allocation (simpler to administer, less tied to actual dealer performance), or matching funds (you match dealer spend up to a cap, which self-selects for dealers actually willing to invest). Each has different incentive effects; pick based on what behavior you actually want to encourage.
- **Set clear eligible spend categories and compliance requirements upfront** — what the funds can be used for, and what brand standards funded creative must meet. Provide your own `brand-guidelines` output (or an excerpt of it) directly to dealers as the compliance reference, rather than leaving brand consistency to interpretation.
- **Administer claims with a workable approval and payment/credit timeline** — a process so slow or burdensome that dealers don't bother claiming defeats the program's purpose regardless of how well-funded it is on paper.
- **Enforce compliance consistently** — inconsistent enforcement (some dealers' off-brand creative gets approved, others' doesn't) breeds resentment and doesn't protect the brand anyway.

### Measuring program ROI

The strongest method reuses `attribution`'s incrementality/holdout logic directly: compare sell-through or sales lift for dealers who used MDF-funded campaigns against a matched set of comparable dealers who didn't (or didn't during the same window) — this isolates the program's actual incremental effect rather than just observing that funded dealers sold more, which could reflect that your best-performing dealers are also the ones most likely to use available funds. Without this comparison, program ROI numbers are directional at best.

---

## Common Mistakes (Either Direction)

- **Spending before pre-approval** (receiving side) — creates real risk of a non-reimbursable claim regardless of how good the resulting campaign was.
- **Missing claim submission deadlines** — funds with no claim on file by the deadline are typically forfeited.
- **Non-compliant creative** — the most common reason claims get rejected on the receiving side, and the most common brand-dilution risk on the providing side.
- **Treating MDF/co-op funds as free money without measuring incremental impact** — see Measuring program ROI; a program can look successful on raw utilization while actually just subsidizing spend that would have happened anyway.
- **Letting funds expire unused** because campaign timing wasn't coordinated with fund deadlines.
- **Inconsistent compliance enforcement** across dealers or campaigns (providing side).

---

## Task-Specific Questions

1. Which direction is this task about — receiving, providing, or both?
2. If receiving: which supplier's program, and what's the pre-approval and claim process?
3. If providing: what fund structure and compliance requirements are already in place, or being designed?
4. What's the deadline or claim window this task needs to work within?
5. Is there a way to measure this program's incremental impact, or is utilization the only current metric?

---

## Related Skills

- **marketing-strategy**: For the distribution-model context (Section 15) that determines whether this skill applies at all
- **brand-guidelines**: For the compliance reference — your own guidelines when providing funds to dealers, the supplier's when receiving funds from them
- **tentpole-campaign** / **discount-and-clearance**: For the campaigns that co-funded spend often supports
- **attribution**: For the holdout-based methodology used to measure a co-op program's actual incremental ROI
- **ads**: For the media execution a funded campaign typically spends against
