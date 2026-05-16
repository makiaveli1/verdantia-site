import { AIPathfinder } from "@/components/AIPathfinder";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Consulting, Training & Adoption Support | Verdantia",
  description:
    "Practical AI consulting and training for teams using ChatGPT, Claude, Gemini, Microsoft Copilot, prompt engineering, automation, and AI workflows.",
  path: "/capabilities",
});

const capabilityDetails = [
  {
    eyebrow: "Consulting",
    title: "AI Consulting",
    copy: "Practical support to identify where AI can help, where it should not be used, and how to introduce it in a structured way.",
    outputs: ["readiness review", "use-case map", "tool guidance", "adoption roadmap"],
    bestFor: "Leadership teams, operations teams, and organisations that need clarity before committing time or budget.",
  },
  {
    eyebrow: "Training",
    title: "AI Training for Teams",
    copy: "Practical AI training for non-technical and mixed-skill teams, focused on real workplace tasks and safe working habits.",
    outputs: ["workshops", "role examples", "safe-use guidance", "practice exercises"],
    bestFor: "Teams using ChatGPT, Claude, Gemini, Microsoft Copilot, or a mixed AI toolset.",
  },
  {
    eyebrow: "Adoption",
    title: "AI Adoption Support",
    copy: "The materials, feedback loops, communications, and champion support that help AI usage become more consistent over time.",
    outputs: ["champion packs", "quick guides", "feedback loops", "measurement cues"],
    bestFor: "Organisations that have early momentum and need support turning it into shared capability.",
  },
  {
    eyebrow: "Prompt systems",
    title: "Prompt Engineering & Prompt Libraries",
    copy: "Reusable prompt systems for roles, documents, research, reporting, content, operations, and internal workflows.",
    outputs: ["prompt packs", "usage notes", "workflow prompts", "review patterns"],
    bestFor: "Teams that need more consistent AI outputs without forcing everyone to invent prompts from scratch.",
  },
  {
    eyebrow: "Assistants",
    title: "Custom Assistants & Chatbot Concepts",
    copy: "Planning and prototyping for Custom GPTs, Claude projects, Gemini Gems, internal knowledge assistants, and support concepts.",
    outputs: ["assistant scope", "knowledge plan", "prototype flow", "handover brief"],
    bestFor: "Teams considering assistants before investing in heavier builds or integrations.",
  },
  {
    eyebrow: "Automation",
    title: "AI Automation",
    copy: "Practical automation for admin, research, reporting, documentation, operations, and customer support workflows.",
    outputs: ["automation candidates", "workflow map", "risk notes", "implementation brief"],
    bestFor: "Teams with repetitive work that can be simplified without creating fragile processes.",
  },
  {
    eyebrow: "Creative workflows",
    title: "Creative AI Workflows",
    copy: "Support for image, video, presentation, training, campaign, and internal communication workflows.",
    outputs: ["creative systems", "asset guidance", "review habits", "campaign prompts"],
    bestFor: "Marketing, training, internal communications, and teams that need repeatable creative support.",
  },
] as const;

const adoptionStages = [
  {
    title: "Map the work",
    copy: "Understand the team, tools, risks, and valuable use cases before recommending a programme.",
  },
  {
    title: "Design the system",
    copy: "Shape workflows, prompts, assistant concepts, and automation ideas around real tasks.",
  },
  {
    title: "Enable the team",
    copy: "Deliver training, guides, prompt libraries, champion support, and adoption materials.",
  },
  {
    title: "Make it repeatable",
    copy: "Create feedback loops and practical measures so useful habits can improve over time.",
  },
] as const;

export default function CapabilitiesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        kicker="Capabilities"
        title="AI consulting, training, and adoption support."
        visual="capabilities"
        meta={["Tool-agnostic", "Built for real work", "Safe adoption habits"]}
        actions={
          <>
            <ButtonLink href="#pathfinder">Use AI Pathfinder</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start a conversation
            </ButtonLink>
          </>
        }
      >
        <p>
          Verdantia helps organisations adopt AI in practical, structured ways.
          We support teams through consulting, training, workflow design, prompt
          libraries, custom assistant planning, automation, and adoption support.
        </p>
      </PageHero>

      <section className="section capability-index-section" aria-labelledby="capability-index-heading">
        <div className="shell section-heading">
          <p className="section-kicker">Capability system</p>
          <h2 id="capability-index-heading">Services that are designed to work together.</h2>
          <p>
            Verdantia does not treat training, prompts, workflows, and adoption
            support as separate boxes. The work is sequenced so teams can move
            from interest to repeatable capability.
          </p>
        </div>

        <div className="shell capability-catalog">
          {capabilityDetails.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")} / {capability.eyebrow}</span>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <ul aria-label={`${capability.title} outputs`}>
                {capability.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              <small>{capability.bestFor}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section adoption-map-section" aria-labelledby="adoption-map-heading">
        <div className="shell adoption-map">
          <div>
            <p className="section-kicker">How the work holds</p>
            <h2 id="adoption-map-heading">A practical route from scattered use to operating rhythm.</h2>
          </div>
          <div className="adoption-stage-list">
            {adoptionStages.map((stage, index) => (
              <article key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="pathfinder">
        <AIPathfinder />
      </div>

      <section className="section final-cta compact-cta" aria-labelledby="capabilities-cta">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Next step</p>
          <h2 id="capabilities-cta">Ready to shape practical AI capability?</h2>
          <p>
            Start with a conversation about your team, your tools, and the work
            that needs clearer support.
          </p>
          <ButtonLink href="/contact" variant="light">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
