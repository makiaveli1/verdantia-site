# Verdantia frontend polish and advanced UI plan

> **For Hermes:** Use this as the working implementation plan for the next Verdantia frontend/design pass. Do not publish, push, or deploy without explicit approval.

**Goal:** Raise Verdantia from “clear, calm, founder-led AI adoption site” to “premium, memorable, professional AI training/adoption experience” using stronger visual storytelling, richer but accessible motion, better section pacing, and sharper conversion UX.

**Strategic constraint:** Verdantia is not a generic AI automation agency. The site must stay grounded in practical AI training, adoption support, workflow mapping, and responsible-use guidance for Ireland/UK SMEs, training providers, and community organisations. Cool is allowed. Fake scale, neon AI sludge, and SaaS dashboard cosplay are not.

**Current stack:** Next.js App Router, React 19, TypeScript, custom CSS in `app/globals.css`, static assets in `public/assets`, no animation library currently installed.

---

## 1. Evidence gathered

### Local site inspected

Routes inspected visually and structurally:

- `/`
- `/offers`
- `/company`
- `/contact`
- `/capabilities` redirect checked by curl

Commands run:

```bash
npm run lint       # passed
npm run typecheck  # passed
npm run build      # passed
curl -I http://localhost:3000/
curl -I http://localhost:3000/offers
curl -I http://localhost:3000/capabilities
```

Observed status:

- `/` returns 200.
- `/offers` returns 200.
- `/capabilities` returns 307 redirect to `/offers`.
- Production build completes successfully.

### Reference sites inspected

- `https://www.promptlayer.com/`
- `https://www.outskill.com/`

Key reference lessons:

- PromptLayer’s strength is not decoration. It is cinematic restraint: dark editorial stage, strong typographic statement, tactile tilted artifact, fine grid lines, one accent CTA, and scroll-story energy.
- Outskill’s strength is conversion structure: hero promise + date/details + proof metrics + investor/social proof + curriculum cards + schedule timeline + testimonials/community + FAQ.
- Verdantia should adapt the patterns, not the brands: keep Verdantia’s warm ivory/evergreen identity, but add more tactile artifacts, controlled motion, and buyer-confidence sections.

---

## 2. Current design diagnosis

### What already works

- Clear positioning above the fold: practical AI training/adoption support.
- Strong distinctive brand direction: editorial serif, deep evergreen, ivory, gold, grid texture.
- Offer ladder is concrete and buyable.
- Founder/company split is correct: Verdantia vehicle, Gbemi trust engine.
- Interactive components already exist:
  - hero method selector
  - adoption pathway selector
  - capability explorer
  - AI Pathfinder
  - theme toggle
- Accessibility basics are present:
  - skip link
  - semantic headings
  - labelled form inputs
  - reduced-motion check in `ScrollReveal`
  - focus-visible styles

### What feels less premium than PromptLayer

1. **Hero artifact is too soft/static**
   - Current hero card is polished, but it reads like an illustration panel, not a cinematic “working artifact”.
   - PromptLayer’s tilted page feels physical and alive. Verdantia needs a tangible “AI adoption operating canvas” or “team workflow map” artifact.

2. **Motion is mostly reveal/fade/hover**
   - Current motion is tasteful but conventional.
   - There is no scroll-linked transformation, layered sequence, kinetic typography, or memorable interaction moment.

3. **Many sections share the same rhythm**
   - Large serif heading left/right + card/grid pattern repeats often.
   - This creates consistency, but also makes the long homepage feel flatter than it should.

4. **Social proof/trust is underdeveloped**
   - No fake logos should be added, but the site needs credibility signals that do not require client logos:
     - delivery reliability protocol
     - founder field notes
     - sample outputs
     - transparent engagement process
     - “what you leave with” artifacts

5. **Offer cards are informative but not decisive**
   - They explain each offer, but comparison is still text-heavy.
   - A stronger ladder visualization could show maturity, time, outputs, price band, and “choose this when…” at a glance.

6. **Company page has trust content but could feel more human**
   - Founder portrait helps.
   - Could add a compact “why I teach this way” founder note or practical field-note module.

7. **Contact page is honest but slightly apologetic**
   - “Email integration is pending” is honest, but it dominates trust context.
   - It should be reframed as: “This form prepares an email draft; direct email is safest while backend delivery is being connected.”

