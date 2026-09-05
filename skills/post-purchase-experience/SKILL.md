---
name: post-purchase-experience
version: 2.1.2
description: "When the user wants to optimize post-purchase experience, improve unboxing design, increase product registration, or boost repeat purchase rates. Also use when the user mentions 'post-purchase,' 'unboxing,' 'product registration,' 'cross-sell,' 'repeat purchase,' 'first-time buyer,' 'replenishment,' or 'customer retention.' Use this for anything involving the customer experience after purchase in retail and commerce. For signup flows, see signup. For ongoing email sequences, see emails."
---

# Post-Purchase Experience for Retail & Commerce (v2.1.0)

## Overview
Retail-focused post-purchase experience framework — strategies purpose-built for product-based businesses selling through retail channels, direct-to-consumer (D2C), wholesale distribution, and brick-and-mortar storefronts.

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

---

## 1. Retail Post-Purchase Experience Fundamentals

| Dimension | Retail Post-Purchase Experience |
| :--- | :--- |
| **Primary Focus** | First-time buyer activation, repeat purchase triggers, loyalty enrollment |
| **Key Touchpoints** | Unboxing experience, product registration, care/maintenance guides |
| **Success Metrics** | First purchase conversion, repeat purchase rate, customer lifetime value |
| **Communication Channels** | Package inserts, email/SMS, QR codes, loyalty apps |
| **Customer Journey Stage** | Post-purchase → retention → advocacy |

---

## 2. Retail Post-Purchase Touchpoints & Optimization

### Unboxing Experience Design

**Physical Product Unboxing**:
- **Structural Design**: Easy opening, protective yet minimal packaging
- **Sequential Reveal**: Brand story → product → accessories → documentation → promotional materials
- **Sensory Elements**: Texture, scent, sound (where appropriate/brand-aligned)
- **Personalization**: Custom inserts, handwritten notes, customer name printing
- **Sustainability**: Recyclable materials, reusable packaging, clear recycling instructions
- **Shareability**: Instagrammable moments, unboxing video optimization, social sharing prompts

**Digital Product Unboxing** (for D2C ecommerce):
- **Order Confirmation**: Clear next steps, shipping timeline, tracking information
- **Shipping Updates**: Proactive notifications at key milestones
- **Delivery Notification**: Arrival confirmation with unboxing guidance
- **First-Use Experience**: QR codes linking to setup videos, care instructions, warranty registration

### Product Registration & Warranty Activation

**Registration Flow Optimization**:
- **Low-Friction Methods**: QR code scanning, SMS short code, one-click email link
- **Minimal Required Fields**: Name, email, purchase date, product SKU (optional: phone, address)
- **Incentives for Registration**: Extended warranty, exclusive content, loyalty points, early access to new products
- **Multiple Registration Channels**: Web portal, mobile app, phone IVR, mail-in card
- **Data Utilization**: Purchase verification, recall notifications, personalized recommendations

**Warranty & Protection Programs**:
- **Standard Warranty Clearance**: Simple terms, easy claim process, digital storage
- **Extended Warranty Options**: Clear pricing, coverage details, enrollment at point of purchase
- **Accidental Damage Protection**: Retailer-specific programs, clear claim procedures
- **Registration Benefits Tracking**: Show customers their registered products and benefits

### First-Time Buyer Activation Sequences

**Immediate Post-Purchase (0-24 hours)**:
- **Order Confirmation**: Reassurance, next steps, customer service contacts
- **Shipping Confirmation**: Tracking link, delivery estimate, signature requirements
- **Delivery Notification**: Arrival confirmation, unboxing tips, first-use guidance
- **First-Use Guidance**: Setup videos, quick start guides, safety information (where applicable)

**Early Experience (1-7 days)**:
- **Check-In Message**: "How's your first experience?" with easy feedback mechanism
- **Usage Tips**: Best practices, common questions, troubleshooting basics
- **Community Invitation**: Social media groups, forums, user communities
- **Content Suggestions**: Recipes, styling ideas, project ideas (product-dependent)

**Habit Formation (2-4 weeks)**:
- **Replenishment Reminders**: Based on typical consumption/use patterns
- **Complementary Product Suggestions**: Items that work well together
- **Care & Maintenance Guidance**: Cleaning instructions, storage recommendations, lifespan maximization
- **Loyalty Program Introduction**: Points earned, redemption options, member-exclusive benefits

### Cross-Sell & Upsell Triggers

**Purchase-Based Triggers**:
- **Immediate Post-Purchase**: "Customers who bought this also bought..." (based on verified purchase data)
- **Usage-Based**: Suggest complementary products after X uses/days
- **Seasonal/Event-Based**: Holiday-themed bundles, weather-appropriate additions
- **Lifecycle-Based**: Products needed at different stages of product life (e.g., filters, refills, accessories)

