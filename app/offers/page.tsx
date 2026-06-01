import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { ScrollReveal } from "@/components/HomeExperience";
import { JsonLd } from "@/components/JsonLd";
import { TeamOfferDeck } from "@/components/TeamOfferDeck";
import { individualLearningTracks, offers, videoAdOffer } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, graphSchema, offerCatalogSchema, webPageSchema } from "@/lib/schema";

const offersDescription =
  "Verdantia offers practical AI training, adoption support, learning labs, and AI video creation for teams, professionals, and training partners.";

export const metadata = pageMetadata({
  title: "AI Training, Adoption & AI Video Offers | Verdantia",
  description: offersDescription,
  path: "/offers",
});

const buyerSituations = [
  {
    prompt: "Need leadership alignment?",
    answer: offers[0].title,
    copy: "Build shared language before people pick tools or change process.",
    href: offers[0].href,
  },
  {
    prompt: "Team already experimenting?",
    answer: offers[1].title,
    copy: "Turn informal tool use into safer prompting, review habits, and role examples.",
    href: offers[1].href,
  },
  {
    prompt: "Need workflows mapped?",
    answer: offers[2].title,
    copy: "Choose priority work, review points, prompts, and next-step materials.",
    href: offers[2].href,
  },
  {
    prompt: "Need follow-through?",
    answer: offers[3].title,
    copy: "Create the support rhythm, reusable materials, and blocker reviews that make adoption stick.",
    href: offers[3].href,
  },
] as const;

const routeStages = [
  {
    label: "Baseline",
    title: "Shared language",
    copy: "Useful when leaders or teams need a plain-English view of what AI can help with, where judgement matters, and what to do next.",
    offer: "AI Team Briefing",
  },
  {
    label: "Practice",
    title: "Hands-on habits",
    copy: "Useful when people are already drafting, summarising, researching, or planning with AI and need safer repeatable practice.",
    offer: "Practical AI Workshop",
  },
  {
    label: "Map",
    title: "Workflow choices",
    copy: "Useful when the team needs to connect AI to real tasks, review points, reusable prompts, and an adoption roadmap.",
    offer: "AI Adoption Day",
  },
  {
    label: "Support",
    title: "Adoption rhythm",
    copy: "Useful when a one-off session is not enough and the team needs follow-through, materials, and checkpoints.",
    offer: "AI Adoption Sprint",
  },
] as const;

const artefacts = [
  "Responsible-use checklist",
  "Role-based prompt examples",
  "Use-case and workflow map",
  "Starter prompt library",
  "Adoption roadmap",
  "Campaign hooks and scripts",
] as const;

const buyerRoutes = [
  {
    title: "Team leader or SME founder",
    copy: "Start with a briefing or workshop. Move into an adoption day once priority workflows are visible.",
    href: "#offer-ladder",
    cta: "Compare team offers",
  },
  {
    title: "Training provider or community organiser",
    copy: "Bring Verdantia into a programme, cohort, member event, or short course where practical AI delivery is needed.",
    href: "/contact?enquiryType=Training%20provider%20partnership",
    cta: "Discuss partner delivery",
  },
  {
    title: "Individual professional",
    copy: "Use learning labs for AI fluency, safer prompting, verification habits, and repeatable everyday workflows.",
    href: "/learning",
    cta: "Explore learning labs",
  },
  {
    title: "Marketing or launch lead",
    copy: "Use the creative lane for AI-assisted short-form ad angles, scripts, captions, and landing-page alignment.",
    href: videoAdOffer.href,
    cta: "Brief a video ad project",
  },
] as const;

const engagementSteps = [
  {
    title: "Brief the context",
    copy: "Share the team, audience, confidence level, tools, risks, current workflows, or campaign material.",
  },
  {
    title: "Work on real material",
    copy: "Sessions and briefs use your actual tasks, examples, documents, customer context, learner needs, or launch assets.",
  },
  {
    title: "Shape reusable guidance",
    copy: "The work becomes checklists, prompts, route maps, review habits, scripts, captions, or practical next-step notes.",
  },
  {
    title: "Choose the next move",
    copy: "Stop, practise, map adoption, run a sprint, or consider automation later when workflow and review are clear.",
  },
] as const;

