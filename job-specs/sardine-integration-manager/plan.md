# Plan — Sardine · Integration Manager

> Read `specification.md` before this file. This defines exactly what to change technically.

---

## Effort Estimate

**Overall: HIGH** — significant reframing of summary and Finlink bullets needed. The core experience is a strong match, but the current resume reads "backend engineer" not "integration manager". Every change is about emphasis and language, not fabrication.

| Section | Change type | Effort |
|---------|-------------|--------|
| professionalSummary | Full rewrite | High |
| Finlink bullets | Reframe 2 bullets, add webhook/JSON/event-driven | Medium |
| WellDev bullets | Reorder — fraud bullet moves to position 0 | Low |
| skillCategories | Add SQL explicitly, add Postman if honest | Low |
| additionalSkills.integrations | Promote event-driven, add webhooks | Low |

---

## Professional Summary — Full Rewrite

**Strategy:** Open with the integration angle, not the software engineer angle. Sardine is hiring someone to own end-to-end client integrations — lead with that. Weave in B2B SaaS, fintech, compliance, and fraud keywords. Mention Python and Ruby explicitly. Keep 3 sentences.

**Keywords to include:** Integration Manager, API integrations, B2B SaaS, fintech, compliance, fraud, Ruby, Python, SQL, webhooks, event-driven

**Draft:**
```
Senior Software Engineer and Integration Specialist with 9+ years of experience owning complex API integrations across B2B SaaS fintech, payment, and compliance platforms. At Finlink GmbH, led a team of 5 engineers delivering end-to-end integrations with major financial platforms (Europace, Ehyp, ING) involving REST APIs, webhooks, JSON payload mapping, SQL data pipelines, and regulatory compliance — directly mirroring the Integration Manager scope. Deep technical background in Ruby, Python, and SQL with a proven record in fraud protection, PCI compliance, and event-driven integration architecture across 300+ daily financial transactions.
```

> Note: "300+ daily financial transactions" comes from WellDev. Adjust if a different number is more accurate.

---

## Finlink Bullets — Reframe

**Current bullet 1:**
> "Led technical architecture and sprint planning for a team of 5 engineers, owning end-to-end delivery of complex financing platform integrations"

**Target bullet 1** (surface "integration team" lead framing):
> "Led a team of 5 engineers as Integration Team Lead, owning end-to-end delivery of API integrations with major European financial platforms (Europace, Ehyp, ING)"

**Current bullet 3:**
> "Architected and deployed multiple microservices from scratch for Europace/Ehyp API integration using GitHub Actions CI/CD and Docker, handling high-volume financial data processing"

**Target bullet 3** (surface webhooks, JSON, data mapping):
> "Architected and delivered end-to-end API integrations with Europace and Ehyp, including webhook handling, JSON payload mapping, and event-driven data pipelines — processing high-volume financial transactions in compliance with German regulatory standards"

**Current bullet 4:**
> "Established Azure container infrastructure with NAT gateway configuration for secure ING API whitelisting, ensuring regulatory compliance"

→ Keep as-is. "Regulatory compliance" + "ING" (a major bank) is strong signal for Sardine.

**Current bullet 2 and 5:** Keep as-is (Redis 50%, loan automation 80% — quantified and strong).

---

## WellDev Bullets — Reorder

**Move this bullet to position 0** (most visible):
> "Integrated secure payment processing with Wirecard and Stripe, ensuring PCI compliance and fraud protection"

This is the single most Sardine-relevant bullet in the entire resume. It must be the first thing a reviewer sees in the WellDev section.

---

## Skills Plan

### Add SQL explicitly to Backend Development
The JD explicitly requires "basic SQL querying". PostgreSQL is there, but "SQL" as a standalone keyword is what ATS looks for.

Add: `{ name: 'SQL', level: 88 }` to Backend Development, position 3 (after PostgreSQL)

Or rename PostgreSQL entry to: `{ name: 'PostgreSQL / SQL', level: 90 }`

### Add Postman (if honest)
If Swakhar genuinely uses Postman for API testing, add to AI & Developer Tools category:
`{ name: 'Postman', level: 85 }`

### Reorder Backend Development
For this role: Ruby and Python are both named in the JD. REST APIs are critical.
Current order: Ruby on Rails, RESTful APIs, PostgreSQL, Laravel/PHP, Python/FastAPI, Redis
Target order: Ruby on Rails, Python/FastAPI, RESTful APIs, PostgreSQL / SQL, Redis, Laravel/PHP

### Update additionalSkills.integrations
Add: `'Webhooks'`, `'JSON Payload Mapping'`, `'OpenAPI / Swagger'`
Remove: `'WordPress API'`, `'RSS Processing'` (not relevant to this role)

---

## Projects — No changes needed

The current 3 projects are fine. QR Ordering System (Ruby on Rails, Stripe, WebSocket) is actually relevant — it shows event-driven architecture and payment integration in a real product.

---

## Architecture

- All changes go to `src/data/resume-data.ts` only
- No component changes needed
- PDF will regenerate automatically

---

## Risks

| Risk | Mitigation |
|------|-----------|
| "Integration Manager" title history we don't have | Reframe Finlink bullets — the work IS integration management, just under a different title |
| No Golang | Do not add. If asked: "I read Go confidently and have been exploring it" |
| No direct client-facing experience | Frame Europace/Ehyp/ING integrations as external partner integrations — which they are |
| AML claim | Don't claim AML. Use "regulatory compliance" which is accurate |
