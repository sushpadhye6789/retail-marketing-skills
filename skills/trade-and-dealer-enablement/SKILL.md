---
name: trade-and-dealer-enablement
description: "When the user wants to enable retail buyers and dealers, create line sheets, set up co-op advertising, or design dealer incentive programs. Also use when the user mentions 'trade enablement,' 'dealer enablement,' 'line sheet,' 'co-op advertising,' 'dealer incentives,' 'stockist training,' 'wholesale pipeline,' or 'retail buyer pitch.' Use this for anything involving selling products through retail channels, wholesale distribution, and dealer networks. For cold outreach emails, see cold-email. For sales collateral beyond emails, see sales-enablement. For retail financial mechanics, see commercial-ops."
metadata:
  version: 2.2.0
---

# Trade & Dealer Enablement for Retail & Commerce (v2.2.0)

## Overview
Retail-focused trade and dealer enablement framework replacing traditional B2B sales enablement with strategies optimized for selling products through retail channels, wholesale distribution, and dealer networks.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

---

## 1. Core Frame Shift: B2B Sales Enablement → Trade & Dealer Enablement

| Metric / Dimension | B2B Sales Enablement | Trade & Dealer Enablement |
| :--- | :--- | :--- |
| **Primary Focus** | Enterprise sales decks, objection handling, ROI calculators | Retail buyer line sheets, dealer marketing kits, stockist training |
| **Key Assets** | Pitch decks, demo scripts, proposal templates | Line sheets, sell sheets, co-op guidelines, training materials |
| **Target Audience** | CTO, VP Sales, CFO, technical buyers | Category managers, retail buyers, independent stockists, dealers |
| **Purchase Context** | Long-cycle, complex evaluation, multiple stakeholders | Assortment review, shelf space negotiation, promotional planning |
| **Success Metrics** | Deal velocity, win rate, deal size | Sell-through at door, reorder rate, promotional lift, inventory turns |
| **Communication Channels** | In-person/virtual meetings, email, shared documents | Physical samples, digital portals, trade shows, sales rep visits |

---

## 2. Retail Buyer Enablement Framework

### Line Sheet Fundamentals

**Essential Line Sheet Components**:
- **Product Hero Image**: High-quality, lifestyle or pack shot
- **Product Name & Description**: Clear, benefit-focused naming
- **Key Features & Benefits**: 3-5 bullet points highlighting unique value
- **Target Consumer**: Demographics, psychographics, use occasions
- **Pricing Information**: 
  - Wholesale Price (WS)
  - Suggested Retail Price (MSRP) 
  - Margin Keystone (typically 2x WS = MSRP)
  - Case Pack Quantity & Dimensions
- **Product Specifications**: 
  - UPC/Barcode
  - Weight & Dimensions (unit & case)
  - Materials/Ingredients
  - Country of Origin
  - Certifications (organic, gluten-free, etc.)
- **Availability & Logistics**:
  - Lead Time
  - Minimum Order Quantity (MOQ)
  - Order Multiples
  - GS1/EDI Compliance
- **Marketing Support**:
  - Co-op Advertising Percentage
  - Promotional Calendar
  - Point-of-Sale Materials Availability
  - Digital Assets Availability

**Line Sheet Formats**:
1. **One-Page Product Sheet**: Single product focus for hero items
2. **Category Line Sheet**: Multiple products in same category
3. **Seasonal Line Sheet**: New launches for specific season
4. **Digital Interactive**: Click-through to variants, videos, specs
5. **Print Catalog**: Full assortment presentation for buying meetings

### Retail Buyer Pitch Framework

**Pre-Meeting Preparation**:
1. **Retailer Research**:
   - Store format and positioning
   - Current assortment in your category
   - Private label vs. national brand mix
   - Promotional history and calendar
   - Buyer's background and tenure
2. **Assortment Gap Analysis**:
   - What's missing from their current offering?
   - Where do you fit in their price/quality tiers?
   - What trends are they missing?
3. **Value Proposition Tailoring**:
   - Margin opportunity vs. current category
   - Sell-through potential based on similar products
   - Exclusive or differentiated attributes
   - Marketing support value

