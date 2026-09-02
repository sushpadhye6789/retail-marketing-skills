---
name: commercial-ops
version: 2.1.3
description: "When the user wants to optimize retail operations, improve GMROI, analyze sell-through rates, or optimize trade spend. Also use when the user mentions 'commercial operations,' 'GMROI,' 'sell-through,' 'promotional yield,' 'trade spend optimization,' 'retail margin,' 'inventory turns,' or 'wholesale pipeline.' Use this for anything involving the systems and processes that connect marketing to retail revenue. For cold outreach emails, see cold-email. For email drip campaigns, see emails. For pricing decisions, see pricing."
---

# Commercial Operations for Retail & Commerce (v2.1.0)

## Overview
Retail-focused revenue operations framework — metrics and processes purpose-built for product-based businesses selling through retail channels, direct-to-consumer (D2C), wholesale distribution, and brick-and-mortar storefronts.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. Target Market
Refer to `.agents/marketing-strategy.md` Sections 2 (Target Audience) and 3 (Personas) for ideal customer profile details.

---

## 1. Retail Commercial Operations Fundamentals

| Dimension | Retail Commercial Operations |
| :--- | :--- |
| **Primary Focus** | Product sell-through, inventory turns, margin optimization |
| **Key Metrics** | GMROI, STR, sell-through rate, UPT, ATV, markdown optimization |
| **Data Sources** | POS, inventory management, ERP, ecommerce platforms |
| **Stakeholders** | Merchandising, Buying, Store Ops, Supply Chain, Finance |
| **Cycle Focus** | Assortment planning → receipt → sell-through → replenishment |

---

## 2. Retail Financial Mechanics & KPIs

### Core Retail Metrics

**GMROI (Gross Margin Return on Investment)**
```
GMROI = (Gross Margin $) / (Average Inventory Cost $)
```
*Measures how efficiently inventory investment generates gross profit. Target: > 3.0 for most retail categories.*

**Sell-Through Rate (STR)**
```
STR = (Units Sold) / (Beginning Inventory + Receipts) × 100
```
*Percentage of inventory sold during a period. Critical for open-to-buy planning.*

**Promotional Yield**
```
Promotional Yield = (Incremental Units Sold during Promotion) / (Promotional Investment $)
```
*Measures effectiveness of trade spend and promotional activities.*

**Inventory Turns**
```
Inventory Turns = Cost of Goods Sold / Average Inventory Value
```
*How many times inventory is sold and replaced over a period.*

**Units per Transaction (UPT)**
```
UPT = Total Units Sold / Number of Transactions
```
*Average number of items purchased per customer transaction.*

**Average Transaction Value (ATV)**
```
ATV = Total Sales $ / Number of Transactions
```
*Average dollar amount spent per customer transaction.*

### Margin Analysis Framework

**Initial Markup (IMU)**
```
IMU = (Retail $ - Cost $) / Retail $ × 100
```

**Maintained Markup (MMU)**
```
MMU = (Net Sales $ - Cost $) / Net Sales $ × 100
```
*Accounts for markdowns, employee discounts, and shrinkage.*

**Markdown Optimization**
*Balance between driving velocity and preserving margin through strategic, data-driven markdowns.*

---

## 3. Retail-Specific Processes

### Assortment Planning & Open-to-Buy (OTB)

**Pre-Season Planning**
* Analyze prior year sell-through by category, sub-category, SKU
* Identify top/bottom performers using GMROI and STR analysis
* Plan receipts based on seasonal demand curves and lead times

**In-Season Management**
* Weekly OTB updates based on actual sales vs. plan
* Replenishment triggers based on sell-through velocity and stock-to-sales ratios
* Markdown decisions based on aging inventory and sell-through trends

### Wholesale & Distribution Operations

**Wholesale Pipeline Stages**
1. **Retail Buyer Engagement** - Initial contact, line sheet review
2. **Assortment Review** - Buyer evaluates fit with store strategy
3. **Opening Order Negotiation** - Terms, co-op support, delivery dates
4. **PO Confirmation** - Final order with shipment details
5. **In-Store Execution** - Visual merchandising, staff training
6. **Sell-Through Reporting** - Weekly performance updates from retailer

**Key Wholesale Metrics**
- **Sell-Through at Door** - Units sold per store per week
- **Reorder Rate** - Percentage of doors reordering after initial shipment
- **Return Rate** - Percentage of units returned unsold
- **Guaranteed Sales** - Minimum sell-through commitment from retailer

### D2C & Ecommerce Operations

**Fulfillment Metrics**
- **Order to Ship Time** - Average hours from order placement to shipment
- **Perfect Order Rate** - Orders shipped complete, on-time, damage-free
- **Return Rate** - Percentage of orders returned (with reason analysis)

**Customer Lifetime Value (CLV) for Retail**
```
CLV = (Average Order Value) × (Purchase Frequency) × (Customer Lifespan)
```
*Adjusted for repeat purchase behavior specific to product category.*

---

## 4. Data Architecture & Reporting

### Essential Retail Data Feeds

| Data Source | Key Fields | Update Frequency |
|-------------|------------|------------------|
| **POS Systems** | SKU, units sold, sales $, timestamp, store ID | Real-time/Daily |
| **Inventory Management** | SKU, on-hand, on-order, committed, in-transit | Daily |
| **ERP/Accounting** | COGS, landed cost, vendor invoices, payments | Weekly/Monthly |
| **Ecommerce Platform** | Online sales, cart abandonment, conversion rate | Daily |
| **Marketing Attribution** | Campaign source, promo code usage, lift analysis | Weekly |
| **Supplier Data** | Lead times, MOQs, cost changes, promotional calendars | As needed |

