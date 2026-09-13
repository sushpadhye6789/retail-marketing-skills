# Measurement Framework — KPIs, North Stars, Cadence

Every plan needs a measurement section that tells the team how to know if the plan is working. This doc is the source for Section 12's measurement subsection.

**Related docs:**
- `growth-patterns.md` — the funded-DTC growth path (3× in years 1–2, 2× in years 3–5 from $1M revenue, for VC/growth-equity-backed clients only) and which phase of growth the business is in ($0–250K / $250K–1.5M / $1.5M–10M / $10M+)
- `budget-planning.md` — CAC calculation (blended, not paid-only) and the forecasting reality check (forecasts under $100M revenue are educated guesses, not precise predictions)

## The north-star principle

A north star is one metric that captures the business-model thesis at the highest level. It should:
- Be derivable from the funnel + revenue model
- Move slowly enough to be a strategic compass (not whipsawed by weekly noise)
- Trade off correctly against other metrics — improving the north star should generally improve the business

Don't default to "ARR" or "MRR" alone. Those are outcomes, not norths. Pick something that captures the business model.

## North-star patterns by business model

### B2B SaaS (subscription)
- **Net Revenue Retention (NRR)** — keeps existing customers + expansion in focus
- Alternative: "Logo retention × expansion ARR"
- Why: ARR alone hides churn / lets gross-add growth mask product fit problems

### D2C consumer app (subscription)
- **Blended LTV / blended CAC** — keeps unit economics honest as paid layer scales
- Alternative: "Day-35 paid users from cohort × LTV"
- Why: monthly subscription metrics are volatile; cohort × LTV smooths it

### Hybrid hardware + software (e.g., Quietude)
- **Blended LTV / blended CAC across hardware + software** — captures the wedge thesis
- Alternative: "Hardware-buyers-to-subscriber conversion × blended margin"
- Why: hardware revenue isn't free (cost to make); subscription revenue isn't expensive to acquire if hardware funds it

### Marketplace (two-sided)
- **Liquidity ratio × take-rate** — captures both sides + monetization
- Alternative: "Monthly transacting users × take-rate × repeat frequency"
- Why: GMV alone doesn't capture whether the marketplace is becoming a habit

### Developer tool / open source
- **Weekly active developers × paid-conversion** — captures both adoption and monetization
- Alternative: "Weekly active orgs × seats per org × ARPU"

### Content / media business
- **Daily active readers / listeners × ad revenue per session** — captures both reach and monetization
- Alternative: "Subscriber count × retention × ARPU"

### Commerce (DTC, non-subscription — the default for this plan's typical client)
- **Repeat purchase rate × AOV × frequency** — captures monetization layered on quality of customer
- Alternative: "Discounted payback period by category" (see `ads/references/payback-period.md`) — deliberately not LTV/CAC, which that reference treats as a destructive metric for retail

## Leading indicators by funnel stage

After the north star, every plan needs leading indicators per funnel stage (Awareness, Consideration, Conversion, Loyalty). These move faster than the north star and trigger investigations.

### Awareness leading indicators
- Organic visits/month, total + per pillar (SEO health)
- App Store / Play Store / marketplace visit rate (discovery health)
- Founder-led social channel growth → email subscriber conversion (LinkedIn / X / Substack funnels)
- Event-to-site or event-to-app conversion rate (event ROI)
- Paid CAC by channel (when paid is firing)

### Consideration leading indicators
- Product-page session depth and exit rate
- Reviews-read rate / review-widget engagement
- Comparison-page traffic and time-on-page
- Cart adds without checkout ("interested but not yet committed")
- App Store / marketplace listing visit-to-consideration rate (screenshots viewed, description expanded)

### Conversion leading indicators
- Cart-to-checkout and checkout-completion rate
- Cart abandonment rate
- Day 1 / Day 7 / Day 35 trial → paid conversion rate (for a subscription/hybrid business)
- First-order AOV, gross margin, and CAC payback period
- Checkout step-by-step drop-off (where in the flow shoppers leave)

### Loyalty leading indicators (including Referral & Advocacy)
- Day 30 / Day 60 / Day 90 repeat-purchase rate
- Monthly churn rate (gross + net, for subscription/repeat businesses)
- Lifecycle email engagement (open / click / unsubscribe by flow)
- Hardware → software activation rate (for hybrid businesses)
- Win-back / reactivation rate
- Ambassador-attributed new customers (via Dub or similar)
- Share-after-purchase moment rate (% of customers sharing)
- Two-sided referral completion rate
- Repeat AOV vs. first-order AOV, LTV by cohort, subscription/replenishment revenue as % of total (repeat-purchase economics)

## Review cadence

The plan should specify three rhythms:

### Weekly (operational sync)
- **Who:** fCMO ↔ founder (CEO usually)
- **Duration:** 30 min
- **Format:** Funnel-stage scoreboard (current vs. last week numbers across the leading indicators) + this week's ships + blockers
- **Output:** Action items, decisions made

### Monthly (metrics review)
- **Who:** fCMO + founder + extended team (CXO, product lead, designer if applicable)
- **Duration:** 60–90 min
- **Format:** Full metrics review + comparison against quarterly KPI targets + qualitative learnings + idea bank reprioritization
- **Output:** Possible plan adjustments, hire decisions

### Quarterly (plan recalibration)
- **Who:** fCMO + founders + key advisors
- **Duration:** 2–3 hours
- **Format:** Full plan review against 90-day and 12-month outcomes, channel-level analysis, funding-stage transition check, recalibration of next 90 days
- **Output:** Updated plan (could be v2 / v3 document iteration)

