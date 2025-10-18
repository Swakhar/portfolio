'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
	{
		id: 1,
		title: 'Castlumen - AI Content Repurposing Platform',
		description:
			'Co-founded SaaS platform that transforms content across 7 social media formats using AI. Built complete full-stack solution with Python FastAPI backend, Next.js frontend, integrated multiple AI services, Stripe payments, and WordPress publishing automation.',
		image: '/image/castlumen.png',
		technologies: [
			'Next.js',
			'Python',
			'FastAPI',
			'AI Integration',
			'Stripe',
			'WordPress API',
			'Social Media APIs',
		],
		githubUrl: null,
		liveUrl: 'https://castlumen.com/',
		featured: true,
		date: '2025',
		isBusinessProject: false,
	},
	{
		id: 2,
		title: 'Mein-IT - IT Services Platform',
		description:
			'Partner-founded IT services platform providing comprehensive business solutions. Developed complete ecosystem with Next.js frontend, Laravel backend, and dedicated admin panel. Handles service management, client portals, and business operations.',
		image: '/image/mein-it.png',
		technologies: [
			'Next.js',
			'Laravel',
			'PHP',
			'Admin Panel',
			'Client Portal',
			'Business Management',
		],
		githubUrl: null,
		liveUrl: 'https://mein-it.com/',
		featured: true,
		date: '2025',
		isBusinessProject: true,
	},
	{
		id: 3,
		title: 'QR Ordering System',
		description:
			'A complete restaurant ordering system with QR code integration. Customers can scan QR codes to view menus, place orders, and make payments. Features real-time order tracking, menu management, and payment processing.',
		image: '/api/placeholder/400/250',
		technologies: ['Ruby on Rails', 'QR Code', 'Payment Gateway', 'Real-time'],
		githubUrl: 'https://github.com/Swakhar/qr-ordering',
		liveUrl: null,
		featured: false,
		date: '2025',
	},
	{
		id: 4,
		title: 'Dimensional Shift Deluxe',
		description:
			'A 2D platformer game built with Phaser.js featuring multiple dimensions, challenging levels, and smooth gameplay mechanics. Players navigate through different dimensional planes to solve puzzles and overcome obstacles.',
		image: '/api/placeholder/400/250',
		technologies: ['Phaser.js', 'JavaScript', 'HTML5 Canvas', 'Game Development', '2D Graphics'],
		githubUrl: 'https://github.com/Swakhar/dimensional_shift_deluxe',
		liveUrl: null,
		featured: false,
		date: '2025',
	},
	{
		id: 5,
		title: 'React Widget Library',
		description:
			'A reusable React widget component library with customizable UI elements. Provides developers with pre-built, responsive components that can be easily integrated into any React application with minimal configuration.',
		image: '/api/placeholder/400/250',
		technologies: ['React', 'Responsive Design'],
		githubUrl: 'https://github.com/Swakhar/react-widget',
		liveUrl: null,
		featured: false,
		date: '2019',
	},
]

export function Projects() {
	const featuredProjects = projects.filter((project) => project.featured)
	const otherProjects = projects.filter((project) => !project.featured)

	return (
		<section id="projects" className="py-20">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
						Featured Projects
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A showcase of my recent work and personal projects that demonstrate
						my skills and passion for development.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden card-hover"
						>
							<div className="relative">
								{project.featured && project.image ? (
									<div className="h-48 relative overflow-hidden">
										<Image
											src={project.image}
											alt={`${project.title} screenshot`}
											fill
											className="object-cover hover:scale-105 transition-transform duration-300"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
								) : (
									<div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
										<div className="text-white text-lg font-medium">
											Project Image
										</div>
									</div>
								)}
								<div className="absolute top-4 right-4">
									<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
										<Star className="h-3 w-3 mr-1" />
										Featured
									</span>
								</div>
								{project.isBusinessProject && (
									<div className="absolute top-4 left-4">
										<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
											Business
										</span>
									</div>
								)}
							</div>

							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<h3 className="text-xl font-bold">{project.title}</h3>
									<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
										<Calendar className="h-4 w-4 mr-1" />
										{project.date}
									</div>
								</div>

								<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex items-center space-x-4">
									{project.githubUrl && (
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
										>
											<Github className="h-4 w-4 mr-2" />
											Code
										</Link>
									)}
									{project.liveUrl && (
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
										>
											<ExternalLink className="h-4 w-4 mr-2" />
											Live Demo
										</Link>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Other Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h3 className="text-2xl font-bold mb-8 text-center">
						Other Projects
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{otherProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover"
							>
								<div className="flex items-center justify-between mb-3">
									<h4 className="text-lg font-semibold">{project.title}</h4>
									<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
										<Calendar className="h-4 w-4 mr-1" />
										{project.date}
									</div>
								</div>

								<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>

								<div className="flex items-center space-x-3">
									{project.githubUrl && (
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
										>
											<Github className="h-4 w-4 mr-1" />
											<span className="text-sm">Code</span>
										</Link>
									)}
									{project.liveUrl && (
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
										>
											<ExternalLink className="h-4 w-4 mr-1" />
											<span className="text-sm">Demo</span>
										</Link>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
