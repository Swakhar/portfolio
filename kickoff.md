# Kickoff Workflow

**Purpose:** Given a job posting URL or pasted description, analyze the role and generate a full spec folder for that application.

---

## When to run
The user says something like:
- "kickoff https://rubyonremote.com/some-job/"
- "run kickoff for this job: [description pasted]"
- "start a new job spec for [company]"

---

## Steps

### Step 1 — Fetch & Parse the Job Description

Fetch the URL (or read the pasted text). Extract and structure:

| Field             | Extract                                                              |
|-------------------|----------------------------------------------------------------------|
| Company name      | e.g. "Fintech Corp"                                                  |
| Job title         | e.g. "Senior Ruby on Rails Engineer"                                 |
| Location          | Remote / Hybrid / On-site, country/timezone                         |
| Seniority         | Junior / Mid / Senior / Lead / Staff                                 |
| Required skills   | Explicit "must have" or "required" items                            |
| Preferred skills  | "Nice to have", "bonus", "plus"                                     |
| Key responsibilities | What they actually want the person to do day-to-day               |
| Tech stack        | Languages, frameworks, databases, infra                             |
| Team/domain       | Team size, product domain, engineering culture signals              |
| Red flags         | Anything that could disqualify (visa, specific tool not in resume)  |

---

### Step 2 — Create the Job Spec Folder

Create folder: `job-specs/<company-slug>-<job-slug>/`

**Slugify rules:**
- Lowercase, hyphens only, strip special characters
- Max 50 chars total
- Format: `[company-name]-[short-job-title]`
- Examples:
  - `rubyonremote-senior-rails-engineer`
  - `shopify-staff-backend-engineer`
  - `basecamp-remote-fullstack`

Copy the three template files from `job-specs/_template/` into the new folder.

---

### Step 3 — Fill `specification.md`

Populate the template with data from Step 1. The specification captures **what the job requires and what the tailored resume must prove**.

Key rules for writing user stories and acceptance criteria:
- Write from the perspective of "as a candidate applying to this role"
- Acceptance criteria must be verifiable (can check in the resume text)
- Capture every required keyword explicitly — these feed into ATS matching
- Note any gaps: skills in the JD not present in `src/data/resume-data.ts`

---

### Step 4 — Fill `plan.md`

Based on the specification, produce the technical plan:
- Which fields in `src/data/resume-data.ts` need updating
- What to rewrite in `professionalSummary` to match the role
- Which experience bullets to strengthen or reorder
- Whether to add/reorder skills
- Any project descriptions to update
- Estimate effort: Low (summary tweak) / Medium (bullets + skills) / High (new content needed)

---

### Step 5 — Fill `tasks.md`

Decompose the plan into atomic tasks. Each task should:
- Take 5–30 minutes
- Map to exactly one change (one field, one bullet, one section)
- Have a clear "done" condition
- Be ordered by priority (ATS-critical first)

---

### Step 6 — Gap Analysis Report

After creating the spec folder, output a summary to the user:

```
## Kickoff Complete: [company-slug]-[job-slug]

**Role:** [Job Title] at [Company]
**Folder:** job-specs/[folder-name]/

### ATS Keyword Coverage
✓ Already present: Ruby on Rails, PostgreSQL, REST API, ...
✗ Missing / weak:  [keyword], [keyword], ...

### Effort Estimate
[Low / Medium / High] — [1-line reason]

### Recommendation
[Proceed with `implement` | Add content manually first | Skip — poor fit]
```

---

## Output files created

```
job-specs/
  [company-slug]-[job-slug]/
    specification.md    ← requirements, user stories, acceptance criteria
    plan.md             ← what to change technically
    tasks.md            ← atomic ordered task list
```

---

## Notes

- Do NOT change any source files during kickoff. This phase is analysis-only.
- If the job URL is behind a login wall, ask the user to paste the description text.
- The base resume content lives in `src/data/resume-data.ts` — always read it before writing the plan.
- Cross-reference `CLAUDE.md` for current skill categories and data shape.
