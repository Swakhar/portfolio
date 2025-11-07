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

// Sanitize all data for PDF generation to avoid font encoding issues
const pdfPersonalInfo = sanitizeObjectForPDF(personalInfo)
const pdfProfessionalSummary = sanitizeObjectForPDF(professionalSummary)
const pdfExperiences = sanitizeObjectForPDF(experiences)
const pdfSkillCategories = sanitizeObjectForPDF(skillCategories)
const pdfAdditionalSkills = sanitizeObjectForPDF(additionalSkills)
const pdfFeaturedProjects = sanitizeObjectForPDF(featuredProjects)
const pdfEducation = sanitizeObjectForPDF(education)

// Styles for the PDF - Professional Design
const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 45,
    lineHeight: 1.6,
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: 3,
    borderBottomColor: '#2563eb',
    backgroundColor: '#f8fafc',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 18,
    letterSpacing: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 9.5,
    color: '#6b7280',
    gap: 6,
    lineHeight: 1.4,
  },
  contactItem: {
    marginRight: 14,
    paddingRight: 14,
    borderRight: 1,
    borderRightColor: '#d1d5db',
  },
  contactItemLast: {
    borderRight: 0,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginTop: 20,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: 2,
    borderBottomColor: '#3b82f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summary: {
    fontSize: 10.5,
    lineHeight: 1.7,
    color: '#4b5563',
    textAlign: 'justify',
    paddingHorizontal: 4,
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 4,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'baseline',
  },
  jobTitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    letterSpacing: 0.3,
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 3,
  },
  locationPeriod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9.5,
    color: '#6b7280',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  bulletPoints: {
    marginLeft: 14,
    marginTop: 6,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  bullet: {
    width: 6,
    fontSize: 10,
    marginRight: 8,
    marginTop: 1,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.6,
    color: '#4b5563',
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 5,
  },
  tech: {
    fontSize: 8.5,
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
    fontWeight: 'semibold',
  },
  skillsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  skillColumn: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 4,
    borderLeft: 3,
    borderLeftColor: '#3b82f6',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: 9.5,
    alignItems: 'center',
  },
  skillName: {
    color: '#4b5563',
    flex: 1,
  },
  skillLevel: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 9,
    backgroundColor: '#dbeafe',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  additionalSkillsContainer: {
    marginTop: 10,
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 4,
  },
  additionalSkillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 6,
  },
  additionalSkill: {
    fontSize: 8.5,
    backgroundColor: '#d1fae5',
    color: '#065f46',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
    fontWeight: 'semibold',
  },
  projectItem: {
    marginBottom: 14,
    paddingLeft: 4,
    borderLeft: 3,
    borderLeftColor: '#93c5fd',
    paddingBottom: 10,
  },
  projectTitle: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  projectDescription: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#4b5563',
    marginBottom: 6,
  },
  projectUrl: {
    fontSize: 9,
    color: '#2563eb',
    marginBottom: 6,
    fontStyle: 'italic',
  },
  educationItem: {
    marginBottom: 6,
    paddingLeft: 4,
  },
  degree: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10.5,
    color: '#2563eb',
    marginTop: 3,
    fontWeight: 'semibold',
  },
  educationDetails: {
    fontSize: 9.5,
    color: '#6b7280',
    marginTop: 3,
    fontStyle: 'italic',
  },
  twoColumnSection: {
    flexDirection: 'row',
    gap: 15,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  divider: {
    marginVertical: 8,
    borderBottom: 1,
    borderBottomColor: '#e5e7eb',
  },
})

export function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{pdfPersonalInfo.name}</Text>
          <Text style={styles.jobTitle}>{pdfPersonalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{pdfPersonalInfo.email}</Text>
            <Text style={styles.contactItem}>{pdfPersonalInfo.phone}</Text>
            <Text style={styles.contactItem}>{pdfPersonalInfo.location}</Text>
          </View>
          <View style={[styles.contactInfo, { marginTop: 4 }]}>
            <Link style={[styles.contactItem, styles.link]} src={`https://${pdfPersonalInfo.linkedin}`}>
              {pdfPersonalInfo.linkedin}
            </Link>
            <Link style={[styles.contactItem, styles.link]} src={`https://${pdfPersonalInfo.github}`}>
              {pdfPersonalInfo.github}
            </Link>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{pdfProfessionalSummary}</Text>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {pdfExperiences.map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <Text style={styles.jobTitleText}>{exp.title}</Text>
              <Text style={styles.company}>{exp.company}</Text>
              <View style={styles.locationPeriod}>
                <Text>{exp.location}</Text>
                {exp.period && <Text>{exp.period}</Text>}
              </View>
              <View style={styles.bulletPoints}>
                {exp.description.slice(0, 4).map((item, index) => (
                  <View key={index} style={styles.bulletPoint}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            {pdfSkillCategories.map((category) => (
              <View key={category.title} style={styles.skillColumn}>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{category.title}</Text>
                  {category.skills.map((skill) => (
                    <View key={skill.name} style={styles.skillItem}>
                      <Text style={styles.skillName}>{skill.name}</Text>
                      <Text style={styles.skillLevel}>{skill.level}%</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Additional Skills */}
          <View style={styles.additionalSkillsContainer}>
            <Text style={styles.skillCategoryTitle}>Payment & Integration Expertise</Text>
            <View style={styles.additionalSkillsRow}>
              {pdfAdditionalSkills.paymentIntegration.map((skill) => (
                <Text key={skill} style={styles.additionalSkill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.additionalSkillsContainer}>
            <Text style={styles.skillCategoryTitle}>Business & Leadership</Text>
            <View style={styles.additionalSkillsRow}>
              {pdfAdditionalSkills.leadership.map((skill) => (
                <Text key={skill} style={styles.additionalSkill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Featured Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {pdfFeaturedProjects.map((project) => (
            <View key={project.id} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Link style={styles.projectUrl} src={project.url}>
                {project.url}
              </Link>
              <View style={styles.technologies}>
                {project.technologies.map((tech) => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationItem}>
            <Text style={styles.degree}>{pdfEducation.degree}</Text>
            <Text style={styles.institution}>{pdfEducation.institution}</Text>
            <Text style={styles.educationDetails}>
              {pdfEducation.location} • {pdfEducation.period}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
