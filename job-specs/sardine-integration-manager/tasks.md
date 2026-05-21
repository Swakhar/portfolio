# Tasks — Sardine · Integration Manager

> Ordered by priority. Run `implement` to execute these.
> Mark `[~]` when starting, `[x]` when done.

---

<!-- Implemented: 2026-05-21 -->

---

## Phase 1 — ATS Critical

- [x] T-01: Rewrite `professionalSummary` — open with integration framing, include B2B SaaS, fintech, fraud, compliance, Ruby, Python, SQL, webhooks, event-driven
  - **File:** `src/data/resume-data.ts`
  - **Field:** `professionalSummary`
  - **Target draft:** See `plan.md` → Professional Summary section
  - **Done when:** Summary contains "integration", "B2B", "compliance", "fraud", "Ruby", "Python", "SQL", "webhooks"

- [x] T-02: Add `SQL` explicitly to Backend Development skills
  - **File:** `src/data/resume-data.ts`
  - **Field:** `skillCategories[0].skills`
  - **Change:** Rename `{ name: 'PostgreSQL', level: 90 }` → `{ name: 'PostgreSQL / SQL', level: 90 }`
  - **Done when:** "SQL" appears as a skill keyword

- [x] T-03: Add `Webhooks` and `JSON Payload Mapping` to `additionalSkills.integrations`
  - **File:** `src/data/resume-data.ts`
  - **Field:** `additionalSkills.integrations`
  - **Change:** Add `'Webhooks'`, `'JSON Payload Mapping'` to the array
  - **Done when:** Both keywords appear in the integrations list

---

## Phase 2 — Experience Bullets (highest impact on human review)

- [x] T-04: Rewrite Finlink bullet 0 — reframe as "Integration Team Lead"
  - **File:** `src/data/resume-data.ts`
  - **Field:** `experiences[0].description[0]`
  - **Current:** "Led technical architecture and sprint planning for a team of 5 engineers, owning end-to-end delivery of complex financing platform integrations"
  - **Target:** "Led a team of 5 engineers as Integration Team Lead, owning end-to-end delivery of API integrations with major European financial platforms (Europace, Ehyp, ING)"
  - **Done when:** Bullet mentions "Integration Team Lead" and names the external platforms

- [x] T-05: Rewrite Finlink bullet 2 — surface webhooks, JSON, event-driven, compliance
  - **File:** `src/data/resume-data.ts`
  - **Field:** `experiences[0].description[2]`
  - **Current:** "Architected and deployed multiple microservices from scratch for Europace/Ehyp API integration using GitHub Actions CI/CD and Docker, handling high-volume financial data processing"
  - **Target:** "Architected and delivered end-to-end API integrations with Europace and Ehyp, including webhook handling, JSON payload mapping, and event-driven data pipelines — processing high-volume financial transactions in compliance with German regulatory standards"
  - **Done when:** Bullet contains "webhook", "JSON", "event-driven", "compliance"

- [x] T-06: Reorder WellDev bullets — move fraud/PCI bullet to position 0
  - **File:** `src/data/resume-data.ts`
  - **Field:** `experiences[3].description`
  - **Change:** Move `'Integrated secure payment processing with Wirecard and Stripe, ensuring PCI compliance and fraud protection'` to index 0
  - **Done when:** Fraud/PCI bullet is the first WellDev bullet

---

## Phase 3 — Skills Reordering

- [x] T-07: Reorder Backend Development — Python moves to position 1 (JD names Ruby and Python equally)
  - **File:** `src/data/resume-data.ts`
  - **Field:** `skillCategories[0].skills`
  - **Target order:** Ruby on Rails, Python/FastAPI, RESTful APIs, PostgreSQL / SQL, Redis, Laravel/PHP
  - **Done when:** Python/FastAPI is at index 1

- [x] T-08: Add `Postman` to AI & Developer Tools (only if Swakhar genuinely uses it)
  - **File:** `src/data/resume-data.ts`
  - **Field:** `skillCategories[3].skills`
  - **Change:** Add `{ name: 'Postman', level: 82 }`
  - **Done when:** Postman appears in AI & Developer Tools category
  - **⚠️ Skip this task if Postman is not genuinely used**

---

## Phase 4 — additionalSkills Cleanup

- [x] T-09: Update `additionalSkills.integrations` for this role
  - **File:** `src/data/resume-data.ts`
  - **Field:** `additionalSkills.integrations`
  - **Add:** `'Webhooks'`, `'JSON Payload Mapping'`, `'OpenAPI / Swagger'`
  - **Remove:** `'WordPress API'`, `'RSS Processing'` (irrelevant to Sardine)
  - **Done when:** Array reflects API integration and fintech focus

---

## Phase 5 — Final Checks

- [x] T-10: Run `npx tsc --noEmit` — zero TypeScript errors
- [x] T-11: ATS keyword audit — verify all keywords from `specification.md` checklist are ✓
- [x] T-12: Read the summary aloud — confirm it sounds like a candidate applying to Sardine, not a generic senior engineer

---

## Sync candidates (fill after implement)

| Task | Promote to base? | Reason |
|------|-----------------|--------|
| T-02 (PostgreSQL → PostgreSQL / SQL) | ✅ Yes | More accurate and universally better for ATS |
| T-03 (add Webhooks to integrations) | ✅ Yes | Webhooks are real experience |
| T-06 (WellDev reorder) | ✅ Yes | Fraud bullet should always be prominent |
| T-08 (Postman if added) | ✅ Yes | Real skill, good for all roles |
| T-01 (summary rewrite) | ❌ No | Too tailored to Integration Manager framing |
| T-04 (Integration Team Lead) | ❌ No | Framing is role-specific to Sardine |
| T-05 (Finlink bullet rewrite) | 🟡 Partial | The webhook/JSON/event-driven language can be kept; "German regulatory standards" is universally accurate |
| T-09 (remove WordPress/RSS from integrations) | ❌ No | Those are real skills for other roles |
