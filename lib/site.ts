export const siteUrl = "https://verdantia.it";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Offers", href: "/offers" },
  { label: "Learning", href: "/learning" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const contactEmail = "oluwagbemi@verdantia.it";


export const enquiryTypes = [
  "AI Team Briefing",
  "Practical AI Workshop",
  "AI Adoption Day",
  "AI Adoption Sprint",
  "AI Video Creation & Social Ads",
  "Individual AI skills lab",
  "AI Essentials for Professionals",
  "AI Workflow Studio",
  "AI Workflow Clinic",
  "Training provider partnership",
  "Nonprofit/community workshop",
  "Other",
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

type OfferDetail = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    title: string;
    body: string;
    meta: readonly string[];
    asset: string;
    alt: string;
  };
  signals: readonly string[];
  flow: readonly { title: string; copy: string }[];
  workExamples?: readonly string[];
  deliverables: readonly { title: string; copy: string }[];
  fit: readonly string[];
  notFit: readonly string[];
  format: {
    title: string;
    copy: string;
    steps?: readonly string[];
  };
  faqs: readonly { question: string; answer: string }[];
  related: readonly string[];
};

export type TeamOffer = {
  slug: string;
  path: `/offers/${string}`;
  href: `/offers/${string}`;
  contactHref: string;
  enquiryType: EnquiryType;
  title: string;
  shortTitle: string;
  level: string;
  buyerQuestion: string;
  bestWhen: string;
  leaveWith: string;
  intensity: string;
  ctaLabel: string;
  price: string;
  priceDisplay: string;
  priceDetail: string;
  duration: string;
  summary: string;
  bestFor: string;
  inRoom: readonly string[];
  practice: readonly string[];
  outputs: readonly string[];
  nextStep: string;
  detail: OfferDetail;
};

export function buildContactHref(enquiryType: EnquiryType) {
  return `/contact?enquiryType=${encodeURIComponent(enquiryType)}`;
}

