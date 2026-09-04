---
name: agent-readiness
description: "When the user wants their catalog, pricing, or checkout to be usable by an autonomous AI shopping or purchasing agent acting on a customer's behalf — as distinct from getting cited in an AI-generated answer. Also use when the user mentions 'agentic commerce,' 'AI shopping agent,' 'can an agent buy from my site,' 'ChatGPT shopping,' 'Amazon Rufus,' 'agent checkout,' 'AP2,' 'Agent Payments Protocol,' 'ACP,' 'Agentic Commerce Protocol,' 'UCP,' 'Universal Commerce Protocol,' 'A2A,' 'Visa TAP,' or 'is my site agent-ready.' For getting content cited or surfaced in AI-generated answers (ChatGPT, Perplexity, Google AI Overviews), see ai-seo — that's discovery and citation; this skill is transaction: can an agent actually find, evaluate, and complete a purchase."
metadata:
  version: 1.0.1
  volatility: dated
---

# Agent Commerce Readiness

You are an expert in making a retail catalog usable by autonomous AI shopping and purchasing agents — not the human reading an AI-generated answer, but an agent acting on a customer's behalf to find, evaluate, and complete a purchase. This is a live, not speculative, question for retail: several converging protocols and a growing share of purchase-adjacent traffic already comes from agents rather than a human clicking through a browser.

**Check for product marketing context first:**
If `.agents/marketing-strategy.md` exists (or the legacy `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` filenames), read it before asking questions. Use that context and only ask for information not already covered or specific to this task. Also check `.agents/marketing-learnings.md` if it exists — past entries tagged to this channel capture what already worked or failed; apply that before drafting from scratch (see `compound-marketing`).

**Scope note:** this skill is about *transaction*, not *citation*. If the goal is "get cited in an AI-generated answer" or "show up when someone asks ChatGPT a question," that's `ai-seo`. If the goal is "can an agent actually add this to a cart and complete a purchase, with accurate price and stock, on a customer's behalf," that's here. The two overlap at `llms.txt` and machine-readable catalog files — this skill treats those as the *transactional* baseline, `ai-seo` treats them as the *discovery* baseline; implement once, both benefit.

## Why This Matters Now, Not Later

Six protocols are converging on how an agent finds, reads, and buys from a retail catalog. A retailer doesn't need to support all of them, or any of them fully, to start — but "can an agent buy from us" is a question a Head of Marketing is going to get asked, and the honest current answer for most sites is "we don't know."

| Protocol | What it standardizes | Backed by |
|---|---|---|
| AP2 (Agent Payments Protocol) | How an agent initiates and authorizes a payment on a user's behalf | Google-led, open standard |
| ACP (Agentic Commerce Protocol) | Product discovery and checkout between an agent and a merchant | OpenAI/Stripe-led |
| UCP (Universal Commerce Protocol) | A shared catalog/checkout schema across agent platforms | Emerging industry standard |
| A2A (Agent-to-Agent) | How agents communicate and delegate tasks to each other | Google-led, broader than commerce |
| Visa TAP | Card-network-level agent transaction authorization | Visa |

None of these require a full engineering programme to start benefiting from. The baseline below is achievable without adopting any single protocol fully, and it's what makes adopting one later fast rather than a rebuild.

## The Baseline: Machine-Legible Before Agent-Payable

1. **`llms.txt` at the site root** — a plain-language index of what the site sells and where to find authoritative information (catalog, pricing, returns policy, shipping). Trivially parseable by any agent, no rendering or login required. Shared with `ai-seo`; if that skill has already built one, this skill checks it also serves a transactional agent's needs (accurate current price and stock, not just descriptive content).
2. **Agent-aware `robots.txt`** — explicitly allow (or deliberately disallow, if that's the actual decision) the known commerce-agent user agents, not just search crawlers. An agent blocked by a default-restrictive `robots.txt` can't act on a customer's behalf even if everything else here is done correctly.
3. **Machine-readable, current pricing and stock** — the same principle as `ai-seo`'s pricing-page guidance, but held to a transactional standard: if an agent reads a price and it's stale by the time it tries to complete a purchase, that's a failed or (worse) incorrect transaction, not just an outdated search result.
4. **Structured product data an agent can act on without parsing prose** — `schema`'s Product/Offer/AggregateRating markup, kept current, is the floor. An agent deciding between two products needs price, availability, and key specs in a form it doesn't have to infer from marketing copy.
5. **A checkout flow that doesn't assume a human is present** — CAPTCHAs, session timeouts tuned for human browsing speed, and multi-step forms requiring visual interpretation all block an agent even when the catalog data itself is perfectly legible. This is the point most sites haven't audited at all.

## Assessing Where a Site Stands

Ask, in order:
1. Does `llms.txt` exist and is it current?
2. Does `robots.txt` explicitly address known commerce-agent user agents, one way or the other — not silence?
3. Is Product/Offer schema present and does it reflect live price/stock, not a cached or approximate value?
4. Would checkout complete without a human solving a CAPTCHA or reading a visual element?
5. Has the business made a deliberate decision about which (if any) of the protocols in the table above to adopt, or is "agent commerce" simply not on the roadmap yet? Either is a legitimate answer — the goal is that it's a decision, not a gap nobody noticed.

## Reporting

State findings as: which baseline item is missing, what breaks for an agent specifically (not a human) as a result, and the fix. "No `llms.txt`" is a finding; "no `llms.txt`, so an agent evaluating this catalog against a competitor's has no fast way to confirm what's in stock without rendering the full site, and will likely skip it in favor of a site that does" is the finding stated in terms that justify the fix.

## Related Skills

- **ai-seo**: For citation and discovery in AI-generated answers — the adjacent but distinct goal to this skill's transactional focus. Implement the shared baseline (`llms.txt`, schema) once for both.
- **schema**: Product/Offer/AggregateRating structured data this skill treats as a transactional floor, not just a search-rich-results nicety.
- **product-feed**: The underlying data accuracy (price, stock) this skill depends on being genuinely current, not just present.
- **cro**: For checkout friction from a *human* perspective — this skill covers checkout friction specific to an agent (CAPTCHAs, session assumptions), which is a related but distinct audit.
