import { BrandMark } from "@/components/BrandMark";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Tools & Resources | Verdantia",
  description:
    "Notes on future Verdantia tools and resources that may support practical AI training, workflow clarity, and adoption.",
  path: "/products",
  robots: {
    index: false,
    follow: true,
  },
});

const productPrinciples = [
  "Solve a specific working problem.",
  "Support teams without adding noise.",
  "Design for clarity before adding complexity.",
  "Build useful systems that can improve over time.",
] as const;

const productStages = [
  {
    label: "Research",
    copy: "Understand the team, the work, the constraints, and what a better tool should make easier.",
  },
  {
    label: "Prototype",
    copy: "Design small, testable product concepts before treating the idea as a full platform.",
  },
  {
    label: "Prepare",
    copy: "Share tools when they have a clear audience, a practical promise, and enough context to be useful.",
  },
] as const;

export default function ProductsPage() {
  return (
    <main id="main" className="inner-page products-page">
      <PageHero
        kicker="Resource shelf"
        title="A quiet shelf for future Verdantia tools."
        visual="products"
        asset="products"
        meta={["Training first", "Workflow clarity", "Useful resources"]}
        actions={
          <>
            <ButtonLink href="/resources">View current resources</ButtonLink>
            <ButtonLink href="/offers" variant="secondary">
              Explore the current offers
            </ButtonLink>
          </>
        }
      >
        <p>
          Verdantia is not pretending to have a product suite before the training work earns it. This page keeps future tools clearly subordinate to current resources and offers.
        </p>
      </PageHero>

      <section className="section product-studio-section" aria-labelledby="product-studio-heading">
        <div className="shell product-studio-grid">
          <div className="product-studio-copy">
            <p className="section-kicker">Resource direction</p>
            <h2 id="product-studio-heading">Tools should make the work clearer, not louder.</h2>
            <p>
              Useful resources should solve a real training or adoption problem: helping a team understand the work, repeat a good habit, or keep AI-supported outputs reviewable.
            </p>
          </div>

          <div className="product-system-visual" aria-hidden="true">
            <BrandMark className="product-system-mark" />
            <div className="product-panel panel-one">
              <span />
              <span />
            </div>
            <div className="product-panel panel-two">
              <span />
              <span />
              <span />
            </div>
            <div className="product-panel panel-three">
              <span />
            </div>
            <svg viewBox="0 0 460 260" focusable="false">
              <path d="M46 184c78-92 164-126 258-84 52 23 78 13 112-20" />
              <path d="M106 194c84-74 214-74 298 0" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section product-principles-section" aria-labelledby="product-principles-heading">
        <div className="shell product-principles">
          <div>
            <p className="section-kicker">Resource principles</p>
            <h2 id="product-principles-heading">Any tool should follow the same Verdantia standard.</h2>
          </div>
          <ul>
            {productPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section product-roadmap-section" aria-labelledby="product-roadmap-heading">
        <div className="shell roadmap-panel">
          <div>
            <p className="section-kicker">Resource direction</p>
            <h2 id="product-roadmap-heading">The current support starts with training and adoption work.</h2>
            <p>
              Focused tools may follow when they clearly support team training, workflow clarity, and practical adoption work.
            </p>
          </div>
          <div className="roadmap-steps">
            {productStages.map((stage, index) => (
              <article key={stage.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.label}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="products-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Training first</p>
          <h2 id="products-cta">Start with the current Verdantia offers.</h2>
          <p>
            If you need practical AI support now, begin with the offer ladder or a focused enquiry. Tools and resources are useful when they support that work.
          </p>
          <ButtonLink href="/resources" variant="light">
            View resources
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
