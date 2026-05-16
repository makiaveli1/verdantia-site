import type { CSSProperties } from "react";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { ButtonLink } from "@/components/ButtonLink";
import {
  AdoptionPathway,
  CapabilityExplorer,
  HeroStudio,
  ScrollReveal,
} from "@/components/HomeExperience";
import { principles } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Verdantia | Practical AI & Digital Enablement in Ireland",
  description:
    "Verdantia helps organisations adopt practical AI through consulting, training, workflow design, prompt libraries, custom assistants, automation, and adoption support.",
});

const operatingModel = [
  {
    title: "Understand the work",
    copy: "We learn how your team works today, where time is lost, and where AI could support better outcomes.",
  },
  {
    title: "Design the workflows",
    copy: "We shape practical workflows, prompt systems, assistant concepts, and automation ideas around real tasks.",
  },
  {
    title: "Enable the team",
    copy: "We deliver training, guides, prompt libraries, champion support, and adoption materials that help new habits stick.",
  },
] as const;

const proofItems = [
  {
    label: "Based in Ireland",
    copy: "Built for Irish SMEs, training partners, consultancies, and teams adopting AI carefully.",
  },
  {
    label: "Tool-agnostic",
    copy: "ChatGPT, Claude, Gemini, Microsoft Copilot, custom assistants, and automation workflows.",
  },
  {
    label: "Trainer plus builder",
    copy: "AI training, workflow design, prompt engineering, and software development experience.",
  },
  {
    label: "Adoption-led",
    copy: "Guides, prompt libraries, champions, feedback loops, and safer working habits.",
  },
] as const;

const beforeItems = [
  "scattered tool usage",
  "inconsistent prompts",
  "unsure staff",
  "unclear risks",
  "no shared workflow",
] as const;

const afterItems = [
  "clearer use cases",
  "reusable prompt systems",
  "trained teams",
  "safer working habits",
  "practical adoption plan",
] as const;

const structureItems = [
  "clearer use cases",
  "better prompts",
  "practical workflows",
  "trained teams",
  "safer habits",
  "reusable materials",
  "adoption support",
] as const;

const productThinkingItems = [
  "workflows that can be reused",
  "guidance that teams can return to",
  "materials that improve with feedback",
] as const;

