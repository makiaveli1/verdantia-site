"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { contactEmail, enquiryTypes } from "@/lib/site";

type FieldErrors = Partial<Record<"name" | "organisation" | "email" | "enquiryType" | "message", string>>;

type FormState = {
  name: string;
  organisation: string;
  email: string;
  enquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organisation: "",
  email: "",
  enquiryType: "",
  message: "",
};

function validate(values: FormState) {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.organisation.trim()) errors.organisation = "Enter your organisation or context.";
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.enquiryType) errors.enquiryType = "Choose an enquiry type.";
  if (!values.message.trim()) errors.message = "Tell us what you need support with.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [draftReady, setDraftReady] = useState(false);

  const hasUserDraftContent = useMemo(
    () => [values.name, values.organisation, values.email, values.message].some((value) => value.trim().length > 0),
    [values.email, values.message, values.name, values.organisation],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const enquiryType = params.get("enquiryType");
    const message = params.get("message");

    if (!enquiryType && !message) return;

    const timeout = window.setTimeout(() => {
      setValues((current) => ({
        ...current,
        enquiryType:
          enquiryType && enquiryTypes.includes(enquiryType as (typeof enquiryTypes)[number])
            ? enquiryType
            : current.enquiryType,
        message: message ? message.slice(0, 2200) : current.message,
      }));
      setNotice(message ? "Pathfinder brief imported. Review the draft, add your details, then prepare the email." : null);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const emailBody = useMemo(
    () =>
      [
        `Name: ${values.name}`,
        `Organisation / context: ${values.organisation}`,
        `Email: ${values.email}`,
        `Enquiry type: ${values.enquiryType}`,
        "",
        "Context:",
        values.message,
      ].join("\n"),
    [values],
  );

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Verdantia enquiry - ${values.enquiryType || "New enquiry"}`);
    const body = encodeURIComponent(emailBody);

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [emailBody, values.enquiryType]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setNotice(null);
    setCopyState("idle");
    setDraftReady(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setDraftReady(false);
      setNotice("Please fix the highlighted fields before sending your enquiry.");
      return;
    }

    // Email delivery is intentionally not faked in this MVP. Wire this submit path
    // to a verified backend/email provider before treating the form as sent.
    setDraftReady(true);
    setNotice(
      "Your enquiry draft is ready. Send it through your email client or copy the prepared brief below.",
    );
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(`To: ${contactEmail}\nSubject: Verdantia enquiry - ${values.enquiryType || "New enquiry"}\n\n${emailBody}`);
      setCopyState("copied");
      setNotice("Prepared enquiry copied. Paste it into your email client and send it directly.");
    } catch {
      setCopyState("failed");
      setNotice("Copy failed in this browser. Select the prepared brief and copy it manually.");
    }
  }

  return (
    <form className="contact-form premium-contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form-header">
        <span>Enquiry builder</span>
        <strong>Prepare a useful brief</strong>
        <p>This form checks the essentials and prepares an email draft. Nothing is sent automatically.</p>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? <p id="name-error">{errors.name}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="organisation">Organisation or context <span aria-hidden="true">*</span></label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => updateField("organisation", event.target.value)}
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={errors.organisation ? "organisation-error" : "organisation-help"}
          />
          <span id="organisation-help" className="field-help">
            Company, team, training provider, community organisation, or professional context.
          </span>
          {errors.organisation ? <p id="organisation-error">{errors.organisation}</p> : null}
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? <p id="email-error">{errors.email}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="enquiryType">Enquiry type <span aria-hidden="true">*</span></label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={(event) => updateField("enquiryType", event.target.value)}
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
          >
            <option value="">Choose one</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.enquiryType ? <p id="enquiry-error">{errors.enquiryType}</p> : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">What would you like support with? <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          placeholder="Example: We are a 25-person team using ChatGPT and Copilot informally, and need safer prompting habits. Or: I need short social video ad concepts/scripts from existing product material, not media buying."
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        <span id="message-help" className="field-help">
          Include current tools, team size or role context, risk concerns, and the work you want to improve first. For video ads, include platform, audience, offer, existing assets, and whether you need concepts, scripts, prompts, captions, or a review.
        </span>
        {errors.message ? <p id="message-error">{errors.message}</p> : null}
      </div>

      {notice ? (
        <div className="form-notice" role="status" aria-live="polite">
          {notice}
        </div>
      ) : null}

      {draftReady ? (
        <div className="form-ready-panel" aria-label="Prepared enquiry draft is ready">
          <div>
            <span>Draft ready</span>
            <h3>Your enquiry draft is prepared.</h3>
            <p>
              Review the prepared draft, then send the email directly or copy the brief into your own email client.
            </p>
          </div>
          <div className="form-ready-actions">
            <a className="button button-primary" href={mailtoHref}>
              Open email draft
            </a>
            <button className="copy-brief-button" type="button" onClick={copyBrief}>
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy manually" : "Copy brief"}
            </button>
          </div>
        </div>
      ) : null}

      {hasUserDraftContent || draftReady ? (
        <div className="email-preview" aria-label="Prepared email preview">
          <span>Prepared brief preview</span>
          <pre tabIndex={0}>{emailBody}</pre>
        </div>
      ) : null}

      <p className="form-privacy-note">Verdantia uses your details only to respond to your enquiry.</p>

      <div className="form-actions">
        <button type="submit" className="button button-primary">
          <span>{draftReady ? "Update email draft" : "Review email draft"}</span>
          <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
            <path d="M6.2 3.2 12 9l-5.8 5.8" />
          </svg>
        </button>
        {hasUserDraftContent && !draftReady ? (
          <>
            <a className="direct-email" href={mailtoHref}>
              Open draft anyway
            </a>
            <button className="copy-brief-button" type="button" onClick={copyBrief}>
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy manually" : "Copy brief"}
            </button>
          </>
        ) : null}
      </div>
    </form>
  );
}
