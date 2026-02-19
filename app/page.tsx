'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'  // Add this


export default function Home() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const professions = [
    'Architect',
    'Interior Designer',
    'Urban Planner',
    'Visionary Designer'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentProfession = professions[textIndex]
      if (isDeleting) {
        setDisplayText(currentProfession.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % professions.length)
        }
      } else {
        setDisplayText(currentProfession.substring(0, displayText.length + 1))
        if (displayText.length === currentProfession.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex])

  return (
    <>
      {/* Hero Section */}
      {/* Added pt-16 (mobile) and md:pt-20 (iPad/Desktop) to clear the navbar */}
      <div className="relative flex items-center justify-center
        bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] px-4 md:px-12 lg:px-24 py-6 md:py-10 text-gray-900
        pt-26 md:pt-40"
      >
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">

          {/* LEFT SECTION: GREETING + TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-2 md:space-y-6 flex flex-col justify-center text-center md:text-left order-2 md:order-1"
          >
            {/* Adjusted text size for iPad visibility */}
            <p className="text-sm md:text-xl lg:text-3xl font-bold tracking-wide  md:mt-8">
              <span className="text-[#7C3AED]">Hello,</span>{' '}
              <span className="text-gray-800 text-xs md:text-lg font-medium">
                I’m shaping spaces that inspire
              </span>
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#15173D]">
              Ar. Atif Khan
            </h1>

            <div className="text-lg md:text-2xl lg:text-3xl h-8 md:h-14">
              I am a <span className="text-[#7C3AED] font-semibold">{displayText}</span>
              <span className="ml-1 animate-pulse text-[#7C3AED]">|</span>
            </div>

            <p className="text-gray-700 text-xs md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Crafting meaningful spaces that blend functionality with aesthetics. 
              From residential to commercial projects, each design tells a unique story 
              through light, material, and form.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-1">
              <Link 
                href="/cv.pdf" 
                target="_blank"
                  rel="noopener noreferrer" 
                className="px-5 py-2 md:px-8 md:py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-lg shadow-lg hover:scale-105 transform transition-all font-medium text-xs md:text-base"
              >
                View  CV
              </Link>
              <Link 
                href="/contact" 
                className="px-5 py-2 md:px-8 md:py-3 border-2 border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[#7C3AED]/10 hover:scale-105 transform transition-all font-medium text-xs md:text-base"
              >
                Let's Talk
              </Link>
            </div>
            
          </motion.div>

          {/* RIGHT SECTION: PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end relative mt-2 md:mt-0 order-1 md:order-2 mb-2">
            
            {/* --- PROFILE IMAGE --- */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 
                         w-[140px] h-[140px] 
                         sm:w-[180px] sm:h-[180px] 
                         md:w-[280px] md:h-[280px] 
                         lg:w-[450px] lg:h-[450px] 
                         rounded-[20px] md:rounded-[30px] overflow-hidden 
                         shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
            >
              <img
                src="/images/profile/profile.jpg"
                alt="Atif Khan"
                className="w-full h-full object-cover"
              />
              
              {/* Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(124,58,237,0)',
                    '0 0 20px rgba(124,58,237,0.2)',
                    '0 0 0px rgba(124,58,237,0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
                className="absolute inset-0 rounded-[20px] md:rounded-[30px] pointer-events-none"
              />
            </motion.div>
            
          </div>
        </div>
      </div>

      <FeaturedProjects />
         <Stats />
         <Testimonials/>
    </>
  )
}