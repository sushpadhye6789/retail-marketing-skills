# Team Onboarding Guide: AI Marketing Employee Framework

## Overview
This guide explains how your client-side marketing team can use the retail-marketing-skills repository to execute strategic workflows that drive real business metrics through the AI CMO OS (Chief Marketing Officer Operating System).

## Core Architecture: AI CMO OS
The repository implements a three-layer architecture:

1. **Harness Layer** (Context Injection)
   - Automatically loads relevant context (marketing strategy, customer research) when skills are invoked
   - Eliminates repetitive context-setting in prompts
   - Location: `.agents/` directory (marketing-strategy.md is the single source of truth)

2. **Loop Layer** (Deterministic Grader & Verification)
   - Validates outputs against business metrics and quality guards
   - Ensures skills produce actionable, measurable results
   - Implemented through evaluation frameworks (`/evaluations/`)

3. **Graph Layer** (Explicit State Machine Workflows)
   - Defines how skills chain together in strategic sequences
   - Includes human-in-the-loop approval gates
   - Visible in skill descriptions under "Workflow Context"

## Getting Started as a Team Member

### 1. Prerequisites
- Claude Code installed
- Access to this repository
- Optional: if you want to make sure you're always working off the latest committed skills, add a shell alias like `alias claude-fresh='git pull -q && claude'` and use it instead of `claude` directly — a plain freshness check, not a special tool (see `RTK.md` for why this repo isn't building a dedicated hook for it)
- Basic understanding of your role's marketing domain (ads, email, CRO etc.)

### 2. Daily Workflow
When a marketing task arises:

**Step 1: Check for Existing Context**
```bash
# Always verify marketing strategy exists first
ls .agents/marketing-strategy.md
```
If missing, run the marketing-strategy skill to create/update it.

**Step 2: Invoke the Relevant Skill**
Use Claude Code naturally:
```bash
# Example: Creating ad copy for new campaign
ads "Create Google Search ads for Fall Collection targeting eco-conscious parents"
```
The skill will:
- Automatically read `.agents/marketing-strategy.md` Sections 2-3 for ICP details
- Ask only for uncovered information
- Produce output aligned with strategy

**Step 3: Follow Approval Gates**
Skills in orchestrated workflows include mandatory human review points:
- Strategy validation (before creative work)
- Creative/copy approval (before launch)
- Performance review (after execution)

**Step 4: Measure & Evaluate**
After skill application:
1. Capture baseline metrics (if not already done)
2. Apply skill in real workflow
3. Measure results using skill-specific evaluation templates
4. Complete evaluation in `/evaluations/` directory
5. Submit for skill improvement prioritization

### 3. Skill Chaining Examples
Common workflows your team will use:

**Customer Acquisition Flow:**
```
customer-research → copywriting → ads → cro → analytics
```
*Use when launching new paid campaigns*

**Retention & Lifecycle Flow:**
```
email → sms → copy/content → cro → analytics
```
*Use for post-purchase nurture and win-back sequences*

**Retail Operations Flow:**
```
marketing-strategy → demand-forecasting → commercial-ops → retention-and-winback
```
*Use for inventory planning and sell-through optimization*

### 4. Where to Find Key Resources
- **Single Source of Truth**: `.agents/marketing-strategy.md` (ICP, personas, value prop)
- **Skill Documentation**: `/skills/[skill-name]/SKILL.md` (each with usage guidelines)
- **Evaluation Framework**: `/evaluations/framework.md` (how to measure impact)
- **Platform References**: `/skills/[skill-name]/references/` (platform-specific guides)
- **Tool Integrations**: `/tools/REGISTRY.md` (how to connect to ESPs, ad platforms etc.)

### 5. Team Collaboration Practices
- **Strategy First**: Never execute tactics without consulting current marketing strategy
- **Evaluation Discipline**: Complete evaluations after significant skill use
- **Knowledge Sharing**: Post learnings to `/learnings/` directory (create if missing)
- **Version Control**: Treat skill updates like code - PRs for changes, main branch for stable versions
- **Cross-Skill Consistency**: Audit outputs against strategy regularly (use strategy skill for this)

### 6. Customizing for Your Ecommerce Platform
The skills are platform-agnostic but include platform-specific references:

