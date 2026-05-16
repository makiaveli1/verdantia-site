"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BrandMark } from "./BrandMark";

const heroStates = [
  {
    key: "understand",
    title: "Understand",
    label: "Map the work",
    copy: "Use cases, risks, constraints, decisions, and real team routines are made visible before tools are pushed into the work.",
    metric: "01",
  },
  {
    key: "design",
    title: "Design",
    label: "Shape the system",
    copy: "Prompts, workflows, assistant concepts, automation ideas, and guidance are structured around tasks people actually repeat.",
    metric: "02",
  },
  {
    key: "enable",
    title: "Enable",
    label: "Build capability",
    copy: "Training, champions, reference materials, measurement, and feedback loops help the new habits hold after the first session.",
    metric: "03",
  },
] as const;

const pathwaySteps = [
  {
    title: "Curiosity",
    label: "People are testing tools",
    copy: "AI is already being tried in pockets, often without a shared method.",
  },
  {
    title: "Structure",
    label: "The work is mapped",
    copy: "Use cases, risks, prompts, and workflows become visible enough to improve.",
  },
  {
    title: "Capability",
    label: "Teams learn by doing",
    copy: "Training is tied to real examples, role needs, and safer working habits.",
  },
  {
    title: "Adoption",
    label: "The system keeps improving",
    copy: "Guides, prompt libraries, champions, and feedback loops make progress repeatable.",
  },
] as const;

const capabilityDetails = [
  {
    title: "AI Consulting",
    summary: "Use-case discovery, workflow design, tool selection, and adoption planning.",
    preview: ["Readiness review", "Workflow map", "Adoption route"],
  },
  {
    title: "AI Training for Teams",
    summary:
      "Practical workshops for teams using ChatGPT, Claude, Gemini, Microsoft Copilot, and other AI tools.",
    preview: ["Team session", "Role examples", "Safe habits"],
  },
  {
    title: "AI Adoption Support",
    summary:
      "Guides, internal communications, champion enablement, prompt libraries, feedback loops, and adoption measurement.",
    preview: ["Champion guide", "Feedback loop", "Measurement"],
  },
  {
    title: "Prompt Libraries",
    summary:
      "Reusable prompt systems for roles, teams, documents, research, reporting, content, and operations.",
    preview: ["Role prompts", "Document prompts", "Usage notes"],
  },
  {
    title: "Custom Assistants",
    summary:
      "Planning and prototyping for Custom GPTs, Claude projects, Gemini Gems, internal knowledge assistants, and support concepts.",
    preview: ["Assistant brief", "Knowledge scope", "Prototype"],
  },
  {
    title: "AI Automation",
    summary:
      "Practical automation for admin, research, reporting, documentation, operations, and customer support.",
    preview: ["Task scan", "Automation path", "Human review"],
  },
  {
    title: "Creative AI Workflows",
    summary:
      "Image, video, campaign, presentation, training, and internal communication workflows.",
    preview: ["Concept board", "Asset process", "Review rhythm"],
  },
] as const;

export function ScrollReveal() {
  useEffect(() => {
    const body = document.body;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".scroll-rise"));
    const childSelector = [
      ".section-kicker",
      ".section-heading h2",
      ".section-heading > p",
      ".intro-copy > p",
      ".operating-step",
      ".capability-slice",
      ".capability-preview",
      ".pathway-node",
      ".pathway-panel",
      ".transition-column",
      ".chip-list li",
      ".founder-image-shell",
      ".founder-signal h2",
      ".founder-signal p:not(.section-kicker)",
      ".founder-proof-list span",
      ".thinking-item",
      ".future-products-grid > div",
      ".future-products-visual",
      ".principle-stack li",
      ".final-cta-inner > *",
      ".detail-row",
      ".product-lab > *",
      ".company-grid > *",
      ".founder-panel > *",
      ".experience-list li",
      ".contact-grid > *",
      ".contact-form > *",
    ].join(",");

    body.classList.add("motion-ready");

    targets.forEach((target, targetIndex) => {
      target.style.setProperty("--reveal-index", String(targetIndex));
      const children = Array.from(target.querySelectorAll<HTMLElement>(childSelector));

      children.forEach((child, childIndex) => {
        child.classList.add("reveal-child");
        child.style.setProperty("--reveal-child", String(Math.min(childIndex, 10)));
      });
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => body.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    function revealVisibleTargets() {
      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) return;

        const bounds = target.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const visibleEnough = bounds.top < viewportHeight * 0.86 && bounds.bottom > viewportHeight * 0.08;

        if (visibleEnough) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      });
    }

    let frame = 0;
    function scheduleRevealCheck() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        revealVisibleTargets();
      });
    }

    targets.forEach((target) => observer.observe(target));
    revealVisibleTargets();
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      observer.disconnect();
      body.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

