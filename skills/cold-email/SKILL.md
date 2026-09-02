---
name: cold-email
version: 2.1.1
description: "When the user wants to write cold outreach emails to retail buyers, wholesale distributors, or trade partners. Also use when the user mentions 'cold email,' 'outbound email,' 'wholesale outreach,' 'retail buyer outreach,' 'distributor outreach,' 'trade prospecting,' or 'follow-up email sequence.' Use this for writing B2B cold emails and follow-up sequences that get replies from retail and wholesale accounts."
---

# Cold Email for Retail & Wholesale Trade (v2.1.0)

## Overview
Outbound email strategy refactored from software demo pitches into high-converting wholesale line-sheet pitches, retail category review requests, and distributor partnership sequences.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

---

## 1. The Retail Trade Pitch

Cold outreach to a retail buyer, category manager, or wholesale distributor runs on different fundamentals than a typical outbound pitch — the audience, the value metric, and the assets all need to fit how a buyer actually evaluates a line, not a generic "let's connect" template. See `marketing-strategy` Section 16 for whether the target is a Business (small/medium, self-serve-ish) or Commercial (large, RFP/buying-committee) account — the pitch below flexes by which.

| Dimension | Retail Trade Pitch |
| :--- | :--- |
| **Primary Audience** | Category Manager, Independent Retail Buyer, Wholesale Distributor |
| **Value Metric** | Gross Margin %, GMROI, sell-through velocity, shelf yield |
| **Key Assets** | Line sheet, sample kit, sell sheet, POP display plan |
| **Primary Call-to-Action** | "Request a digital line sheet or physical sample pack" |
| **Hook Type** | Shelf space opportunity / Category margin expansion |

---

## 2. Retail Personalization Signals & Triggers

To break through a retail buyer's inbox, tie outreach to verifiable retail signals:

* **Assortment Gap Signal:** Identifying a missing sub-category or consumer trend on their current physical or digital shelves (e.g., eco-friendly packaging, functional ingredients, low-sugar alternatives).
* **Geographic D2C Demand Signal:** Leveraging regional D2C sales data to prove existing foot-traffic demand near their store locations.
* **Seasonal Assortment Timing:** Aligning outreach with industry buying windows (e.g., pitching Holiday Q4 lines in May/June, Spring/Summer lines in October/November).
* **Competitor Displacement Signal:** Highlighting out-of-stock issues or declining brand traction among competing lines in their category.

---

## 3. Outreach Templates & Sequences

### Sequence 1: Independent Retailer & Boutique Pitch (3-Touch Sequence)

#### Touch 1 (Day 1): The High-Margin Sample Offer
**Subject:** [Brand Name] for [Store Name] + Margin Profile
```text
Hi [Buyer Name],

Loved your recent seasonal curation at [Store Name/Location]—your focus on [Niche/Category] really stands out in [City/Neighborhood].

I'm reaching out from [Brand Name]. We produce [Short Product Description], and we’re currently seeing an average of [X]% sell-through within 30 days across independent stockists, delivering a [50%+ / Keystone] margin.

We offer low MOQlow MOQs ($[Amount] opening order) and guaranteed return/exchange support on initial trial orders to remove risk.

Would you be open to reviewing our 1-page digital line sheet, or can I send a sample box directly to [Store Name]?

Best,
[Your Name]
[Title, Brand Name]
[Link to Digital Line Sheet / Unboxing Video]

```

#### Touch 2 (Day 4): Velocity & Customer Demand Proof

**Subject:** Re: [Brand Name] for [Store Name]

```text
Hi [Buyer Name],

Quick follow-up—in [Store Name]'s region ([City/Zip Code]), we've shipped [X] direct-to-consumer orders over the last 90 days. Our local customers regularly ask where they can buy us on shelves nearby.

Our starter display displays require less than [X] square feet of counter space and include point-of-sale shelf talkers to drive immediate impulse buys.

Should I send over our opening order order sheet, or ship a sample pack to your store?

Best,
[Your Name]

```

#### Touch 3 (Day 8): Low-Risk Trial Close

**Subject:** Sample kit for [Store Name]?

```text
Hi [Buyer Name],

I know buying season is busy. If you're currently full on [Category] inventory, no worries at all. 

I'd still love to send a complimentary sample box to your desk so you can test the quality firsthand for future category reviews.

What is the best shipping address for your receiving desk?

Best,
[Your Name]

```

