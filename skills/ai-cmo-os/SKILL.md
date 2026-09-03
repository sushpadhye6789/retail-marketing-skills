---
name: ai-cmo-os
description: "When the user wants to build an AI Chief Marketing Officer operating system with Claude Code orchestration, isolated secure execution, browser-based supervision, and human-in-the-loop strategic workflows that produce real business metrics. Also use when the user mentions 'AI CMO,' 'marketing operating system,' 'Claude Code orchestrator,' 'isolated server instances,' 'browser-based execution,' 'human-in-the-loop,' 'strategic business metrics,' 'no AI slop,' 'state graph,' 'context boundaries,' or 'marketing supervision UI.' Use this for building a secure, strategic AI-powered marketing operations platform that executes marketing workflows with Claude Code as the orchestrator."
metadata:
  version: 1.1.0
---

# AI Chief Marketing Officer Operating System (v1.1.0)

## Overview
Strategic AI-powered marketing operations platform built on Claude Code that orchestrates marketing workflows through isolated secure execution, browser-based interfaces, and human-in-the-loop approval systems. Focuses on executing strategic workflows that produce real business metrics rather than generating low-quality AI content at scale ("AI slop").

## Core Philosophy

> "Rejects generating low-quality AI content at scale in favor of executing strategic workflows that produce real business metrics."

This OS implements Corey's vision from Magister:
- **Claude Code Orchestrator**: Uses Claude Code as the central orchestration engine (not OpenClaw derivatives)
- **Isolated Server Instances**: Each user operates in secure isolation with zero data crossover
- **Browser-Based Execution**: Terminal-level capabilities delivered through non-technical browser UI
- **Human-in-the-Loop Philosophy**: Strategic workflow approval over automated content generation
- **Real Business Metrics Focus**: Measures and optimizes for actual marketing outcomes (ROI, CAC, LTV, etc.)

## Architecture Overview

```
                  ┌─────────────────────────────────┐
                  │        Claude Code Orchestrator  │
                  │   (AI CMO / Strategic Strategist) │
                  └────────────────┬────────────────┘
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
   [Tier 1: Autonomous Tasks]             [Tier 2: Gated Tasks]
   - Market Analysis                      - Ad Spend Changes
   - Copy Generation                      - Live Publishing
   - SEO Audits                           - Campaign Launches
   - CRO Analysis                         - CRM Email Blasts
   - Schema Generation                    - Code Commits to Prod
              │                                         │
              └────────────────────┬────────────────────┘
                                   │
                                   ▼
                   ┌────────────────────────────────┐
                   │    Isolated Execution Engine   │
                   │    (Secure Docker Containers)  │
                   │    - Zero data crossover       │
                   │    - API key protection        │
                   │    - Resource limits           │
                   └────────────────┬───────────────┘
                                    │
                                    ▼
                   ┌────────────────────────────────┐
                   │ Browser-Based Supervision UI   │
                   │ (Terminal capabilities in browser) │
                   │ - File modifications           │
                   │ - API calls                    │
                   │ - Web searches                 │
                   │ - Agent workflow visualization │
                   └────────────────┬───────────────┘
                                    │
                                    ▼
                   ┌────────────────────────────────┐
                   │    Business Metrics Dashboard  │
                   │    (ROI, CAC, LTV, Conversion) │
                   └────────────────────────────────┘
```

## Detailed Components

### 1. Claude Code Orchestrator (AI CMO)

**Core Orchestration Logic**:
- Reads marketing strategy from `.agents/marketing-strategy.md`
- Classifies incoming requests as Tier 1 (autonomous) or Tier 2 (gated)
- Routes intent to appropriate discrete sub-skills
- Maintains state graph with context boundaries
- Prevents context drift through strict input/output contracts

**Example Orchestration Flow**:
```
User Request: "Optimize our Q4 holiday campaign"
        ↓
[Strategy Agent] - Analyzes current performance vs. goals
        ↓
[Audience Agent] - Refines targeting based on customer data
        ↓
[Copy Agent] - Generates variant ad copy for testing
        ↓
[Design Agent] - Creates visual concepts for A/B testing
        ↓
[Commercial Ops Agent] - Projects GMROI and sell-through impact
        ↓
[Approval Required] - Human reviews strategic recommendation
        ↓
[Execution Agent] - Launches test campaign via approved channels
```

