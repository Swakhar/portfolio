# Portfolio — Project Spec (CLAUDE.md)

This file is the authoritative spec for the portfolio project. All future features, changes, and additions should be described here first, then implemented. This is the single source of truth for spec-driven development.

---

## Project Overview

**What it is:** A personal portfolio + resume website for Swakhar Dey, Senior Software Engineer.
**Live URL:** https://swakhar-dey-portfolio.vercel.app
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, @react-pdf/renderer

**Primary goals:**
1. Showcase skills, experience, and projects to potential employers / clients
2. Allow on-the-fly PDF resume download that stays in sync with the website content
3. Pass ATS (Applicant Tracking System) screening — resume must be keyword-rich, clean text, no decorative elements that break parsers

---

## Architecture

```
src/
  app/
    layout.tsx          — Root layout, fonts, theme provider, metadata
    page.tsx            — Home page: composes all section components
    globals.css         — Tailwind base + custom utility classes
    api/
      resume/
        route.tsx       — GET /api/resume → streams PDF blob
  components/
    navbar.tsx          — Fixed top nav with smooth-scroll links + theme toggle
    hero.tsx            — Full-screen landing with CTAs
    about.tsx           — Short bio + profile image
    experience.tsx      — Timeline of work history
    skills.tsx          — Skill bars (website only)
    projects.tsx        — Featured + other projects grid
    contact.tsx         — Contact info + form
    footer.tsx          — Copyright + links
    resume-pdf.tsx      — @react-pdf/renderer PDF document
    download-resume-button.tsx — Client component for PDF download CTA
    theme-provider.tsx  — next-themes wrapper
  data/
    resume-data.ts      — SINGLE SOURCE OF TRUTH for all resume content
  utils/
    pdf-helpers.ts      — sanitizeForPDF / sanitizeObjectForPDF (replace umlauts)
public/
  image/                — profile.jpeg, castlumen.png, meindokan.png
```

**Data flow rule:** All content (name, experience, skills, projects, education) lives in `src/data/resume-data.ts`. Both the website components and the PDF template import from there. Never hardcode content in components.

---

## Data Spec — `src/data/resume-data.ts`

### `personalInfo`
| Field      | Type   | Notes                                      |
|------------|--------|--------------------------------------------|
| name       | string | Full name, used in page title and hero     |
| title      | string | Job title shown in hero and PDF header     |
| email      | string | Clickable mailto link in contact + footer  |
| phone      | string | Shown in contact section and PDF           |
| location   | string | City/Country shown in contact and PDF      |
| linkedin   | string | Without `https://` prefix                  |
| github     | string | Without `https://` prefix                  |
| portfolio  | string | Full URL with `https://`                   |

### `professionalSummary`
- Single string, 3–5 sentences
- **ATS requirement:** Must include primary keywords: `Ruby on Rails`, `Senior Software Engineer`, `full-stack`, `microservices`, `cloud`, `API`, `fintech`
- Should mention years of experience explicitly (e.g., "9+ years")

### `experiences[]`
| Field        | Type       | Notes                                                      |
|--------------|------------|------------------------------------------------------------|
| id           | number     | Unique identifier                                          |
| title        | string     | Job title                                                  |
| company      | string     | Company name                                               |
| location     | string     | City or "Remote"                                           |
| period       | string     | "Mon YYYY – Mon YYYY" or "Present"                        |
| description  | string[]   | Bullet points. Start with strong action verbs. Quantify outcomes. |
| technologies | string[]   | Tech stack tags shown on website and PDF                  |

**ATS bullet point rules:**
- Begin each bullet with a strong verb: Led, Architected, Built, Reduced, Integrated, Automated
- Include at least one quantified result per experience (%, time saved, team size)
- Keep bullets to 1–2 lines max

### `skillCategories[]`
Four categories (see Skills Spec below). Each skill has `name` (string) and `level` (number 0–100).

The `level` field drives progress bars on the **website only**. The PDF must NOT render % bars — instead it lists skills as comma-separated text per category.

### `additionalSkills`
Object with two arrays:
- `integrations` — payment, messaging, and third-party API expertise
- `leadership` — soft skills and management capabilities

### `featuredProjects[]`
| Field        | Type    | Notes                                         |
|--------------|---------|-----------------------------------------------|
| id           | number  | Unique identifier                             |
| title        | string  | Project name                                  |
| description  | string  | 2–4 sentences. Mention role, tech, impact.    |
| technologies | string[]| Tech tags                                     |
| url          | string  | Live URL or GitHub URL                        |
| date         | string  | Year string e.g. "2025"                       |

### `education`
Single object: `degree`, `institution`, `location`, `period`.

---

## Skills Spec

The skills section must have **four categories**. Three exist; one is new:

### Category 1 — Backend Development
Ruby on Rails (95%), PostgreSQL (90%), Redis (85%), RESTful APIs (95%), Python/FastAPI (85%), Laravel/PHP (88%)

