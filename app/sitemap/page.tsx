'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home, 
  FolderOpen, 
  User, 
  Mail, 
  Image, 
  Shield, 
  Scale,
  Map,
  ArrowLeft,
  ChevronRight
} from 'lucide-react'

export default function SitemapPage() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Welcome to Atif Mirza Architecture Studio" },
        { name: "Projects", href: "/projects", description: "View our architectural portfolio" },
        { name: "About", href: "/about", description: "Learn about Ar. Atif Khan" },
        { name: "Contact", href: "/contact", description: "Get in touch with us" },
        { name: "Gallery", href: "/gallery", description: "Browse our project gallery" }
      ]
    },
    {
      title: "Legal Pages",
      icon: Shield,
      links: [
        { name: "Privacy Policy", href: "/privacy", description: "How we handle your data" },
        { name: "Terms of Service", href: "/terms", description: "Terms and conditions" },
        { name: "Sitemap", href: "/sitemap", description: "Site structure overview" }
      ]
    },
    {
      title: "Project Pages",
      icon: FolderOpen,
      links: [
        { name: "Oceanfront Villa", href: "/projects/1", description: "Residential project in Goa" },
        { name: "Corporate Headquarters", href: "/projects/2", description: "Commercial project in Mumbai" },
        { name: "Urban Housing Complex", href: "/projects/3", description: "Residential project in Delhi" },
        { name: "Cultural Center", href: "/projects/4", description: "Public project in Bangalore" },
        { name: "Lakeside Retreat", href: "/projects/5", description: "Residential project in Udaipur" },
        { name: "Tech Office Interior", href: "/projects/6", description: "Interior project in Hyderabad" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] pt-32 pb-20">
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#6D28D9] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#7C3AED]/10 rounded-full">
              <Map className="w-8 h-8 text-[#7C3AED]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Sitemap</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore all pages and content available on Atif Mirza Architecture Studio
          </p>
        </motion.div>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/80 shadow-xl"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#7C3AED]/20">
                  <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                    <Icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>

                {/* Links List */}
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-start gap-2 p-2 rounded-lg hover:bg-[#7C3AED]/5 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-[#7C3AED] mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <span className="text-gray-900 font-medium group-hover:text-[#7C3AED] transition-colors">
                            {link.name}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[#15173D] text-white p-6 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#7C3AED]">12+</div>
              <div className="text-xs text-white/70">Total Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#7C3AED]">6</div>
              <div className="text-xs text-white/70">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#7C3AED]">3</div>
              <div className="text-xs text-white/70">Legal Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#7C3AED]">{currentYear}</div>
              <div className="text-xs text-white/70">Current Year</div>
            </div>
          </div>
        </motion.div>

        {/* XML Sitemap Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Also available:{' '}
            <Link 
              href="/sitemap.xml" 
              className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors underline underline-offset-2"
            >
              XML Sitemap
            </Link>{' '}
            for search engines
          </p>
        </motion.div>
      </div>
    </div>
  )
}