### 2. Isolated Server Instances

**Security Architecture**:
- Each user gets dedicated Docker container/runtime environment
- Zero data crossover between instances
- API keys and credentials stored securely per-instance
- Resource limits (CPU, memory, storage) enforced per instance
- Automatic cleanup and rotation of instances
- Network isolation preventing cross-instance communication

**Implementation**:
```
User Session → Auth → Instance Provisioning → 
              → Secure Env Vars → Claude Code Orchestrator → 
              → Skill Execution → Results → Cleanup
```

### 3. Browser-Based Execution Interface

**Terminal Capabilities in Browser**:
- File system access (read/write within instance)
- API execution (REST, GraphQL, Webhooks)
- Web search and research capabilities
- Agent workflow visualization and monitoring
- Real-time logs and metrics display
- Interactive approval/declination interface

**UI Components**:
```
┌─────────────────────────────────────────────────────────────┐
│ AI CMO BROWSER EXECUTION CONSOLE                            │
├─────────────────────┬─────────────────────┬─────────────────┤
│ ACTIVE WORKFLOWS    │ PENDING APPROVALS   │ SYSTEM STATUS   │
│ (Running/Queued)    │ (Human Review)      │                 │
│ ┌─────────────┐     │ ┌─────────────┐     │ Instance: ISO-7 │
│ │ Market Anal │     │ │ Ad Spend ↑  │     │ Uptime: 99.8%   │
│ │ Copy Gen    │     │ │ Publish IG  │     │ CPU: 23%        │
│ │ SEO Audit   │     │ │ Email Blast │     │ Memory: 45%     │
│ └─────────────┘     │ └─────────────┘     │ Storage: 12%    │
├─────────────────────┴─────────────────────┴─────────────────┤
│ WORKFLOW VISUALIZER                                         │
│ [Strategy] → [Audience] → [Copy] → [Design] → [Approval]    │
│                                                             │
│ [APPROVE] [REJECT] [REQUEST CHANGES] [VIEW LOGS]            │
└─────────────────────────────────────────────────────────────┘
```

### 4. Human-in-the-Loop Strategic Workflows

**Tier Classification System**:

**Tier 1 - Autonomous Tasks** (Execute without approval):
- Market research and competitive analysis
- Copy and content generation (drafts only)
- SEO audits and optimization suggestions
- CRO analysis and test recommendations
- Schema generation and validation
- Data analysis and reporting
- Competitive intelligence gathering
- Trend analysis and forecasting

**Tier 2 - Gated Tasks** (Require human approval):
- Advertising budget modifications (>10% change)
- Live campaign publishing to production
- Major website/deployment changes
- CRM email/SMS blast distributions
- Code commits to production branches
- Financial commitments over threshold
- Brand-affecting strategic decisions
- New channel/experiment launches

**Approval Workflow**:
1. **Workflow Completion** - Tier 1 agents complete analysis
2. **Recommendation Generation** - Clear go/no-go recommendation
3. **Approval Request** - Formatted request with:
   - Executive summary
   - Business impact projection
   - Risk assessment
   - Required resources
   - Success metrics
4. **Human Review** - Stakeholder reviews in browser UI
5. **Decision** - Approve, reject, or request modifications
6. **Execution** - Approved workflows proceed to execution layer

### 5. Business Metrics Focus

**Key Metrics Tracked**:
- **Return on Investment (ROI)** - Revenue generated vs. marketing spend
- **Customer Acquisition Cost (CAC)** - Cost to acquire new paying customer
- **Lifetime Value (LTV)** - Predicted revenue from customer over time
- **Conversion Rates** - Visitor → Lead → Customer → Repeat customer
- **Engagement Metrics** - Time on site, pages per session, bounce rate
- **Brand Metrics** - Awareness, sentiment, share of voice
- **Operational Metrics** - Task completion time, agent utilization, token efficiency

**Anti-AI Slop Measures**:
- **Quality Gates**: Manual review before any public-facing output
- **Metric Validation**: All AI-generated claims tied to measurable outcomes
- **Purpose Alignment**: Every workflow must connect to business objectives
- **Scale Resistance**: Resistance to pressure for high-volume low-value output
- **Human Judgment Priority**: AI assists, humans decide on strategic value

