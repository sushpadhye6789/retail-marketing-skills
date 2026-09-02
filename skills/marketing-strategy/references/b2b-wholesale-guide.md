# B2B / Wholesale Guide

What Section 16 (B2B / Wholesale Channel) means, and which skills in this repo are the toolkit for that channel specifically.

## This is an additive flag, not a fourth distribution model

Section 15 (Distribution Model — ecom-only / own stores / dealers) describes *how the business reaches its end consumer*. Section 16 is a different, orthogonal question: *does the business also sell to other businesses*, alongside whatever consumer-facing model it runs. A business can be any combination — ecom-only for consumers and also take wholesale accounts; a dealer network for consumers and a separate direct-to-trade program; own stores with no B2B side at all. Most retail/ecommerce businesses using this repo will answer "no" to Section 16 and never need this file.

**"Sells to businesses" here means the buyer is purchasing to resell, use operationally, or stock for their own trade/institutional purposes — not a business owner who happens to be shopping as an individual consumer.** A tradesperson buying one unit at retail price through the normal storefront isn't a wholesale customer; a hardware store buying a pallet at a negotiated trade price is.

## Why this repo has B2B-flavored content at all

This repo started as a SaaS/B2B marketing skill set and was substantially converted and extended for retail/ecommerce. Most of the original B2B content was either replaced, dual-scoped (the same skill now covers both, with clear routing — `ads`, `attribution`, `offers`, `pricing`), or left as a parallel track inside a skill rather than deleted, because it's exactly the right toolkit for a business that also sells wholesale. If you land in one of the skills below and it reads as B2B-focused, that's deliberate — it's there for the wholesale/business-buyer side of the business, not a leftover nobody got around to converting.

## The two B2B segments — Business (SMB) vs. Commercial (large)

Section 16 asks which segment(s) apply because the toolkit genuinely differs, not just the target list:

| | **Business (small/medium)** | **Commercial (large)** |
|---|---|---|
| **Buyer** | Independent retailer owner, small trade account, single-location boutique | Category manager, procurement team, buying committee |
| **Sales motion** | Self-serve or lightly rep-assisted; catalog/price-driven | RFP/tender or named-account sales-led; relationship- and contract-driven |
| **Cycle length** | Days to weeks | Months, often 6+ |
| **Content needs** | Line sheets, order forms, catalog, simple onboarding | Formal proposals, compliance/vendor documentation, category business cases |
| **Volume per account** | Low-to-moderate, many accounts | High, few accounts |
| **Primary skill lean** | `cold-email`, `prospecting`, self-serve `revops` pipeline | `sales-enablement`, `ads` → ABM playbook, `revops`'s account-based tracking |

Running both segments at once is common — the toolkit below is tagged by which segment it best fits, but most skills flex to serve either with different inputs (a shorter, catalog-led `sales-enablement` deck for a Business account vs. a full proposal for a Commercial one).

## The toolkit

| Skill / reference track | What it's for on the B2B/wholesale side | Best fit |
|---|---|---|
| `cold-email` | Outbound emails to prospective wholesale/trade accounts — a motion that has no consumer-storefront equivalent | Business — high-volume outbound at low cost per account |
| `prospecting` | Finding and qualifying wholesale/trade-account prospects to reach out to | Business — building volume in a self-serve pipeline |
| `sales-enablement` | Sell-in decks, one-pagers, and objection-handling docs for a sales rep working a wholesale/trade account, as distinct from `trade-marketing`'s retail-buyer sell-in (see below) | Both — a one-pager for a Business account, a full formal proposal for a Commercial one |
| `revops` | Lead lifecycle, scoring, routing, and pipeline management for a wholesale/business-account sales motion — the CRM-pipeline discipline a consumer storefront doesn't need | Both — a lightweight scored pipeline for Business volume, an account-based/named-account pipeline for Commercial |
| `marketing-plan` | Its AARRR-structured planning methodology is drawn from B2B/SaaS growth patterns; most useful for planning the wholesale side specifically, alongside (not instead of) the consumer-facing plan | Both |
| `ads` → `references/b2b-paid-playbook.md`, `references/linkedin-b2b-playbook.md` | General B2B paid playbooks for reaching business buyers | Business — volume-oriented lead gen at a lower deal-size threshold |
| `ads` → `references/abm-playbook.md` | Named-account targeting — the playbook's own go/no-go gate (deal size ~$25K+, target list ≥ ~1,000 or accepting 1:1/1:few economics, 60+ day cycle) is effectively a Commercial-segment filter | Commercial — skip entirely for a pure Business-segment motion, the economics don't clear |
| `attribution` → the B2B track in `references/by-business-type.md` | Attribution modeling for a longer, sales-assisted B2B buying cycle, distinct from the ecommerce/DTC track in the same file | Both, weighted toward Commercial's longer cycle |
| `marketing-strategy` → Section 3 (Personas, B2B only) | Multi-stakeholder buying-committee personas — a real concept for a Commercial buying committee, less relevant for a single-decision-maker Business account | Commercial |
| `offers` → the Direct-response / B2B bucket in `references/offer-formats.md` | Offer construction for a wholesale/high-ticket B2B sale, alongside the ecommerce/DTC offer formats in the same reference | Both |

**Not on this list**: `trade-marketing`. That skill is about earning a listing with a *retail buyer* (a hardware chain deciding whether to stock your product) — a real B2B relationship, but a different one from selling wholesale directly to trade/business end-users. If both apply, use both skills for their respective relationships. Note that `trade-marketing`'s own buyer relationship spans the same two segments — an independent-store buyer vs. a national chain's category manager/category captain — see that skill's "The Target" section.

## Using this guide

When Section 16 says the B2B/wholesale channel applies, treat the skills above as in-scope for that channel's work — run them the same way any other skill runs, with the understanding that they're describing the wholesale side, not the whole business, and check which segment(s) Section 16 named before leaning too hard on a Commercial-only tactic (like ABM) for a Business-segment motion where the economics don't support it, or vice versa. When Section 16 says it doesn't apply, these skills simply aren't relevant to this business, and content that reads as B2B-focused elsewhere in the repo (the parallel reference tracks in `ads`/`attribution`/`offers`, or Section 3's B2B-only personas) can be skipped without missing anything the consumer-facing business needs.

**Keeping B2C and B2B from interfering with each other**: this whole section — Section 16, this guide, and every skill/reference track it points to — is strictly additive to the consumer-facing business described in Sections 1-15. A skill run for the Business or Commercial B2B segment should never change default guidance for the consumer storefront (Section 15's own model), and a skill run for the consumer side should never assume a wholesale motion exists unless Section 16 says so. Where a single skill is genuinely dual-scoped (`ads`, `attribution`, `offers`, `marketing-plan`), it keeps the two tracks in clearly separate reference files or sections rather than blending them — if a recommendation from one track leaks into the other (e.g., ABM-style named-account tactics showing up in D2C ad guidance), that's a bug in that skill, not an expected side effect of this section existing.