### Category 2 — Frontend Development
React (92%), Next.js (90%), TypeScript (88%), JavaScript (95%), Tailwind CSS (90%), Vue.js (82%)

### Category 3 — DevOps & Cloud
Azure (88%), Docker (85%), Heroku (92%), CI/CD / GitHub Actions (85%), Terraform / Bicep (82%), AWS (80%)

### Category 4 — AI & Developer Tools *(NEW — missing from current data)*
| Skill                  | Level |
|------------------------|-------|
| Claude AI / Anthropic  | 85    |
| OpenAI / GPT-4         | 85    |
| GitHub Copilot         | 88    |
| Cursor AI              | 85    |
| AI API Integration     | 88    |
| Prompt Engineering     | 82    |

### `additionalSkills` update
Rename `paymentIntegration` → `integrations` and expand:
- Stripe Integration, Wirecard, Microservices, Event-driven Architecture, WebSockets / Hotwire, WordPress API, Social Media APIs, RSS Processing

---

## Component Specs

### `Navbar`
- Fixed to top; blurred/translucent background (backdrop-blur)
- Links: Home, About, Experience, Skills, Projects, Contact (all same-page anchor scrolls)
- Resume download button (outline variant on desktop, primary on mobile menu)
- Dark/light mode toggle (icon changes: Sun/Moon/Monitor)
- Mobile: hamburger menu that opens a vertical nav drawer

### `Hero`
- Full-screen section (`min-h-screen`)
- Headline: "Hi, I'm **[name]**" — name in gradient
- Subtitle: Short tagline mentioning Ruby on Rails + years + key interests
- Three CTA buttons: "View My Work" → `#projects`, "Download Resume" → triggers PDF, "Get In Touch" → `#contact`
- Social icons: GitHub, LinkedIn, Email, Portfolio
- Animated scroll arrow at the bottom pointing down to `#about`
- All text animated in with Framer Motion (staggered fade-up)

### `About`
- Two-column layout: profile photo (left) + text (right)
- Profile photo: circular, gradient border, `/image/profile.jpeg`
- Text: 3 paragraphs covering career journey, tech breadth, side projects/personality
- Two info cards below text: "Mission" and "Passion" with icons

### `Experience`
- Centered vertical timeline with alternating left/right cards on desktop
- Each card: period + location badges, job title, company name, bullet list, tech tags
- Timeline dot on the center line
- Cards animate in on scroll (whileInView)

### `Skills`
- Three-column grid for the four skill categories (first two share one row at wide screens, or responsive wrap)
- **Update needed:** Must display all four categories including the new AI & Developer Tools
- Per skill: label + percentage text + animated progress bar (blue-to-purple gradient)
- Below grid: two tag-cloud rows — "Integration Expertise" (blue tags) and "Business & Leadership" (green tags)

### `Projects`
- Featured projects (2 cards, large, with screenshot image)
- Other projects (3-column grid, smaller cards)
- Each card: title, date, description, tech tags, GitHub/Live Demo links
- Featured badge (yellow star) and Business badge (green) where applicable
- Placeholder gradient when no screenshot image

### `Contact`
- Two-column: contact info (left) + form (right)
- Contact info: email (mailto), phone (tel), location, social icon links
- Form fields: Name, Email, Subject, Message — all required
- Submit button with loading spinner state
- **Current issue:** Form submission only shows `alert()`. Spec for future: integrate a real form backend (Formspree or Resend API)

### `Footer`
- Simple one-liner: name + copyright year + navigation links
- Dark/light compatible

---

## PDF Resume Spec — `src/components/resume-pdf.tsx`

The PDF is generated server-side via `/api/resume` and served as `Swakhar_Dey_Resume.pdf`.

### ATS Requirements (non-negotiable)
- **No skill progress bars** — ATS parsers cannot read visual % bars. Skills must appear as plain text lists.
- **No images or icons** in the PDF body
- **Standard section headings**: PROFESSIONAL SUMMARY, PROFESSIONAL EXPERIENCE, TECHNICAL SKILLS, FEATURED PROJECTS, EDUCATION
- All text must be selectable (vector text, not rasterized) — @react-pdf/renderer handles this by default
- Font: Helvetica (system-embedded, universally parseable)
- File encoding: UTF-8 compatible (special chars like ö/ü must be sanitized via `pdf-helpers.ts`)

### Layout
- Page size: A4
- Margins: 35px top, 45px bottom, 45px horizontal
- Single column for Experience and Projects (most ATS-friendly)
- Skills section: single column with inline keyword lists

### Visual Design (current design is to be replaced)
Target aesthetic: clean, modern professional — like a SWE resume at a FAANG company.

**Header block** (top ~15% of page):
- Name: 28px bold, dark navy `#0f2951`
- Job title: 13px uppercase, medium gray `#4b5563`, letter-spacing 1.5
- Thin horizontal rule below title, blue `#3b82f6`
- Contact row 1: email · phone · location
- Contact row 2: linkedin.com/... · github.com/... · portfolio URL
- Contact text: 9.5px, `#6b7280`; links in blue `#2563eb`