export const offers = [
  {
    slug: "ai-team-briefing",
    path: "/offers/ai-team-briefing",
    href: "/offers/ai-team-briefing",
    enquiryType: "AI Team Briefing",
    contactHref: buildContactHref("AI Team Briefing"),
    title: "AI Team Briefing",
    shortTitle: "Briefing",
    level: "Baseline",
    buyerQuestion: "Where should we start?",
    bestWhen: "You need shared language before picking tools or changing process.",
    leaveWith: "A practical AI baseline and recommended next step.",
    intensity: "Light",
    ctaLabel: "View briefing details",
    price: "From €750 remote / from €950 onsite",
    priceDisplay: "From €750",
    priceDetail: "Remote. Onsite from €950.",
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
    detail: {
      seo: {
        title: "AI Team Briefing for Practical AI Alignment | Verdantia",
        description:
          "A 60–90 minute Verdantia briefing that gives leaders and teams shared AI language, practical examples, risk discussion, Q&A, and a clear next step.",
      },
      hero: {
        kicker: "AI Team Briefing",
        title: "Build shared AI language before changing the work.",
        body:
          "A 60–90 minute session to align leaders and teams on practical AI uses, risks, tool judgement, and the sensible next step.",
        meta: ["60–90 minutes", "From €750", "Remote or onsite", "Baseline + Q&A"],
        asset: "/assets/verdantia-offer-team-briefing-hero.webp",
        alt: "Editorial briefing table with blank paper cards, evergreen accents, and route markers.",
      },
      signals: [
        "Leaders are curious but unsure where AI fits.",
        "People are asking what is safe to use.",
        "AI is politically or operationally sensitive.",
        "The team needs shared language before practice.",
      ],
      flow: [
        { title: "Set a plain-English baseline", copy: "Clarify what current AI tools can and cannot help with." },
        { title: "Match examples to the work", copy: "Discuss sensible use cases through the team's real context." },
        { title: "Discuss risk and review", copy: "Surface privacy, quality, and judgement questions early." },
        { title: "Choose the next step", copy: "Decide whether to practise, map workflows, run a sprint, or pause." },
      ],
      deliverables: [
        { title: "Practical AI baseline note", copy: "A concise shared reference for the team's starting point." },
        { title: "Tool and risk overview", copy: "Plain-language boundaries for sensible early use." },
        { title: "Q&A capture", copy: "The questions, concerns, and next-step themes raised in the session." },
        { title: "Recommended route", copy: "A proportionate recommendation for the next Verdantia offer or no next offer yet." },
      ],
      fit: ["Alignment is needed before practice.", "Leaders need a low-friction way to start."],
      notFit: ["The team already needs hands-on practice now; use the Practical AI Workshop instead."],
      format: {
        title: "Remote or onsite briefing",
        copy: "From €750 remote / from €950 onsite, shaped around team questions and examples.",
      },
      faqs: [
        {
          question: "Is this a technical workshop?",
          answer: "No. It is a practical alignment session for leaders or teams who need shared language before deeper work.",
        },
        {
          question: "What happens after the briefing?",
          answer: "Verdantia recommends the lightest useful next step: workshop, adoption day, sprint, or no further support yet.",
        },
      ],
      related: ["Practical AI Workshop"],
    },
  },
  {
    slug: "practical-ai-workshop",
    path: "/offers/practical-ai-workshop",
    href: "/offers/practical-ai-workshop",
    enquiryType: "Practical AI Workshop",
    contactHref: buildContactHref("Practical AI Workshop"),
    title: "Practical AI Workshop",
    shortTitle: "Workshop",
    level: "Practice",
    buyerQuestion: "How should the team use AI safely?",
    bestWhen: "People need hands-on practice, examples, and safer prompting habits.",
    leaveWith: "Role-based practice, safer prompt habits, and a responsible-use checklist.",
    intensity: "Hands-on",
    ctaLabel: "View workshop details",
    price: "From €1,750 remote / from €2,250 onsite or customised",
    priceDisplay: "From €1,750",
    priceDetail: "Remote. Onsite or custom from €2,250.",
    duration: "Half day",
    summary:
      "A half-day session where teams practise safer prompting, compare AI outputs, review privacy and quality risks, and capture practical use cases with tools such as ChatGPT, Claude, Gemini, Microsoft Copilot, and Perplexity.",
    bestFor:
      "Teams already using AI informally for drafts, summaries, research, or planning who need shared habits, review rules, and examples they can use immediately.",
    inRoom: [
      "Build a shared AI baseline with approved and everyday tools",
      "Turn weak prompts into clearer work-ready prompts",
      "Review outputs for accuracy, tone, privacy, and source quality",
      "Capture 3–5 realistic use cases for next-step planning",
    ],
    practice: ["safer prompting", "role-based examples", "output verification", "responsible-use decisions"],
    outputs: ["tool literacy", "prompt examples", "role-based exercises", "responsible-use checklist"],
    nextStep: "Move into an adoption day when the team wants workflow mapping and reusable materials.",
    detail: {
      seo: {
        title: "Practical AI Workshop for Teams | Verdantia",
        description:
          "A half-day Verdantia workshop for teams to practise safer prompting, compare outputs, review risks, and leave with practical AI materials.",
      },
      hero: {
        kicker: "Flagship team workshop",
        title: "Turn informal AI use into shared team practice.",
        body:
          "A half-day workshop for teams already using AI informally and needing shared prompting, review habits, safer practice, and practical materials.",
        meta: ["Half day", "From €1,750", "Remote or onsite", "Leave-behind materials"],
        asset: "/assets/verdantia-workshop-field-guide.webp",
        alt: "Editorial field-guide workshop materials with paper cards and folders.",
      },
      signals: [
        "AI use is already happening informally.",
        "Prompting habits vary across the team.",
        "People need practical examples rather than another tool tour.",
        "Privacy, accuracy, and quality review need clearer boundaries.",
      ],
      flow: [
        { title: "Baseline", copy: "Set shared language around tools, risks, and good-use boundaries." },
        { title: "Prompt practice", copy: "Rewrite weak prompts against realistic team tasks." },
        { title: "Output review", copy: "Check AI responses for accuracy, tone, privacy, sources, and usefulness." },
        { title: "Use-case capture", copy: "Turn the session into practical next-step material." },
      ],
      workExamples: ["drafting", "summarising", "research", "planning", "internal communication"],
      deliverables: [
        { title: "Tool literacy", copy: "A grounded view of where everyday AI assistants help." },
        { title: "Prompt examples", copy: "Reusable examples shaped around the team's work." },
        { title: "Role-based exercises", copy: "Practice material that makes the workshop concrete." },
        { title: "Responsible-use checklist", copy: "A practical review aid for safer everyday use." },
      ],
      fit: ["The team is ready for hands-on practice.", "People need shared prompting and review habits."],
      notFit: ["Leadership alignment is missing; start with an AI Team Briefing.", "Priority workflows are already visible; consider an AI Adoption Day."],
      format: {
        title: "Half-day practical workshop",
        copy: "From €1,750 remote / from €2,250 onsite or customised, using team-relevant examples and exercises.",
      },
      faqs: [
        {
          question: "Is this only for technical teams?",
          answer: "No. It is designed for practical workplace teams using everyday AI tools for real tasks.",
        },
        {
          question: "Do we need approved AI tools already?",
          answer: "No. The workshop can include tool judgement and boundaries, but it is strongest when the team has some allowed tools or examples in view.",
        },
      ],
      related: ["AI Team Briefing", "AI Adoption Day"],
    },
  },
  {
    slug: "ai-adoption-day",
    path: "/offers/ai-adoption-day",
    href: "/offers/ai-adoption-day",
    enquiryType: "AI Adoption Day",
    contactHref: buildContactHref("AI Adoption Day"),
    title: "AI Adoption Day",
    shortTitle: "Adoption Day",
    level: "Map",
    buyerQuestion: "Which workflows should improve first?",
    bestWhen: "The team is ready to connect training to real workflows and decisions.",
    leaveWith: "A use-case map, starter prompt library, and adoption roadmap.",
    intensity: "Deep dive",
    ctaLabel: "View adoption day details",
    price: "From €3,000–€3,500",
    priceDisplay: "From €3,000",
    priceDetail: "Typical range €3,000–€3,500.",
    duration: "Full day",
    summary:
      "A full-day working session to choose priority workflows — reporting, meeting follow-ups, customer research, training materials, or internal communications — then map where AI helps, where people review, and what reusable guidance the team needs.",
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
    detail: {
      seo: {
        title: "AI Adoption Day for Workflow Mapping | Verdantia",
        description:
          "A full-day Verdantia working session to map priority workflows, review points, prompt patterns, and a practical AI adoption roadmap.",
      },
      hero: {
        kicker: "AI Adoption Day",
        title: "Map where AI actually belongs in the work.",
        body:
          "A full-day working session for teams ready to connect AI training to real workflows, review points, prompt patterns, and a practical adoption roadmap.",
        meta: ["Full day", "From €3,000", "Workflow mapping", "Roadmap output"],
        asset: "/assets/verdantia-offer-adoption-day-map.webp",
        alt: "Editorial workflow mapping table with blank process cards connected by gold thread.",
      },
      signals: [
        "The team has moved past curiosity.",
        "AI use exists but priority workflows are unclear.",
        "Managers need review points and ownership.",
        "Prompt examples need to become shared guidance.",
      ],
      flow: [
        { title: "Discover repeated work", copy: "List current AI use, repeated tasks, blockers, and useful candidate workflows." },
        { title: "Choose priorities", copy: "Select the workflows where better AI use would matter first." },
        { title: "Design review patterns", copy: "Map AI roles, human review points, risk levels, and ownership." },
        { title: "Build the roadmap", copy: "Leave with starter prompts, guidance, and next-step recommendations." },
      ],
      workExamples: ["reporting", "meeting follow-ups", "customer research", "training materials", "internal communications", "proposals"],
      deliverables: [
        { title: "Use-case map", copy: "A visible map of where AI belongs and where it does not." },
        { title: "Starter prompt library", copy: "Early reusable prompts tied to selected workflows." },
        { title: "Workflow/review notes", copy: "Human review points, risk levels, and ownership notes." },
        { title: "Adoption roadmap", copy: "A practical route for what happens after the day." },
      ],
      fit: ["The team is ready to map real workflows.", "Managers need clarity around review and ownership."],
      notFit: ["The team still needs basic AI practice; start with the Practical AI Workshop."],
      format: {
        title: "Full-day workflow mapping session",
        copy: "From €3,000–€3,500, combining training, workflow mapping, guidance, and next-step planning.",
      },
      faqs: [
        {
          question: "Is this just a longer workshop?",
          answer: "No. It includes practical AI work, but the main output is a workflow map and adoption roadmap.",
        },
        {
          question: "Who should attend?",
          answer: "Include the people who understand the work, the risks, and the decisions — not only the people most excited by AI.",
        },
      ],
      related: ["Practical AI Workshop", "AI Adoption Sprint"],
    },
  },
  {
    slug: "ai-adoption-sprint",
    path: "/offers/ai-adoption-sprint",
    href: "/offers/ai-adoption-sprint",
    enquiryType: "AI Adoption Sprint",
    contactHref: buildContactHref("AI Adoption Sprint"),
    title: "AI Adoption Sprint",
    shortTitle: "Adoption Sprint",
    level: "Support",
    buyerQuestion: "How do we make adoption stick?",
    bestWhen: "AI is already in motion and needs a practical operating rhythm.",
    leaveWith: "A workflow/prompt pack, safe-use guidance, roadmap, and follow-up support.",
    intensity: "Structured support",
    ctaLabel: "View sprint details",
    price: "From €5,500; standard €7,500–€12,000 depending on scope",
    priceDisplay: "From €5,500",
    priceDetail: "Standard scope €7,500–€12,000.",
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
    detail: {
      seo: {
        title: "AI Adoption Sprint for Practical Team Support | Verdantia",
        description:
          "A 2–4 week Verdantia sprint to build AI workflow materials, safe-use guidance, adoption rhythm, and follow-up support for teams.",
      },
      hero: {
        kicker: "AI Adoption Sprint",
        title: "Make practical AI habits stick after the session.",
        body:
          "Structured 2–4 week support for teams with enough workflow clarity who need materials, rhythm, follow-up, and blocker review.",
        meta: ["2–4 weeks", "From €5,500", "Structured support", "Workflow/prompt pack"],
        asset: "/assets/verdantia-offer-adoption-sprint-rhythm.webp",
        alt: "Editorial sprint workspace with four blank week cards connected by gold thread.",
      },
      signals: [
        "A one-off session is not enough.",
        "Several AI-supported workflows are already in motion.",
        "People need reusable materials and follow-up support.",
        "The team needs a practical operating rhythm before automation.",
      ],
      flow: [
        { title: "Scope priority workflows", copy: "Choose a tight sprint scope around work that matters now." },
        { title: "Train and practise", copy: "Support the team with targeted practice and review habits." },
        { title: "Build reusable material", copy: "Create prompts, workflow notes, guidance, and support material." },
        { title: "Review blockers", copy: "Use checkpoints to resolve practical adoption friction." },
      ],
      deliverables: [
        { title: "Workflow/prompt pack", copy: "Reusable material tied to priority workflows." },
        { title: "Safe-use guidance", copy: "Practical boundaries for quality, privacy, and review." },
        { title: "Adoption roadmap", copy: "A next-step route after the sprint ends." },
        { title: "Follow-up support", copy: "Checkpoints to keep the work grounded." },
      ],
      fit: ["The team needs structured follow-through.", "Priority workflows are visible enough to support over several weeks."],
      notFit: ["The team only needs a first shared baseline; start with a briefing or workshop."],
      format: {
        title: "Scoped 2–4 week support",
        copy: "From €5,500 for a tightly scoped starter sprint; standard €7,500–€12,000 depending on scope.",
        steps: ["Discovery", "Training", "Material build", "Checkpoint support"],
      },
      faqs: [
        {
          question: "Is this automation delivery?",
          answer: "Not by default. Automation or custom assistants come later when the workflow, data, permissions, and review model are clear.",
        },
        {
          question: "How scoped should the sprint be?",
          answer: "Tightly scoped. The sprint should focus on the smallest set of workflows where better AI use can become repeatable.",
        },
      ],
      related: ["AI Adoption Day"],
    },
  },
] as const satisfies readonly TeamOffer[];

