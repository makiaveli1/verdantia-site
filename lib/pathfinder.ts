import { enquiryTypes, offers } from "@/lib/site";

export type EnquiryType = (typeof enquiryTypes)[number];
export type TeamOfferTitle = (typeof offers)[number]["title"];

export type PathfinderStepId = "buyer" | "stage" | "tools" | "support" | "clarity" | "risk" | "format";

export type PathfinderSelections = Record<PathfinderStepId, string>;

type TeamOfferScores = Record<TeamOfferTitle, number>;

export type PathfinderOption = {
  value: string;
  label: string;
  copy: string;
  weights?: Partial<TeamOfferScores>;
  reason: string;
};

export type PathfinderStep = {
  id: PathfinderStepId;
  eyebrow: string;
  title: string;
  shortLabel: string;
  options: readonly PathfinderOption[];
};

export type PathfinderRecommendation = {
  route: "team" | "learning" | "partner";
  offer: EnquiryType;
  displayTitle: string;
  confidence: "Clear fit" | "Balanced call" | "Exploratory";
  primary: string;
  pace: string;
  focus: string;
  reasons: readonly string[];
  nextActions: readonly string[];
  cautions: readonly string[];
  secondaryOffer?: TeamOfferTitle;
  scores: TeamOfferScores;
};

export const teamOfferOrder = [
  "AI Team Briefing",
  "Practical AI Workshop",
  "AI Adoption Day",
  "AI Adoption Sprint",
] as const satisfies readonly TeamOfferTitle[];