**Meeting Structure**:
1. **Opening & Rapport** (5 min):
   - Reference recent store visit or market observation
   - Compliment specific merchandising or category management
   - Confirm meeting objectives and timeline
2. **Assortment Review** (10 min):
   - Show where your product fits in their current set
   - Highlight gaps you fill or upgrades you provide
   - Use planogram or shelf mock-up if available
3. **Product Presentation** (10 min):
   - Walk through key features and benefits
   - Demonstrate usage or application (where applicable)
   - Share consumer testing or focus group results
4. **Business Case** (10 min):
   - Margin and sell-through projections
   - Marketing support and promotional calendar
   - Logistics and orderability details
   - Comparison to current items in category
5. **Next Steps & Close** (5 min):
   - Clear call-to-action (sample request, trial order, follow-up)
   - Timeline for decision and implementation
   - Contact information and availability

**Post-Meeting Follow-Up**:
- **Within 24 hours**: Thank you email with line sheet attached
- **3-5 days**: Check-in on sample receipt or questions
- **7-10 days**: Assortment review reminder if no response
- **2 weeks**: Decision deadline reminder with urgency

### Sell Sheet vs. Line Sheet

**Sell Sheet** (Consumer-Facing):
- Focus on benefits and reasons to buy
- Lifestyle imagery and use cases
- Minimal technical specifications
- Designed for end consumer or store staff
- Used in-store, online, or marketing materials

**Line Sheet** (Trade-Facing):
- Focus on business details and ordering information
- Complete specifications, pricing, and logistics
- Designed for retail buyers and purchasing departments
- Used in buying meetings, order writing, and inventory planning

---

## 3. Co-Op Advertising & Trade Spend Optimization

### Co-Op Framework

**Co-Op Structure**:
- **Base Percentage**: Typically 2-5% of invoice value
- **Earned/Uplift**: Additional % based on performance or participation
- **Account-Specific**: Negotiated terms for strategic accounts
- **Program-Specific**: Tied to specific promotions or campaigns
- **Media-Type Specific**: Different rates for digital, print, radio, etc.

**Approval Process**:
1. **Pre-Approval Submission**:
   - Campaign brief and objectives
   - Creative assets and media plan
   - Cost estimates and invoices
   - Expected lift and measurement plan
2. **Review & Approval**:
   - Brand guideline compliance check
   - Measurement and ROI validation
   - Budget availability confirmation
   - Legal and regulatory review (where applicable)
3. **Post-Campaign Reconciliation**:
   - Performance reporting and lift analysis
   - Invoice submission with proof of performance
   - Timely payment within agreed terms
   - Discrepancy resolution process

### Trade Spend Optimization

**Measure it, don't just plan it.** See `commercial-ops/references/retail-revops.md`'s Trade Spend ROI formula and benchmark (good >1.0, strong >2.0) before committing co-op or promotional funding — it's the dollar-efficiency counterpart to Promotional Yield's unit-movement measure, and the two should be checked separately since a promotion can move units well while the trade spend funding it doesn't pay back.

**Promotional Calendar Planning**:
- **National Retail Events**: 
  - Q1: New Year resolutions, Valentine's Day, Easter
  - Q2: Mother's Day, Memorial Day, Father's Day, Graduation
  - Q3: Back-to-School, Labor Day, Halloween preparation
  - Q4: Thanksgiving, Black Friday, Cyber Monday, Holiday season
- **Seasonal Transitions**:
  - Spring/Summer launch (Feb-Mar)
  - Fall/Winter launch (Aug-Sep)
  - Holiday preview (Oct)
  - Post-holiday clearance (Jan)
- **Category-Specific Events**:
  - Health & wellness (Jan, Sept)
  - Outdoor living (Mar-May, Sept-Oct)
  - Entertaining (Nov-Dec, Mar-May for spring)
  - Gift-giving (Nov-Dec, Jun for graduations/weddings)

