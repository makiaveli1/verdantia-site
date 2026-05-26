# Verdantia premium visual and content asset direction

[DRAFT — INTERNAL CREATIVE SYSTEM — EXTERNAL VISUALS REQUIRE OLUWAGBEMI APPROVAL]

Verdantia should look like a premium field-note practice, not an AI consultancy wearing robot clip-art and a LinkedIn fleece vest.

The visual world should feel:

- editorial
- practical
- grounded in real team workflows
- calm and mature
- tactile: paper, notebooks, whiteboards, diagrams, margin notes
- useful enough that someone would save it

Use visuals to clarify thinking, not decorate weak posts.

## Safe visual principles

### 1. Visuals must clarify

Use visuals for:

- workflow maps
- decision frameworks
- adoption mistakes
- checklists
- before/after thinking shifts
- AI literacy concepts
- review habits

If the post is a nuanced founder observation, text-only may be stronger.

### 2. Field notes over AI spectacle

Prefer:

- notebook diagrams
- clean workflow maps
- editorial illustrations
- whiteboard-style frameworks
- paper desk compositions
- annotated process maps
- calm abstract metaphors grounded in work

Avoid:

- neon robots
- glowing brains
- circuit faces
- fake dashboards
- fake screenshots
- fake workshop photos
- stock business people
- public figures
- client logos
- invented proof

### 3. Premium palette

Use:

- warm off-white / paper cream
- deep forest green
- charcoal ink
- muted sage
- warm grey
- restrained clay or brass accent

Avoid cyberpunk purple-blue, neon green, loud gradients, and generic SaaS-blue sludge.

### 4. Mobile readability first

For LinkedIn:

- one idea per visual
- strong contrast
- large shapes
- minimal text
- generous negative space
- no dense infographics
- no tiny labels

If text is important, generate the background/diagram structure only and add final text manually in Figma, Canva, PowerPoint, or HTML/CSS export.

### 5. No invented evidence

Do not visually imply:

- Verdantia has run a specific workshop unless confirmed
- a named client exists
- measurable results happened
- a dashboard is real
- a public institution endorsed Verdantia

Use labels such as “example workflow”, “adoption pattern”, “field note”, or “decision map” where needed.

## Image-generation operating rule

Use Codex’s **built-in imagegen tool path** by default: structured prompt specs, short constraints, clear use case, and explicit avoid lines.

Important distinction:

- **Built-in Codex imagegen** does **not** require `OPENAI_API_KEY`; it uses the logged-in Codex/ChatGPT auth session.
- The bundled `scripts/image_gen.py` CLI is only the fallback/API path and **does** require `OPENAI_API_KEY`.
- Do not run `codex exec --model gpt-image-2 ...`; that makes the whole agent use an image model and can fail. Run the normal Codex agent and explicitly ask it to use the built-in `image_gen` capability.

Verified locally on 2026-05-25:

- `codex features list` shows `image_generation stable true`.
- Codex is logged in via ChatGPT.
- A built-in imagegen test generated `/tmp/codex-imagegen-test/leaf-test.png` without `OPENAI_API_KEY`.

Recommended built-in Codex pattern:

```bash
mkdir -p /tmp/codex-imagegen-test
cd /tmp/codex-imagegen-test
codex exec --skip-git-repo-check --sandbox workspace-write \
  "Use the built-in image_gen capability, not the OpenAI API and not shell/Python image scripts, to generate <image brief>. Copy the final selected raster image to <target path>."
```

Codex saves built-in outputs under `$CODEX_HOME/generated_images/...` by default. For project-bound assets, copy the selected raster into the repo before referencing it.

Fallback CLI path only, if explicitly needed:

```bash
python3 /home/likwid/.codex/skills/hermes/hermes-codex-windows-skills-imagegen/scripts/image_gen.py generate --dry-run --prompt "Test"
```

## Prompt spec 1 — Field-note adoption map

Use case: `stylized-concept`

Asset type: LinkedIn single image / post support

```bash
mkdir -p /home/likwid/projects/verdantia-site/output/imagegen
cd /home/likwid/projects/verdantia-site
codex exec --skip-git-repo-check --sandbox workspace-write \
  "Use the built-in image_gen capability, not the OpenAI API and not shell/Python image scripts, to generate this raster asset. Copy the final selected PNG to /home/likwid/projects/verdantia-site/output/imagegen/verdantia-field-note-adoption-map.png.

Create a premium editorial illustration for a LinkedIn post about practical AI adoption in small teams.

Purpose: show that AI adoption is not just giving people access to tools; it requires examples, boundaries, review habits, and workflow fit.

Composition: calm overhead desk scene with a cream notebook open on a matte wooden or warm grey surface. On the notebook is a simple hand-drawn workflow map with four blank sections for labels to be added later. Include a pencil, paper tabs, and subtle margin marks. Leave clear blank space in the upper third for a headline to be added manually.

Style: premium field-note aesthetic, editorial, calm, practical, tactile paper texture, refined consulting feel. Warm off-white paper, charcoal ink, muted forest green, sage, warm grey, tiny clay accent. High contrast, mobile-readable shapes, generous negative space.

Constraints: no logos, no brand marks, no fake screenshots, no fake dashboards, no fake charts, no fake workshop scene, no people posing, no stock-photo vibe, no neon robots, no glowing brains, no public figures, no invented proof, no tiny unreadable text.

Text: do not render actual words. Use blank label areas only."
```

Alt text: Editorial desk illustration showing a notebook with a simple AI adoption workflow map and blank label sections.

## Prompt spec 2 — Verification ladder whiteboard

Use case: `infographic-diagram`

Asset type: LinkedIn framework image / carousel source art

