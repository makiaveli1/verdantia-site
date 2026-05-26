import { BrandMark } from "@/components/BrandMark";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Digital Products | Verdantia",
  description:
    "Explore how Verdantia thinks about focused digital tools that support practical AI training, workflow clarity, and adoption.",
  path: "/products",
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
    <main id="main" className="inner-page">
      <PageHero
        kicker="Products"
        title="Focused digital tools for practical AI work."
        visual="products"
        meta={["Focused tools", "Workflow clarity", "Practical AI thinking"]}
        actions={<ButtonLink href="/contact">Discuss a practical tool need</ButtonLink>}
      >
        <p>
          Verdantia’s product thinking focuses on small, useful tools that make
          AI-supported work easier to understand, repeat, and improve.
        </p>
      </PageHero>

      <section className="section product-studio-section" aria-labelledby="product-studio-heading">
        <div className="shell product-studio-grid">
          <div className="product-studio-copy">
            <p className="section-kicker">Digital tools</p>
            <h2 id="product-studio-heading">Tools should make the work clearer, not louder.</h2>
            <p>
              If Verdantia releases tools, they will support the same practical
              goal as the training work: clearer workflows, safer habits, and
              reusable materials.
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
            <p className="section-kicker">Product direction</p>
            <h2 id="product-roadmap-heading">No public product is being sold here yet.</h2>
            <p>
              Focused tools may follow when they clearly support team training,
              workflow clarity, and practical adoption work.
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
