// Central data source for resume content
// Update this file to automatically update both website and PDF resume

export const personalInfo = {
  name: 'Swakhar Dey',
  title: 'Senior Software Engineer',
  email: 'swakhar.me@gmail.com',
  phone: '+49176-32875065',
  location: 'Bruchköbel, Germany',
  linkedin: 'linkedin.com/in/swakhar-dey',
  github: 'github.com/Swakhar',
  portfolio: 'swakhardey.dev',
}

export const professionalSummary = `Senior Software Engineer with 9+ years of experience building scalable web applications and delivering innovative solutions across diverse industries. Currently serving as a Senior Software Engineer at Finlink GmbH, specializing in Ruby on Rails development for 9.5 years. Expert in full-stack development, cloud architecture, and leading technical teams. Proven track record in transforming complex business requirements into clean, maintainable code while driving innovation in fintech and enterprise solutions.`

export const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Finlink GmbH',
    location: 'Remote (Berlin, Germany)',
    period: 'Sept 2021 - Present',
    description: [
      'Lead technical architecture and project management for a team of 5 engineers, driving end-to-end delivery of complex financing solutions',
      'Transformed internal financing platform achieving 95% response rate from top-tier German banks through strategic system redesigns',
      'Revolutionized database performance by 50% implementing Redis caching strategies, significantly reducing financing query response times',
      'Architected and deployed multiple microservices from scratch for Europace/Ehyp API integration, handling high-volume financial data processing',
      'Established Azure container infrastructure with NAT gateway configuration for secure ING API whitelisting and compliance',
      'Automated loan application workflows using advanced cron job scheduling, reducing manual processing overhead by 80%',
      'Integrated CI/CD pipelines for microservices deployment using GitHub Actions with containerized Docker solutions and orchestration',
      'Leveraged Bicep and Terraform for Azure infrastructure provisioning, specifically NAT gateway integration and job container deployment',
      'Design technical solutions, create detailed JIRA specifications, and coordinate sprint planning while maintaining hands-on development',
    ],
    technologies: [
      'Ruby on Rails',
      'Redis',
      'Azure',
      'Microservices',
      'Terraform',
      'Bicep',
      'CI/CD',
      'REST APIs',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'mercury.ai',
    location: 'Remote',
    period: 'Nov 2020 - Aug 2021',
    description: [
      'Architected and maintained complete backend infrastructure using Ruby on Rails for AI-powered chatbot platform',
      'Developed dynamic Vue.js chat widgets with extensive customization options, supporting multiple design frameworks',
      'Collaborated with AI/ML teams to integrate natural language processing capabilities into conversational interfaces',
    ],
    technologies: ['Ruby on Rails', 'Vue.js', 'REST APIs', 'JavaScript', 'AI Integration'],
  },
  {
    id: 3,
    title: 'Rails Full Stack Developer',
    company: 'Jovoto GmbH',
    location: 'Berlin, Germany',
    period: 'Nov 2019 - Oct 2020',
    description: [
      'Executed comprehensive Rails framework migration from version 4 to 6, ensuring zero-downtime deployment',
      'Implemented ActiveStorage for modern file handling, replacing legacy attachment systems',
      'Led frontend modernization initiative, transitioning from ERB templates to React with Redux state management',
      'Optimized application performance through strategic refactoring and modern Rails conventions adoption',
    ],
    technologies: ['Ruby on Rails', 'React', 'Redux', 'ActiveStorage', 'ERB', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'WellDev Limited',
    location: 'Dhaka, Bangladesh',
    period: 'Feb 2016 - Oct 2019',
    description: [
      'Developed robust RESTful APIs serving both web and mobile applications using Ruby, handling thousands of daily transactions',
      'Built comprehensive travel booking platform frontend using React and Redux, integrating complex search and filtering capabilities',
      'Created reusable Ruby gem library for consistent styling across multiple microservices, improving development efficiency',
      'Integrated secure payment processing with Wirecard and Stripe, ensuring PCI compliance and fraud protection',
      'Built complete dating application from ground up using Ruby backend with jQuery frontend, supporting real-time messaging',
      'Contributed to major e-commerce platform development serving Swiss market (Nile), handling high-volume product catalogs',
    ],
    technologies: [
      'Ruby',
      'React',
      'Redux',
      'jQuery',
      'Stripe API',
      'Wirecard',
      'RESTful APIs',
      'PostgreSQL',
    ],
  },
  {
    id: 5,
    title: 'Backend Developer (Contract)',
    company: 'Jampack',
    location: 'Remote',
    period: 'Contract Position',
    description: [
      'Developed backend functionality for Ruby on Rails application, focusing on payment processing and event management',
      'Integrated Stripe payment gateway for seamless transaction processing and subscription management',
      'Implemented event-driven backend architecture to handle real-time notifications and user interactions',
      'Resolved critical bugs and enhanced existing features, improving overall application stability and performance',
    ],
    technologies: [
      'Ruby on Rails',
      'Stripe API',
      'Event-driven Architecture',
      'PostgreSQL',
      'REST APIs',
    ],
  },
]

export const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Ruby on Rails', level: 95 },
      { name: 'Laravel/PHP', level: 88 },
      { name: 'Python/FastAPI', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Vue.js', level: 82 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Azure', level: 88 },
      { name: 'AWS', level: 80 },
      { name: 'Heroku', level: 92 },
      { name: 'CI/CD', level: 85 },
      { name: 'Terraform', level: 78 },
    ],
  },
]

export const additionalSkills = {
  paymentIntegration: [
    'Stripe Integration',
    'Wirecard',
    'AI/ML Integration',
    'Microservices',
    'Event-driven Architecture',
    'RSS Processing',
  ],
  leadership: [
    'Technical Leadership',
    'Project Management',
    'Team Coordination',
    'Business Strategy',
    'Agile/Scrum',
    'Architecture Design',
    'Code Review',
    'Mentoring',
  ],
}

export const featuredProjects = [
  {
    id: 1,
    title: 'Castlumen - AI Content Repurposing Platform',
    description:
      'Co-founded SaaS platform that transforms content across 7 social media formats using AI. Built complete full-stack solution with Python FastAPI backend, Next.js frontend, integrated multiple AI services, Stripe payments, and WordPress publishing automation.',
    technologies: [
      'Next.js',
      'Python',
      'FastAPI',
      'AI Integration',
      'Stripe',
      'WordPress API',
      'Social Media APIs',
    ],
    url: 'https://castlumen.com/',
    date: '2025',
  },
  {
    id: 2,
    title: 'Mein-IT - IT Services Platform',
    description:
      'Partner-founded IT services platform providing comprehensive business solutions. Developed complete ecosystem with Next.js frontend, Laravel backend, and dedicated admin panel. Handles service management, client portals, and business operations.',
    technologies: [
      'Next.js',
      'Laravel',
      'PHP',
      'Admin Panel',
      'Client Portal',
      'Business Management',
    ],
    url: 'https://mein-it.com/',
    date: '2025',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science and Engineering',
  institution: 'Military Institute of Science and Technology (MIST)',
  location: 'Dhaka, Bangladesh',
  period: '2012 - 2016',
}
