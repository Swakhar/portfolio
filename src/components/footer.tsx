import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 heading-gradient">Swakhar Dey</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Senior Software Engineer with 9+ years of expertise in Ruby on Rails, 
              full-stack development, and technical leadership. Building scalable solutions 
              from fintech platforms to AI-powered applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Swakhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/swakhar-dey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:swakhar.me@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">📍 Bruchköbel, Germany</p>
              <p className="text-sm">
                <Link
                  href="mailto:swakhar.me@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ✉️ swakhar.me@gmail.com
                </Link>
              </p>
              <p className="text-sm">
                <Link
                  href="tel:+4917632875065"
                  className="hover:text-white transition-colors duration-200"
                >
                  📱 +49176-32875065
                </Link>
              </p>
              <p className="text-sm text-green-400 mt-3">
                💼 Open for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Swakhar Dey. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> Next.js & TypeScript
            </p>
            <span className="text-gray-600">•</span>
            <p className="text-gray-400 text-sm">
              Deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
