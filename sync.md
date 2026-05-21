# Sync Workflow

**Purpose:** After tailoring the resume for a specific job, review what was improved and decide what to permanently promote back into the base resume (`resume-data.ts` on `main`).

This keeps the base resume getting better over time — each job application is an opportunity to improve the underlying content.

---

## When to run
The user says something like:
- "sync after [company] application"
- "run sync on job-specs/[folder]/"
- "promote the improvements from [folder] back to main"
- "I've applied — sync and reset"

---

## Concepts

| Term        | Meaning |
|-------------|---------|
| **Base**    | The `main` branch `resume-data.ts` — the master resume |
| **Tailored** | The current working `resume-data.ts` with job-specific changes from `implement` |
| **Promote** | Copy an improvement from tailored → base (it's universally good, not job-specific) |
| **Discard** | Revert a change that was only relevant to that one role |

---

## Steps

### Step 1 — Review the diff

Run `git diff src/data/resume-data.ts` and read every change made during `implement`.

Categorize each change:

| Change | Promote to base? | Reason |
|--------|-----------------|--------|
| Stronger action verb in bullet | ✓ Yes | Universally better writing |
| Quantified outcome added | ✓ Yes | Always good to have |
| Summary rewritten for specific role | ✗ No | Too role-specific |
| Skill reordered to match JD | Depends | Promote if the new order is generally better |
| Skill added that is real but was missing | ✓ Yes | Should always be in base |
| Skill level bumped | Discuss | Only if honestly more accurate |

---

### Step 2 — Apply promotions to base

For each change marked "promote":
1. Note the exact improvement (file path, field, old value, new value)
2. Confirm with the user if unsure whether to promote
3. After the user confirms, apply the promoted changes directly to the current working file

---

### Step 3 — Update the job spec

In `job-specs/[folder]/tasks.md`, add a `## Sync` section at the bottom:

```markdown
## Sync — YYYY-MM-DD

### Promoted to base
- [ x ] professionalSummary: added "microservices at scale" phrasing
- [ x ] Finlink bullet 2: quantified Redis improvement as "50% reduction"

### Discarded (job-specific only)
- summary opening line targeting fintech role specifically
- Skill reorder: moved Terraform to top (only relevant here)

### Pending — needs discussion
- (none)
```

---

### Step 4 — Commit the base improvements

After promotions are applied:
```
git add src/data/resume-data.ts
git commit -m "improve: promote resume improvements from [company] application"
```

Then revert job-specific changes:
```
git checkout src/data/resume-data.ts
```

Or if you want to keep the full tailored version for reference before resetting:
```
git stash -m "tailored: [company-slug]-[job-slug]"
```

---

### Step 5 — Mark the job spec as applied

Add a status header to `job-specs/[folder]/specification.md`:

```markdown
---
status: applied
applied_date: YYYY-MM-DD
sync_date: YYYY-MM-DD
outcome: [applied / interviewed / rejected / offer / withdrawn]
notes: [optional: recruiter feedback, why rejected, etc.]
---
```

This creates a log of every job applied to and what was learned.

---

### Step 6 — Report to user

```
## Sync Complete: [company-slug]-[job-slug]

### Promoted to base (will persist in main resume)
- [change 1]
- [change 2]

### Discarded (reverted, job-specific only)
- [change 1]

### Base resume improvement score
Before: [n] quantified bullets, [m] skills
After:  [n+x] quantified bullets, [m+y] skills

### Job spec archived
job-specs/[folder]/ → status: applied ([date])
```

---

## Rules

- **Never silently discard good improvements** — always evaluate each change
- **Never promote fabricated content** — only real experience, real skills
- **The job spec folder is permanent** — don't delete it. It's your application history.
- **Sync before starting the next kickoff** — always work from a clean base
