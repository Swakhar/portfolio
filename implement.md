# Implement Workflow

**Purpose:** Read a job's spec files and apply targeted changes to the portfolio source so the resume is tailored for that specific role.

---

## When to run
The user says something like:
- "implement [company-slug]-[job-slug]"
- "implement the spec for Shopify"
- "run implement on job-specs/rubyonremote-senior-rails-engineer/"

---

## Pre-flight checks

Before making any changes:

1. Read `job-specs/[folder]/specification.md` — understand what the role requires
2. Read `job-specs/[folder]/plan.md` — understand what needs to change
3. Read `job-specs/[folder]/tasks.md` — get the ordered task list
4. Read `src/data/resume-data.ts` — know the current state
5. Confirm all `tasks.md` tasks are still `[ ] pending` — if some are already done, skip them

If any spec file is missing or incomplete, stop and ask the user to run `kickoff` first.

---

## Steps

### Step 1 — Execute tasks in order

Work through `tasks.md` top to bottom. For each task:
- Mark it `[~]` in-progress before starting
- Apply the change to the relevant source file
- Mark it `[x]` done immediately after
- Never batch completions — mark done one at a time

**Only touch these files during implement:**
- `src/data/resume-data.ts` — all content changes go here
- Nothing else — components read from the data file automatically

---

### Step 2 — What each change type looks like

#### Updating `professionalSummary`
- Rewrite to open with the exact job title from the spec
- Weave in the top 5 required keywords naturally (do not keyword-stuff)
- Keep to 3–5 sentences max
- Mention years of experience explicitly
- End with a value statement matching the company's domain

#### Rewriting experience bullets
- Lead with the action verb that matches the JD's language
  - JD says "own" → use "Owned"
  - JD says "architect" → use "Architected"
  - JD says "collaborate" → use "Collaborated"
- Insert or strengthen quantified outcomes (%, time saved, scale)
- If a JD requirement maps to existing work, make that connection explicit in the bullet
- Reorder bullets so the most JD-relevant ones come first

#### Adding / reordering skills
- If a required skill exists in data but has a low `level`, consider bumping it
- If a preferred skill is genuinely held but missing, add it to the right category
- Never fabricate a skill that isn't real
- Reorder `skills[]` within a category so the most JD-relevant appear first (they render first on the PDF)

#### Updating project descriptions
- Highlight the aspect of the project most relevant to the JD
- Mention measurable outcomes if possible
- Keep descriptions concise — 2–4 sentences

---

### Step 3 — ATS keyword audit (after changes)

After all tasks are done, scan `resume-data.ts` and verify:

| Keyword from spec | Present in summary? | Present in bullets? | Present in skills? |
|-------------------|--------------------|--------------------|-------------------|
| [keyword]         | ✓ / ✗              | ✓ / ✗              | ✓ / ✗             |

Flag any required keyword still missing. Either add it or note why it can't be added honestly.

---

### Step 4 — Build check

Run `npx tsc --noEmit` to confirm no TypeScript errors were introduced.

---

### Step 5 — Update `tasks.md`

Mark all completed tasks `[x]` and add a completion timestamp at the top of the file:
```
Implemented: YYYY-MM-DD
```

---

### Step 6 — Report to user

```
## Implement Complete: [company-slug]-[job-slug]

### Changes made
- professionalSummary: rewritten for [role]
- Experience bullets updated: [n] bullets changed across [m] roles
- Skills reordered: [category] — [skill] moved to top
- [any other changes]

### ATS keyword coverage after changes
✓ [keyword], [keyword], ...
✗ Still missing: [keyword] — [reason why not added]

### Next step
Run `sync` if you want to promote any of these improvements back to the base resume.
Or revert by restoring `src/data/resume-data.ts` from git: `git checkout src/data/resume-data.ts`
```

---

## Important rules

- **Implement is non-destructive to specs** — never edit spec files during implement
- **All changes go to `resume-data.ts` only** — the data file is the single source of truth
- **Don't add fake experience or skills** — tailoring means emphasis, not fabrication
- **Keep a clean git diff** — if the user wants to apply for the next job, they can `git stash` this tailoring, or `sync` good improvements back to main before reverting