1. **Identify Your Platform**: Note your primary ecommerce platform (Shopify, Magento, WooCommerce etc.)
2. **Check Skill References**: Look in `/skills/[skill-name]/references/` for platform guides
3. **Create Platform Variants** (if needed):
   ```bash
   # Example for Shopify-specific ads guidance
   mkdir -p skills/ads/platforms/shopify
   cp skills/ads/references/meta-decision-system.md skills/ads/platforms/shopify/
   # Edit to add Shopify-specific implementations
   ```
4. **Update Skill Documentation**: Reference platform variants in SKILL.md under "Tool Integrations"

### 7. Troubleshooting
- **Missing Context**: If skill asks for ICP details, verify `.agents/marketing-strategy.md` exists and is current
- **Missing skills after a teammate's update**: run `git pull` — see `RTK.md` for why this repo relies on a plain `git pull` here rather than a dedicated freshness tool
- **Workflow Confusion**: Reference skill descriptions' "Workflow Context" section
- **Evaluation Questions**: Consult `/evaluations/framework.md` or ask in team sync

## Connecting to ads2ai.com/agency Model (Adapted for Client-Side)
While ads2ai.com/agency describes an agency service model, your client-side team can adapt its core principles:

| ads2ai Concept | Client-Side Adaptation |
|----------------|------------------------|
| Harness→Loop→Graph Architecture | Exact implementation in this repo |
| Client-Facing Deliverables | Internal Stakeholder Outputs (campaign briefs, performance reports) |
| Agency-Side Execution | Team-Side Execution via Skills |
| Campaign Management | Marketing Plan Execution (see below) |
| Performance Reporting | Automated Evaluation + Manual Review |

**Key Difference**: Instead of billing clients for hours, your team measures and optimizes for real business metrics (ROAS, GMROI, LTV etc.) through the evaluation system.

## Marketing Plan vs Marketing Strategy: How They Connect

### Marketing Strategy (`.agents/marketing-strategy.md`)
- **What**: Foundational, enduring document defining:
  - Target audience & personas (Sections 2-3)
  - Value proposition & differentiation
  - Brand voice & proof points
  - Core objections & switching dynamics
- **Time Horizon**: Quarterly/semi-annual (updated when market shifts)
- **Audience**: Entire marketing organization + product/sales/leadership
- **Purpose**: Single source of truth for all tactical decisions

### Marketing Plan (`/marketing-plans/` directory)
- **What**: Tactical execution document derived from strategy:
  - Specific campaigns & initiatives
  - Channel allocation & budget splits
  - Timelines & launch dates
  - KPI targets & measurement plans
  - Resource requirements & ownership
- **Time Horizon**: Tactical (monthly/quarterly campaigns)
- **Audience**: Marketing execution team + channel owners
- **Purpose**: Actionable roadmap for achieving strategy goals

### Connection Flow:
```
Marketing Strategy 
    ↓ (provides ICP, positioning, brand guardrails)
Marketing Plan 
    ↓ (executes via chained skills)
Skill Workflows (ads → email → cro etc.) 
    ↓ (measured via)
Real Business Metrics (ROAS, GMROI, LTV etc.)
    ↓ (feeds into)
Strategy Updates (when metrics show market shifts)
```

**Example**: 
- Strategy says: "Target Eco-Conscious Parents persona with premium organic positioning"
- Marketing Plan specifies: "Launch Fall Collection Google Shopping campaign (Oct 1-31), $15K budget, targeting Sections 3.2 persona"
- Skills execute: ads creates campaign → email handles post-purchase → cro optimizes landing page
- Evaluation shows: 2.3x ROAS for persona-targeted vs 1.4x for broad targeting
- Strategy updates: Increase budget allocation to eco-conscious parent segment next quarter

## Next Steps for Your Team
1. **Kickoff Session**: Review current `.agents/marketing-strategy.md` together
2. **Platform Mapping**: Identify which ecommerce platform references to use in each skill
3. **First Evaluation Cycle**: Pick one skill (ads or email recommended) and run evaluation
4. **Workflow Adoption**: Start with one chained workflow (e.g., customer acquisition flow)
5. **Metrics Dashboard**: Create simple tracking of evaluated skill impacts over time

---
*Onboard your team to think in metrics, not activities. Every skill use should connect to a business outcome measured through the evaluation system.*