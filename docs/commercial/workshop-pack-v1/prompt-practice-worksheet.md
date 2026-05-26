# Prompt practice worksheet

[DRAFT — PARTICIPANT HANDOUT]

## The prompt ladder

Most weak prompts fail because they skip context, constraints, and review criteria.

Use the ladder:

1. **Task** — what do you want done?
2. **Audience** — who is it for?
3. **Context** — what does the AI need to know?
4. **Constraints** — what must it avoid?
5. **Examples** — what does good or bad look like?
6. **Output format** — what shape should the answer take?
7. **Review** — what should be checked before use?

## Exercise 1 — rewrite a vague prompt

### Starting prompt

```txt
Summarise this document.
```

### Better version

```txt
Summarise the document below for a busy operations manager.

Focus on:
- decisions required
- risks or blockers
- deadlines
- owner/action items

Do not invent missing dates, owners, or numbers. If the document is unclear, list questions to confirm.

Output format:
- 5-bullet executive summary
- table of action items
- list of assumptions or gaps
```

### Your version

```txt

```

## Exercise 2 — ask for alternatives, not one answer

AI can sound too confident. Ask it to show options and trade-offs.

```txt
Give me three possible approaches to [task/problem].
For each one, include:
- when it is useful
- risks
- effort level
- what to verify before choosing it
Then recommend the safest first step.
```

Use it for your work:

```txt

```

## Exercise 3 — turn output into a reusable workflow

```txt
Based on the process below, turn this into a repeatable checklist.

Audience: [team/person]
Goal: [what the checklist helps them do]
Constraints: keep it practical, plain-English, and suitable for our team.

Output format:
- checklist
- common mistakes
- quality check before completion
```

Your workflow prompt:

```txt

```

## Exercise 4 — source and verification prompt

For factual or decision-support work:

```txt
Review the answer below.
Identify:
- claims that need verification
- possible missing context
- assumptions
- risks if this is wrong
- questions a human should answer before acting

Do not make new claims unless you label them as assumptions.
```

Your version:

```txt

```

## Prompt quality checklist

Before you press enter:

- [ ] Have I explained the task clearly?
- [ ] Have I given enough context?
- [ ] Have I removed sensitive data?
- [ ] Have I said what format I want?
- [ ] Have I told it what not to do?
- [ ] Have I asked it to flag assumptions or risks?
- [ ] Do I know how I will review the output?
