# SparkToro

Audience research platform that reveals what your target audience reads, watches, listens to, follows, and searches for — using clickstream data, Google search data, and public social profiles.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | Yes | Official REST API; prepaid credits, separate from web subscriptions |
| MCP | Yes | Official server; included with paid subscriptions and uses their report quota |
| CLI | Unverified | Check current official documentation before selecting a client |
| SDK | Unverified | Check current official documentation before selecting a library |

Use the web interface, official MCP server, or official API according to the account access and tools actually available. API and MCP availability and billing checked against official documentation on 2026-10-11; no live account or endpoint test performed.

Sources: [API and subscription access](https://sparktoro.com/support/faq/api-access-and-subscriptions), [API credits](https://sparktoro.com/support/faq/how-api-credits-work), and [current plans](https://sparktoro.com/pricing). Consult the linked API documentation for authentication and endpoint schemas before implementing calls.

## Authentication

- **Web**: Account login at https://sparktoro.com
- **API**: Create a key through the official API dashboard; API access is billed separately through prepaid credit bundles and does not require a web subscription.
- **MCP**: Use the official connection instructions and a paid subscription. Its usage counts against the subscription's report quota rather than API credits.

## Pricing Tiers

Check [current plans](https://sparktoro.com/pricing) before recommending a subscription: prices, billing periods, report quotas and features can change. The free web tier provides previews rather than full reports. API credits are a separate product; a paid web subscription does not include API credits. Check available balance and endpoint costs before running API research.

## What SparkToro Reveals

### Audience Behaviors
- **Websites** they visit and engage with
- **Podcasts** they listen to
- **YouTube channels** they watch
- **Subreddits** they participate in
- **Social accounts** they follow
- **Search keywords** they use on Google
- **AI prompt topics** they ask ChatGPT, Claude, Gemini

### Audience Demographics
- Gender, age ranges
- Job titles and roles
- Industries and skills
- Education levels
- Geographic distribution
- Interests and affinities

### Audience Characteristics
- Bio descriptions and self-identifiers
- Language patterns in posts and comments
- Preferred social networks and platforms
- E-commerce platforms they use

## Common Agent Operations

These research workflows apply across supported access methods. Use connected official tools when available; otherwise guide the user through the web interface. Do not invent tool names or API schemas, or scrape web results as a substitute for official access.

### Audience Profile Research

Query SparkToro with phrases like:
- "People who follow @competitor" — reveals shared audience behaviors
- "People who visit competitor.com" — shows what else they consume
- "People who frequently talk about [topic]" — finds audience affinities
- "People whose bio contains [job title]" — profiles a role-based segment

### Finding Where Your ICP Spends Time

1. Search for your ICP by description, competitor followers, or website visitors
2. Extract: top websites visited, podcasts listened to, YouTube channels watched, subreddits
3. Use this to prioritize: guest podcast appearances, content partnerships, ad placements, community participation

### Discovering Content Topics

1. Search your audience segment
2. Review the "Search Keywords" tab — what they Google
3. Review the "AI Prompt Topics" tab — what they ask AI tools
4. Use these to inform content strategy and SEO keyword targeting

### Building Data-Backed Personas

1. Run 3–5 queries for different segments of your audience
2. Compare demographic breakdowns across segments
3. Note which behaviors and affinities are shared vs. unique per segment
4. Export data and build personas grounded in observed behavior, not assumptions

### Competitive Audience Analysis

1. Search "People who follow @competitor" or "People who visit competitor.com"
2. Compare against your own audience profile
3. Identify: channels they use that you don't, content they consume that you don't produce, influencers they follow that you haven't engaged

## Data Sources

SparkToro aggregates from three sources:
- **Clickstream data** — anonymized browsing behavior
- **Google search results** — search keyword patterns
- **Public social profiles** — bios, follows, engagement

## When to Use

- Identifying where your ICP spends time online (podcasts, YouTube, subreddits, websites)
- Finding influencers and social accounts your audience follows
- Discovering content topics and search keywords your audience cares about
- Building data-backed personas instead of assumption-based ones
- Planning podcast guest appearances, sponsorships, or content partnerships
- Understanding what your competitors' audience looks like
- Validating audience assumptions with behavioral data
- Discovering AI prompt topics your audience uses

## Limitations

- API calls consume separately billed credits; MCP requires a paid subscription and consumes its report quota
- Free web previews are limited; verify current quota and feature access before planning a batch
- Data skews toward English-language, US-centric audiences
- Clickstream data may not capture all niche audiences
- Cannot track individual users — all data is aggregated and anonymized

## Relevant Skills

- customer-research
- content-strategy
- competitors
- ads
- social
- cold-email
