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
  portfolio: 'https://swakhar-dey-portfolio.vercel.app',
}

export const professionalSummary = `Senior Software Engineer with 9+ years of experience architecting scalable web applications across fintech, e-commerce, and AI-powered SaaS platforms. Currently leading a team of 5 engineers at Finlink GmbH, specializing in Ruby on Rails full-stack development with deep expertise in microservices, cloud infrastructure (Azure, Docker), React, and Next.js — delivering 50%+ database performance gains and 80% workflow automation improvements. Actively integrating modern AI tools and LLM APIs into production systems, bridging strong backend engineering with the latest in AI-assisted development.`

export const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Finlink GmbH',
    location: 'Remote (Berlin, Germany)',
    period: 'Sept 2021 - Present',
    description: [
      'Led technical architecture and sprint planning for a team of 5 engineers, owning end-to-end delivery of complex financing platform integrations',
      'Improved database performance by 50% by implementing Redis caching strategies, cutting financing query response times significantly',
      'Architected and delivered end-to-end API integrations with Europace and Ehyp, including webhook handling, JSON payload mapping, and event-driven data pipelines — processing high-volume financial transactions in compliance with German regulatory standards',
      'Established Azure container infrastructure with NAT gateway configuration for secure ING API whitelisting, ensuring regulatory compliance',
      'Automated loan application workflows via cron job scheduling, reducing manual processing overhead by 80%',
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
      'Integrated secure payment processing with Wirecard and Stripe across high-volume B2B SaaS platforms, ensuring PCI compliance and fraud protection',
      'Developed robust RESTful APIs serving both web and mobile applications using Ruby, handling thousands of daily transactions',
      'Built comprehensive travel booking platform frontend using React and Redux, integrating complex search and filtering capabilities',
      'Created reusable Ruby gem library for consistent styling across multiple microservices, improving development efficiency',
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
]

export const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Ruby on Rails', level: 95 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'PostgreSQL / SQL', level: 90 },
      { name: 'Redis', level: 85 },
      { name: 'Laravel / PHP', level: 88 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Vue.js', level: 82 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Azure', level: 92 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD (GitHub Actions)', level: 85 },
      { name: 'Heroku', level: 85 },
      { name: 'Terraform / Bicep', level: 82 },
      { name: 'AWS', level: 80 },
    ],
  },
  {
    title: 'AI & Developer Tools',
    skills: [
      { name: 'AI API Integration', level: 88 },
      { name: 'GitHub Copilot', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'Claude AI / Anthropic', level: 85 },
      { name: 'OpenAI / GPT-4', level: 85 },
      { name: 'Cursor AI', level: 85 },
      { name: 'Prompt Engineering', level: 82 },
    ],
  },
]

export const additionalSkills = {
  integrations: [
    'REST API Integration',
    'Webhooks',
    'JSON Payload Mapping',
    'OpenAPI / Swagger',
    'Event-driven Architecture',
    'Stripe Integration',
    'Wirecard',
    'Microservices',
    'WebSockets / Hotwire',
    'WordPress API',
    'Social Media APIs',
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
      'Worked as lead/senior engineer with remote freelancing team to build SaaS platform that transforms content across 7 social media formats using AI. Built complete full-stack solution with Python FastAPI backend, Next.js frontend, integrated multiple AI services, Stripe payments, and WordPress publishing automation.',
    technologies: [
      'Next.js',
      'Python',
      'FastAPI',
      'AI Integration',
      'Stripe',
      'WordPress API',
      'Social Media APIs',
    ],
    url: 'https://castlumen.com',
    date: '2025',
  },
  {
    id: 2,
    title: 'Meindokan - Online Grocery Store',
    description:
      'CTO and Co-founder of online grocery store platform. Built entire architecture, implemented core parts in backend (Laravel) and frontend (Next.js), and managed remote freelancing team. Developed complete e-commerce solution with real-time inventory, delivery management, payment processing, and customer portal.',
    technologies: [
      'Next.js',
      'Laravel',
      'PHP',
      'E-Commerce',
			'Payment Gateway',
			'Business Management',
    ],
    url: 'https://meindokan.com',
    date: '2025',
  },
  {
		id: 3,
		title: 'QR Ordering System',
		description:
			'Modern QR-based restaurant ordering system built with Ruby on Rails. Features contactless ordering via QR codes with multi-language support (DE, EN, TR, IT), real-time kitchen display with WebSocket updates, Stripe payment integration with split payments, and comprehensive analytics dashboard.',
		technologies: ['Ruby on Rails', 'Stripe', 'WebSocket', 'PostgreSQL', 'Tailwind CSS', 'Hotwire'],
		url: 'https://github.com/Swakhar/qr-ordering',
		date: '2025',
	},
]

export const education = {
  degree: 'Bachelor of Science in Computer Science and Engineering',
  institution: 'Military Institute of Science and Technology (MIST)',
  location: 'Dhaka, Bangladesh',
  period: '2012 - 2016',
}
