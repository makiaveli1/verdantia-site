import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contactEmail } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Verdantia | AI Consulting & Training Enquiries",
  description:
    "Contact Verdantia for AI consulting, team training, adoption support, prompt libraries, automation, and custom assistant planning.",
  path: "/contact",
});

const enquiryGuidance = [
  "Where your team is with AI today",
  "The tools you are already using or considering",
  "The workflows, teams, or risks that need attention",
  "Whether you need consulting, training, adoption support, or a mix",
] as const;

const nextSteps = [
  {
    title: "Read the context",
    copy: "Verdantia reviews the enquiry and looks for the clearest starting point.",
  },
  {
    title: "Shape the conversation",
    copy: "The first reply focuses on your team, likely support needs, and sensible next steps.",
  },
  {
    title: "Keep it practical",
    copy: "If there is a fit, the work is scoped around real tasks, safe habits, and useful materials.",
  },
] as const;

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        kicker="Contact"
        title="Start a conversation."
        visual="contact"
        meta={["AI consulting", "Team training", "Adoption support"]}
      >
        <p>
          Tell us what you are working on, where your team is with AI, and what
          kind of support you need. If you used AI Pathfinder, your brief can be
          carried into the form automatically.
        </p>
      </PageHero>

      <section className="section contact-section" aria-labelledby="contact-form-heading">
        <div className="shell contact-experience">
          <aside className="contact-aside">
            <p className="section-kicker">Enquiry details</p>
            <h2 id="contact-form-heading">Useful context makes the first conversation sharper.</h2>
            <p>
              Email integration is pending for this first version. The form
              validates your details and prepares the enquiry, while direct
              email remains clearly available.
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
