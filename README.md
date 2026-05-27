# Verdantia website

Verdantia is a founder-led website for practical AI training, learning, and adoption support. The public positioning is intentionally narrow: help teams, training providers, community organisations, and individual professionals move from scattered AI use to safe, practical, repeatable workflows.

This repository contains the public website at `https://verdantia.it`, built with Next.js App Router, React, TypeScript, and a custom CSS design system.

## What the site is for

The website is the front door for Verdantia's commercial offer:

- Explain the problem clearly: people are already trying AI tools, but use is scattered, risky, or hard to repeat.
- Present the team offer ladder: briefing, workshop, adoption day, and adoption sprint.
- Separate organisation support from individual professional learning labs.
- Give visitors a guided way to choose a starting point through the AI Pathfinder.
- Convert interest into a useful enquiry brief without pretending the contact form has a live backend.

The site should not position Verdantia as a generic automation agency. Automation, custom assistants, and agents are downstream options after the team understands the workflow, data, permission, and review model.

## Live positioning

Core shorthand:

> Verdantia helps small and mid-sized teams move from scattered AI experiments to safe, practical, repeatable AI workflows.

Founder/company split:

- Verdantia is the commercial vehicle: website, offers, contracts, workshops, retainers, and delivery materials.
- Gbemi Akadiri / Oluwagbemi Enoch Akadiri is the visible trust engine: teaching, speaking, field notes, practical examples, and founder-led delivery.
- Public proof should stay careful. Do not invent client logos, case studies, named testimonials, or unsupported metrics.

## Technology stack

- Next.js `16.2.6` with the App Router
- React `19.2.6`
- TypeScript `6.0.3`
- ESLint `9`
- Custom CSS in `app/globals.css`
- Google fonts loaded through `next/font`
  - Newsreader for display typography
  - Montserrat for body copy
  - Cinzel for logo/brand lettering
- `@chenglou/pretext` is installed for creative text/visual experimentation
- Static assets live under `public/assets`

Current local tool versions used during the latest README pass:

- Node.js `v24.14.0`
- npm `11.9.0`

## Quick start

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

If port `3000` is already in use, run Next on another port:

```bash
npm run dev -- -p 3010
```

In WSL, if Windows cannot reach a WSL-hosted server through `127.0.0.1`, try `localhost` first, then the WSL network IP if needed.

## Screenshots

The screenshots below are committed so GitHub visitors can understand the current public site without running it locally. They were captured from the local Next.js dev server after the latest design and README pass.

### Homepage, desktop dark theme

Full homepage capture showing the premium editorial direction, offer ladder, support pathway, deliverables, learning-labs lane, founder section, principles, and final CTA.

<img src="docs/screenshots/home-desktop-dark.jpg" alt="Verdantia homepage in desktop dark theme" width="900">

### Offers page, desktop light theme

Commercial offer ladder in light mode, including the four team offers, pricing anchors, route comparison, and practical starting-point framing.

<img src="docs/screenshots/offers-desktop-light.jpg" alt="Verdantia offers page in desktop light theme" width="900">

### AI Pathfinder, desktop dark theme

Seven-question decision aid for choosing a practical starting point. The result panel updates live and can hand a prepared brief to the contact page.

<img src="docs/screenshots/pathfinder-desktop-dark.jpg" alt="Verdantia AI Pathfinder page in desktop dark theme" width="900">

### Homepage, mobile dark theme

Narrow mobile capture used to check the same homepage hierarchy, spacing, decorative layers, and CTA flow at phone width.

<img src="docs/screenshots/home-mobile-dark.jpg" alt="Verdantia homepage in mobile dark theme" width="320">

## Available scripts

```bash
npm run dev        # Start the Next.js development server
npm run build      # Create an optimized production build
npm run start      # Start the production server after a build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
```

Before pushing public-site changes, run:

```bash
npm run lint
npm run typecheck
npm run build
git diff --check -- app components lib README.md
```

## Public routes

| Route | Purpose | Notes |
| --- | --- | --- |
| `/` | Homepage | Main narrative: practical AI training/adoption, offer ladder, capabilities, tools, individual lane, founder signal, final CTA. |
| `/offers` | Commercial offer ladder | Detailed team offers, pricing anchors, route comparison, Pathfinder teaser. |
| `/pathfinder` | AI Pathfinder | Seven-question guided decision aid that recommends a practical starting point. |
| `/learning` | Individual learning labs | Separate route for professionals who want personal AI fluency or workflow support. |
| `/company` | Founder/company story | Founder-led credibility, principles, and positioning boundaries. |
| `/contact` | Enquiry builder | Validates fields and prepares a mailto enquiry. It does not send email directly. |
| `/products` | Future product direction | Secondary page for future product thinking; not in the main navigation. |
| `/capabilities` | Redirect | Redirects to `/offers` for legacy/internal compatibility. |
| `/robots.txt` | Search crawler rules | Generated by `app/robots.ts`. |
| `/sitemap.xml` | Sitemap | Generated by `app/sitemap.ts`. |

The current sitemap includes:

- `/`
- `/offers`
- `/pathfinder`
- `/learning`
- `/company`
- `/contact`

