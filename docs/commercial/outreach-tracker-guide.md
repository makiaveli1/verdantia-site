# Verdantia first-nine outreach tracker guide

[DRAFT — INTERNAL WORKING SYSTEM]

Purpose: run a small outreach experiment across three segments without turning Verdantia into a spam cannon. The goal is learning: which segment understands the offer fastest, which message earns replies, and which buyer path is reachable.

Related tracker: `docs/commercial/outreach-tracker-first-9.csv`

## Privacy boundary

Before adding named decision-makers, direct emails, private response notes, or objections, move the live tracker to gitignored private storage such as `docs/private/outreach/outreach-tracker-first-9.csv`. Keep only anonymised/template tracker material in GitHub-backed docs.

## First-nine experiment

Do **not** contact all nine at once.

### Batch 1 — highest signal, mixed segments

1. LearnUpon — SME / learning tech
2. Irish Times Training — training provider
3. The Wheel — nonprofit network

Purpose: test the three core angles quickly.

### Batch 2 — refine after Batch 1

4. Poppulo — SME / internal comms
5. The Learning Rooms — training provider
6. Carmichael — nonprofit capacity building

Purpose: reuse what worked and remove what sounded vague.

### Batch 3 — contact only after stronger manual checks

7. Phorest — SME / vertical SaaS
8. Professional Development — training provider
9. Volunteer Ireland — nonprofit / volunteer network

Purpose: these are plausible, but the opening angle needs more precision before contact.

## Tracker statuses

Use these values for `status`:

- `not_started`
- `research_needed`
- `ready_to_contact`
- `contacted`
- `follow_up_due`
- `responded_positive`
- `responded_neutral`
- `responded_negative`
- `meeting_requested`
- `meeting_booked`
- `qualified`
- `not_now`
- `not_fit`
- `closed_no_response`

Use these values for `manual_check_status`:

- `unchecked`
- `website_checked`
- `dm_role_identified`
- `dm_name_identified`
- `contact_route_found`
- `personalization_ready`
- `ready`

Use these values for `decision_maker_checked`:

- `unchecked`
- `role_only`
- `name_found`
- `verified_contact`

Use these values for `response_status`:

- `none`
- `positive`
- `curious_but_unclear`
- `not_now`
- `wrong_person`
- `price_objection`
- `scope_objection`
- `already_solved`
- `no_response`
- `unsubscribe_or_do_not_contact`

## Experiment card

**Primary hypothesis:** training providers will understand Verdantia’s offer faster than SMEs or nonprofits because they already buy/sell training and may need practical AI delivery capacity.

**Secondary hypotheses:**

- SMEs respond better when the message names one workflow category, not general AI adoption.
- Nonprofits respond better to briefing/member-session language than to workshop-sales language.

**Metrics to track:** route quality, named decision-maker found, connection acceptance, reply rate, positive/curious replies, meeting booked, clear need, clear budget path, objection type, and which phrase/angle triggered interest.

**Batch rule:** research all nine first, send only Batch 1 after approval, follow up after 4–6 business days, close/no-response after 10–14 business days, and do not rewrite the whole positioning after one reply or one silence.

**Signal threshold:** minimum viable signal is 2+ replies from 9; strong signal is 2+ qualified conversations from 9. Segment winner means best combination of reply quality, buyer clarity, and route accessibility — not just raw response count.

## Qualification scoring model

Total score: **100 points**.

This is BANT-adjacent, but lighter. Early Verdantia outreach does not have reliable budget/timing data yet, so score what can be inferred without pretending certainty.

| Category | Points | What it means |
|---|---:|---|
| Need / fit | 25 | Is there a clear reason this organisation would care about practical AI training/adoption? |
| Authority clarity | 20 | Can we identify a likely buyer or route to one? |
| Budget proxy | 15 | Does the org likely have capacity to buy training or partner on delivery? |
| Timing / trigger potential | 15 | Is there a plausible reason to care this quarter? |
| Reachability | 15 | Can we reach a real human without heroic archaeology? |
| Strategic value | 10 | Would this teach us something, create proof, or open a channel? |

## Scoring caps

To avoid fantasy scores before real buyer evidence exists:

- If no named decision-maker is found, cap authority at 10/20.
- If no current trigger is found, cap timing at 7/15.
- If the only route is a generic contact form, cap reachability at 8/15.
- For nonprofits without a clear programme budget, cap budget proxy at 8/15.
- Strategic value should not push a lead into Batch 1 if authority and reachability are weak.

Recommended tracker additions before live outreach: `recipient_name`, `recipient_role`, `trigger_source`, `route_quality`, `buying_motion`, and `next_offer`.

### Bands

| Band | Score | Action |
|---|---:|---|
| A | 75–100 | Contact in first two batches after manual check |
| B | 60–74 | Worth contacting, but sharpen the angle first |
| C | 45–59 | Keep warm; research more before outreach |
| Hold | <45 | Do not contact yet |

## Manual check before any outreach

Each prospect needs one verified personalisation line before contact.

Minimum check:

1. Confirm the organisation and website.
2. Find a likely decision-maker or at least a specific function.
3. Check whether LinkedIn or email/contact form is the best route.
4. Add one truthful personalisation line.
5. Choose the message variant.
6. Mark `manual_check_status=ready`.

Do not imply inside knowledge of their AI priorities unless a source confirms it.

## Message variants

- `SME-L&D` — learning, enablement, customer education, people teams.
- `SME-Employee-Engagement` — internal comms, employee communication, content governance.
- `SME-Vertical-SaaS` — support, onboarding, customer education, internal productivity.
- `Training-Partner` — practical GenAI workshop delivery or programme support.
- `Nonprofit-Capacity` — accessible AI literacy and responsible workflow support for stretched teams.

## Outreach boundary

No LinkedIn requests, emails, comments, DMs, or contact form submissions should be sent until Gbemi approves the exact final text for that named recipient.