**Section titles** (all sections):
- 11px, uppercase, bold, `#1e40af`
- Underlined with a 2px `#3b82f6` bottom border
- 6px space above border, 10px margin below

**Professional Summary:**
- 10.5px, line-height 1.7, `#4b5563`, left-aligned

**Experience items:**
- Job title: 12px bold `#111827`
- Company: 11px bold `#2563eb`
- Location + Period: 9.5px italic `#6b7280`, space-between row
- Bullet points: `•` in blue, 10px body text
- Tech tag chips: 8.5px, `#dbeafe` bg, `#1e40af` text, 4px border-radius

**Technical Skills** (no % bars in PDF):
- Format: `**Category Name:** skill1, skill2, skill3, skill4`
- One line per category
- Example: `Backend Development: Ruby on Rails, PostgreSQL, Redis, RESTful APIs, Python/FastAPI, Laravel/PHP`
- Bold category label, then comma list in regular weight

**Featured Projects:**
- Title: 11.5px bold
- Description: 10px, line-height 1.6
- URL: 9px blue italic, clickable Link
- Tech chips: same style as experience

**Education:**
- Degree: 11.5px bold
- Institution: 10.5px blue
- Location + Year: 9.5px italic gray

---

## API Spec — `GET /api/resume`

**Endpoint:** `/api/resume`
**Method:** GET
**Auth:** None (public)
**Response on success:**
- Status: 200
- Content-Type: `application/pdf`
- Content-Disposition: `attachment; filename="Swakhar_Dey_Resume.pdf"`
- Cache-Control: `no-cache, no-store, must-revalidate`
- Body: PDF binary

**Response on error:**
- Status: 500
- Body: `{ "error": "Failed to generate PDF resume" }`

**Implementation notes:**
- Uses `@react-pdf/renderer`'s `pdf(<ResumePDF />).toBlob()` then converts to `ArrayBuffer`
- All data imported from `resume-data.ts` must be sanitized via `sanitizeObjectForPDF` before rendering (handles German umlauts)

---

## Utility Spec — `src/utils/pdf-helpers.ts`

### `sanitizeForPDF(text: string): string`
Replaces characters that cause encoding issues with Helvetica font:
- `ö → oe`, `ä → ae`, `ü → ue`, `Ö → Oe`, `Ä → Ae`, `Ü → Ue`, `ß → ss`
- French accents: `é/è/ê → e`, `à/â → a`, `î → i`, `ô → o`, `û → u`, `ç → c`

### `sanitizeObjectForPDF<T>(obj: T): T`
Recursively walks any value (string, array, plain object) and applies `sanitizeForPDF` to all strings. Returns same shape as input.

---

## Development Guidelines

### Adding new content
1. Update `src/data/resume-data.ts` first — this is the only place content should live
2. The website and PDF automatically pick up changes
3. If adding a new skill category, update both `skillCategories` in `resume-data.ts` AND ensure `resume-pdf.tsx` renders it

### Adding new sections to website
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add a nav link in `src/components/navbar.tsx`
4. Add a `id="section-name"` anchor to the section element
5. Update this CLAUDE.md spec before starting implementation

### Adding new sections to the PDF
1. Spec out the section here in the **PDF Resume Spec** section above
2. Add data to `resume-data.ts` if needed
3. Add rendering in `resume-pdf.tsx`

### Styling rules
- Website: Tailwind CSS utility classes only. No inline styles in components.
- Custom utilities go in `src/app/globals.css` under `@layer components`
- PDF: `StyleSheet.create()` from `@react-pdf/renderer`. All PDF styles are defined in `resume-pdf.tsx`.
- Dark mode: always add `dark:` variant for background and text colors in website components

### ATS keyword checklist for resume updates
Before updating the resume content, verify these keywords appear naturally in the summary or experience:
- `Ruby on Rails` (primary skill — must appear multiple times)
- `PostgreSQL`, `Redis`
- `REST API` / `RESTful API`
- `microservices`
- `Docker`, `Azure`, `CI/CD`
- `React`, `Next.js`, `TypeScript`
- `Agile` / `Scrum`
- `technical leadership` / `team lead`
- `AI integration` / `LLM` (for modern roles)

---

## Known Issues / Future Improvements

| Issue | Priority | Notes |
|-------|----------|-------|
| Contact form uses `alert()` | Medium | Integrate Formspree or Resend |
| No SEO meta per-page | Low | Add OpenGraph tags in layout.tsx |
| Skills section doesn't show 4th AI category | High | Add AI & Developer Tools to resume-data.ts |
| PDF skill bars confuse ATS | High | Replace with keyword lists in PDF (keep bars on website) |
| PDF design is basic | High | Implement spec above — cleaner header, better hierarchy |
| `resume-data.ts` and `projects.tsx` are out of sync | Medium | projects.tsx has its own local array; should use resume-data.ts |