**Promotion Type Effectiveness**:
| Promotion Type | Typical Lift | Best For | Cost Consideration |
|----------------|--------------|----------|-------------------|
| Price Discount (20% off) | 150-300% | Velocity drivers, trial | High margin impact |
| BOGO (Buy One Get One) | 200-400% | Sampling, pantry fill | Highest margin impact |
| Gift with Purchase | 100-200% | Trial, loyalty building | Medium cost |
| Bonus Pack (50% more) | 120-250% | Value perception | Medium margin impact |
| Instant Rebate | 80-150% | Price-sensitive segments | Lower immediate margin impact |
| Loyalty Points | 50-120% | Repeat purchase, data | Deferred cost |
| Display/Feature | 50-150% | Impulse, discovery | Merchandising cost |
| Sampling | 300-800% (trial) | New product launch | Product + labor cost |

**Measurement Framework**:
- **Baseline Establishment**: 4-6 weeks of normal sales pre-promotion
- **Promotional Period**: Measure during promo + 1-2 weeks post
- **Control Group**: Similar stores/SKUs without promotion (where possible)
- **Incrementality Calculation**: Promo sales - baseline sales
- **ROI Calculation**: (Incremental margin - promotional cost) / promotional cost
- **Cannibalization Analysis**: Impact on related SKUs and categories
- **Pull-Forward Effect**: Post-promotion dip analysis

### Dealer Incentive Programs

**Volume-Based Incentives**:
- **Tiered Rebates**: Increasing % as volume thresholds met
- **Growth Bonuses**: Additional % for year-over-year growth
- **Market Share Bonuses**: Based on category share achievement
- **New Door Bonuses**: Per-door incentive for new placements

**Performance-Based Incentives**:
- **Sell-Through Thresholds**: Bonuses for achieving X units/week/door
- **Inventory Turn Bonuses**: For maintaining target turns
- **Margin Protection**: Incentives for selling at or above MSRP
- **Display Compliance**: For proper merchandising and fixture use

**Marketing & Merchandising Incentives**:
- **Co-Op Matching**: Dollar-for-dollar up to percentage
- **Approved Media Reimbursement**: For pre-approved campaigns
- **In-Store Demo Pay**: For staffed sampling events
- **End-Cap/Island Display**: Premium placement incentives

**Program Administration**:
- **Clear Communication**: Program guide, terms, and conditions
- **Simple Submission**: Easy claim process with minimal documentation
- **Timely Payment**: Monthly or quarterly as promised
- **Performance Reporting**: Regular updates on progress toward goals
- **Fraud Prevention**: Audit trails, spot checks, validation requirements

---

## 4. Stockist & Distributor Enablement

### Distributor Onboarding & Training

**Initial Distributor Qualification**:
1. **Financial Stability**: Credit check, references, banking information
2. **Operational Capability**: Warehouse size, location, delivery fleet
3. **Market Coverage**: Territory analysis, existing retail relationships
4. **Compliance & Licensing**: Business licenses, insurance, certifications
5. **Technology Capability**: EDI capability, inventory system, reporting

**Training Curriculum**:
1. **Product Knowledge**:
   - Features, benefits, and differentiators
   - Target consumer and use occasions
   - Competitive comparison and positioning
   - Frequently asked questions and objection handling
2. **Business Fundamentals**:
   - Pricing structure and margin calculations
   - Order minimums, lead times, and logistics
   - Marketing support and co-op programs
   - Returns, damages, and chargeback procedures
3. **Sales Tools & Systems**:
   - Line sheet and catalog usage
   - Digital portal navigation and order placement
   - Sample kit management and replenishment
   - CRM and reporting systems
4. **Retailer Engagement**:
   - Approaching retail buyers and setting meetings
   - Assortment review and shelf space negotiation
   - Promotional planning and execution
   - Problem resolution and retailer support

**Ongoing Enablement**:
- **Quarterly Business Reviews**: Performance vs. plan, opportunities
- **Monthly Newsletters**: New launches, promotions, best practices
- **Annual Distributor Meeting**: Strategy, awards, planning
- **Regional Training Sessions**: Local market updates and techniques
- **Online Learning Portal**: On-demand training modules and resources
- **Field Sales Support**: Joint calls and territory assistance

### Inventory Management & Logistics Support

