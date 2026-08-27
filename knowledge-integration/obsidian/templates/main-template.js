/*
 * Main Templater Template for Retail Marketing Knowledge Integration
 *
 * This file contains template functions that can be used with the Templater plugin
 * to automate the creation of various knowledge notes.
 */

/**
 * Daily Note Template
 * @returns {string} The daily note template content
 */
function dailyNote() {
    return `---
date: {{date}}
tags: [daily, routine]
---

# {{date}} Daily Marketing Knowledge

## Morning Routine (15 min)
- [ ] Review .agents/marketing-strategy.md for updates
- [ ] Check marketing-learnings.md for recent wins/losses
- [ ] Capture today's focus:
  - Strategy insights gained yesterday:
  - Questions for research today:
  - Hypotheses to test:

## Work Session
### Skills Applied Today
- [[]] - Brief notes on application and initial insights
- [[]] - Brief notes on application and initial insights

### Immediate Insights Captured
- [[]] - [Brief description]
- [[]] - [Brief description]
- [[]] - [Brief description]

## Evening Routine (10 min)
- [ ] Review what was learned today
- [ ] Create permanent notes from fleeting insights:
  - [[]] - [Link to fleeting note]
- [ ] Update task lists and priorities:
  - Tomorrow's top 3 priorities:
  - Blockers to address:

## Knowledge Integration Actions
- [ ] Updated marketing strategy based on today's learnings
- [ ] Added customer insights to knowledge base
- [ ] Linked related concepts in knowledge graph
- [ ] Flagged items for weekly review

---
*Tags: #daily #knowledge-integration #marketing*`;
}

/**
 * Skill Application Template
 * @param {Object} args - Arguments for template customization
 * @returns {string} The skill application template content
 */
function skillApplication(args) {
    const skillName = args.skillName || "Skill Name";
    const skillType = args.skillType || "skill-type";
    const relatedPersona = args.relatedPersona || "Related Persona";
    const relatedCampaign = args.relatedCampaign || "Related Campaign";
    const strategySections = args.strategySections || "2-3";

    return `---
date: {{date}}
skill: [[${skillName}]]
tags: [skill-application, ${skillType}]
related_to:
- [[marketing-strategy]]
- [[${relatedPersona}]]
- [[${relatedCampaign}]]
---

# ${skillName} Application - {{date}}

## Context
- **Campaign/Project**: [[]]
- **Target Persona**: [[${relatedPersona}]]
- **Business Objective**: [e.g., Increase conversion rate, reduce CAC, improve retention]
- **Marketing Strategy Reference**: Sections ${strategySections} applied

## Application Details
### How the Skill Was Applied
[Detailed notes on how you executed the skill - specific steps taken, tools used, time invested]

### Specific Sections/Features Used
- [Section/Feature 1]: [How it was applied]
- [Section/Feature 2]: [How it was applied]
- [Section/Feature 3]: [How it was applied]

## Immediate Results & Observations
### Quantitative Metrics (if applicable)
- [Metric 1]: [Value] [Change from baseline if known]
- [Metric 2]: [Value] [Change from baseline if known]
- [Metric 3]: [Value] [Change from baseline if known]

### Qualitative Insights
- **What worked well**: [Observations about effective aspects]
- **What was challenging**: [Difficulties encountered]
- **Unexpected findings**: [Surprising results or discoveries]
- **Customer language extracted**: [Verbatim phrases or insights gathered]

## Knowledge Capture
### Insights to Add to Knowledge Base
- [[]] - [Brief description of insight]
- [[]] - [Brief description]

### Questions for Further Research
- [Question 1]: [Why this matters]
- [Question 2]: [Why this matters]

### Hypotheses Generated
- [Hypothesis 1]: [If we do X, then Y will happen because Z]
- [Hypothesis 2]: [If we do X, then Y will happen because Z]

## Alignment Check
### Persona Alignment
- [Y/N] Were recommendations aligned with marketing strategy ideal customer profiles?
- **Evidence**: [How you verified alignment]

### Strategy Alignment
- [Y/N] Did this application support the current marketing strategy Sections 2-8?
- **Evidence**: [Specific strategy elements supported]

## Next Steps & Follow-up
### Immediate Actions (Next 24-48 hours)
- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] [Action item 3]

### Medium-term Actions (Next 1-2 weeks)
- [ ] [Action item 1]: [Dependent on]
- [ ] [Action item 2]: [Dependent on]

### Metrics to Track
- [Metric 1]: [Target/goal] [Measurement frequency]
- [Metric 2]: [Target/goal] [Measurement frequency]

## Evaluation Preparation
### For Skill Evaluation
- **Resources Invested**: [Time, budget, tools used]
- **Specific Use Case**: [Brief description of application context]
- **Pages/Sections Affected**: [List what was modified or created]
- **Targeting Used**: [How marketing strategy Sections 2-3 were applied]
- **Channels/Optimizations Applied**: [Specific tactics employed]
- **Workflow Context**: [How this fit into larger AI CMO OS workflow]
- **Human-in-the-loop**: [Approval gates or review points]

---
*Tags: #skill-application #${skillType} #knowledge-integration*`;
}

