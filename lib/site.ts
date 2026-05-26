export const siteUrl = "https://verdantia.it";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Offers", href: "/offers" },
  { label: "Learning", href: "/learning" },
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
    price: "From €750 remote / from €950 onsite",
    duration: "60–90 minutes",
    summary:
      "A low-friction session that gives leaders and teams a clear baseline: what AI can help with, where the risks sit, and what to do next.",
    bestFor:
      "Teams that are curious, cautious, or scattered and need a practical shared starting point.",
    inRoom: [
      "Plain-English AI and tool baseline",
      "Examples matched to the team's work",
      "Risk, privacy, and review discussion",
      "Live Q&A around next steps",
    ],
    practice: ["tool judgement", "safe-use questions", "first-use-case triage"],
    outputs: ["plain-English AI briefing", "tool and risk overview", "live Q&A", "recommended next step"],
    nextStep: "Move into a practical workshop when the team is ready to practise on real work.",
  },
  {
    title: "Practical AI Workshop",
    level: "Practice",
    buyerQuestion: "How should the team use AI safely?",
    bestWhen: "People need hands-on practice, examples, and safer prompting habits.",
    leaveWith: "Role-based practice, safer prompt habits, and a responsible-use checklist.",
    intensity: "Hands-on",
    ctaLabel: "Plan a workshop",
    price: "From €1,750 remote / from €2,250 onsite or customised",
    duration: "Half day",
    summary:
      "Hands-on AI literacy and workplace practice for teams using tools like ChatGPT, Claude, Gemini, Microsoft Copilot, and Perplexity.",
    bestFor:
      "Teams that need confidence, safe prompting habits, and role-based examples they can use immediately.",
    inRoom: [
      "Build a shared AI baseline",
      "Compare everyday AI tools",
      "Practise prompts on familiar work",
      "Review outputs for quality and risk",
    ],
    practice: ["safe prompting", "role-based examples", "output verification", "responsible use"],
    outputs: ["tool literacy", "safe prompting practice", "role-based exercises", "responsible-use checklist"],
    nextStep: "Move into an adoption day when the team wants workflow mapping and reusable materials.",
  },
  {
    title: "AI Adoption Day",
    level: "Map",
    buyerQuestion: "Which workflows should improve first?",
    bestWhen: "The team is ready to connect training to real workflows and decisions.",
    leaveWith: "A use-case map, starter prompt library, and adoption roadmap.",
    intensity: "Deep dive",
    ctaLabel: "Plan an adoption day",
    price: "From €3,000–€3,500",
    duration: "Full day",
    summary:
      "A deeper day combining training, use-case discovery, workflow mapping, starter prompts, and manager recommendations.",
    bestFor:
      "Organisations ready to move from experiments into a visible adoption plan.",
    inRoom: [
      "Map current AI use and repeated tasks",
      "Select priority workflows",
      "Design prompt and review patterns",
      "Agree team guidance and next actions",
    ],
    practice: ["workflow selection", "use-case mapping", "prompt library design", "manager guidance"],
    outputs: ["workshop delivery", "use-case map", "starter prompt library", "adoption roadmap"],
    nextStep: "Move into a sprint when the team needs follow-up support to make the habits stick.",
  },
  {
    title: "AI Adoption Sprint",
    level: "Support",
    buyerQuestion: "How do we make adoption stick?",
    bestWhen: "AI is already in motion and needs a practical operating rhythm.",
    leaveWith: "A workflow/prompt pack, safe-use guidance, roadmap, and follow-up support.",
    intensity: "Structured support",
    ctaLabel: "Discuss a sprint",
    price: "From €5,500; standard €7,500–€12,000 depending on scope",
    duration: "2–4 weeks",
    summary:
      "A focused sprint to map priority work, train the team, build reusable materials, and support practical adoption after the workshop.",
    bestFor:
      "Teams that need structured support beyond a single workshop, without jumping straight into fragile automation projects.",
    inRoom: [
      "Discovery and priority workflow mapping",
      "Team training and guided practice",
      "Prompt/workflow pack creation",
      "Follow-up checkpoints and blocker review",
    ],
    practice: ["adoption rhythm", "workflow refinement", "safe-use guidance", "follow-up support"],
    outputs: ["discovery", "training", "workflow/prompt pack", "safe-use guidance", "follow-up support"],
    nextStep: "Consider custom assistants or automation only when the workflow, data, and review model are clear.",
  },
] as const;

export const toolGroups = [
  {
    title: "Everyday AI assistants",
    copy: "For drafting, summarising, ideation, analysis, and structured thinking when the task is clear.",
    tools: ["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"],
  },
  {
    title: "Research and knowledge work",
    copy: "For source exploration, document understanding, meeting notes, and building better judgement around evidence.",
    tools: ["Perplexity", "NotebookLM", "Copilot", "Gemini"],
  },
  {
    title: "Creative and communication workflows",
    copy: "For marketing drafts, visuals, presentations, learning materials, and internal communication assets.",
    tools: ["Canva AI", "Adobe AI", "Midjourney", "Runway"],
  },
  {
    title: "Automation when useful",
    copy: "For repeatable workflows once the process, data, permissions, and human review points are understood.",
    tools: ["Zapier", "Make", "Custom GPTs", "Workflow agents"],
  },
] as const;

export const individualLearningTracks = [
  {
    title: "AI Essentials for Professionals",
    format: "2-hour live lab or short cohort",
    price: "From €95–€150 per seat",
    ctaLabel: "Ask about AI Essentials",
    bestFor: "Professionals who want practical AI confidence without drowning in tool noise.",
    outcome: "A working baseline across everyday AI tools, safer prompting, verification, and personal workflow design.",
    modules: ["AI basics", "tool choice", "prompting habits", "verification", "personal workflow map"],
  },
  {
    title: "AI Workflow Studio",
    format: "3-session cohort or half-day skills studio",
    price: "From €295–€450 per seat",
    ctaLabel: "Ask about Workflow Studio",
    bestFor: "Operators, marketers, job seekers, founders, and team leads who want to build repeatable AI-supported workflows.",
    outcome: "A small portfolio of workflows for research, writing, planning, analysis, presentations, or operations.",
    modules: ["research workflows", "writing systems", "spreadsheet/data help", "presentations", "automation basics"],
  },
  {
    title: "AI Workflow Clinic",
    format: "90-minute 1:1 or small-group clinic",
    price: "From €350 for an individual clinic",
    ctaLabel: "Ask about a Workflow Clinic",
    bestFor: "Professionals who want to shape a useful AI-supported workflow without jumping straight into fragile automation.",
    outcome: "A scoped workflow brief, safer build plan, prototype direction, and next-step support options.",
    modules: ["workflow scoping", "tool choice", "prototype plan", "risk review", "next steps"],
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
  "Clear enough to use.",
  "Practical enough for daily work.",
  "Safe enough for real data and decisions.",
  "Reusable after the session.",
  "Human judgement stays in the loop.",
] as const;

export const enquiryTypes = [
  "AI Team Briefing",
  "Practical AI Workshop",
  "AI Adoption Day",
  "AI Adoption Sprint",
  "Individual AI skills lab",
  "AI Essentials for Professionals",
  "AI Workflow Studio",
  "AI Workflow Clinic",
  "Training provider partnership",
  "Nonprofit/community workshop",
  "Other",
] as const;
