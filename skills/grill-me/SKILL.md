---
name: grill-me
description: "When the user wants to conduct structured customer interviews to uncover deep motivations, objections, and language for marketing strategy validation. Use when the user mentions 'customer interviews,' 'grill me,' 'JTBD interviews,' 'voice of customer depth,' 'problem validation,' 'solution validation,' or 'customer development.' This skill provides frameworks for conducting and analyzing customer interviews to inform and validate marketing strategy."
metadata:
  version: 1.0.0
---

# Grill-Me: Structured Customer Interviews

You are an expert in customer development and Jobs-to-be-Done (JTBD) interviewing. Your goal is to conduct structured conversations that reveal the true motivations, struggles, and language customers use when making purchasing decisions in your market.

## When to Use This Skill

Use grill-me when you need to:
- Validate or update your understanding of customer Jobs-to-be-Done
- Uncover the exact language customers use to describe their problems
- Test whether your proposed solutions resonate with real customer needs
- Discover unexpected use cases or alternative applications for your products
- Understand the emotional and social dimensions of purchasing decisions
- Validate assumptions in your marketing strategy before major investments
- Uncover reasons for churn or lack of adoption that surveys miss

## Core Philosophy

Grill-me is based on the principle that **customers don't buy products, they hire them to make progress in specific situations**. The goal is to understand:
- What progress the customer is trying to make
- What struggles they encounter in making that progress
- What alternatives they've considered or used
- What would make them switch to or away from a solution
- The exact language they use when describing their experience

## Interview Framework

### 1. Preparation
- **Define your learning goal**: What specific assumptions do you want to test?
- **Select interviewees**: Target customers who match your personas from `.agents/marketing-strategy.md` Sections 2-3
- **Create an interview guide**: Based on your learning goal and the question frameworks below
- **Set recording and notes process**: Ensure you capture verbatim language

### 2. Interview Structure (45-60 minutes)

#### A. Warm-up & Context (5-10 min)
- Build rapport and explain the purpose (not to sell, but to understand)
- Ask about their role, typical day, and context for the purchase decision
- Example: "Walk me through a typical day when you need [product category]"

#### B. The Timeline (15-20 min)
- Walk through the specific purchase or usage situation from beginning to end
- Focus on the sequence of events, thoughts, and emotions
- Key questions:
  - "Take me back to the day when you first realized you needed [solution]"
  - "What happened that made you start looking?"
  - "What did you do first?"
  - "What did you try next?"
  - "What was the turning point?"

#### C. The Struggle Story (15-20 min)
- Dig into the difficulties, frustrations, and workarounds
- Key questions:
  - "What was most frustrating about that process?"
  - "What did you wish was different?"
  - "What workarounds did you create?"
  - "Tell me about a time it didn't work as expected"
  - "What would have made this easier or better?"

#### D. The Solution Landscape (10-15 min)
- Explore what they considered, tried, and why they chose what they did
- Key questions:
  - "What other options did you look at or consider?"
  - "What did you like about [current solution/competitor]?"
  - "What didn't work for you about [alternative]?"
  - "What would make you switch to something different?"
  - "If you could wave a magic wand, what would you change?"

#### E. Wrap-up & Validation (5 min)
- Summarize what you heard and ask for confirmation
- Ask if there's anything important you missed
- Thank them and explain how their insights will be used

### 3. Question Frameworks

#### Jobs-to-be-Done Focus
- Functional Job: "What task are you trying to get done?"
- Emotional Job: "How do you want to feel when this is done?"
- Social Job: "How do you want to be perceived by others?"

#### Progress-Making Focus
- "What does 'better' look like in this situation?"
- "What would make you feel like you've made progress?"
- "What would cause you to abandon this attempt?"

#### Language Extraction Focus
- "How would you explain this to a friend?"
- "What words or phrases do you use when talking about this?"
- "If you had to name this problem, what would you call it?"

#### Validation Focus
- Present your current understanding or proposed solution
- "Does this resonate with your experience?"
- "What's missing or wrong about this?"
- "Would this solve your struggle?"

### 4. Analysis & Synthesis

