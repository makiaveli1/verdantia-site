import { AIPathfinder } from "@/components/AIPathfinder";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Pathfinder | Verdantia",
  description:
    "Use Verdantia's AI Pathfinder to turn a loose AI conversation into a practical starting brief for team training, adoption support, learning labs, or partnership delivery.",
  path: "/pathfinder",
});

const resultUses = [
  {
    title: "Use it before a call",
    copy: "Turn a vague AI enquiry into a short brief with audience, tools, workflow clarity, risks, and realistic format.",
  },
  {
    title: "Avoid over-scoping",
    copy: "The recommendation favours the lightest useful starting point rather than pushing every team into a sprint.",
  },
  {
    title: "Share the context",
    copy: "Copy the generated brief or carry it straight into the contact form so the first conversation starts concrete.",
  },
] as const;

const recommendationRules = [
  "Briefing when the main gap is shared language and Q&A.",
  "Workshop when people need hands-on practice and safer prompting habits.",
  "Adoption Day when workflows need mapping and reusable material.",
  "Sprint when adoption is already moving and needs support over time.",
] as const;

export default function PathfinderPage() {
  return (
    <main id="main" className="inner-page offers-page-premium pathfinder-page">
      <PageHero
        kicker="AI Pathfinder"
        title="Find the lightest useful AI starting point."
        visual="capabilities"
        meta={["Team route", "Learning labs", "Partner delivery", "Brief ready"]}
        actions={
          <>
            <ButtonLink href="#pathfinder-tool">Start the Pathfinder</ButtonLink>
            <ButtonLink href="/offers#offer-ladder" variant="secondary">
              Compare offers
            </ButtonLink>
          </>
        }
      >
        <p>
          A focused decision tool for teams, training providers, community groups, and individual professionals who need practical AI support without guessing the package first.
        </p>
      </PageHero>

      <div id="pathfinder-tool">
        <AIPathfinder />
      </div>

      <section className="section pathfinder-explainer-section" aria-labelledby="pathfinder-explainer-heading">
        <div className="shell pathfinder-explainer">
          <div>
            <p className="section-kicker">How to use the result</p>
            <h2 id="pathfinder-explainer-heading">A better first conversation, not a pretend diagnosis.</h2>
            <p>
              The Pathfinder is deliberately simple. It translates the current situation into a practical starting route, then gives you enough context to discuss scope, timing, and risk properly.
            </p>
          </div>
          <div className="pathfinder-explainer-grid" role="list" aria-label="Ways to use the Pathfinder result">
            {resultUses.map((item) => (
              <article key={item.title} role="listitem">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pathfinder-rules-section" aria-labelledby="pathfinder-rules-heading">
        <div className="shell pathfinder-rules-panel">
          <div>
            <p className="section-kicker">Recommendation logic</p>
            <h2 id="pathfinder-rules-heading">How the Pathfinder chooses a route.</h2>
          </div>
          <ul>
            {recommendationRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="pathfinder-cta-heading">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Next step</p>
          <h2 id="pathfinder-cta-heading">Already know what you need?</h2>
          <p>
            Skip the Pathfinder and send Verdantia a short note about the team, learner group, or workflow you want to improve.
          </p>
          <div className="final-cta-actions">
            <ButtonLink href="/offers#offer-ladder" variant="light">
              Compare offers
            </ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Book a practical AI call
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