**Experience-Based Triggers**:
- **Post-Review Request**: After positive review/comment, suggest premium version or bundle
- **Post-Registration**: Offer extended warranty or protection plan at registration confirmation
- **Post-Service Interaction**: After customer service contact, suggest preventive maintenance products
- **Loyalty Milestone**: After reaching points threshold, suggest aspirational redemption options

### Care, Maintenance & Lifecycle Guidance

**Product Care Instructions**:
- **Clear, Visual Guidance**: Icons, short videos, step-by-step illustrations
- **Frequency-Based**: Daily, weekly, monthly, seasonal maintenance tasks
- **Problem Prevention**: Early warning signs, troubleshooting common issues
- **Lifespan Maximization**: Proper storage, usage tips to extend product life
- **End-of-Life Guidance**: Recycling instructions, donation options, trade-in programs

**Proactive Maintenance Sequences**:
- **Usage-Based Reminders**: After X hours of use, suggest cleaning/maintenance
- **Time-Based Reminders**: Every 3/6/12 months for seasonal products
- **Condition-Based**: Based on wear indicators or performance metrics (where measurable)
- **Preventive Care Kits**: Bundle care products with original purchase or as replenishment option

---

## 3. Data Architecture & Measurement

### Essential Post-Purchase Data Points

**Purchase & Fulfillment Data**:
- Order timestamp, channel, fulfillment method
- Products purchased, quantities, variants
- Payment method, order value, discounts applied
- Shipping destination, carrier, tracking number
- Delivery timestamp, signature confirmation

**Registration & Engagement Data**:
- Product registration timestamp, method chosen
- Warranty activation, protection plan enrollment
- Email/SMS open and click-through rates
- QR code scans, app downloads, website visits
- Customer service contacts, reason for contact

**Experience & Satisfaction Data**:
- Post-purchase survey responses (NPS, CSAT, product-specific questions)
- Review ratings and text (collected via automated requests)
- Social media mentions, user-generated content
- Return/exchange requests, reasons, resolution
- Replenishment purchase timing and products

### Post-Purchase Experience Dashboard

**Activation & Onboarding Metrics**:
- **Registration Rate**: % of purchasers who register product within 30 days
- **First-Use Completion**: % who complete setup/first use within 7 days (where applicable)
- **Early Engagement**: % who open guidance content or visit support resources within 14 days
- **Satisfaction Score**: Post-purchase NPS or CSAT at 7/30 days

**Retention & Loyalty Metrics**:
- **Repeat Purchase Rate**: % who make second purchase within category-specific timeframe
- **Time to Repeat Purchase**: Average days between first and second purchase
- **Customer Lifetime Value (CLV)**: Predicted value based on purchase frequency and average order
- **Loyalty Program Enrollment**: % of purchasers who join loyalty program
- **Points Redemption Rate**: % of loyalty members who redeem points within 6 months

**Advocacy & Referral Metrics**:
- **Review Rate**: % of purchasers who leave a review
- **Review Sentiment**: Average rating and sentiment analysis of reviews
- **Social Shares**: % who share unboxing or product experience on social media
- **Referral Rate**: % who refer friends through formal referral program
- **User-Generated Content**: % who create and share product-related content

### Experience Tracking Framework

**Unboxing Experience Tracking**:
- QR code scans on packaging inserts
- Unique URLs for unboxing guidance videos
- Social media monitoring for unboxing hashtags/mentions
- Customer service inquiries about setup or first use

**Product Registration Effectiveness**:
- Registration conversion rate by channel (QR vs. web vs. SMS)
- Time to registration after purchase
- Demographics and purchase behavior of registrants vs. non-registrants
- Impact of registration incentives on conversion rates

**Cross-Sell Performance**:
- Attachment rate (% of purchases that include suggested complementary product)
- Revenue per customer from cross-sell suggestions
- Conversion rate of post-purchase cross-sell emails/SMS
- ROI of cross-sell marketing efforts

---

## 4. Process Workflows

### Unboxing Experience Design Process

**Phase 1: Research & Strategy (4-6 weeks)**:
1. **Brand Alignment Review**: Brand values, personality, positioning
2. **Customer Journey Mapping**: Current unboxing experience pain points and delights
3. **Competitive Analysis**: Industry best practices, innovative examples
4. **Sustainability Assessment**: Material options, recycling infrastructure, cost implications
5. **Shareability Potential**: Instagram/TikTok trends, unboxing video performance in category

**Phase 2: Design & Prototyping (2-4 weeks)**:
1. **Structural Design**: Box dimensions, opening mechanism, internal layout
2. **Material Selection**: Exterior, interior, inserts, promotional materials
3. **Sequential Reveal Planning**: Order of item discovery, surprise/delight elements
4. **Brand Integration**: Logo placement, color usage, typography, messaging
5. **Prototype Testing**: Physical prototypes with target customers for feedback

