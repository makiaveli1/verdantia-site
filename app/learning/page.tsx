import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { individualLearningTracks, toolGroups } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Learning Labs for Professionals | Verdantia",
  description:
    "Explore Verdantia's small practical AI learning labs for professionals who want tool fluency, workflow confidence, and guided AI skill-building.",
  path: "/learning",
});

const learningPrinciples = [
  "Small groups make practice easier.",
  "Workflow practice before tool collecting.",
  "Clear judgement before shortcuts.",
  "Reusable personal systems after each session.",
] as const;

const learnerSituations = [
  {
    title: "You use AI occasionally but not systematically",
    copy: "You want a reliable way to use AI for writing, research, planning, analysis, or presentations without guessing every time.",
  },
  {
    title: "Your role is changing around AI",
    copy: "You need practical fluency with the tools showing up at work, and you want to understand what to trust, check, and avoid.",
  },
  {
    title: "You want to build a useful AI-supported workflow",
    copy: "You have a project, repeated task, or idea and need help turning it into a simple workflow, assistant brief, or prototype plan.",
  },
] as const;

export default function LearningPage() {
  return (
    <main id="main" className="inner-page learning-page">
      <PageHero
        kicker="Learning labs"
        title="Practical AI skill-building for individual professionals."
        visual="capabilities"
        meta={["Small groups", "Live practice", "Workflow-led", "Practical support"]}
        actions={
          <>
            <ButtonLink href="#learning-tracks">Explore learning tracks</ButtonLink>
            <ButtonLink href="/offers" variant="secondary">
              Buying for a team?
            </ButtonLink>
          </>
        }
      >
        <p>
          Verdantia’s learning labs are a separate professional-development lane for individuals who want practical AI fluency for their own work: clearer tool choice, safer prompting, better review habits, and repeatable workflows. If you are buying for a team, training provider, or community organisation, start with the organisation offers.
        </p>
      </PageHero>

      <section className="section learning-position-section" aria-labelledby="learning-position-heading">
        <div className="shell learning-position-grid">
          <div>
            <p className="section-kicker">Learning approach</p>
            <h2 id="learning-position-heading">Learn through the work you already do.</h2>
            <p>
              The labs focus on practical use: writing, research, planning, presentations, analysis, and simple workflows people can repeat after the session.
            </p>
          </div>
          <ul className="learning-principles" aria-label="Learning lane principles">
            {learningPrinciples.map((principle, index) => (
              <li key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{principle}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="learning-tracks" className="section learning-tracks-section" aria-labelledby="learning-tracks-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Learning tracks</p>
          <h2 id="learning-tracks-heading">Three practical ways to build AI fluency.</h2>
          <p>
            Each track is small, hands-on, and focused on using AI well in real work rather than collecting tools for the sake of it.
          </p>
        </div>
        <div className="shell learning-track-grid" role="list" aria-label="Verdantia individual AI learning tracks">
          {individualLearningTracks.map((track, index) => (
            <article className="learning-track-card" key={track.title} role="listitem">
              <div className="learning-track-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{track.format}</span>
              </div>
              <h3>{track.title}</h3>
              <p className="learning-track-price">{track.price}</p>
              <p>{track.bestFor}</p>
              <div className="learning-track-outcome">
                <span>Outcome</span>
                <p>{track.outcome}</p>
              </div>
              <ul aria-label={`${track.title} modules`}>
                {track.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
              <ButtonLink
                href={`/contact?enquiryType=${encodeURIComponent(track.title)}&message=${encodeURIComponent(
                  `I’m interested in ${track.title}. My role/context is: ... The workflow I want to improve is: ...`,
                )}`}
                variant="secondary"
              >
                {track.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section learner-situations-section" aria-labelledby="learner-situations-heading">
        <div className="shell learner-situations-panel">
          <div>
            <p className="section-kicker">Who this helps</p>
            <h2 id="learner-situations-heading">Good fit if you want practical AI skill, not tool trivia.</h2>
          </div>
          <div className="learner-situation-grid" role="list" aria-label="Individual professional situations Verdantia can support">
            {learnerSituations.map((situation) => (
              <article key={situation.title} role="listitem">
                <h3>{situation.title}</h3>
                <p>{situation.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section learning-tools-section" aria-labelledby="learning-tools-heading">
        <div className="shell tools-layout learning-tools-layout">
          <div className="tools-intro">
            <p className="section-kicker">Tools covered when useful</p>
            <h2 id="learning-tools-heading">Build fluency across tools, then choose by workflow.</h2>
            <p>
              Labs can cover everyday AI assistants, research tools, creative workflows, and automation basics. The aim is not to memorise a tool list; it is to build judgement and repeatable personal systems.
            </p>
          </div>
          <div className="tool-cluster-grid" role="list" aria-label="AI tool groups for individual learning labs">
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

      <section className="section final-cta compact-cta" aria-labelledby="learning-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Learning enquiry</p>
          <h2 id="learning-cta">Want a professional AI learning lab?</h2>
          <p>
            Send a short note about your role, current AI tools, budget, and the workflows you want to improve. Verdantia can recommend the right lab or clinic format.
          </p>
          <ButtonLink href="/contact?enquiryType=Individual%20AI%20skills%20lab" variant="light">
            Register interest
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
