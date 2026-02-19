'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, Mail, Calendar, ArrowLeft, CheckCircle } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] pt-32 pb-20">
      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
        
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
              <Scale className="w-8 h-8 text-[#7C3AED]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mt-4">Last updated: February 19, 2026</p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/80 shadow-xl"
        >
          <div className="space-y-8">
            
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website, you agree to be bound by these Terms of Service. If you disagree with any part, please do not use our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Architectural Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide architectural design, consultation, and project management services. Detailed scope of work will be outlined in individual project agreements.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All designs, drawings, and content on this website are the property of Atif Mirza Architecture Studio and are protected by copyright laws.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7C3AED] mt-1" />
                  <span>You may not reproduce or distribute our work without written permission</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7C3AED] mt-1" />
                  <span>Project designs remain our intellectual property until full payment</span>
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                User Responsibilities
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Provide accurate information during consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Communicate project requirements clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Adhere to payment schedules as agreed</span>
                </li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Payment terms are outlined in individual project contracts. Typically, we require:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>30% advance payment to begin design work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Progress payments at key milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Final payment upon project completion</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive for excellence but cannot be held liable for indirect damages. Our liability is limited to the amount paid for our services.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#15173D]/5 p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#7C3AED]" />
                Questions About Terms
              </h2>
              <p className="text-gray-700 mb-2">For questions regarding these terms, contact:</p>
              <p className="text-[#7C3AED] font-medium">Email: legal@atifarchitect.com</p>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2 text-gray-500 text-sm border-t pt-6">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: February 19, 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}