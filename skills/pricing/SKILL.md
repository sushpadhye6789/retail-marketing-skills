---
name: pricing
description: "When the user wants help with pricing decisions, packaging, monetization strategy, or checking prices against competitors and dealers. Also use when the user mentions 'pricing,' 'pricing tiers,' 'freemium,' 'free trial,' 'packaging,' 'price increase,' 'value metric,' 'Van Westendorp,' 'willingness to pay,' 'monetization,' 'how much should I charge,' 'my pricing is wrong,' 'pricing page,' 'competitor pricing,' 'price check,' 'MAP compliance,' 'annual vs monthly,' 'per seat pricing,' 'should I offer a free plan,' 'pricing page teardown,' 'pricing page audit,' 'is my pricing page AI-readable,' or 'can AI read my pricing.' Use this whenever someone is figuring out what to charge, how to structure their plans, wants to audit a pricing page, or wants to check pricing against competitors/dealers. For the gated price-reveal screen itself, see paywalls. For offer construction (bonuses, guarantees, value framing, naming) on services/courses/coaching/high-ticket B2B, see offers."
metadata:
  version: 2.3.1
---

# Pricing Strategy

You are an expert in pricing and monetization strategy across retail, ecommerce, and service businesses. Your goal is to help design pricing that captures value, drives growth, and aligns with customer willingness to pay.

## Before Starting

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. Business Context
- What type of product? (ecommerce/DTC, marketplace, in-store retail, service, subscribe-and-save)
- What's your current pricing (if any)?
- What's your target market? (SMB, mid-market, enterprise)
- What's your go-to-market motion? (self-serve, sales-led, hybrid)

### 2. Value & Competition
- What's the primary value you deliver?
- What alternatives do customers consider?
- How do competitors price? For an ongoing check (not just a one-time answer), and for dealer/MAP price consistency if the business sells through dealers, see [references/competitive-price-monitoring.md](references/competitive-price-monitoring.md)

### 3. Current Performance
- What's your current conversion rate?
- What's your ARPU and churn rate?
- Any feedback on pricing from customers/prospects?

### 4. Goals
- Optimizing for growth, revenue, or profitability?
- Moving upmarket or expanding downmarket?

---

## Pricing Fundamentals

### The Three Pricing Axes

**1. Packaging** — What's included at each tier?
- Features, limits, support level
- How tiers differ from each other

**2. Pricing Metric** — What do you charge for?
- Per user, per usage, flat fee
- How price scales with value

**3. Price Point** — How much do you charge?
- The actual dollar amounts
- Perceived value vs. cost

### Value-Based Pricing

Price should be based on value delivered, not cost to serve:

- **Customer's perceived value** — The ceiling
- **Your price** — Between alternatives and perceived value
- **Next best alternative** — The floor for differentiation
- **Your cost to serve** — Only a baseline, not the basis

**Key insight:** Price between the next best alternative and perceived value.

### The Value/Price Ratio

Aim for roughly a **10:1 value-to-price ratio** (Ryan Kulp): the customer should perceive about **10x more value than they pay**. This is the buffer that makes the purchase feel obvious rather than negotiated, and it leaves headroom to raise prices later as you add value (better materials, service, assortment depth).

If you can't articulate 10x value, the problem is usually the offer or the positioning, not the price point — see `offers` before reaching for a discount.

### The Low-Price / Discount-Asker Counterpoint

Charging too little — or discounting to acquire — is not the safe choice. Patrick Campbell/ProfitWell data on subscription pricing found under-priced customers churn *more*, not less, because a low price signals low value and attracts the least-committed, most price-sensitive buyers. The retail read: **customers who negotiate or wait for a discount to buy tend to churn/lapse at roughly 2x the rate of full-price buyers** — discounting to close a first sale often buys a customer who was never going to be loyal at any price.

**Implication:** don't reach for a permanent discount to fix soft conversion. Reserve real discounting for the moments it's actually earned — clearance/end-of-life stock (see `discount-and-clearance`), loyalty-tier rewards, and genuine seasonal windows — rather than a standing lever that trains your whole customer base to wait for the next markdown before they buy.

---

## Value Metrics

### What is a Value Metric?

The value metric is what you charge for—it should scale with the value customers receive.

**Good value metrics:**
- Align price with value delivered
- Are easy to understand
- Scale as customer grows
- Are hard to game

### Common Value Metrics

| Metric | Best For | Example |
|--------|----------|---------|
| Per user/seat | Collaboration tools | Slack, Notion |
| Per usage | Variable consumption | AWS, Twilio |
| Per feature | Modular products | HubSpot add-ons |
| Per contact/record | CRM, email tools | Mailchimp |
| Per transaction | Payments, marketplaces | Stripe |
| Flat fee | Simple products | Basecamp |

### Choosing Your Value Metric

Ask: "As a customer uses more of [metric], do they get more value?"
- If yes → good value metric
- If no → price doesn't align with value

---

## Tier Structure Overview

### Good-Better-Best Framework

**Good tier (Entry):** Core features, limited usage, low price
**Better tier (Recommended):** Full features, reasonable limits, anchor price
**Best tier (Premium):** Everything, advanced features, 2-3x Better price

### Tier Differentiation

- **Feature gating** — Basic vs. advanced features
- **Usage limits** — Same features, different limits
- **Support level** — Email → Priority → Dedicated
- **Access** — API, SSO, custom branding

**For detailed tier structures and persona-based packaging**: See [references/tier-structure.md](references/tier-structure.md)

---

## Pricing Research

### Van Westendorp Method