---

### Sequence 2: Enterprise Chain Category Manager Pitch (4-Touch Sequence)

#### Touch 1 (Day 1): The Category Review & Margin Gap

**Subject:** [Category Name] Innovation for [Chain Name] (Category Review)

```text
Hi [Category Manager Name],

As you prepare for the upcoming [Category Name] review for [Chain Name], I wanted to share performance data from our retail test markets.

[Brand Name] is delivering [X]% incremental growth in the [Sub-Category] space, driving a $[X] basket size compared to the category average of $[Y].

Key metrics for [Chain Name]:
- Margin Profile: [X]% gross margin
- Sell-Through Rate: [X] units/store/week in test doors
- Marketing Support: Fully funded [X]% co-op ad support and promotional trade spend calendar

We are fully EDI compliant and barcode/GS1 ready. 

Are you open to a brief 10-minute introduction before your category review cutoff?

Best,
[Your Name]
[Title, Brand Name]

```

#### Touch 2 (Day 5): Trade Spend & Marketing Support

**Subject:** Re: [Category Name] Innovation for [Chain Name]

```text
Hi [Category Manager Name],

To support velocity at the door level, we back all enterprise chain placements with targeted geo-fenced digital ads within a 5-mile radius of each [Chain Name] location.

In our recent expansion with [Regional Chain/Retailer], this strategy generated a [X]% repeat purchase rate within 60 days of launch.

Attached is our 1-page Sell Sheet outlining unit economics, case pack dimensions, and promotional calendars.

Do you have 10 minutes next Tuesday for a brief intro call?

Best,
[Your Name]

```

#### Touch 3 (Day 10): Retail Test Market Case Study

**Subject:** Test door data for [Chain Name]

```text
Hi [Category Manager Name],

Sharing a quick snapshot of our recent 50-door pilot with [Regional Partner Name]:

- Avg. Velocity: [X] units per store per week
- Markdown Rate: 0% (zero clearance required)
- Category Incrementality: 72% of buyers were new to the category

We’d love to propose a similar 20-to-50 door pilot with [Chain Name] to prove out the velocity before a full regional rollout.

Would you be open to reviewing the pilot proposal?

Best,
[Your Name]

```

#### Touch 4 (Day 16): Final Line Sheet Distribution

**Subject:** Line sheet & samples for [Chain Name]

```text
Hi [Category Manager Name],

Closing the loop here ahead of our Q3 production planning. 

I’ve attached our complete Product Catalog and Wholesale Line Sheet. If you'd like a physical sample kit sent to your merchant team, reply with the best mailing address and I'll ship it out today.

Best,
[Your Name]

```

---

### Sequence 3: Wholesale Distributor & Broker Pitch

#### Touch 1 (Day 1): Volume Velocity & Distribution Expansion

**Subject:** High-velocity [Category] brand for [Distributor Name] roster

```text
Hi [Distributor Contact Name],

We are currently scaling distribution for [Brand Name] across [Region/Territory] and are looking to partner with a premier distributor who covers the [Grocery / Specialty / D2C] trade channel.

Current Traction:
- Active Retail Doors: [X] doors
- Annual D2C Run-Rate: $[X]M
- Distributor Margin: [X]% guaranteed gross margin

We provide complete co-op marketing support, localized broker incentives, and guaranteed promotional allowances.

Are you open to evaluating [Brand Name] for your [Region/Territory] catalog?

Best,
[Your Name]
[Title, Brand Name]

```

---

## 4. Retail Email Execution Checklist

* [ ] **Line Sheet Attached / Linked:** Ensure a clean, PDF digital line sheet containing wholesale pricing (WS), suggested retail pricing (MSRP), case pack quantities, and product barcodes is easily accessible.
* [ ] **Margin Clarity:** Explicitly state the gross margin percentage (e.g., 50% Keystone, 65% D2C) in the first two touchpoints.
* [ ] **Low-Friction CTA:** Focus early emails on sending samples or line sheets rather than asking for immediate inventory purchase commitments.
* [ ] **EDI & Logistics Readiness:** For enterprise chain buyers, mention GS1 barcode compliance, pallet dimensions, and distribution/fulfillment capability up front.