**Order Management**:
- **Order Channels**: Phone, email, fax, EDI, online portal
- **Order Cut-Off Times**: Same-day shipping deadlines
- **Order Confirmation**: Automated acknowledgment with ETA
- **Order Changes & Cancellations**: Windows and fees
- **Backorder Communication**: Proactive updates and alternatives

**Shipping & Delivery**:
- **Freight Terms**: FOB origin, FOB destination, prepaid & add
- **Carrier Selection**: LTL, parcel, white-glove, specialized
- **Delivery Windows**: Appointment required, business hours, after-hours
- **Delivery Proof**: POD, signature required, photo confirmation
- **Shipping Notifications**: Advanced shipment notice (ASN), tracking

**Inventory Visibility**:
- **Real-Time Stock Levels**: Available to sell, allocated, in-transit
- **Reorder Alerts**: Below safety stock or upcoming promotions
- **Lot & Serial Tracking**: For traceability and recalls
- **Expiration Date Management**: FIFO/FEFO for perishables
- **Damaged/Defective Handling**: Claim process, disposal instructions

**Returns & Deductions Management**:
- **Return Authorization**: RMA process, condition requirements
- **Freight Damage**: Carrier claim process, documentation
- **Manufacturing Defects**: Replacement or credit process
- **Commercial Deductions**: Invalid POs, pricing errors, shortages
- **Promotional Deductions**: Co-op validation, performance-based

---

## 5. Trade Show & Event Enablement

### Trade Show Preparation

**Pre-Show Planning (8-12 weeks)**:
1. **Show Selection**: Relevant audience, buyer attendance, cost
2. **Booth Design & Construction**:
   - Brand consistency and messaging
   - Product display and demonstration areas
   - Meeting space and hospitality
   - Storage and logistics considerations
3. **Pre-Show Marketing**:
   - Invitations to key buyers and prospects
   - Social media teaser campaign
   - Press releases and media outreach
   - Email marketing to existing contacts
4. **Sales Team Preparation**:
   - Product training and refreshers
   - Role-playing common buyer conversations
   - Lead qualification and scoring training
   - Booth staffing schedule and breaks
5. **Logistics & Shipping**:
   - Booth materials and display components
   - Product samples and inventory
   - Literature and promotional materials
   - Shipping to advance warehouse or direct to show

**At-Show Execution**:
1. **Booth Staffing**:
   - Greeters and initial engagement
   - Product specialists and demonstrators
   - Sales representatives for qualified leads
   - Management for VIP buyer meetings
2. **Lead Capture & Qualification**:
   - Badge scanning or digital lead capture
   - Immediate qualification (budget, authority, need, timeline)
   - Notes on interests, objections, and next steps
   - Segmentation: Hot/warm/cold leads for follow-up
3. **Product Demonstrations**:
   - Scheduled and continuous demo options
   - Hands-on trial opportunities (where appropriate)
   - Comparison demonstrations vs. competitors
   - Problem-solving scenarios and use cases
4. **Meetings & Appointments**:
   - Pre-scheduled buyer meetings in booth or private rooms
   - Walk-up conversations qualified to meetings
   - Follow-up scheduling for deeper discussions
   - Hospitality suite or off-site meeting coordination

**Post-Show Follow-Up**:
- **Within 24 hours**: Thank you emails with show highlights
- **2-3 days**: Personalized follow-up based on conversation
- **7-10 days**: Sample or information package shipment
- **2-3 weeks**: Second follow-up for unresponsive leads
- **Monthly**: Nurture sequence for long-term prospects

### In-Store Demo & Sampling Programs

**Demo Program Design**:
1. **Objective Setting**: Trial generation, education, feedback collection
2. **Location Selection**: High-traffic areas, complementary categories
3. **Timing & Frequency**: Peak shopping hours, weekend focus
4. **Staffing Requirements**: Brand ambassadors vs. retail staff
5. **Training & Scripting**: Product knowledge, engagement techniques
6. **Measurement & ROI**: Tracking trials to purchase, lift analysis

