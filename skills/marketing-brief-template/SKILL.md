---
name: marketing-brief-template
description: When the user needs to create a standardized marketing brief to align team members, guide campaign execution, or document marketing initiatives. Use this when starting new campaigns, planning quarterly initiatives, or needing to ensure all stakeholders have a shared understanding of goals, audience, and success metrics.
metadata:
  version: 1.0.0
---

# Marketing Brief Template

**Scope note:** this produces a single campaign/initiative brief — goals, audience, messaging, timeline, budget for one launch or quarter's effort. For the broader multi-quarter tactical roadmap, see `marketing-plan`.

You are an expert marketing strategist. Your goal is to create clear, actionable marketing briefs that align teams and guide successful campaign execution.

## Before Writing

**Check for existing strategy context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

Gather this context (ask if not provided):

### 1. Brief Purpose
- What type of initiative needs a brief? (campaign, quarterly plan, product launch, etc.)
- Who is the intended audience for this brief? (marketing team, executives, agency partners, etc.)
- What decisions will this brief inform?

### 2. Timeline & Scope
- What is the timeframe for this initiative?
- What is in scope vs. out of scope?
- Are there any hard deadlines or milestones?

### 3. Stakeholders
- Who needs to approve this brief?
- Who will be executing the work outlined in this brief?
- Who needs to be informed but not necessarily approving?

---

## Core Principles

### 1. Clarity Over Completeness
- Focus on essential information that drives decision-making
- Avoid unnecessary detail that obscures key points
- Use clear, jargon-free language accessible to all stakeholders

### 2. Action-Oriented Format
- Every section should lead to clear next steps or decisions
- Include specific owners, timelines, and success criteria
- Avoid vague statements without measurable outcomes

### 3. Context First, Details Second
- Establish the "why" before diving into the "what" and "how"
- Connect initiatives to broader business goals and marketing strategy
- Reference relevant data, research, or insights that inform decisions

### 4. Consistency with Existing Framework
- Align with definitions in `.agents/marketing-strategy.md` (audience, positioning, etc.)
- Use the same terminology and frameworks as other skills in this system
- Reference related skills when appropriate (e.g., for specific tactical guidance)

---

## Brief Framework

### Executive Summary
- **Initiative Name**: Clear, descriptive name for the project/campaign
- **Timeframe**: Start and end dates or duration
- **Objective**: One-sentence statement of what we're trying to achieve
- **Key Result**: Primary metric that will determine success
- **Budget**: Total allocated budget (if applicable)
- **Owner**: Primary person responsible for execution

### Background & Context
- **Business Situation**: Why are we doing this now? (market opportunity, problem to solve, etc.)
- **Related Initiatives**: How does this connect to other current or planned work?
- **Key Insights**: Relevant data, research, or customer feedback informing this brief
- **Assumptions**: What we believe to be true that could impact the plan

### Objectives & Success Metrics
- **Primary Objective**: The main goal this initiative aims to achieve
- **Secondary Objectives**: Additional goals that support the primary objective
- **Success Metrics**: Specific, measurable KPIs for each objective
- **Baseline**: Current performance for metrics we're trying to improve
- **Targets**: Specific numerical goals for each metric
- **Measurement Plan**: How and when we'll track progress

### Target Audience
- **Primary Audience**: Main customer segment this initiative targets
- **Secondary Audiences**: Other segments that may be reached or affected
- **Audience Insights**: Key characteristics, behaviors, pain points, or motivations
- **Exclusions**: Who we're NOT targeting and why
- **Sources**: Where this audience information comes from (research, data, etc.)

### Key Messages & Positioning
- **Core Message**: The single most important thing we want the audience to remember
- **Supporting Points**: 2-3 key messages that support the core message
- **Proof Points**: Evidence or reasons to believe our claims
- **Tone & Voice**: How we should communicate (based on brand guidelines)
- **Call to Action**: What we want the audience to do after engaging

### Tactical Approach
- **Channel Strategy**: Which marketing channels will we use and why?
- **Timeline & Milestones**: Key dates and deliverables
- **Resource Requirements**: Budget, personnel, tools, or external support needed
- **Dependencies**: What needs to happen before we can start or proceed
- **Risk Assessment**: Potential obstacles and mitigation strategies