### Retail Dashboard Structure

**Merchandising View**
- GMROI by category/sub-category
- Sell-through rate trends
- Inventory turns and aging
- Markdown effectiveness
- Assortment performance vs. plan

**Buying & Planning View**
- Open-to-buy position
- Receipts forecast vs. actual
- Vendor performance (OTD, fill rate)
- Promotional calendar adherence

**Store Operations View**
- UPT and ATV by store/region
- Conversion rate and traffic
- Shrinkage and operational metrics
- Staff productivity (sales per labor hour)

**Finance View**
- Gross margin trends
- Inventory valuation and turns
- Cash conversion cycle
- Working capital efficiency

---

## 5. Process Workflows

### New Product Launch Process

1. **Concept Approval** - Margin and sell-through projections
2. **Sample Review** - Quality, packaging, cost validation
3. **Pre-Launch Buy** - Initial allocation based on category strategy
4. **Launch Execution** - In-store displays, staff training, marketing support
5. **Early Sell-Through Monitoring** - First 2-4 weeks performance
6. **Replenishment Decision** - Based on velocity and sell-through
7. **Post-Launch Analysis** - GMROI, repeat rate, feedback incorporation

### Markdown Optimization Process

1. **Identify Slow Movers** - STR < category average for 4+ weeks
2. **Analyze Root Cause** - Price, assortment, presentation, external factors
3. **Determine Markdown Depth** - Based on age, sell-through potential, margin impact
4. **Execute & Monitor** - Track sell-through lift vs. margin erosion
5. **Post-Markdown Analysis** - Incrementality, cannibalization, customer behavior

### Wholesale Account Management

1. **Quarterly Business Reviews** - Performance vs. plan, opportunities
2. **Assortment Adjustments** - Based on sell-through and feedback
3. **Promotional Planning** - Co-op funds allocation and execution
4. **Inventory Rebalancing** - Transfer slow sellers to better performing doors
5. **Renewal Negotiation** - Terms for next season based on performance

---

## 6. Retail-Specific Questions & Context Gathering

### Essential Discovery Questions

1. **Business Model**
   - What percentage of sales come from D2C vs. wholesale vs. brick-and-mortar?
   - What are your primary retail channels (independents, chains, specialty, mass)? For the wholesale slice specifically, see `marketing-strategy` Section 16's Business (small/medium) vs. Commercial (large) split — margin, MOQ, and terms usually differ meaningfully between the two.
   - Do you sell through marketplaces (Amazon, Walmart.com, etc.)?

2. **Product & Category**
   - What is your typical product lifecycle (seasonal, evergreen, fashion)?
   - What are your key category attributes driving purchase decisions?
   - What is your average unit retail and cost structure?

3. **Current Operations**
   - What systems do you use for POS, inventory, and order management?
   - How do you currently measure and track sell-through and GMROI?
   - What is your current replenishment and allocation process?

4. **Pain Points & Goals**
   - Where do you see the biggest inventory inefficiencies?
   - What prevents you from achieving higher sell-through or margin?
   - What retail-specific metrics are you currently tracking vs. wishing to track?

---

## 7. Tool Integrations for Retail Operations

| Tool Category | Examples | Retail Use Case |
|--------------|----------|-----------------|
| **POS Systems** | Shopify POS, Lightspeed, Square, NCR Aloha | Real-time sales and inventory data |
| **Inventory Management** | TradeGecko, Cin7, DEAR Systems, NetSuite | Multi-location inventory tracking |
| **ERP Systems** | SAP Business Oracle, Microsoft Dynamics, NetSuite | Financials, procurement, order management |
| **Planning & Allocation** | JDA, Oracle Retail, RELEX | Assortment planning, allocation, replenishment |
| **Markdown Optimization** | Revionis, Clear Demand, Pricefx | Data-driven markdown decisions |
| **Wholesale Portals** | JOOR, NuORDER, Centra | Digital line sheets and order management |
| **Analytics & BI** | Tableau, Power BI, Looker | Retail performance dashboards |
| **Supplier Portals** | Amazon Vendor, Walmart Retail Link | Chargebacks, deductions, performance metrics |

---

**Note for platform-specific implementations**: If your ecommerce platform references a specific platform in `.agents/marketing-strategy.md` under Tech Stack, prefer the platform-specific variants found in `references/platforms/[platform]/`. For example, if your tech stack indicates Shopify, use `references/platforms/shopify/shopify-retail-ops.md` for Shopify-focused retail operations guidance.

---

## 8. Related Skills

- **pricing** / **price-elasticity** - GMROI, IMU, MMU, and pricing-optimization math this skill's margin metrics feed into
- **post-purchase-experience** - Unboxing, registration, and repeat purchase triggers
- **retention-and-winback** - Replenishment cadence, LTV decay mitigation, win-back sequences
- **trade-and-dealer-enablement** - Retail buyer pitch kits, co-op advertising, dealer incentives, wholesale/distributor relationship management
- **range-review** / **overstock** - Stock-to-sales ratios, aging analysis, and turn optimization this skill's velocity metrics inform
- **visual-merchandising** - Store execution, planogram compliance, display effectiveness
- **marketing-strategy** - Section 16 (B2B / Wholesale Channel) for strategic alignment