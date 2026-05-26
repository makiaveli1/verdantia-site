import type { CSSProperties } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import {
  AdoptionPathway,
  CapabilityExplorer,
  HeroStudio,
  HomeLoader,
  MethodPretext,
  ScrollReveal,
} from "@/components/HomeExperience";
import { OfferLadder } from "@/components/OfferLadder";
import { principles } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Verdantia | Practical AI Training & Adoption Support",
  description:
    "Verdantia helps Ireland and UK teams move from scattered AI experiments to safe, practical, repeatable AI workflows through briefings, workshops, adoption days, and adoption sprints.",
});

const proofItems = [
  {
    label: "Founder-led",
    copy: "Work is led by Gbemi Akadiri, so clients know who is shaping the training, materials, and adoption guidance.",
  },
  {
    label: "Built for teams",
    copy: "Practical AI training and adoption support for SMEs, training providers, nonprofits, and smaller corporate teams.",
  },
  {
    label: "Tool-agnostic",
    copy: "ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, and wider GenAI workflows — matched to the job, not the hype.",
  },
  {
    label: "Automation when useful",
    copy: "Custom assistants and automation are considered only when the workflow, data, and review needs are clear.",
  },
] as const;

const audienceItems = [
  {
    title: "SMEs and smaller corporate teams",
    copy: "For teams where AI use is already happening, but practice is inconsistent, risky, or hard to repeat.",
  },
  {
    title: "Training providers",
    copy: "For providers that need practical AI delivery capacity, workshop design, or specialist GenAI sessions.",
  },
  {
    title: "Nonprofits and community organisations",
    copy: "For small teams that need accessible AI literacy without a heavy enterprise programme.",
  },
] as const;

