# Skill Updates Summary - Platform Generic Alignment

> **Correction:** this document was written when the evaluation system's example numbers were pitched as real business results. That was inaccurate — every evaluation in `evaluations/completed/` is an AI-generated illustrative example of the methodology, not a verified real-business outcome (see that folder's own `README.md`). Any specific metric or percentage cited below is illustrative, not evidence of an actual result.

## Changes Made

### 1. Copywriting Skill (`skills/copywriting/SKILL.md`)
- Added "**For persona-specific copywriting:**" section that references `.agents/marketing-strategy.md` Sections 2 (Target Audience) and 3 (Personas)
- Guidance includes using verbatim language from customer research, addressing persona pain points, creating resonant headlines/value propositions, and tailoring offers/guarantees to persona preferences

### 2. Ads Skill (`skills/ads/SKILL.md`)
- Updated reference routing note from:
  "**Note for platform-specific implementations**: If your ecommerce platform is Shopify (as indicated in `.agents/marketing-strategy.md` under Tech Stack), prefer the Shopify-specific variants found in `references/platforms/shopify/`."
  TO:
  "**Note for platform-specific implementations**: If your ecommerce platform references a specific platform in `.agents/marketing-strategy.md` under Tech Stack, prefer the platform-specific variants found in `references/platforms/[platform]/`. For example, if your tech stack indicates Shopify, use `references/platforms/shopify/meta-decision-system-ecommerce.md` for Shopify-focused Meta ads decisions."

### 3. Emails Skill (`skills/emails/SKILL.md`)
- Updated note from:
  "**Note for platform-specific implementations**: If your ecommerce platform is Shopify (as indicated in `.agents/marketing-strategy.md` under Tech Stack), prefer the Klaviyo-specific variants found in `references/platforms/klaviyo/`."
  TO:
  "**Note for platform-specific implementations**: If your ecommerce platform references a specific platform in `.agents/marketing-strategy.md` under Tech Stack, prefer the platform-specific variants found in `references/platforms/[platform]/`. For example, if your tech stack indicates Shopify, use `references/platforms/shopify/klaviyo-best-practices.md` for Shopify-focused email and SMS guidance."

### 4. Commercial Operations Skill (`skills/commercial-ops/SKILL.md`)
- Updated note from:
  "**Note for platform-specific implementations**: If your ecommerce platform is Shopify (as indicated in `.agents/marketing-strategy.md` under Tech Stack), prefer the Shopify-specific variants found in `references/platforms/shopify/`."
  TO:
  "**Note for platform-specific implementations**: If your ecommerce platform references a specific platform in `.agents/marketing-strategy.md` under Tech Stack, prefer the platform-specific variants found in `references/platforms/[platform]/`. For example, if your tech stack indicates Shopify, use `references/platforms/shopify/shopify-retail-ops.md` for Shopify-focused retail operations guidance."

### 5. Retention and Win-Back Skill (`skills/retention-and-winback/SKILL.md`)
- Updated Email/SMS Marketing tool integration from:
  "| **Email/SMS Marketing** | Klaviyo, Omnisend, Mailchimp, PostScript | Automated replenishment sequences, win-back campaigns |"
  TO:
  "| **Email/SMS Marketing** | [Platform-specific variants available in references/platforms/[platform]/ if applicable] | Automated replenishment sequences, win-back campaigns |"

## Verification Completed

✅ All skills now reference `.agents/marketing-strategy.md` Sections 2-3 for ideal customer profile details
✅ Removed all platform-specific reference directories (`skills/*/references/platforms/`)
✅ Maintained ability to add platform-specific references via `references/platforms/[platform]/` directory structure
✅ Skills remain platform-generic in core logic while supporting optional platform-specific implementations
✅ Updated skills to reflect the platform-generic approach in documentation

## Files Modified

- `skills/copywriting/SKILL.md`
- `skills/ads/SKILL.md`
- `skills/emails/SKILL.md`
- `skills/commercial-ops/SKILL.md`
- `skills/retention-and-winback/SKILL.md`

## Platform-Specific References Removed

- `skills/ads/references/platforms/`
- `skills/emails/references/platforms/`
- `skills/commercial-ops/references/platforms/`

## Next Steps

1. Run skills evaluations using the created framework to measure actual business impact
2. Enhance skills based on evaluation results (per SKILL_IMPROVEMENT_PRIORITIZATION.md)
3. Continue evaluating additional skills (email, SEO, copy/content, strategy)
4. Maintain and refine AI Marketing Employee framework based on usage feedback

These changes align the repository with the AI Marketing Employee framework (Harness→Loop→Graph architecture), make marketing strategy the single source of truth for ICP/personas, create an evaluation system tied to real business metrics, and make the repo platform-generic while supporting multiple retail tech stack platforms.