import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer'
import {
  personalInfo,
  professionalSummary,
  experiences,
  skillCategories,
  additionalSkills,
  featuredProjects,
  education,
} from '@/data/resume-data'
import { sanitizeObjectForPDF } from '@/utils/pdf-helpers'

const pdfPersonalInfo = sanitizeObjectForPDF(personalInfo)
const pdfProfessionalSummary = sanitizeObjectForPDF(professionalSummary)
const pdfExperiences = sanitizeObjectForPDF(experiences)
const pdfSkillCategories = sanitizeObjectForPDF(skillCategories)
const pdfAdditionalSkills = sanitizeObjectForPDF(additionalSkills)
const pdfFeaturedProjects = sanitizeObjectForPDF(featuredProjects)
const pdfEducation = sanitizeObjectForPDF(education)

const NAVY = '#0f2951'
const BLUE = '#2563eb'
const LIGHT_BLUE = '#dbeafe'
const BODY = '#374151'
const MUTED = '#6b7280'
const WHITE = '#ffffff'
const CHIP_BG = '#f1f5f9'

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 42,
    paddingHorizontal: 44,
    fontFamily: 'Helvetica',
    color: BODY,
    backgroundColor: WHITE,
    lineHeight: 1.5,
  },

  // ─── Header ───────────────────────────────────────────────────────────────
  header: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottom: 2,
    borderBottomColor: BLUE,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: NAVY,
    letterSpacing: 0.5,
    lineHeight: 1.2,
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: MUTED,
    letterSpacing: 2,
    lineHeight: 1.3,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
    marginBottom: 3,
  },
  contactSep: {
    fontSize: 9,
    color: MUTED,
    marginHorizontal: 6,
  },
  contactText: {
    fontSize: 9,
    color: MUTED,
  },
  contactLink: {
    fontSize: 9,
    color: BLUE,
    textDecoration: 'none',
  },

  // ─── Sections ─────────────────────────────────────────────────────────────
  section: {
    marginTop: 16,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: NAVY,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottom: 1.5,
    borderBottomColor: BLUE,
  },

  // ─── Summary ──────────────────────────────────────────────────────────────
  summary: {
    fontSize: 10,
    lineHeight: 1.7,
    color: BODY,
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  expItem: {
    marginBottom: 14,
  },
  expHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
  },
  expPeriod: {
    fontSize: 9,
    color: MUTED,
    fontFamily: 'Helvetica-Oblique',
  },
  expCompanyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  expCompany: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
  },
  expLocation: {
    fontSize: 9,
    color: MUTED,
    fontFamily: 'Helvetica-Oblique',
  },
  bulletList: {
    marginLeft: 10,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletDot: {
    width: 10,
    fontSize: 10,
    color: BLUE,
    marginTop: 0.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.55,
    color: BODY,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
    marginTop: 4,
  },
  chip: {
    fontSize: 8,
    backgroundColor: LIGHT_BLUE,
    color: NAVY,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
    fontFamily: 'Helvetica-Bold',
  },

  // ─── Skills (keyword lists — ATS friendly, no % bars) ─────────────────────
  skillLine: {
    flexDirection: 'row',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  skillLabel: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
    marginRight: 4,
  },
  skillValue: {
    fontSize: 9.5,
    color: BODY,
    flex: 1,
    flexWrap: 'wrap',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
    marginBottom: 6,
  },
  tag: {
    fontSize: 8,
    backgroundColor: CHIP_BG,
    color: BODY,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },

  // ─── Projects ─────────────────────────────────────────────────────────────
  projectItem: {
    marginBottom: 12,
    paddingLeft: 10,
    borderLeft: 2,
    borderLeftColor: BLUE,
    paddingBottom: 2,
  },
  projectHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
  },
  projectDate: {
    fontSize: 9,
    color: MUTED,
    fontFamily: 'Helvetica-Oblique',
  },
  projectDesc: {
    fontSize: 9.5,
    lineHeight: 1.55,
    color: BODY,
    marginBottom: 4,
  },
  projectUrl: {
    fontSize: 8.5,
    color: BLUE,
    fontFamily: 'Helvetica-Oblique',
    marginBottom: 4,
    textDecoration: 'none',
  },

  // ─── Education ────────────────────────────────────────────────────────────
  degree: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
    marginBottom: 2,
  },
  eduDetails: {
    fontSize: 9,
    color: MUTED,
    fontFamily: 'Helvetica-Oblique',
  },
})

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  )
}

