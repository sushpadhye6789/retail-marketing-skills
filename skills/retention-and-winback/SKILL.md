---
name: retention-and-winback
version: 2.1.2
description: "When the user wants to improve customer retention, increase repeat purchase rates, optimize replenishment cadence, or implement win-back campaigns. Also use when the user mentions 'retention,' 'repeat purchase,' 'replenishment,' 'LTV,' 'win-back,' 'lapsed customer,' 'customer churn,' or 'basket size.' Use this for anything involving keeping customers coming back and re-engaging lapsed buyers in retail and commerce. For post-purchase experience, see post-purchase-experience. For loyalty programs, see loyalty."
---

# Retail Retention & Win-Back Strategies (v2.1.0)

## Overview
Retail-focused retention and win-back framework — strategies purpose-built for product-based businesses selling through retail channels, direct-to-consumer (D2C), wholesale distribution, and brick-and-mortar storefronts. For a recurring-billing subscription/membership program specifically, see `churn-prevention` alongside this skill.

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

---

## 1. Retail Retention & Win-Back Fundamentals

| Dimension | Retail Retention & Win-Back |
| :--- | :--- |
| **Primary Focus** | Repeat purchase behavior, replenishment triggers, customer lifetime value optimization |
| **Key Metrics** | Repeat purchase rate, time between purchases, basket size growth, customer lifetime value |
| **Intervention Points** | Post-purchase sequences, replenishment reminders, lapse detection, win-back campaigns |
| **Customer Journey Stage** | Post-purchase → active → at-risk → lapsed → win-back |
| **Communication Channels** | Email/SMS, direct mail, loyalty app notifications, package inserts |

**If the business also runs a recurring-billing program** (subscribe-and-save, paid membership), the cancel-flow/dunning/save-offer intervention points for that specific billing relationship are `churn-prevention`'s territory — use both skills together rather than reinventing that half here.

---

## 2. Retail Retention Framework

### Understanding Retail Customer Lifecycle

**Retail Customer States**:
1. **First-Time Buyer** - Made initial purchase, evaluating product and brand
2. **Active Buyer** - Purchasing within expected replenishment cycle
3. **At-Risk Buyer** - Approaching end of expected purchase window without reorder
4. **Lapsed Buyer** - Past expected purchase window, showing decay in engagement
5. **Win-Back Candidate** - Lapsed buyer targeted for re-engagement
6. **Loyal Advocate** - Consistent repeat purchaser, brand advocate, referral source

**Key Retail Metrics**:
- **Repeat Purchase Rate (RPR)**: % of customers who make a second purchase within category-specific timeframe
- **Time Between Purchases (TBP)**: Average days between consecutive purchases
- **Purchase Frequency**: Number of purchases per customer per year
- **Basket Size Growth**: Increase in average order value over customer lifetime
- **Customer Lifetime Value (CLV)**: Predicted net profit from customer relationship over time
- **LTV Decay Rate**: Rate at which predicted future value declines without intervention
- **Win-Back Conversion Rate**: % of lapsed customers who make a purchase after win-back effort

### Retention vs. Win-Back Strategies

**Retention Strategies** (Prevent Lapse):
- Replenishment cadence optimization
- Subscription/replenishment program enrollment
- Loyalty program engagement
- Product education and usage tips
- Community building and brand connection
- Proactive out-of-stock notifications

**Win-Back Strategies** (Re-engage Lapsed):
- Lapse detection and segmentation
- Personalized re-engagement offers
- Product update announcements
- "We miss you" campaigns with incentive
- Feedback collection to understand lapse reasons
- Cross-sell to complementary products

---

## 3. Replenishment Cadence & LTV Decay Mitigation

### Replenishment Cadence Optimization

**Purchase Cycle Analysis**:
1. **Category-Based Baseline**: Typical replenishment interval for product type
   - Consumables (toothpaste, shampoo): 30-45 days
   - Beauty/skincare: 45-60 days
   - Supplements/vitamins: 30 days
   - Pet food: 30-60 days
   - Household cleaning: 60-90 days
   - Apparel/accessories: Seasonal/event-driven
   - Electronics/accessories: 6-12 months (upgrade cycle)
