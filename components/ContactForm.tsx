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
  if (!values.organisation.trim()) errors.organisation = "Enter your organisation.";
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
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Verdantia enquiry - ${values.enquiryType || "New enquiry"}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Organisation: ${values.organisation}`,
        `Email: ${values.email}`,
        `Enquiry type: ${values.enquiryType}`,
        "",
        values.message,
      ].join("\n"),
    );

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [values]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setNotice(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice("Please fix the highlighted fields before sending your enquiry.");
      return;
    }

    // Email delivery is intentionally not faked in this MVP. Wire this submit path
    // to a verified backend/email provider before treating the form as sent.
    setNotice(
      "The form is ready, but email delivery is not connected yet. Please use the email link below to send this enquiry directly.",
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="organisation">Organisation</label>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => updateField("organisation", event.target.value)}
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
          />
          {errors.organisation ? <p id="organisation-error">{errors.organisation}</p> : null}
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="enquiryType">Enquiry type</label>
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
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <p id="message-error">{errors.message}</p> : null}
      </div>

      {notice ? (
        <div className="form-notice" role="status" aria-live="polite">
          {notice}
        </div>
      ) : null}

      <div className="form-actions">
        <button type="submit" className="button button-primary">
          <span>Prepare enquiry</span>
          <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
            <path d="M6.2 3.2 12 9l-5.8 5.8" />
          </svg>
        </button>
        <a className="direct-email" href={mailtoHref}>
          {contactEmail}
        </a>
      </div>
    </form>
  );
}
