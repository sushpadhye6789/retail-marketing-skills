# Payback Period Budgeting (Retail/Ecommerce)

The gate before every channel decision: **can I afford this channel, and how long is my cash tied up if I run it?** Advertising has to be **deterministic** — $1 in, more than $1 out, on a clock you can name. Payback Period is how you set that clock.

This is a different question from the breakeven-CPA gate already in [meta-decision-system-ecommerce.md](meta-decision-system-ecommerce.md) and the SKILL.md "Find your break-even ROAS" section. Breakeven CPA answers *"does the first order clear a profit?"* Payback Period answers *"if the first order alone doesn't clear CAC, how long until repeat purchases do?"* Run breakeven CPA first; reach for Payback Period only when you're deliberately acquiring at or below first-order breakeven because you expect repeat purchase to make up the gap.

## Kill LTV:CAC first

**LTV:CAC is a useless, often destructive metric — in retail as much as SaaS.** Four flaws:

1. **It assumes every customer eventually stops buying.** LTV bakes in an eventual death for every customer relationship. Your best repeat buyers don't churn — they keep ordering. A metric that pre-writes everyone's obituary underprices your actual base.
2. **It assumes drop-off is evenly timed.** It isn't. Across DTC cohorts, the steepest drop-off is almost always **between the first and second order** — more customers who ever churn do it right there than at any later point. Blended LTV smears that cliff into a flat average and hides the real risk (and the real payback math).
3. **It hides per-category variance under blended AOV.** A $25 impulse-category order and a $300 considered-purchase order get averaged into one LTV number that describes neither. The channels, creative, and payback math that work for the $25 buyer are nothing like the $300 buyer — but blended LTV:CAC says "3:1, we're fine" and you scale the wrong thing.
4. **It ignores when the cash actually comes back.** A customer's second, third, and fourth orders don't arrive on day one — they arrive on whatever cadence that category repurchases on, which can be weeks (consumables) or years (durables). LTV:CAC treats acquisition and lifetime revenue as if they land together. They don't. The gap between spending CAC and collecting it back is where inventory-financed retail businesses run out of cash.

A "healthy" 3:1 LTV:CAC can sit on top of a channel that starves your working capital, because the ratio never asks *when the cash comes back*.

## The replacement: Payback Period, in orders and months

ARPU doesn't exist in retail — there's no recurring monthly bill. What retail has instead:

- **AOV** (average order value)
- **Gross margin %** on that order
- **Purchase frequency** — how often a repeat customer actually reorders (varies enormously by category)
- **Repeat-purchase rate** — what share of first-time buyers place a second order at all

Combine the first two into **margin per order**:

```
Margin per Order = AOV × Gross Margin %
```

Then payback in months:

```
Payback Period (months) = CAC ÷ (Margin per Order × Monthly Purchase Frequency)
```

Where Monthly Purchase Frequency = orders per repeat customer per year ÷ 12.

### Worked example — same CAC, wildly different payback by category cadence

Say a channel costs **$50 to acquire a customer** (CAC = $50) across three different product categories:

| Category | AOV | Margin/order (AOV × margin%) | Purchase frequency | Payback = CAC ÷ (margin/order × monthly freq.) | Verdict |
|---|---|---|---|---|---|
| Consumable (coffee, supplements) | $25 | $10 (40%) | ~12×/yr (1×/mo) | 50 ÷ (10 × 1) = **5 months** | Healthy. Recoups well inside a reasonable window. |
| Apparel/beauty | $80 | $44 (55%) | ~2.5×/yr (0.21×/mo) | 50 ÷ (44 × 0.21) ≈ **5.4 months** | Workable *if* the repeat actually happens — see repeat-rate discounting below. |
| Durable (furniture, appliances) | $600 | $270 (45%) | ~0.15×/yr (0.0125×/mo) | 50 ÷ (270 × 0.0125) ≈ **178 months** | Meaningless as a repeat-purchase payback — see "When payback doesn't apply" below. |

Same CAC, three completely different cash-tied-up pictures. Blended LTV:CAC would have averaged these into one number that describes none of them.

## Discounted Payback Period (repeat-rate-adjusted)