### Technical/accessibility issue found

Hidden mobile navigation links are still focusable/visible to the accessibility tree when the panel is closed:

- `.mobile-panel` is `opacity: 0` and transformed but not `display: none`, `visibility: hidden`, `aria-hidden`, or `inert`.
- Browser accessibility snapshot includes mobile navigation links while desktop nav is visible.
- JS inspection confirmed closed mobile panel: `opacity: 0`, `visibility: visible`, `inert: false`, no `aria-hidden`.

This should be fixed early because advanced motion must not make accessibility worse.

---

## 3. Design direction

### Recommended aesthetic

**“Editorial AI field guide meets premium workshop operating system.”**

Not PromptLayer clone. Not neon AI lab. Not boring consultancy brochure.

Visual language:

- Keep ivory + evergreen + gold.
- Add a deeper “night studio” mode for selected high-impact sections, inspired by PromptLayer’s premium dark stage.
- Use fine grid lines, paper texture, subtle glass, map/workflow strokes, and physical document metaphors.
- Treat Verdantia outputs as real artifacts: brief, workshop map, prompt library, adoption roadmap, risk checklist.

Signature idea:

> Make the website feel like Verdantia turns messy AI use into a clear operating map.

Everything animated should support that: scattered notes align into workflows, loose prompt fragments become a library, risk signals become checkpoints, team roles become a pathway.

---

## 4. High-priority implementation phases

## Phase 0 — Fix design hygiene before adding magic

**Objective:** Remove accessibility/focus traps and prepare motion safely.

**Files likely to change:**

- `components/SiteHeader.tsx`
- `app/globals.css`

Tasks:

1. Add `inert` and `aria-hidden` behavior to the closed mobile panel.
   - Closed: `aria-hidden="true"`, `inert` true if supported by React typings or set via ref/effect.
   - Open: `aria-hidden="false"`, no inert.
2. Ensure desktop hidden menu trigger and mobile hidden nav do not create phantom focus stops.
3. Add a global stronger reduced-motion block for decorative animations:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

4. Preserve deliberate state changes where needed, but remove non-essential movement for reduced-motion users.

Verification:

```bash
npm run lint
npm run typecheck
npm run build
```

Manual QA:

- Tab through closed desktop page: hidden mobile links must not receive focus.
- Open mobile menu: links must be reachable.
- Escape closes mobile menu.

---

## Phase 1 — Rebuild hero around a tangible “Adoption Canvas” artifact

**Objective:** Give Verdantia a memorable PromptLayer-level hero without losing practicality.

**Files likely to change:**

- `components/HomeExperience.tsx`
- `app/page.tsx`
- `app/globals.css`
- potentially `public/assets/` for SVG/noise/texture assets

Replace or enhance `HeroStudio` with an **AI Adoption Canvas**:

Visual concept:

- A tilted/stacked artifact card like a premium workshop document.
- Layers: “Current use”, “Risks”, “Repeatable workflows”, “Team habits”.
- Small animated tokens flow from scattered state to structured columns.
- The three existing hero states can become tabs across the artifact:
  - Understand → scattered notes become visible
  - Design → notes connect into workflow paths
  - Enable → outputs appear as checklist/cards

Interaction:

- Pointer spotlight can stay, but add depth:
  - card tilt via CSS variables from pointer position
  - subtle parallax layers
  - route lines drawing in
  - active state transitions morphing the canvas content

Copy improvement:

Current H1 is clear but huge and line-heavy. Test a sharper variant:

> Turn scattered AI use into safe, repeatable team workflows.

Subcopy:

> Verdantia helps small and mid-sized teams learn where AI fits, practise it safely, and leave with workflows, prompts, and guidance they can actually reuse.

Why:

- Shorter H1 = more premium and scannable.
- Keeps “scattered → repeatable” story.
- Leaves room for the visual artifact to carry more weight.

Verification:

- Desktop above fold: message + visual should fit without feeling cramped.
- Mobile: visual should stack below CTA and not dominate before the offer path.
- Lighthouse/perf: no heavy animation dependency unless justified.

---

## Phase 2 — Add a Pretext-powered signature section

**Objective:** Use Pretext for a memorable interactive text effect that fits Verdantia’s positioning.

**Files likely to change/create:**