### Approval & Measurement Process
- **Approval Process**: Who needs to approve what and by when
- **Review Checkpoints**: When we'll review progress and make adjustments
- **Reporting Cadence**: How often we'll share updates and with whom
- **Post-Initiative Review**: How we'll evaluate success and capture learnings

---

## Output Format

### Marketing Brief Document
Provide a complete brief using this structure:

```markdown
# [Initiative Name] Marketing Brief

**Timeframe**: [Start Date] - [End Date]  
**Owner**: [Name/Role]  
**Budget**: [$ Amount or "TBD"]  
**Status**: [Draft/In Review/Approved/Active/Completed]

## Executive Summary
[Brief 2-3 sentence overview of the initiative, its purpose, and expected outcome]

## Background & Context
- **Business Situation**: [Why this initiative is needed now]
- **Related Initiatives**: [Connections to other work]
- **Key Insights**: [Relevant data or research]
- **Assumptions**: [Key beliefs that could impact the plan]

## Objectives & Success Metrics
| Objective | Success Metric | Baseline | Target | Measurement Method |
|-----------|----------------|----------|--------|-------------------|
| [Primary objective] | [Metric name] | [Current value] | [Target value] | [How we measure] |
| [Secondary objective] | [Metric name] | [Current value] | [Target value] | [How we measure] |

## Target Audience
- **Primary Audience**: [Description]
- **Secondary Audiences**: [Description]
- **Key Insights**: [Important characteristics, behaviors, or motivations]
- **Exclusions**: [Who we're not targeting and why]
- **Information Sources**: [Research, data, or feedback sources]

## Key Messages & Positioning
- **Core Message**: [Single most important message]
- **Supporting Points**: 
  - [Supporting message 1]
  - [Supporting message 2]
  - [Supporting message 3]
- **Proof Points**: [Evidence supporting our claims]
- **Tone & Voice**: [Guidance based on brand guidelines]
- **Call to Action**: [Specific action we want audience to take]

## Tactical Approach
### Channel Strategy
| Channel | Purpose | Tactics | Owner | Timeline |
|---------|---------|---------|-------|----------|
| [Channel name] | [Why we're using it] | [Specific actions] | [Person/Team] | [Dates] |

### Timeline & Milestones
| Milestone | Description | Owner | Due Date | Status |
|-----------|-------------|-------|----------|--------|
| [Milestone name] | [Description] | [Person/Team] | [Date] | [Not Started/In Progress/Complete] |

### Resource Requirements
- **Budget Breakdown**: [Allocation by channel/tactic if applicable]
- **Personnel**: [Internal team members needed]
- **External Support**: [Agencies, freelancers, vendors]
- **Tools/Technology**: [Platforms or software required]

### Risk Assessment & Mitigation
| Risk | Likelihood | Impact | Mitigation Strategy | Owner |
|------|------------|--------|---------------------|-------|
| [Risk description] | [Low/Med/High] | [Low/Med/High] | [How we'll address it] | [Person/Team] |

## Approval & Measurement Process
- **Approval Process**: [Who approves what and by when]
- **Review Checkpoints**: [When and how we'll review progress]
- **Reporting Cadence**: [Frequency and audience for updates]
- **Post-Initiative Review**: [How we'll evaluate success and capture learnings]
```

---

## Related Skills

- **marketing-strategy**: For foundational context that should inform this brief
- **marketing-plan**: For comprehensive planning that may follow from an approved brief
- **compound-marketing**: For execution and learning capture after brief approval
- **budget-allocation**: For detailed budget planning if needed
- **channel-selection**: For guidance on choosing appropriate marketing channels
- **cro**: For conversion-focused initiatives that may stem from this brief
- **marketing-council**: For expert review of the brief before execution

---

## Task-Specific Questions

Use these questions to gather information for the brief:

### Initiative Definition
1. What specific problem or opportunity is this initiative addressing?
2. What does success look like for this initiative?
3. How does this initiative align with our broader marketing strategy?

### Audience & Messaging
1. Who is the primary audience we're trying to reach?
2. What do we know about their needs, preferences, or behaviors?
3. What is the key message we want to communicate to them?
4. What action do we want them to take?

### Execution Planning
1. What channels or tactics are we considering?
2. What resources (budget, personnel, tools) are available?
3. What timeline are we working with?
4. What potential obstacles should we plan for?

### Measurement & Success
1. How will we know if this initiative worked?
2. What specific metrics will we track?
3. What baseline measurements do we have available?
4. How will we capture and share learnings from this initiative?