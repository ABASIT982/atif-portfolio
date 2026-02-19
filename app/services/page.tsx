'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Building2, PenTool, Compass, Ruler, Palette, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Custom homes, villas, and apartments tailored to your lifestyle",
      features: [
        "Custom home design",
        "Villa architecture",
        "Apartment renovation",
        "Interior design integration",
        "Sustainable home solutions"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Architecture",
      description: "Functional and inspiring spaces for businesses",
      features: [
        "Office buildings",
        "Retail spaces",
        "Restaurants & cafes",
        "Hotels & hospitality",
        "Corporate interiors"
      ]
    },
    {
      icon: PenTool,
      title: "Interior Design",
      description: "Beautiful interiors that blend comfort with style",
      features: [
        "Space planning",
        "Material selection",
        "Furniture design",
        "Lighting design",
        "Color consultation"
      ]
    },
    {
      icon: Compass,
      title: "Urban Planning",
      description: "Sustainable solutions for communities and cities",
      features: [
        "Master planning",
        "Urban design",
        "Landscape architecture",
        "Public spaces",
        "Community development"
      ]
    },
    {
      icon: Ruler,
      title: "Construction Documentation",
      description: "Detailed drawings and specifications for construction",
      features: [
        "Working drawings",
        "Structural details",
        "MEP coordination",
        "Material specifications",
        "Building permits"
      ]
    },
    {
      icon: Palette,
      title: "3D Visualization",
      description: "Photorealistic renders and walkthroughs",
      features: [
        "3D modeling",
        "Photorealistic rendering",
        "Virtual tours",
        "Animation",
        "Presentation materials"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your vision, requirements, and budget"
    },
    {
      step: "02",
      title: "Concept Design",
      desc: "Initial sketches and concepts based on discussions"
    },
    {
      step: "03",
      title: "Design Development",
      desc: "Detailed drawings, material selection, 3D renders"
    },
    {
      step: "04",
      title: "Documentation",
      desc: "Construction drawings and specifications"
    },
    {
      step: "05",
      title: "Execution",
      desc: "Site visits, contractor coordination, project management"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] pt-32 pb-20">
      <div className="px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white text-sm tracking-wider font-semibold inline-block px-6 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20 mb-4">
            OUR SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">What We Offer</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-[#7C3AED] flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[#7C3AED] hover:text-[#6D28D9] text-sm font-medium transition-colors"
                >
                  Inquire <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#15173D] text-white p-8 rounded-3xl shadow-xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Our Design Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-[#7C3AED] text-sm font-bold mb-2">{step.step}</div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-white/60 text-xs">{step.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block text-white/20 mt-2">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">12+ Years Experience</h3>
              <p className="text-xs text-gray-600">Proven track record in diverse projects</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">50+ Happy Clients</h3>
              <p className="text-xs text-gray-600">Trusted by homeowners and businesses</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">On-Time Delivery</h3>
              <p className="text-xs text-gray-600">Projects completed within schedule</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Let's discuss how we can bring your vision to life.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-lg hover:scale-105 transition-all font-medium shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[#7C3AED]/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}