- Create: `components/PretextAdoptionMap.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Possibly add dynamic import to avoid SSR/canvas issues.

Recommended section:

**“From loose experiments to working habits”**

Pretext idea:

- A paragraph of workplace AI chaos flows around a moving Verdantia mark / “workflow map” object.
- As the user scrolls or interacts, the obstacle changes shape from scattered fragments into a clean central route.
- The text itself wraps around the object using Pretext, not just CSS decoration.

Content example:

```txt
AI shows up first as experiments: a prompt in someone’s notes, a Copilot draft, a Gemini summary, a Claude project, a risky shortcut nobody reviewed. The work begins when those experiments become visible enough to teach, improve, and repeat.
```

Implementation approach:

- Use a client component with canvas.
- Dynamically import `@chenglou/pretext` from ESM or add it as a dependency only if stable.
- Respect `prefers-reduced-motion`:
  - Reduced motion: render static text/card fallback.
- Provide semantic DOM fallback text near the canvas for screen readers.

Risk:

- Pretext is cool but can become gimmicky. It should be one signature moment, not everywhere.

Good use cases:

- Homepage between problem and offer ladder.
- Or a dark “method” section after the offer ladder.

Do not use Pretext for critical offer/pricing text.

---

## Phase 3 — Turn the offer ladder into a stronger conversion system

**Objective:** Make `/offers` and homepage offer cards easier to compare and more premium.

**Files likely to change:**

- `app/offers/page.tsx`
- `app/page.tsx`
- `lib/site.ts`
- `app/globals.css`

Improvements:

1. Add structured offer metadata in `lib/site.ts`:
   - `level`
   - `bestWhen`
   - `leaveWith`
   - `buyerQuestion`
   - `intensity`
2. Replace plain cards with a visual ladder/timeline:
   - Briefing = baseline
   - Workshop = practice
   - Adoption Day = map + materials
   - Sprint = operating system
3. Add “Choose this when…” panels.
4. Add hover/focus states that reveal outputs without hiding essential text.
5. Add a sticky mini-summary or comparison strip on `/offers` for desktop.

PromptLayer pattern to adapt:

- One strong visual object instead of many equal cards.
- Use a gridline frame and accent CTA.

Outskill pattern to adapt:

- Curriculum-style breakdown of what happens in each session.

Potential copy:

- “The lightest useful starting point.”
- “What the team leaves with.”
- “When to choose this.”
- “Good fit / not yet.”

---

## Phase 4 — Add credible trust without fake logos

**Objective:** Strengthen confidence while Verdantia is still proof-building.

**Files likely to change:**

- `app/page.tsx`
- `app/company/page.tsx`
- `app/offers/page.tsx`
- `app/globals.css`

Create a section like:

**“What you leave with”**

Cards/artifacts:

- AI readiness snapshot
- Prompt/workflow pack
- Responsible-use checklist
- Adoption roadmap
- Workshop handout
- Follow-up recommendations

Design:

- Tactile document cards, slightly offset/stacked.
- On hover/scroll, cards fan open or align into a neat stack.
- Use small labels and realistic deliverable names.

Why:

- Builds trust without pretending to have client logos/testimonials.
- Shows buyers concrete outputs.

Add a “Delivery reliability” module with more visual confidence:

- Before session
- During session
- Fallback path
- After session

This can replace or upgrade the current delivery standard section.

---

## Phase 5 — Improve AI Pathfinder UX

**Objective:** Keep Pathfinder useful but make it feel less like a long form grid.

**Files likely to change:**

- `components/AIPathfinder.tsx`
- `app/globals.css`

Improvements:

1. Convert to stepper/progressive interface on mobile.
2. Add a visible progress rail: 1–5.
3. Keep all questions visible on desktop, but add better grouping and result animation.
4. Animate result changes using CSS transitions:
   - summary card updates with subtle slide/fade
   - selected answers appear as chips in result panel
5. Improve CTA language:
   - “Use this as my enquiry brief” instead of “Start with this brief”.
6. Add “copy brief” button as non-email fallback.

Accessibility:

- Current `aria-pressed` button pattern is okay.
- Ensure selected state is clear without color alone.
- Announce result changes politely.

---

## Phase 6 — Company page: more human, less brochure

**Objective:** Make Gbemi’s trust-engine role stronger without turning Verdantia into a personal portfolio.

**Files likely to change:**

- `app/company/page.tsx`
- `app/globals.css`

Add/adjust:

1. Founder note:
   - “Why I teach AI this way”
   - 3 short principles from Gbemi’s perspective.
2. “Company-first / founder-led” visual diagram:
   - Verdantia = offers/contracts/delivery standards
   - Gbemi = teaching/trust/field notes
3. Add a compact timeline or credentials strip, but avoid inflated claims.
4. Consider replacing generic hero visual with founder/workshop artifact visual.

Potential copy:

> Verdantia is built for the awkward middle: teams already using AI, but without shared judgement, safe habits, or repeatable ways of working.

---

## Phase 7 — Contact page: make the no-backend state feel intentional

**Objective:** Improve trust and reduce friction while email backend remains unconnected.

**Files likely to change:**

- `app/contact/page.tsx`
- `components/ContactForm.tsx`
- `app/globals.css`

Improvements:

1. Reframe the email notice:

Current direction:

> Email integration is pending for this first version.

Better:

> This form prepares a clear email draft. Until backend delivery is connected, you stay in control by sending it directly from your email client.

2. Add a “copy enquiry” button after validation.
3. Add inline helper text under fields:
   - Organisation: “Company, team, provider, or community organisation.”
   - Message: “A few lines is enough — current AI use, team size, and what you want to improve.”
4. Add stateful success panel:
   - “Your enquiry draft is ready.”
   - email link
   - copy text
5. Make direct email more visually secondary but always available.

---

## 5. Animation system plan

Use a small set of named animation patterns instead of random effects.

### Pattern A — Drawn routes

For workflow/path SVGs:

- Use `stroke-dasharray` / `stroke-dashoffset`.
- Trigger when section enters viewport.
- Reduced motion: route appears instantly.

### Pattern B — Artifact stack

For deliverable cards:

- Initial: slightly rotated/overlapped.
- In view: settle into aligned stack or fan.
- On hover: lift selected artifact.

### Pattern C — Token alignment

For hero/adoption canvas:

- Small prompt/tool/risk tokens start scattered.
- Active state aligns tokens into columns: Discover / Practise / Repeat.

### Pattern D — Kinetic headline accents

Do not animate whole paragraphs. Animate small highlighted phrases or underline strokes.

Examples:

- “scattered AI use” underlines as messy strokes.
- “repeatable workflows” resolves into clean route line.

### Pattern E — Pretext text flow

Only one signature canvas section. Treat it as the memorable “how Verdantia thinks” moment.

---

## 6. Recommended file-level plan

### `lib/site.ts`

Add richer offer data:

- `level`
- `bestWhen`
- `leaveWith`
- `buyerQuestion`
- `ctaLabel`

Keep existing shape backwards-compatible or update all consumers at once.

### `components/HomeExperience.tsx`

Refactor into smaller components:

- `ScrollReveal`
- `HeroStudio` or new `AdoptionCanvas`
- `AdoptionPathway`
- `CapabilityExplorer`
- new `DeliverableArtifacts`

Avoid making this one file too much bigger.

### `components/PretextAdoptionMap.tsx`

New client component. Dynamic/fallback friendly.

### `app/page.tsx`

Reorder homepage for stronger story:

1. Hero: clear promise + adoption canvas
2. Problem: scattered tools / judgement gap
3. Signature Pretext method section
4. Offer ladder
5. What you leave with
6. Pathfinder or capabilities
7. Founder trust
8. Reliability protocol
9. CTA

### `app/offers/page.tsx`

Convert into conversion page:

1. Hero
2. Compare ladder
3. “Choose this when” matrix
4. Example session flow
5. Pathfinder
6. CTA

### `app/company/page.tsx`

Add founder trust module and company/founder split diagram.

### `components/ContactForm.tsx`

Improve no-backend UX and add copyable enquiry draft.

### `app/globals.css`

Potentially split later if CSS grows:

- `app/globals.css` currently has ~4k lines.
- Consider CSS module/component CSS only if maintainability gets annoying.
- For now, keep custom CSS but add section comments and animation tokens.

---

## 7. Copy/language improvements

Global tone rules:

- Keep calm, practical, premium.
- Use concrete outcomes.
- Keep mild personality sparingly.
- Avoid too many jokes like “magic dust in a blazer” if page starts feeling unserious. One or two is fine; every section should not wink.

Suggested homepage H1 tests:

1. “Turn scattered AI use into safe, repeatable team workflows.”
2. “Help your team use AI clearly, safely, and repeatably.”
3. “Practical AI training for teams ready to move past experiments.”

Suggested subcopy:

> Verdantia helps small and mid-sized teams understand where AI fits, practise it safely, and leave with workflows, prompts, and guidance they can reuse.

Suggested offer ladder section title:

> Start with the lightest useful step.

Suggested Pretext section title:

> First make the work visible. Then make it repeatable.

Suggested contact page title:

> Send a useful brief, not a vague enquiry.

---

## 8. UX priorities

1. Above fold clarity must survive all visual upgrades.
2. Every cool effect needs a practical explanation.
3. Navigation and CTA should remain boringly obvious.
4. Interactive sections must work by keyboard.
5. Critical content must be real DOM text, not only canvas.
6. Motion must be restrained and reduced-motion safe.
7. Mobile must get a simpler experience, not a shrunken desktop art project.

---

## 9. Risks and tradeoffs

### Risk: Over-designing before market validation

The site is already commercially clear. Do not spend three weeks making it beautiful if outreach/prospect validation is blocked.

Mitigation:

- Implement in 2–3 tight passes.
- Prioritize hero, offer ladder, trust artifacts, and contact UX.

### Risk: Pretext becomes gimmick

Pretext can be brilliant or ridiculous. There is no middle. Tiny chaos goblin.

Mitigation:

- One signature section only.
- Keep fallback simple.
- Do not use it for pricing/offers.

### Risk: Performance bloat

Advanced effects can hurt load speed.

Mitigation:

- Prefer CSS/SVG/canvas over heavy libraries.
- Lazy-load Pretext section.
- Avoid video unless heavily compressed and optional.

### Risk: Accessibility regressions

Current hidden mobile nav issue proves this needs attention.

Mitigation:

- Fix Phase 0 first.
- Keyboard test after every interactive change.
- Respect reduced motion.

---

## 10. Verification gates

After each implementation phase:

```bash
npm run lint
npm run typecheck
npm run build
```

Browser checks:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/offers
curl -I http://localhost:3000/company
curl -I http://localhost:3000/contact
curl -I http://localhost:3000/capabilities
```