### 6. State Graph & Context Boundaries

**State Object Structure**:
```json
{
  "sessionId": "unique-session-identifier",
  "timestamp": "ISO timestamp",
  "marketingStrategy": { /* loaded from .agents/marketing-strategy.md */ },
  "activeWorkflows": [],
  "completedWorkflows": [],
  "tier1Queue": [],
  "tier2Queue": [],
  "context": {
    "currentCampaign": null,
    "targetAudience": null,
    "budgetAllocation": {},
    "performanceMetrics": {},
    "brandGuidelines": {},
    "complianceConstraints": {}
  },
  "approvals": {
    "pending": [],
    "approved": [],
    "rejected": [],
    "history": []
  },
  "metrics": {
    "roi": 0,
    "cac": 0,
    "ltv": 0,
    "conversionRate": 0,
    "tokensUsed": 0,
    "apiCalls": 0
  }
}
```

**Context Boundary Enforcement**:
- Agents receive only context relevant to their specific task
- No cross-contamination between unrelated workflows
- State snapshots before and after each agent execution
- Automatic rollback on context violation detection
- Audit trail of all context accesses and modifications

### 7. Isolated Execution Engine

**Secure Execution Environment**:
- Docker containers with resource limits (CPU, RAM, disk)
- Minimal base image with only required dependencies
- Read-only file system except for designated work directories
- Network policies restricting outbound/inbound traffic
- Secrets management via environment variables (never in code)
- Automatic scanning for sensitive data in outputs
- Process isolation preventing cross-workflow interference

**Execution Flow**:
```
Workflow Trigger → 
  Context Preparation → 
  Secure Container Spinup → 
  Agent Skill Execution → 
  Output Validation & Sanitization → 
  Result Extraction → 
  Container Teardown → 
  Metrics Recording → 
  State Update
```

### 8. Browser-Based Supervision Interface

**Real-Time Monitoring Dashboard**:
- Active workflow status and progress
- Resource utilization (CPU, memory, tokens, API calls)
- Approval queue with detailed recommendations
- System health and instance status
- Business metrics dashboard (ROI, CAC, LTV trends)
- Workflow visualization and dependency tracking
- Log viewing and search capabilities
- File browser for work directory access
- API call inspector and tester

**Interaction Capabilities**:
- Approve/reject workflow recommendations
- Request additional analysis or modifications
- View and download workflow outputs
- Execute manual interventions when needed
- Scale resources up/down based on demand
- Terminate stuck or problematic workflows
- Access historical workflow data and metrics

### 9. Implementation & Deployment

**Deployment Options**:
1. **Self-Hosted**: Deploy on user's infrastructure (AWS, Azure, GCP, on-prem)
2. **Managed Service**: Hosted instance with per-user isolation
3. **Hybrid**: Core orchestration hosted, execution in user VPC

**Initial Setup**:
```
1. Provision isolated execution environment
2. Install Claude Code orchestrator
3. Configure skill library (retail-marketing-skills)
4. Set up browser supervision interface
5. Configure authentication and access controls
6. Establish monitoring and alerting
7. Create initial marketing strategy template
8. Deploy sample workflows for validation
```

**Ongoing Operations**:
- Regular security updates and patching
- Skill library updates from retail-marketing-skills repo
- Performance optimization based on usage metrics
- Feature additions based on user feedback
- Compliance updates for changing regulations
- Backup and disaster recovery procedures

## 10. Process Workflows

### Strategic Workflow Execution Lifecycle

**Phase 1: Request Intake & Classification**:
1. **Receive Request**: Natural language input via browser UI or API
2. **Context Loading**: Load current marketing strategy and state
3. **Classification**: Determine Tier 1 (autonomous) vs Tier 2 (gated)
4. **Validation**: Check prerequisites and resource availability
5. **Workflow Design**: Determine optimal agent sequence and dependencies

**Phase 2: Orchestration & Agent Execution**:
1. **Agent Selection**: Choose appropriate skills for each workflow step
2. **State Preparation**: Prepare isolated context for each agent
3. **Execution**: Run agents in secure isolated instances
4. **Output Capture**: Validate and sanitize all agent outputs
5. **State Updates**: Update workflow state with execution results
6. **Progress Tracking**: Update supervision interface in real-time