export function HeroStudio() {
  const [active, setActive] = useState(0);
  const current = heroStates[active];

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);
  }

  return (
    <div
      className={`studio-shell studio-state-${current.key}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--pointer-x");
        event.currentTarget.style.removeProperty("--pointer-y");
      }}
    >
      <div className="studio-art">
        <Image
          className="studio-asset"
          src="/assets/verdantia-hero-editorial.svg"
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
        <div className="studio-veil" aria-hidden="true" />
        <BrandMark className="studio-brand-mark" />
        <svg className="studio-route" viewBox="0 0 640 350" aria-hidden="true">
          <path className="route-soft" d="M44 266C132 116 261 92 354 151c88 56 146 18 238-76" />
          <path className="route-gold" d="M70 278c125-107 374-106 501 0" />
          <path className="route-bridge" d="M178 251c72-63 208-63 280 0" />
        </svg>
      </div>

      <div className="studio-method-card">
        <span className="micro-label">Verdantia method</span>
        <strong>{current.title}</strong>
        <p>{current.copy}</p>
      </div>

      <div className="studio-index" aria-hidden="true">
        {current.metric}
      </div>

      <div className="studio-controls" aria-label="Explore Verdantia method">
        {heroStates.map((state, index) => (
          <button
            className={active === index ? "is-active" : ""}
            type="button"
            key={state.key}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <span>{state.metric}</span>
            <strong>{state.label}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}

export function AdoptionPathway() {
  const [active, setActive] = useState(1);
  const current = pathwaySteps[active];

  return (
    <div className="pathway-experience">
      <div className="pathway-board">
        <BrandMark className="pathway-mark" />
        <svg className="pathway-line" viewBox="0 0 980 360" aria-hidden="true">
          <path d="M40 254C170 80 334 54 481 166c126 96 266 72 459-82" />
          <path d="M194 258c154-124 444-124 592 0" />
        </svg>
        <div className="pathway-nodes" role="list" aria-label="AI adoption pathway">
          {pathwaySteps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              role="listitem"
              className={active === index ? "pathway-node is-active" : "pathway-node"}
              style={{ "--node-index": index } as CSSProperties}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
            </button>
          ))}
        </div>
      </div>

      <article className="pathway-panel" aria-live="polite">
        <span className="micro-label">Current adoption state</span>
        <h3>{current.label}</h3>
        <p>{current.copy}</p>
      </article>
    </div>
  );
}

export function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const current = capabilityDetails[active];

  return (
    <div className="capability-explorer">
      <div className="capability-slices" role="list" aria-label="Verdantia capabilities">
        {capabilityDetails.map((capability, index) => (
          <button
            type="button"
            role="listitem"
            className={active === index ? "capability-slice is-active" : "capability-slice"}
            key={capability.title}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{capability.title}</strong>
          </button>
        ))}
      </div>

      <article className="capability-preview" aria-live="polite">
        <div className="preview-topline">
          <span>Capability focus</span>
          <span>{String(active + 1).padStart(2, "0")}</span>
        </div>
        <h3>{current.title}</h3>
        <p>{current.summary}</p>
        <div className="preview-map" aria-hidden="true">
          {current.preview.map((item, index) => (
            <span key={item} style={{ "--index": index } as CSSProperties}>
              {item}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