const deliverables = [
  {
    title: "AI readiness snapshot",
    eyebrow: "Diagnostic",
    copy: "A clear view of current tool use, confidence, risks, and immediate opportunities.",
  },
  {
    title: "Workflow map",
    eyebrow: "Operating canvas",
    copy: "Priority tasks, decision points, review moments, and where AI support belongs.",
  },
  {
    title: "Prompt library",
    eyebrow: "Reusable material",
    copy: "Role-based prompts, usage notes, and examples your team can improve over time.",
  },
  {
    title: "Responsible-use checklist",
    eyebrow: "Safety layer",
    copy: "Practical guidance for data handling, review habits, quality checks, and human judgement.",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="home-page">
      <HomeLoader />
      <ScrollReveal />

      <section className="home-hero premium-home-hero" aria-labelledby="hero-heading">
        <div className="shell hero-grid premium-hero-grid">
          <div className="hero-copy premium-hero-copy">
            <p className="eyebrow">Practical AI training and adoption support</p>
            <h1 id="hero-heading">Make scattered AI use safe and repeatable.</h1>
            <p className="hero-lede">
              Verdantia helps Ireland and UK teams turn generative AI experiments into practical workflows, safer habits, and reusable materials.
            </p>
            <p>
              Start with the lightest useful step: a briefing, workshop, adoption day, or focused sprint built around your team’s real work.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/offers">Find the right offer</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="hero-secondary-link">
                Send a useful brief
              </ButtonLink>
            </div>
          </div>

          <aside className="hero-stage premium-hero-stage" aria-label="Verdantia method preview">
            <div className="hero-field-guide" aria-hidden="true">
              <span>AI readiness snapshot</span>
              <span>Workflow map</span>
              <span>Prompt library</span>
              <span>Responsible-use checklist</span>
            </div>
            <HeroStudio />
          </aside>
        </div>

        <a className="hero-scroll-cue" href="#intro-heading" aria-label="Scroll to the next section">
          <span>Scroll for the route</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <div className="shell hero-proof-strip premium-proof-strip" aria-label="Verdantia summary">
        {proofItems.map((item, index) => (
          <article key={item.label} style={{ "--proof-index": index } as CSSProperties}>
            <span>{item.label}</span>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="signal-band" aria-hidden="true">
        <div>
          <span>AI Team Briefing / Practical AI Workshop / AI Adoption Day / AI Adoption Sprint / Safe AI habits / Workflow mapping /</span>
          <span>AI Team Briefing / Practical AI Workshop / AI Adoption Day / AI Adoption Sprint / Safe AI habits / Workflow mapping /</span>
        </div>
      </div>

      <section className="section intro-section scroll-rise" aria-labelledby="intro-heading">
        <div className="shell intro-grid">
          <div>
            <p className="section-kicker">The problem</p>
            <h2 id="intro-heading">Most teams do not need another AI hype talk. They need a working route.</h2>
          </div>
          <div className="intro-copy">
            <p>
              People are already testing ChatGPT, Claude, Gemini, Copilot, Perplexity, and other tools. The gap is not curiosity. The gap is judgement: what to use, when to use it, what not to trust, and how to review the result.
            </p>
            <p>
              Verdantia helps teams move from “we should do something with AI” to safe, useful, repeatable AI workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section method-section scroll-rise" aria-labelledby="method-heading">
        <div className="shell method-layout">
          <div className="method-copy">
            <p className="section-kicker">Signature method</p>
            <h2 id="method-heading">First make the work visible. Then make it repeatable.</h2>
            <p>
              The useful move is not adding a shiny assistant on top of a messy process. It is making current work clear enough that training, prompts, review habits, and tool decisions have somewhere sensible to land.
            </p>
            <div className="method-proof-grid">
              <article className="method-proof-card">
                <span>01</span>
                <strong>Map current use</strong>
                <p>Tools, tasks, confidence gaps, and risks become visible.</p>
              </article>
              <article className="method-proof-card">
                <span>02</span>
                <strong>Train through real work</strong>
                <p>Practice uses examples people recognise, not abstract demo prompts.</p>
              </article>
              <article className="method-proof-card">
                <span>03</span>
                <strong>Leave a system behind</strong>
                <p>Checklists, prompts, maps, and next steps make progress repeatable.</p>
              </article>
            </div>
          </div>
          <MethodPretext />
        </div>
      </section>

      <section className="section capability-system-section scroll-rise" aria-labelledby="offers-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Offer ladder</p>
          <h2 id="offers-heading">Four clear ways to start.</h2>
          <p>
            Each offer is scoped so a team can buy a concrete outcome without committing to more support than it needs.
          </p>
        </div>
        <div className="shell">
          <OfferLadder />
        </div>
      </section>

      <section className="section pathway-section scroll-rise" aria-labelledby="pathway-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Adoption pathway</p>
          <h2 id="pathway-heading">Brief. Train. Map. Support.</h2>
          <p>
            The offer ladder lets Verdantia start small, show value, then move into deeper adoption work when the need is real.
          </p>
        </div>
        <div className="shell">
          <AdoptionPathway />
        </div>
      </section>

      <section className="section deliverables-section scroll-rise" aria-labelledby="deliverables-heading">
        <div className="shell deliverables-layout">
          <div>
            <p className="section-kicker">What your team leaves with</p>
            <h2 id="deliverables-heading">Useful artefacts your team can return to.</h2>
            <p>
              Progress shows up in materials your team can actually reuse: maps, prompts, checklists, and next steps.
            </p>
          </div>
          <div className="artifact-stack" aria-label="Example Verdantia deliverables">
            {deliverables.map((item, index) => (
              <article className="artifact-card" key={item.title} style={{ "--artifact-index": index } as CSSProperties}>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-system-section scroll-rise" aria-labelledby="capabilities-heading">
        <div className="shell capability-system">
          <aside className="capability-system-intro">
            <p className="section-kicker">How Verdantia helps</p>
            <h2 id="capabilities-heading">Training first. Adoption support next. Automation only when it makes sense.</h2>
            <p>
              The first step is practical AI training and adoption support. Deeper work can include workflow mapping, prompt systems, safe-use habits, and implementation support.
            </p>
            <ButtonLink href="/offers" variant="secondary">
              Explore offers
            </ButtonLink>
          </aside>
          <CapabilityExplorer />
        </div>
      </section>

      <section className="section operating-section scroll-rise" aria-labelledby="audience-heading">
        <div className="shell operating-layout">
          <div className="operating-intro">
            <p className="section-kicker">Who Verdantia supports</p>
            <h2 id="audience-heading">Start where trust and speed matter.</h2>
            <p>
              Verdantia is best suited to organisations that need practical support quickly: enough structure to make progress, without a long transformation programme.
            </p>
          </div>
          <div className="operating-stack">
            {audienceItems.map((item, index) => (
              <article
                className="operating-step"
                key={item.title}
                style={{ "--stack-index": index } as CSSProperties}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-signal-section scroll-rise" aria-labelledby="founder-signal-heading">
        <div className="shell founder-signal premium-founder-signal">
          <div className="founder-image-shell">
            <Image
              src="/assets/gbemi-akadiri.webp"
              width={900}
              height={900}
              alt="Gbemi Akadiri, founder of Verdantia."
              sizes="(max-width: 900px) 88vw, 280px"
              loading="eager"
            />
            <p className="founder-image-caption">Gbemi Akadiri · Founder and lead trainer</p>
          </div>
          <div>
            <p className="section-kicker">Founder-led, company-backed</p>
            <h2 id="founder-signal-heading">Founder-led work, backed by a clear company offer.</h2>
            <p>
              Gbemi leads the thinking and teaching. Verdantia gives clients a clear way to buy practical AI briefings, workshops, adoption days, and focused sprints.
            </p>
          </div>
          <div className="founder-proof-list" aria-label="Relevant experience">
            <span>AI training</span>
            <span>Tool literacy</span>
            <span>Workflow design</span>
            <span>Safe adoption</span>
          </div>
        </div>
      </section>

      <section className="section principles-section scroll-rise" aria-labelledby="principles-heading">
        <div className="shell principles-grid">
          <div>
            <p className="section-kicker">The Verdantia way</p>
            <h2 id="principles-heading">Principles before noise.</h2>
          </div>
          <ul className="principle-stack">
            {principles.map((principle, index) => (
              <li key={principle}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{principle}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final-cta scroll-rise" aria-labelledby="final-cta-heading">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Start the work</p>
          <h2 id="final-cta-heading">Book the right first step for your team.</h2>
          <p>
            If your organisation wants to introduce AI without hype, chaos, or unsafe shortcuts, start with a practical conversation.
          </p>
          <ButtonLink href="/contact" variant="light">
            Send a useful brief
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
