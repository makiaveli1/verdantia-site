import { AIPathfinder } from "@/components/AIPathfinder";
import { ButtonLink } from "@/components/ButtonLink";
import { OfferLadder } from "@/components/OfferLadder";
import { PageHero } from "@/components/PageHero";
import { offers } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Training & Adoption Offers | Verdantia",
  description:
    "Explore Verdantia's practical AI offer ladder: AI Team Briefing, Practical AI Workshop, AI Adoption Day, and AI Adoption Sprint.",
  path: "/offers",
});

const routeSteps = [
  {
    title: "Clarify the team need",
    copy: "Start with the current reality: tools in use, team confidence, risky habits, bottlenecks, and what better work should look like.",
  },
  {
    title: "Choose the lightest useful offer",
    copy: "The entry point should match the team’s urgency, budget, and maturity — a briefing when clarity is enough, a sprint when deeper support is needed.",
  },
  {
    title: "Leave useful material behind",
    copy: "Each engagement produces something reusable: a checklist, prompts, workflow map, roadmap, or team guidance.",
  },
  {
    title: "Deepen only when the use case is clear",
    copy: "Automation, custom assistants, and deeper adoption support make sense once the team knows the workflow, data, and review model.",
  },
] as const;

const segmentAngles = [
  {
    title: "SMEs and small corporate teams",
    copy: "Turn scattered AI use into safer, more repeatable workflows without a heavyweight transformation programme.",
  },
  {
    title: "Training providers",
    copy: "Add practical GenAI delivery capacity for learners, corporate clients, or short-course programmes.",
  },
  {
    title: "Nonprofits and community organisations",
    copy: "Give small teams accessible AI literacy and workflow support without drowning them in enterprise jargon.",
  },
] as const;

export default function OffersPage() {
  return (
    <main id="main" className="inner-page offers-page-premium">
      <PageHero
        kicker="Offers"
        title="Choose the lightest useful AI adoption step."
        visual="capabilities"
        meta={["Briefings", "Workshops", "Adoption sprints"]}
        actions={
          <>
            <ButtonLink href="#offer-ladder">Compare offers</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send a useful brief
            </ButtonLink>
          </>
        }
      >
        <p>
          Verdantia’s offer ladder is deliberately simple: start with the amount of structure your team actually needs, then deepen only when the work justifies it.
        </p>
      </PageHero>

      <section id="offer-ladder" className="section capability-index-section scroll-rise" aria-labelledby="offer-ladder-heading">
        <div className="shell section-heading">
          <p className="section-kicker">Offer ladder</p>
          <h2 id="offer-ladder-heading">From shared baseline to adoption system.</h2>
          <p>
            The goal is not to sell more AI activity for its own sake. It is to give teams the lightest useful intervention that creates clarity, confidence, and repeatable next steps.
          </p>
        </div>

        <div className="shell">
          <OfferLadder context="offers" />
        </div>
      </section>

      <section className="section offer-comparison-section" aria-labelledby="comparison-heading">
        <div className="shell offer-comparison-layout">
          <div>
            <p className="section-kicker">Buying clarity</p>
            <h2 id="comparison-heading">What each offer is meant to resolve.</h2>
          </div>
          <div className="comparison-table" role="table" aria-label="Verdantia offer comparison">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">Offer</span>
              <span role="columnheader">Best question</span>
              <span role="columnheader">Primary leave-behind</span>
            </div>
            {offers.map((offer, index) => (
              <div className="comparison-row" role="row" key={offer.title}>
                <span role="cell">{offer.title}</span>
                <span role="cell">
                  {index === 0
                    ? "Where should we start?"
                    : index === 1
                      ? "How should the team use AI safely?"
                      : index === 2
                        ? "Which workflows should improve first?"
                        : "How do we make adoption stick?"}
                </span>
                <span role="cell">{offer.outputs[offer.outputs.length - 1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section adoption-map-section" aria-labelledby="route-heading">
        <div className="shell adoption-map">
          <div>
            <p className="section-kicker">How to choose</p>
            <h2 id="route-heading">The route should match the maturity of the team.</h2>
          </div>
          <div className="adoption-stage-list">
            {routeSteps.map((stage, index) => (
              <article key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-posture-section" aria-labelledby="segments-heading">
        <div className="shell company-posture">
          <div>
            <p className="section-kicker">Who this is for</p>
            <h2 id="segments-heading">Three types of teams Verdantia can help.</h2>
          </div>
          <div className="posture-cards">
            {segmentAngles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="pathfinder">
        <AIPathfinder />
      </div>

      <section className="section final-cta compact-cta" aria-labelledby="offers-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Next step</p>
          <h2 id="offers-cta">Not sure which offer fits?</h2>
          <p>
            Send a short note about your team, current AI use, and the work you want to improve. Verdantia can recommend the lightest sensible starting point.
          </p>
          <ButtonLink href="/contact" variant="light">
            Send a useful brief
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
