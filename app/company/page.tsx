import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Company | Verdantia",
  description:
    "Learn about Verdantia, an Ireland-based AI and digital enablement company founded by Gbemi Akadiri.",
  path: "/company",
});

const experience = [
  "AI consulting",
  "AI training",
  "Microsoft Copilot-related enablement",
  "prompt engineering",
  "workflow design",
  "software development",
  "product thinking",
  "communication with technical and non-technical teams",
] as const;

const workingPosture = [
  {
    title: "Company-first",
    copy: "The site and story lead with Verdantia’s offer, capability, and standards rather than a personal portfolio frame.",
  },
  {
    title: "Founder-supported",
    copy: "Gbemi’s experience gives the work credibility, but the company remains the primary brand.",
  },
  {
    title: "Practical by design",
    copy: "Verdantia’s work is grounded in training rooms, workflows, communication support, and software thinking.",
  },
] as const;

export default function CompanyPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        kicker="Company"
        title="Practical AI and digital enablement, built from real work."
        visual="company"
        meta={["Ireland-based", "Company-first", "Founder-supported"]}
        actions={<ButtonLink href="/contact">Start a conversation</ButtonLink>}
      >
        <p>
          Verdantia was founded by Gbemi Akadiri, an AI consultant, trainer, and
          software developer based in Ireland. The company exists to help
          organisations move from AI curiosity to practical capability.
        </p>
      </PageHero>

      <section className="section company-story-section" aria-labelledby="company-story-heading">
        <div className="shell company-story-grid">
          <div>
            <p className="section-kicker">Why Verdantia exists</p>
            <h2 id="company-story-heading">
              AI adoption needs clear work, careful judgement, and useful materials.
            </h2>
          </div>
          <div className="company-copy-panel">
            <p>
              Verdantia helps organisations adopt AI in ways that are clear,
              useful, safe, and realistic for the teams expected to use it.
            </p>
            <p>
              The company’s work is shaped by practical experience across AI
              training, Microsoft Copilot-related enablement, communication
              support, workflow design, and software development.
            </p>
            <p>
              This keeps the work outcome-focused: better team skills, clearer
              workflows, stronger adoption materials, and digital products that
              solve specific problems.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-section" aria-labelledby="founder-heading">
        <div className="shell founder-editorial">
          <div className="founder-portrait">
            <Image
              src="/assets/gbemi-akadiri.webp"
              width={900}
              height={900}
              alt="Gbemi Akadiri, founder of Verdantia."
              sizes="(max-width: 900px) 80vw, 360px"
            />
          </div>
          <div className="founder-editorial-copy">
            <p className="section-kicker">Founder-supported, company-first</p>
            <h2 id="founder-heading">Gbemi Akadiri brings training, AI, and software thinking together.</h2>
            <p>
              Oluwagbemi Enoch Akadiri, commonly known as Gbemi Akadiri, brings
              together AI consulting, training, prompt engineering, workflow
              design, software development, and product thinking.
            </p>
          </div>
          <ul className="founder-credentials" aria-label="Relevant experience">
            {experience.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section company-posture-section" aria-labelledby="posture-heading">
        <div className="shell company-posture">
          <div>
            <p className="section-kicker">Working posture</p>
            <h2 id="posture-heading">Serious, practical, and warm enough for real teams.</h2>
          </div>
          <div className="posture-cards">
            {workingPosture.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="company-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Ireland-based AI support</p>
          <h2 id="company-cta">Talk to Verdantia about practical AI support.</h2>
          <p>
            If your organisation needs grounded advice, training, workflow
            design, or adoption support, start with a focused conversation.
          </p>
          <ButtonLink href="/contact" variant="light">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