**Phase 3: Quality Gates & Review**:
1. **Automated Validation**: Check outputs for compliance, quality, relevance
2. **Tier 1 Completion**: Store results for potential Tier 2 use
3. **Tier 2 Preparation**: Format approval request with:
   - Executive summary
   - Detailed recommendations
   - Business impact projections
   - Risk assessments
   - Required resources and timelines
4. **Human Review**: Present request in browser supervision UI
5. **Decision Handling**: Process approval, rejection, or modification requests

**Phase 4: Strategic Execution & Measurement**:
1. **Approved Workflow Execution**: Route to appropriate execution channels
2. **Performance Monitoring**: Track real-time metrics and KPIs
3. **Business Impact Measurement**: Measure actual vs. projected outcomes
4. **Learning Extraction**: Identify patterns for workflow optimization
5. **State Finalization**: Update marketing strategy with learnings
6. **Reporting**: Generate performance reports for stakeholders

**Phase 5: Continuous Improvement**:
1. **Workflow Optimization**: Refine based on performance data
2. **Skill Enhancement**: Update agents based on execution feedback
3. **Interface Refinement**: Improve supervision UI based on usage
4. **Security Hardening**: Address any identified vulnerabilities
5. **Feature Expansion**: Add new capabilities based on strategic needs

## 11. Retail-Specific Questions & Context Gathering

### Essential Discovery Questions

1. **Marketing Strategy & Governance**:
   - What is your current documented marketing strategy?
   - Who are the stakeholders involved in marketing decisions?
   - What is your approval process for marketing activities and spend?
   - What marketing metrics do you currently track and optimize for?

2. **Security & Compliance Requirements**:
   - What are your data security and compliance requirements?
   - What data residency or sovereignty constraints apply?
   - What certifications or audits do you need (SOC 2, ISO 27001, etc.)?
   - What data protection regulations apply (GDPR, CCPA, etc.)?
   - What API keys and credentials need protection?

3. **Current Tooling & Automation**:
   - What marketing tools and platforms do you currently use?
   - What manual processes consume the most marketing team time?
   - What existing automation or workflow systems do you have?
   - What integration capabilities do your current tools have?

4. **Team Structure & Capabilities**:
   - What is your marketing team structure and skill distribution?
   - What level of technical expertise does your team have?
   - What training or change management will be needed?
   - What are your resource constraints (budget, personnel, time)?

5. **Strategic Goals for AI CMO OS**:
   - What specific marketing outcomes do you want to improve?
   - What is your timeline for implementing and adopting the OS?
   - What resources can you allocate to deployment and training?
   - What are your must-have features vs. nice-to-haves for v1.0?
   - How will you measure success and ROI of the OS implementation?

## 12. Tool Integrations for AI CMO OS

| Tool Category | Examples | AI CMO OS Use Case |
|--------------|----------|-------------------|
| **Orchestration Engine** | Claude Code (core) | Central workflow orchestration and agent routing |
| **Execution Environment** | Docker, Kubernetes, containerd | Isolated secure execution instances |
| **Browser Interface** | React/Vue/Angular, WebSockets | Supervision UI and terminal capabilities in browser |
| **Authentication** | OAuth 2.0, OpenID Connect, SAML | Secure user authentication and session management |
| **Secrets Management** | HashiCorp Vault, AWS Secrets Manager | Secure storage of API keys and credentials |
| **Monitoring & Logging** | Prometheus, Grafana, ELK Stack | Performance monitoring, error tracking, audit logging |
| **Advertising Platforms** | Meta Ads API, TikTok API, Google Ads API | Tier 2 gated ad campaign creation and optimization |
| **Email/SMS Marketing** | Klaviyo, Mailchimp, PostScript, Braze | Automated campaign execution and segmentation |
| **Ecommerce Platforms** | Shopify, WooCommerce, Magento, BigCommerce | Product updates, inventory, order processing |
| **Analytics & Attribution** | GA4, Adobe Analytics, Mixpanel, Segment | Performance tracking, audience insights, ROI measurement |
| **Social Media** | Twitter API, LinkedIn API, Reddit API | Content scheduling, engagement, community management |
| **SEO & Content Tools** | SEMrush, Ahrefs, Google Search Console | Keyword research, technical audits, content optimization |
| **Design & Creative** | Canva API, Adobe Creative Cloud SDK | Asset generation, template creation, brand compliance |
| **Customer Data** | CDPs, CRM APIs, Data Warehouses | Unified customer view for personalization/targeting |
| **Project Management** | Asana, Jira, Notion APIs | Task tracking, dependency management, reporting |
| **Communication** | Slack, Discord, Microsoft Teams, Email | Team alerts, approval notifications, status updates |
| **File Storage** | AWS S3, Google Cloud Storage, Azure Blob | Secure storage of workflow outputs and assets |
| **Web Search & Research** | Google API, Bing API, SerpApi | Research capabilities for market and competitive analysis |
| **Compliance & Validation** | Various regulatory APIs | Automated compliance checking for marketing activities |

