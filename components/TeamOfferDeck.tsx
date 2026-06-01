import type { CSSProperties } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { offers } from "@/lib/site";

const routeNotes = [
  {
    stage: "Align",
    signal: "Leaders need shared language before tools or process change.",
    cta: "View briefing",
    featured: false,
  },
  {
    stage: "Practise",
    signal: "People are already experimenting and need safer shared habits.",
    cta: "View workshop",
    featured: true,
  },
  {
    stage: "Map",
    signal: "Priority workflows, review points, and reusable materials need structure.",
    cta: "View adoption day",
    featured: false,
  },
  {
    stage: "Support",
    signal: "A one-off session will not stick without rhythm, materials, and checkpoints.",
    cta: "View sprint",
    featured: false,
  },
] as const;

export function TeamOfferDeck() {
  return (
    <section id="offer-ladder" className="section team-offer-route-section scroll-rise" aria-labelledby="offer-ladder-heading">
      <div className="shell team-offer-route-layout">
        <aside className="team-offer-route-intro">
          <p className="section-kicker">Team offers</p>
          <h2 id="offer-ladder-heading">Choose the smallest useful team step.</h2>
          <p>
            Start with alignment, practice, workflow mapping, or follow-through. Each route has a focused detail page when you want the full scope.
          </p>
          <div className="team-offer-route-intro-grid" aria-label="Fast guidance for choosing a team offer">
            <div>
              <span>Lightest step</span>
              <strong>Briefing</strong>
              <p>For shared language before deeper change.</p>
            </div>
            <div>
              <span>Common default</span>
              <strong>Workshop</strong>
              <p>For practical hands-on team habits.</p>
            </div>
          </div>
        </aside>

        <div className="team-offer-route-board" aria-label="Verdantia team offer route matrix">
          <div className="team-offer-route-board-header">
            <div>
              <span>Route matrix</span>
              <strong>Pick by the job, not by the package name.</strong>
            </div>
            <ButtonLink href="/pathfinder" variant="secondary" className="team-offer-route-pathfinder">
              Use the AI Pathfinder
            </ButtonLink>
          </div>

          <div className="team-offer-route-rows">
            {routeNotes.map((route, index) => {
              const offer = offers[index]!;

              return (
                <article
                  className={`team-offer-route-row${route.featured ? " is-featured" : ""}`}
                  key={offer.title}
                  style={{ "--route-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <div className="team-offer-route-stage">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{route.stage}</strong>
                    <em>{offer.level}</em>
                  </div>

                  <div className="team-offer-route-main">
                    <div className="team-offer-route-main-topline">
                      <span>{offer.buyerQuestion}</span>
                      {route.featured ? <em>Most common starting point</em> : null}
                    </div>
                    <h3>
                      <Link href={offer.href}>{offer.title}</Link>
                    </h3>
                    <p>{route.signal}</p>
                  </div>

                  <dl className="team-offer-route-meta">
                    <div>
                      <dt>Format</dt>
                      <dd>{offer.duration}</dd>
                    </div>
                    <div>
                      <dt>Price guide</dt>
                      <dd>{offer.priceDisplay}</dd>
                    </div>
                  </dl>

                  <div className="team-offer-route-outcome">
                    <span>Team leaves with</span>
                    <p>{offer.leaveWith}</p>
                    <ButtonLink href={offer.href} variant={route.featured ? "primary" : "secondary"}>
                      {route.cta}
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="team-offer-route-footer">
            <p>
              Not sure which route fits? Use the Pathfinder or send the context. Verdantia will recommend the lightest useful step, including no next step if that is the honest answer.
            </p>
            <ButtonLink href="/contact?enquiryType=Other" variant="secondary">
              Request a practical AI call
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
