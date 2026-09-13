# Marketing Operations Stack — Skills + MCPs per Funnel Stage

This doc maps every marketing-skill and every relevant MCP/API integration to the funnel stage(s) — Awareness, Consideration, Conversion, Loyalty — it primarily serves. It's the source for Section 10 of every plan.

> **Note on scope.** Skills below live in this `marketingskills` repo. A few references point to optional tools from adjacent Claude Code marketplaces (e.g., `vercel:agent-browser`, `compound-engineering:diagram-maker`) — substitute equivalents if not installed. When a plan references a skill or tool that isn't available, fall back to the underlying tactic and call it out in Section 12's open decisions.

## The thesis

A small team + fCMO + agentic tooling = output of a 15–20-person traditional marketing org. The skills + MCPs encode workflows that previously required dedicated headcount per channel.

The plan's Section 10 makes this thesis explicit by:
1. Mapping skills to stages so the founder sees which skills execute which work
2. Mapping MCPs/APIs to stages so the founder sees the tooling layer
3. Naming a concrete operational example that proves the stack works
4. Showing capability unlocks by capital stage (bootstrapped → first outside capital → scaling)

## Marketing skills mapped to the retail funnel

### Awareness skills

| Skill | What it does | Primary use in Awareness |
|---|---|---|
| `seo-audit` | Audit site for technical and on-page SEO | Quarterly site health checks |
| `ai-seo` | Optimize content for AI search engines / LLM citation | Future-proof content strategy |
| `programmatic-seo` | Build template-driven SEO pages at scale | Location, comparison, integration page systems |
| `schema` | Add structured data markup | Rich snippets, eligibility for AI citation |
| `content-strategy` | Plan content topics, pillars, cadence | Setting the editorial calendar |
| `ads` | Plan and structure paid campaigns | Apple Search Ads, Meta, Google, LinkedIn |
| `ad-creative` | Generate ad variations and creative | Iterate ad creative across platforms |
| `social` | Plan and write social media content | LinkedIn, Twitter/X, Instagram, TikTok |
| `typefully` | Schedule/post tweets, threads, LinkedIn content | Cadence operations for founder-led channels |
| `cold-email` | Write B2B cold outreach + sequences | Outbound for B2B/wholesale / hybrid businesses |
| `analytics` | Set up tracking, GA4, conversion events | Funnel instrumentation |
| `free-tools` | Plan engineering-as-marketing free tools | Build tools that generate links + leads |
| `launch` | Plan and execute launches (Product Hunt, GA, feature launches) | GTM moments — strategy + tactical execution |

### Consideration skills

| Skill | What it does | Primary use in Consideration |
|---|---|---|
| `competitors` | Build vs-pages and alternative-to-pages | The canonical Consideration-stage asset — comparison content a shopper reads before buying |
| `content-strategy` | Plan content topics, pillars, cadence | Buying guides, credibility/science content that resolves a shopper's doubt |
| `site-architecture` | Design site/page structure with intention | Product-page and comparison-page structure |
| `copywriting` / `copy-editing` | Write and edit marketing copy | Product-page copy, comparison copy, reviews presentation |
| `cro` | Optimize any marketing page or form | Product-page and comparison-page testing (checkout-specific CRO lives in Conversion) |
| `popups` | Optimize popups, modals, slide-ins | Wishlist/save-for-later capture, light retargeting prompts |
| `marketing-psychology` | Apply behavioral science to copy and CRO | Persuasion principles in research/comparison content |
| `sales-enablement` | Build sales decks, one-pagers, demos | The B2B/wholesale buyer's research packet |

### Conversion skills

| Skill | What it does | Primary use in Conversion |
|---|---|---|
| `signup` | Optimize signup/registration | Checkout account creation, loyalty-program signup at purchase, B2B account application — this is where AARRR's "Activation" signup work actually lands, since it gates the purchase |
| `cro` | Optimize any marketing page or form | Checkout / cart-page conversion testing |
| `paywalls` | Optimize paywalls and upgrade screens | Trial → paid conversion (the freemium-app equivalent of "checkout") |
| `popups` | Optimize popups, modals, slide-ins | Exit-intent / cart-abandonment prompts |
| `copywriting` / `copy-editing` | Checkout copy, CTAs | Trust-signal copy, guarantee/returns language |
| `ab-testing` | Plan A/B tests | Checkout-step and paywall variant tests |
| `pricing` | Audit and optimize pricing | Initial-purchase pricing structure, intro offers |
| `marketing-psychology` | Apply behavioral science to copy and CRO | Trust signals and friction reduction at the point of purchase |