Raw payback assumes every acquired customer actually reorders. Most don't — especially past the first-to-second-order cliff. Adjust for it:

```
Discounted Payback = CAC ÷ (Margin per Order × Monthly Purchase Frequency × Repeat-Purchase Rate)
```

Repeat-Purchase Rate = the share of first-time buyers who place a second order (use your own cohort's 90-day or 12-month repeat rate — whichever matches how the channel is actually meant to pay back).

Example: CAC $50, margin/order $44 (apparel), monthly frequency 0.21, 12-month repeat rate 60%:
- Raw: 50 ÷ (44 × 0.21) ≈ 5.4 months
- Discounted: 50 ÷ (44 × 0.21 × 0.60) ≈ **9 months**

Still workable — but the discounted number is the one to budget against. When the repeat rate is weak, discounted payback blows past any reasonable window even when the raw number looked fine; that gap is your early warning that the channel is financing customers who mostly don't come back.

## When payback doesn't apply — the durable/considered-purchase case

The furniture example above (178 months) isn't a rounding error — it's the framework telling you something true: **for categories with long or irregular replacement cycles, a repeat-purchase payback gate is the wrong tool.** Waiting years for a second order to justify today's CAC isn't a plan a cash-constrained retail business can run on.

For those categories:

- **Fall back to first-order breakeven CPA** (`meta-decision-system-ecommerce.md` / SKILL.md's break-even ROAS section) as the primary affordability gate — the channel has to earn its keep on order one.
- **Treat any repeat purchase, referral, or gifting-driven second sale as upside**, not as part of the financed payback math. Don't let a hoped-for repeat order justify overspending CAC today.
- This mirrors the source discipline for high-ACV/long-cycle B2B deals: when the repayment window is too long or too uncertain to underwrite, underwrite the transaction you can actually see.

**Rule of thumb for which gate applies:** if a meaningful share of customers reorder within 12 months, use Discounted Payback. If they don't (multi-year replacement cycles, one-and-done gifting categories, big-ticket durables), use first-order breakeven CPA instead and stop there.

## Using it as the channel gate

1. Compute CAC for the channel (all-in: spend ÷ new customers, including creative and management overhead).
2. Compute margin per order (AOV × gross margin %) for the category being acquired into.
3. Check whether the category has a meaningful repeat cadence within about 12 months. If not, skip to first-order breakeven CPA instead (see above).
4. If it does, compute Discounted Payback per category/cohort using your own repeat-purchase rate and purchase frequency — not an industry average.
5. **Turn the channel on only where discounted payback lands inside a window your cash position can actually carry.** The source SaaS framing targets 3–12 months; that specific band comes from a subscription-billing context and isn't retail-sourced, so treat it as a directional starting point, not a benchmark — recalibrate against your own inventory-financing runway and payment terms. The underlying logic transfers regardless of the exact number: under a few months is often leaving growth on the table, and a payback stretching past what your cash conversion cycle can absorb means you're financing customers longer than the business can survive.
6. Re-run monthly or quarterly — AOV, margin, and CAC all drift in retail (promotions, input costs, seasonality) more often than a B2B ACV does; the gate should move with them.

This composes with the breakeven-CPA math already in `meta-decision-system-ecommerce.md`: breakeven tells you the *most* you can pay per order and stay profitable on order one; payback tells you *how long your cash is tied up* if you're deliberately acquiring below that line for repeat-purchase upside. Use both — they answer different questions.

---

*Adapted from Corey Haines, *Founding Marketing*, ch. 7. The original SaaS formula (Payback = CAC ÷ monthly ARPU) doesn't transfer directly — retail has no recurring bill — so this version is rebuilt around AOV, gross margin per order, and category-specific purchase frequency/repeat rate instead. The 3–12 month target band and the "steepest drop-off between order 1 and 2" pattern are carried over as directional, practitioner-reported heuristics from the source material, not retail-specific research; recalibrate against your own cohort data. For the CAC inputs, see the **attribution** skill; for AOV, margin, and pricing structure, see **pricing** and **price-elasticity**; for the total-budget-sizing use of this gate, see **budget-allocation**.*
