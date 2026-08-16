# The Incrementality Checkpoint

A short, reusable pattern any skill in this repo can point to before recommending that the user scale, keep funding, or roll out an activity. It exists because the single most common measurement mistake in marketing isn't a wrong number — it's treating *correlation with an outcome* as *causation of that outcome*, and every category of activity in this repo has its own version of that trap.

**The question, every time:** would this outcome have happened anyway, without the activity? If yes, in whole or in part, the activity isn't earning credit for it — it's claiming credit for it.

## The trap, by activity type

Every skill's version of this trap is structurally the same shape, just wearing different clothes:

- **A referral or loyalty program** rewards a customer for a purchase or referral they were going to make anyway — the program looks like it's driving volume, but it's mostly subsidizing behavior that didn't need subsidizing. (`referrals`, `loyalty`)
- **A save offer or discount** "retains" a customer who was never actually going to cancel, or "converts" a shopper who was going to buy at full price. (`churn-prevention`, `discount-and-clearance`, `offers`)
- **An influencer or co-marketing partnership** gets credited with sales that branded search, direct traffic, or another channel would have captured regardless — the partnership looks efficient because attribution flatters it, not because it caused the lift. (`influencer-marketing`, `co-marketing`, `community-marketing`)
- **A piece of SEO/content** ranks and gets traffic, but the traffic converts at the same rate it would have via another channel — the content gets credit for demand it didn't create, only captured. (`content-strategy`, `seo-audit`, `ai-seo`, `programmatic-seo`)
- **A creative variant** wins an A/B test on a vanity metric (CTR, engagement) that doesn't move the metric that actually matters (purchases, retained revenue). (`ad-creative`, `ads`)
- **A lead magnet or free tool** captures leads who were already going to convert through the normal funnel, inflating its apparent lead-gen value. (`lead-magnets`, `free-tools`)
- **PR coverage** coincides with a sales bump that was actually seasonal, or driven by a concurrent paid push. (`public-relations`)

## Matching effort to stakes

Not every decision needs a formal geo-holdout or PSA test — running one on every $500 experiment wastes more than it protects against. Scale the check to what's actually at risk:

| Stakes | What's proportionate |
|---|---|
| **Low** (small spend, easily reversible, low confidence needed) | A gut-check against this checklist — does the activity plausibly claim credit for something that would've happened anyway? If yes, discount the reported result mentally before acting on it. |
| **Medium** (a program or channel that's becoming a standing budget line) | A lighter test where available — a holdout audience (withhold a random % from a loyalty/referral/retargeting program and compare), or an on/off pulse test for a channel. |
| **High** (a decision that will anchor a recurring budget commitment, or where the reported number materially disagrees with intuition) | A real controlled test — see `attribution/references/measurement-paradigms.md`'s Incrementality section for geo-holdout, PSA, ghost-ads, and holdout-audience designs, and "How to *read* a test" for interpreting the result honestly. |

The proportionality principle matters as much as the test itself — treating every decision as high-stakes burns credibility on the discipline and gets it ignored; treating every decision as low-stakes misses the moments where being wrong actually costs something.

## Using this checkpoint

When a skill's guidance says "scale this," "this is working, do more," or "roll this out" — pause on that specific recommendation and ask the trap question for that activity type above. If the honest answer is "we don't actually know, we're going on the reported number," say so plainly rather than letting a platform-reported or self-reported metric pass as if it were already causal. This is the same discipline `attribution`'s own blind-spots section applies to channel attribution generally — this file is that same discipline, restated for the specific decision each skill is making.