## KPI target setting

For each quarter in Section 9, the plan must include 3–5 specific KPI targets. These should be:
- **Specific** — not "improve retention," but "Day 30 retention from 22% → 30%"
- **Measurable** — pull from a wired data source
- **Stretch but plausible** — based on funnel state + historical patterns
- **Decision-triggering** — if missed, what does that mean? (Adjust strategy, kill a channel, etc.)

### KPI target patterns by quarter

**Q1 (foundation quarter):**
- Mostly *bedrock* metrics — fixing leaks. "Headphones-gate conversion drop reverses." "Day 1 → paid +25–50%."
- Some *foundation* metrics — laying tracks. "4 SEO pillars staked." "App Store rewrite shipped."
- Avoid bold growth targets — the foundations aren't in yet

**Q2 (validation quarter):**
- Mostly *validation* metrics — does what we built work? "Paid CAC < $X blended." "Organic traffic 1,500–3,500/mo."
- Some *cohort* metrics — do new cohorts behave better? "Day 7 retention for Q2 cohort vs. Q1."

**Q3 (scaling quarter):**
- Mostly *scaling* metrics — how far does it go? "Paid scaling to $20–30K/mo with CAC steady." "First B2B install reference case live."
- Some *capability* metrics — what new things are live? "First Guides pilot launched."

**Q4 (compound quarter):**
- Mostly *compound* metrics — is the flywheel turning? "50%+ of new customers from non-paid channels." "Referral-driven 15–25% of new customers."
- Some *narrative* metrics — does the growth-capital story write itself? "Payback period holding under target across the top two channels."

## Anchoring against the funded-DTC growth path

For a VC- or growth-equity-backed DTC client specifically, past $1M annual revenue, anchor 12-month and multi-year targets against the **3-3-2-2-2 rule** (3× in years 1 and 2, then 2× in years 3 through 5). Hitting it is rare; most brands don't. Anchoring against it forces the plan to either match it and show how, or explicitly defend choosing a slower trajectory. Full table and context in `growth-patterns.md`.

**For the majority of clients this plan serves** (bootstrapped, self-funded, loan-financed, profit-focused), the 3-3-2-2-2 doesn't apply at all. Use linear-pattern targets ("$X new-customer revenue added per month") or step-function targets ("$Y revenue jump after the wholesale/national-account channel launches") instead.

## Forecasting reality check

A plan derives a budget and an annual goal. It does not produce a 12-month month-by-month forecast that's reliably accurate to the dollar.

**Unless the company is publicly traded, all forecasts are educated guesses.** No business under $100M in annual revenue consistently hits month-by-month forecasts. Quarterly review is when the plan adjusts — not when variance is treated as failure.

What the plan commits to honestly:
- The annual goal is a defensible direction-of-travel
- The budget is the resource commitment that makes the goal plausible
- The 90-day roadmap (Section 9) is what's actionable now
- Month-to-month projection is illustrative, not promised

Founders who over-engineer the forecast end up explaining variance every month instead of executing. The plan should resist this — name the annual target, the quarterly KPIs, and the kill criteria. Don't promise the month.

Full context in `budget-planning.md`.

## Kill criteria

For every channel or initiative, the plan should specify when to stop. Often missing from plans, kill criteria force discipline.

Examples:
- "If a paid channel has CAC > 2× target after 30 days at meaningful spend, pause."
- "If onboarding Variant 3 doesn't show statistically meaningful lift (or directional lift + congruent qualitative signal) after 4 weeks, move to Variant 1."
- "If lifecycle Flow 4 has open rate < 12% after 6 weeks, redo subject lines + audience segmentation."

## Guardrail metrics

Some metrics get a hard guardrail (cannot drop below threshold). Useful for protecting brand or unit economics during aggressive growth.

Examples:
- "Brand voice complaint rate > 1% of customer feedback triggers content review."
- "Paid CAC > $X for two consecutive months pauses paid scaling pending audit."
- "App Store rating drops below 4.5 triggers product review."

## Data sources mapping

The plan should name where each metric comes from. This makes it auditable.

| Metric | Source |
|---|---|
| Organic traffic | GA4 / Ahrefs |
| App Store conversion | App Store Connect |
| Funnel conversion (Day N → paid) | Internal analytics (Mixpanel / Amplitude) or App Store Connect cohort export |
| Repeat-purchase / retention rate | Customer.io segments + product analytics |
| MRR / ARR | Stripe (via MCP if wired) |
| Plan mix | Stripe |
| Lifecycle email metrics | Customer.io |
| Ambassador attribution | Dub.co |
| Hardware → app activation | Shopify + App Store + internal join |
| NPS | Survey tool (Customer.io / Typeform / SurveyMonkey) |

## When data isn't wired

If a metric can't currently be measured, flag it in Section 12's open decisions. Example:

> "Hardware → app activation rate not currently visible in the App Store dashboard. Requires Shopify ↔ App Store Connect join. Q1 work item."

A plan with un-measurable goals is a plan that can't be validated. Surface the instrumentation work explicitly.

## Reporting cadence + automation

Where possible, auto-generate the metrics review rather than building it manually each time. Stripe MCP + GA4 MCP + Customer.io MCP can pull most of what's needed.

For Tier 1 clients, a simple weekly metrics email to the team (Markdown table, generated via skills + MCPs) costs nothing and creates discipline.

For Tier 2+ clients, consider a real dashboard (Hex, Metabase, Looker, or internal tool).
