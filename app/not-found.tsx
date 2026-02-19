'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Compass, ArrowLeft, Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] flex items-center justify-center px-6">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#6D28D9]/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl text-center"
      >
        {/* 404 Number */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl md:text-9xl font-bold text-[#15173D] mb-4"
        >
          4<span className="text-[#7C3AED]">0</span>4
        </motion.div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#7C3AED]/10 rounded-full">
            <Frown className="w-12 h-12 text-[#7C3AED]" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#15173D] text-white rounded-lg hover:bg-[#7C3AED] transition-all group"
          >
            <Home className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </Link>
          
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[#7C3AED]/10 transition-all group"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            Browse Projects
          </Link>
        </div>

        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#7C3AED] transition-colors text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors">Home</Link>
            <span className="text-gray-300">|</span>
            <Link href="/projects" className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors">Projects</Link>
            <span className="text-gray-300">|</span>
            <Link href="/about" className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors">About</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors">Contact</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}