2. **Customer-Specific Patterns**: Actual purchase intervals from historical data
3. **Product Usage Factors**: Consumption rate, household size, usage frequency
4. **Seasonal Variations**: Holiday spikes, weather-dependent usage
5. **Promotional Impact**: Effect of discounts/promotions on purchase timing

**Replenishment Reminder Framework**:
- **Pre-Lapse Nudge** (7-3 days before expected reorder):
  - Friendly reminder: "Time to restock your [Product]?"
  - One-click reorder option
  - Small incentive for timely reorder (loyalty points, free sample)
- **Lapse Detection Trigger** (3-7 days after expected reorder):
  - "We noticed you're due for a refill" with easy reorder path
  - Address common barriers: "Running low? We'll ship it today."
  - Offer assistance: "Need help finding the right product?"
- **Post-Lapse Follow-Up** (7-14 days after expected reorder):
  - "Still thinking about [Product]?" with product benefits reminder
  - Customer service outreach for high-value customers
  - Survey to understand reasons for delay

### LTV Decay Mitigation Strategies

**Understanding LTV Decay**:
LTV decay occurs when predicted future purchases decline due to:
- Natural product consumption completion
- Switching to competitors
- Changing needs or preferences
- Dissatisfaction with product or experience
- Simple forgetfulness or inertia

**Mitigation Tactics**:

1. **Product Education & Usage Optimization**:
   - Usage tips to maximize product life and effectiveness
   - Creative application ideas to increase frequency of use
   - Complementary product suggestions to enhance experience
   - Troubleshooting guides to prevent frustration abandonment

2. **Engagement Sequences**:
   - Brand story and values reinforcement
   - User-generated content showcasing real customer experiences
   - Behind-the-scenes content (manufacturing, sourcing, quality)
   - Interactive content (quizzes, polls, challenges)

3. **Loyalty Program Integration**:
   - Points for repeat purchases (not just first purchase)
   - Tier benefits that increase with purchase frequency
   - Exclusive product access for loyal customers
   - Early access to new products or limited editions

4. **Product Line Expansion**:
   - Complementary products that solve related problems
   - Product variations (scents, flavors, formats) to prevent boredom
   - Bundles and kits that increase basket size
   - Upgrade paths to premium versions

5. **Community & Advocacy Programs**:
   - Referral programs with mutual incentives
   - User-generated content campaigns with rewards
   - Customer advisory boards or feedback panels
   - Exclusive events or experiences for top customers

---

## 4. Win-Back Sequence Framework

### Lapse Detection & Segmentation

**Lapse Definition**:
Define lapse based on product category and purchase patterns:
- **Short-cycle consumables**: Lapsed after 1.5x expected replenishment cycle
- **Medium-cycle products**: Lapsed after 2x expected cycle
- **Long-cycle/durable goods**: Lapsed after purchase window + grace period
- **Seasonal products**: Lapsed after relevant season/pass

**Lapse Segmentation**:
1. **Recent Lapse** (0-30 days past expected): Highest win-back potential
2. **Medium Lapse** (30-90 days past expected): Moderate potential
3. **Long-Term Lapse** (90+ days past expected): Lower potential, requires stronger incentive
4. **High-Value Lapse**: Based on historical CLV, prioritize for win-back
5. **Frequency-Based Lapse**: Based on historical purchase frequency
6. **Reason-Based Lapse** (when known): Price, product issues, competition, etc.

### Win-Back Sequence Design

**Sequence 1: Gentle Reminder (Day 0 of Lapse Detection)**:
- **Subject**: We noticed you're running low on [Product] (or similar)
- **Content**: 
  - Friendly observation about likely need for replenishment
  - Easy reorder link with pre-filled cart
  - Small incentive for timely action (loyalty points, free shipping)
  - Customer service offer for assistance

