'use client'

import { motion } from 'framer-motion'
import { Target, Heart } from 'lucide-react'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Senior Software Engineer with 9+ years of experience building scalable web applications
            and delivering innovative solutions across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/image/profile.jpeg"
                    alt="Swakhar Dey - Senior Software Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently serving as a Senior Software Engineer at Finlink GmbH, I've been crafting 
                web applications since February 2016. My journey began with WordPress and PHP, evolved 
                through Laravel, and for the past 9.5 years, I've specialized in Ruby on Rails 
                development, building everything from MVPs to enterprise-scale solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond my Rails expertise, I'm passionate about modern frontend technologies like 
                React and Next.js, and I've expanded my toolkit with FastAPI for Python projects. 
                My DevOps experience spans AWS, Azure, Heroku, and Docker, ensuring robust deployment 
                pipelines and scalable infrastructure.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not building applications, you'll find me exploring emerging technologies, 
                or working on freelance projects that challenge me to think outside the box.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md card-hover">
                <Target className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Transform complex business requirements into clean, maintainable code 
                  that scales with your business needs.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md card-hover">
                <Heart className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Passion</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building robust backend systems with Ruby on Rails while creating 
                  seamless user experiences with modern frontend frameworks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
