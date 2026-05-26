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

> Verdantia helps small and mid-sized teams move from scattered AI experiments to safe, practical, repeatable AI workflows.

Founder/company frame:

> Verdantia is the vehicle. Gbemi is the trust engine.

The website should make it easy for a buyer to understand what Verdantia does, choose a first step, and start a conversation.

## Commercial offer ladder

The website now points to four offers:

1. **AI Team Briefing** — 60–90 minutes, €500–€750.
2. **Practical AI Workshop** — half day, €1,250–€1,750.
3. **AI Adoption Day** — full day, €2,250–€3,000.
4. **AI Adoption Sprint** — 2–4 weeks, €3,500–€6,000.

Do not blur these into a generic “services” page unless explicitly requested. The offer ladder is the conversion spine.

## Current route structure

- `/` — homepage, now offer-led.
- `/offers` — main offer ladder page.
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
- LinkedIn posting and profile edits require explicit approval.
- No external outreach/messages without exact-text approval.
- Avoid “AI transformation partner”, “AI automation agency”, and vague AI hype.

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

Browser visual QA checked `/offers`; card grid layout looked clean after adding `.offer-catalog` CSS.