/**
 * Customer Insight Template
 * @param {Object} args - Arguments for template customization
 * @returns {string} The customer insight template content
 */
function customerInsight(args) {
    const sourceType = args.sourceType || "interview";
    const insightType = args.insightType || "general";
    const personaTag = args.personaTag || "persona";
    const confidenceLevel = args.confidenceLevel || "medium";
    const relatedPersona = args.relatedPersona || "Related Persona";
    const relatedSkill = args.relatedSkill || "related-skill";

    return `---
date: {{date}}
source: [[${sourceType}]]
tags: [customer-insight, ${insightType}, ${personaTag}]
related_to:
- [[${relatedPersona}]]
- [[marketing-strategy]]
- [[${relatedSkill}]]
confidence: ${confidence_level}
---

# {{insight_title}} - {{date}}

## Source Details
- **Source Type**: [[${sourceType}]]
- **Source ID**: [e.g., Interview #123, Survey Response 456, Review URL]
- **Date Collected**: {{date}}
- **Collected By**: [Your name or team member]
- **Context**: [Brief description of how this insight was gathered]

## The Insight
> "[Direct quote or paraphrased insight from customer]"

### Raw Data (if applicable)
[Full verbatim quote, survey response, or excerpt from source]

### Insight Summary
[Your interpretation of what this means in 1-2 sentences]

## Categorization
- **Primary Theme**: [e.g., Safety Concerns, Size Anxiety, Gift Purchasing, Sustainability]
- **Secondary Themes**: [List any additional themes]
- **Persona Relevance**: [[${relatedPersona}]] (Primary/Secondary/Tertiary)
- **Journey Stage**: [Awareness/Consideration/Purchase/Retention/Advocacy]
- **Emotional Tone**: [Positive/Negative/Neutral/Mixed]
- **Urgency/Pain Level**: [High/Medium/Low] - How strongly does this impact the customer?

## Connection to Marketing Strategy
### Persona Alignment
- [Y/N] Does this insight align with or contradict current persona definitions in marketing strategy Sections 2-3?
- **Evidence**: [Specific quotes or data points that support/refute current understanding]

### Implications for Strategy
- **Sections 2-3 (Target Audience/Personas)**: [How this affects persona understanding]
- **Sections 4-6 (Problems/Pain Points/Differentiation)**: [New problems identified or validation of existing ones]
- **Sections 7-8 (Goals/Objectives/Tactics)**: [Suggested adjustments to goals or tactics]

## Actionable Recommendations
### Immediate Actions (0-30 days)
- [ ] [Specific action based on insight]
- [ ] [Specific action based on insight]

### Medium-term Actions (30-90 days)
- [ ] [Specific action based on insight]
- [ ] [Specific action based on insight]

### Strategic Considerations (90+ days)
- [ ] [Longer-term implication]
- [ ] [Longer-term implication]

## Validation & Follow-up
### How to Validate This Insight
- [Method 1]: [e.g., Add question to next customer survey, conduct follow-up interviews]
- [Method 2]: [e.g., A/B test specific messaging, analyze behavior data]
- [Method 3]: [e.g., Monitor specific metric, track mentions in social listening]

### Questions for Further Research
- [Question 1]: [Why this matters for understanding]
- [Question 2]: [Why this matters for validation]

### Related Insights
- [[]] - [Brief connection]
- [[]] - [Brief connection]

## Knowledge Integration
- [ ] Added to customer insights database
- [ ] Linked to relevant persona documents
- [ ] Referenced in applicable skill applications
- [ ] Flagged for strategy review if contradicts current understanding

---
*Tags: #customer-insight #${insightType} #${personaTag} #knowledge-integration*`;
}

/**
 * Competitive Insight Template
 * @param {Object} args - Arguments for template customization
 * @returns {string} The competitive insight template content
 */
