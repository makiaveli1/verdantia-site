import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { offerPages, offers, type TeamOffer } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, graphSchema, serviceOfferSchema, webPageSchema } from "@/lib/schema";

type OfferPageData = TeamOffer;

function findOffer(slug: string): OfferPageData | undefined {
  return offerPages.find((offer) => offer.slug === slug);
}

function relatedOfferFor(token: string): OfferPageData | undefined {
  return offerPages.find((offer) => offer.slug === token || offer.title === token || offer.shortTitle === token);
}

function nextCoreOffer(current: OfferPageData) {
  const currentIndex = offers.findIndex((offer) => offer.slug === current.slug);
  if (currentIndex < 0) return null;
  return offers[currentIndex + 1] ?? null;
}

function previousCoreOffer(current: OfferPageData) {
  const currentIndex = offers.findIndex((offer) => offer.slug === current.slug);
  if (currentIndex < 0) return null;
  return offers[currentIndex - 1] ?? null;
}

function uniqueOfferPages(items: readonly (OfferPageData | null | undefined)[]) {
  const seen = new Set<string>();

  return items.filter((item): item is OfferPageData => {
    if (!item || seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

export function generateStaticParams() {
  return offerPages.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offer = findOffer(slug);

  if (!offer) {
    return pageMetadata({
      title: "Offer not found | Verdantia",
      description: "The requested Verdantia offer page could not be found.",
      path: `/offers/${slug}`,
      robots: { index: false, follow: false },
    });
  }

  return pageMetadata({
    title: offer.detail.seo.title,
    description: offer.detail.seo.description,
    path: offer.path,
  });
}

export default async function OfferDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = findOffer(slug);

  if (!offer) notFound();

  const previous = previousCoreOffer(offer);
  const next = nextCoreOffer(offer);
  const relatedOffers = offer.detail.related.map(relatedOfferFor).filter((item): item is OfferPageData => Boolean(item));

  return (
    <main id="main" className="inner-page workshop-page offer-detail-page">
      <JsonLd
        data={graphSchema([
          webPageSchema({
            name: offer.detail.seo.title.replace(" | Verdantia", ""),
            description: offer.detail.seo.description,
            path: offer.path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Offers", path: "/offers" },
            { name: offer.title, path: offer.path },
          ]),
          serviceOfferSchema(offer),
          faqPageSchema([...offer.detail.faqs]),
        ])}
      />

      <PageHero
        kicker={offer.detail.hero.kicker}
        title={offer.detail.hero.title}
        visual="capabilities"
        assetSrc={offer.detail.hero.asset}
        assetAlt={offer.detail.hero.alt}
        meta={offer.detail.hero.meta}
        actions={
          <>
            <ButtonLink href={offer.contactHref}>{offer.ctaLabel.replace("View", "Request")}</ButtonLink>
            <ButtonLink href="/offers#offer-ladder" variant="secondary">
              Compare team offers
            </ButtonLink>
          </>
        }
      >
        <p>{offer.detail.hero.body}</p>
      </PageHero>

      <section className="section workshop-signal-section scroll-rise" aria-labelledby="offer-signals-heading">
        <div className="shell workshop-signal-panel">
          <div>
            <p className="section-kicker">You probably need this if</p>
            <h2 id="offer-signals-heading">{offer.bestWhen}</h2>
            <p>{offer.bestFor}</p>
          </div>
          <ul className="signal-checklist" aria-label={`${offer.title} fit signals`}>
            {offer.detail.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section workshop-flow-section scroll-rise" aria-labelledby="offer-flow-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">What happens</p>
          <h2 id="offer-flow-heading">A focused sequence for {offer.shortTitle.toLowerCase()}.</h2>
          <p>{offer.summary}</p>
        </div>
        <div className="shell workshop-flow-grid" role="list" aria-label={`${offer.title} flow`}>
          {offer.detail.flow.map((item, index) => (
            <article key={item.title} role="listitem">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {offer.detail.workExamples ? (
        <section className="section workshop-practice-section scroll-rise" aria-labelledby="offer-practice-heading">
          <div className="shell workshop-practice-layout">
            <div>
              <p className="section-kicker">Working material</p>
              <h2 id="offer-practice-heading">The page stays close to real work.</h2>
              <p>
                These are the kinds of inputs, examples, or decisions the engagement can work through, depending on the brief.
              </p>
            </div>
            <ul className="practice-list">
              {offer.detail.workExamples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section material-preview-section scroll-rise" aria-labelledby="offer-deliverables-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">What your team leaves with</p>
          <h2 id="offer-deliverables-heading">Concrete material, not a vague AI pep talk.</h2>
          <p>{offer.leaveWith}</p>
        </div>
        <div className="shell material-preview-grid" role="list" aria-label={`${offer.title} deliverables`}>
          {offer.detail.deliverables.map((item) => (
            <article className="material-preview-card" key={item.title} role="listitem">
              <span>Working output</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section fit-section scroll-rise" aria-labelledby="offer-fit-heading">
        <div className="shell fit-grid">
          <article className="fit-card fit-card-positive">
            <p className="section-kicker">Good fit if</p>
            <h2 id="offer-fit-heading">This matches the decision you need to make now.</h2>
            <ul>
              {offer.detail.fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="fit-card">
            <p className="section-kicker">Not the right fit if</p>
            <h2>Another route would be cleaner.</h2>
            <ul>
              {offer.detail.notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section workshop-detail-section scroll-rise" aria-labelledby="offer-format-heading">
        <div className="shell workshop-detail-panel">
          <div>
            <p className="section-kicker">Format and price guide</p>
            <h2 id="offer-format-heading">{offer.detail.format.title}</h2>
            <p>
              Public guide: {offer.price}. {offer.detail.format.copy}
            </p>
          </div>
          {offer.detail.format.steps ? (
            <div className="workshop-detail-list">
              <span>Typical path</span>
              <ol>
                {offer.detail.format.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section offer-route-section scroll-rise" aria-labelledby="offer-related-heading">
        <div className="shell offer-buyer-fit-layout">
          <div className="offer-buyer-fit-copy">
            <p className="section-kicker">Where this sits</p>
            <h2 id="offer-related-heading">Start where the work actually is.</h2>
            <p>{offer.nextStep}</p>
          </div>
          <div className="offer-route-grid" role="list" aria-label="Related Verdantia offer routes">
            {uniqueOfferPages([previous, offer, next, ...relatedOffers]).map((item) => (
              <article className="offer-route-card" key={item.slug} role="listitem" data-current={item.slug === offer.slug ? "true" : undefined}>
                <h3>{item.title}</h3>
                <p>{item.buyerQuestion}</p>
                <ButtonLink href={item.slug === offer.slug ? item.contactHref : item.href} variant="secondary">
                  {item.slug === offer.slug ? item.ctaLabel.replace("View", "Request") : "View details"}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section offer-faq-section scroll-rise" aria-labelledby="offer-faq-heading">
        <div className="shell offer-faq-layout">
          <div className="offer-faq-heading">
            <p className="section-kicker">Buyer questions</p>
            <h2 id="offer-faq-heading">Quick answers before you enquire.</h2>
          </div>
          <div className="faq-grid" role="list" aria-label={`${offer.title} questions`}>
            {offer.detail.faqs.map((item) => (
              <article className="faq-card" key={item.question} role="listitem">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="offer-cta-heading">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Next step</p>
          <h2 id="offer-cta-heading">Send the context for {offer.title.toLowerCase()}.</h2>
          <p>
            Share the team, workflow, learner, or campaign context. Verdantia can then respond with fit, scope, and a sensible next step.
          </p>
          <div className="final-cta-actions">
            <ButtonLink href={offer.contactHref} variant="light">
              {offer.ctaLabel.replace("View", "Request")}
            </ButtonLink>
            <ButtonLink href="/pathfinder" variant="light">
              Use the AI Pathfinder first
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
