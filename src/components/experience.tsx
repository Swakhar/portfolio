'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
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
      'Design technical solutions, create detailed JIRA specifications, and coordinate sprint planning while maintaining hands-on development'
    ],
		technologies: [
			'Ruby on Rails',
			'Redis',
			'Azure',
			'Microservices',
			'Terraform',
			'Bicep',
			'CI/CD',
			'REST APIs'
		]
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
			'Successfully deployed full-scale chat widget redesign, improving user engagement metrics by implementing modern UI/UX patterns',
			'Collaborated with AI/ML teams to integrate natural language processing capabilities into conversational interfaces'
		],
		technologies: ['Ruby on Rails', 'Vue.js', 'REST APIs', 'JavaScript', 'AI Integration']
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
			'Optimized application performance through strategic refactoring and modern Rails conventions adoption'
		],
		technologies: ['Ruby on Rails', 'React', 'Redux', 'ActiveStorage', 'ERB', 'PostgreSQL']
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
			'Contributed to major e-commerce platform development serving Swiss market (Nile), handling high-volume product catalogs'
		],
		technologies: [
			'Ruby',
			'React',
			'Redux',
			'jQuery',
			'Stripe API',
			'Wirecard',
			'RESTful APIs',
			'PostgreSQL'
		]
	},
  {
    id: 5,
    title: 'Backend Developer (Contract)',
    company: 'Jampack',
    location: 'Remote',
    description: [
      'Developed backend functionality for Ruby on Rails application, focusing on payment processing and event management',
      'Integrated Stripe payment gateway for seamless transaction processing and subscription management',
      'Implemented event-driven backend architecture to handle real-time notifications and user interactions',
      'Resolved critical bugs and enhanced existing features, improving overall application stability and performance'
    ],
    technologies: ['Ruby on Rails', 'Stripe API', 'Event-driven Architecture', 'PostgreSQL', 'REST APIs']
  },
]

export function Experience() {
	return (
		<section id="experience" className="py-20">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
						Professional Experience
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						9+ years of progressive software engineering experience, from individual
						contributor to technical lead, driving innovation in fintech and
						enterprise solutions.
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className={`relative flex items-center ${
									index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} flex-col md:flex-row`}
							>
								{/* Timeline dot */}
								<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

								<div
									className={`w-full md:w-5/12 ${
										index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
									} pl-16 md:pl-0`}
								>
									<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
										<div className="flex flex-wrap items-center gap-2 mb-3">
											{exp.period && (
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
													<Calendar className="h-4 w-4 mr-1" />
													{exp.period}
												</div>
											)}
											<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
												<MapPin className="h-4 w-4 mr-1" />
												{exp.location}
											</div>
										</div>

										<h3 className="text-xl font-bold mb-2">{exp.title}</h3>

										<div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
											<Building className="h-4 w-4 mr-2" />
											<span className="font-medium">{exp.company}</span>
										</div>

										<ul className="space-y-2 mb-4">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
												>
													• {item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
