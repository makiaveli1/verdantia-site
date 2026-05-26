import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contactEmail } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Verdantia | AI Training & Adoption Enquiries",
  description:
    "Contact Verdantia about AI team briefings, practical AI workshops, adoption days, adoption sprints, learning labs, and training provider partnerships.",
  path: "/contact",
});

const enquiryGuidance = [
  "Where your team, organisation, or workflow is with AI today",
  "The tools you are already using or considering",
  "The workflows, roles, skills, or risks that need attention",
  "Whether you want a team offer, learning lab, workflow clinic, or partnership conversation",
] as const;

const nextSteps = [
  {
    title: "Read the context",
    copy: "Verdantia reviews the enquiry and looks for the lightest useful starting point.",
  },
  {
    title: "Shape the conversation",
    copy: "The first reply focuses on your context, likely support needs, fit, and sensible next steps.",
  },
  {
    title: "Keep it practical",
    copy: "If there is a fit, the work is scoped around real tasks, safe habits, useful materials, and a clear delivery path.",
  },
] as const;

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        kicker="Contact"
        title="Start with the right first step."
        visual="contact"
        meta={["Briefings", "Workshops", "Adoption days", "Sprints"]}
      >
        <p>
          Tell us what you are trying to improve, where AI is already showing up, and what kind of support you are considering. If you used AI Pathfinder, your brief can be carried into the form automatically.
        </p>
      </PageHero>

      <section className="section contact-section" aria-labelledby="contact-form-heading">
        <div className="shell contact-experience">
          <aside className="contact-aside">
            <p className="section-kicker">Enquiry details</p>
            <h2 id="contact-form-heading">Useful context makes the first conversation sharper.</h2>
            <p>
              This form helps you prepare a clear enquiry and send it directly by email. Share enough context for a useful first reply; a few specific details are better than a long generic message.
            </p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <ul aria-label="What to include">
              {enquiryGuidance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="section contact-next-section" aria-labelledby="contact-next-heading">
        <div className="shell contact-next">
          <div>
            <p className="section-kicker">What happens next</p>
            <h2 id="contact-next-heading">A grounded first step, not a generic sales call.</h2>
          </div>
          <div className="next-step-list">
            {nextSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
