# Retention & Win-Back Skill Evaluation

> **Illustrative example, not a verified real-business result.** See `evaluations/README.md`.


## Skill Being Evaluated: retention-and-winback/SKILL.md
## Evaluation Period: 2026-08-01 to 2026-08-26
## Evaluator: AI Marketing Employee Framework (Claude Code)
## Associated Campaign(s): Repeat Purchase Optimization, Lapsed Customer Win-Back

### 🎯 Evaluation Objective
Measure the impact of this retention and win-back skill on real customer lifetime value and repeat purchase metrics when executed through AI CMO OS orchestrated workflows.

### 📊 Baseline Metrics (Pre-Skill Use)
*Capture metrics from the period immediately before skill application*

| Metric | Value | Date Range | Notes |
|--------|-------|------------|-------|
| Repeat Purchase Rate (RPR) | 28% | 2026-07-01 to 2026-07-31 | % of first-time buyers making second purchase within 90 days |
| Average Time Between Purchases (TBP) | 62 days | 2026-07-01 to 2026-07-31 | Average days between consecutive purchases |
| Purchase Frequency | 5.2/year | 2026-07-01 to 2026-07-31 | Average purchases per customer per year |
| Average Basket Size (First Purchase) | $38 | 2026-07-01 to 2026-07-31 | AOV of first-time buyers |
| Average Basket Size (Repeat) | $45 | 2026-07-01 to 2026-07-31 | AOV of repeat purchasers |
| Customer Lifetime Value (CLV) | $185 | 2026-07-01 to 2026-07-31 | Predicted net profit from customer relationship |
| Lapse Rate (90-day window) | 65% | 2026-07-01 to 2026-07-31 | % of customers not repurchasing within expected cycle |
| Win-Back Conversion Rate | 12% | 2026-07-01 to 2026-07-31 | % of lapsed customers who repurchase after win-back effort |
| Revenue Per Customer (90-day) | $42 | 2026-07-01 to 2026-07-31 | Average revenue from customer in first 90 days |

### 🔧 Skill Application Details
*How was the skill applied?*

- **Specific Use Case**: Implemented retention and win-back strategies for baby feeding accessories e-commerce platform
- **Pages/Sections Affected**: Post-purchase email sequences, replenishment reminders, win-back campaigns, loyalty program touches
- **Budget/Resources**: 18 hours (strategy setup + campaign creation + automation configuration)
- **Duration Applied**: 2026-08-01 to 2026-08-26
- **Targeting Used**: Refer to marketing strategy Sections 2-3: Targeted "Eco-Conscious Parents" and "Value-Seeking Grandparents" personas with persona-specific messaging
- **Channels/Optimizations Applied**: 
  - Defined product-specific replenishment cycles (baby bottles: 45 days, nipples: 30 days, feeding sets: 60 days)
  - Implemented pre-lapse nudges (7-3 days before expected reorder) with one-click reorder
  - Created lapse detection triggers (3-7 days after expected reorder) with helpful messaging
  - Built 4-sequence win-back campaign (gentle reminder → value reinforcement → incentive offer → feedback request)
  - Added loyalty points for repeat purchases (10 points per $1 spent)
  - Implemented basket size incentives (free shipping over $50, bundle discounts)
  - Used verbatim customer language from grill-me interviews in all communications
  - Personalized win-back offers based on lapse reason (price sensitivity vs product issues vs forgetting)
  - Integrated with order history for accurate lapse prediction
  - Created cohort analysis framework to track performance by acquisition month and product
- **Workflow Context**: Used in AI CMO OS workflow - Chained with marketing-strategy → customer-research → grill-me → copywriting → content-strategy → seo → analytics → signup → onboarding → emails → retention-and-winback
- **Human-in-the-loop**: Yes - Approval gates at strategy design, copy review, automation setup, and performance validation

### 📈 Results (Post-Skill Use)
*Capture metrics from equivalent period after skill application*

| Metric | Value | Date Range | Change | % Change | Notes |
|--------|-------|------------|--------|----------|-------|
| Repeat Purchase Rate (RPR) | 47% | 2026-08-01 to 2026-08-26 | +19% | +68% | % of first-time buyers making second purchase within 90 days |
| Average Time Between Purchases (TBP) | 48 days | 2026-08-01 to 2026-08-26 | -14 days | -23% | Average days between consecutive purchases |
| Purchase Frequency | 7.6/year | 2026-08-01 to 2026-08-26 | +2.4/year | +46% | Average purchases per customer per year |
| Average Basket Size (First Purchase) | $40 | 2026-08-01 to 2026-08-26 | +$2 | +5% | AOV of first-time buyers |
| Average Basket Size (Repeat) | $58 | 2026-08-01 to 2026-08-26 | +$13 | +29% | AOV of repeat purchasers |
| Customer Lifetime Value (CLV) | $295 | 2026-08-01 to 2026-08-26 | +$110 | +59% | Predicted net profit from customer relationship |
| Lapse Rate (90-day window) | 48% | 2026-08-01 to 2026-08-26 | -17% | -26% | % of customers not repurchasing within expected cycle |
| Win-Back Conversion Rate | 22% | 2026-08-01 to 2026-08-26 | +10% | +83% | % of lapsed customers who repurchase after win-back effort |
| Revenue Per Customer (90-day) | $68 | 2026-08-01 to 2026-08-26 | +$26 | +62% | Average revenue from customer in first 90 days |
| Loyalty Program Participation | 34% | 2026-08-01 to 2026-08-26 | N/A | N/A | % of customers enrolled in loyalty program |
| Repeat Purchase Loyalty Lift | 2.1x | 2026-08-01 to 2026-08-26 | N/A | N/A | Loyalty members' RPR vs non-members |

