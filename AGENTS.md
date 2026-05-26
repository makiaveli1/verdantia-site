# Verdantia website workspace notes

## Current strategic direction

Verdantia is a founder-led AI training and adoption practice.

Core positioning:

> Verdantia helps small and mid-sized teams move from scattered AI experiments to safe, practical, repeatable AI workflows.

Founder/company split:

- Verdantia is the commercial vehicle: website, contracts, proposals, workshops, retainers, subcontractors, procurement.
- Gbemi / Oluwagbemi Enoch Akadiri is the visible trust engine: LinkedIn, speaking, teaching, practical field notes, workshops.
- Best shorthand: **Verdantia is the vehicle. Gbemi is the trust engine.**

Do not turn Verdantia into a generic AI automation agency. Automation/custom assistants are downstream after diagnosis.

## First-market focus

Primary early segments:

1. SMEs and smaller corporate teams.
2. Training providers that need practical GenAI delivery capacity.
3. Nonprofits/community organisations for accessible AI literacy and proof-building routes.
4. Individual professionals as a separate learning-labs lane, without diluting the B2B/team-adoption offer.

Schools/education are secondary unless the brief is specifically staff AI literacy, teacher/admin workload support, or responsible-use guidance.

## Offer ladder

The site should keep the offer ladder clear and buyable:

1. **AI Team Briefing**
   - 60–90 minutes
   - From €750 remote / from €950 onsite
   - Shared baseline, AI basics, practical examples, risks, Q&A, recommended next step.

2. **Practical AI Workshop**
   - Half day
   - From €1,750 remote / from €2,250 onsite or customised
   - Tool literacy, safe prompting, role-based practice, responsible-use checklist.

3. **AI Adoption Day**
   - Full day
   - From €3,000–€3,500
   - Workshop plus workflow mapping, use-case discovery, starter prompt library, adoption roadmap.

4. **AI Adoption Sprint**
   - 2–4 weeks
   - From €5,500 for a tightly scoped starter sprint; standard €7,500–€12,000 depending on scope
   - Discovery, training, workflow/prompt pack, safe-use guidance, adoption roadmap, follow-up support.

Revenue logic: €5k/month can come from two full-day workshops or one adoption sprint plus one smaller engagement.

## Website state

Repo path:

```txt
/home/likwid/projects/verdantia-site
```

Original Windows/OneDrive source copied from:

```txt
/mnt/c/Users/likwi/OneDrive/Documents/New project 2
```

Remote:

```txt
https://github.com/makiaveli1/verdantia-site.git
```

Current stack:

- Next.js App Router
- React
- TypeScript
- Custom CSS design system in `app/globals.css`
- Static assets in `public/assets`

Important routes:

- `/` — homepage, now structured around practical AI training/adoption and the offer ladder.
- `/offers` — main commercial offer ladder page.
- `/capabilities` — redirects to `/offers`.
- `/company` — founder-led/company-first story.
- `/contact` — enquiry page, form prepares mailto only; email backend is not connected.
- `/products` — still exists but should remain secondary/lower hierarchy unless explicitly requested.

## Files and docs to know

Commercial docs live in:

```txt
docs/commercial/
```

Key files:

- `docs/commercial/verdantia-offer-sheet.md`
- `docs/commercial/practical-ai-workshop-buyer-one-pager.md`
- `docs/commercial/practical-ai-workshop-partner-one-pager.md`
- `docs/commercial/practical-ai-workshop-outline.md`
- `docs/commercial/discovery-questions.md`
- `docs/commercial/no-fail-presentation-protocol.md`
- `docs/commercial/prospect-starter-list.md`
- `docs/workspace/SESSION_BRIEF.md`

Content/data:

- `lib/site.ts` contains nav items, offers, capabilities, principles, and enquiry types.
- `components/AIPathfinder.tsx` recommends one of the four offers and pre-fills `/contact` query params.

## Commands

Install:

```bash
npm install
```

Development:

```bash
npm run dev
```

Verification:

```bash
npm run lint
npm run typecheck
npm run build
```

Quick local check:

```bash
curl -I http://localhost:3000
curl -I http://localhost:3000/offers
curl -I http://localhost:3000/capabilities
```

Expected: `/` and `/offers` return 200; `/capabilities` redirects to `/offers`.

## Design and copy rules

- Make the first 5 seconds clear: practical AI training and adoption support for teams.
- Prefer concrete outcomes over broad hype.
- Preserve the Verdantia tone: calm, practical, premium, and buyer-safe; do not foreground Ireland/UK geography in public messaging unless it is contextually useful.
- Avoid generic AI visuals, neon gradients, robots, fake dashboards, and exaggerated transformation language.
- Do not fake case studies, client logos, testimonials, or proof.
- Do not publish named product concepts unless explicitly requested.
- Keep automation/custom assistants below training/adoption in the hierarchy.
- Do not fake contact form delivery. It currently validates and prepares the enquiry via mailto only.

## Delivery reliability standard

Every workshop/presentation should have a no-fail delivery path:

- PDF/offline deck.
- Preloaded tabs.
- Screenshots/video backups for fragile demos.
- Tech check 30–60 minutes before.
- Fallback path: if tech fails, teach from the framework and prepared examples.

## Public proof boundary

Verdantia can say Gbemi has delivered Microsoft Copilot and introductory AI training for public-sector, financial-services, and workplace teams.

Do **not** publicly name underlying client organisations. Named examples are private proof only unless Gbemi explicitly approves the exact public wording later.

## Current verification status

Last verified in this workspace on 2026-05-26 after the commercial review/docs hardening:

```bash
npm run lint
npm run typecheck
npm run build
```

All passed.

Browser visual QA previously checked `/` and `/offers`; the offer grid issue was fixed by adding `offer-catalog` grid rules.

## Recommended next website tasks

1. Review the live local site with Gbemi.
2. Tighten homepage hero if the line breaks feel too tall.
3. Decide whether `/products` should be hidden from public nav entirely or left as a quiet future-product page.
4. Add a real lead-capture/email backend only after choosing the provider.
5. Create downloadable PDF versions of the offer sheet and workshop outline.
6. Build a simple outreach tracker from `docs/commercial/prospect-starter-list.md`.

## External action safety

Do not publish, post, email, submit forms, or push commits without explicit approval.

Drafts are safe. Local edits are safe. External-facing sends/publishes require approval of exact text.
