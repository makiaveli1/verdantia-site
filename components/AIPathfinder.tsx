"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type StepId = "stage" | "tools" | "support" | "risk" | "outcome";

type Option = {
  value: string;
  label: string;
  copy: string;
};

type Step = {
  id: StepId;
  eyebrow: string;
  title: string;
  options: readonly Option[];
};

const steps: readonly Step[] = [
  {
    id: "stage",
    eyebrow: "01",
    title: "Where is the team now?",
    options: [
      {
        value: "exploring",
        label: "Exploring",
        copy: "People are testing tools, but usage is still informal.",
      },
      {
        value: "adopting",
        label: "Adopting",
        copy: "A few teams have useful habits and need structure.",
      },
      {
        value: "scaling",
        label: "Scaling",
        copy: "AI is becoming part of regular workflows and needs governance.",
      },
    ],
  },
  {
    id: "tools",
    eyebrow: "02",
    title: "Which tools are in play?",
    options: [
      {
        value: "mixed",
        label: "Mixed toolset",
        copy: "ChatGPT, Claude, Gemini, Copilot, or similar tools are all possible.",
      },
      {
        value: "microsoft",
        label: "Microsoft 365",
        copy: "Copilot and Microsoft 365 workflows are a meaningful part of the picture.",
      },
      {
        value: "custom",
        label: "Custom assistants",
        copy: "Internal assistants, knowledge tools, or chatbot concepts are being explored.",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "03",
    title: "What support would help most?",
    options: [
      {
        value: "training",
        label: "Team training",
        copy: "Clear sessions with real examples and safe working habits.",
      },
      {
        value: "workflow",
        label: "Workflow design",
        copy: "Map priority work and design repeatable AI-supported routines.",
      },
      {
        value: "materials",
        label: "Prompt systems",
        copy: "Reusable prompts, guides, templates, and team reference material.",
      },
    ],
  },
  {
    id: "risk",
    eyebrow: "04",
    title: "What needs careful handling?",
    options: [
      {
        value: "confidence",
        label: "Confidence",
        copy: "People need clearer judgement about when and how to use AI.",
      },
      {
        value: "consistency",
        label: "Consistency",
        copy: "Outputs vary too much between people, roles, or departments.",
      },
      {
        value: "safety",
        label: "Safety",
        copy: "Data, quality, review habits, and responsible use need structure.",
      },
    ],
  },
  {
    id: "outcome",
    eyebrow: "05",
    title: "What should improve first?",
    options: [
      {
        value: "productivity",
        label: "Productivity",
        copy: "Reduce time spent on repetitive writing, research, reporting, or admin.",
      },
      {
        value: "capability",
        label: "Capability",
        copy: "Build practical AI literacy and shared team confidence.",
      },
      {
        value: "operating-rhythm",
        label: "Operating rhythm",
        copy: "Turn experiments into a repeatable adoption plan.",
      },
    ],
  },
] as const;

const defaultSelections: Record<StepId, string> = {
  stage: "adopting",
  tools: "mixed",
  support: "workflow",
  risk: "consistency",
  outcome: "operating-rhythm",
};

function findLabel(stepId: StepId, value: string) {
  return steps
    .find((step) => step.id === stepId)
    ?.options.find((option) => option.value === value)?.label ?? value;
}

function buildRecommendation(selections: Record<StepId, string>) {
  const stage = selections.stage;
  const support = selections.support;
  const risk = selections.risk;
  const outcome = selections.outcome;

  const primary =
    support === "training"
      ? "Start with a practical team workshop."
      : support === "materials"
        ? "Start with reusable prompts and guidance."
        : "Start with workflow mapping and adoption support.";

  const focus =
    risk === "safety"
      ? "Build safe usage habits, review points, and responsible AI guidance into the work from the start."
      : risk === "confidence"
        ? "Help the team build judgement, confidence, and clearer examples before expecting consistent adoption."
        : "Create shared examples, prompt structures, and workflow templates so good usage is easier to repeat.";

  const pace =
    stage === "exploring"
      ? "A focused discovery and training phase will give the team a useful baseline."
      : stage === "scaling"
        ? "The next phase should tighten governance, measurement, and reusable enablement materials."
        : "A short structured programme can connect existing experiments into a shared operating rhythm.";

  const offer =
    support === "training"
      ? "Practical AI Workshop"
      : support === "materials"
        ? "AI Adoption Day"
        : outcome === "operating-rhythm" || stage === "scaling"
          ? "AI Adoption Sprint"
          : "AI Team Briefing";

  return { primary, focus, pace, offer };
}

export function AIPathfinder() {
  const [selections, setSelections] = useState<Record<StepId, string>>(defaultSelections);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const recommendation = useMemo(() => buildRecommendation(selections), [selections]);

  const brief = useMemo(
    () =>
      [
        "AI Pathfinder brief:",
        `Team stage: ${findLabel("stage", selections.stage)}`,
        `Tools in play: ${findLabel("tools", selections.tools)}`,
        `Support needed: ${findLabel("support", selections.support)}`,
        `Careful handling: ${findLabel("risk", selections.risk)}`,
        `First outcome: ${findLabel("outcome", selections.outcome)}`,
        "",
        `Suggested starting point: ${recommendation.primary}`,
        recommendation.focus,
      ].join("\n"),
    [recommendation.focus, recommendation.primary, selections],
  );

  const contactHref = `/contact?enquiryType=${encodeURIComponent(
    recommendation.offer,
  )}&message=${encodeURIComponent(brief)}`;

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  function updateSelection(stepId: StepId, value: string) {
    setSelections((current) => ({
      ...current,
      [stepId]: value,
    }));
    setCopyState("idle");
  }

  return (
    <section className="section pathfinder-section" aria-labelledby="pathfinder-heading">
      <div className="shell pathfinder-shell">
        <div className="pathfinder-intro premium-pathfinder-intro">
          <p className="section-kicker">AI Pathfinder for teams</p>
          <h2 id="pathfinder-heading">Turn a loose team AI conversation into a useful starting brief.</h2>
          <p>
            Five quick choices become a practical recommendation, a suggested offer,
            and a pre-filled enquiry brief. This keeps the first conversation concrete.
          </p>
          <div className="pathfinder-progress" role="group" aria-label="Pathfinder questions">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                aria-label={`Show question ${index + 1}: ${step.title}`}
                aria-current={activeStepIndex === index ? "step" : undefined}
                onClick={() => setActiveStepIndex(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        <div className="pathfinder-board">
          <div className="pathfinder-steps">
            {steps.map((step, index) => (
              <fieldset
                className={`pathfinder-step${activeStepIndex === index ? " is-current" : ""}${index < activeStepIndex ? " is-complete" : ""}`}
                key={step.id}
              >
                <legend>
                  <span>{step.eyebrow}</span>
                  {step.title}
                </legend>
                <div className="pathfinder-options">
                  {step.options.map((option) => {
                    const isActive = selections[step.id] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={isActive}
                        className={isActive ? "is-active" : ""}
                        onClick={() => updateSelection(step.id, option.value)}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.copy}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="pathfinder-step-controls" aria-label={`Question ${index + 1} navigation`}>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((current) => Math.max(0, current - 1))}
                    disabled={index === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((current) => Math.min(steps.length - 1, current + 1))}
                    disabled={index === steps.length - 1}
                  >
                    {index === steps.length - 1 ? "Review brief" : "Next question"}
                  </button>
                </div>
              </fieldset>
            ))}
          </div>

          <aside className="pathfinder-result">
            <p className="sr-only" role="status" aria-live="polite">
              Recommended offer: {recommendation.offer}.
            </p>
            <span className="status-badge">Recommended next step</span>
            <h3>{recommendation.primary}</h3>
            <p>{recommendation.pace}</p>
            <p>{recommendation.focus}</p>

            <dl>
              <div>
                <dt>Best-fit offer</dt>
                <dd>{recommendation.offer}</dd>
              </div>
              <div>
                <dt>Conversation focus</dt>
                <dd>{findLabel("outcome", selections.outcome)}</dd>
              </div>
            </dl>

            <div className="pathfinder-brief-card" aria-label="Selected brief summary">
              <span>{findLabel("stage", selections.stage)}</span>
              <span>{findLabel("tools", selections.tools)}</span>
              <span>{findLabel("risk", selections.risk)}</span>
              <span>{recommendation.offer}</span>
            </div>

            <div className="pathfinder-actions">
              <Link className="button button-light" href={contactHref}>
                <span>Use this as my enquiry brief</span>
                <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                  <path d="M6.2 3.2 12 9l-5.8 5.8" />
                </svg>
              </Link>
              <button type="button" onClick={copyBrief}>
                {copyState === "copied" ? "Brief copied" : copyState === "failed" ? "Copy unavailable" : "Copy brief"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelections(defaultSelections);
                  setCopyState("idle");
                }}
              >
                Reset choices
              </button>
            </div>
            <p className="pathfinder-copy-status" role="status" aria-live="polite">
              {copyState === "copied"
                ? "Copied. Paste this into an email or keep it for your planning notes."
                : copyState === "failed"
                  ? "Copy failed in this browser. Use the enquiry link instead."
                  : ""}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