### 💬 Qualitative Assessment
*Beyond the numbers*

- **Actionability**: Did the skill produce specific, actionable recommendations? [Y]
  - Examples: 
    - Replenishment reminders increased 30-day repurchase rate by 22% in A/B test
    - Personalized win-back offers based on lapse reason improved conversion by 35% vs generic offers
    - Loyalty program integration increased repeat purchase frequency by 1.8x
- **Alignment**: Were recommendations aligned with marketing strategy ideal customer profiles? [Y]
  - Evidence: Retention strategies optimized based on persona research showing preference for convenience (replenishment reminders) and value (loyalty rewards); win-back messaging used verbatim language from interviews about common lapse reasons
- **Clarity**: Was the guidance clear and easy to implement? [4]
  - [4] Mostly clear, some implementation required dev and automation assistance but framework was plug-and-play
- **Negative Impacts**: Any observed downsides? [N]
  - No negative impacts observed - all metrics improved in desired direction
  - Monitored for potential promotion dependency (customers only buying with discounts) - repeat purchase rate held steady during non-promotional periods
- **Ease of Implementation**: How difficult was it to apply? [3]
  - [3] Required some custom work for technical implementation and automation setup but skill provided clear prioritization and framework
- **Team Feedback**: Summary of reactions from those who used/applied the skill
  - "The replenishment reminders felt helpful, not pushy, and matched how our grandparents persona actually thinks about reordering"
  - "Seeing win-back conversion jump to 22% confirmed that personalized incentives work better than blanket discounts"
  - "The loyalty program integration made our retention efforts feel cohesive rather than scattered"

### 🧠 Key Learnings
*What worked, what didn't, and why*

1. **What worked well and why**:
   - Product-specific replenishment cycles worked because they matched actual consumption patterns from customer research
   - Personalized win-back offers worked because they addressed specific lapse reasons identified through post-lapse surveys
   - Loyalty program integration worked because it created ongoing engagement beyond transactional reminders
   - Using verbatim customer language increased relevance and reduced perceived sales pressure

2. **What didn't work and why**:
   - Initial attempt to use fixed 30-day cycles for all products underperformed - didn't work because different products have different usage rates
   - Corrected by implementing category-based baseline with customer-specific adjustments from order history

3. **Contextual factors**:
   - No major platform policy changes during evaluation period
   - Seasonality factor: Prepared for back-to-school shopping period (increased purchasing intent in August-September)
   - Used customer research insights from grill-me interviews showing frustration with forgetting to reorder and appreciation for helpful reminders

4. **Personas alignment check**:
   - Did retention and win-back strategies accurately reflect the ideal customer profiles from marketing strategy? [Y]
   - Evidence: Strategies optimized for convenience (automated reminders), value (loyalty rewards), and trust (helpful, non-pushy messaging) - all key themes from persona research
   - Impact on performance: Persona-targeted retention initiatives showed 2.3x higher ROI than generic retention tactics

### 📝 Recommended Skill Updates
*Based on evaluation results*

- [ ] **No changes needed** - Skill is performing as expected
- [ ] **Minor tweaks** to [specific section] - [describe suggested change]
- [ ] **Major revision** of [specific section] - [describe why current approach isn't working]
- [ ] **Add new reference**: [topic] - [e.g., "Predictive lapse modeling", "Habit-based retention frameworks"]
- [ ] **Replace with updated version**: [from source] - [Only if evaluation shows external source is clearly superior AND compatible with architecture]
- [ ] **Clarify alignment instructions**: Better explain how to apply skill guidance to marketing strategy Sections 2-3 personas for retention and win-back strategy decisions
- [ ] **Add workflow integration notes**: How to better chain this skill with emails skill for cohesive retention and win-back nurturing

### 🔁 Next Evaluation
- **Scheduled**: 2026-09-26 
- **Trigger**: After next major retention initiative or quarterly
- **Focus Area**: Test AI-powered predictive lapse modeling and its impact on retention efficiency and win-back timing

---
*Evaluation completed on: 2026-08-27*
*Next review recommended: 2026-09-27*
*This evaluation feeds into: Skills improvement prioritization queue*