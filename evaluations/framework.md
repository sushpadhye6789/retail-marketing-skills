# Skills Evaluation Framework

This document outlines the systematic approach to evaluating marketing skills based on their ability to drive real business metrics when executed through the AI CMO OS orchestrated workflows.

## Evaluation Philosophy

Aligned with the AI CMO OS core principle: **"Rejects generating low-quality AI content at scale in favor of executing strategic workflows that produce real business metrics."**

Skills are evaluated not on theoretical correctness alone, but on their measurable impact on business outcomes when used within the orchestrated agent workflows.

## Evaluation Components

### 1. **Success Metrics Definition** (Per Skill Type)
Each skill type has specific business metrics it should influence:
- **Ads/CPA Skills**: CTR, Conversion Rate, ROAS, CPL, CAC
- **SEO Skills**: Organic Traffic, Keyword Rankings, CTR from SERPs, Domain Authority
- **Email/SMS Skills**: Open Rate, Click Rate, Conversion Rate, List Growth, Unsubscribe Rate
- **Copy/Content Skills**: Engagement Rate, Time on Page, Bounce Rate, Conversion Lift
- **CRO Skills**: Conversion Rate, A/B Test Win Rate, Funnel Drop-off Reduction
- **Analytics Skills**: Insight Quality, Decision Speed, Metric Accuracy
- **Strategy Skills**: Strategic Alignment, Priority Execution Rate, Goal Achievement
- **Etc.**

### 2. **Evaluation Cadence**
- **Continuous**: Automatic metric tracking for skills in active workflows
- **Weekly**: Quick evaluation of recently used skills
- **Monthly**: Deep dive evaluation of priority skills
- **Quarterly**: Comprehensive skills audit and portfolio review
- **Ad-hoc**: When significant business changes occur or new skills are introduced

### 3. **Evaluation Process**
1. **Baseline Measurement**: Capture pre-skill-use metrics
2. **Skill Application**: Execute skill within orchestrated workflow
3. **Results Measurement**: Capture post-skill-use metrics
4. **Impact Calculation**: Measure delta and statistical significance
5. **Qualitative Assessment**: Gather user feedback and observational notes
6. **Decision Point**: Determine skill retention, enhancement, or replacement
7. **Documentation**: Record learnings for organizational memory

### 4. **Integration with AI CMO OS Architecture**
- **Harness Layer**: Automatically loads evaluation context when needed
- **Loop Layer**: Uses deterministic checks for metric validation and data quality
- **Graph Layer**: Evaluation workflow as a specialized skill chain with approval gates
- **memory.md**: Stores evaluation results, learnings, and skill performance history
- **routines/**: Schedule regular evaluations via markdown templates
- **.github/workflows/**: Automated evaluation reporting and trend analysis

## Evaluation Templates

See the `/evaluations/` directory for skill-type specific templates:
- `ads-skill-eval.md` - For advertising and paid media skills
- `seo-skill-eval.md` - For search engine optimization skills
- `email-skill-eval.md` - For email and SMS marketing skills
- `copy-content-skill-eval.md` - For copywriting and content skills
- `cro-skill-eval.md` - For conversion rate optimization skills
- `strategy-skill-eval.md` - For strategy and planning skills
- `general-skill-eval.md` - For skills not fitting specific categories

## Using the Evaluation System

### For Skill Creators/Maintainers:
1. Select the appropriate template for your skill type
2. Complete baseline measurements before skill use
3. Apply the skill in a real workflow context
4. Measure results and complete the evaluation template
5. Submit findings for review and skill improvement prioritization

### For Skill Consumers (AI Agents/Humans):
1. Look for skill evaluation scores in skill documentation
2. Prioritize skills with higher evaluation scores for critical workflows
3. Provide feedback on skill performance to improve future evaluations
4. Request evaluations for skills you use frequently

## Continuous Improvement Loop

```
Skill Usage → Measurement → Evaluation → Insight → Improvement → Enhanced Skill
    ↖_______________________________________________________________________↙
                           Feedback & Learning
```

This creates a closed-loop system where skills evolve based on actual performance data, ensuring the repository maintains only those skills that demonstrably drive real business metrics when executed through the AI CMO OS orchestrated workflows.