### Loyalty skills (core, plus Referral & Advocacy)

| Skill | What it does | Primary use in Loyalty |
|---|---|---|
| `emails` | Design email sequences | Customer.io / Mailchimp / Resend flow building — post-purchase, replenishment, win-back, ambassador lifecycle |
| `churn-prevention` | Build cancellation flows, save offers, win-back | Reduce churn, recover failed payments/subscriptions |
| `post-purchase-experience` | Unboxing, product registration, cross-sell | The repeat-purchase groundwork this section opens with |
| `referrals` | Plan and launch referral / affiliate / ambassador programs | Core skill for the Referral & Advocacy subsection |
| `social` | Create ambassador-shareable content | Talking points, post templates |
| `site-architecture` | Per-ambassador landing pages | Attribution surface |
| `pricing` | Audit and optimize pricing | Subscription/replenishment pricing, repeat-purchase bundles |
| `sales-enablement` | Build sales decks, one-pagers, demos | B2B/wholesale account-management and expansion material |
| `revops` | Revenue operations, lead lifecycle | Marketing → account-management handoff for repeat/expansion revenue |
| `copywriting` / `copy-editing` | Email and ambassador copy | Lifecycle content, recruitment, onboarding, communication |
| `ab-testing` | Test email and offer variants | Subject line, CTA, timing, and repeat-offer tests |

### Cross-cutting / brand foundation skills

| Skill | What it does | Primary use |
|---|---|---|
| `marketing-strategy` | Set up the `.agents/marketing-strategy.md` context file (positioning, ICP, voice) | Foundational — run first; every section of the plan references this |
| `customer-research` | Conduct customer interviews + surveys | Section 2 + Section 3 (Current state) |
| `marketing-psychology` | Apply behavioral science | Cross-cuts copy, CRO, paywalls |
| `marketing-ideas` | The 139-idea library | Section 11 of plan (Idea bank) |

## MCPs and APIs mapped to the retail funnel

### Awareness tooling

| Tool | What it provides | Wired-at-client check |
|---|---|---|
| **Ahrefs API** | SEO data: keyword research, backlinks, competitor analysis | Required `AHREFS_API_KEY` in `.env` |
| **DataForSEO API** | SERP data, keyword volume, competitor SERP analysis | Required API key |
| **GA4 MCP** | Traffic by channel, conversion events, funnel curves | Wired via gcp project + service account |
| **GitHub MCP** | Repo work: marketing site (`site-name-promo` patterns), content authoring | Standard `gh` CLI auth + MCP server |
| **Typefully MCP** | Social posting (LinkedIn, X, Threads, Bluesky) | Typefully account + API key |
| **Google Ads MCP** | Ad account management, campaign creation, performance pulls | Wired post-budget-unlock |
| **agent-browser** | Browser automation (form fills, screenshots, scraping) | CLI install: `npm install -g agent-browser` |
| **dev-browser** | General-purpose browser automation | MCP server install |
| **defuddle** | Clean markdown extraction from web pages | CLI install |
| **Notion** | Internal knowledge directory access | Notion API key |

### Consideration tooling

| Tool | What it provides |
|---|---|
| **App Store Connect** | Listing-variant performance, install funnel (the pre-download research surface) | Usually manual + `dev-browser` for screenshots |
| **GitHub MCP** | Marketing site / comparison-page repo edits |
| **Figma / Pencil MCP** | Product-page and comparison-page design + iteration |
| **GA4 MCP** | Product-page engagement, session depth, review-read events |
| **Judge.me / Yotpo / similar** | Review collection + display on product pages |

### Conversion tooling

