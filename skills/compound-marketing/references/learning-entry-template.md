# Learning Entry Template

A copy-paste template for the Compound stage — the entry you append to `.agents/marketing-learnings.md` after every loop, win or loss. This is the file that makes campaign #40 start ahead of campaign #12, not level with it.

---

## Blank template (copy this)

```markdown
### <date, ISO form> — <short title>
- **Channel/skill**: <which channel skill this ran through — ads, emails, cro, social, pos-marketing, etc.>
- **Outcome metric**: <the real metric named in the Brief — revenue, retention, qualified reach — not a proxy>
- **What we tried**: <one or two sentences — the hypothesis or the change>
- **What happened**: <the actual result against the outcome metric, with enough context to trust it (sample size, time window, whether the incrementality checkpoint was applied)>
- **The lesson**: <the one-sentence takeaway a future Brief should act on>
- **Apply next time**: <the concrete instruction — what to do differently, or what to keep doing>
```

---

## Fill-in prompts (answer these, in order)

1. **What was the Brief's outcome metric — and did Analyse actually measure that, or something easier to pull?** → *Outcome metric*
2. **What's the one sentence a future Brief needs to know, before it repeats the setup?** → *The lesson*
3. **Is this a keep, a kill, or an "inconclusive, needs more signal"?** State it plainly in *What happened* — don't force a verdict the data doesn't support.
4. **Would a reasonable person reading this entry six months from now, with no other context, know what to do differently?** If not, *Apply next time* is too vague — make it an instruction, not an observation.

If you can't answer 1 and 2 concretely, the entry isn't ready — go back to Analyse instead of writing a placeholder.

---

## Worked examples (a win and a loss)

```markdown
### 2026-08-18 — Free-shipping threshold nudge on cart page
- **Channel/skill**: cro
- **Outcome metric**: average order value (AOV) and net margin per order — not just conversion rate, since a threshold nudge can lift AOV while cutting margin if set too low
- **What we tried**: added a progress bar to the cart page ("$12 away from free shipping") at a threshold 15% above current AOV
- **What happened**: AOV up 9% over a 3-week window (n=2,400 orders), net margin per order flat — the shipping cost absorbed roughly matched the AOV lift. Held even after checking against the prior month's baseline (no seasonal confound).
- **The lesson**: the threshold nudge works, but only break-even on margin at this threshold — the AOV lift is real, not free.
- **Apply next time**: test a threshold 20-25% above AOV next, not 15% — the current one just covers its own cost instead of adding margin.
```

```markdown
### 2026-06-02 — Newsjacking angle on a competitor's product recall
- **Channel/skill**: public-relations
- **Outcome metric**: earned media pickups + a measurable, incremental traffic bump (not just impressions)
- **What we tried**: pitched three trade journalists a reactive angle contrasting our QA process with the competitor's recall
- **What happened**: zero pickups. Two journalists replied that the angle read as opportunistic given the recall involved a safety issue, not a routine defect — this should have been caught by the veto list in `marketing-loops`' newsjacking guardrail before pitching.
- **The lesson**: a competitor's recall involving customer safety is off-limits for a comparative pitch, full stop — not a judgment call to make case-by-case in the moment.
- **Apply next time**: check newsjacking angles against the veto list *before* drafting the pitch, not after a soft no from journalists. Update: this is now a mandatory pre-Draft check for any newsjacking angle, not just recommended.
```

Notice what makes both entries useful even though one is a win and one is a loss: **the lesson is specific enough to change what happens next time**, not a vague "worked well" or "didn't work." The loss entry is arguably more valuable — it turned a bad pitch into a permanent process fix.