**Sampling Program Best Practices**:
- **Sample Size**: Meaningful trial (enough for evaluation)
- **Allergen Information**: Clear labeling and disclosure
- **Dietary Restrictions**: Options for common restrictions (gluten-free, nut-free, etc.)
- **Temperature Control**: Proper storage for perishable samples
- **Waste Management**: Environmentally responsible disposal
- **Age Restrictions**: Compliance for alcohol, supplements, etc.
- **Incentive Coupons**: Immediate purchase encouragement
- **Feedback Collection**: Quick surveys or preference indication

---

## 6. Data Architecture & Measurement

### Essential Trade Enablement Data Points

**Line Sheet & Catalog Performance**:
- Line sheet views and downloads (digital)
- Catalog request and fulfillment rates
- Time spent viewing specific products or sections
- Click-through to samples, videos, or detailed specs
- Geographic and account-based viewing patterns

**Buyer Engagement Metrics**:
- Meeting request and conversion rates
- Sample request to trial order conversion
- Initial order size vs. projected
- Reorder rate and timing
- Sell-through performance at door
- Promotional participation and lift

**Co-Op & Trade Spend Performance**:
- Co-op dollar utilization rate
- Promotional calendar adherence
- Incremental sales lift per promotion type
- ROI by promotion and account
- Compliance with submission deadlines and requirements

**Distributor Performance**:
- Order frequency and size
- Inventory turns and shelf life management
- Market coverage and retail penetration
- Sales representative activity and effectiveness
- Training completion and knowledge retention
- Claims, returns, and dispute resolution efficiency

### Trade Enablement Dashboard

**Retail Buyer Effectiveness**:
- **Line Sheet Conversion Rate**: Views to sample/trial requests
- **Sample to Order Rate**: Trial requests to opening orders
- **Initial Order Accuracy**: Forecast vs. actual first orders
- **Reorder Rate**: % of doors reordering after initial shipment
- **Sell-Through at Door**: Units/store/week vs. category average
- **Promotional Lift**: Incremental sales during co-op programs

**Distributor Network Health**:
- **Order Consistency**: Regularity and predictability of orders
- **Inventory Management**: Turns, aging, and stockout frequency
- **Market Coverage**: % of target retailers called on regularly
- **Sales Rep Effectiveness**: Calls per day, meetings set, orders written
- **Training Impact**: Knowledge scores, field performance improvement
- **Claims & Disputes**: Resolution time and customer satisfaction

**Trade Spend Efficiency**:
- **Co-Op Utilization Rate**: % of available funds claimed
- **Promotional ROI**: Incremental margin / promotional spend
- **Lift Consistency**: Predicted vs. actual promotional performance
- **Timeliness**: Submission and reconciliation within terms
- **Fraud Rate**: Invalid or non-compliant claims detected

---

## 7. Process Workflows

### Line Sheet Creation & Maintenance Process

**Phase 1: Product Information Gathering**:
1. **Product Specifications**: UPC, dimensions, weight, materials
2. **Pricing Details**: WS, MSRP, margin, case pack, MOQ
3. **Marketing Assets**: Hero images, lifestyle shots, videos
4. **Benefits & Features**: Consumer-tested claims, differentiators
5. **Regulatory Information**: Certifications, claims substantiation
6. **Logistics Details**: Lead times, origin, shipping restrictions

**Phase 2: Design & Layout**:
1. **Template Selection**: One-page, category, seasonal, or digital
2. **Information Hierarchy**: Most important details first
3. **Visual Design**: Brand colors, typography, imagery standards
4. **Mobile Optimization**: Readable on phones and tablets
5. **Print Specifications**: Bleed, resolution, color profiles
6. **Accessibility**: Font sizes, color contrast, alternative text

**Phase 3: Review & Approval**:
1. **Marketing Review**: Brand compliance, messaging accuracy
2. **Legal Review**: Claims substantiation, regulatory compliance
3. **Sales Review**: Usefulness in buyer meetings, missing info
4. **Logistics Review**: Accuracy of shipping, lead time, MOQ
5. **Finance Review**: Pricing accuracy, margin calculations
6. **Final Approval**: Sign-off from product, marketing, sales leads

