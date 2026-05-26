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
    copy: "Use cases, risks, documents, decisions, and repeated tasks are pulled out of scattered tool use and placed on one shared working map.",
    metric: "01",
  },
  {
    key: "structured",
    title: "Shape repeatable practice",
    label: "Agree the practice",
    copy: "Prompt patterns, review points, role examples, and workflows are designed around the work people actually do.",
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
    label: "The habits keep improving",
    copy: "Guides, prompt libraries, champions, and feedback loops make progress repeatable.",
  },
] as const;

const capabilityDetails = [
  {
    title: "AI Team Briefings",
    summary: "Plain-English sessions that give teams a shared baseline before informal AI use spreads further.",
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
    preview: ["use-case map", "workflow", "review points"],
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
      "Short programmes that connect discovery, training, workflow design, and follow-up into one usable adoption rhythm.",
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
  "Scattered AI use usually starts as private experiments: a prompt in ChatGPT, a draft in Copilot, a research thread in Perplexity, a document rewritten in Claude, a shortcut nobody else can repeat. Verdantia slows the room down just enough to make the work visible. The team maps where judgement is needed, where review must happen, which tasks are worth improving, and what guidance people need before AI becomes part of normal work. Then the practice tightens: clearer examples, safer prompts, reusable workflows, and a practical path from curiosity to capability.";

const pretextSummary =
  "Private experiments become a shared map: where AI helps, where judgement is needed, and which habits the team can repeat safely.";

const pretextTokens = ["private prompts", "Copilot drafts", "review gaps", "shared practice"] as const;

export function HomeLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">("visible");
  const skipLoader = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      skipLoader.current = true;
      const doneTimer = window.setTimeout(() => setPhase("done"), 0);
      return () => window.clearTimeout(doneTimer);
    }

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

export function ReactiveArtifactField() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight / 2;

    const apply = () => {
      frame = 0;
      const nx = latestX / Math.max(1, window.innerWidth) - 0.5;
      const ny = latestY / Math.max(1, window.innerHeight) - 0.5;

      const smX = nx * 8;
      const smY = ny * 8;
      const mdX = nx * 18;
      const mdY = ny * 18;
      const lgX = nx * 34;
      const lgY = ny * 34;

      root.style.setProperty("--field-x-sm", `${smX.toFixed(2)}px`);
      root.style.setProperty("--field-y-sm", `${smY.toFixed(2)}px`);
      root.style.setProperty("--field-x-sm-neg", `${(-smX).toFixed(2)}px`);
      root.style.setProperty("--field-y-sm-neg", `${(-smY).toFixed(2)}px`);
      root.style.setProperty("--field-x-md", `${mdX.toFixed(2)}px`);
      root.style.setProperty("--field-y-md", `${mdY.toFixed(2)}px`);
      root.style.setProperty("--field-x-md-neg", `${(-mdX).toFixed(2)}px`);
      root.style.setProperty("--field-y-md-neg", `${(-mdY).toFixed(2)}px`);
      root.style.setProperty("--field-x-lg", `${lgX.toFixed(2)}px`);
      root.style.setProperty("--field-y-lg", `${lgY.toFixed(2)}px`);
      root.style.setProperty("--field-x-lg-neg", `${(-lgX).toFixed(2)}px`);
      root.style.setProperty("--field-y-lg-neg", `${(-lgY).toFixed(2)}px`);
    };

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      if (reducedMotion.matches) return;
      latestX = event.clientX;
      latestY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    const clearFieldVars = () => {
      [
        "--field-x-sm",
        "--field-y-sm",
        "--field-x-sm-neg",
        "--field-y-sm-neg",
        "--field-x-md",
        "--field-y-md",
        "--field-x-md-neg",
        "--field-y-md-neg",
        "--field-x-lg",
        "--field-y-lg",
        "--field-x-lg-neg",
        "--field-y-lg-neg",
      ].forEach((property) => root.style.removeProperty(property));
    };

    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) {
      apply();
      return clearFieldVars;
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    apply();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      clearFieldVars();
    };
  }, []);

  return (
    <div className="reactive-artifact-field" aria-hidden="true">
      <svg className="reactive-artifact artifact-route" viewBox="0 0 420 180" focusable="false">
        <path d="M18 126C92 38 164 28 226 82c58 50 104 42 176-30" />
        <path d="M54 142c88-72 214-72 304 0" />
      </svg>
      <svg className="reactive-artifact artifact-paper artifact-paper-one" viewBox="0 0 180 140" focusable="false">
        <rect x="18" y="18" width="132" height="92" rx="18" />
        <path d="M40 52h64M40 72h88M40 92h48" />
      </svg>
      <svg className="reactive-artifact artifact-paper artifact-paper-two" viewBox="0 0 180 140" focusable="false">
        <rect x="22" y="20" width="124" height="88" rx="18" />
        <path d="M44 50h72M44 70h44M44 90h78" />
      </svg>
      <svg className="reactive-artifact artifact-gate" viewBox="0 0 210 210" focusable="false">
        <circle cx="105" cy="105" r="80" />
        <path d="M58 105h94M105 58v94" />
      </svg>
      <svg className="reactive-artifact artifact-dots" viewBox="0 0 220 90" focusable="false">
        <circle cx="22" cy="44" r="5" />
        <circle cx="82" cy="44" r="5" />
        <circle cx="142" cy="44" r="5" />
        <circle cx="202" cy="44" r="5" />
        <path d="M28 44h48M88 44h48M148 44h48" />
      </svg>
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

    body.classList.add("motion-ready");

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
    let curtainDistance = 680;
    const desktopCurtainQuery = window.matchMedia("(min-width: 1121px) and (min-height: 760px)");

    function clearHeroCurtain() {
      body.classList.remove("hero-curtain-active", "hero-curtain-open");
      document.documentElement.style.removeProperty("--hero-curtain-progress");
      document.documentElement.style.removeProperty("--hero-curtain-lift");
      document.documentElement.style.removeProperty("--hero-curtain-clip");
      document.documentElement.style.removeProperty("--hero-curtain-nudge");
      document.documentElement.style.removeProperty("--hero-curtain-shadow-y");
      document.documentElement.style.removeProperty("--hero-curtain-shadow-blur");
      document.documentElement.style.removeProperty("--hero-curtain-cue-opacity");
    }

    function measureHeroCurtain() {
      const target = document.getElementById("problem-section") ?? document.getElementById("intro-heading");
      if (!target || !desktopCurtainQuery.matches) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 0;
      curtainDistance = Math.max(680, targetTop - headerHeight);
    }

    function updateScrollProgress() {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--scroll-progress", String(Math.min(1, window.scrollY / max).toFixed(4)));

      if (!desktopCurtainQuery.matches) {
        clearHeroCurtain();
        return;
      }

      const progress = Math.min(1, Math.max(0, window.scrollY / curtainDistance));
      const eased = 1 - Math.pow(1 - progress, 3);
      const liftEased = progress * (2 - progress);
      const visualProgress = progress >= 0.985 ? 1 : eased;

      document.documentElement.style.setProperty("--hero-curtain-progress", progress.toFixed(4));
      document.documentElement.style.setProperty("--hero-curtain-lift", `${(-4.2 * liftEased).toFixed(3)}svh`);
      document.documentElement.style.setProperty("--hero-curtain-clip", `${(100 * visualProgress).toFixed(2)}%`);
      document.documentElement.style.setProperty("--hero-curtain-nudge", `${(-0.28 * liftEased).toFixed(3)}rem`);
      document.documentElement.style.setProperty("--hero-curtain-shadow-y", `${(14 * liftEased).toFixed(2)}px`);
      document.documentElement.style.setProperty("--hero-curtain-shadow-blur", `${(38 * liftEased).toFixed(2)}px`);
      document.documentElement.style.setProperty("--hero-curtain-cue-opacity", String(Math.max(0, 1 - progress * 2.4).toFixed(3)));
      body.classList.toggle("hero-curtain-active", progress > 0.03 && progress < 0.96);
      body.classList.toggle("hero-curtain-open", progress >= 0.96);
    }

    function scheduleRevealCheck() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollProgress();
        revealVisibleTargets();
      });
    }

    function handleResize() {
      measureHeroCurtain();
      scheduleRevealCheck();
    }

    targets.forEach((target) => observer.observe(target));
    measureHeroCurtain();
    updateScrollProgress();
    revealVisibleTargets();
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize, { once: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      observer.disconnect();
      body.classList.remove("motion-ready");
      document.documentElement.style.removeProperty("--scroll-progress");
      clearHeroCurtain();
    };
  }, []);

  return null;
}

