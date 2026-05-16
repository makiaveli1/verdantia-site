import { BrandMark } from "@/components/BrandMark";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Digital Products | Verdantia",
  description:
    "Explore Verdantia's product direction and how future digital products will sit alongside consulting and training work.",
  path: "/products",
});

const productPrinciples = [
  "Solve a specific working problem.",
  "Keep the product story separate from consulting.",
  "Design for clarity before adding complexity.",
  "Build useful systems that can improve over time.",
] as const;

const productStages = [
  {
    label: "Research",
    copy: "Understand the user, the work, the files, the constraints, and what a better tool should make easier.",
  },
  {
    label: "Prototype",
    copy: "Design small, testable product concepts before treating the idea as a full platform.",
  },
  {
    label: "Prepare",
    copy: "Keep public product announcements for the moment when the product has a clear promise and context.",
  },
] as const;

export default function ProductsPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        kicker="Products"
        title="Practical digital products from Verdantia."
        visual="products"
        meta={["Focused tools", "Separate product stories", "Built with practical AI thinking"]}
        actions={<ButtonLink href="/contact">Discuss product thinking</ButtonLink>}
      >
        <p>
          Verdantia builds focused digital products alongside its consulting and
          training work. Product work sits within the wider Verdantia ecosystem,
          giving the company room to grow beyond services while keeping each
          product clear and separate.
        </p>
      </PageHero>

      <section className="section product-studio-section" aria-labelledby="product-studio-heading">
        <div className="shell product-studio-grid">
          <div className="product-studio-copy">
            <p className="section-kicker">Product studio</p>
            <h2 id="product-studio-heading">A place for focused tools, not a distraction from the core offer.</h2>
            <p>
              Verdantia is service-led in this first public version. Product
              work will be shared only when it has a clear audience, a useful
              promise, and a story that can stand apart from consulting.
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
            <p className="section-kicker">Product principles</p>
            <h2 id="product-principles-heading">Product work follows the same Verdantia standard.</h2>
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
            <p className="section-kicker">Future product space</p>
            <h2 id="product-roadmap-heading">No public product is being announced yet.</h2>
            <p>
              The Products page is here to make room for future Verdantia tools
              without confusing the consulting and training story today.
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
    </main>
  );
}