**Phase 3: Implementation & Testing (2-3 weeks)**:
1. **Supplier Coordination**: Packaging specifications, quality standards, minimum order quantities
2. **Cost Analysis**: Per-unit cost impact, volume breaks, trade-offs
3. **Pilot Program**: Limited release to gather real-world feedback
4. **Feedback Collection**: Unboxing video reviews, social media monitoring, customer surveys
5. **Iteration & Finalization**: Adjustments based on feedback, final specifications

**Phase 4: Launch & Optimization**:
1. **Rollout Plan**: Phased implementation to manage supply chain impact
2. **Team Training**: Warehouse, fulfillment, customer service on new unboxing elements
3. **Performance Monitoring**: Unboxing-related social mentions, customer feedback, return rates
4. **Continuous Improvement**: Quarterly review of unboxing experience effectiveness

### Product Registration Optimization Process

**Phase 1: Current State Analysis**:
1. **Registration Funnel Audit**: Current methods, conversion rates, drop-off points
2. **Customer Feedback**: Surveys/interviews about registration experience
3. **Competitive Benchmarking**: Industry standards, innovative approaches
4. **Technical Assessment**: Current systems, integration capabilities, data flow

**Phase 2: Incentive Strategy Development**:
1. **Value Proposition Testing**: What registration benefits motivate customers?
2. **Cost-Benefit Analysis**: Incentive cost vs. registration value (lifetime value increase, recall efficiency, etc.)
3. **A/B Testing Framework**: Test different incentives, messaging, friction levels
4. **Legal & Compliance Review**: Warranty terms, data collection permissions, opt-in requirements

**Phase 3: Flow Optimization**:
1. **Channel Selection**: Determine optimal mix of QR, web, SMS, app, IVR
2. **User Experience Design**: Minimal fields, clear progress indication, mobile optimization
3. **Integration Planning**: CRM, warranty system, loyalty program, marketing automation
4. **Communication Strategy**: Registration confirmation, benefit delivery, data usage transparency

**Phase 4: Implementation & Measurement**:
1. **Technical Implementation**: Build/integrate chosen registration methods
2. **Pilot Testing**: Limited SKU or channel rollout with measurement
3. **Launch & Monitoring**: Full rollout with registration rate tracking
4. **Optimization Cycles**: Monthly review of conversion rates, A/B testing of elements

### First-Time Buyer Activation Sequence Design

**Phase 1: Activation Definition**:
1. **Identify Key Behaviors**: Actions that correlate with long-term retention for your product
2. **Set Activation Threshold**: Minimum engagement level that predicts retention
3. **Time-to-Activation Goal**: Target timeframe for achieving activation
4. **Measurement Framework**: How activation will be tracked and measured

**Phase 2: Touchpoint Mapping**:
1. **Purchase Timeline**: Key moments from order to delivery to first use
2. **Channel Assessment**: Which channels (email, SMS, package insert, app) work best at each moment
3. **Message Sequencing**: What information is needed when, avoiding overload
4. **Personalization Opportunities**: Using purchase data to tailor messages

**Phase 3: Content Creation**:
1. **Educational Content**: Setup guides, usage tips, care instructions
2. **Motivational Content**: Brand story, community building, lifestyle inspiration
3. **Promotional Content**: Cross-sell suggestions, loyalty program introduction, replenishment reminders
4. **Format Optimization**: Video vs. text vs. images based on product and customer preferences

**Phase 4: Implementation & Testing**:
1. **Technical Setup**: Email/SMS automation, package insert printing, QR code generation
2. **Pilot Program**: Limited customer rollout with feedback collection
3. **Measurement Implementation**: Track open rates, click-through rates, behavior changes
4. **Optimization**: Refine timing, messaging, and channels based on performance data

### Cross-Sell & Upsell Optimization Process

**Phase 1: Opportunity Identification**:
1. **Purchase Pattern Analysis**: What products are frequently bought together?
2. **Customer Segmentation**: Which segments respond best to which cross-sell suggestions?
3. **Margin Analysis**: Profitability of different cross-sell combinations
4. **Inventory Considerations**: Stock levels, seasonality, promotional calendar alignment

**Phase 2: Trigger Definition**:
1. **Purchase-Based Triggers**: Immediate post-purchase, usage-based, time-based
2. **Experience-Based Triggers**: Post-review, post-registration, post-service interaction
3. **Loyalty-Based Triggers**: Points thresholds, tier achievements, milestones
4. **Seasonal/Event Triggers**: Holidays, weather changes, product lifecycle events

