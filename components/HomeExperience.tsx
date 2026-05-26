"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  layoutNextLineRange,
  materializeLineRange,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext";
import { BrandMark } from "./BrandMark";

const heroStates = [
  {
    key: "visible",
    title: "Make the work visible",
    label: "Map the work",
    copy: "Use cases, risks, documents, decisions, and repeated tasks are pulled out of scattered tool use and placed on one adoption canvas.",
    metric: "01",
  },
  {
    key: "structured",
    title: "Shape repeatable practice",
    label: "Design the system",
    copy: "Prompt patterns, review points, role examples, and workflow routes are designed around the work people actually do.",
    metric: "02",
  },
  {
    key: "enabled",
    title: "Help the habits hold",
    label: "Build capability",
    copy: "Training, working materials, champions, and follow-up support make AI use safer, clearer, and easier to repeat after the session.",
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
    title: "AI Team Briefings",
    summary: "Plain-English sessions that give teams a shared baseline before tools sprawl further.",
    preview: ["AI basics", "risk picture", "next step"],
  },
  {
    title: "Practical AI Workshops",
    summary:
      "Hands-on sessions for teams using ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, and adjacent tools.",
    preview: ["safe prompting", "role practice", "tool judgement"],
  },
  {
    title: "Workflow Mapping",
    summary:
      "Priority tasks, documents, decisions, and review points are mapped before automation or assistants are suggested.",
    preview: ["use-case map", "workflow route", "risk gates"],
  },
  {
    title: "Prompt & Guidance Libraries",
    summary:
      "Reusable prompts, examples, checklists, and operating notes that make good AI use easier to repeat.",
    preview: ["role prompts", "quality checks", "usage notes"],
  },
  {
    title: "Adoption Sprints",
    summary:
      "Short programmes that connect discovery, training, workflow design, and follow-up into one usable adoption system.",
    preview: ["discovery", "training", "roadmap"],
  },
  {
    title: "Custom Assistants — when useful",
    summary:
      "Assistant and automation concepts are explored when the team, data, use case, and review model are clear.",
    preview: ["assistant brief", "data scope", "human review"],
  },
] as const;

const pretextCopy =
  "Scattered AI use usually starts as private experiments: a prompt in ChatGPT, a draft in Copilot, a research thread in Perplexity, a document rewritten in Claude, a shortcut nobody else can repeat. Verdantia slows the room down just enough to make the work visible. The team maps where judgement is needed, where review must happen, which tasks are worth improving, and what guidance people need before AI becomes part of normal work. Then the system tightens: clearer examples, safer prompts, reusable workflows, and a practical route from curiosity to capability.";

const pretextSummary =
  "Private experiments become a shared map: where AI helps, where judgement is needed, and which habits the team can repeat safely.";

const pretextTokens = ["private prompts", "Copilot drafts", "review gaps", "shared route"] as const;

export function HomeLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "done" : "visible",
  );
  const skipLoader = useRef(phase === "done");

  useEffect(() => {
    if (skipLoader.current) return;

    document.body.classList.add("home-loading");
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 1180);
    const doneTimer = window.setTimeout(() => {
      document.body.classList.remove("home-loading");
      setPhase("done");
    }, 1720);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove("home-loading");
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`home-loader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading Verdantia homepage">
      <div className="loader-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="loader-paper-stack" aria-hidden="true">
        <div className="loader-paper loader-paper-one" />
        <div className="loader-paper loader-paper-two" />
        <div className="loader-paper loader-paper-three">
          <BrandMark className="loader-mark" />
          <span>Verdantia</span>
          <strong>Make the work visible.</strong>
        </div>
      </div>
      <p>Preparing the field guide</p>
    </div>
  );
}

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
      ".ladder-offer",
      ".artifact-card",
      ".method-proof-card",
      ".pathfinder-step",
      ".pathfinder-result",
      ".hero-field-guide span",
      ".canvas-paper",
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
      { rootMargin: "0px 0px 14% 0px", threshold: 0.05 },
    );

    function revealVisibleTargets() {
      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) return;

        const bounds = target.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const visibleEnough = bounds.top < viewportHeight * 1.02 && bounds.bottom > viewportHeight * -0.12;

        if (visibleEnough) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      });
    }

    let frame = 0;
    function updateScrollProgress() {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--scroll-progress", String(Math.min(1, window.scrollY / max).toFixed(4)));
    }

    function scheduleRevealCheck() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollProgress();
        revealVisibleTargets();
      });
    }

    targets.forEach((target) => observer.observe(target));
    updateScrollProgress();
    revealVisibleTargets();
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      observer.disconnect();
      body.classList.remove("motion-ready");
      document.documentElement.style.removeProperty("--scroll-progress");
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
      className={`studio-shell studio-canvas-shell studio-state-${current.key}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--pointer-x");
        event.currentTarget.style.removeProperty("--pointer-y");
      }}
    >
      <div className="canvas-topline">
        <span>AI Adoption Canvas</span>
        <span>Verdantia method</span>
      </div>

      <div className="adoption-canvas" aria-hidden="true">
        <div className="canvas-paper-stack">
          <div className="canvas-paper canvas-paper-one" />
          <div className="canvas-paper canvas-paper-two" />
          <div className="canvas-paper canvas-paper-three" />
        </div>
        <BrandMark className="canvas-watermark" />
        <svg className="canvas-routes" viewBox="0 0 680 410" focusable="false">
          <path className="route-muted" d="M52 318C130 110 292 70 396 178c92 96 168 52 232-74" />
          <path className="route-gold" d="M72 324c134-132 410-132 536 0" />
          <path className="route-bridge" d="M190 286c82-72 214-72 296 0" />
        </svg>

        <div className="messy-token token-a">prompt fragments</div>
        <div className="messy-token token-b">tool sprawl</div>
        <div className="messy-token token-c">review gaps</div>
        <div className="messy-token token-d">private shortcuts</div>

        <div className="canvas-lane lane-one">
          <span>Work</span>
          <strong>tasks · documents · meetings</strong>
        </div>
        <div className="canvas-lane lane-two">
          <span>Judgement</span>
          <strong>risk · quality · review</strong>
        </div>
        <div className="canvas-lane lane-three">
          <span>Practice</span>
          <strong>prompts · guides · rhythm</strong>
        </div>
      </div>

      <div className="studio-method-card">
        <span className="micro-label">{current.metric} / {current.label}</span>
        <strong>{current.title}</strong>
        <p>{current.copy}</p>
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

