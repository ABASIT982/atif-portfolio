'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation' // Add this import
import { motion } from 'framer-motion'  // Add this import


export default function Header() {
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const pathname = usePathname() // Get current path


    // Update active state based on pathname
  useEffect(() => {
    if (pathname === '/') {
      setActive('Home')
    } else if (pathname.startsWith('/projects')) {
      setActive('Projects')
    } else if (pathname.startsWith('/about')) {
      setActive('About')
    } else if (pathname.startsWith('/contact')) {
      setActive('Contact')
    } else if (pathname.startsWith('/gallery')) {
      setActive('Gallery')
    }
  }, [pathname])

  // Check screen size
  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const navItems = ['Home', 'Projects', 'About', 'Contact', 'Gallery']

  return (
    <header className="fixed top-0 w-full z-50 bg-[#15173D] backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-16 xl:px-24 py-2 md:py-4 relative">

        {/* Logo */}
<Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
  {/* Icon - smaller on mobile */}
  <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#C4B5FD] flex items-center justify-center text-white font-bold shadow-lg">
    <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base">AR</span>
  </div>

  {/* Text Section */}
  <div className="flex flex-col">
    {/* Name */}
    <span className="text-white font-bold tracking-wide 
      text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg"
      style={{ transform: "scaleX(1.08)", display: "inline-block", transformOrigin: "left" }}>
      ATIF
    </span>
    
    {/* Architect Text */}
    <span className="text-[#C4B5FD] font-light tracking-wider 
      text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]
      -mt-0.5">
      ARCHITECT
    </span>
  </div>
</Link>

        {/* Center Navigation - Always visible on all screens */}
        <nav className="flex-1 flex justify-center mx-2 sm:mx-3 md:mx-4">
          <div className={`flex items-center rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg
            ${
              isMobile 
                ? 'gap-4 px-2 py-1'  // Mobile
                : isTablet 
                ? 'gap-8 px-3 py-1.5'  // Tablet
                : 'gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 px-2 sm:px-3 md:px-4 lg:px-10 py-1 md:py-1.5 lg:py-3' // Desktop
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`relative transition-all duration-300 font-medium whitespace-nowrap ${
                  isMobile ? 'text-[8px]' : isTablet ? 'text-[10px]' : 'text-[10px] sm:text-xs md:text-sm lg:text-sm'
                } ${
                  active === item
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item}
                {/* Active Bubble */}
                {active === item && (
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] shadow-lg
                    ${
                      isMobile ? 'w-2 h-0.5' : 
                      isTablet ? 'w-3 h-0.5' : 
                      'w-4 h-0.5 sm:w-5 sm:h-0.5 md:w-6 md:h-1'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Buttons - Only on larger screens */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link
            href="/consultation"
            className="px-4 xl:px-6 py-1.5 xl:py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-xs xl:text-sm shadow-lg hover:opacity-90 transition whitespace-nowrap"
          >
            Free Consultation
          </Link>
          <Link
            href="/services"
            className="px-4 xl:px-6 py-1.5 xl:py-2 rounded-xl bg-transparent border-2 border-white text-xs xl:text-sm hover:bg-[#7C3AED]/10 transition whitespace-nowrap"
          >
            Services
          </Link>
        </div>

        {/* Mobile menu button - only for the extra buttons menu */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1 sm:p-1.5 md:p-2 rounded-md hover:bg-white/10 transition"
          >
            {mobileOpen ? <X size={isTablet ? 18 : 16} /> : <Menu size={isTablet ? 18 : 16} />}
          </button>
        </div>

        {/* Mobile Menu - Only for extra buttons */}
        {mobileOpen && (
          <div className="absolute top-full right-0 w-48 sm:w-56 bg-[#15173D] border border-white/10 lg:hidden shadow-lg rounded-bl-2xl rounded-br-2xl mt-1 mr-3 sm:mr-4">
            <div className="flex flex-col p-3 gap-2">
              <Link
                href="/consultation"
                className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]text-white text-xs sm:text-sm shadow-lg hover:opacity-90 transition text-center"
                onClick={() => setMobileOpen(false)}
              >
                Free Consultation
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 rounded-xl bg-transparent border-2 border-white text-xs sm:text-sm hover:bg-[#7C3AED]/10 transition text-center"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}