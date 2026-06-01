import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { EditorialImage } from "@/components/EditorialImage";
import { JsonLd } from "@/components/JsonLd";
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
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema";

const homeDescription =
  "Practical AI training and adoption support for teams, training providers, community organisations, and professionals who need safer, repeatable AI workflows.";

export const metadata = pageMetadata({
  title: "Verdantia | Practical AI Training, Learning & Adoption Support",
  description: homeDescription,
});

const proofItems = [
  {
    label: "Founder-led",
    copy: "Gbemi Akadiri leads the work directly and has delivered Microsoft Copilot and introductory AI training for public-sector, financial-services, and workplace teams.",
  },
  {
    label: "Built for teams",
    copy: "Designed for teams already using AI for drafts, summaries, research, or planning who need clearer habits before heavier automation.",
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
    copy: "For a 10–50 person team where some staff use ChatGPT, Copilot, Claude, or Gemini, but nobody has agreed what data is safe, what outputs need review, or which tasks should become normal practice.",
  },
  {
    title: "Training providers",
    copy: "For providers that need a practical GenAI module, half-day workshop, or client-ready session covering tool choice, safer prompting, output review, and workplace examples.",
  },
  {
    title: "Nonprofits and community organisations",
    copy: "For small staff or volunteer teams that need accessible AI help for funding drafts, event planning, volunteer communications, reporting, research, or admin — without enterprise jargon.",
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
    copy: "A one-page view of current tool use, confidence, risky habits, repeated tasks, and immediate opportunities.",
  },
  {
    title: "Workflow map",
    eyebrow: "Working map",
    copy: "A one-page map showing the task, input data, AI role, human review point, risk level, owner, and next action.",
  },
  {
    title: "Prompt library",
    eyebrow: "Reusable prompts",
    copy: "Starter prompts for agreed team tasks, with context fields, safe-use notes, review criteria, and weak prompt → improved prompt examples.",
  },
  {
    title: "Responsible-use checklist",
    eyebrow: "Responsible use",
    copy: "What not to paste, when to use synthetic data, when to check sources, who reviews output before sharing, and when AI should not be used.",
  },
] as const;

const problemCards = [
  {
    title: "Access is not adoption.",
    copy: "Teams can have ChatGPT, Copilot, Claude, or Gemini and still lack shared confidence about where AI belongs.",
  },
  {
    title: "Prompts are not process.",
    copy: "Useful AI work needs repeatable workflows, review habits, and clear examples people can return to.",
  },
  {
    title: "Automation comes after judgement.",
    copy: "The sensible sequence is to map the work, risks, and review model before building heavier systems.",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="home-page">
      <JsonLd
        data={graphSchema([
          webPageSchema({
            name: "Verdantia",
            description: homeDescription,
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ])}
      />
      <HomeLoader />
      <ScrollReveal />
      <ReactiveArtifactField />

      <section className="home-hero premium-home-hero" aria-labelledby="hero-heading">
        <div className="hero-atmosphere" aria-hidden="true">
          <EditorialImage assetKey="homeHero" fill priority decorative sizes="100vw" />
        </div>

        <div className="shell hero-grid premium-hero-grid">
          <div className="hero-copy premium-hero-copy">
            <p className="eyebrow">Dublin + remote · Practical AI training for teams</p>
            <h1 id="hero-heading">Turn scattered AI use into safe, repeatable team workflows.</h1>
            <p className="hero-lede">
              Verdantia helps teams learn when to use AI, how to use it well, and how to turn promising experiments into practical working habits.
            </p>
            <p>
              Most teams start with the half-day Practical AI Workshop. Use a briefing if leaders need a baseline first; move to an adoption day or sprint when workflows are ready to map.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact?enquiryType=Practical%20AI%20Workshop">Book an AI adoption call</ButtonLink>
              <ButtonLink href="/offers" variant="secondary" className="hero-secondary-link">
                View workshops
              </ButtonLink>
            </div>
            <dl className="hero-commercial-strip" aria-label="Verdantia workshop summary">
              <div>
                <dt>Most common start</dt>
                <dd>Practical AI Workshop</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Half-day · remote or onsite</dd>
              </div>
              <div>
                <dt>Leave with</dt>
                <dd>Prompts, checklist, next steps</dd>
              </div>
            </dl>
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

      <div className="shell hero-proof-strip premium-proof-strip" aria-label="Verdantia summary">
        {proofItems.map((item, index) => (
          <article key={item.label} style={{ "--proof-index": index } as CSSProperties}>
            <span>{item.label}</span>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>

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
            <div className="problem-card-grid" role="list" aria-label="Common AI adoption gaps">
              {problemCards.map((item, index) => (
                <article key={item.title} role="listitem" style={{ "--problem-index": index } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            For most teams already experimenting with AI, the Practical AI Workshop is the likely starting point. The other offers keep the route proportionate when you need less or more.
          </p>
        </div>
        <div className="shell">
          <OfferLadder />
        </div>
        <div className="shell flagship-offer-callout" aria-labelledby="home-flagship-heading">
          <div>
            <p className="section-kicker">Most common starting point</p>
            <h3 id="home-flagship-heading">Practical AI Workshop for teams already experimenting.</h3>
            <p>
              A half-day session for teams using ChatGPT, Copilot, Claude, Gemini, or Perplexity informally. Participants practise safer prompts, compare outputs, review privacy and quality risks, and capture realistic team use cases.
            </p>
          </div>
          <div className="flagship-offer-actions">
            <ButtonLink href="/offers/practical-ai-workshop">See workshop details</ButtonLink>
            <ButtonLink href="/resources" variant="secondary">Preview materials</ButtonLink>
          </div>
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
            <EditorialImage
              assetKey="founderPortrait"
              fill={false}
              sizes="(max-width: 900px) 88vw, 280px"
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
            Send a short brief and Verdantia will recommend the lightest useful starting point: briefing, workshop, adoption day, sprint, learning lab, or no engagement yet.
          </p>
          <ButtonLink href="/contact" variant="light">
            Request a practical AI fit call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