**Phase 3: Offer Development**:
1. **Bundle Creation**: Logical product combinations with clear value proposition
2. **Pricing Strategy**: Discount levels, bundle pricing, mixed margin strategies
3. **Messaging Framework**: Benefit-focused, personalized, low-pressure presentation
4. **Timing Optimization**: When during the customer journey each offer performs best

**Phase 4: Implementation & Measurement**:
1. **Technical Implementation**: Recommendation engines, email/SMS triggers, point-of-sale prompts
2. **A/B Testing Framework**: Test different offers, timing, messaging, channels
3. **Performance Tracking**: Attachment rates, revenue impact, customer satisfaction effects
4. **Continuous Optimization**: Monthly review, seasonal adjustments, new product integration

---

## 5. Retail-Specific Questions & Context Gathering

### Essential Discovery Questions

1. **Product Characteristics**
   - What is your product's typical use frequency and lifespan?
   - Does your product require assembly, installation, or special first-use preparation?
   - Are there consumable components, refills, or accessories needed over time?
   - What are common customer questions or issues after purchase?

2. **Purchase & Fulfillment Process**
   - What percentage of sales come through D2C vs. retail vs. wholesale channels?
   - What is your typical order-to-delivery timeframe?
   - Do you offer gift purchasing/packaging options?
   - What is your current return/exchange process and rate?

3. **Current Post-Purchase Experience**
   - What currently happens after a customer makes a purchase?
   - What post-purchase communications do you currently send?
   - Do you currently include any inserts or guidance in your packaging?
   - What customer service inquiries do you most commonly receive post-purchase?

4. **Data & Measurement Capabilities**
   - What post-purchase data do you currently collect and track?
   - Can you track product registration, email opens, website visits after purchase?
   - Do you have capability to send triggered communications based on purchase timing?
   - What systems would need to be integrated for improved post-purchase tracking?

5. **Goals & Constraints**
   - What are your primary goals for improving post-purchase experience?
   - What is your budget for packaging improvements or technology investments?
   - What are your sustainability requirements or constraints for packaging?
   - What is your timeline for implementing post-purchase experience improvements?

---

## 6. Tool Integrations for Post-Purchase Experience

| Tool Category | Examples | Post-Purchase Use Case |
|--------------|----------|------------------------|
| **Packaging & Fulfillment** | ShipStation, Easyship, ShipBob, Amazon FBA | Packaging automation, insert inclusion, QR code generation |
| **Email/SMS Marketing** | Klaviyo, Omnisend, Mailchimp, PostScript | Triggered post-purchase sequences, SMS notifications |
| **Loyalty & Referral** | Smile.io, LoyaltyLion, ReferralCandy, Yotpo | Loyalty program enrollment, points tracking, referral programs |
| **Product Registration** | WarrantyLife, ProductRegister, Register.com | QR code registration, warranty activation, customer database |
| **Reviews & UGC** | Yotpo, Judge.me, Loox, Trustpilot | Automated review requests, user-generated content collection |
| **Customer Service** | Zendesk, Freshdesk, Gorgias, Help Scout | Post-purchase support, warranty claims, issue resolution |
| **Analytics & Attribution** | Google Analytics, Mixpanel, Amplitude, Segment | Post-purchase behavior tracking, cohort analysis, LTV calculation |
| **QR Code & Mobile** | QR Code Generator, Scanova, Beaconstac | Scannable packaging inserts, product guidance, registration |
| **Returns Management** | Loop Returns, Returnly, Happy Returns | Streamlined return process, exchange options, restocking fees |
| **Subscription & Replenishment** | Recharge, Bold Subscriptions, PayWhirl | Automated replenishment reminders, subscription options |

---

## 7. Related Skills

- **packaging-design** - Owns the package itself (structure, materials, on-pack branding) that this skill's unboxing-journey work happens around
- **onboarding** - For the separate case of activating a genuine app or account portal (loyalty app, subscription-management portal, B2B ordering portal) — distinct from this skill's physical-product post-purchase journey
- **commercial-ops** - Retail financial mechanics including GMROI, sell-through analytics, and promotional yield
- **retention-and-winback** - Replenishment cadence, LTV decay mitigation, win-back sequences for retail
- **trade-and-dealer-enablement** - Retail buyer pitch kits, co-op advertising, dealer incentives programs
- **loyalty** - Points structures, tier benefits, redemption options, program optimization
- **customer-research** - Post-purchase surveys, NPS programs, customer feedback collection
- **emails** - Post-purchase email sequences, transactional messages, promotional triggers
- **sms** - SMS notifications for shipping, delivery, replenishment reminders
- **visual-merchandising** - In-store execution that complements post-purchase experience
- **social** - Encouraging and amplifying user-generated content, unboxing sharing
- **content-strategy** - Educational content, usage tips, inspirational lifestyle content for post-purchase