export const videoAdOffer = {
  slug: "ai-video-social-ads",
  path: "/offers/ai-video-social-ads",
  href: "/offers/ai-video-social-ads",
  enquiryType: "AI Video Creation & Social Ads",
  contactHref: buildContactHref("AI Video Creation & Social Ads"),
  title: "AI Video Creation & Social Ads",
  shortTitle: "Video Ads",
  level: "Creative studio",
  buyerQuestion: "Can you shape sharper video ad concepts?",
  bestWhen: "You need campaign angles, hooks, scripts, captions, or storyboard direction before production or launch.",
  leaveWith: "Campaign angles, hooks, scripts, caption variants, storyboard prompts, and landing-page alignment notes.",
  intensity: "Creative direction",
  ctaLabel: "View video ad details",
  price: "Priced after brief",
  priceDisplay: "Priced after brief",
  priceDetail: "Project-based scope agreed after the creative brief.",
  duration: "Project-based",
  summary:
    "Creative direction support for short-form video ad concepts, scripts, captions, storyboard prompts, and message alignment.",
  bestFor:
    "Marketing or launch teams that need sharper short-form concepts before production, not full media buying or guaranteed ad performance.",
  inRoom: [
    "Campaign angle mapping",
    "Hook and script directions",
    "Caption variants",
    "Storyboard or prompt direction",
    "Landing-page message alignment",
  ],
  practice: ["campaign angles", "hook families", "short-form scripts", "caption variants", "message match"],
  outputs: ["video angles", "hooks/scripts", "captions", "storyboard prompts", "landing-page alignment"],
  nextStep: "Move into production or media buying with a clearer creative brief and message route.",
  detail: {
    seo: {
      title: "AI Video and Social Ad Concept Support | Verdantia",
      description:
        "Project-based support for short-form video ad angles, hooks, scripts, captions, storyboard prompts, and landing-page alignment.",
    },
    hero: {
      kicker: "Creative studio",
      title: "Shape sharper short-form video ad concepts.",
      body:
        "Help with campaign angles, hooks, scripts, captions, storyboard direction, and landing-page alignment before production or launch.",
      meta: ["Project-based", "Priced after brief", "Hooks/scripts", "Storyboard prompts"],
      asset: "/assets/verdantia-offer-video-social-ads-storyboard.webp",
      alt: "Editorial storyboard workbench with blank frame cards, gold thread, and evergreen materials.",
    },
    signals: [
      "You need clearer campaign angles.",
      "You have an offer but weak hooks or scripts.",
      "You want short-form variants for social channels.",
      "Your landing page and ad message need alignment.",
    ],
    flow: [
      { title: "Brief review", copy: "Clarify audience, offer, channel, source material, proof, constraints, and CTA." },
      { title: "Campaign angle map", copy: "Shape the strongest creative routes for the offer and audience." },
      { title: "Hook and script directions", copy: "Develop hook families, script structures, and caption variants." },
      { title: "Storyboard direction", copy: "Prepare storyboard or prompt direction for production planning." },
      { title: "Landing-page alignment", copy: "Check that the ad message and page promise support each other." },
    ],
    workExamples: ["campaign angles", "hook families", "short-form scripts", "caption variants", "storyboard prompts", "landing-page message alignment"],
    deliverables: [
      { title: "Video angles", copy: "Campaign angles matched to the audience, offer, and channel." },
      { title: "Hooks and scripts", copy: "Short-form hook ideas and script directions ready for production planning." },
      { title: "Caption variants", copy: "Caption options that support the creative angle and CTA." },
      { title: "Storyboard prompts", copy: "Storyboard or visual direction prompts for the next production step." },
      { title: "Landing-page notes", copy: "Practical notes on message match between ad concept and landing page." },
    ],
    fit: [
      "You need concept and script support before launch.",
      "You can provide offer, audience, source material, and constraints.",
      "You want multiple creative routes to test or produce.",
      "You need the ad promise and landing page to line up.",
    ],
    notFit: [
      "You need full video production or shooting.",
      "You need paid-media management.",
      "You want guaranteed ad performance.",
      "You need AI adoption training for your team.",
    ],
    format: {
      title: "Project-based creative direction support",
      copy:
        "Scope is priced after a brief because the work depends on offer complexity, number of variants, source material, and production needs.",
      steps: [
        "Submit the creative brief.",
        "Clarify audience, offer, channel, proof, and CTA.",
        "Develop angles, hooks, scripts, and captions.",
        "Add storyboard direction and landing-page alignment notes.",
      ],
    },
    faqs: [
      {
        question: "Does Verdantia produce the final video?",
        answer:
          "This offer focuses on concepts, hooks, scripts, captions, storyboard direction, and message alignment. Full production is outside the core scope unless agreed separately.",
      },
      {
        question: "Do you manage paid ads?",
        answer: "No. This is creative direction and concept support, not media buying or campaign management.",
      },
      {
        question: "What do you need in the brief?",
        answer:
          "Useful inputs include audience, offer, platform or channel, landing page, source material, proof points, tone constraints, and CTA.",
      },
    ],
    related: [],
  },
} as const satisfies TeamOffer;

export const offerPages: readonly TeamOffer[] = [...offers, videoAdOffer];

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
