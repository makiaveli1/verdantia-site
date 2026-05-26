import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Company | Verdantia",
  description:
    "Learn about Verdantia, a founder-led AI training and adoption practice founded by Gbemi Akadiri.",
  path: "/company",
});

const experience = [
  "AI consulting",
  "AI training",
  "Microsoft Copilot enablement",
  "prompt engineering",
  "workflow design",
  "workflow design",
  "practical delivery",
  "communication with technical and non-technical teams",
] as const;

const workingPosture = [
  {
    title: "Clear support",
    copy: "Verdantia gives organisations a straightforward way to get practical AI training, workshops, and adoption support.",
  },
  {
    title: "Founder-led",
    copy: "Gbemi is visible because trust matters in training. Clients know who is shaping and delivering the work.",
  },
  {
    title: "Practical by design",
    copy: "The work is grounded in training rooms, workflows, communication support, and software thinking.",
  },
] as const;

const teachingPrinciples = [
  {
    title: "Start with the work, not the tool",
    copy: "A prompt only matters if it improves a real task, decision, document, meeting, or workflow. The training starts there.",
  },
  {
    title: "Make judgement visible",
    copy: "Teams need to know what to trust, what to review, what to avoid, and when a human should stay firmly in the loop.",
  },
  {
    title: "Leave people with something reusable",
    copy: "Good sessions should produce prompts, maps, checklists, examples, or next steps the team can return to after the room goes quiet.",
  },
] as const;

export default function CompanyPage() {
  return (
    <main id="main" className="inner-page company-page-premium">
      <PageHero
        kicker="Company"
        title="A founder-led practice for practical AI training and adoption."
        visual="company"
        meta={["Clear offer", "Founder-led", "Practical learning"]}
        actions={<ButtonLink href="/contact">Book a practical AI call</ButtonLink>}
      >
        <p>
          Verdantia helps organisations move from informal AI use to practical capability through training, workflow mapping, prompt systems, and responsible-use guidance.
        </p>
      </PageHero>

      <section className="section company-story-section" aria-labelledby="company-story-heading">
        <div className="shell company-story-grid premium-company-story">
          <div>
            <p className="section-kicker">Why Verdantia exists</p>
            <h2 id="company-story-heading">
              AI adoption needs clear work, careful judgement, and useful materials.
            </h2>
          </div>
          <div className="company-copy-panel">
            <p>
              Verdantia exists for the moment when AI has moved beyond curiosity but has not yet become a reliable team practice.
            </p>
            <p>
              The company’s work is shaped by practical experience across AI training, Microsoft Copilot enablement, communication support, workflow design, and practical delivery.
            </p>
            <p>
              The outcome is intentionally concrete: better team skills, clearer workflows, stronger adoption materials, and safe habits that survive after the workshop ends.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-section" aria-labelledby="founder-heading">
        <div className="shell founder-editorial premium-founder-editorial">
          <div className="founder-portrait">
            <Image
              src="/assets/gbemi-akadiri.webp"
              width={900}
              height={900}
              alt="Gbemi Akadiri, founder of Verdantia."
              sizes="(max-width: 900px) 80vw, 360px"
              priority
            />
          </div>
          <div className="founder-editorial-copy">
            <p className="section-kicker">Founder-led, company-backed</p>
            <h2 id="founder-heading">Clients know who is shaping the work.</h2>
            <p>
              Oluwagbemi Enoch Akadiri, commonly known as Gbemi Akadiri, brings together AI consulting, training, prompt engineering, workflow design, communication support, and practical delivery.
            </p>
          </div>
          <ul className="founder-credentials" aria-label="Relevant experience">
            {experience.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section founder-note-section" aria-labelledby="founder-note-heading">
        <div className="shell founder-note-panel">
          <div className="founder-note-copy">
            <p className="section-kicker">Why I teach AI this way</p>
            <h2 id="founder-note-heading">The awkward middle is where teams need the most help.</h2>
            <p>
              AI usually arrives before the policy, before the workflow, and before everyone agrees what “good use” looks like. Verdantia is built for that middle ground: practical enough for daily work, careful enough for real organisational risk.
            </p>
          </div>
          <div className="founder-note-cards" aria-label="Gbemi's teaching principles">
            {teachingPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-split-section" aria-labelledby="company-split-heading">
        <div className="shell company-split-panel">
          <div>
            <p className="section-kicker">How clients are supported</p>
            <h2 id="company-split-heading">Practical teaching, clear materials, and a reliable route forward.</h2>
          </div>
          <div className="company-split-diagram" aria-label="How Verdantia supports clients">
            <article>
              <span>Verdantia</span>
              <h3>The practical offer</h3>
              <p>Briefings, workshops, adoption days, sprints, and the reusable materials clients take back to their teams.</p>
            </article>
            <svg viewBox="0 0 260 90" aria-hidden="true" focusable="false">
              <path d="M18 52C72 18 180 18 238 52" />
              <path d="M18 58C72 86 180 86 238 58" />
            </svg>
            <article>
              <span>Gbemi</span>
              <h3>The person leading the work</h3>
              <p>Teaching, practical examples, workflow judgement, and direct conversations about what the team needs next.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section company-posture-section" aria-labelledby="posture-heading">
        <div className="shell company-posture">
          <div>
            <p className="section-kicker">How Verdantia works</p>
            <h2 id="posture-heading">Serious, practical, and warm enough for real teams.</h2>
          </div>
          <div className="posture-cards">
            {workingPosture.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="company-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Practical AI support</p>
          <h2 id="company-cta">Talk to Verdantia about practical AI support.</h2>
          <p>
            If your organisation needs grounded advice, training, workflow design, or adoption support, start with a focused conversation.
          </p>
          <ButtonLink href="/contact" variant="light">
            Book a practical AI call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
