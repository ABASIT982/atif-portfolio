'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, Mail, MapPin, Users, CheckCircle, ArrowRight, Video, MessageCircle } from 'lucide-react'

export default function ConsultationPage() {
  const benefits = [
    "Personalized design advice for your project",
    "Budget estimation and feasibility study",
    "Material and style recommendations",
    "Preliminary timeline discussion",
    "Answers to all your architectural questions",
    "No obligation, just expert guidance"
  ]

  const consultationTypes = [
    {
      title: "In-Person Consultation",
      price: "Free",
      duration: "60 mins",
      icon: Users,
      description: "Face-to-face meeting at our studio",
      features: ["Site visit discussion", "Material samples viewing", "Detailed Q&A session"]
    },
    {
      title: "Video Consultation",
      price: "Free",
      duration: "45 mins",
      icon: Video,
      description: "Virtual meeting via Zoom/Google Meet",
      features: ["Screen sharing for designs", "Flexible scheduling", "Same expert advice"]
    },
    {
      title: "Phone Consultation",
      price: "Free",
      duration: "30 mins",
      icon: Phone,
      description: "Quick discussion over call",
      features: ["Initial project discussion", "Quick questions", "Follow-up available"]
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
            FREE CONSULTATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Let's Discuss Your Project</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Book a no-obligation consultation with Ar. Atif Khan to discuss your vision, requirements, and how we can bring your dream project to life.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#15173D] text-white p-8 rounded-3xl shadow-xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Consultation Types */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Consultation Type</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {consultationTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl"
              >
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{type.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-[#7C3AED]">{type.price}</span>
                  <span className="text-sm text-gray-500">• {type.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-xl hover:opacity-90 transition text-sm font-medium"
                >
                  Book Now
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book", desc: "Choose consultation type and pick a time" },
              { step: "2", title: "Connect", desc: "Meet in person, via video, or phone" },
              { step: "3", title: "Discuss", desc: "Share your vision and get expert advice" },
              { step: "4", title: "Plan", desc: "Receive initial recommendations" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Book your free consultation today and take the first step toward your dream space.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-lg hover:scale-105 transition-all font-medium shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[#7C3AED]/10 transition-all"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}