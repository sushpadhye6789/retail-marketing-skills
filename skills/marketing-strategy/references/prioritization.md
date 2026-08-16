# Prioritization Method

A method for filling in Section 12 (Strategic Priorities) with real choices instead of a wish list. Use this when the user's draft priorities list is longer than 4 items, has nothing marked as cut, or reads like a list of things that would all be nice to do.

The core failure mode this fixes: a "strategy" that's actually just an inventory of every idea that came up in the conversation, with no ranking and no tradeoffs. That's a backlog, not a strategy.

---

## Step 1: Name the binding constraint

Before ranking ideas, identify the one thing actually limiting growth right now. Ask directly: **"If you could only fix one thing about the business this quarter, what would move the needle most?"**

Common binding constraints and what they imply:

| Binding constraint | What it implies about priorities |
|---|---|
| **Budget** | Prioritize the highest-ROI, lowest-cost-to-test channels first; defer anything requiring upfront spend to prove out |
| **Team capacity** | Prioritize fewer, larger bets over many small experiments — context-switching costs more than the constraint suggests |
| **Product readiness** | Marketing priorities should be about learning (research, positioning, small tests) rather than scaling spend into a product that isn't ready to convert what it attracts |
| **Channel access / audience size** | Prioritize channel or audience-building work itself as a priority, not just campaigns on top of an audience that doesn't exist yet |
| **Conversion rate** | Prioritize CRO and offer work over acquisition spend — pouring more traffic into a leaky funnel wastes the constraint further up |

If the user names more than one constraint as equally binding, push back — in practice one is usually more binding than the others; find it by asking "if we fixed [constraint A] but not [constraint B], would we actually grow?"

## Step 2: Score candidate priorities against the constraint

For each candidate priority (not tactic — a priority is a direction, like "build a subscription program," not a tactic like "add a discount popup"), score three things on a 1-5 scale:

- **Constraint fit**: how directly this addresses the named binding constraint
- **Confidence**: how sure you are this will actually work, based on evidence you already have (not hope)
- **Reach**: how much of the business this priority touches if it works

Multiply or sum — the exact math matters less than forcing a side-by-side comparison instead of judging each idea in isolation. A priority that scores well on all three is a strong candidate; one that scores well only on "reach" (it would matter if it worked, but you have no evidence it will, and it doesn't address the actual constraint) is the classic wish-list item that feels important but isn't the right bet right now.

## Step 3: Cut, don't just rank

Ranking alone doesn't produce a strategy — a ranked list of 8 items is still 8 commitments. After scoring:

1. Take the top 2-4 by score.
2. For everything else, write one line saying explicitly why it's not this cycle — not "later," a real reason ("doesn't address the binding constraint," "no evidence it'll work yet," "team capacity doesn't support a 5th priority").
3. Put the cut list in Section 12's "Explicitly deprioritized" field. A strategy document that only shows what you're doing, never what you rejected, reads as unconsidered — the deprioritized list is evidence the choice was actually made.

## Step 4: Trace each surviving priority back to the goal

For each of the 2-4 priorities that survived, state in one sentence how it connects to the business goal in Section 13. If you can't state the connection plainly, the priority probably got picked because it was easy or interesting, not because it's strategic — reconsider it.

---

## Worked example: weak vs. strong

**Weak (wish-list, not a strategy):**
> This cycle's priorities:
> 1. Improve SEO
> 2. Launch a referral program
> 3. Try TikTok
> 4. Redesign the homepage
> 5. Start email marketing
> 6. Run some paid ads
>
> Explicitly deprioritized: (blank)
> Binding constraint: (blank)

Six items, nothing cut, no stated constraint — this is every idea from a brainstorm, not a strategy.

**Strong (same business, after running the method above):**
> Binding constraint: Conversion rate — traffic is healthy (paid + organic both growing), but checkout conversion is well below category benchmarks and every acquisition dollar is being wasted downstream of a leaky funnel.
>
> This cycle's priorities:
> 1. **Checkout and product-page CRO** — directly addresses the binding constraint; we already have session-recording evidence showing where users drop off, so confidence is high, and it touches 100% of paid and organic traffic.
> 2. **Post-purchase Subscribe & Save offer redesign** — addresses the same constraint from the retention side (a bad first-purchase guarantee/offer is showing up in cancel-flow feedback as a reason customers don't resubscribe); moderate confidence, high reach among existing customers.
>
> Explicitly deprioritized (and why):
> - TikTok — no evidence it converts for this product yet, and it's an acquisition play when the constraint is downstream of acquisition. Revisit once conversion rate is fixed and the funnel can actually capture new traffic.
> - Homepage redesign — real problem, but doesn't address the binding constraint (most conversion-relevant traffic lands on product pages, not the homepage). Defer.
> - New paid channels — same logic as TikTok: pouring more traffic into a leaky funnel wastes the new spend.

The strong version has fewer priorities, a named constraint, and an honest account of what got cut and why — that's what makes it usable by every other skill that reads this document, instead of a menu they have to re-prioritize themselves.
