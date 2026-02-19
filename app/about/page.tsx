'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Leaf, 
  Lightbulb, 
  Hourglass, 
  Handshake,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Users,
  Target,
  Sparkles,
  PenTool,
  Ruler,
  Compass,
  Home,
  Building2,
  TrendingUp,
  CheckCircle2
} from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const education = [
    {
      degree: "Master of Architecture",
      institution: "School of Planning & Architecture, Delhi",
      year: "2012 - 2014",
      description: "Specialized in Sustainable Urban Design"
    },
    {
      degree: "Bachelor of Architecture",
      institution: "Jamia Millia Islamia, Delhi",
      year: "2007 - 2012",
      description: "Gold Medalist - Outstanding Academic Achievement"
    }
  ]

  const experience = [
    {
      role: "Principal Architect",
      firm: "Atif Mirza Studio",
      period: "2018 - Present",
      description: "Leading architectural design for residential and commercial projects across India"
    },
    {
      role: "Senior Architect",
      firm: "Design Consortium",
      period: "2015 - 2018",
      description: "Managed large-scale commercial projects and mentored junior architects"
    },
    {
      role: "Junior Architect",
      firm: "Urban Design Lab",
      period: "2012 - 2015",
      description: "Worked on residential projects and urban planning initiatives"
    }
  ]

  const awards = [
    {
      title: "Young Architect of the Year",
      organization: "Indian Institute of Architects",
      year: "2023"
    },
    {
      title: "Best Residential Design",
      organization: "Architecture Digest Awards",
      year: "2022"
    },
    {
      title: "Sustainable Design Excellence",
      organization: "Green Building Council",
      year: "2021"
    },
    {
      title: "IIA Gold Medal",
      organization: "Indian Institute of Architects",
      year: "2014"
    }
  ]

  const skills = [
    { name: "Architectural Design", level: 95, icon: Home },
    { name: "Interior Design", level: 90, icon: PenTool },
    { name: "3D Visualization", level: 85, icon: Compass },
    { name: "Project Management", level: 92, icon: TrendingUp },
    { name: "Sustainable Design", level: 88, icon: Leaf },
    { name: "Urban Planning", level: 80, icon: Building2 },
    { name: "AutoCAD", level: 95, icon: Ruler },
    { name: "Revit/BIM", level: 85, icon: Target },
    { name: "SketchUp", level: 90, icon: Sparkles },
    { name: "Adobe Creative Suite", level: 82, icon: PenTool }
  ]

  const philosophies = [
    {
      icon: Leaf,
      title: "Sustainable First",
      description: "Every design begins with environmental responsibility and long-term sustainability."
    },
    {
      icon: Lightbulb,
      title: "Human-Centered",
      description: "Spaces should serve people first - their needs, comfort, and aspirations."
    },
    {
      icon: Hourglass,
      title: "Timeless Aesthetics",
      description: "Creating designs that remain beautiful and relevant for generations."
    },
    {
      icon: Handshake,
      title: "Collaborative Process",
      description: "Working closely with clients to bring their vision to life."
    }
  ]

  const clients = [
    { name: "Godrej Properties", logo: "G" },
    { name: "Lodha Group", logo: "L" },
    { name: "Prestige Estates", logo: "P" },
    { name: "DLF", logo: "D" },
    { name: "Brigade Group", logo: "B" },
    { name: "Sobha Ltd.", logo: "S" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] pt-32 pb-20 overflow-hidden">
      {/* Floating Particles */}
      {/* <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#7C3AED]/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div> */}

      <div className="px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white text-sm tracking-wider font-semibold inline-block px-10 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20 mb-4">
            ABOUT ME
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Architect & Visionary</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Creating spaces that inspire, transform, and endure for generations
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image with floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#7C3AED]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[350px] h-[350px] rounded-full border-2 border-[#C4B5FD]/30"
            />
            
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                x: mousePosition.x / 4,
                y: mousePosition.y / 4
              }}
              className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img
                src="/images/profile/profile.jpg"
                alt="Ar. Atif Khan"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15173D]/80 via-transparent to-transparent" />
              
              {/* Name overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 text-white"
              >
                <h3 className="text-2xl font-bold">Ar. Atif Khan</h3>
                <p className="text-white/80">Principal Architect</p>
              </motion.div>
            </motion.div>

            {/* Floating badges */}
            {/* <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-5 -right-5 bg-[#15173D] text-white px-6 py-3 rounded-xl shadow-xl border-2 border-[#7C3AED] z-20"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-bold">4+ Awards</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-white text-[#7C3AED] px-6 py-3 rounded-xl shadow-xl border-2 border-[#7C3AED] z-20"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-bold">12+ Years</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              Designing Dreams,
              <br />Building Reality
              <motion.span 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full"
              />
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              With over 12 years of experience in architecture and interior design, I've had the privilege of 
              creating spaces that not only meet functional needs but also inspire and elevate the human experience.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My approach combines sustainable practices with innovative design, ensuring that every project 
              is environmentally responsible while maintaining aesthetic excellence. Based in Delhi, I've worked 
              on projects across India, from intimate residences to large-scale commercial developments.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <span className="text-3xl font-bold text-[#7C3AED]">50+</span>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <span className="text-3xl font-bold text-[#7C3AED]">12+</span>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <span className="text-3xl font-bold text-[#7C3AED]">20+</span>
                <p className="text-gray-600 text-sm">Design Awards</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <span className="text-3xl font-bold text-[#7C3AED]">100%</span>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Section with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                      <Icon className="w-4 h-4 text-[#7C3AED]" />
                    </div>
                    <span className="font-medium text-gray-900 flex-1">{skill.name}</span>
                    <span className="text-[#7C3AED] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tabs for Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
  <button
    onClick={() => setActiveTab('experience')}
    className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${
      activeTab === 'experience'
        ? 'bg-[#7C3AED] text-white shadow-lg'
        : 'bg-white/50 text-gray-700 hover:bg-[#7C3AED]/20'
    }`}
  >
    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
    Experience
  </button>
  
  <button
    onClick={() => setActiveTab('education')}
    className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${
      activeTab === 'education'
        ? 'bg-[#7C3AED] text-white shadow-lg'
        : 'bg-white/50 text-gray-700 hover:bg-[#7C3AED]/20'
    }`}
  >
    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
    Education
  </button>
  
  <button
    onClick={() => setActiveTab('awards')}
    className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${
      activeTab === 'awards'
        ? 'bg-[#7C3AED] text-white shadow-lg'
        : 'bg-white/50 text-gray-700 hover:bg-[#7C3AED]/20'
    }`}
  >
    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
    Awards
  </button>
</div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl">
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-[#7C3AED]"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#7C3AED]" />
                    <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                    <p className="text-[#7C3AED] font-medium">{item.firm}</p>
                    <p className="text-gray-500 text-sm mb-2">{item.period}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-[#7C3AED]"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#7C3AED]" />
                    <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                    <p className="text-[#7C3AED] font-medium">{item.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{item.year}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'awards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4"
                  >
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-[#7C3AED] text-sm">{item.organization}</p>
                      <p className="text-gray-500 text-sm">{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/70 backdrop-blur-sm h-24 rounded-xl border border-white shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-[#7C3AED]">{client.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-[#15173D] text-white p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-lg hover:scale-105 transition-all font-medium shadow-lg flex items-center gap-2"
            >
              <Handshake className="w-4 h-4" />
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#15173D] transition-all flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}