## 13. Related Skills

- **marketing-strategy** - Foundational positioning and context that the AI CMO reads and executes against (Section 16 for B2B/wholesale)
- **marketing-plan** - Tactical execution plan that informs AI CMO prioritization and resource allocation
- **commercial-ops** - Retail financial metrics (GMROI, sell-through) that AI CMO optimizes toward real business impact
- **post-purchase-experience** - Post-purchase touchpoints that AI CMO manages to improve retention and LTV
- **retention-and-winback** - Retention strategies that AI CMO executes to increase repeat purchase rates
- **trade-and-dealer-enablement** - Channel enablement that AI CMO orchestrates for wholesale/distributor success
- **ai-seo** - AI search optimization that AI CMO implements to improve visibility in AI-generated answers
- **cold-email** - Outreach sequences that AI CMO generates and personalizes for wholesale/retail buyer acquisition
- **sales-enablement** - Sales collateral that AI CMO creates and distributes to enable channel partners
- **content-strategy** - Content planning that AI CMO develops to support campaigns and SEO
- **copywriting** - Copy generation that AI CMO automates for ads, emails, landing pages, and social
- **analytics** - Performance measurement that AI CMO tracks to measure campaign effectiveness and ROI
- **emails** - Email campaigns that AI CMO automates and optimizes for conversion and retention
- **sms-marketing** - SMS campaigns that AI CMO manages for time-sensitive offers and alerts
- **social** - Social media management that AI CMO schedules and monitors for engagement and brand building
- **video** - Video content creation that AI CMO coordinates for ads, organic content, and testimonials
- **image** - Image generation and processing that AI CMO automates for ad creatives and product images
- **schema** - Structured data implementation that AI CMO generates and validates for rich snippets and AI understanding
- **loyalty-programs** - Loyalty initiatives that AI CMO designs and tracks to increase customer retention and LTV
- **customer-research** - Research initiatives that AI CMO commissions and synthesizes for strategy and targeting
- **experiential-marketing** - Events and experiences that AI CMO helps plan and execute for brand engagement
- **influencer-marketing** - Influencer campaigns that AI CMO identifies and manages for authentic reach
- **affiliate-marketing** - Affiliate programs that AI CMO optimizes and tracks for performance-based partnerships
- **referrals** - Referral programs that AI CMO designs and monitors for word-of-mouth and viral growth
- **compliance** - Regulatory compliance that AI CMO ensures and documents to prevent legal and reputational risk

## 14. Implementation Roadmap

### Phase 1: Foundation & Security (Weeks 1-2)
1. **Isolated Environment Setup**:
   - Provision secure Docker/Kubernetes infrastructure
   - Implement network isolation and resource limits
   - Set up secrets management for API keys and credentials
   - Configure authentication and access control systems

2. **Core Orchestration Engine**:
   - Install and configure Claude Code orchestrator
   - Load retail-marketing-skills skill library
   - Implement state management and context boundaries
   - Build basic workflow classification and routing

3. **Browser Supervision Interface**:
   - Develop WebSocket-connected supervision UI
   - Implement file system, API, and search capabilities
   - Create workflow visualization and monitoring components
   - Build approval/rejection interface with detailed views

