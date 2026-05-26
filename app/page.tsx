import type { CSSProperties } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import {
  AdoptionPathway,
  CapabilityExplorer,
  HeroStudio,
  HomeLoader,
  MethodPretext,
  ReactiveArtifactField,
  ScrollReveal,
} from "@/components/HomeExperience";
import { OfferLadder } from "@/components/OfferLadder";
import { individualLearningTracks, principles, toolGroups } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Verdantia | Practical AI Training, Learning & Adoption Support",
  description:
    "Verdantia helps teams, training providers, and community organisations turn scattered AI use into safe, practical, repeatable workflows. Individual professionals can join a separate learning-labs lane.",
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
    label: "Professional learning labs",
    copy: "Short AI skills labs help professionals build practical tool fluency for their own work, with the same focus on judgement and usefulness.",
  },
  {
    label: "Tool-agnostic",
    copy: "ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, and other everyday AI tools — chosen for the task, not the trend.",
  },
  {
    label: "Automation when useful",
    copy: "Automation is only scoped once the team understands the task, the data, and how outputs will be reviewed.",
  },
] as const;

const audienceItems = [
  {
    title: "SMEs and smaller corporate teams",
    copy: "For teams where AI use is already happening, but practice is inconsistent, risky, or hard to repeat.",
  },
  {
    title: "Training providers",
    copy: "For providers that need extra delivery capacity, workshop design, or practical GenAI sessions for clients.",
  },
  {
    title: "Nonprofits and community organisations",
    copy: "For small teams that need accessible AI literacy without a heavy enterprise programme.",
  },
  {
    title: "Individual professionals",
    copy: "For professionals who want practical AI fluency, workflow confidence, and small-group skill-building without exaggerated career-transformation claims.",
  },
] as const;