**Sequence 2: Value Reinforcement (Day 3-4)**:
- **Subject**: How [Product] helps [specific benefit] (or customer testimonial)
- **Content**:
  - Reminder of key benefits and use cases
  - Customer testimonial or review snippet
  - Usage tip or creative application idea
  - Reorder call-to-action

**Sequence 3: Incentive Offer (Day 7-8)**:
- **Subject**: Special welcome-back offer for [Product]
- **Content**:
  - Exclusive discount or bundle for lapsed customers
  - Limited-time urgency ("Offer expires in 7 days")
  - Emphasis on value and savings
  - Easy reorder path

**Sequence 4: Feedback & Final Attempt (Day 12-14)**:
- **Subject**: We'd love to hear your thoughts on [Product]
- **Content**:
  - Brief survey asking why they haven't reordered
  - Options: Price, found alternative, didn't work as expected, no longer needed, other
  - Based on response, offer targeted solution:
    - Price: Special discount or payment plan
    - Product issue: Troubleshooting help or replacement offer
    - Alternative: Comparison highlighting unique benefits
    - No longer needed: Future-oriented product suggestions
  - Final reorder incentive if survey completed

### Win-Back Offer Framework

**Offer Types by Lapse Reason**:
- **Price Sensitivity**: Percentage discount, bundle deal, loyalty points bonus
- **Product Dissatisfaction**: Troubleshooting help, replacement offer, refund + try alternative
- **Competitive Switch**: Unique benefit highlighting, comparison chart, trial size offer
- **Changing Needs**: Product recommendation based on current needs, educational content
- **Simple Forgetfulness**: Reminder + easy reorder, subscription option suggestion
- **No Reason Specified**: General incentive, new product announcement, story-driven email

**Offer Timing & Value**:
- **Early Lapse (0-30 days)**: Smaller incentive (10-15% discount, free shipping)
- **Medium Lapse (30-90 days)**: Moderate incentive (15-25% discount, bonus item)
- **Long-Term Lapse (90+ days)**: Stronger incentive (20-30% discount, bundle deal)
- **High-Value Customers**: Personalized outreach, higher value offers, VIP treatment

---

## 5. Data Architecture & Measurement

### Essential Retention & Win-Back Data Points

**Purchase & Behavior Data**:
- Order timestamp, channel, products purchased, quantities
- Order value, discounts applied, payment method
- Shipping destination, fulfillment speed
- Returns, exchanges, and reasons
- Website browsing behavior, product page views
- Email/SMS engagement (opens, clicks, conversions)
- Loyalty program activity (points earned/redeemed, tier)
- Customer service interactions, satisfaction scores

**Lapse & Win-Back Tracking**:
- Lapse detection date (based on expected replenishment cycle)
- Win-back sequence touchpoints sent and engagement
- Win-back conversion rate by sequence and offer type
- Time to win-back (days from lapse detection to reorder)
- Post-win-back behavior (does customer return to regular pattern?)
- Reason for lapse (when collected via survey or interaction)

### Retention & Win-Back Dashboard

**Retention Health Metrics**:
- **Repeat Purchase Rate (RPR)**: % of first-time buyers who make second purchase
- **Purchase Frequency**: Average purchases per customer per year
- **Time Between Purchases (TBP)**: Trend over customer lifetime
- **Basket Size Growth**: Increase in AOV from first to second/third purchase
- **Customer Lifetime Value (CLV)**: Predictive model accuracy and trends
- **LTV Decay Rate**: Month-over-month decline in predicted future value

**Win-Back Performance Metrics**:
- **Lapse Detection Accuracy**: % of predicted lapses that actually lapse
- **Win-Back Conversion Rate**: % of lapsed customers who make purchase after sequence
- **Sequence-Specific Conversion**: Performance of each touchpoint in sequence
- **Offer Acceptance Rate**: % of presented offers that result in purchase
- **Win-Back Cost Efficiency**: Marketing spend per won-back customer
- **Post-Win-Back Retention**: % of won-back customers who make second purchase

