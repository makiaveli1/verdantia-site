"use client";

import type { KeyboardEvent } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildPathfinderBrief,
  buildPathfinderContactHref,
  buildPathfinderRecommendation,
  defaultPathfinderSelections,
  findPathfinderLabel,
  pathfinderSteps,
  type PathfinderSelections,
  type PathfinderStepId,
} from "@/lib/pathfinder";

function visibleSelectionLabels(selections: PathfinderSelections) {
  return [
    findPathfinderLabel("buyer", selections.buyer),
    findPathfinderLabel("support", selections.support),
    findPathfinderLabel("risk", selections.risk),
    findPathfinderLabel("format", selections.format),
  ];
}

export function AIPathfinder() {
  const [selections, setSelections] = useState<PathfinderSelections>(defaultPathfinderSelections);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = pathfinderSteps[activeStepIndex];
  const recommendation = useMemo(() => buildPathfinderRecommendation(selections), [selections]);
  const brief = useMemo(() => buildPathfinderBrief(selections, recommendation), [recommendation, selections]);
  const contactHref = useMemo(() => buildPathfinderContactHref(recommendation, brief), [brief, recommendation]);
  const selectedLabels = useMemo(() => visibleSelectionLabels(selections), [selections]);

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  function updateSelection(stepId: PathfinderStepId, value: string) {
    setSelections((current) => ({
      ...current,
      [stepId]: value,
    }));
    setCopyState("idle");
  }

  function handleOptionKeyDown(event: KeyboardEvent<HTMLButtonElement>, optionIndex: number) {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;

    event.preventDefault();
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (optionIndex + direction + activeStep.options.length) % activeStep.options.length;
    const nextOption = activeStep.options[nextIndex];
    const optionGroup = event.currentTarget.parentElement;

    updateSelection(activeStep.id, nextOption.value);
    window.requestAnimationFrame(() => {
      const buttons = optionGroup?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
      buttons?.[nextIndex]?.focus();
    });
  }

  function resetPathfinder() {
    setSelections(defaultPathfinderSelections);
    setActiveStepIndex(0);
    setCopyState("idle");
  }

  return (
    <section className="section pathfinder-section" aria-labelledby="pathfinder-heading">
      <div className="shell pathfinder-shell">
        <div className="pathfinder-intro premium-pathfinder-intro">
          <div>
            <p className="section-kicker">AI Pathfinder</p>
            <h2 id="pathfinder-heading">Answer seven questions; carry the brief into contact.</h2>
            <p>
              Work through audience, tools, workflow clarity, risk, and format. The live recommendation updates as you answer.
            </p>
          </div>
          <div className="pathfinder-note-card" aria-label="How the Pathfinder works">
            <span>No maturity score. No magic diagnosis.</span>
            <p>
              This is a decision aid for the first conversation: enough structure to avoid over-scoping, without
              pretending a form can replace discovery.
            </p>
          </div>
        </div>

        <div className="pathfinder-studio" aria-label="AI Pathfinder studio">
          <div className="pathfinder-progress" role="group" aria-label="Pathfinder questions">
            {pathfinderSteps.map((step, index) => {
              const isCurrent = activeStepIndex === index;
              const isComplete = index < activeStepIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  aria-label={`Show question ${index + 1}: ${step.title}`}
                  aria-current={isCurrent ? "step" : undefined}
                  className={isComplete ? "is-complete" : undefined}
                  onClick={() => setActiveStepIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.shortLabel}</strong>
                </button>
              );
            })}
          </div>

          <div className="pathfinder-board">
            <div className="pathfinder-question-panel">
              <fieldset className="pathfinder-step is-current" key={activeStep.id}>
                <legend id={`pathfinder-${activeStep.id}-legend`}>
                  <span>Question {activeStepIndex + 1} of {pathfinderSteps.length} · {activeStep.eyebrow}</span>
                  {activeStep.title}
                </legend>

                <div
                  className="pathfinder-options"
                  role="radiogroup"
                  aria-labelledby={`pathfinder-${activeStep.id}-legend`}
                >
                  {activeStep.options.map((option, optionIndex) => {
                    const isActive = selections[activeStep.id] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        className={isActive ? "is-active" : ""}
                        onClick={() => updateSelection(activeStep.id, option.value)}
                        onKeyDown={(event) => handleOptionKeyDown(event, optionIndex)}
                      >
                        <span className="pathfinder-option-check" aria-hidden="true">
                          {isActive ? "✓" : ""}
                        </span>
                        <strong>{option.label}</strong>
                        <span>{option.copy}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pathfinder-step-controls" aria-label={`Question ${activeStepIndex + 1} navigation`}>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((current) => Math.max(0, current - 1))}
                    disabled={activeStepIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((current) => Math.min(pathfinderSteps.length - 1, current + 1))}
                    disabled={activeStepIndex === pathfinderSteps.length - 1}
                  >
                    {activeStepIndex === pathfinderSteps.length - 1 ? "Review brief" : "Next question"}
                  </button>
                </div>
              </fieldset>

              <div className="pathfinder-detail-deck" aria-label="Detailed Pathfinder brief">
                <article className="pathfinder-detail-card">
                  <span>Why this fits</span>
                  <ul>
                    {recommendation.reasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </article>

                <article className="pathfinder-detail-card">
                  <span>Useful first conversation</span>
                  <ul>
                    {recommendation.nextActions.slice(0, 3).map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </article>

                <article className="pathfinder-detail-card pathfinder-context-card">
                  <span>{recommendation.cautions.length ? "Watch this" : "Selected context"}</span>
                  {recommendation.cautions.length ? <p>{recommendation.cautions[0]}</p> : null}
                  <div className="pathfinder-brief-card" aria-label="Selected brief summary">
                    {selectedLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <aside className="pathfinder-result" aria-label="Pathfinder recommendation">
              <p className="sr-only" role="status" aria-live="polite">
                Recommendation updated: {recommendation.displayTitle}.
              </p>

              <div className="pathfinder-result-topline">
                <span className="status-badge">Live recommendation</span>
                <span>{recommendation.confidence}</span>
              </div>

              <h3>{recommendation.displayTitle}</h3>
              <p className="pathfinder-result-lede">{recommendation.pace}</p>
              <p className="pathfinder-result-focus">{recommendation.focus}</p>

              <dl className="pathfinder-result-meta">
                <div>
                  <dt>Route</dt>
                  <dd>
                    {recommendation.route === "team"
                      ? "Organisation offer"
                      : recommendation.route === "learning"
                        ? "Professional learning"
                        : "Partner/community"}
                  </dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>{findPathfinderLabel("support", selections.support)}</dd>
                </div>
                {recommendation.secondaryOffer ? (
                  <div>
                    <dt>Also discuss</dt>
                    <dd>{recommendation.secondaryOffer}</dd>
                  </div>
                ) : null}
              </dl>

              <div className="pathfinder-result-snapshot">
                <h4>Best signal so far</h4>
                <p>{recommendation.reasons[0]}</p>
              </div>

              <div className="pathfinder-actions">
                <Link className="button button-light" href={contactHref}>
                  <span>Open contact form with brief</span>
                  <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                    <path d="M6.2 3.2 12 9l-5.8 5.8" />
                  </svg>
                </Link>
                {recommendation.route === "learning" ? (
                  <Link className="button button-light pathfinder-learning-action" href="/learning">
                    <span>Explore learning labs</span>
                    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                      <path d="M6.2 3.2 12 9l-5.8 5.8" />
                    </svg>
                  </Link>
                ) : null}
                <button type="button" onClick={copyBrief}>
                  {copyState === "copied" ? "Brief copied" : copyState === "failed" ? "Copy unavailable" : "Copy brief"}
                </button>
                <button type="button" onClick={resetPathfinder}>
                  Reset
                </button>
              </div>
              <p className="pathfinder-copy-status" role="status" aria-live="polite">
                {copyState === "copied"
                  ? "Copied. Paste this into an email or keep it for planning notes."
                  : copyState === "failed"
                    ? "Copy failed in this browser. Use the enquiry link instead."
                    : ""}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