### Phase 2: Strategic Workflows & Metrics (Weeks 3-4)
1. **Tier 1/2 Classification System**:
   - Define autonomous vs. gated task criteria
   - Implement workflow routing based on classification
   - Build approval request generation and tracking
   - Create metrics collection and reporting systems

2. **Strategic Workflow Templates**:
   - Market analysis and competitive intelligence workflows
   - Copy generation and testing workflows
   - SEO audit and optimization workflows
   - CRO analysis and experimentation workflows
   - Financial projection and ROI analysis workflows

3. **Business Metrics Dashboard**:
   - ROI, CAC, LTC, and conversion rate tracking
   - Campaign performance and pacing vs. goals
   - Channel effectiveness and attribution modeling
   - Brand health and sentiment tracking
   - Operational efficiency and resource utilization metrics

### Phase 3: External Integrations & Execution (Weeks 5-6)
1. **Execution Engine Adapters**:
   - Meta Ads API integration for ad campaign management
   - TikTok API integration for video ad creation and optimization
   - Google Ads API integration for search, shopping, display
   - Klaviyo/Mailchimp integration for email/SMS campaign execution
   - Shopify/WooCommerce integration for ecommerce operations
   - Google Analytics 4 integration for performance tracking
   - Social media APIs for content scheduling and engagement

2. **Security Hardening**:
   - Penetration testing and vulnerability assessment
   - Audit logging and compliance reporting implementation
   - Data protection and privacy control implementation
   - Backup and disaster recovery procedures
   - Regular security update and patching schedules

### Phase 4: Optimization & Launch (Weeks 7-8)
1. **Performance Optimization**:
   - Resource utilization optimization based on usage data
   - Caching layer implementation for frequent operations
   - Batch processing where appropriate for efficiency
   - Workflow optimization based on execution metrics

2. **User Training & Adoption**:
   - Comprehensive training materials and documentation
   - Hands-on workshops for marketing teams
   - Role-based training for different user types (analysts, managers, executives)
   - Change management and adoption support programs
   - Feedback collection and iteration based on user experience

3. **Go-Live & Support**:
   - Production deployment with monitoring and alerting
   - Hypercare support period for issue resolution
   - Performance optimization based on real-world usage
   - Regular business reviews and strategic alignment sessions
   - Continuous improvement based on feedback and metrics

## 15. Success Metrics & ROI Measurement

### Quantitative Business Metrics
- **Marketing ROI Improvement**: % increase in return on marketing investment
- **CAC Reduction**: % decrease in customer acquisition cost
- **LTV Increase**: % increase in customer lifetime value
- **Conversion Rate Improvement**: % improvement in key conversion funnels
- **Campaign Velocity**: % increase in campaigns launched per month
- **Time Savings**: Hours saved per week on manual marketing tasks
- **Error Reduction**: % decrease in marketing execution errors
- **Scalability Improvement**: Increase in marketing output without proportional resource increase

### Qualitative Success Indicators
- **Strategic Alignment**: Degree to which marketing executes against strategy
- **Team Satisfaction**: Marketing team feedback on tool usability and effectiveness
- **Decision Quality**: Improvement in marketing decision-making based on data
- **Innovation Rate**: Increase in new marketing experiments and initiatives
- **Brand Consistency**: Improvement in brand messaging and execution consistency
- **Agility Improvement**: Ability to respond quickly to market changes and opportunities

### Anti-AI Slop Validation
- **Output Quality Score**: Manual review score of AI-generated outputs (1-10 scale)
- **Metric Attribution Rate**: % of AI-generated claims tied to measurable outcomes
- **Human Override Rate**: % of AI suggestions modified or rejected by human reviewers
- **Strategic Relevance Score**: % of AI outputs directly contributing to business objectives
- **Volume vs. Value Ratio**: Ratio of high-value strategic outputs to low-volume tactical outputs

---

**The AI CMO OS delivers Claude Code-powered strategic marketing operations that execute real workflows producing measurable business outcomes, rejecting the temptation of AI-generated content at scale in favor of human-guided strategic excellence.**

**This implementation aligns with Corey's vision from Magister: Claude Code as orchestrator, isolated secure execution, browser-based supervision, and human-in-the-loop focus on real business metrics over AI slop.**