**Phase 4: Distribution & Updates**:
1. **Digital Distribution**: Portal upload, email notification, link sharing
2. **Print Production**: Quantity based on forecast and events
3. **Version Control**: Clear dating and revision tracking
4. **Update Triggers**: New launches, pricing changes, specification updates
5. **Archiving**: Retention of historical versions for reference
6. **Feedback Collection**: Buyer and rep input on usefulness

### Co-Op Program Management Process

**Phase 1: Program Design**:
1. **Objective Setting**: Trial generation, loyalty building, clearance
2. **Budget Allocation**: Total co-op fund, account allocations
3. **Earning Rules**: Percentage basis, performance multipliers
4. **Approval Process**: Submission requirements, timelines, reviewers
5. **Eligible Media**: Print, digital, radio, TV, social, OOH
6. **Creative Requirements**: Brand guidelines, approval process
7. **Measurement Requirements**: Lift calculation, reporting standards

**Phase 2: Campaign Execution**:
1. **Campaign Planning**: Goals, target audience, creative, media plan
2. **Submission Package**: Brief, assets, invoices, expected lift
3. **Review & Approval**: Timeline adherence, compliance check
4. **Campaign Launch**: Media placement, in-store execution
5. **Performance Tracking**: Monitoring during flight, mid-flight adjustments
6. **Post-Campaign Reporting**: Results, lift analysis, invoicing

**Phase 3: Reconciliation & Payment**:
1. **Documentation Collection**: Performance reports, invoices, proof
2. **Validation Check**: Against submitted estimates and approvals
3. **Payment Processing**: Within agreed terms (net-30, net-60, etc.)
4. **Discrepancy Resolution**: Communication and adjustment process
5. **Reporting & Analytics**: Utilization rates, ROI by campaign/type
6. **Program Optimization**: Rule adjustments based on learnings

**Phase 4: Relationship Management**:
1. **Quarterly Reviews**: Performance vs. plan, opportunities
2. **Annual Planning**: Budget allocation, program adjustments
3. **Communication Cadence**: Regular updates, policy changes
4. **Escalation Process**: Issue resolution path and timelines
5. **Recognition & Incentives**: Top performers, innovative usage

### Distributor Onboarding & Enablement Process

**Phase 1: Qualification & Contracting**:
1. **Application & Screening**: Basic information, references
2. **Financial Review**: Credit check, banking, stability assessment
3. **Operational Assessment**: Warehouse, delivery, technology
4. **Market Analysis**: Territory viability, existing relationships
5. **Legal & Compliance**: Licensing, insurance, certifications
6. **Contract Negotiation**: Terms, minimums, exclusivity, term

**Phase 2: Initial Training & Setup**:
1. **Kickoff Meeting**: Virtual or in-person introductions
2. **Product Deep Dive**: Features, benefits, positioning, competition
3. **Business Fundamentals**: Pricing, ordering, logistics, support
4. **Systems Training**: Order portal, reporting, communication tools
5. **Sales Tools**: Line sheets, samples, objection handling, closing
6. **Retailer Engagement**: Call planning, meeting setting, follow-up

**Phase 3: Launch & Early Support**:
1. **First Order Facilitation**: Product selection, order entry, confirmation
2. **Sample Kit Provision**: Initial samples for sales calls
3. **Early Sales Support**: Joint calls, territory accompaniment
4. **Performance Monitoring**: Order frequency, size, geography
5. **Issue Resolution**: Rapid response to questions or problems
6. **Feedback Collection**: Initial impressions, suggestions, concerns

**Phase 4: Ongoing Enablement & Management**:
1. **Regular Communication**: Newsletters, updates, best practices
2. **Performance Reviews**: Quarterly business reviews, scorecards
3. **Advanced Training**: Product updates, sales techniques, technology
4. **Incentive Programs**: Volume bonuses, growth rewards, SPIFFs
5. **Territory Management**: Coverage assessments, gap analysis
6. **Succession Planning**: Contact updates, ownership changes

---

## 8. Retail-Specific Questions & Context Gathering

### Essential Discovery Questions