**Cohort Analysis Framework**:
- **Acquisition Cohorts**: By first purchase month/channel
- **Product Cohorts**: By initial product purchased
- **Value Cohorts**: By first purchase amount or predicted CLV
- **Behavioral Cohorts**: By engagement level in first 30 days
- **Lapse Cohorts**: By time to first lapse after purchase

---

## 6. Process Workflows

### Replenishment Cadence Optimization Process

**Phase 1: Baseline Establishment**:
1. **Category Research**: Industry standards for replenishment intervals
2. **Historical Analysis**: Actual purchase intervals from customer data
3. **Segmentation**: Identify different replenishment patterns within customer base
4. **External Factors**: Seasonality, promotions, external events impact

**Phase 2: Reminder System Design**:
1. **Trigger Logic**: Calculate expected reorder date per customer
2. **Message Sequencing**: Pre-lapse nudge, lapse detection, post-lapse follow-up
3. **Channel Selection**: Email/SMS vs. direct mail vs. app notifications
4. **Personalization**: Use product name, usage tips, brand voice
5. **Incentive Strategy**: Determine appropriate incentives for each touchpoint

**Phase 3: Implementation & Testing**:
1. **Technical Setup**: Integrate with order history, build prediction engine
2. **Pilot Program**: Test with subset of customers, measure engagement
3. **A/B Testing**: Test timing, messaging, channels, incentives
4. **Feedback Collection**: Customer surveys on reminder relevance and helpfulness
5. **Optimization**: Refine prediction algorithm and messaging based on results

**Phase 4: Ongoing Management**:
1. **Monthly Review**: Conversion rates, customer feedback, edge cases
2. **Seasonal Adjustments**: Update for holiday patterns, seasonal products
3. **Product Changes**: Adjust for new products, reformulations, discontinuations
4. **Continuous Learning**: Incorporate win-back insights to improve retention

### Win-Back Sequence Implementation Process

**Phase 1: Lapse Definition & Detection**:
1. **Product-Specific Rules**: Define lapse thresholds for each product/SKU
2. **Data Pipeline**: Ensure timely access to purchase history for lapse calculation
3. **Segmentation Engine**: Group lapsed customers by recency, value, frequency
4. **Validation**: Compare predicted lapses with actual behavior to refine model

**Phase 2: Sequence Architecture**:
1. **Touchpoint Mapping**: Define number and timing of sequence emails/SMS
2. **Content Framework**: Value reminder, incentive offer, feedback request
3. **Offer Strategy**: Match offers to lapse reasons and customer segments
4. **Channel Selection**: Email primary, SMS for time-sensitive, direct mail for high-value
5. **Exclusion Rules**: Suppress current customers, recent purchasers, unsubscribed

**Phase 3: Content & Offer Development**:
1. **Email/SMS Copy**: Sequence-specific messaging with brand voice
2. **Offer Design**: Discount levels, bundle options, loyalty points bonuses
3. **Creative Elements**: Images, GIFs, videos where appropriate
4. **Personalization Tokens**: Customer name, product name, purchase history
5. **Landing Pages**: Simple, mobile-optimized reorder or survey pages

**Phase 4: Implementation & Measurement**:
1. **Technical Setup**: Marketing automation integration, trigger configuration
2. **Quality Assurance**: Test all links, personalization, tracking pixels
3. **Pilot Launch**: Limited rollout to validate assumptions and tracking
4. **Full Deployment**: Sequence-wide rollout with control group for measurement
5. **Optimization Cycles**: Monthly review of performance, A/B testing of elements

**Phase 5: Post-Win-Back Analysis**:
1. **Immediate Impact**: Conversion rates, order value, timing
2. **Long-Term Behavior**: Does won-back customer return to regular purchase pattern?
3. **Cohort Comparison**: Won-back customers vs. similar lapsed who didn't convert
4. **Feedback Integration**: Use survey responses to improve product and experience
5. **Sequence Refinement**: Adjust timing, offers, messaging based on results

---

## 7. Retail-Specific Questions & Context Gathering

### Essential Discovery Questions