const deliverables = [
  {
    title: "AI readiness snapshot",
    eyebrow: "Starting point",
    copy: "A clear view of current tool use, confidence, risks, and immediate opportunities.",
  },
  {
    title: "Workflow map",
    eyebrow: "Working map",
    copy: "Priority tasks, decision points, review moments, and where AI support belongs.",
  },
  {
    title: "Prompt library",
    eyebrow: "Reusable prompts",
    copy: "Role-based prompts, usage notes, and examples your team can improve over time.",
  },
  {
    title: "Responsible-use checklist",
    eyebrow: "Responsible use",
    copy: "Practical guidance for data handling, review habits, quality checks, and human judgement.",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="home-page">
      <HomeLoader />
      <ScrollReveal />
      <ReactiveArtifactField />

      <section className="home-hero premium-home-hero" aria-labelledby="hero-heading">
        <div className="hero-atmosphere" aria-hidden="true">
          <Image
            src="/assets/verdantia-hero-field-guide.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="shell hero-grid premium-hero-grid">
          <div className="hero-copy premium-hero-copy">
            <p className="eyebrow">Practical AI training and adoption support</p>
            <h1 id="hero-heading">Turn scattered AI use into safe, repeatable practice.</h1>
            <p className="hero-lede">
              Verdantia helps teams, training providers, and community organisations turn scattered AI use into safer, repeatable practice. Individual professionals can join a separate learning-labs lane for practical skill-building.
            </p>
            <p>
              Start with a briefing, workshop, adoption day, focused sprint, or skills lab shaped around the work you actually do.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/offers">Compare team offers</ButtonLink>
              <ButtonLink href="/learning" variant="secondary" className="hero-secondary-link">
                Explore learning labs
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

        <a className="hero-scroll-cue" href="#problem-section" aria-label="Open the problem section">
          <span>The problem</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section id="problem-section" className="section intro-section scroll-rise" aria-labelledby="intro-heading">
        <div className="shell intro-grid">
          <div>
            <p className="section-kicker">The problem</p>
            <h2 id="intro-heading">Most teams do not need another AI talk. They need clear rules, useful examples, and a next step.</h2>
          </div>
          <div className="intro-copy">
            <p>
              People are already testing ChatGPT, Claude, Gemini, Copilot, Perplexity, and other tools. The hard part is deciding which tasks are suitable, what information is safe to use, how to check the output, and when not to use AI.
            </p>
            <p>
              Verdantia helps teams turn informal AI use into shared practices people can use safely and consistently.
            </p>
          </div>
        </div>
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
          <span>Briefing / Workshop / Adoption day / Sprint / Safer AI habits / Practical team guidance /</span>
          <span>Briefing / Workshop / Adoption day / Sprint / Safer AI habits / Practical team guidance /</span>
        </div>
      </div>

      <section className="section method-section scroll-rise" aria-labelledby="method-heading">
        <div className="shell method-layout">
          <div className="method-copy">
            <p className="section-kicker">How the work starts</p>
            <h2 id="method-heading">Clarify the work before changing the tools.</h2>
            <p>
              The useful move is not adding a shiny assistant on top of a messy process. It is understanding the team’s real tasks first, then building training, prompts, review habits, and tool choices around them.
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
                <strong>Leave reusable materials behind</strong>
                <p>Checklists, prompts, maps, and next steps help the team keep using what it learned.</p>
              </article>
            </div>
          </div>
          <MethodPretext />
        </div>
      </section>

      <section className="section capability-system-section scroll-rise" aria-labelledby="offers-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Ways to start</p>
          <h2 id="offers-heading">Four clear ways for teams to start.</h2>
          <p>
            Each organisation offer gives teams a concrete outcome without committing to more support than they need.
          </p>
        </div>
        <div className="shell">
          <OfferLadder />
        </div>
      </section>

      <section className="section pathway-section scroll-rise" aria-labelledby="pathway-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">How support can deepen</p>
          <h2 id="pathway-heading">Brief. Train. Map. Support.</h2>
          <p>
            You can begin with a short session, then move into hands-on training or implementation support only when it is useful.
          </p>
        </div>
        <div className="shell">
          <AdoptionPathway />
        </div>
      </section>

      <section className="section deliverables-section scroll-rise" aria-labelledby="deliverables-heading">
        <div className="shell deliverables-layout">
          <div>
            <p className="section-kicker">What your team keeps using</p>
            <h2 id="deliverables-heading">Materials your team can return to after the session.</h2>
            <p>
              Progress shows up in practical materials your team can reuse: maps, prompts, checklists, and next steps.
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
            <p className="section-kicker">What support can include</p>
            <h2 id="capabilities-heading">Training first. Practical support next. Automation only when the basics are clear.</h2>
            <p>
              Most teams start with training. Deeper work can map priority tasks, create prompt guidance, define review habits, and support implementation.
            </p>
            <ButtonLink href="/offers" variant="secondary">
              Compare starting points
            </ButtonLink>
          </aside>
          <CapabilityExplorer />
        </div>
      </section>

      <section className="section tools-section scroll-rise" aria-labelledby="tools-heading">
        <div className="shell tools-layout">
          <div className="tools-intro">
            <p className="section-kicker">Tools chosen by task</p>
            <h2 id="tools-heading">The point is not to chase every launch. It is to choose the right tool for the work.</h2>
            <p>
              Verdantia helps people practise with familiar AI tools while keeping judgement, privacy, and review habits visible.
            </p>
          </div>
          <div className="tool-cluster-grid" role="list" aria-label="AI tool categories Verdantia can cover">
            {toolGroups.map((group) => (
              <article className="tool-cluster-card" key={group.title} role="listitem">
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
                <div aria-label={`${group.title} examples`}>
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section individual-lane-section scroll-rise" aria-labelledby="individual-lane-heading">
        <div className="shell individual-lane-panel">
          <div>
            <p className="section-kicker">Individual professionals</p>
            <h2 id="individual-lane-heading">Practical AI learning for people doing the work.</h2>
            <p>
              Some professionals need a focused place to practise: short labs, clinics, and guided projects that turn AI tools into useful personal workflows.
            </p>
            <div className="individual-lane-actions">
              <ButtonLink href="/learning">Explore learning labs</ButtonLink>
              <ButtonLink href="/contact?enquiryType=Individual%20AI%20skills%20lab" variant="secondary">
                Ask about a skills lab
              </ButtonLink>
            </div>
          </div>
          <div className="individual-track-preview" role="list" aria-label="Individual learning lab tracks">
            {individualLearningTracks.map((track, index) => (
              <article key={track.title} role="listitem" style={{ "--track-index": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{track.title}</h3>
                <p>{track.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section operating-section scroll-rise" aria-labelledby="audience-heading">
        <div className="shell operating-layout">
          <div className="operating-intro">
            <p className="section-kicker">Who Verdantia supports</p>
            <h2 id="audience-heading">Best for people who need practical AI support quickly.</h2>
            <p>
              Verdantia works best when the goal is useful AI habits, not a long transformation programme or a generic tool tour.
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
            <p className="section-kicker">Led by Gbemi Akadiri</p>
            <h2 id="founder-signal-heading">Direct support from the person leading the work.</h2>
            <p>
              Gbemi leads the sessions and shapes the materials, so clients know who is responsible for the training, guidance, and follow-through.
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
          <h2 id="final-cta-heading">Book the right first step.</h2>
          <p>
            If your team, organisation, or personal workflow needs AI to become clearer, safer, and more useful, start with the route that fits: an organisation offer or a professional learning lab.
          </p>
          <ButtonLink href="/contact" variant="light">
            Book a practical AI fit call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