1. **Product & Market**
   - What is your product's unique selling proposition vs. competitors?
   - What category or categories does your product compete in?
   - What is your typical wholesale margin requirement (keystone, etc.)?
   - Are there seasonal or promotional purchase patterns in your category?

2. **Current Trade Enablement**
   - What line sheets or sell sheets do you currently use?
   - What co-op advertising or trade spend programs do you offer?
   - How do you currently engage with retail buyers and distributors?
   - What training or enablement do you provide to your channel partners?

3. **Channel Structure & Partners**
   - What percentage of sales go through different channels (independents, chains, specialty, mass, D2C)?
   - What types of distributors or wholesalers do you work with?
   - Do you work with brokers, agents, or manufacturer's representatives?
   - What geographic territories do you cover and how are they structured?

4. **Data & Systems**
   - What data do you currently collect on sell-through at retail?
   - What systems do you use for order management, inventory, and CRM?
   - How do you track co-op utilization and trade spend effectiveness?
   - What reporting do you currently provide to your channel partners?

5. **Goals & Constraints**
   - What are your primary goals for improving trade and dealer enablement?
   - What is your budget for marketing materials, training, or technology?
   - What are your current limitations in terms of staff or resources?
   - What is your timeline for implementing trade enablement improvements?

---

## 9. Tool Integrations for Trade Enablement

| Tool Category | Examples | Trade Enablement Use Case |
|--------------|----------|---------------------------|
| **Digital Asset Management** | Bynder, Widen, Cloudinary | Centralized line sheet and asset distribution |
| **Product Information Management** | Akeneo, Pimcore, Salsify | Product specs, pricing, and attribute management |
| **Sales Enablement Platforms** | Seismic, Highspot, Showpad | Line sheet distribution, engagement tracking |
| **Trade Promotion Management** | Visualfabriq, SAP TPM, Oracle Promantra | Co-op planning, submission, and reconciliation |
| **Distributor Portals** | JOOR, NuORDER, Centra | Digital line sheets, order placement, inventory visibility |
| **CRM Systems** | Salesforce, HubSpot, Zoho | Distributor and retail buyer relationship management |
- **Marketing Resource Management** | MRM systems, Percolate, Aprimo | Co-op budget management and approval workflows
- **Analytics & Attribution** | Nielsen, IRI, SPINS | Retail sell-through, market share, promotional lift
- **Field Sales Enablement** | Badger Maps, MapAnything, CallProof | Territory planning, call optimization, rep tracking
- **Sample Management** | Sample Logic, SampleManager, in-house systems | Sample kit tracking, replenishment, cost control
- **Trade Show Management** | ExpoFP, Coreapps, Bizzabo | Booth design, lead capture, meeting scheduling
- **Loyalty & Incentive** | Present, Tango Card, Rybbon | Distributor incentives, SPIFFs, reward fulfillment
- **Compliance & Validation** | Avalara, Vertex, Thomson Reuters | Tax calculation, regulatory compliance, documentation

---

## 10. Related Skills

- **commercial-ops** - Retail financial mechanics including GMROI, sell-through analytics, and promotional yield
- **post-purchase-experience** - Unboxing experience, product registration, cross-sell triggers, first-time buyer activation
- **retention-and-winback** - Replenishment cadence, LTV decay mitigation, win-back sequences for retail
- **loyalty-programs** - Points structures, tier benefits, redemption options, program optimization
- **customer-research** - Post-purchase surveys, NPS programs, customer feedback collection
- **emails** - Post-purchase email sequences, transactional messages, promotional triggers
- **sms-marketing** - SMS notifications for shipping, delivery, replenishment reminders
- **packaging-design** - Structural design, material selection, unboxing experience optimization
- **visual-merchandising** - In-store execution that complements post-purchase experience
- **social-media** - Encouraging and amplifying user-generated content, unboxing sharing
- **content-strategy** - Educational content, usage tips, inspirational lifestyle content for post-purchase and retention
- **trade-marketing** - Strategic frameworks for selling through retail channels (complementary skill)
- **pricing** - Retail pricing strategies, keystone markup, competitive positioning
- **inventory-management** - Stock-to-sales ratios, aging analysis, turn optimization for supply chain