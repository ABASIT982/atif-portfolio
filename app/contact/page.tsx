'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  Globe,
  Building2,
  Heart,
  ChevronDown
} from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [mounted, setMounted] = useState(false)
  
  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mounted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["atif.khan@architect.com", "studio@atifmirza.com"],
      action: "mailto:atif.khan@architect.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "tel:+919876543210",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      details: ["B-42, Defence Colony", "New Delhi, 110024"],
      action: "https://maps.google.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "#",
      color: "from-purple-500 to-purple-600"
    }
  ]

  // FIXED: Social links with proper colors and hover states
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", bgColor: "hover:bg-pink-500", iconColor: "text-pink-500" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", bgColor: "hover:bg-blue-600", iconColor: "text-blue-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", bgColor: "hover:bg-sky-500", iconColor: "text-sky-500" },
    { icon: Github, href: "https://github.com", label: "GitHub", bgColor: "hover:bg-gray-800", iconColor: "text-gray-800" }
  ]

  const projectTypes = [
    "Residential",
    "Commercial",
    "Interior Design",
    "Urban Planning",
    "Renovation",
    "Consultation"
  ]

  const budgets = [
    "Under ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "Above ₹1 Crore"
  ]

  const stats = [
    { icon: MessageCircle, value: "24/7", label: "Support" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Calendar, value: "12+", label: "Years" },
    { icon: Globe, value: "5+", label: "Cities" }
  ]

  const faqItems = [
    {
      icon: Building2,
      question: "What areas do you serve?",
      answer: "I primarily work across Delhi NCR, Mumbai, and Bangalore, but I'm open to pan-India projects."
    },
    {
      icon: Clock,
      question: "How long does a typical project take?",
      answer: "Residential projects typically take 3-6 months for design, commercial projects 6-12 months depending on scale."
    },
    {
      icon: Mail,
      question: "How do I get a quote?",
      answer: "Fill out the contact form with your project details, and I'll get back to you within 24 hours with an estimate."
    },
    {
      icon: Users,
      question: "Do you work with other architects?",
      answer: "Yes, I collaborate with a network of talented architects and designers for larger projects."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Don't render mouse-dependent styles until mounted
  const parallaxStyle = mounted ? {
    x: mousePosition.x,
    y: mousePosition.y
  } : {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] pt-32 pb-20 overflow-hidden">
      
      <div className="px-6 md:px-16 lg:px-24 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white text-sm tracking-wider font-semibold inline-block px-10 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20 mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Let's Connect</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Reach out and let's create something extraordinary together.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                <Send className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition"
                  >
                    <option value="" className="text-gray-500">Select type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="text-gray-900">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition"
                  >
                    <option value="" className="text-gray-500">Select budget</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget} className="text-gray-900">{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full relative overflow-hidden group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative z-10 px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-xl font-medium flex items-center justify-center gap-2 ${
                    formStatus === 'sending' ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Something went wrong
                    </>
                  )}
                </motion.div>
                
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </button>

              {/* Form Note */}
              <p className="text-xs text-gray-500 text-center">
                * Required fields. I'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Right - Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Map Card */}
<div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-xl">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
      <MapPin className="w-5 h-5 text-[#7C3AED]" />
    </div>
    <h2 className="text-xl font-bold text-gray-900">Visit Our Studio</h2>
  </div>
  
  {/* Real Google Map */}
  <div className="relative h-[250px] rounded-xl overflow-hidden mb-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6616.601337867499!2d71.44957839372263!3d33.984810088953864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shayatabad%20phase%203%20rohela%20market!5e0!3m2!1sen!2s!4v1771521669783!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0"
  ></iframe>
</div>

<Link
  href="https://maps.app.goo.gl/MQ2VziQAWR9aHe4Q6"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#7C3AED] hover:text-[#6D28D9] text-sm flex items-center gap-1 transition-colors"
>
  Open in Google Maps
  <Send className="w-3 h-3 rotate-45" />
</Link></div>

            {/* Social Links Card */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                  <Heart className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Connect With Me</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Follow me on social media for latest projects and design inspiration.
              </p>
              
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
                      className={`p-3 bg-white rounded-xl shadow-md border border-gray-100 ${social.bgColor} transition-all group`}
                    >
                      <Icon className={`w-5 h-5 ${social.iconColor} group-hover:text-white transition-colors`} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* FAQ/Support Card */}
<div className="bg-gradient-to-r from-[#15173D] to-[#1E1F4A] p-6 rounded-3xl shadow-xl text-white">
              <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-white/80 text-sm mb-4">
                For urgent inquiries, feel free to call or WhatsApp me directly.
              </p>
              <div className="flex gap-3">
                <Link
                  href="tel:+919876543210"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-center text-sm hover:bg-white/20 transition flex items-center justify-center gap-2 text-white"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-xl text-center text-sm hover:bg-green-500/30 transition flex items-center justify-center gap-2 text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl text-center"
              >
                <div className="inline-flex p-3 bg-[#7C3AED]/10 rounded-full mb-3">
                  <Icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 bg-gradient-to-r ${info.color} text-white rounded-xl mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.a>
            )
          })}
        </motion.div>

        {/* FAQ Section - DROPDOWN VERSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const Icon = item.icon
              const isOpen = openFAQ === index

              return (
                <div
                  key={index}
                  className="border border-[#7C3AED]/20 rounded-xl overflow-hidden bg-white/50"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#7C3AED]/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                        <Icon className="w-4 h-4 text-[#7C3AED]" />
                      </div>
                      <h3 className="font-bold text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#7C3AED]" />
                    </motion.div>
                  </button>

                  {/* Answer with animation */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-14 pr-5">
                          <p className="text-gray-600 text-sm">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}