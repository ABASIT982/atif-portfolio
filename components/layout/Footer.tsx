'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  Heart,
  Building2,
  PenTool,
  Home,
  Compass,
  Ruler
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Residential Design', href: '/projects', icon: Home },
    { name: 'Commercial Architecture', href: '/projects', icon: Building2 },
    { name: 'Interior Design', href: '/projects', icon: PenTool },
    { name: 'Urban Planning', href: '/projects', icon: Compass },
  ]

  const contactInfo = [
    { icon: Mail, text: 'atif.khan@architect.com', href: 'mailto:atif.khan@architect.com' },
    { icon: Mail, text: 'studio@atifmirza.com', href: 'mailto:studio@atifmirza.com' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Phone, text: '+91 98765 43211', href: 'tel:+919876543211' },
    { icon: MapPin, text: 'B-42, Defence Colony, New Delhi - 110024', href: 'https://maps.google.com' },
    { icon: Clock, text: 'Mon-Fri: 9AM-7PM | Sat: 10AM-4PM', href: '#' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
  ]

  return (
    <footer className="relative bg-[#15173D] text-white overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#C4B5FD] to-[#7C3AED]" />
      
      {/* Floating particles - subtle */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#7C3AED]/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div> */}

      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#C4B5FD] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                AM
              </div>
              <div>
                <h3 className="text-xl font-bold">Atif Khan</h3>
                <p className="text-white/60 text-sm">Architecture Studio</p>
              </div>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Creating spaces that inspire, transform, and endure. Award-winning architectural design across India.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className={`p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#7C3AED] rounded-full group-hover:w-2 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <Icon className="w-3 h-3 text-[#7C3AED] group-hover:scale-110 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full" />
            </h3>
            
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    {item.href !== '#' ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{item.text}</span>
                      </Link>
                    ) : (
                      <div className="flex items-start gap-3 text-white/70 text-sm">
                        <Icon className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                        <span>{item.text}</span>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
{/* Bottom Bar */}
{/* Bottom Bar - 3 Centered Rows */}
<div className="pt-8 mt-8 border-t border-white/10">
  
  {/* Row 1 - Copyright */}
{/* Row 1 - Copyright */}
<div className="text-center mb-4">
  <p className="text-white/60 text-xs">
    © {currentYear} Atif Khan Architecture Studio. All rights reserved.
    <span className="inline-flex items-center gap-1 ml-1">
      Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by{' '}
      <Link 
        href="https://github.com/ABASIT982" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-[#7C3AED] transition-colors font-medium"
      >
        Abdul-Basit
      </Link>
    </span>
  </p>
</div>

  {/* Row 2 - Credits */}
  <div className="text-center mb-4">
    <p className="text-white/30 text-xs">
      Designed with 🏛️ for architectural excellence
    </p>
  </div>

  {/* Row 3 - Legal Links */}
  <div className="text-center">
    <div className="flex flex-wrap justify-center gap-1 text-xs">
      <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
        Privacy Policy
      </Link>
      <span className="text-white/20">|</span>
      <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
        Terms of Service
      </Link>
      <span className="text-white/20">|</span>
      <Link href="/sitemap" className="text-white/50 hover:text-white transition-colors">
        Sitemap
      </Link>
    </div>
  </div>

  {/* Back to Top Button - Separate but still there */}
  <div className="text-center mt-6">
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex p-2 bg-white/10 rounded-lg hover:bg-[#7C3AED] transition-colors group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  </div>
</div>
      </div>
    </footer>
  )
}