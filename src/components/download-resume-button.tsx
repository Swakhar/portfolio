'use client'

import { useState } from 'react'
import { Download, FileText, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function DownloadResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      
      // Fetch the PDF from the API route
      const response = await fetch('/api/resume')
      
      if (!response.ok) {
        throw new Error('Failed to download resume')
      }

      // Get the blob from the response
      const blob = await response.blob()
      
      // Create a download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Swakhar_Dey_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      
      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
    >
      {isDownloading ? (
        <>
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="h-5 w-5 mr-2" />
          Download Resume
        </>
      )}
    </motion.button>
  )
}

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

export function ResumeButton({ 
  variant = 'primary', 
  size = 'md',
  showIcon = true 
}: ResumeButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      
      const response = await fetch('/api/resume')
      
      if (!response.ok) {
        throw new Error('Failed to download resume')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Swakhar_Dey_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100'
      case 'outline':
        return 'border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600'
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3'
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center ${getSizeClasses()} ${getVariantClasses()} rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed card-hover`}
    >
      {isDownloading ? (
        <>
          <Loader2 className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} mr-2 animate-spin`} />
          Generating...
        </>
      ) : (
        <>
          {showIcon && <FileText className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} mr-2`} />}
          Resume PDF
        </>
      )}
    </button>
  )
}