`/products` exists but is intentionally lower hierarchy and not currently listed in the sitemap.

## Project structure

```txt
app/
  layout.tsx              Root layout, global metadata, font setup, theme init, header/footer shell
  page.tsx                Homepage content and homepage-only sections
  globals.css             Full visual system, layout rules, light/dark theme, responsive styling
  offers/page.tsx         Team offer ladder and commercial route page
  pathfinder/page.tsx     Dedicated AI Pathfinder page
  learning/page.tsx       Individual professional learning labs page
  company/page.tsx        Founder/company story page
  contact/page.tsx        Enquiry page shell
  products/page.tsx       Future product direction page
  capabilities/page.tsx   Redirects to /offers
  robots.ts               robots.txt generation
  sitemap.ts              sitemap.xml generation

components/
  AIPathfinder.tsx        Interactive seven-question Pathfinder UI
  OfferLadder.tsx         Offer cards used on homepage/offers routes
  ContactForm.tsx         Client-side validated enquiry builder and mailto handoff
  HomeExperience.tsx      Homepage interactive/visual experience components
  SiteHeader.tsx          Header, navigation, mobile menu, theme toggle
  SiteFooter.tsx          Footer navigation and contact details
  PageHero.tsx            Reusable page hero component
  BrandMark.tsx           Verdantia mark rendering
  ButtonLink.tsx          Shared link-as-button component

lib/
  site.ts                 Canonical site URL, navigation, offers, learning tracks, capabilities, enquiry types
  pathfinder.ts           Pathfinder steps, scoring, recommendation logic, contact handoff builder
  metadata.ts             Per-page metadata helper for canonical, Open Graph, and Twitter metadata

public/assets/
  Static brand, Open Graph, icon, portrait, motif, and decorative assets

docs/
  commercial/             Offer sheets, workshop materials, operating model, outreach support docs
  workspace/              Session/workspace notes
```

## Content model

Most repeatable commercial content lives in `lib/site.ts`:

- `siteUrl`: canonical public URL
- `navItems`: main navigation links
- `contactEmail`: public enquiry email
- `offers`: the four organisation offers
- `toolGroups`: AI tool categories shown on the homepage
- `individualLearningTracks`: the separate professional learning-labs lane
- `capabilities`: support areas Verdantia can include
- `principles`: public operating principles
- `enquiryTypes`: accepted enquiry categories for the contact form

When changing public copy that appears in multiple places, check `lib/site.ts` before editing page markup directly.

## Offer ladder

The organisation offer ladder is the site's commercial spine:

| Offer | Format | Public guide price | Purpose |
| --- | --- | --- | --- |
| AI Team Briefing | 60-90 minutes | From EUR 750 remote / from EUR 950 onsite | Shared baseline, plain-English context, risks, Q&A, and next-step clarity. |
| Practical AI Workshop | Half day | From EUR 1,750 remote / from EUR 2,250 onsite or custom | Hands-on practice with everyday AI tools, safer prompting, and responsible-use habits. |
| AI Adoption Day | Full day | From EUR 3,000-3,500 | Training plus workflow mapping, use-case discovery, starter prompts, and roadmap. |
| AI Adoption Sprint | 2-4 weeks | From EUR 5,500; standard EUR 7,500-12,000 depending on scope | Follow-up support to map priority work, train, build reusable materials, and make adoption stick. |

The offer order matters. Keep light, practical starting points visible before heavier support.

## AI Pathfinder

The AI Pathfinder is implemented across:

- `app/pathfinder/page.tsx`
- `components/AIPathfinder.tsx`
- `lib/pathfinder.ts`

It asks seven questions:

1. Buyer context
2. Current AI stage
3. Tools in the picture
4. Type of support needed
5. Workflow clarity
6. Risk or careful-handling area
7. Realistic format

For team/organisation buyers, answers are scored against the four team offers:

- AI Team Briefing
- Practical AI Workshop
- AI Adoption Day
- AI Adoption Sprint

For individuals, it routes toward the professional learning-labs lane. For training providers, community groups, and nonprofits, it routes toward a partner/community conversation.

The Pathfinder also builds a plain-text brief and a `/contact` URL with query parameters:

```txt
/contact?enquiryType=...&message=...
```

`ContactForm.tsx` reads those parameters and pre-fills the enquiry builder.

## Contact form behaviour

The contact form is intentionally honest:

- It validates required fields on the client.
- It prepares a mailto link to `oluwagbemi@verdantia.it`.
- It lets the visitor copy the prepared enquiry brief.
- It does not claim the enquiry was sent.
- It does not call a backend, CRM, form provider, or email API.

If a backend is added later, update both the implementation and the public copy. Do not leave the UI implying delivery before that path is real.

## Design system and themes

The visual system lives mostly in `app/globals.css`.

Design direction:

- Warm editorial AI field guide, not neon SaaS dashboard.
- Premium, practical, calm, and trustworthy.
- Dark evergreen base with ivory, sage, warm gold, paper textures, route motifs, and artifact cards.
- Strong focus on readable small labels, dark-mode contrast, and restrained decorative motion.

