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