function competitiveInsight(args) {
    const sourceType = args.sourceType || "website-analysis";
    const insightType = args.insightType || "general";
    const competitorName = args.competitorName || "Competitor Name";
    const competitorTag = args.competitorTag || "competitor";
    const confidenceLevel = args.confidenceLevel || "medium";
    const relatedSkill = args.relatedSkill || "competitor-profiling";

    return `---
date: {{date}}
source: [[${sourceType}]]
tags: [competitive-insight, ${insightType}, ${competitorName}, ${competitorTag}]
related_to:
- [[${competitorName}]]
- [[competitive-analysis]]
- [[marketing-strategy]]
- [[${relatedSkill}]]
confidence: ${confidence_level}
---

# ${competitorName}: {{insight_title}} - {{date}}

## Source Details
- **Source Type**: [[${sourceType}]]
- **Source ID**: [e.g., Website URL, Ad Library ID, Review Platform, News Article URL]
- **Date Collected**: {{date}}
- **Collected By**: [Your name or team member]
- **Context**: [Brief description of how this insight was gathered]
- **Competitor Tier**: [Direct/Aspirational] - Based on your competitive landscape definition

## The Insight
> "[Direct quote, observation, or data point about competitor]"

### Raw Data (if applicable)
[Screenshots, verbatim quotes, data exports, or detailed description of observation]

### Insight Summary
[Your interpretation of what this means for competitive positioning in 1-2 sentences]

## Categorization
- **Primary Dimension**: [e.g., Product/Service, Pricing, Promotion, Place (Distribution), People, Process, Physical Evidence]
- **Secondary Dimensions**: [List any additional dimensions affected]
- **Competitive Area**: [e.g., Messaging, Targeting, Creative, Channel Strategy, Customer Experience, Technology]
- **Relevance to Us**: [High/Medium/Low] - How much could this impact our strategy?

## Connection to Marketing Strategy & Competitive Landscape
### Competitive Positioning
- [Y/N] Does this insight change our understanding of where ${competitorName} stands relative to us?
- **Evidence**: [Specific data points that support/refute current competitive assessment]

### Implications for Our Strategy
- **Sections 2-3 (Target Audience/Personas)**: [Does this reveal new audience segments they're targeting or gaps we could exploit?]
- **Section 5 (Competitive Landscape)**: [How does this change our view of the competitive map?]
- **Section 6 (Differentiation)**: [Does this threaten or reinforce our current differentiators?]
- **Sections 7-8 (Goals/Objectives/Tactics)**: [Suggested tactical or strategic responses]

## SWOT Implications
### Strengths (of Competitor)
- [What they do well based on this insight]

### Weaknesses (of Competitor)
- [Where they appear vulnerable based on this insight]

### Opportunities (for Us)
- [What we could do to exploit gaps or weaknesses]

### Threats (to Us)
- [What we need to defend against or improve upon]

## Actionable Recommendations
### Immediate Actions (0-30 days)
- [ ] [Specific action: e.g., Test counter-messaging, adjust targeting, improve specific feature]
- [ ] [Specific action: e.g., Create battle card for sales team, update FAQ]

### Medium-term Actions (30-90 days)
- [ ] [Specific action: e.g., Develop competitive campaign, enhance specific product feature]
- [ ] [Specific action: e.g., Adjust pricing strategy, revise distribution approach]

### Strategic Considerations (90+ days)
- [ ] [Longer-term implication: e.g., Consider new market segment, evaluate partnership]
- [ ] [Longer-term implication: e.g., Invest in new technology, reconsider positioning]

## Validation & Follow-up
### How to Validate This Insight
- [Method 1]: [e.g., Monitor specific metric, set up Google Alert, conduct mystery shop]
- [Method 2]: [e.g., Analyze their advertising changes, check customer reviews]
- [Method 3]: [e.g., Track social media sentiment, survey target audience]

### Questions for Further Research
- [Question 1]: [Why this matters for competitive understanding]
- [Question 2]: [Why this matters for validation]

### Related Insights
- [[]] - [Brief connection]
- [[]] - [Brief connection]

## Knowledge Integration
- [ ] Added to competitive insights database
- [ ] Linked to competitor profile document
- [ ] Referenced in applicable skill applications (especially competitor-profiling)
- [ ] Flagged for strategy review if changes competitive understanding
- [ ] Updated competitive matrix or gap analysis if applicable

---
*Tags: #competitive-insight #${insightType} #${competitorTag} #knowledge-integration*`;
}

/**
 * Campaign Insight Template
 * @param {Object} args - Arguments for template customization
 * @returns {string} The campaign insight template content
 */