1. **Product & Purchase Patterns**
   - What is your product's typical use frequency and lifespan?
   - Do customers typically repurchase on a regular cycle or as-needed basis?
   - Are there seasonal or event-driven purchase patterns?
   - What is your average time between first and second purchase?

2. **Current Customer Data & Tracking**
   - What purchase history data do you have access to?
   - Can you track individual customer purchase frequency over time?
   - Do you have capability to calculate expected reorder dates per customer?
   - What customer segmentation data do you currently maintain?

3. **Current Retention & Communication Practices**
   - What post-purchase communications do you currently send?
   - Do you have any replenishment reminder or subscription programs?
   - What win-back or re-engagement campaigns do you currently run?
   - How do you currently identify lapsed or at-risk customers?

4. **Loyalty & Engagement Programs**
   - Do you have a loyalty program? How do customers earn and redeem points?
   - What engagement metrics do you track (email opens, website visits, social media)?
   - Do you have customer feedback or review collection systems?
   - What community or advocacy programs do you currently run?

5. **Goals & Constraints**
   - What are your primary goals for improving retention and win-back?
   - What is your budget for marketing automation or technology investments?
   - What are your current email/SMS sending limits or provider constraints?
   - What is your timeline for implementing retention and win-back improvements?

---

## 8. Tool Integrations for Retention & Win-Back

| Tool Category | Examples | Retention/Win-Back Use Case |
|--------------|----------|-----------------------------|
| **Email/SMS Marketing** | [Platform-specific variants available in references/platforms/[platform]/ if applicable] | Automated replenishment sequences, win-back campaigns |
| **Loyalty & Referral** | Smile.io, LoyaltyLion, ReferralCandy, Yotpo | Points for repeat purchases, referral incentives |
| **Predictive Analytics** | Faraday, Peak.ai, Retention Science | Lapse prediction, CLV modeling, product recommendations |
| **Customer Data Platform** | Segment, mParticle, RudderStack | Unified customer view for segmentation and personalization |
| **Reviews & UGC** | Yotpo, Judge.me, Loox, Trustpilot | Social proof for win-back emails, community building |
| **Customer Service** | Zendesk, Freshdesk, Gorgias, Help Scout | Proactive outreach for at-risk customers, feedback collection |
- **Subscription & Replenishment** | Recharge, Bold Subscriptions, PayWhirl | Automated replenishment programs, subscription options |
- **Direct Mail** | Lob, Pirsh, direct mail vendors | Physical win-back campaigns for high-value customers
- **Analytics & Attribution** | Google Analytics, Mixpanel, Amplitude | Cohort analysis, lapse detection validation, ROI measurement
- **QR Code & Mobile** | QR Code Generator, Scanova, Beaconstac | Scannable packaging for easy reorder, loyalty program access
- **Personalization Engines** | Dynamic Yield, Monetate, Nosto | Real-time website personalization based on purchase history
- **Survey & Feedback** | Typeform, SurveyMonkey, Delighted | Post-purchase surveys, lapse reason collection, NPS

---

## 9. Related Skills

- **packaging-design** - Owns the package itself, distinct from this skill's replenishment/win-back focus
- **commercial-ops** - Retail financial mechanics including GMROI, sell-through analytics, and promotional yield
- **post-purchase-experience** - Unboxing experience, product registration, cross-sell triggers, first-time buyer activation
- **trade-and-dealer-enablement** - Retail buyer pitch kits, co-op advertising, dealer incentives programs
- **loyalty** - Points structures, tier benefits, redemption options, program optimization
- **customer-research** - Post-purchase surveys, NPS programs, customer feedback collection, and segmentation/voice-of-customer inputs that target retention/win-back efforts
- **emails** - Post-purchase email sequences, transactional messages, promotional triggers
- **sms** - SMS notifications for shipping, delivery, replenishment reminders
- **visual-merchandising** - In-store execution that complements post-purchase experience
- **social** - Encouraging and amplifying user-generated content, unboxing sharing
- **content-strategy** - Educational content, usage tips, inspirational lifestyle content for post-purchase and retention
- **referrals** - Designing and optimizing customer referral programs