const offerFaqs = [
  {
    question: "What if we are not sure which offer fits?",
    answer:
      "Send the team, learner, or campaign context. Verdantia will recommend the most useful starting point rather than forcing you to pick from a menu.",
  },
  {
    question: "Can the training be tailored to our sector?",
    answer:
      "Yes. Examples, exercises, risks, and leave-behind materials are shaped around the team’s work rather than delivered as a generic tool tour.",
  },
  {
    question: "Do you provide automation or custom assistants?",
    answer:
      "Automation can be discussed after the workflow, data, permissions, and human review model are clear. Verdantia’s starting point is practical training and adoption.",
  },
  {
    question: "Where does AI video fit?",
    answer:
      "It is a focused creative offer for short-form social video ads: angles, hooks, scripts, captions, prompt direction, and landing-page alignment.",
  },
] as const;

export default function OffersPage() {
  return (
    <main id="main" className="inner-page offers-page-premium offers-journey-page">
      <JsonLd
        data={graphSchema([
          webPageSchema({
            name: "AI Training, Adoption & AI Video Offers",
            description: offersDescription,
            path: "/offers",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Offers", path: "/offers" },
          ]),
          offerCatalogSchema,
          faqPageSchema([...offerFaqs]),
        ])}
      />
      <ScrollReveal />

      <section className="offers-hero scroll-rise" aria-labelledby="offers-hero-heading">
        <div className="shell offers-hero-grid">
          <div className="offers-hero-copy">
            <p className="eyebrow">Practical AI support</p>
            <h1 id="offers-hero-heading">Choose the support your work needs next.</h1>
            <p>
              Briefings, workshops, adoption days, sprints, learning labs, and campaign support — matched to the real work your team, learners, or launch need improved.
            </p>
            <div className="offers-hero-actions">
              <ButtonLink href="#starting-point">Find your starting point</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Request a practical AI call
              </ButtonLink>
            </div>
          </div>

          <div className="offers-hero-prompts" aria-label="Common starting situations">
            {buyerSituations.map((situation, index) => (
              <a href={situation.href} key={situation.prompt} style={{ "--offer-delay": `${index * 70}ms` } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{situation.prompt}</strong>
                <em>{situation.answer}</em>
                <p>{situation.copy}</p>
              </a>
            ))}
          </div>

          <figure className="offers-hero-board">
            <Image
              src="/assets/verdantia-offer-decision-board.webp"
              alt="Abstract Verdantia offer decision board with route lanes on warm paper."
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <figcaption>
              <span>Offer decision board</span>
              <strong>Start light. Go deeper when the work needs it.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="starting-point" className="section offer-route-map-section scroll-rise" aria-labelledby="starting-point-heading">
        <div className="shell offer-route-map-layout">
          <aside className="offer-route-map-intro">
            <p className="section-kicker">Find your starting point</p>
            <h2 id="starting-point-heading">Most teams do not need automation first.</h2>
            <p>
              They need shared language, hands-on practice, visible workflows, and useful materials people can repeat after the session.
            </p>
            <ButtonLink href="#offer-ladder" variant="secondary">
              Compare the team ladder
            </ButtonLink>
          </aside>

          <div className="offer-route-board">
            <svg className="offer-route-thread" viewBox="0 0 980 220" aria-hidden="true" focusable="false">
              <path className="route-thread-soft" d="M38 118C180 32 310 42 420 112c118 76 226 72 332-4 72-52 126-60 190-24" />
              <path className="route-thread-gold" d="M38 118C180 32 310 42 420 112c118 76 226 72 332-4 72-52 126-60 190-24" />
            </svg>
            <div className="offer-route-stage-grid" role="list" aria-label="Verdantia adoption route stages">
              {routeStages.map((stage, index) => (
                <article key={stage.title} role="listitem" style={{ "--offer-delay": `${index * 90}ms` } as CSSProperties}>
                  <span>{stage.label}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                  <strong>{stage.offer}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamOfferDeck />

      <section className="section offer-artefact-section scroll-rise" aria-labelledby="offer-artefact-heading">
        <div className="shell offer-artefact-layout">
          <div className="offer-artefact-copy">
            <p className="section-kicker">Leave-behinds</p>
            <h2 id="offer-artefact-heading">You leave with working material, not just notes.</h2>
            <p>
              Verdantia turns the session into tangible assets: guidance, maps, prompts, scripts, and review habits that make good AI use easier to repeat.
            </p>
          </div>
          <div className="offer-artefact-workbench" role="list" aria-label="Example Verdantia leave-behind materials">
            {artefacts.map((artefact, index) => (
              <article key={artefact} role="listitem" style={{ "--offer-delay": `${index * 65}ms` } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{artefact}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section offer-process-section scroll-rise" aria-labelledby="offer-process-heading">
        <div className="shell offer-process-panel offer-process-panel-premium">
          <div>
            <p className="section-kicker">How it works</p>
            <h2 id="offer-process-heading">Focused work. Useful outputs. Clear next steps.</h2>
          </div>
          <div className="offer-process-steps" role="list" aria-label="How Verdantia engagements work">
            {engagementSteps.map((step, index) => (
              <article key={step.title} role="listitem">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section offer-side-routes-section scroll-rise" aria-labelledby="side-routes-heading">
        <div className="shell offer-side-routes-layout">
          <div className="offer-side-routes-copy">
            <p className="section-kicker">Side routes</p>
            <h2 id="side-routes-heading">Other ways to work with Verdantia.</h2>
            <p>
              Not every buyer is a team adoption buyer. Learning labs and campaign/video support stay visible without being forced into the core team ladder.
            </p>
          </div>

          <div className="offer-side-route-cards">
            <article className="offer-side-route-card offer-learning-card">
              <span>Learning labs</span>
              <h3>Buying for yourself or a small professional group?</h3>
              <p>
                Build practical AI fluency, workflow confidence, safer prompting, and verification habits through focused labs and clinics.
              </p>
              <div className="side-route-mini-list" role="list" aria-label="Learning lab options">
                {individualLearningTracks.map((track) => (
                  <div key={track.title} role="listitem">
                    <strong>{track.title}</strong>
                    <p>{track.price}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/learning" variant="secondary">
                Explore learning labs
              </ButtonLink>
            </article>

            <article className="offer-side-route-card offer-campaign-card">
              <span>{videoAdOffer.level}</span>
              <h3>{videoAdOffer.title}</h3>
              <p>{videoAdOffer.summary}</p>
              <ul>
                {videoAdOffer.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              <ButtonLink href={videoAdOffer.href} variant="secondary">
                {videoAdOffer.ctaLabel}
              </ButtonLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section offer-route-section scroll-rise" aria-labelledby="offer-route-heading">
        <div className="shell offer-buyer-fit-layout">
          <div className="offer-buyer-fit-copy">
            <p className="section-kicker">Buyer routes</p>
            <h2 id="offer-route-heading">Pick the route that matches what you need to fix now.</h2>
          </div>
          <div className="offer-route-grid" role="list" aria-label="Verdantia buyer routes">
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
        </div>
      </section>

      <section className="section offer-faq-section scroll-rise" aria-labelledby="offer-faq-heading">
        <div className="shell offer-faq-layout">
          <div className="offer-faq-heading">
            <p className="section-kicker">Buyer questions</p>
            <h2 id="offer-faq-heading">Quick answers before you enquire.</h2>
          </div>
          <div className="faq-grid" role="list" aria-label="Verdantia offer questions">
            {offerFaqs.map((item) => (
              <article className="faq-card" key={item.question} role="listitem">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta compact-cta offer-final-cta" aria-labelledby="offers-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Next step</p>
          <h2 id="offers-cta">Send the context and get the right starting point.</h2>
          <p>
            Share the team, learner, or campaign context. Verdantia will point you to the practical offer that fits the work.
          </p>
          <div className="final-cta-actions">
            <ButtonLink href="/contact" variant="light">
              Request a practical AI call
            </ButtonLink>
            <ButtonLink href="/pathfinder" variant="light">
              Use the AI Pathfinder
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
