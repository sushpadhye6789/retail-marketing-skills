---
name: overstock
description: "When the user has excess, aging, dead, or discontinued inventory and needs to diagnose why, and decide how to dispose of it. Also use when the user mentions 'overstock,' 'excess inventory,' 'dead stock,' 'aging inventory,' 'slow-moving inventory,' 'liquidation,' 'outlet strategy,' 'end of line,' or 'how do I clear this inventory.' This skill covers the inventory diagnosis and disposition-channel decision (public discount vs. discreet liquidation vs. write-off). For the actual discount mechanics, cadence, and messaging once a public-discount disposition is chosen, see discount-and-clearance, which this skill hands off to."
metadata:
  version: 1.0.3
---

# Overstock

You help users diagnose why inventory is stuck and choose the right disposition channel to clear it — before any discounting decision gets made. This is inventory-driven marketing: the trigger is a supply-side constraint, and the first job is figuring out the actual cause, since different causes call for different dispositions.

**This skill decides *how* to dispose of the inventory (public discount, discreet liquidation, write-off).** Once "run a public discount" is the chosen path, hand off to `discount-and-clearance` for the depth, cadence, and messaging mechanics.

## Before Starting

**Check for product marketing context first:**
Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions.

**Check Section 14 (Brand Tier & Price Positioning) and the distribution-model context before recommending a disposition channel.** These two fields decide most of this skill's recommendation:
- `marketing-strategy/references/brand-tier-guide.md`'s discounting row — how much can be public vs. needs to be discreet.
- `marketing-strategy/references/distribution-model-guide.md` — if the brand sells through dealers, liquidating inventory publicly (or even through an off-price partner in the same market as a dealer) can create real channel conflict.

If either isn't captured yet, ask directly rather than assuming.

Gather this context (ask if not provided):

### 1. The Inventory
- What's overstocked, and how much?
- Carrying cost / deadline pressure (lease expiry, perishability, seasonal obsolescence, warehouse space)?
- Margin on the product, and true floor (cost + minimum acceptable recovery, or a write-off-avoidance floor)?

### 2. History
- Has this SKU/category been overstocked before? One-time or recurring?
- Any prior liquidation attempts, and how they went?

---

## Diagnosing the Cause

Different causes call for different dispositions — don't default to "run a sale" without identifying which of these it is:

| Cause | What it implies |
|---|---|
| **One-time over-order** | A single clearance event usually resolves it; hand off to `discount-and-clearance` for a bounded, one-time push — no need to establish an ongoing pattern |
| **Seasonal slow mover** | May just need to wait for next season, rather than force a disposition now, unless carrying cost makes waiting more expensive than clearing |
| **Discontinued / end-of-line** | Legitimate, honest urgency ("this specific item is gone for good") if going the public-discount route — the one case where "last chance" messaging is true, not manufactured |
| **Chronically slow SKU** | The real problem is likely buying/forecasting, not marketing — clearing it this time doesn't fix the next over-order. Flag this back to the user explicitly; recurring overstock is an ops problem wearing a marketing costume |
| **Damaged / returned / near-expiry** | Almost always needs a distinct disposition channel (outlet, "open box," secondary marketplace) rather than blending into a general clearance push, both for honesty with customers and to avoid discounting perfectly good full-price inventory in the same event |

---

## Choosing a Disposition Channel

This is where brand tier and distribution model matter most. From `marketing-strategy/references/brand-tier-guide.md`:

| Tier | Recommended disposition |
|---|---|
| **Budget** | Public sale via `discount-and-clearance` — discounting is expected and part of the model |
| **Mid-market** | Public but framed as an event, via `discount-and-clearance` — keep frequency moderate |
| **Premium** | Loyalty-tier early access or a private sale page (see `discount-and-clearance`'s loyalty-tier tactic), or a discreet channel below, before going fully public |
| **Luxury** | Avoid public discounting entirely where possible. Use the discreet channels below instead |

**Discreet disposition channels** (relevant at any tier, essential for premium/luxury, and worth checking against distribution-model constraints if dealers are involved):

- **Off-price / liquidation wholesale partners** — the category includes services like B-Stock and Liquidation.com, among others; evaluate current options rather than treating any single name as an endorsement. Moves inventory without the brand's own channels ever showing a discount. Check dealer agreements first if the brand sells through dealers — liquidating into the same geographic/retail market as an active dealer can create the exact channel conflict a MAP agreement exists to prevent.
- **Employee/insider sales** — a private, low-visibility channel that works at any tier.
- **Write-off or donation** — a legitimate option when even discreet liquidation risks brand damage (counterfeiting concerns for very high-end goods, genuinely damaged stock) or when the tax/accounting treatment makes it the better financial outcome than the time and channel cost of liquidating.

**If the chosen disposition is a public discount at any tier**, hand off to `discount-and-clearance` for the depth, cadence, and messaging — this skill's job (diagnosis + channel decision) is done at that point.

---

## Root Cause: When This Is Recurring

If the same SKU or category keeps generating overstock, the actual fix isn't a better clearance event — it's the buying/forecasting process. Say this plainly to the user rather than just executing another disposition:

- What's driving the recurring over-order — demand forecasting, minimum order quantities from a supplier, a seasonal pattern not being planned around?
- Is the discount frequency this creates training customers to wait for a sale (see `discount-and-clearance`'s "Avoiding the Trap" section) — if so, the marketing cost of repeatedly treating the symptom is compounding, not just the inventory cost.

---

## Measurement

- **Sell-through rate** against the deadline
- **Margin recovered vs. written off** — the actual dollar comparison between "sold at markdown/liquidation" and "would have been written off entirely"
- **Recurrence rate** — is the same cause showing up again next cycle, indicating the root cause hasn't been addressed
- **Channel conflict signals**, if the brand sells through dealers — any dealer complaints or MAP violations traced to a liquidation channel

---

## Common Mistakes

- **Running a public sale before diagnosing the cause** — a chronically slow SKU needs a buying-process fix, not another disposition event; treating the symptom repeatedly compounds the margin cost.
- **Discounting publicly (or liquidating through a visible channel) at a tier where it damages the brand more than the inventory recovery is worth.**
- **Liquidating into a market where an active dealer sells the same product**, creating channel conflict — check the distribution-model context first.
- **Treating every overstock situation the same way** — see Diagnosing the Cause; a discontinued line, a seasonal slow mover, and damaged stock all need different dispositions.
- **Never flagging a recurring pattern back to the user** — see Root Cause above; clearing the symptom without naming the cause guarantees a repeat.

---

## Task-Specific Questions

1. What's overstocked, how much, and why (see Diagnosing the Cause)?
2. What's the brand tier and distribution model, and what do they imply about disposition channel?
3. What's the margin and floor?
4. Is there a hard deadline, or flexibility to wait?
5. Has this happened before with this SKU/category — one-time or recurring?

---

## Related Skills

- **discount-and-clearance**: For the actual discount depth, cadence, and messaging once a public-discount disposition is chosen
- **price-elasticity**: For sizing any resulting discount against margin
- **marketing-strategy**: For the brand tier and distribution model fields that drive the disposition decision here
- **offers**: For bundle mechanics if bundling is used as part of a disposition
- **analytics**: For tracking sell-through and recurrence
- **compliance**: For substantiating any "discontinued" / "last chance" / "while supplies last" claim used in disposition messaging
