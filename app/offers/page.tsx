import { AIPathfinder } from "@/components/AIPathfinder";
import { ButtonLink } from "@/components/ButtonLink";
import { OfferLadder } from "@/components/OfferLadder";
import { PageHero } from "@/components/PageHero";
import { individualLearningTracks, offers } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Training, Adoption & Learning Offers | Verdantia",
  description:
    "Explore Verdantia's practical AI training and adoption options for teams, training providers, and community organisations, with a separate learning-labs route for individual professionals.",
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

const buyerRoutes = [
  {
    title: "Buying for a team",
    copy: "Compare the organisation offer ladder: briefing, workshop, adoption day, or sprint.",
    href: "#offer-ladder",
    cta: "Compare team offers",
  },
  {
    title: "Buying for yourself",
    copy: "Use the professional learning-labs lane for small-group skill-building and workflow clinics.",
    href: "/learning",
    cta: "Explore learning labs",
  },
  {
    title: "Training provider or community group",
    copy: "Discuss delivery capacity, a specialist module, or accessible workshop support for your learners.",
    href: "/contact?enquiryType=Training%20provider%20partnership",
    cta: "Discuss the route",
  },
] as const;

export default function OffersPage() {
  return (
    <main id="main" className="inner-page offers-page-premium">
      <PageHero
        kicker="Offers"
        title="Choose the lightest useful AI step for your team."
        visual="capabilities"
        meta={["Team briefings", "Workshops", "Adoption days", "Sprints"]}
        actions={
          <>
            <ButtonLink href="#offer-ladder">Compare team offers</ButtonLink>
            <ButtonLink href="/learning" variant="secondary">
              Individual? Explore learning labs
            </ButtonLink>
          </>
        }
      >
        <p>
          Verdantia’s organisation offers are deliberately simple: start with the level of support your team needs now, then deepen only when the work justifies it.
        </p>
      </PageHero>

      <section className="section offer-route-section scroll-rise" aria-labelledby="offer-route-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Choose the right route</p>
          <h2 id="offer-route-heading">Choose the right buying route.</h2>
          <p>
            Organisation work stays in the team offer ladder. Individual professional development lives in the learning-labs lane, so neither route gets muddied.
          </p>
        </div>
        <div className="shell offer-route-grid" role="list" aria-label="Verdantia buyer routes">
          {buyerRoutes.map((route) => (
            <article className="offer-route-card" key={route.title} role="listitem">
              <h3>{route.title}</h3>
              <p>{route.copy}</p>
              <ButtonLink href={route.href} variant="secondary">
                {route.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section id="offer-ladder" className="section capability-index-section scroll-rise" aria-labelledby="offer-ladder-heading">
        <div className="shell section-heading">
          <p className="section-kicker">Ways to start</p>
          <h2 id="offer-ladder-heading">From shared baseline to practical adoption support.</h2>
          <p>
            The goal is not to sell more AI activity for its own sake. It is to give teams, training providers, and community organisations the lightest useful intervention that creates clarity, confidence, and repeatable next steps.
          </p>
        </div>

        <div className="shell">
          <OfferLadder context="offers" />
        </div>
      </section>

      <section className="section offer-curriculum-section" aria-labelledby="offer-curriculum-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Inside the work</p>
          <h2 id="offer-curriculum-heading">Each offer has a clear shape.</h2>
          <p>
            Sessions are built around practical exercises, useful examples, and materials people can keep using after the work ends.
          </p>
        </div>
        <div className="shell offer-curriculum-grid" role="list" aria-label="What happens inside each Verdantia team offer">
          {offers.map((offer) => (
            <article className="offer-curriculum-card" key={offer.title} role="listitem">
              <div className="offer-curriculum-card-header">
                <span>{offer.level}</span>
                <h3>{offer.title}</h3>
                <p>{offer.duration}</p>
              </div>
              <div className="offer-curriculum-columns">
                <div>
                  <strong>In the room</strong>
                  <ul>
                    {offer.inRoom.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>You practise</strong>
                  <ul>
                    {offer.practice.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="offer-curriculum-next">
                <span>Next sensible step</span>
                <p>{offer.nextStep}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section offer-comparison-section" aria-labelledby="comparison-heading">
        <div className="shell offer-comparison-layout">
          <div>
            <p className="section-kicker">Buying clarity</p>
            <h2 id="comparison-heading">What each offer is meant to resolve.</h2>
          </div>
          <div className="comparison-table" role="table" aria-label="Verdantia offer comparison" tabIndex={0}>
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">Offer</span>
              <span role="columnheader">Best question</span>
              <span role="columnheader">Intensity</span>
              <span role="columnheader">Leave-behind</span>
            </div>
            {offers.map((offer) => (
              <div className="comparison-row" role="row" key={offer.title}>
                <span role="cell">{offer.title}</span>
                <span role="cell">{offer.buyerQuestion}</span>
                <span role="cell">{offer.intensity}</span>
                <span role="cell">{offer.leaveWith}</span>
              </div>
            ))}
          </div>
          <p className="comparison-scroll-hint">Swipe sideways to compare the full table.</p>
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
            <h2 id="segments-heading">Three organisation routes Verdantia can support.</h2>
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

      <section className="section individual-offer-section" aria-labelledby="individual-offer-heading">
        <div className="shell individual-offer-layout">
          <div>
            <p className="section-kicker">Individual professionals</p>
            <h2 id="individual-offer-heading">A separate learning-labs lane for professionals.</h2>
            <p>
              This is a separate professional-development lane, not a replacement for the organisation offer ladder. It is for individuals who want small-group practice with everyday AI tools, safer habits, and repeatable personal workflows.
            </p>
            <ButtonLink href="/learning" variant="secondary">
              See professional learning labs
            </ButtonLink>
          </div>
          <div className="individual-offer-cards" role="list" aria-label="Individual learning lab options">
            {individualLearningTracks.map((track) => (
              <article key={track.title} role="listitem">
                <span>{track.format}</span>
                <h3>{track.title}</h3>
                <p className="individual-offer-price">{track.price}</p>
                <p>{track.bestFor}</p>
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
            Send a short note about your team, learner group, or individual workflow. Verdantia can recommend the lightest sensible starting point.
          </p>
          <ButtonLink href="/contact" variant="light">
            Book a practical AI call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
