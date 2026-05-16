# Verdantia Site Agent Notes

## Overview
This repository contains the Verdantia Limited public website. It is a mostly static company site for practical AI consulting, training, adoption support, and future Verdantia products.

## Stack
- Next.js App Router
- React
- TypeScript
- Custom CSS design system in `app/globals.css`
- Static assets in `public/assets`

## Commands
- Install: `npm install`
- Development: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Important Directories
- `app/`: routes, layouts, metadata, robots, sitemap, global CSS
- `components/`: shared layout, brand, CTA, and form components
- `lib/`: content/data helpers
- `public/assets/`: generated and optimized Verdantia visual assets

## Coding Conventions
- Keep the site mostly static unless a feature needs client-side behavior.
- Preserve the Verdantia tone: calm, practical, premium, Irish-business friendly.
- Avoid generic AI visuals, neon gradients, robots, fake dashboards, and exaggerated AI hype.
- Keep product work separated from the consulting story. Do not publish named product concepts unless explicitly requested.
- Do not fake contact form delivery. Add backend/email integration explicitly when available.

## UI Verification
- Check desktop, tablet, and mobile widths after visual changes.
- Watch for horizontal overflow, clipped CTAs, crowded navigation, and text over busy imagery.
- Maintain semantic heading order, labelled form fields, focus states, and accessible color contrast.

## Security Rules
- Never commit secrets or private credentials.
- Use environment variables for future integrations.
- Validate form input on the client, and add server-side validation when backend handling is introduced.

## Definition of Done
- Relevant lint, typecheck, and build commands pass or failures are documented.
- Visual/runtime paths are checked for changed pages.
- The final report includes changed files, validation evidence, visual QA, risks, and next steps.
