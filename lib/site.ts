export const siteUrl = "https://verdantia.it";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Offers", href: "/offers" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const contactEmail = "oluwagbemi@verdantia.it";

export const offers = [
  {
    title: "AI Team Briefing",
    level: "Baseline",
    buyerQuestion: "Where should we start?",
    bestWhen: "You need shared language before picking tools or changing process.",
    leaveWith: "A practical AI baseline and recommended next step.",
    intensity: "Light",
    ctaLabel: "Start with a briefing",
    price: "€500–€750",
    duration: "60–90 minutes",
    summary:
      "A low-friction session that gives leaders and teams a clear baseline: what AI can help with, where the risks sit, and what to do next.",
    bestFor:
      "Teams that are curious, cautious, or scattered and need a practical shared starting point.",
    outputs: ["plain-English AI briefing", "tool and risk overview", "live Q&A", "recommended next step"],
  },
  {
    title: "Practical AI Workshop",
    level: "Practice",
    buyerQuestion: "How should the team use AI safely?",
    bestWhen: "People need hands-on practice, examples, and safer prompting habits.",
    leaveWith: "Role-based practice, safer prompt habits, and a responsible-use checklist.",
    intensity: "Hands-on",
    ctaLabel: "Plan a workshop",
    price: "€1,250–€1,750",
    duration: "Half day",
    summary:
      "Hands-on AI literacy and workplace practice for teams using tools like ChatGPT, Claude, Gemini, Microsoft Copilot, and Perplexity.",
    bestFor:
      "Teams that need confidence, safe prompting habits, and role-based examples they can use immediately.",
    outputs: ["tool literacy", "safe prompting practice", "role-based exercises", "responsible-use checklist"],
  },
  {
    title: "AI Adoption Day",
    level: "Map",
    buyerQuestion: "Which workflows should improve first?",
    bestWhen: "The team is ready to connect training to real workflows and decisions.",
    leaveWith: "A use-case map, starter prompt library, and adoption roadmap.",
    intensity: "Deep dive",
    ctaLabel: "Map an adoption day",
    price: "€2,250–€3,000",
    duration: "Full day",
    summary:
      "A deeper day combining training, use-case discovery, workflow mapping, starter prompts, and manager recommendations.",
    bestFor:
      "Organisations ready to move from experiments into a visible adoption plan.",
    outputs: ["workshop delivery", "use-case map", "starter prompt library", "adoption roadmap"],
  },
  {
    title: "AI Adoption Sprint",
    level: "System",
    buyerQuestion: "How do we make adoption stick?",
    bestWhen: "AI is already in motion and needs a practical operating rhythm.",
    leaveWith: "A workflow/prompt pack, safe-use guidance, roadmap, and follow-up support.",
    intensity: "Structured support",
    ctaLabel: "Discuss a sprint",
    price: "€3,500–€6,000",
    duration: "2–4 weeks",
    summary:
      "A focused implementation sprint to map priority work, train the team, build reusable materials, and leave a practical adoption system behind.",
    bestFor:
      "Teams that need structured support beyond a single workshop, without jumping straight into fragile automation projects.",
    outputs: ["discovery", "training", "workflow/prompt pack", "safe-use guidance", "follow-up support"],
  },
] as const;

export const capabilities = [
  {
    title: "Practical AI training",
    summary: "Plain-English sessions, live examples, and role-based practice for real workplace tasks.",
  },
  {
    title: "AI adoption support",
    summary:
      "Use-case mapping, workflow design, safe-use guidance, prompt libraries, and adoption roadmaps.",
  },
  {
    title: "Workflow and prompt systems",
    summary:
      "Reusable prompts and working patterns for research, writing, analysis, meetings, reporting, and operations.",
  },
  {
    title: "Automation when useful",
    summary:
      "Automation and custom assistants are considered when the team, workflow, data, and risk picture are clear.",
  },
] as const;

export const principles = [
  "Make it clear.",
  "Make it practical.",
  "Make it safe.",
  "Make it useful.",
  "Make it repeatable.",
  "Make it human.",
] as const;

export const enquiryTypes = [
  "AI Team Briefing",
  "Practical AI Workshop",
  "AI Adoption Day",
  "AI Adoption Sprint",
  "Training provider partnership",
  "Nonprofit/community workshop",
  "Other",
] as const;