Manual visual QA:

- `/` desktop above fold
- `/` full scroll
- `/offers` comparison and Pathfinder
- `/company` founder section
- `/contact` form and validation
- Dark/light theme toggle
- Keyboard-only navigation
- Reduced-motion mode if possible
- Mobile viewport using browser/Playwright when available

Accessibility checks:

- Hidden mobile nav not focusable when closed.
- All buttons have clear accessible names.
- Canvas/Pretext section has DOM fallback text.
- Focus indicators visible on dark and light sections.
- No essential content only in decorative images/canvas.

---

## 11. Recommended execution order

1. Phase 0: accessibility/design hygiene.
2. Phase 1: hero adoption canvas and tighter homepage copy.
3. Phase 3: offer ladder conversion upgrade.
4. Phase 4: “what you leave with” trust artifacts.
5. Phase 7: contact form/no-backend UX cleanup.
6. Phase 2: Pretext signature section once core conversion path is solid.
7. Phase 5/6: Pathfinder and company polish.

Reason:

- This gets the main buying path sharper before spending energy on the fanciest effect.
- Pretext should be a finishing weapon, not the foundation.

---

## 12. Open questions for Gbemi

1. How far should Verdantia lean dark/editorial versus warm ivory/professional?
2. Should the homepage hero H1 be shortened to “Turn scattered AI use into safe, repeatable team workflows”?
3. Should Pretext live on the homepage as a visible signature section, or should it be a hidden/experimental interactive demo first?
4. Do we want to add a “sample workshop output” downloadable PDF after the visual polish pass?
5. Should `/products` remain public, be hidden from nav only, or be retired until there is a real product direction?

---

## 13. Definition of done for the polish pass

The pass is successful when:

- A first-time visitor understands Verdantia in 5 seconds.
- The site feels noticeably more premium and memorable than the current version.
- The offer ladder is easier to compare and buy.
- Motion feels purposeful, not decorative noise.
- Accessibility and build checks pass.
- No fake proof, fake delivery, or overclaimed automation language has been introduced.
