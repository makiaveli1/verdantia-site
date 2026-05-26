# Verdantia website session brief

Use this file to start a separate Hermes/Nero session focused only on the Verdantia website.

## Start command

From WSL:

```bash
cd /home/likwid/projects/verdantia-site
hermes --skills frontend-design,hermes-commercial-discipline,documentation-engineer
```

Or, if launching from anywhere, tell Nero:

> Work in `/home/likwid/projects/verdantia-site`. Load `AGENTS.md` and focus only on the Verdantia website.

## What this workspace is

This is the active Verdantia public website repo, moved out of OneDrive into WSL for healthier Next.js development.

Path:

```txt
/home/likwid/projects/verdantia-site
```

Original copied source:

```txt
/mnt/c/Users/likwi/OneDrive/Documents/New project 2
```

Git remote:

```txt
origin https://github.com/makiaveli1/verdantia-site.git
```

## Current business direction

Verdantia should be a **founder-led AI training and adoption practice**, not merely a personal brand and not a generic AI automation agency.

Positioning:

> Practical AI training and adoption support for teams.

Longer:

> Verdantia helps teams, training providers, and individual professionals move from scattered AI experiments to safe, practical, repeatable AI workflows.

Founder/company frame:

> Verdantia is the vehicle. Gbemi is the trust engine.

The website should make it easy for a buyer to understand what Verdantia does, choose a first step, and start a conversation.

## Commercial offer ladder

The website now points to four offers:

1. **AI Team Briefing** — 60–90 minutes, from €750 remote / from €950 onsite.
2. **Practical AI Workshop** — half day, from €1,750 remote / from €2,250 onsite or customised.
3. **AI Adoption Day** — full day, from €3,000–€3,500.
4. **AI Adoption Sprint** — 2–4 weeks, from €5,500 for a tightly scoped starter sprint; standard €7,500–€12,000 depending on scope.

Individual professional learning labs stay separate: AI Essentials (€95–€150 per seat), AI Workflow Studio (€295–€450 per seat), and AI Workflow Clinic (from €350 for an individual clinic).

Do not blur these into a generic “services” page unless explicitly requested. The offer ladder is the conversion spine.

## Current route structure

- `/` — homepage, now offer-led with a careful individual-learning lane.
- `/offers` — main team offer ladder page with curriculum-shaped delivery detail.
- `/learning` — individual professional AI skills labs and workflow clinic lane.
- `/capabilities` — redirects to `/offers`.
- `/company` — founder-led company story.
- `/contact` — enquiry page with form validation and mailto preparation only.
- `/products` — exists, but should stay secondary unless product strategy is requested.

## Important files

- `AGENTS.md` — full working context and rules.
- `lib/site.ts` — central site data: nav, offers, capabilities, enquiry types.
- `app/page.tsx` — homepage.
- `app/offers/page.tsx` — offer ladder page.
- `components/AIPathfinder.tsx` — interactive recommender that now maps to offers.
- `app/globals.css` — custom CSS system.
- `docs/commercial/` — commercial material and prospect list.

Commercial docs created:

- `verdantia-offer-sheet.md`
- `practical-ai-workshop-outline.md`
- `discovery-questions.md`
- `no-fail-presentation-protocol.md`
- `prospect-starter-list.md`
- `outreach-tracker-first-9.csv`
- `outreach-tracker-guide.md`
- `outreach-copy-first-9.md`
- `visual-content-direction.md`
- `practical-ai-workshop-buyer-one-pager.md`
- `practical-ai-workshop-partner-one-pager.md`
- `verdantia-commercial-review-2026-05-26.md`

## Verification commands

Always run before claiming complete:

```bash
npm run lint
npm run typecheck
npm run build
```

For local viewing:

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
http://localhost:3000/offers
```

## Known constraints

- Contact form does not send email yet. Do not fake it.
- No public case studies/testimonials/logos unless the user provides/approves them.
- Public proof should stay unnamed: say Gbemi has delivered Microsoft Copilot and introductory AI training for public-sector, financial-services, and workplace teams. Do not publicly name underlying client organisations unless explicitly approved later.
- LinkedIn posting and profile edits require explicit approval.
- No external outreach/messages without exact-text approval.
- Avoid “AI transformation partner”, “AI automation agency”, vague AI hype, and public copy that foregrounds Ireland/UK geography by default.

## Good next tasks

1. Visual review with Gbemi on local server.
2. Polish hero line breaks/copy if needed.
3. Decide what to do with `/products`.
4. Turn offer sheet into a downloadable PDF.
5. Build a lightweight outreach tracker from the prospect list.
6. Add real form delivery only after choosing email/provider stack.

## Last known good state

After the offer rewrite, these passed:

```bash
npm run lint
npm run typecheck
npm run build
```

Browser visual QA checked `/`, `/offers`, and `/learning` at desktop/mobile sizes; the offer grid issue was fixed by adding `.offer-catalog` CSS. Contact prefill now keeps offer-only query strings clean: it selects the enquiry type without showing a blank draft preview, while Pathfinder/learning links with a `message` still show the prepared brief preview.