function Chip({ label }: { label: string }) {
  return <Text style={styles.chip}>{label}</Text>
}

export function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.name}>{pdfPersonalInfo.name}</Text>
          <Text style={styles.jobTitle}>{pdfPersonalInfo.title.toUpperCase()}</Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactText}>{pdfPersonalInfo.email}</Text>
            <Text style={styles.contactSep}>·</Text>
            <Text style={styles.contactText}>{pdfPersonalInfo.phone}</Text>
            <Text style={styles.contactSep}>·</Text>
            <Text style={styles.contactText}>{pdfPersonalInfo.location}</Text>
          </View>

          <View style={styles.contactRow}>
            <Link style={styles.contactLink} src={`https://${pdfPersonalInfo.linkedin}`}>
              {pdfPersonalInfo.linkedin}
            </Link>
            <Text style={styles.contactSep}>·</Text>
            <Link style={styles.contactLink} src={`https://${pdfPersonalInfo.github}`}>
              {pdfPersonalInfo.github}
            </Link>
            <Text style={styles.contactSep}>·</Text>
            <Link style={styles.contactLink} src={pdfPersonalInfo.portfolio}>
              {pdfPersonalInfo.portfolio}
            </Link>
          </View>
        </View>

        {/* ── Professional Summary ── */}
        <View style={styles.section}>
          <SectionTitle>Professional Summary</SectionTitle>
          <Text style={styles.summary}>{pdfProfessionalSummary}</Text>
        </View>

        {/* ── Professional Experience ── */}
        <View style={styles.section}>
          <SectionTitle>Professional Experience</SectionTitle>
          {pdfExperiences.map((exp) => (
            <View key={exp.id} style={styles.expItem}>
              <View style={styles.expHeaderRow}>
                <Text style={styles.expTitle}>{exp.title}</Text>
                {exp.period && <Text style={styles.expPeriod}>{exp.period}</Text>}
              </View>
              <View style={styles.expCompanyRow}>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expLocation}>{exp.location}</Text>
              </View>
              <View style={styles.bulletList}>
                {exp.description.map((item, i) => (
                  <Bullet key={i} text={item} />
                ))}
              </View>
              <View style={styles.chipRow}>
                {exp.technologies.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* ── Technical Skills (ATS-friendly keyword lists — no % bars) ── */}
        <View style={styles.section}>
          <SectionTitle>Technical Skills</SectionTitle>
          {pdfSkillCategories.map((cat) => (
            <View key={cat.title} style={styles.skillLine}>
              <Text style={styles.skillLabel}>{cat.title}:</Text>
              <Text style={styles.skillValue}>
                {cat.skills.map((s) => s.name).join(', ')}
              </Text>
            </View>
          ))}

          <View style={[styles.skillLine, { marginTop: 4 }]}>
            <Text style={styles.skillLabel}>Integrations:</Text>
            <Text style={styles.skillValue}>
              {pdfAdditionalSkills.integrations.join(', ')}
            </Text>
          </View>

          <View style={styles.skillLine}>
            <Text style={styles.skillLabel}>Leadership:</Text>
            <Text style={styles.skillValue}>
              {pdfAdditionalSkills.leadership.join(', ')}
            </Text>
          </View>
        </View>

        {/* ── Featured Projects ── */}
        <View style={styles.section}>
          <SectionTitle>Featured Projects</SectionTitle>
          {pdfFeaturedProjects.map((project) => (
            <View key={project.id} style={styles.projectItem}>
              <View style={styles.projectHeaderRow}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDate}>{project.date}</Text>
              </View>
              <Text style={styles.projectDesc}>{project.description}</Text>
              <Link style={styles.projectUrl} src={project.url}>
                {project.url}
              </Link>
              <View style={styles.chipRow}>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* ── Education ── */}
        <View style={styles.section}>
          <SectionTitle>Education</SectionTitle>
          <Text style={styles.degree}>{pdfEducation.degree}</Text>
          <Text style={styles.institution}>{pdfEducation.institution}</Text>
          <Text style={styles.eduDetails}>
            {pdfEducation.location} · {pdfEducation.period}
          </Text>
        </View>

      </Page>
    </Document>
  )
}
