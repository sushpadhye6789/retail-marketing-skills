# Retail & Ecommerce Marketing Skills for AI Agents

A collection of AI agent skills for retail and ecommerce marketing. Built for technical marketers and founders who want AI coding agents to help with conversion optimization, copywriting, SEO, paid ads, retail/dealer marketing, and growth engineering. Works with Claude Code, OpenAI Codex, Cursor, Windsurf, and any agent that supports the [Agent Skills spec](https://agentskills.io).

Maintained by Sush Padhye ([GitHub](https://github.com/sushpadhye6789) · [LinkedIn](https://www.linkedin.com/in/sushpadhye)). This is a fork of [Corey Haines' marketingskills](https://github.com/coreyhaines31/marketingskills), substantially extended with retail/ecommerce-specific skills (POS marketing, retail media, local marketing, trade marketing, visual merchandising, experiential marketing, distribution-model and brand-tier classification, and more) beyond the original SaaS-leaning skill set.

Want help with your marketing, or want to automate it? [Reach out to Sush on LinkedIn](https://www.linkedin.com/in/sushpadhye).

**Contributions welcome!** Found a way to improve a skill or have a new one to add? [Open a PR](#contributing).

Run into a problem or have a question? [Open an issue](https://github.com/sushpadhye6789/retail-marketing-skills/issues).

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and workflows for specific tasks. When you add these to your project, your agent can recognize when you're working on a marketing task and apply the right frameworks and best practices.

## How Skills Work Together

Skills reference each other and build on shared context. The `marketing-strategy` skill is the foundation — every other skill checks it first to understand your product, audience, brand tier, distribution model (ecom-only / own stores / dealers), and strategic priorities before doing anything. From there, skills group loosely into the categories below — conversion, content & copy, SEO, paid media, retail & physical marketing, growth & retention, commercial/monetization, and sales & RevOps — and cross-reference each other directly within and across those groups (e.g. `copywriting` ↔ `cro` ↔ `ab-testing`, `seo-audit` ↔ `schema` ↔ `ai-seo`, `pos-marketing` ↔ `retail-media` ↔ `local-marketing`).

See each skill's **Related Skills** section for the full dependency map, and [Skill Categories](#skill-categories) below for the complete grouping.

## Available Skills

<!-- SKILLS:START -->
| Skill | Description |
|-------|-------------|
| [ab-testing](skills/ab-testing/) | When the user wants to plan, design, or implement an A/B test or experiment, or build a growth experimentation program.... |
| [ad-creative](skills/ad-creative/) | When the user wants to generate, iterate, or scale ad creative — headlines, descriptions, primary text, or full ad... |
| [ads](skills/ads/) | When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X,... |
| [ai-seo](skills/ai-seo/) | When the user wants to optimize content for AI search engines, get cited by LLMs, or appear in AI-generated answers.... |
| [analytics](skills/analytics/) | When the user wants to set up, improve, or audit analytics tracking and measurement. Also use when the user mentions... |
| [aso](skills/aso/) | When the user wants to audit or optimize an App Store or Google Play listing. Also use when the user mentions 'ASO... |
| [attribution](skills/attribution/) | When the user wants to figure out which marketing actually drives conversions and revenue, choose or interpret an... |
| [brand-guidelines](skills/brand-guidelines/) | When the user wants to create, update, or apply visual brand identity guidelines — logo usage, color palette,... |
| [brand-management](skills/brand-management/) | When the user wants to track brand health, decide on brand architecture (house of brands vs. branded house vs.... |
| [budget-allocation](skills/budget-allocation/) | When the user wants to size a total marketing budget or decide how to split it across channels/campaigns, including... |
| [budget-pacing-tracker](skills/budget-pacing-tracker/) | When the user wants to track whether actual spend is on pace against a planned budget within a period, catch... |
| [channel-selection](skills/channel-selection/) | When the user wants to decide which marketing channels to be in — not how much to spend on each (see budget-allocation)... |
| [churn-prevention](skills/churn-prevention/) | When the user wants to reduce churn, build cancellation flows, set up save offers, recover failed payments, or... |
| [co-marketing](skills/co-marketing/) | When the user wants to find co-marketing partners, plan joint campaigns, or brainstorm partnership opportunities. Use... |
| [cold-email](skills/cold-email/) | Write B2B cold emails and follow-up sequences that get replies. Use when the user wants to write cold outreach emails,... |
| [community-marketing](skills/community-marketing/) | Build and leverage online communities to drive product growth and brand loyalty. Use when the user wants to create a... |
| [competitor-profiling](skills/competitor-profiling/) | When the user wants to research, profile, or analyze competitors from their URLs. Also use when the user mentions... |
| [competitors](skills/competitors/) | When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when... |
| [compliance](skills/compliance/) | When the user wants to check a marketing decision, claim, or campaign for compliance risk — advertising claims,... |
| [content-strategy](skills/content-strategy/) | When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also... |
| [copy-editing](skills/copy-editing/) | When the user wants to edit, review, or improve existing marketing copy, or refresh outdated content. Also use when the... |
| [copywriting](skills/copywriting/) | When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages,... |
| [cro](skills/cro/) | When the user wants to optimize, improve, or increase conversions on any marketing page or form — including homepage,... |
| [customer-research](skills/customer-research/) | When the user wants to conduct, analyze, or synthesize customer research. Use when the user mentions "customer... |
| [digital-out-of-home](skills/digital-out-of-home/) | When the user wants to plan out-of-home (OOH) or digital out-of-home (DOOH) advertising — billboards, transit ads,... |
| [directory-submissions](skills/directory-submissions/) | When the user wants to submit their product to startup, SaaS, AI, agent, MCP, no-code, or review directories for... |
| [discount-and-clearance](skills/discount-and-clearance/) | When the user wants to plan, structure, or message a discount or clearance event — sizing the depth, cadence, and... |
| [emails](skills/emails/) | When the user wants to create or optimize an email sequence, drip campaign, automated email flow, or lifecycle email... |
| [experiential-marketing](skills/experiential-marketing/) | When the user wants to plan an in-person event, activation, or demo — in-store demos, trade show booths, roadshows,... |
| [free-tools](skills/free-tools/) | When the user wants to plan, evaluate, or build a free tool for marketing purposes — lead generation, SEO value, or... |
| [image](skills/image/) | When the user wants to create, generate, edit, or optimize images for marketing — blog heroes, social graphics, product... |
| [influencer-marketing](skills/influencer-marketing/) | When the user wants to run influencer, creator, or ambassador partnerships to promote their product — finding and... |
| [launch](skills/launch/) | When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user... |
| [lead-magnets](skills/lead-magnets/) | When the user wants to create, plan, or optimize a lead magnet for email capture or lead generation. Also use when the... |
| [local-marketing](skills/local-marketing/) | When the user wants to market a physical store location, dealer, or multi-location business to people searching or... |
| [loyalty](skills/loyalty/) | When the user wants to design, launch, or improve a customer loyalty or rewards program, or a... |
| [marketing-council](skills/marketing-council/) | When the user wants multiple expert perspectives on a marketing question — a simulated board of advisors staffed by... |
| [marketing-ideas](skills/marketing-ideas/) | When the user needs marketing ideas, inspiration, or strategies for their product or business. Also use when the user... |
| [marketing-loops](skills/marketing-loops/) | When the user wants to set up a recurring, self-running marketing workflow — a repeatable loop an AI agent runs on a... |
| [marketing-plan](skills/marketing-plan/) | When the user needs a comprehensive marketing plan for a client, a company they advise, or their own product. Also use... |
| [marketing-psychology](skills/marketing-psychology/) | When the user wants to apply psychological principles, mental models, or behavioral science to marketing. Also use when... |
| [marketing-strategy](skills/marketing-strategy/) | When the user wants to create or update their foundational marketing strategy and positioning context, or needs help... |
| [media-plan](skills/media-plan/) | When the user wants to build a media plan — sequencing and weighting paid media across channels, over time, to hit a... |
| [moat-builder](skills/moat-builder/) | When the user wants to identify a durable competitive advantage (a moat) and direct marketing investment to build or... |
| [offers](skills/offers/) | When the user wants to design, construct, or improve an offer — the thing they actually sell — including value framing,... |
| [onboarding](skills/onboarding/) | When the user wants to optimize post-signup onboarding, user activation, first-run experience, or time-to-value. Also... |
| [overstock](skills/overstock/) | When the user has excess, aging, dead, or discontinued inventory and needs to diagnose why, and decide how to dispose... |
| [paywalls](skills/paywalls/) | When the user wants to create or optimize in-app paywalls, upgrade screens, upsell modals, or feature gates. Also use... |
| [popups](skills/popups/) | When the user wants to create or optimize popups, modals, overlays, slide-ins, or banners for conversion purposes. Also... |
| [pos-marketing](skills/pos-marketing/) | When the user wants to plan point-of-sale or point-of-purchase marketing materials — in-store signage, shelf talkers,... |
| [price-elasticity](skills/price-elasticity/) | When the user wants to understand or estimate how demand responds to a price change, decide how much they can raise... |
| [pricing](skills/pricing/) | When the user wants help with pricing decisions, packaging, monetization strategy, or checking prices against... |
| [product-feed](skills/product-feed/) | When the user wants to build, audit, or optimize a product data feed for shopping ads or catalog-driven marketing. Also... |
| [product-lifecycle](skills/product-lifecycle/) | When the user wants marketing guidance for a product moving through its lifecycle — beyond the initial launch. Also use... |
| [programmatic](skills/programmatic/) | When the user wants to plan or optimize programmatic media buying — automated, auction-based ad buying across display,... |
| [programmatic-seo](skills/programmatic-seo/) | When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions... |
| [prospecting](skills/prospecting/) | When the user wants to find, qualify, and build a list of prospects to reach out to — across B2B SaaS, general B2B, or... |
| [public-relations](skills/public-relations/) | When the user wants help with public relations, earned media, press coverage, journalist outreach, or media strategy... |
| [range-review](skills/range-review/) | When the user wants to periodically review the product range/assortment and decide what to keep, grow, fix, cut, or... |
| [referrals](skills/referrals/) | When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy.... |
| [repositioning](skills/repositioning/) | When a material positioning change has just been made in marketing-strategy and the user needs to know everything else... |
| [retail-media](skills/retail-media/) | When the user wants to plan or optimize advertising, or organic visibility and the Buy Box, on a retailer's own... |
| [revops](skills/revops/) | When the user wants help with revenue operations, lead lifecycle management, or marketing-to-sales handoff processes.... |
| [sales-enablement](skills/sales-enablement/) | When the user wants to create sales collateral, pitch decks, one-pagers, objection handling docs, or demo scripts. Also... |
| [schema](skills/schema/) | When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user... |
| [seo-audit](skills/seo-audit/) | When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO... |
| [signup](skills/signup/) | When the user wants to optimize signup, registration, account creation, or trial activation flows. Also use when the... |
| [site-architecture](skills/site-architecture/) | When the user wants to plan, map, or restructure their website's page hierarchy, navigation, URL structure, or internal... |
| [sms](skills/sms/) | When the user wants to plan, build, or optimize SMS or MMS marketing — including welcome flows, abandoned cart texts,... |
| [social](skills/social/) | When the user wants help creating, scheduling, or optimizing social media content for LinkedIn, Twitter/X, Instagram,... |
| [storytelling](skills/storytelling/) | When the user wants to construct a brand, founder, product, or customer narrative — the underlying story arc, not the... |
| [supplier-funded-marketing](skills/supplier-funded-marketing/) | When the user wants help with marketing development funds (MDF) or co-op advertising — either requesting and using... |
| [tentpole-campaign](skills/tentpole-campaign/) | When the user wants to plan a major brand campaign tied to a calendar moment, cultural moment, or brand-owned milestone... |
| [trade-marketing](skills/trade-marketing/) | When the user wants to get a retail buyer, distributor, or dealer to list, stock, or feature a product — sell-in... |
| [video](skills/video/) | When the user wants to create, generate, or produce video content using AI tools or programmatic frameworks. Also use... |
| [visual-merchandising](skills/visual-merchandising/) | When the user wants to plan how products are physically displayed and arranged in a retail environment — window... |
<!-- SKILLS:END -->

## Installation

### Option 1: CLI Install (Recommended)

Use [npx skills](https://github.com/vercel-labs/skills) to install skills directly:

```bash
# Install all skills
npx skills add sushpadhye6789/retail-marketing-skills

# Install specific skills
npx skills add sushpadhye6789/retail-marketing-skills --skill cro copywriting

# List available skills
npx skills add sushpadhye6789/retail-marketing-skills --list
```

The CLI detects which agents you have installed and asks where to install. For Claude Code it installs into `.claude/skills/`; universal agents share `.agents/skills/`.

> [!TIP]
> If you run the command from **inside** an agent session (e.g., asking Claude Code to install the skills for you), the CLI runs non-interactively and may only install to the universal `.agents/skills/` directory, which Claude Code does not read. Pass the agent explicitly:
>
> ```bash
> npx skills add sushpadhye6789/retail-marketing-skills -a claude-code
> ```

### Option 2: Claude Code Plugin

Install via Claude Code's built-in plugin system:

```bash
# Add the marketplace
/plugin marketplace add sushpadhye6789/retail-marketing-skills

# Install all marketing skills
/plugin install marketing-skills
```

### Option 3: Clone and Copy

Clone the entire repo and copy the skills folder:

```bash
git clone https://github.com/sushpadhye6789/retail-marketing-skills.git
cp -r retail-marketing-skills/skills/* .agents/skills/
```

### Option 4: Git Submodule

Add as a submodule for easy updates:

```bash
git submodule add https://github.com/sushpadhye6789/retail-marketing-skills.git .agents/retail-marketing-skills
```

Then reference skills from `.agents/retail-marketing-skills/skills/`.

### Option 5: Fork and Customize

1. Fork this repository
2. Customize skills for your specific needs
3. Clone your fork into your projects

### Option 6: SkillKit (Multi-Agent)

Use [SkillKit](https://github.com/rohitg00/skillkit) to install skills across multiple AI agents (Claude Code, Cursor, Copilot, etc.):

```bash
# Install all skills
npx skillkit install sushpadhye6789/retail-marketing-skills

# Install specific skills
npx skillkit install sushpadhye6789/retail-marketing-skills --skill cro copywriting

# List available skills
npx skillkit install sushpadhye6789/retail-marketing-skills --list
```

### Product marketing context file

Most skills read a shared context file first to understand your product, audience, brand tier, and distribution model — see `marketing-strategy`. Its canonical path is `.agents/marketing-strategy.md`; skills also check `.agents/product-marketing.md`, `.claude/product-marketing.md`, and `product-marketing-context.md` as legacy fallbacks, so nothing breaks if you're migrating an existing context file from another install of this skill set.

## Usage

Once installed, just ask your agent to help with marketing tasks:

```
"Help me optimize this product page for conversions"
→ Uses cro skill

"Write homepage copy for my store"
→ Uses copywriting skill

"Set up GA4 tracking for purchases"
→ Uses analytics skill

"Create a 5-email welcome sequence"
→ Uses emails skill

"Plan a sell-in deck for a new retail buyer"
→ Uses trade-marketing skill

"Run the boardroom on this ad screenshot"
→ Uses marketing-council skill (Boardroom mode — a fixed 6-advisor
  panel audits the finished asset and outputs a prioritized action list)
```

You can also invoke skills directly:

```
/cro
/emails
/seo-audit
```

## Skill Categories

### Strategy & Foundation
- `marketing-strategy` - Foundational positioning, audience, brand tier, distribution model, and strategic priorities
- `repositioning` - Cascading a material positioning change through everything built on the old one
- `marketing-plan` - Comprehensive AARRR-structured marketing plan
- `marketing-ideas` - 140 marketing ideas
- `marketing-psychology` - Mental models and psychology
- `marketing-council` - Boardroom mode — multi-advisor review of a finished asset or decision
- `moat-builder` - Identifying and widening durable competitive advantages, not just messaging around them
- `customer-research` - Conducting and synthesizing customer research
- `competitor-profiling` - Researching and profiling competitors from their URLs
- `brand-management` - Brand health tracking, architecture, extension decisions, and governance
- `brand-guidelines` - Visual identity: logo, color, typography, imagery style

### Channel Strategy, Budget & Measurement
- `channel-selection` - Deciding which marketing channels belong in the mix
- `budget-allocation` - Sizing and allocating marketing budget across channels, and reallocating on performance
- `budget-pacing-tracker` - Tracking actual spend against planned pace within a budget period
- `media-plan` - Reach/frequency, flighting, and channel weighting for a coordinated campaign
- `attribution` - Attribution models, incrementality testing, and media mix modeling
- `analytics` - Event tracking setup

### Conversion Optimization
- `cro` - Homepage, landing page, product page, cart, checkout, and form CRO
- `signup` - Registration and trial activation flows
- `onboarding` - Post-signup activation
- `popups` - Modals and overlays
- `paywalls` - In-app upgrade moments
- `ab-testing` - Experiment design

### Content & Copy
- `storytelling` - Brand, founder, product, and customer narrative construction
- `copywriting` - Marketing page copy
- `copy-editing` - Edit and polish existing copy
- `content-strategy` - What content to create and why
- `cold-email` - B2B cold outreach emails and sequences
- `emails` - Automated email flows
- `sms` - SMS/MMS marketing
- `social` - Social media content
- `image` - AI image generation, design tools, and optimization
- `video` - AI video production

### SEO & Discovery
- `seo-audit` - Technical and on-page SEO
- `ai-seo` - AI search optimization (AEO, GEO, LLMO)
- `programmatic-seo` - Scaled page generation
- `site-architecture` - Page hierarchy, navigation, URL structure
- `schema` - Structured data
- `aso` - App Store / Google Play optimization
- `competitors` - Comparison and alternative pages

### Paid Media
- `ads` - Google, Meta, LinkedIn, TikTok campaigns (including PMax and Advantage+ Shopping)
- `ad-creative` - Bulk ad creative generation and iteration
- `programmatic` - DSP/RTB media buying across display, video, CTV, and audio
- `digital-out-of-home` - Billboards, transit, and place-based screens
- `product-feed` - Merchant/catalog feed structure, quality, and troubleshooting

### Retail & Physical Marketing
- `retail-media` - Advertising and organic visibility (including the Buy Box) on a retailer's own platform
- `pos-marketing` - Point-of-sale/point-of-purchase marketing materials, including BOPIS/curbside signage
- `local-marketing` - Google Business Profile, local search, and multi-location/dealer coordination
- `trade-marketing` - Retail buyer sell-in, category management, and line reviews
- `visual-merchandising` - Store layout, planograms, and window displays
- `experiential-marketing` - In-store demos, trade shows, roadshows, and pop-ups
- `supplier-funded-marketing` - MDF/co-op advertising, receiving or providing dealer marketing funds

### Growth & Retention
- `referrals` - Referral and affiliate programs
- `loyalty` - Points, tiers, paid-membership, and subscribe-and-save/replenishment programs
- `churn-prevention` - Cancel flows, save offers, dunning, and payment recovery
- `community-marketing` - Online communities (Discord, Slack, forums)
- `influencer-marketing` - Creator and ambassador partnerships
- `co-marketing` - Partner identification and joint campaigns
- `public-relations` - Earned media, journalist outreach, and crisis/reactive PR
- `lead-magnets` - Lead magnets for email capture
- `free-tools` - Free marketing tools and calculators
- `prospecting` - Prospect list building
- `directory-submissions` - Directory and listing submissions
- `marketing-loops` - Recurring, self-running marketing workflows

### Commercial & Monetization
- `pricing` - Pricing, packaging, and monetization strategy
- `price-elasticity` - Measuring and using demand response to price changes
- `offers` - Value framing, bonus stacking, guarantees, scarcity/urgency
- `discount-and-clearance` - Sizing and messaging a discount or clearance event
- `overstock` - Diagnosing excess/aging inventory and choosing a disposition channel
- `range-review` - Periodic product range/assortment review — keep, grow, fix, cut, add
- `product-lifecycle` - Product transitions, phase-outs, and replacements after launch
- `tentpole-campaign` - Major brand campaigns tied to a calendar or cultural moment
- `launch` - Product launches and announcements

### Compliance
- `compliance` - Advertising claims, disclosures, consent, and pricing-claim compliance risk

### Sales & RevOps
- `revops` - Lead lifecycle, scoring, routing, pipeline management
- `sales-enablement` - Sales decks, one-pagers, objection docs, demo scripts

## Contributing

Found a way to improve a skill? Have a new skill to suggest? PRs and issues welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding or improving skills.

## License

[MIT](LICENSE). Originally built by [Corey Haines](https://github.com/coreyhaines31); modifications and additions by [Sush Padhye](https://github.com/sushpadhye6789). Use these however you want — see the [License](LICENSE) file for the one condition (keep the copyright notice).
