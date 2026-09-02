# Budget Planning — Scientific Methods for Setting the Marketing Budget

The problem with most marketing budgets is that they're pulled out of thin air — a number that hopefully doesn't constrain growth too much, but doesn't anchor in customer-acquisition economics either. The result: when someone asks "why this number?" there's no answer.

Two scientific methods solve this. Use one (not both) in Section 8 (Revenue) and Section 10 (12-month outlook) of every plan.

Adapted from *Founding Marketing* by Corey Haines — the source material is written for subscription/SaaS unit economics (ARR, ARPC, churn). Most clients this plan serves are retail/ecommerce/wholesale, which has no recurring-revenue snapshot to churn out of, so the worked math below is rebuilt around **order-based unit economics** (AOV, margin per order, purchase frequency) using the same vocabulary as `ads/references/payback-period.md`. If the client's business genuinely is recurring-revenue (a subscribe-and-save program, a membership retailer, a hardware-plus-software-subscription client, or a marketplace take-rate model — see `marketing-plan/references/client-types.md`), use the **Recurring-Revenue Variant** at the end of this doc instead; the two methods and the underlying logic are the same, only the unit-economics inputs change.

## Method 1 — Revenue-Based (2–30% of annual revenue)

**Direction:** budget → revenue goal.

You start with what the business can comfortably spend on marketing, then forecast what revenue that spend can plausibly generate.

### The ranges

| Posture | % of annual revenue | When to use |
|---|---|---|
| **Conservative (profit-preserving)** | 2–5% | Established multi-location or omnichannel retailer; foot traffic and repeat customers already carry most volume, so marketing tops up the base rather than driving it |
| **Standard growth** | 8–15% | Growing ecommerce/DTC brand, or a retailer opening new locations/markets, still building the customer base |
| **Aggressive growth (funded or deliberately reinvesting)** | 20–30% | A recently funded DTC brand, a new-market land-grab, or a brand deliberately trading near-term margin for market share |

For reference: publicly traded, store-based retailers typically report total marketing spend in the low single digits up to around 5% of revenue — foot traffic and repeat visits do most of the acquisition work, so marketing spend is a smaller share of revenue than in a channel that has to manufacture every visit. Pure-play DTC/ecommerce brands in growth mode commonly run 15–25% of revenue on marketing, sometimes higher pre-profitability. These are directional benchmarks, not audited figures — verify against current, category-specific data before using a number in a client-facing plan (see CLAUDE.md's Data Integrity note on verifying figures before finalizing).

### The math (Conservative example)

Retailer at $1M annual revenue, 4% allocation:

- Annual marketing budget: **$40,000**
- Blended CAC: $35 → can acquire **~1,140 new customers**
- AOV: $60, gross margin 45% → margin per order: $27 (see `ads/references/payback-period.md`)
- Blended annual purchase frequency across the *whole* new-customer cohort (repeat buyers and one-time buyers together — see the note below): 1.8 orders/year → each new customer contributes **~$49 in margin** this year (2 orders × margin per order is close enough here since frequency < 2; use margin per order × frequency directly: $27 × 1.8 ≈ $49)
- New-customer margin contribution: 1,140 × $49 ≈ **$55,900**
- New-customer revenue contribution: 1,140 × ($60 × 1.8) ≈ **$123,000**

### The math (Aggressive example)

Same retailer, 25% allocation:

- Annual marketing budget: **$250,000**
- Blended CAC: $35 → can acquire **~7,140 new customers**
- Same AOV/margin/frequency profile as above
- New-customer revenue contribution: 7,140 × ($60 × 1.8) ≈ **$771,000**

### Why there's no churn-discount step here (unlike the ARR version)

The SaaS version of this math subtracts a churn rate because ARR is a snapshot of recurring revenue — some of a new cohort's subscriptions will have already lapsed by the measurement date, so the raw new-ARR number overstates what actually lands. Retail doesn't need that step, **as long as the purchase-frequency figure you're using is genuinely blended across the whole new-customer cohort** — including the customers who buy once and never return, not just your repeat buyers. A blended frequency of "1.8 orders/year" already nets out the customers who ordered once and stopped; it doesn't need a separate discount on top. The mistake to avoid is the reverse one: using a *repeat-customer-only* frequency number (which excludes the one-and-done buyers) in this formula — that overstates new-customer contribution the same way skipping the churn deduction would overstate SaaS revenue. If you only have a repeat-customers' frequency figure, apply the repeat-purchase rate to it first (see `ads/references/payback-period.md`'s Discounted Payback Period) before using it here.

### Two keys to making this method work