| Tool | What it provides |
|---|---|
| **Stripe MCP** | Checkout/trial-to-paid state, initial-order economics, blended CAC payback math |
| **Shopify** | Checkout events, cart-abandonment triggers, AOV by order |
| **App Store Connect** | Trial → paid conversion funnel (for a hybrid subscription app) | Usually manual + `dev-browser` for screenshots |
| **Customer.io MCP** | Cart-recovery / order-confirmation messaging coordination |
| **GA4 MCP** | Checkout-funnel events, conversion-rate instrumentation |

### Loyalty tooling (incl. Referral & Advocacy)

| Tool | What it provides |
|---|---|
| **Customer.io MCP** | The loyalty infrastructure — flow building, segmentation, sending (post-purchase, replenishment, win-back, ambassador lifecycle) |
| **Shopify** | Hardware/repeat-buyer events as lifecycle triggers |
| **Stripe MCP** | Subscription state, churn cohorts, plan changes, repeat-order economics |
| **GA4 MCP** | Session events, repeat-visit and retention curves |
| **Resend / Mailchimp / SendGrid** | Alternatives to Customer.io for different stacks |
| **Dub.co** | Ambassador attribution, short links, per-ambassador tracking |
| **GitHub MCP** | Per-ambassador landing pages |
| **Rewardful / Tolt / Mention Me** | Alternatives to Dub for affiliate management |
| **Notion** | Commercial knowledge directory |

### Cross-cutting tooling

| Tool | What it provides |
|---|---|
| **Notion** | Shared knowledge base |
| **GitHub MCP** | Shared context repo (`{client-org}/{client-context}`) |
| **defuddle** | Research extraction |
| **obsidian-cli** | Working notes for fCMO |
| **Pencil MCP** | Design files |
| **Figma MCP** | Design files (if Figma) |

## Capability unlocks by capital stage

The plan's Section 10 must include this table (or equivalent), specific to the client's current and projected capital stages.

| Tier | Headcount | Tooling | Channels live |
|---|---|---|---|
| **Tier 1 — Bootstrapped / self-funded** | fCMO + founder team | All current tooling + marketing-skills library + MCP layer | Organic only (SEO, content, social, local marketing, WOM, ambassador) |
| **Tier 2 — First outside capital** | + first marketing hire (lifecycle/content owner) | + paid ad accounts (Meta, Google, TikTok) + `ads` skill activated | + paid acquisition pilot ($2–8K/mo — see `funding-stage-unlocks.md` for canonical tiers) |
| **Tier 3 — Scaling with capital** | + designer (potentially fractional) | + analytics expansion beyond GA4 if needed | + paid scaling ($10–30K/mo) + first structured launches |
| **Tier 4 — Growth capital** | + performance marketing lead + content lead | + dedicated tooling spend ($3–8K/mo software) + sponsored event budget | + paid scaling ($30–100K/mo) + new-market consideration + wholesale/B2B expansion |
| **Tier 5 — Institutional scale** | Full-stack marketing org (10+ people) | + agency partnerships + PR firm | + brand campaigns + media/IP acquisitions + category-level sponsorships |

## The concrete-example test

Section 10 of the plan must include at least one concrete operational example that proves the stack thesis. The example should be:
- A specific event (not abstract claim)
- From this client's actual history if possible (most credible)
- Tied to a non-technical person executing via the stack (proves it works without dedicated engineering)

Examples from real engagements:
- *"On the kickoff call, Alex drafted a working Customer.io abandoned-cart flow live, using Customer.io's Claude MCP. Validated that a non-technical founder can ship lifecycle work using the skill pattern independently."*
- *"In two weeks, the team scaled from 0 to 14 ranking keywords using `programmatic-seo` against the Ahrefs API + GitHub MCP — no dedicated SEO hire required."*
- *"The first email campaign generated a 24% reply rate after `cold-email` skill + GA4 MCP + Stripe MCP gave the team a verified target list of users with high LTV but no recent activity."*

If the client has no such moment in their history yet, frame the example as the *first move* — "Here's the demonstration the team will run in week one to validate the stack:"

## When the stack doesn't apply (yet)

For clients without MCP connections set up, frame Section 10 differently:
- List the skills that DO apply with current tooling
- Name which MCPs would unlock which sections of the plan
- Treat MCP setup as a Q1 priority alongside the bedrock fixes

A plan can't claim the agentic-stack thesis if the stack isn't wired. Be honest about state.