function campaignInsight(args) {
    const campaignType = args.campaignType || "general";
    const performanceTier = args.performanceTier || "met-expectations";
    const confidenceLevel = args.confidenceLevel || "medium";
    const relatedSkill = args.relatedSkill || "related-skill";
    const relatedPersona = args.relatedPersona || "related-persona";
    const strategySections = args.strategySections || "2-3";

    return `---
date: {{date}}
campaign: [[]]
tags: [campaign-insight, ${campaignType}, ${performanceTier}]
related_to:
- [[marketing-strategy]]
- [[${relatedSkill}]]
- [[${relatedPersona}]]
confidence: ${confidence_level}
---

# [[]]: {{insight_title}} - {{date}}

## Campaign Context
- **Campaign Name**: [[]]
- **Campaign Type**: [e.g., Acquisition, Retention, Launch, Seasonal, Promotional]
- **Objective**: [e.g., Increase sales, generate leads, improve engagement]
- **Target Persona**: [[${relatedPersona}]]
- **Channel Mix**: [List channels used]
- **Budget**: [Amount allocated]
- **Duration**: [Start date] to [End date]
- **Marketing Strategy Reference**: Sections ${strategySections} applied

## The Insight
> "[Direct quote, metric, or observation about campaign performance]"

### Raw Data (if applicable)
[Full data export, screenshot, or detailed metric breakdown]

### Insight Summary
[Your interpretation of what this means in 1-2 sentences]

## Categorization
- **Primary Metric Type**: [e.g., Conversion, Engagement, Revenue, Efficiency]
- **Specific Metric**: [e.g., Click-through rate, Cost per acquisition, Return on ad spend]
- **Performance Tier**: [Exceeded expectations/Met expectations/Below expectations]
- **Funnel Stage**: [Awareness/Consideration/Conversion/Retention/Advocacy]
- **Optimization Opportunity**: [High/Medium/Low] - How much room for improvement exists?

## Connection to Marketing Strategy
### Persona Alignment
- [Y/N] Did this campaign effectively reach and resonate with the target persona from marketing strategy Sections 2-3?
- **Evidence**: [Specific metrics or feedback that support/refute alignment]

### Tactical Alignment
- [Y/N] Did the campaign execution align with recommended tactics from marketing strategy Sections 7-8?
- **Evidence**: [Specific elements that did/didn't align]

## Performance Analysis
### Quantitative Results
- [Metric 1]: [Value] [Change from baseline/goal]
- [Metric 2]: [Value] [Change from baseline/goal]
- [Metric 3]: [Value] [Change from baseline/goal]

### Qualitative Feedback
- **Customer Response**: [What customers said or did]
- **Team Observations**: [What team members noticed]
- **Unexpected Results**: [Surprising positive or negative outcomes]
- **Learnings Extracted**: [Specific insights gained]

## Root Cause Analysis (if applicable)
### What Contributed to Success/Failure
- [Factor 1]: [How it impacted performance]
- [Factor 2]: [How it impacted performance]
- [Factor 3]: [How it impacted performance]

### What Was Missing
- [Element 1]: [Why it would have helped]
- [Element 2]: [Why it would have helped]

## Actionable Recommendations
### Immediate Actions (0-30 days)
- [ ] [Specific optimization based on insight]
- [ ] [Specific test to run based on learning]

### Medium-term Actions (30-90 days)
- [ ] [Specific campaign adjustment for next iteration]
- [ ] [Specific process improvement based on learnings]

### Strategic Considerations (90+ days)
- [ ] [Longer-term implication for strategy]
- [ ] [Longer-term implication for resource allocation]

## Validation & Follow-up
### How to Validate This Insight
- [Method 1]: [e.g., Run follow-up test, analyze cohort behavior, survey target audience]
- [Method 2]: [e.g., Monitor specific metric over time, A/B test specific element]
- [Method 3]: [e.g., Compare to similar campaigns, conduct post-mortem]

### Questions for Further Research
- [Question 1]: [Why this matters for future campaigns]
- [Question 2]: [Why this matters for understanding customer behavior]

### Related Insights
- [[]] - [Brief connection]
- [[]] - [Brief connection]

## Knowledge Integration
- [ ] Added to campaign insights database
- [ ] Linked to campaign document in knowledge base
- [ ] Referenced in applicable skill applications
- [ ] Used to inform future campaign planning
- [ ] Updated marketing learnings if reveals broader pattern
- [ ] Flagged for strategy review if challenges current assumptions

---
*Tags: #campaign-insight #${campaignType} #${performanceTier} #knowledge-integration*`;
}

// Export functions for use in Templater
module.exports = {
    dailyNote,
    skillApplication,
    customerInsight,
    competitiveInsight,
    campaignInsight
};