1. **Know your blended CAC** (see "Calculating CAC" below).
2. **Match the allocation percentage to actual ambition.** A founder running 4% allocation while telling the team they expect to triple revenue is showing two incompatible signals — same failure mode as the SaaS version of this math, just at retail's lower percentage bands.

## Method 2 — Goal-Based (reverse-engineered from the revenue target)

**Direction:** revenue goal → budget.

You start with the revenue goal and work backward through the unit economics to derive the budget required to hit it. Best for:

- Businesses just starting up (no historical CAC baseline yet, working from first principles)
- Businesses anticipating outside capital or a loan, needing to defend the ask
- A specific board/owner-mandated revenue target for the year

### The formula

```
Marketing budget = (New revenue needed ÷ (AOV × Blended Annual Purchase Frequency)) × CAC
```

Where "Blended Annual Purchase Frequency" is the same cohort-wide figure described above — new customers acquired this year, averaged across repeat and one-time buyers.

### Worked example: $1M → $1.5M annual revenue

Step 1 — How much revenue per new customer?
AOV × blended frequency = $60 × 1.8 = **$108 revenue per new customer this year**

Step 2 — How many new customers do we need?
$500,000 (the gap to close) / $108 = **~4,630 new customers**

Step 3 — What's the acquisition cost?
4,630 × $35 CAC = **~$162,000**

That's the budget. Unlike the ARR version of this formula, there's no fourth "divide by retention rate" step — the blended frequency in Step 1 already accounts for who does and doesn't come back, for the reason explained above.

When someone asks how you got to the budget, walk them through the three steps. It's defensible.

**One thing this formula deliberately doesn't cover:** growing revenue *from the existing customer base* (repeat purchases from customers acquired in prior years) is a separate lever from new-customer acquisition, and it's budgeted separately — see `retention-and-winback` and `emails`/`sms` for that spend. This formula sizes the new-customer-acquisition budget only. If the $500K revenue goal is meant to come partly from existing-customer growth, split the goal first (e.g., "$350K from new customers, $150K from lifting repeat rate") and run this formula against the new-customer portion only.

### Why this formula and not something simpler

Each step corresponds to a real economic reality:
- Step 1 converts revenue-per-order into revenue-per-*customer*-per-year, which is what a new-customer cohort actually delivers
- Step 2 names the customer count, which is what the acquisition funnel actually has to deliver
- Step 3 anchors the budget in the cost of acquisition

### Required buffer

**Always add 10–20% as "experimental budget"** on top of the formula output. CAC is the main dependency; if CAC comes in 50% higher than estimated, the cascading effect is missing the revenue goal. It's much cheaper to overestimate CAC than to underestimate it.

The experimental budget also funds the experiments that find the next channel before the current one plateaus (see `growth-patterns.md` — channel S-curves).

## The funded-DTC growth path (3-3-2-2-2 rule)

For a **venture-backed or growth-equity-backed DTC brand** specifically (not the typical bootstrapped or self-funded retailer), investors often benchmark against a revenue-multiple path similar to the one SaaS/subscription companies are held to:

| Year | Revenue multiple | Cumulative revenue (from $1M start) |
|---|---|---|
| Year 0 | — | $1M |
| Year +1 | 3× | $3M |
| Year +2 | 3× | $9M |
| Year +3 | 2× | $18M |
| Year +4 | 2× | $36M |
| Year +5 | 2× | $72M |

That's the 3-3-2-2-2 rule, carried over from the SaaS source material. Useful when:

- The plan needs to map 12-month and 36-month milestones to investor expectations
- The founder is mid-raise and the board needs to see a plausible path to the next round
- Section 10 (12-month outlook) needs anchoring against an external benchmark, not just internal ambition

Most companies miss it — that's fine; knowing the benchmark gives a defensible reason to either match it or explicitly choose not to. **For the majority of retail clients this plan serves — bootstrapped, self-funded, bank-financed, or profit-focused** — this benchmark doesn't apply at all. Skip it and use the linear/step-function targeting in `growth-patterns.md` instead; forcing a VC revenue-multiple framing onto a business that isn't raising VC-style capital produces a target nobody asked for and nobody is accountable to.

## Calculating CAC (blended, not paid-only)

If there's no historical CAC, use a baseline: **the gross margin from one order at the smallest realistic basket size.** Deploy the budget, capture actual CAC data, replace the baseline with the measured number for the next planning cycle.

For an established CAC calculation, **CAC must be blended.** Include:

- Marketing salaries (full loaded cost, not just base)
- Advertising spend (paid social, search, marketplace ads/Amazon Ads if the channel is live)
- Marketing tech stack costs
- Content, photography, and creative production costs
- Influencer/affiliate commissions and gifting costs directly tied to acquisition
- Agency / contractor retainers
- Sales development or account-management salaries if running wholesale/B2B outbound (see `marketing-strategy` Section 16)
- Tools (CRM, email/SMS platform, analytics)

What to leave out: fulfillment, payment processing, and marketplace/platform fees are cost-of-goods or cost-of-sale, not CAC — mixing them in understates marketing's real efficiency and overstates the business's actual product margin.

Then divide by the number of new customers acquired in the period. That blended number is the one to use in either budgeting method.

The mistake to avoid: calculating CAC from paid ad spend alone. A retailer that "doesn't run ads" still has a CAC — it's just hidden in the content team, the founder's time, the influencer gifting budget, or the trade show booth.

## The reality check on forecasting

This whole framework derives a budget and a revenue goal — not a 12-month month-by-month forecast accurate to the dollar.

**Unless the company is publicly traded, all forecasts are educated guesses.** The honest framing for the plan:

- The annual goal is a defensible direction-of-travel
- The budget is the resource commitment that makes the goal plausible
- The 90-day roadmap (Section 9) is what's actionable now
- Month-to-month variance is expected — retail especially, given seasonality; see `growth-patterns.md`'s cadence guidance — and quarterly review is when the plan adjusts

What's actionable: how to deploy the budget, what concrete moves to execute, what to adjust when real data comes in.

What's not actionable: trying to forecast traffic, conversion rates, AOV, and channel mix all down to the decimal point and expecting that forecast to hold. Plans that over-engineer the forecast tend to spend the plan period explaining variance instead of executing.

**Rule for the plan:** the budget number is honest. The annual goal is honest. The month-by-month projection is illustrative.

## How this flows into the plan

| Section | What to include |
|---|---|
| **3 (Current state)** | Current monthly marketing spend broken down by line (paid, tools, content, headcount, retainers). Compute current %-of-revenue allocation. |
| **8 (Revenue)** | The unit-economics table (CAC, AOV, gross margin, purchase frequency, repeat-purchase rate) that feeds whichever budget method you're using. |
| **10 (12-month outlook)** | Apply Method 1 or Method 2 to derive the 12-month budget and the resulting revenue goal. Anchor against the 3-3-2-2-2 rule only if the client is VC/growth-equity-backed DTC. |
| **11 (Ops stack)** | Show the budget allocation across the AARRR stages — what % to Acquisition, Activation, etc. The ops-stack mapping informs which line items grow when the next funding/revenue tier unlocks. |
| **13 (Open decisions)** | If CAC, AOV, or purchase frequency is unknown or contested, flag it as the highest-impact open decision — every other number depends on it. |

## When to choose which method

- **Method 1 (Revenue-Based)** when the business has historical CAC data, a profit/reinvestment posture, and the question is "given our posture, what's a plausible goal."
- **Method 2 (Goal-Based)** when the business has a specific goal (owner mandate, investor milestone, loan covenant) and the question is "what budget do we need to hit it."

For most early-growth retail/DTC plans, Method 2 is more useful — it forces the conversation about whether the goal is funded.

---

## Recurring-Revenue Variant (subscription, membership, marketplace take-rate)

If the client's business genuinely runs on recurring or take-rate revenue rather than discrete orders — a subscribe-and-save program measured as its own P&L, a membership retailer, a hardware-plus-software-subscription business, or a marketplace charging a take-rate on GMV — the order-based formulas above don't fit cleanly. Use this variant instead; the method names and overall logic (Revenue-Based vs. Goal-Based, the 10–20% experimental buffer) are identical, only the unit-economics inputs change:

- Replace AOV × purchase frequency with **ARPC × 12** (average revenue per customer per month, annualized).
- Replace "blended frequency already nets out one-time buyers" with an explicit **annual retention rate** discount, since recurring revenue genuinely does churn continuously the way a discrete-order cohort doesn't:

```
Marketing budget = [(New annual recurring revenue needed / (ARPC × 12)) × CAC] / annual retention rate
```

- The 3-3-2-2-2 growth-path benchmark applies more naturally here, since it was built for recurring-revenue businesses in the first place.
- CAC line items are the same list above, plus any subscription-servicing or account-management cost genuinely tied to acquisition (not ongoing service cost, which belongs in retention budget).

This variant is the minority case for the clients this plan is built around — confirm the client's actual revenue model in INIT before defaulting to it. A hardware retailer with an optional software subscription, for instance, usually still budgets primarily against the hardware's order-based economics, with the subscription attach rate treated as incremental margin per order rather than its own recurring-revenue budget line — unless the subscription is the dominant revenue driver.
