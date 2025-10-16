'use client'

import { motion } from 'framer-motion'

const skillCategories = [
	{
		title: 'Backend Development',
		skills: [
			{ name: 'Ruby on Rails', level: 95 },
			{ name: 'Laravel/PHP', level: 88 },
			{ name: 'Python/FastAPI', level: 85 },
			{ name: 'RESTful APIs', level: 95 },
			{ name: 'PostgreSQL', level: 90 },
			{ name: 'Redis', level: 85 }
		]
	},
	{
		title: 'Frontend Development',
		skills: [
			{ name: 'React', level: 92 },
			{ name: 'Next.js', level: 90 },
			{ name: 'TypeScript', level: 88 },
			{ name: 'Vue.js', level: 82 },
			{ name: 'JavaScript', level: 95 },
			{ name: 'Tailwind CSS', level: 90 }
		]
	},
	{
		title: 'DevOps & Cloud',
		skills: [
			{ name: 'Docker', level: 85 },
			{ name: 'Azure', level: 88 },
			{ name: 'AWS', level: 80 },
			{ name: 'Heroku', level: 92 },
			{ name: 'CI/CD', level: 85 },
			{ name: 'Terraform', level: 78 }
		]
	}
]

export function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
						Skills & Technologies
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						9+ years of hands-on experience across full-stack development,
						from Ruby on Rails mastery to modern frontend frameworks and cloud
						infrastructure.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
						>
							<h3 className="text-xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
								{category.title}
							</h3>

							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
										}}
										viewport={{ once: true }}
									>
										<div className="flex justify-between items-center mb-2">
											<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
												{skill.name}
											</span>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												{skill.level}%
											</span>
										</div>

										<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{
													duration: 1,
													delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3
												}}
												viewport={{ once: true }}
												className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<h3 className="text-2xl font-bold mb-6">
						Payment & Integration Expertise
					</h3>
					<div className="flex flex-wrap justify-center gap-3 mb-8">
						{[
							'Stripe Integration', 'Wirecard', 'AI/ML Integration',
							'Microservices', 'Event-driven Architecture', 'RSS Processing'
						].map((skill) => (
							<span
								key={skill}
								className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
							>
								{skill}
							</span>
						))}
					</div>

					<h3 className="text-2xl font-bold mb-6">Business & Leadership</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{[
							'Technical Leadership', 'Project Management', 'Team Coordination', 'Business Strategy',
							'Agile/Scrum', 'Architecture Design', 'Code Review', 'Mentoring'
						].map((skill) => (
							<span
								key={skill}
								className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
							>
								{skill}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