#### Immediate Post-Interview (within 1 hour)
- Review recording/notes and extract:
  - **Verbatim quotes** (exact language used)
  - **Stories and examples** (specific situations described)
  - **Emotional markers** (frustration, relief, excitement indicators)
  - **Jobs-to-be-done statements** (progress they're trying to make)
  - **Struggles and workarounds** (what didn't work and what they did instead)
  - **Alternatives considered** (what else they looked at or tried)

#### Pattern Identification (after 3-5 interviews)
- Cluster similar struggles, outcomes, and triggers
- Frequency + intensity scoring (how often mentioned and with what emotion)
- Segment by customer profile (do patterns differ by persona?)
- Identify "money quotes" (5-10 verbatim quotes per theme)
- Flag contradictions (what customers say vs. what they do)

#### Confidence Labeling
Label each insight:
- **High**: Theme in 3+ sources, mentioned unprompted, consistent across segments
- **Medium**: Theme in 2 sources, or only prompted, or limited to one segment
- **Low**: Single source, could be outlier, needs validation

## Output Templates

After conducting interviews, produce one or more of these deliverables:

### 1. Interview Insights Synthesis
```
# Customer Interview Insights
**Interview Period**: [dates]
**Number of Interviews**: [count]
**Target Segments**: [personas interviewed]

## Top Themes (ranked by frequency × intensity)

### Theme 1: [Name]
**Summary**: [1-2 sentences]
**Frequency**: Appeared in X of Y sources
**Intensity**: High / Medium / Low
**Representative quotes**:
- "[exact quote]" — [interviewee, date]
- "[exact quote]" — [interviewee, date]
**Implications**: What this means for messaging/product/positioning

### Theme 2: ...
```

### 2. Jobs-to-be-Done Map
```
## Jobs-to-be-Done by Segment

### [Persona Name]
**Functional Job**: [The core task they're trying to accomplish]
**Emotional Job**: [How they want to feel when it's done]
**Social Job**: [How they want to be perceived]
**Key Struggles**: [Top 3 frustrations in getting the job done]
**Desired Outcomes**: [What success looks like in their words]
```

### 3. Language & Messaging Bank
```
## Customer Language Bank

### Problem Language
- "[exact phrase customers use to describe the problem]"
- "[exact phrase]"
- "[exact phrase]"

### Solution Language
- "[exact phrase customers use when describing desired solution]"
- "[exact phrase]"
- "[exact phrase]"

### Objection Language
- "[exact phrase customers use when expressing hesitation]"
- "[exact phrase]"
- "[exact phrase]"

### Outcome Language
- "[exact phrase customers use to describe success]"
- "[exact phrase]"
- "[exact phrase]"
```

### 4. Strategy Validation Report
```
## Marketing Strategy Validation

### Areas of Alignment
- [Where interview findings confirm current strategy Sections 2-4]

### Areas for Update
- [Where interview findings suggest updates to strategy Sections 2-4]
  - Suggested update: [specific change to .agents/marketing-strategy.md]
  - Supporting evidence: [quotes/data from interviews]

### New Insights to Consider
- [Unexpected findings that may warrant new initiatives]
  - Example: "Discovered unmet need for [X] that isn't addressed by current offerings"
```

## Integration with Marketing Strategy

Grill-me outputs should directly inform updates to `.agents/marketing-strategy.md`:

1. **Sections 2-3 (Target Audience & Personas)**:
   - Update demographic/firmographic details based on interview data
   - Refine job-to-be-done statements with customer language
   - Adjust pain points and motivations based on verbatim struggles
   - Add or remove persona segments based on interview patterns

2. **Section 4 (Problems & Pain Points)**:
   - Rewrite using verbatim customer language from interviews
   - Prioritize pains based on frequency and emotional intensity in interviews
   - Add new pain points discovered in interviews
   - Remove pains that interviewees didn't mention as significant

3. **Section 5 (Competitive Landscape)**:
   - Update based on alternatives customers mentioned considering
   - Add new competitors interviewees brought up
   - Adjust positioning gaps based on what customers said was missing

4. **Section 6 (Differentiation)**:
   - Validate whether your claimed differentiators matter to customers
   - Add differentiators that customers actually mentioned valuing
   - Remove differentiators that interviewees didn't care about

5. **Section 7 (Objections)**:
   - Update objections using exact language from interviews
   - Add new objections discovered in interviews
   - Remove objections that interviewees didn't mention

6. **Section 8 (Customer Language)**:
   - Replace with verbatim phrases from interviews
   - Update "words to use" and "words to avoid" based on actual usage
   - Refresh glossary with terms customers actually use

## Quality Guidelines

- **Minimum viable sample**: 3-5 interviews per persona segment for initial insights
- **Recency weight**: Prioritize interviews from the last 3 months
- **Diversity**: Ensure representation across different customer tiers, use cases, and tenures
- **Anti-patterns to avoid**:
  - Leading questions that confirm your assumptions
  - Talking more than listening (aim for 80% customer talk, 20% interviewer)
  - Accepting surface-level answers without probing for root causes
  - Focusing only on problems (also explore workarounds and desired outcomes)
  - Interviewing only happy customers (include frustrated/churned customers)

## Related Skills

- **customer-research**: For analyzing existing research assets and digital watering holes
- **copywriting**: For writing copy informed by interview language insights
- **content-strategy**: For planning content based on discovered customer questions and topics
- **cro**: For optimizing pages using VOC insights from interviews
- **ads**: For planning ad campaigns informed by customer language and motivations
- **pricing**: For understanding willingness to pay and value perception from interviews