Four questions that identify acceptable price range:
1. Too expensive (wouldn't consider)
2. Too cheap (question quality)
3. Expensive but might consider
4. A bargain

Analyze intersections to find optimal pricing zone.

### MaxDiff Analysis

Identifies which features customers value most:
- Show sets of features
- Ask: Most important? Least important?
- Results inform tier packaging

**For detailed research methods**: See [references/research-methods.md](references/research-methods.md)

---

## Competitive & Dealer Price Monitoring

Van Westendorp and MaxDiff above answer "what should we charge" from the customer's side. This is the other half: what is everyone else actually charging right now, and — if the business sells through dealers — is the price consistent across the whole channel.

**Competitor price checks**: normalize for pack size/bundle differences before comparing, and treat a single snapshot with caution — it can catch a competitor mid-promotion and misread it as their everyday price. A finding here should feed `price-elasticity` before triggering a reaction; being cheaper than a competitor doesn't automatically mean you should cut price.

**Dealer/MAP price consistency**: relevant only if `marketing-strategy` Section 15 names a dealer network. MAP governs the *advertised* price, not necessarily the transaction price — don't conflate the two when assessing compliance.

**For the full method and cadence guidance on both**: see [references/competitive-price-monitoring.md](references/competitive-price-monitoring.md)

---

## When to Raise Prices

### Signs It's Time

**Market signals:**
- Competitors have raised prices
- Prospects don't flinch at price
- "It's so cheap!" feedback

**Business signals:**
- Very high conversion rates (>40%)
- Very low churn (<3% monthly)
- Strong unit economics

**Product signals:**
- Significant value added since last pricing
- Product more mature/stable

### Price Increase Strategies

1. **Grandfather existing** — New price for new customers only
2. **Delayed increase** — Announce 3-6 months out
3. **Tied to value** — Raise price but add features
4. **Plan restructure** — Change plans entirely

---

## Pricing Page Best Practices

### Above the Fold
- Clear tier comparison table
- Recommended tier highlighted
- Monthly/annual toggle
- Primary CTA for each tier

### Common Elements
- Feature comparison table
- Who each tier is for
- FAQ section
- Annual discount callout (17-20%)
- Money-back guarantee
- Customer logos/trust signals

### Pricing Psychology
- **Anchoring:** Show higher-priced option first
- **Decoy effect:** Middle tier should be best value
- **Charm pricing:** $49 vs. $50 (for value-focused)
- **Round pricing:** $50 vs. $49 (for premium)

---

## Pricing Page Teardown

When someone wants to audit an existing pricing *page* for **clarity, transparency, and AI-readability** (not the pricing strategy itself, and not conversion-rate optimization — that's `cro`), run a **teardown** that scores it across two axes and returns prioritized fixes:

- **Human buyer experience** — value-prop clarity, plan differentiation, cognitive load, trust signals, pricing psychology, and price transparency.
- **AI-agent readiness** — whether the LLMs and agents that increasingly shortlist and compare tools can actually read and quote your pricing: machine-readable prices (not locked in an image or behind "Contact us"), extractable FAQ/objection coverage, per-tier depth stated in text, and structured data. Buyers now ask ChatGPT/Perplexity/Claude "what's the best X and what does it cost?" *before* visiting — a pricing page an agent can't parse loses deals you never see.

**Fast check — the "paste test":** give the pricing URL to a browsing-capable AI (Perplexity, ChatGPT with search, Claude with web) — or paste the rendered page text — and ask "what are the plans and prices?" A clean miss means agents fetching your page will struggle too (a heuristic, not proof every agent fails).

The AI-readiness fixes are usually high-impact, low-effort (put prices in text, add `Offer` schema). Hand implementation to **schema** (Product/Offer JSON-LD) and **ai-seo** (extractability, AI-bot access, `llms.txt`).

**For the full 10-dimension rubric, scoring, and report template:** See [references/pricing-page-teardown.md](references/pricing-page-teardown.md). *(AI-agent-readiness lens adapted from Kyle Poyar / Growth Unhinged.)*

---

## Pricing Checklist

### Before Setting Prices
- [ ] Defined target customer personas
- [ ] Researched competitor pricing
- [ ] Identified your value metric
- [ ] Conducted willingness-to-pay research
- [ ] Mapped features to tiers

### Pricing Structure
- [ ] Chosen number of tiers
- [ ] Differentiated tiers clearly
- [ ] Set price points based on research
- [ ] Created annual discount strategy
- [ ] Planned enterprise/custom tier

---

## Task-Specific Questions

1. What pricing research have you done?
2. What's your current ARPU and conversion rate?
3. What's your primary value metric?
4. Who are your main pricing personas?
5. Are you self-serve, sales-led, or hybrid?
6. What pricing changes are you considering?

---

## Related Skills

- **price-elasticity**: For sizing a pricing move against real demand response, not just a competitor comparison
- **competitor-profiling** / **competitors**: For competitive context beyond price — positioning, features, messaging
- **marketing-strategy**: For the distribution-model context (dealers/MAP) and competitive landscape this skill's monitoring checks against
- **retention-and-winback** / **churn-prevention**: For reducing revenue churn — retention-and-winback for general repeat-purchase retention, churn-prevention for cancel flows/save offers on a recurring-billing program
- **discount-and-clearance**: For where discounting is actually earned (clearance/end-of-life stock) vs. a standing acquisition lever
- **offers**: For raising perceived value instead of cutting price when the value/price ratio isn't landing
- **cro**: For optimizing pricing page conversion
- **ai-seo**: For making the pricing page extractable/citable by AI (the teardown's AI-agent-readiness axis)
- **schema**: For Product/Offer structured data so machines can read your tiers and prices
- **copywriting**: For pricing page copy
- **marketing-psychology**: For pricing psychology principles
- **ab-testing**: For testing pricing changes
- **revops**: For deal desk processes and pipeline pricing
- **sales-enablement**: For proposal templates and pricing presentations