export function MethodPretext() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontFamily = "Georgia, 'Times New Roman', serif";
    const font = `18px ${fontFamily}`;
    const prepared = prepareWithSegments(pretextCopy, font, { letterSpacing: 0.1 });
    let animationFrame = 0;
    let start = performance.now();
    let isVisible = false;
    let isPageVisible = document.visibilityState === "visible";

    const scheduleDraw = () => {
      if (animationFrame || !isVisible || !isPageVisible) return;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      animationFrame = 0;
      const rect = wrap.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width < 10 || height < 10) return;

      ctx.clearRect(0, 0, width, height);
      const stageGradient = ctx.createLinearGradient(0, 0, width, height);
      stageGradient.addColorStop(0, "#08291f");
      stageGradient.addColorStop(0.48, "#0d3d2f");
      stageGradient.addColorStop(1, "#062016");
      ctx.fillStyle = stageGradient;
      ctx.fillRect(0, 0, width, height);

      const t = reducedMotion.matches ? 0.42 : (time - start) / 1000;
      const pulse = reducedMotion.matches ? 0 : Math.sin(t * 0.8) * 0.5 + 0.5;
      const isCompact = width < 560;
      const objectW = (isCompact ? Math.min(248, width * 0.68) : Math.min(310, width * 0.42)) + pulse * (isCompact ? 12 : 22);
      const objectH = (isCompact ? Math.min(152, height * 0.27) : Math.min(218, height * 0.38)) + (1 - pulse) * (isCompact ? 10 : 18);
      const objectX = width * ((isCompact ? 0.56 : 0.62) + Math.sin(t * 0.32) * (isCompact ? 0.016 : 0.028));
      const objectY = height * ((isCompact ? 0.43 : 0.5) + Math.cos(t * 0.36) * (isCompact ? 0.018 : 0.04));
      const halo = isCompact ? 22 : 30;
      const lineHeight = width < 680 ? 23 : 26;
      const margin = width < 680 ? 22 : 44;
      const top = width < 680 ? 92 : 118;
      const maxY = isCompact ? height * 0.64 : height - 80;
      const freeGap = 16;

      ctx.save();
      ctx.globalAlpha = 0.42;
      ctx.strokeStyle = "rgba(255, 253, 248, 0.08)";
      ctx.lineWidth = 1;
      for (let x = margin; x < width - margin; x += 34) {
        ctx.beginPath();
        ctx.moveTo(x, 22);
        ctx.lineTo(x, height - 22);
        ctx.stroke();
      }
      for (let y = 28; y < height - 22; y += 34) {
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
      }
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 0.72;
      ctx.strokeStyle = "rgba(201, 163, 90, 0.42)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(margin, height * 0.72);
      ctx.bezierCurveTo(width * 0.24, height * 0.52, width * 0.42, height * 0.86, objectX - objectW / 2, objectY + objectH * 0.2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 253, 248, 0.18)";
      ctx.beginPath();
      ctx.moveTo(width - margin, height * 0.25);
      ctx.bezierCurveTo(width * 0.78, height * 0.4, width * 0.64, height * 0.22, objectX + objectW / 2, objectY - objectH * 0.24);
      ctx.stroke();
      ctx.restore();

      const gradient = ctx.createLinearGradient(objectX - objectW / 2, objectY, objectX + objectW / 2, objectY);
      gradient.addColorStop(0, "rgba(255, 253, 248, 0.96)");
      gradient.addColorStop(1, "rgba(231, 225, 208, 0.9)");
      ctx.fillStyle = gradient;
      ctx.shadowColor = "rgba(0, 0, 0, 0.28)";
      ctx.shadowBlur = 36;
      ctx.shadowOffsetY = 18;
      ctx.strokeStyle = "rgba(201, 163, 90, 0.86)";
      ctx.lineWidth = 1.7;
      roundRect(ctx, objectX - objectW / 2, objectY - objectH / 2, objectW, objectH, 26);
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillStyle = "rgba(14, 61, 47, 0.94)";
      ctx.font = "700 13px Arial, sans-serif";
      ctx.letterSpacing = "0.08em";
      ctx.fillText("OPERATING MAP", objectX - objectW / 2 + 22, objectY - objectH / 2 + 34);
      ctx.font = "500 15px Arial, sans-serif";
      ctx.letterSpacing = "0";
      ["Use cases", "Risk gates", "Prompt library", "Team rhythm"].forEach((label, index) => {
        const y = objectY - objectH / 2 + 68 + index * 27;
        ctx.fillStyle = index === 1 ? "rgba(173, 122, 28, 0.95)" : "rgba(14, 61, 47, 0.8)";
        ctx.fillText(label, objectX - objectW / 2 + 24, y);
        ctx.strokeStyle = index === 1 ? "rgba(201, 163, 90, 0.5)" : "rgba(14, 61, 47, 0.16)";
        ctx.beginPath();
        ctx.moveTo(objectX - objectW / 2 + 132, y - 5);
        ctx.lineTo(objectX + objectW / 2 - 24, y - 5);
        ctx.stroke();
      });

      ctx.fillStyle = "rgba(14, 61, 47, 0.1)";
      roundRect(ctx, objectX - objectW / 2 + 22, objectY + objectH / 2 - 52, objectW - 44, 30, 15);
      ctx.fill();
      ctx.fillStyle = "rgba(14, 61, 47, 0.82)";
      ctx.font = "700 12px Georgia, 'Times New Roman', serif";
      const statusLabel = objectW < 235 ? "VISIBLE → REPEATABLE" : "SCATTERED → VISIBLE → REPEATABLE";
      ctx.fillText(statusLabel, objectX - objectW / 2 + 39, objectY + objectH / 2 - 32);

      ctx.font = font;
      ctx.fillStyle = "rgba(255, 253, 248, 0.72)";
      ctx.letterSpacing = "0px";
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = top;

      while (y < maxY) {
        const rowTop = y - lineHeight;
        const rowBottom = y + 6;
        const overlaps = rowBottom > objectY - objectH / 2 - halo && rowTop < objectY + objectH / 2 + halo;
        const intervals: Array<[number, number]> = [[margin, width - margin]];

        if (overlaps && width > 560) {
          const left = objectX - objectW / 2 - halo;
          const right = objectX + objectW / 2 + halo;
          intervals.length = 0;
          if (left - margin > 150) intervals.push([margin, left - freeGap]);
          if (width - margin - right > 150) intervals.push([right + freeGap, width - margin]);
          if (intervals.length === 0) {
            y += lineHeight;
            continue;
          }
        }

        for (const [x0, x1] of intervals) {
          const range = layoutNextLineRange(prepared, cursor, x1 - x0);
          if (!range) {
            if (!reducedMotion.matches) scheduleDraw();
            return;
          }
          const line = materializeLineRange(prepared, range);
          ctx.fillText(line.text, x0, y);
          cursor = range.end;
        }
        y += lineHeight;
      }

      if (!reducedMotion.matches) scheduleDraw();
    };

    resize();
    draw(performance.now());
    const resizeObserver = new ResizeObserver(() => {
      resize();
      scheduleDraw();
    });
    resizeObserver.observe(wrap);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible) {
          start = performance.now();
          scheduleDraw();
        } else if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      },
      { rootMargin: "260px 0px", threshold: 0.02 },
    );
    visibilityObserver.observe(wrap);

    const handleReducedMotionChange = () => {
      start = performance.now();
      scheduleDraw();
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      scheduleDraw();
    };

    reducedMotion.addEventListener("change", handleReducedMotionChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pretext-stage" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="pretext-stage-label" aria-hidden="true">
        <span>Live text flow</span>
        <strong>Pretext method canvas</strong>
      </div>
      <div className="pretext-token-cloud" aria-hidden="true">
        {pretextTokens.map((token) => (
          <span key={token}>{token}</span>
        ))}
      </div>
      <div className="pretext-fallback">
        <p className="section-kicker">Signature method</p>
        <h3>First make the work visible. Then make it repeatable.</h3>
        <p>{pretextSummary}</p>
        <p className="sr-only">{pretextCopy}</p>
      </div>
    </div>
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
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
