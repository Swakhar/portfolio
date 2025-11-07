'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'
import { experiences } from '@/data/resume-data'

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