export const pathfinderSteps = [
  {
    id: "buyer",
    eyebrow: "01",
    title: "Who are you choosing support for?",
    shortLabel: "Buyer",
    options: [
      {
        value: "team",
        label: "A team or organisation",
        copy: "We need a sensible starting point for people working together.",
        reason: "The recommendation should map to Verdantia's organisation offer ladder.",
      },
      {
        value: "provider",
        label: "Training provider",
        copy: "We need practical AI delivery support for learners, clients, or short-course programmes.",
        reason: "This is better handled as a workshop, module, or delivery-partnership conversation.",
      },
      {
        value: "community",
        label: "Community or nonprofit group",
        copy: "We need accessible AI literacy or workflow support for members, staff, or volunteers.",
        reason: "This is better handled as an accessible workshop or community support conversation.",
      },
      {
        value: "individual",
        label: "Individual professional",
        copy: "I want practical AI confidence or a repeatable personal workflow.",
        reason: "The separate learning-labs lane is a better fit than the team offer ladder.",
      },
    ],
  },
  {
    id: "stage",
    eyebrow: "02",
    title: "Where is AI use today?",
    shortLabel: "Stage",
    options: [
      {
        value: "curious",
        label: "Mostly curious",
        copy: "People have questions, but there is not much regular use yet.",
        weights: { "AI Team Briefing": 3, "Practical AI Workshop": 1 },
        reason: "The team needs shared language before bigger commitments.",
      },
      {
        value: "informal",
        label: "Informal use",
        copy: "A few people are experimenting, but habits are inconsistent.",
        weights: { "AI Team Briefing": 1, "Practical AI Workshop": 2, "AI Adoption Day": 1 },
        reason: "There is enough activity to make hands-on practice useful.",
      },
      {
        value: "inconsistent",
        label: "Regular but uneven",
        copy: "AI is useful in places, but quality varies between people or teams.",
        weights: { "Practical AI Workshop": 1, "AI Adoption Day": 2, "AI Adoption Sprint": 1 },
        reason: "The next step is to make useful habits more consistent and visible.",
      },
      {
        value: "embedded",
        label: "Already in workflows",
        copy: "AI is part of real work and now needs structure, ownership, and review.",
        weights: { "AI Adoption Day": 1, "AI Adoption Sprint": 3 },
        reason: "The work likely needs follow-up support, not another generic tool session.",
      },
    ],
  },
  {
    id: "tools",
    eyebrow: "03",
    title: "Which tools are in the picture?",
    shortLabel: "Tools",
    options: [
      {
        value: "not-sure",
        label: "Not sure yet",
        copy: "The team needs help understanding the tool landscape before choosing.",
        weights: { "AI Team Briefing": 2, "Practical AI Workshop": 1 },
        reason: "Tool choice should wait until the team understands the work and risk.",
      },
      {
        value: "everyday",
        label: "Everyday AI assistants",
        copy: "ChatGPT, Claude, Gemini, Perplexity, or similar tools are already being tried.",
        weights: { "Practical AI Workshop": 1, "AI Adoption Day": 1 },
        reason: "Everyday assistant use benefits from shared examples and verification habits.",
      },
      {
        value: "microsoft",
        label: "Microsoft 365 / Copilot",
        copy: "Copilot or Microsoft 365 workflows are a meaningful part of the question.",
        weights: { "Practical AI Workshop": 1, "AI Adoption Day": 1 },
        reason: "Microsoft 365 use needs practical workflow examples, not just feature awareness.",
      },
      {
        value: "custom",
        label: "Custom assistants or automation",
        copy: "There is interest in internal assistants, agents, automations, or knowledge tools.",
        weights: { "AI Adoption Day": 2, "AI Adoption Sprint": 1 },
        reason: "Custom builds should follow workflow, data, and review clarity.",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "04",
    title: "What kind of support would help most?",
    shortLabel: "Support",
    options: [
      {
        value: "baseline",
        label: "Shared understanding",
        copy: "Leaders or teams need plain-English context, examples, Q&A, and next-step clarity.",
        weights: { "AI Team Briefing": 4 },
        reason: "A shared baseline is the lightest useful intervention.",
      },
      {
        value: "practice",
        label: "Hands-on practice",
        copy: "People need to try prompts, compare outputs, and build safer day-to-day habits.",
        weights: { "Practical AI Workshop": 4 },
        reason: "The main gap is practical fluency and safer use.",
      },
      {
        value: "workflow",
        label: "Workflow mapping",
        copy: "The team needs to choose which repeated work should improve first.",
        weights: { "AI Adoption Day": 4, "AI Adoption Sprint": 1 },
        reason: "Workflow mapping is more useful than another broad tool demo.",
      },
      {
        value: "materials",
        label: "Reusable materials",
        copy: "Prompts, guides, checklists, templates, or team reference material would help.",
        weights: { "AI Adoption Day": 3, "AI Adoption Sprint": 1 },
        reason: "The team needs leave-behind material that makes good use easier to repeat.",
      },
      {
        value: "support",
        label: "Follow-up support",
        copy: "A one-off session is unlikely to be enough; the team needs support over time.",
        weights: { "AI Adoption Sprint": 4 },
        reason: "The need is adoption rhythm, not a single learning moment.",
      },
    ],
  },
  {
    id: "clarity",
    eyebrow: "05",
    title: "How clear are the workflows?",
    shortLabel: "Workflows",
    options: [
      {
        value: "unclear",
        label: "Not clear yet",
        copy: "The team knows AI matters, but not which work should change first.",
        weights: { "AI Team Briefing": 2, "Practical AI Workshop": 1 },
        reason: "The first job is to find a sensible starting point before over-scoping.",
      },
      {
        value: "candidates",
        label: "A few candidates",
        copy: "There are possible tasks or roles, but they need sorting and prioritising.",
        weights: { "Practical AI Workshop": 1, "AI Adoption Day": 2 },
        reason: "There is enough shape to connect practice to real work.",
      },
      {
        value: "priority",
        label: "One or two priorities",
        copy: "The team knows the workflows that should improve first.",
        weights: { "AI Adoption Day": 3, "AI Adoption Sprint": 1 },
        reason: "Priority workflows make a mapped adoption day worthwhile.",
      },
      {
        value: "several",
        label: "Several in motion",
        copy: "Multiple AI-supported workflows are already being attempted.",
        weights: { "AI Adoption Day": 1, "AI Adoption Sprint": 3 },
        reason: "Several workflows need operating rhythm, review points, and follow-up.",
      },
    ],
  },
  {
    id: "risk",
    eyebrow: "06",
    title: "What needs careful handling?",
    shortLabel: "Risk",
    options: [
      {
        value: "confidence",
        label: "Confidence and judgement",
        copy: "People need to know when AI helps, when it does not, and how to check outputs.",
        weights: { "AI Team Briefing": 1, "Practical AI Workshop": 2 },
        reason: "Confidence needs guided practice and plain examples.",
      },
      {
        value: "consistency",
        label: "Consistency between people",
        copy: "Useful output depends too much on who is using the tool.",
        weights: { "AI Adoption Day": 2, "AI Adoption Sprint": 1 },
        reason: "Consistency improves when examples, prompts, and review habits are shared.",
      },
      {
        value: "safety",
        label: "Data, privacy, or quality",
        copy: "The team needs stronger boundaries around information, accuracy, and review.",
        weights: { "AI Team Briefing": 1, "Practical AI Workshop": 1, "AI Adoption Day": 2 },
        reason: "Safety needs explicit boundaries before teams scale usage.",
      },
      {
        value: "governance",
        label: "Governance and review",
        copy: "AI-supported work needs ownership, review points, and decision rules.",
        weights: { "AI Adoption Day": 1, "AI Adoption Sprint": 2 },
        reason: "Governance questions usually need support beyond a broad introduction.",
      },
    ],
  },
  {
    id: "format",
    eyebrow: "07",
    title: "What format is realistic now?",
    shortLabel: "Format",
    options: [
      {
        value: "briefing",
        label: "60–90 minutes",
        copy: "A focused briefing is the realistic first step.",
        weights: { "AI Team Briefing": 3 },
        reason: "The current appetite is for a short, low-friction start.",
      },
      {
        value: "half-day",
        label: "Half day",
        copy: "There is time for hands-on practice and examples.",
        weights: { "Practical AI Workshop": 3 },
        reason: "A half-day format supports real practice without over-scoping.",
      },
      {
        value: "full-day",
        label: "Full day",
        copy: "There is time to combine training, mapping, and practical materials.",
        weights: { "AI Adoption Day": 3 },
        reason: "A full day can produce a useful map and starter materials.",
      },
      {
        value: "sprint",
        label: "2–4 weeks",
        copy: "The team can support a structured adoption sprint with follow-up.",
        weights: { "AI Adoption Sprint": 4 },
        reason: "A sprint only makes sense when there is appetite for follow-through.",
      },
      {
        value: "not-sure",
        label: "Not sure",
        copy: "The first conversation should recommend the lightest useful commitment.",
        reason: "When in doubt, Verdantia should avoid over-selling the first step.",
      },
    ],
  },
] as const satisfies readonly PathfinderStep[];

export const defaultPathfinderSelections: PathfinderSelections = {
  buyer: "team",
  stage: "informal",
  tools: "everyday",
  support: "workflow",
  clarity: "candidates",
  risk: "consistency",
  format: "not-sure",
};

export function findPathfinderOption(stepId: PathfinderStepId, value: string): PathfinderOption | undefined {
  return (pathfinderSteps as readonly PathfinderStep[])
    .find((step) => step.id === stepId)
    ?.options.find((option) => option.value === value);
}

export function findPathfinderLabel(stepId: PathfinderStepId, value: string) {
  return findPathfinderOption(stepId, value)?.label ?? value;
}

function createEmptyScores(): TeamOfferScores {
  return {
    "AI Team Briefing": 0,
    "Practical AI Workshop": 0,
    "AI Adoption Day": 0,
    "AI Adoption Sprint": 0,
  };
}

function scoreSelections(selections: PathfinderSelections): TeamOfferScores {
  const scores = createEmptyScores();

  (pathfinderSteps as readonly PathfinderStep[]).forEach((step) => {
    const option = findPathfinderOption(step.id, selections[step.id]);
    if (!option?.weights) return;

    teamOfferOrder.forEach((offer) => {
      scores[offer] += option.weights?.[offer] ?? 0;
    });
  });

  return scores;
}

function rankedOffers(scores: TeamOfferScores) {
  return [...teamOfferOrder].sort((a, b) => scores[b] - scores[a] || teamOfferOrder.indexOf(a) - teamOfferOrder.indexOf(b));
}

function confidenceFromScores(scores: TeamOfferScores) {
  const [first, second] = rankedOffers(scores);
  const spread = scores[first] - scores[second];

  if (scores[first] <= 4 || spread <= 1) return "Exploratory" as const;
  if (spread <= 3) return "Balanced call" as const;
  return "Clear fit" as const;
}

function compactReasons(selections: PathfinderSelections) {
  const preferredOrder: PathfinderStepId[] = ["support", "clarity", "risk", "stage", "tools", "format"];

  return preferredOrder
    .map((stepId) => findPathfinderOption(stepId, selections[stepId])?.reason)
    .filter((reason): reason is string => Boolean(reason))
    .slice(0, 3);
}

function teamCopy(offer: TeamOfferTitle, selections: PathfinderSelections) {
  const customToolInterest = selections.tools === "custom";
  const lowWorkflowClarity = selections.clarity === "unclear" || selections.clarity === "candidates";
  const riskNeedsBoundaries = selections.risk === "safety" || selections.risk === "governance";

  const cautions = [
    customToolInterest && lowWorkflowClarity
      ? "Do not jump straight to custom assistants or automation; first make the workflow, data, and review model visible."
      : null,
    riskNeedsBoundaries
      ? "Bring examples of the data, quality, privacy, or review concerns that would make adoption risky."
      : null,
  ].filter((item): item is string => Boolean(item));

  switch (offer) {
    case "AI Team Briefing":
      return {
        primary: "Start with a practical team briefing.",
        pace:
          "Your answers suggest the team needs shared language and a clearer baseline before choosing bigger support.",
        focus:
          "Use the first session to clarify the tool landscape, surface sensible use cases, discuss risk, and choose the next step without over-scoping.",
        nextActions: [
          "Gather the questions leaders and team members are already asking about AI.",
          "Bring one or two examples of work where AI might help, even if they are rough.",
          "Use the briefing to decide whether practice, workflow mapping, or support should come next.",
        ],
        cautions,
      };
    case "Practical AI Workshop":
      return {
        primary: "Start with a hands-on practical AI workshop.",
        pace:
          "Your team appears ready for guided practice, safer prompting habits, and examples they can use immediately.",
        focus:
          "A half-day workshop can build confidence across everyday tools while keeping responsible use, verification, and real work examples in the room.",
        nextActions: [
          "Choose a few familiar tasks people can practise with during the workshop.",
          "Agree the tools people are allowed or expected to use.",
          "Capture useful prompts and review habits as reusable team material.",
        ],
        cautions,
      };
    case "AI Adoption Day":
      return {
        primary: "Start with an AI adoption day.",
        pace:
          "Your answers point to workflow clarity as the main need, not just tool awareness.",
        focus:
          "A full day can combine practical training with use-case discovery, priority workflow mapping, starter prompts, and a realistic adoption roadmap.",
        nextActions: [
          "List the repeated workflows that consume time or create quality issues.",
          "Invite the people who understand the work, not only the people excited by AI.",
          "Leave with a small set of prompts, review habits, and next-step recommendations.",
        ],
        cautions,
      };
    case "AI Adoption Sprint":
      return {
        primary: "Start with an AI adoption sprint.",
        pace:
          "AI is already in motion and the team likely needs more than a one-off session to make the habits stick.",
        focus:
          "A sprint gives time to map priority work, train the team, build reusable prompt/workflow materials, define safer-use guidance, and review blockers after initial use.",
        nextActions: [
          "Choose an internal owner who can help keep the sprint practical.",
          "Select the workflows where better AI use would matter quickly.",
          "Expect checkpoints, not a one-and-done workshop dump.",
        ],
        cautions,
      };
  }
}

function learningRecommendation(selections: PathfinderSelections): PathfinderRecommendation {
  const scores = createEmptyScores();
  const clinicFit = selections.support === "workflow" || selections.tools === "custom" || selections.clarity === "priority";
  const studioFit = selections.support === "materials" || selections.format === "full-day" || selections.clarity === "several";
  const offer: EnquiryType = clinicFit
    ? "AI Workflow Clinic"
    : studioFit
      ? "AI Workflow Studio"
      : "AI Essentials for Professionals";

  return {
    route: "learning",
    offer,
    displayTitle: offer,
    confidence: clinicFit || studioFit ? "Balanced call" : "Exploratory",
    primary: "Use the professional learning-labs route.",
    pace:
      "Your answers are about individual skill-building rather than an organisation-wide team engagement.",
    focus:
      "The learning-labs lane is a better fit for personal AI fluency, safer prompting habits, and repeatable workflows.",
    reasons: [
      findPathfinderOption("buyer", selections.buyer)?.reason ?? "The individual route fits this context.",
      findPathfinderOption("support", selections.support)?.reason ?? "The support need is practical and personal.",
      findPathfinderOption("risk", selections.risk)?.reason ?? "The work still needs safe-use habits.",
    ],
    nextActions: [
      "Review the learning labs and choose the level of structure you want.",
      "Bring one workflow you want to improve, such as research, writing, planning, analysis, or presentations.",
      "Use the contact form if you want help choosing between Essentials, Studio, or a Clinic.",
    ],
    cautions: ["This result is not a team adoption plan; it is a professional-development route."],
    scores,
  };
}

function partnerRecommendation(selections: PathfinderSelections): PathfinderRecommendation {
  const scores = createEmptyScores();
  const isCommunity = selections.buyer === "community";

  return {
    route: "partner",
    offer: isCommunity ? "Nonprofit/community workshop" : "Training provider partnership",
    displayTitle: isCommunity ? "Community workshop conversation" : "Training provider partnership conversation",
    confidence: "Balanced call",
    primary: "Start with a delivery-partnership conversation.",
    pace:
      "Your context sounds less like a standard internal team engagement and more like practical AI delivery for learners, clients, or a community group.",
    focus:
      "Verdantia can shape a workshop, specialist module, accessible AI literacy session, or delivery-support route around the audience and constraints.",
    reasons: [
      findPathfinderOption("buyer", selections.buyer)?.reason ?? "This is a partner or community route.",
      findPathfinderOption("support", selections.support)?.reason ?? "The support need should shape the delivery format.",
      findPathfinderOption("format", selections.format)?.reason ?? "The format should match the group's capacity.",
    ],
    nextActions: [
      "Share the audience, group size, delivery format, and expected skill level.",
      "Name the practical outcomes learners or participants should leave with.",
      "Discuss whether Verdantia should deliver a module, workshop, or custom session.",
    ],
    cautions: ["Keep the brief focused on the audience's actual work, not a generic AI awareness session."],
    scores,
  };
}

export function buildPathfinderRecommendation(selections: PathfinderSelections): PathfinderRecommendation {
  if (selections.buyer === "individual") return learningRecommendation(selections);
  if (selections.buyer === "provider" || selections.buyer === "community") return partnerRecommendation(selections);

  const scores = scoreSelections(selections);
  const [offer, second] = rankedOffers(scores);
  const copy = teamCopy(offer, selections);
  const secondaryOffer = scores[offer] - scores[second] <= 2 ? second : undefined;

  return {
    route: "team",
    offer,
    displayTitle: offer,
    confidence: confidenceFromScores(scores),
    primary: copy.primary,
    pace: copy.pace,
    focus: copy.focus,
    reasons: compactReasons(selections),
    nextActions: copy.nextActions,
    cautions: copy.cautions,
    secondaryOffer,
    scores,
  };
}

export function buildPathfinderBrief(selections: PathfinderSelections, recommendation: PathfinderRecommendation) {
  const lines = [
    "AI Pathfinder brief:",
    "",
    `Suggested starting point: ${recommendation.displayTitle}`,
    recommendation.secondaryOffer ? `Secondary option to discuss: ${recommendation.secondaryOffer}` : null,
    `Fit confidence: ${recommendation.confidence}`,
    "",
    "Selections:",
    `- Buying context: ${findPathfinderLabel("buyer", selections.buyer)}`,
    `- Current AI stage: ${findPathfinderLabel("stage", selections.stage)}`,
    `- Tools in the picture: ${findPathfinderLabel("tools", selections.tools)}`,
    `- Support needed: ${findPathfinderLabel("support", selections.support)}`,
    `- Workflow clarity: ${findPathfinderLabel("clarity", selections.clarity)}`,
    `- Careful handling: ${findPathfinderLabel("risk", selections.risk)}`,
    `- Realistic format: ${findPathfinderLabel("format", selections.format)}`,
    "",
    "Why this fits:",
    ...recommendation.reasons.map((reason) => `- ${reason}`),
    "",
    "Useful first conversation:",
    ...recommendation.nextActions.slice(0, 3).map((action) => `- ${action}`),
    recommendation.cautions.length ? "" : null,
    recommendation.cautions.length ? "Important caution:" : null,
    ...recommendation.cautions.map((caution) => `- ${caution}`),
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}

export function buildPathfinderContactHref(recommendation: PathfinderRecommendation, brief: string) {
  const params = new URLSearchParams({
    enquiryType: recommendation.offer,
    message: brief,
  });

  return `/contact?${params.toString()}`;
}
