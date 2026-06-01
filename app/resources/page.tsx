import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema";

const resourcesDescription =
  "Verdantia resources and sample materials for practical AI training, safer prompting, workflow mapping, use-case triage, and responsible AI adoption.";

export const metadata = pageMetadata({
  title: "AI Training Resources & Sample Materials | Verdantia",
  description: resourcesDescription,
  path: "/resources",
});

const resourceCards = [
  {
    title: "Practical AI Workshop one-pager",
    label: "Workshop overview",
    copy: "A buyer-friendly summary of who the workshop is for, what happens in the room, what participants practise, and what the team leaves with.",
    detail: "Use it before an internal conversation about team AI training.",
  },
  {
    title: "Responsible-use checklist preview",
    label: "Safer AI habits",
    copy: "A sample structure covering what not to paste, when to use synthetic examples, how outputs are checked, who reviews sensitive work, and when AI should not be used.",
    detail: "Useful when informal AI use has already started.",
  },
  {
    title: "AI use-case triage worksheet",
    label: "Use-case selection",
    copy: "A practical way to compare repeated tasks by value, risk, data sensitivity, review need, owner, and next action.",
    detail: "Good before an Adoption Day or Sprint.",
  },
  {
    title: "Workflow map template",
    label: "Workflow clarity",
    copy: "A one-page structure showing task, input data, AI role, human review point, risk level, owner, and next action.",
    detail: "Useful when teams are tempted to automate too early.",
  },
  {
    title: "Before-you-book AI training checklist",
    label: "Buyer preparation",
    copy: "Questions to clarify audience, tools, sensitive data, likely use cases, delivery format, and what good outcomes should look like.",
    detail: "Helps make the first conversation sharper.",
  },
  {
    title: "Prompt improvement examples",
    label: "Prompt practice",
    copy: "Representative weak prompt → improved prompt examples with context fields, constraints, quality criteria, and review prompts.",
    detail: "Shows the kind of practical work done in sessions.",
  },
] as const;

const onePagerSections = [
  {
    title: "Who it is for",
    copy: "Teams already using ChatGPT, Copilot, Claude, Gemini, Perplexity, or similar tools informally, but lacking shared habits around safe data use, prompt quality, and output review.",
  },
  {
    title: "What happens",
    copy: "Baseline, boundaries, safer prompting practice, output comparison, review habits, and use-case capture using examples that match the team’s actual work.",
  },
  {
    title: "What the team leaves with",
    copy: "Starter prompt examples, responsible-use checklist, use-case shortlist, and a practical recommendation for whether to stop, practise again, map workflows, or move into a sprint.",
  },
] as const;

const checklistItems = [
  "What data should never be pasted into an AI tool?",
  "When should synthetic or sanitised examples be used instead?",
  "Which outputs need source checks, factual checks, tone review, or manager review?",
  "Who owns review before AI-supported work is shared externally?",
  "Which tasks are poor fits for AI because the stakes, data, or judgement risk is too high?",
] as const;

export default function ResourcesPage() {
  return (
    <main id="main" className="inner-page resources-page">
      <JsonLd
        data={graphSchema([
          webPageSchema({
            name: "AI Training Resources & Sample Materials",
            description: resourcesDescription,
            path: "/resources",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ])}
      />
      <PageHero
        kicker="Resources"
        title="A material library for practical AI workshops."
        visual="products"
        asset="resources"
        meta={["Workshop one-pager", "Checklist previews", "Use-case triage", "Workflow maps"]}
        actions={
          <>
            <ButtonLink href="/offers/practical-ai-workshop">View the workshop</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request a practical AI call
            </ButtonLink>
          </>
        }
      >
        <p>
          Use this page to see what Verdantia work leaves behind: one-pagers, checklists, triage sheets, and workflow maps that make the training concrete.
        </p>
      </PageHero>

      <section className="section resources-grid-section scroll-rise" aria-labelledby="resources-grid-heading">
        <div className="shell section-heading section-heading-centered">
          <p className="section-kicker">Resource library</p>
          <h2 id="resources-grid-heading">The artefacts make the offer visible.</h2>
          <p>
            These are representative structures, not client documents. They show the shape of the work without pretending the same template fits every team.
          </p>
        </div>
        <div className="shell resources-grid" role="list" aria-label="Verdantia AI adoption resources">
          {resourceCards.map((resource) => (
            <article className="resource-card" key={resource.title} role="listitem">
              <span>{resource.label}</span>
              <h3>{resource.title}</h3>
              <p>{resource.copy}</p>
              <small>{resource.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section one-pager-section scroll-rise" aria-labelledby="one-pager-heading">
        <div className="shell one-pager-panel">
          <div className="one-pager-head">
            <p className="section-kicker">Preview</p>
            <h2 id="one-pager-heading">Practical AI Workshop one-pager.</h2>
            <p>
              A buyer-friendly summary of the flagship workshop: who it is for, what happens in the room, what participants practise, and what the team leaves with.
            </p>
          </div>
          <div className="one-pager-grid" role="list" aria-label="Practical AI Workshop one-pager sections">
            {onePagerSections.map((section) => (
              <article key={section.title} role="listitem">
                <h3>{section.title}</h3>
                <p>{section.copy}</p>
              </article>
            ))}
          </div>
          <div className="one-pager-actions">
            <ButtonLink href="/offers/practical-ai-workshop">Read full workshop details</ButtonLink>
            <ButtonLink href="/contact?enquiryType=Practical%20AI%20Workshop" variant="secondary">
              Request workshop information
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section checklist-preview-section scroll-rise" aria-labelledby="checklist-preview-heading">
        <div className="shell checklist-preview-panel">
          <div>
            <p className="section-kicker">Checklist preview</p>
            <h2 id="checklist-preview-heading">Responsible-use guidance should answer concrete questions.</h2>
            <p>
              A responsible-use checklist is not a legal policy. It is a practical working aid for everyday decisions until deeper governance is needed.
            </p>
          </div>
          <ul className="checklist-preview-list">
            {checklistItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final-cta compact-cta" aria-labelledby="resources-cta-heading">
        <div className="shell final-cta-inner">
          <p className="section-kicker">Use the resources</p>
          <h2 id="resources-cta-heading">Want the materials shaped around your team?</h2>
          <p>
            Send a short brief about your team, current AI use, and the workflows you want to improve. Verdantia can recommend the lightest useful route and the materials that should come with it.
          </p>
          <ButtonLink href="/contact" variant="light">
            Request a practical AI call
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