export default function Home() {
  return (
    <main id="main" className="home-page">
      <ScrollReveal />

      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Practical AI. Real Impact.</p>
            <h1 id="hero-heading">
              Practical AI capability for real-world teams.
            </h1>
            <p className="hero-lede">
              Verdantia helps organisations turn AI interest into useful workflows,
              clearer team skills, and practical adoption systems.
            </p>
            <p>
              We support teams through AI consulting, training, workflow design,
              prompt libraries, custom assistant planning, automation, and adoption
              support.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/capabilities" variant="secondary">
                Explore capabilities
              </ButtonLink>
            </div>
          </div>

          <aside className="hero-stage" aria-label="Verdantia method preview">
            <HeroStudio />
          </aside>
        </div>

        <div className="shell hero-proof-strip" aria-label="Verdantia summary">
          {proofItems.map((item, index) => (
            <article key={item.label} style={{ "--proof-index": index } as CSSProperties}>
              <span>{item.label}</span>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="signal-band" aria-hidden="true">
        <div>
          <span>Consulting / Training / Workflow design / Prompt libraries / Adoption support / Safe AI habits / Custom assistants / Automation /</span>
          <span>Consulting / Training / Workflow design / Prompt libraries / Adoption support / Safe AI habits / Custom assistants / Automation /</span>
        </div>
      </div>

      <section className="section intro-section scroll-rise" aria-labelledby="intro-heading">
        <div className="shell intro-grid">
          <div>
            <p className="section-kicker">Why Verdantia exists</p>
            <h2 id="intro-heading">
              AI works best when it is clear, useful, safe, and repeatable.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Many teams are already testing tools like ChatGPT, Claude, Gemini,
              and Microsoft Copilot. The challenge is turning that experimentation
              into better ways of working.
            </p>
            <p>
              Verdantia helps organisations move from scattered AI usage to
              structured team capability.
            </p>
          </div>
        </div>
      </section>

      <section className="section pathway-section scroll-rise" aria-labelledby="pathway-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Adoption pathway</p>
          <h2 id="pathway-heading">From interest to an operating rhythm.</h2>
          <p>
            A practical route for moving from early experiments to shared ways of
            working that teams can trust and repeat.
          </p>
        </div>
        <div className="shell">
          <AdoptionPathway />
        </div>
      </section>

      <section className="section operating-section scroll-rise" aria-labelledby="model-heading">
        <div className="shell operating-layout">
          <div className="operating-intro">
            <p className="section-kicker">Operating model</p>
            <h2 id="model-heading">Understand. Design. Enable.</h2>
            <p>
              Verdantia works in a practical sequence, so teams can see what AI
              is for, how it should be used, and how the new habits will be
              supported.
            </p>
          </div>
          <div className="operating-stack">
            {operatingModel.map((item, index) => (
              <article
                className="operating-step"
                key={item.title}
                style={{ "--stack-index": index } as CSSProperties}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-system-section scroll-rise" aria-labelledby="capabilities-heading">
        <div className="shell capability-system">
          <aside className="capability-system-intro">
            <p className="section-kicker">Capability system</p>
            <h2 id="capabilities-heading">Capabilities that hold together.</h2>
            <p>
              Verdantia combines training, workflow design, prompt systems, and
              adoption support so AI work becomes clearer and easier to repeat.
            </p>
            <ButtonLink href="/capabilities" variant="secondary">
              Explore capabilities
            </ButtonLink>
          </aside>
          <CapabilityExplorer />
        </div>
      </section>

      <section className="section clarity-section scroll-rise" aria-labelledby="clarity-heading">
        <div className="shell clarity-grid">
          <div className="clarity-copy">
            <p className="section-kicker">The shift</p>
            <h2 id="clarity-heading">
              From scattered AI experiments to practical working systems.
            </h2>
            <p>
              AI adoption often starts with curiosity. Someone tries a tool. A few
              people find useful prompts. A team tests Copilot. A manager wonders
              if automation could help.
            </p>
            <p>But without structure, usage stays inconsistent.</p>
            <p>Verdantia helps organisations create the structure around AI:</p>
            <ul className="chip-list">
              {structureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="transition-board" aria-label="Before and after Verdantia">
            <article className="transition-column">
              <h3>Before Verdantia</h3>
              <ul>
                {beforeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <svg className="transition-route" viewBox="0 0 320 160" aria-hidden="true">
              <path d="M20 104C89 18 221 18 300 104" />
              <path d="M91 104h138" />
            </svg>
            <article className="transition-column after">
              <h3>After Verdantia</h3>
              <ul>
                {afterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section founder-signal-section scroll-rise" aria-labelledby="founder-signal-heading">
        <div className="shell founder-signal">
          <div className="founder-image-shell">
            <Image
              src="/assets/gbemi-akadiri.webp"
              width={900}
              height={900}
              alt="Gbemi Akadiri, founder of Verdantia."
              sizes="(max-width: 900px) 88vw, 280px"
            />
          </div>
          <div>
            <p className="section-kicker">Founder-supported, company-first</p>
            <h2 id="founder-signal-heading">Built from training rooms, workflows, and software thinking.</h2>
            <p>
              Verdantia was founded by Gbemi Akadiri, bringing together AI
              consulting, training, Microsoft Copilot-related enablement, prompt
              engineering, workflow design, software development, and product
              thinking.
            </p>
          </div>
          <div className="founder-proof-list" aria-label="Relevant experience">
            <span>AI training</span>
            <span>Prompt systems</span>
            <span>Workflow design</span>
            <span>Software development</span>
          </div>
        </div>
      </section>

      <section className="section product-thinking-section scroll-rise" aria-labelledby="product-thinking-heading">
        <div className="shell product-thinking-grid">
          <div>
            <p className="section-kicker">Product thinking</p>
            <h2 id="product-thinking-heading">Built beyond one-off sessions.</h2>
            <p>
              Verdantia combines AI training, workflow design, and software
              development experience. That means we care about how people
              actually use tools, how workflows hold together, how guidance is
              reused, and how systems can improve over time.
            </p>
          </div>
          <div className="thinking-stack" aria-label="Product-thinking priorities">
            {productThinkingItems.map((item, index) => (
              <div className="thinking-item" key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section future-products-section scroll-rise" aria-labelledby="products-heading">
        <div className="shell future-products-grid">
          <div>
            <p className="section-kicker">Future products</p>
            <h2 id="products-heading">A place for focused products, kept separate.</h2>
            <p>
              Verdantia can house focused digital products alongside consulting
              and training work. For now, the public site keeps the emphasis on
              AI consulting, training, workflow design, and adoption support.
            </p>
            <ButtonLink href="/products">View products</ButtonLink>
          </div>
          <div className="future-products-visual" aria-hidden="true">
            <BrandMark className="future-products-mark" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section principles-section scroll-rise" aria-labelledby="principles-heading">
        <div className="shell principles-grid">
          <div>
            <p className="section-kicker">The Verdantia way</p>
            <h2 id="principles-heading">Principles before noise.</h2>
          </div>
          <ul className="principle-stack">
            {principles.map((principle, index) => (
              <li key={principle}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{principle}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final-cta scroll-rise" aria-labelledby="final-cta-heading">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Start the work</p>
          <h2 id="final-cta-heading">Let’s make AI useful for your team.</h2>
          <p>
            If your organisation is exploring AI and needs clearer training,
            workflows, prompt systems, or adoption support, Verdantia can help.
          </p>
          <ButtonLink href="/contact" variant="light">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