Theme behaviour:

- The root layout injects a `beforeInteractive` script that reads `localStorage` key `verdantia-theme`.
- Valid theme choices are `light`, `dark`, and `system`.
- The resolved theme is written to `document.documentElement.dataset.theme` before React hydration to avoid theme flash.
- The header includes the visible theme toggle.

Accessibility expectations:

- Preserve the skip link in `app/layout.tsx`.
- Keep buttons and links visibly named.
- Maintain `aria-live` status updates in the Pathfinder recommendation.
- Test dark and light themes after CSS changes.
- Avoid decorative layers that sit on top of important copy.

## Metadata, SEO, and public URL

Canonical site URL:

```ts
export const siteUrl = "https://verdantia.it";
```

Global metadata is defined in `app/layout.tsx`.

Per-page metadata should use `pageMetadata` from `lib/metadata.ts`, which sets:

- page title
- page description
- canonical URL
- Open Graph metadata
- Twitter card metadata
- default Verdantia Open Graph image

Sitemap routes are defined in `app/sitemap.ts`. Update it when adding/removing important public routes.

## Development workflow

1. Sync first:

```bash
git fetch origin
git pull --rebase origin main
```

2. Install dependencies if needed:

```bash
npm install
```

3. Start development:

```bash
npm run dev
```

4. Make changes.

5. Run verification:

```bash
npm run lint
npm run typecheck
npm run build
```

6. Smoke public routes if a dev server is running:

```bash
for path in / /offers /pathfinder /learning /contact /company /products /capabilities; do
  printf '%-14s ' "$path"
  curl -sS -o /dev/null -w '%{http_code} %{redirect_url}\n' "http://127.0.0.1:3000$path"
done
```

Expected route smoke result:

```txt
/              200
/offers        200
/pathfinder    200
/learning      200
/contact       200
/company       200
/products      200
/capabilities  307 http://127.0.0.1:3000/offers
```

7. Check staged output before commit:

```bash
git status --short --branch
git diff --check -- app components lib README.md
git diff --stat
```

## Release hygiene

Before pushing public-site changes:

- Inspect `git status --short --branch`.
- Stage intentional files only.
- Avoid committing local generated artifacts such as `.next/`, `node_modules/`, `.hermes/`, screenshots, temporary QA files, and private docs.
- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- Run `git diff --cached --check` after staging.
- Scan staged changes for obvious secrets before committing.
- Check that `next-env.d.ts` or other generated framework files were not accidentally changed.
- Push only after explicit approval, because this is a public website.

For secret scanning, check staged source for provider API keys, GitHub tokens, private-key blocks, cloud access keys, auth cookies, and `.env` contents. Keep the scan conservative and treat any match as a blocker until reviewed. Avoid printing secret values back into logs or chat.

## Copy and positioning rules

Use these rules when changing public pages:

- Lead with practical AI training, learning, and adoption support.
- Keep automation/custom assistants downstream of diagnosis and workflow clarity.
- Prefer concrete outcomes over hype.
- Avoid jargon-heavy, inside-baseball copy.
- Avoid comic/internal phrases in public pages.
- Do not overclaim transformation, scale, client proof, or delivery capacity.
- Do not name underlying client organisations unless explicitly approved.
- Keep the individual learning-labs lane distinct from team/organisation offers.
- Keep public copy buyer-safe: clear, grounded, and useful.

## Private and commercial docs

Commercial support materials live under `docs/commercial/`.

Useful files include:

- `docs/commercial/verdantia-offer-sheet.md`
- `docs/commercial/practical-ai-workshop-buyer-one-pager.md`
- `docs/commercial/practical-ai-workshop-partner-one-pager.md`
- `docs/commercial/practical-ai-workshop-outline.md`
- `docs/commercial/discovery-questions.md`
- `docs/commercial/no-fail-presentation-protocol.md`
- `docs/commercial/workshop-pack-v1/README.md`

Private outreach/proof artifacts should not be committed. `.gitignore` excludes `docs/private/`, private proof-register files, and generated local sales exports.

## Known boundaries and next improvements

Current boundaries:

- No form backend yet; contact is mailto/copy only.
- No public case-study system yet.
- `/products` is intentionally secondary.
- AI Pathfinder is a decision aid, not a maturity diagnostic or replacement for discovery.

Good future improvements:

- Add a real form/email provider and update the contact UI honestly.
- Add downloadable offer PDFs from the commercial docs.
- Add a lightweight proof system once public-safe proof is approved.
- Decide whether `/products` should stay public, be hidden, or be reframed.
- Add automated end-to-end checks for Pathfinder branch coverage and contact prefill.

## Latest local verification

Last verified during the README update on `2026-05-27` with:

```bash
npm run lint
npm run typecheck
npm run build
```

Additional checks used in recent site work:

- desktop and mobile route smoke checks
- light/dark contrast probes
- horizontal overflow checks
- duplicate ID checks
- unnamed interactive-control checks

## Repository

```txt
https://github.com/makiaveli1/verdantia-site.git
```

Default branch:

```txt
main
```

Direct pushes to `main` have been used for this project when explicitly approved by Gbemi.