```bash
mkdir -p /home/likwid/projects/verdantia-site/output/imagegen
cd /home/likwid/projects/verdantia-site
codex exec --skip-git-repo-check --sandbox workspace-write \
  "Use the built-in image_gen capability, not the OpenAI API and not shell/Python image scripts, to generate this raster asset. Copy the final selected PNG to /home/likwid/projects/verdantia-site/output/imagegen/verdantia-verification-ladder-whiteboard.png.

Create a premium whiteboard-style workflow map for a LinkedIn post about AI verification habits for teams.

Purpose: clarify that using AI well means checking the output through simple review steps before trusting it.

Composition: clean whiteboard or paper-board diagram with a simple ladder or stepped pathway made of five large blank steps. Each step has empty space for a short label to be added manually later. Add subtle arrows, check marks, and margin annotations, but no real text. The visual should feel like a consultant's field-note sketch after a practical team session, without showing any people or event.

Style: calm premium consulting aesthetic, clean editorial diagram, hand-drawn but precise. Cream-white background, charcoal lines, forest green accents, muted sage highlights. Strong contrast, uncluttered, mobile-readable, lots of negative space.

Constraints: no logos, no Verdantia mark, no fake dashboard, no fake app UI, no fake screenshots, no workshop photo, no people, no client names, no fake results, no numbers implying proof, no neon AI imagery, no robots, no glowing brains, no public figures, no tiny labels.

Text: no text. Use empty label boxes only."
```

Alt text: Clean whiteboard-style diagram showing a five-step verification ladder for reviewing AI outputs, with blank spaces for labels.

## Prompt spec 3 — Access is not adoption

Use case: `stylized-concept`

Asset type: LinkedIn post image / carousel cover concept

```bash
mkdir -p /home/likwid/projects/verdantia-site/output/imagegen
cd /home/likwid/projects/verdantia-site
codex exec --skip-git-repo-check --sandbox workspace-write \
  "Use the built-in image_gen capability, not the OpenAI API and not shell/Python image scripts, to generate this raster asset. Copy the final selected PNG to /home/likwid/projects/verdantia-site/output/imagegen/verdantia-access-is-not-adoption.png.

Create a premium editorial concept illustration for a LinkedIn post about the difference between AI access and real AI adoption.

Purpose: represent the practical gap between having AI tools available and having confident team workflows.

Composition: minimal abstract scene. On the left, a neat stack of generic tool cards with blank fronts. On the right, a connected workflow path made of paper strips, arrows, checkmarks, and review points. Between them is a visible gap or bridge under construction. No screens, no dashboards, no software UI. Leave upper third mostly blank for a headline to be added later.

Style: editorial business illustration, tactile paper collage, refined, calm, premium, practical. Warm off-white background, deep forest green, charcoal, muted sage, warm grey, restrained clay accent. High contrast and simple shapes for mobile readability.

Constraints: no logos, no brand names, no fake screenshots, no fake dashboards, no fake charts, no fake workshop or event imagery, no people pretending to be clients, no public figures, no robots, no glowing brains, no cyberpunk, no generic stock-photo style, no invented proof, no tiny text, no gibberish typography.

Text: do not include rendered text or symbols that look like brand marks."
```

Alt text: Abstract editorial illustration showing a gap between generic AI tool access and a connected team workflow path.

## Carousel concept 1 — AI access is not adoption

Purpose: explain Verdantia’s core commercial point without sounding salesy.

Audience: SME leaders, training providers, community-facing organisations, managers rolling out AI tools.

Format: PDF carousel, 7 slides.

Tone: practical, calm, slightly corrective.

Slides:

1. **AI access is not adoption.**
2. **The common mistake:** a licence rollout feels like progress. Most teams still ask: where should I use this, what is safe, and how do I check the output?
3. **What access gives you:** a tool, a blank box, inconsistent usage, uneven confidence.
4. **What adoption requires:** real examples, boundaries, review habits, shared language, manager support.
5. **The practical adoption loop:** Diagnose → choose workflows → train with examples → practise → review → refine.
6. **What leaders should ask:** where would better AI use actually change the quality, speed, or confidence of work?
7. **Close:** before adding another tool, map one workflow worth improving.

Visual style: cream background, charcoal typography, forest green dividers, paper-strip workflow motif, no fake screenshots, no fake metrics.

## Carousel concept 2 — The AI output review ladder

Purpose: give teams a memorable review habit framework.

Audience: staff, managers, trainers, operational teams using ChatGPT/Copilot/Claude/Gemini.

Format: PDF carousel, 6 slides.

Slides:

1. **Before you trust an AI answer, climb the review ladder.**
2. **Fit:** did it answer the actual task, or just produce something fluent?
3. **Facts:** which claims need checking against a reliable source?
4. **Context:** does it understand your audience, constraints, policies, and tone?
5. **Risk:** could this expose private data, mislead someone, or create reputational risk?
6. **Decision:** use, revise, verify further, or discard.

Visual style: whiteboard/field-note ladder motif, one step per slide, large mobile-readable type, handwritten-style arrows/checks, no fake charts.

## When not to use visuals

Do not use a visual when:

1. The idea is stronger as text.
2. The image would be decorative.
3. The visual implies proof that is not confirmed.
4. The only available option is stock-photo style.
5. The topic involves current claims needing sources and we have not verified them.
6. The concept depends on logos to make sense.
7. The image model may mangle critical text.
8. The post is a repost/comment and the source post already carries the visual.
9. Manual upload is not possible.

Default rule:

**Text-only for sharp judgement. Single diagram for one useful idea. Carousel for durable frameworks. No visual when it risks looking generic, fake, or overproduced.**