export function HeroStudio() {
  const [active, setActive] = useState(0);
  const isInteracting = useRef(false);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const pointerFrame = useRef(0);
  const latestPointer = useRef({ x: 58, y: 42 });
  const current = heroStates[active];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      if (!isInteracting.current) {
        setActive((value) => (value + 1) % heroStates.length);
      }
    }, 5400);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const shell = shellRef.current;

    return () => {
      if (pointerFrame.current) {
        window.cancelAnimationFrame(pointerFrame.current);
      }
      shell?.style.removeProperty("--pointer-x");
      shell?.style.removeProperty("--pointer-y");
      shell?.style.removeProperty("--pointer-shift-x");
      shell?.style.removeProperty("--pointer-shift-y");
    };
  }, []);

  function applyPointerVars() {
    pointerFrame.current = 0;
    const shell = shellRef.current;
    if (!shell) return;

    const pointerShiftX = (latestPointer.current.x - 50) * 0.16;
    const pointerShiftY = (latestPointer.current.y - 50) * 0.16;

    shell.style.setProperty("--pointer-x", `${latestPointer.current.x.toFixed(2)}%`);
    shell.style.setProperty("--pointer-y", `${latestPointer.current.y.toFixed(2)}%`);
    shell.style.setProperty("--pointer-shift-x", `${pointerShiftX.toFixed(2)}px`);
    shell.style.setProperty("--pointer-shift-y", `${pointerShiftY.toFixed(2)}px`);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    latestPointer.current = {
      x: ((event.clientX - bounds.left) / Math.max(1, bounds.width)) * 100,
      y: ((event.clientY - bounds.top) / Math.max(1, bounds.height)) * 100,
    };

    if (!pointerFrame.current) {
      pointerFrame.current = window.requestAnimationFrame(applyPointerVars);
    }
  }

  return (
    <div
      ref={shellRef}
      className={`studio-shell studio-canvas-shell studio-state-${current.key}`}
      onPointerEnter={() => {
        isInteracting.current = true;
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        isInteracting.current = false;
        if (pointerFrame.current) {
          window.cancelAnimationFrame(pointerFrame.current);
          pointerFrame.current = 0;
        }
        event.currentTarget.style.removeProperty("--pointer-x");
        event.currentTarget.style.removeProperty("--pointer-y");
        event.currentTarget.style.removeProperty("--pointer-shift-x");
        event.currentTarget.style.removeProperty("--pointer-shift-y");
      }}
      onFocusCapture={() => {
        isInteracting.current = true;
      }}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          isInteracting.current = false;
        }
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
        <div className="messy-token token-b">tool overload</div>
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
        <div className="studio-method-copy" key={current.key}>
          <span className="micro-label">{current.metric} / {current.label}</span>
          <strong>{current.title}</strong>
          <p>{current.copy}</p>
        </div>
      </div>

      <div className="studio-controls" aria-label="Explore Verdantia method">
        {heroStates.map((state, index) => (
          <button
            className={active === index ? "is-active" : ""}
            type="button"
            key={state.key}
            aria-pressed={active === index}
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
    let pointerInside = false;
    let pointerTarget = { x: 0.62, y: 0.5 };
    const pointerCurrent = { x: 0.62, y: 0.5 };
    const pointerVelocity = { x: 0, y: 0 };
    let palette = readPretextPalette(wrap);
    let stageSize = { width: 0, height: 0 };
    let overlayBoxes: Array<{ left: number; right: number; top: number; bottom: number }> = [];

    const scheduleDraw = () => {
      if (animationFrame || !isVisible || !isPageVisible) return;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const measureOverlayBoxes = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const reserve = stageSize.width < 680 ? 14 : 20;
      overlayBoxes = Array.from(
        wrap.querySelectorAll<HTMLElement>(".pretext-stage-label, .pretext-token-cloud span, .pretext-fallback"),
      )
        .filter((element) => {
          const styles = window.getComputedStyle(element);
          return styles.display !== "none" && styles.visibility !== "hidden" && Number(styles.opacity || 1) !== 0;
        })
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            left: rect.left - wrapRect.left - reserve,
            right: rect.right - wrapRect.left + reserve,
            top: rect.top - wrapRect.top - reserve,
            bottom: rect.bottom - wrapRect.top + reserve,
          };
        })
        .filter((box) => box.right > 0 && box.left < stageSize.width && box.bottom > 0 && box.top < stageSize.height);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      palette = readPretextPalette(wrap);
      stageSize = { width: rect.width, height: rect.height };
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      measureOverlayBoxes();
    };

    const draw = (time: number) => {
      animationFrame = 0;
      const { width, height } = stageSize;
      if (width < 10 || height < 10) return;

      ctx.clearRect(0, 0, width, height);
      const t = reducedMotion.matches ? 0.42 : (time - start) / 1000;
      if (reducedMotion.matches) {
        pointerCurrent.x = pointerTarget.x;
        pointerCurrent.y = pointerTarget.y;
      } else {
        const stiffness = pointerInside ? 0.054 : 0.032;
        const damping = pointerInside ? 0.76 : 0.82;
        pointerVelocity.x = (pointerVelocity.x + (pointerTarget.x - pointerCurrent.x) * stiffness) * damping;
        pointerVelocity.y = (pointerVelocity.y + (pointerTarget.y - pointerCurrent.y) * stiffness) * damping;
        pointerCurrent.x += pointerVelocity.x;
        pointerCurrent.y += pointerVelocity.y;
      }
      applyPretextPointerVars(wrap, pointerCurrent.x, pointerCurrent.y);

      const ambientGradient = ctx.createRadialGradient(width * 0.62, height * 0.5, 10, width * 0.62, height * 0.5, Math.max(width, height) * 0.72);
      ambientGradient.addColorStop(0, palette.ambientCore);
      ambientGradient.addColorStop(0.52, palette.ambientMid);
      ambientGradient.addColorStop(1, palette.transparent);
      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, width, height);

      const cursorGlow = ctx.createRadialGradient(pointerCurrent.x * width, pointerCurrent.y * height, 0, pointerCurrent.x * width, pointerCurrent.y * height, Math.min(width, height) * 0.34);
      cursorGlow.addColorStop(0, pointerInside ? palette.cursorGlowActive : palette.cursorGlowIdle);
      cursorGlow.addColorStop(1, palette.transparent);
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      const pulse = reducedMotion.matches ? 0 : Math.sin(t * 0.8) * 0.5 + 0.5;
      const isCompact = width < 560;
      const objectW = (isCompact ? Math.min(248, width * 0.68) : Math.min(310, width * 0.42)) + pulse * (isCompact ? 12 : 22);
      const objectH = (isCompact ? Math.min(152, height * 0.27) : Math.min(218, height * 0.38)) + (1 - pulse) * (isCompact ? 10 : 18);
      const idleX = (isCompact ? 0.56 : 0.62) + Math.sin(t * 0.32) * (isCompact ? 0.016 : 0.028);
      const idleY = (isCompact ? 0.43 : 0.5) + Math.cos(t * 0.36) * (isCompact ? 0.018 : 0.04);
      const pointerStrength = pointerInside && !isCompact ? 0.58 : pointerInside ? 0.28 : 0;
      const objectX = width * (idleX * (1 - pointerStrength) + pointerCurrent.x * pointerStrength);
      const objectY = height * (idleY * (1 - pointerStrength) + pointerCurrent.y * pointerStrength);
      const halo = (isCompact ? 22 : 30) + (pointerInside ? 14 : 0);
      const lineHeight = width < 680 ? 23 : 26;
      const margin = width < 680 ? 22 : 44;
      const top = width < 680 ? 92 : 118;
      const maxY = isCompact ? height * 0.64 : height - 80;
      const freeGap = 16;

      ctx.save();
      ctx.globalAlpha = pointerInside ? 0.46 : 0.34;
      ctx.strokeStyle = palette.gridLine;
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
      ctx.strokeStyle = palette.routePrimary;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(margin, height * 0.72);
      ctx.bezierCurveTo(width * 0.24, height * 0.52, width * 0.42, height * 0.86, objectX - objectW / 2, objectY + objectH * 0.2);
      ctx.stroke();
      ctx.strokeStyle = palette.routeSecondary;
      ctx.beginPath();
      ctx.moveTo(width - margin, height * 0.25);
      ctx.bezierCurveTo(width * 0.78, height * 0.4, width * 0.64, height * 0.22, objectX + objectW / 2, objectY - objectH * 0.24);
      ctx.stroke();
      ctx.restore();

      const readingWash = ctx.createLinearGradient(margin - 18, top - 42, width - margin, top + 160);
      readingWash.addColorStop(0, palette.readingWashStrong);
      readingWash.addColorStop(0.55, palette.readingWashSoft);
      readingWash.addColorStop(1, palette.transparent);
      ctx.fillStyle = readingWash;
      roundRect(ctx, margin - 20, top - 44, width - margin * 2 + 40, Math.min(220, height * 0.42), 34);
      ctx.fill();

      const gradient = ctx.createLinearGradient(objectX - objectW / 2, objectY, objectX + objectW / 2, objectY);
      gradient.addColorStop(0, palette.paperA);
      gradient.addColorStop(1, palette.paperB);
      ctx.fillStyle = gradient;
      ctx.shadowColor = palette.paperShadow;
      ctx.shadowBlur = 36;
      ctx.shadowOffsetY = 18;
      ctx.strokeStyle = palette.paperBorder;
      ctx.lineWidth = 1.7;
      roundRect(ctx, objectX - objectW / 2, objectY - objectH / 2, objectW, objectH, 26);
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillStyle = palette.mapInkStrong;
      ctx.font = "700 13px Arial, sans-serif";
      ctx.letterSpacing = "0.08em";
      ctx.fillText("OPERATING MAP", objectX - objectW / 2 + 22, objectY - objectH / 2 + 34);
      ctx.font = "500 15px Arial, sans-serif";
      ctx.letterSpacing = "0";
      ["Use cases", "Risk gates", "Prompt library", "Team rhythm"].forEach((label, index) => {
        const y = objectY - objectH / 2 + 68 + index * 27;
        ctx.fillStyle = index === 1 ? palette.mapAccent : palette.mapInk;
        ctx.fillText(label, objectX - objectW / 2 + 24, y);
        ctx.strokeStyle = index === 1 ? palette.mapRuleAccent : palette.mapRule;
        ctx.beginPath();
        ctx.moveTo(objectX - objectW / 2 + 132, y - 5);
        ctx.lineTo(objectX + objectW / 2 - 24, y - 5);
        ctx.stroke();
      });

      if (!isCompact) {
        ctx.fillStyle = palette.mapPill;
        roundRect(ctx, objectX - objectW / 2 + 22, objectY + objectH / 2 - 52, objectW - 44, 30, 15);
        ctx.fill();
        ctx.fillStyle = palette.mapInkStrong;
        ctx.font = "700 12px Georgia, 'Times New Roman', serif";
        ctx.fillText("SCATTERED → VISIBLE → REPEATABLE", objectX - objectW / 2 + 39, objectY + objectH / 2 - 32);
      }

      ctx.font = font;
      ctx.fillStyle = pointerInside ? palette.textActive : palette.text;
      ctx.letterSpacing = "0px";
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = top;
      const minReadableWidth = width < 680 ? 118 : 150;
      const subtractInterval = (intervals: Array<[number, number]>, cutLeft: number, cutRight: number) => {
        const next: Array<[number, number]> = [];
        intervals.forEach(([startX, endX]) => {
          const left = Math.max(margin, Math.min(width - margin, cutLeft));
          const right = Math.max(margin, Math.min(width - margin, cutRight));
          if (right <= startX || left >= endX) {
            next.push([startX, endX]);
            return;
          }
          if (left - startX >= minReadableWidth) next.push([startX, left]);
          if (endX - right >= minReadableWidth) next.push([right, endX]);
        });
        return next;
      };

      while (y < maxY) {
        const rowTop = y - lineHeight;
        const rowBottom = y + 6;
        let intervals: Array<[number, number]> = [[margin, width - margin]];
        const objectOverlaps = rowBottom > objectY - objectH / 2 - halo && rowTop < objectY + objectH / 2 + halo;

        if (objectOverlaps) {
          intervals = subtractInterval(intervals, objectX - objectW / 2 - halo - freeGap, objectX + objectW / 2 + halo + freeGap);
        }

        overlayBoxes.forEach((box) => {
          if (rowBottom > box.top && rowTop < box.bottom) {
            intervals = subtractInterval(intervals, box.left - freeGap, box.right + freeGap);
          }
        });

        if (intervals.length === 0) {
          y += lineHeight;
          continue;
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
    const overlayRefreshTimer = window.setTimeout(() => {
      measureOverlayBoxes();
      scheduleDraw();
    }, 180);
    document.fonts?.ready.then(() => {
      measureOverlayBoxes();
      scheduleDraw();
    });
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

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      if (reducedMotion.matches) return;

      const rect = wrap.getBoundingClientRect();
      pointerInside = true;
      pointerTarget = {
        x: Math.min(0.86, Math.max(0.16, (event.clientX - rect.left) / Math.max(1, rect.width))),
        y: Math.min(0.78, Math.max(0.18, (event.clientY - rect.top) / Math.max(1, rect.height))),
      };
      wrap.classList.add("is-reacting");
      scheduleDraw();
    };

    const handlePointerLeave = () => {
      pointerInside = false;
      pointerTarget = { x: 0.62, y: 0.5 };
      wrap.classList.remove("is-reacting");
      scheduleDraw();
    };

    const handleThemeChange = () => {
      palette = readPretextPalette(wrap);
      measureOverlayBoxes();
      scheduleDraw();
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      scheduleDraw();
    };

    reducedMotion.addEventListener("change", handleReducedMotionChange);
    wrap.addEventListener("pointermove", handlePointerMove, { passive: true });
    wrap.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      [
        "--pretext-x",
        "--pretext-y",
        "--pretext-x-neg",
        "--pretext-y-neg",
        "--pretext-x-soft",
        "--pretext-y-soft",
        "--pretext-x-soft-neg",
        "--pretext-y-soft-neg",
      ].forEach((property) => wrap.style.removeProperty(property));
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(overlayRefreshTimer);
    };
  }, []);

  return (
    <div className="pretext-stage" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="pretext-stage-label" aria-hidden="true">
        <span>From scattered use to shared practice</span>
        <strong>Verdantia working map</strong>
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

function readPretextPalette(element: HTMLElement) {
  const styles = window.getComputedStyle(element);
  const value = (name: string, fallback: string) => styles.getPropertyValue(name).trim() || fallback;

  return {
    ambientCore: value("--pretext-ambient-core", "rgba(14, 61, 47, 0.15)"),
    ambientMid: value("--pretext-ambient-mid", "rgba(201, 163, 90, 0.08)"),
    cursorGlowActive: value("--pretext-cursor-active", "rgba(201, 163, 90, 0.18)"),
    cursorGlowIdle: value("--pretext-cursor-idle", "rgba(201, 163, 90, 0.08)"),
    gridLine: value("--pretext-grid-line", "rgba(14, 61, 47, 0.12)"),
    routePrimary: value("--pretext-route-primary", "rgba(201, 163, 90, 0.48)"),
    routeSecondary: value("--pretext-route-secondary", "rgba(14, 61, 47, 0.2)"),
    readingWashStrong: value("--pretext-reading-wash-strong", "rgba(255, 250, 241, 0.7)"),
    readingWashSoft: value("--pretext-reading-wash-soft", "rgba(255, 250, 241, 0.18)"),
    paperA: value("--pretext-paper-a", "rgba(255, 253, 248, 0.96)"),
    paperB: value("--pretext-paper-b", "rgba(231, 225, 208, 0.9)"),
    paperBorder: value("--pretext-paper-border", "rgba(201, 163, 90, 0.86)"),
    paperShadow: value("--pretext-paper-shadow", "rgba(0, 0, 0, 0.28)"),
    mapInkStrong: value("--pretext-map-ink-strong", "rgba(14, 61, 47, 0.94)"),
    mapInk: value("--pretext-map-ink", "rgba(14, 61, 47, 0.8)"),
    mapAccent: value("--pretext-map-accent", "rgba(126, 82, 16, 0.98)"),
    mapRule: value("--pretext-map-rule", "rgba(14, 61, 47, 0.16)"),
    mapRuleAccent: value("--pretext-map-rule-accent", "rgba(201, 163, 90, 0.5)"),
    mapPill: value("--pretext-map-pill", "rgba(14, 61, 47, 0.1)"),
    text: value("--pretext-text", "rgba(14, 61, 47, 0.63)"),
    textActive: value("--pretext-text-active", "rgba(14, 61, 47, 0.76)"),
    transparent: value("--pretext-transparent", "rgba(14, 61, 47, 0)"),
  };
}

function applyPretextPointerVars(element: HTMLElement, x: number, y: number) {
  const px = (x - 0.5) * 28;
  const py = (y - 0.5) * 28;
  element.style.setProperty("--pretext-x", `${px.toFixed(2)}px`);
  element.style.setProperty("--pretext-y", `${py.toFixed(2)}px`);
  element.style.setProperty("--pretext-x-neg", `${(-px).toFixed(2)}px`);
  element.style.setProperty("--pretext-y-neg", `${(-py).toFixed(2)}px`);
  element.style.setProperty("--pretext-x-soft", `${(px * 0.24).toFixed(2)}px`);
  element.style.setProperty("--pretext-y-soft", `${(py * 0.24).toFixed(2)}px`);
  element.style.setProperty("--pretext-x-soft-neg", `${(-px * 0.24).toFixed(2)}px`);
  element.style.setProperty("--pretext-y-soft-neg", `${(-py * 0.24).toFixed(2)}px`);
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
        <span className="micro-label">Where your team may be now</span>
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
