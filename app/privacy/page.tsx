'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Mail, Calendar, ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-[#7C3AED]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
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
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Atif Mirza Architecture Studio, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Information We Collect
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span><strong>Personal Information:</strong> Name, email address, phone number when you contact us</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span><strong>Project Details:</strong> Information about your architectural needs and preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span><strong>Usage Data:</strong> How you interact with our website</span>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>To respond to your inquiries and provide architectural consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>To send you project updates and relevant information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>To improve our website and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to external sites. We are not responsible for the privacy practices of other websites.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Request correction of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-[#15173D]/5 p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#7C3AED]" />
                Contact Us
              </h2>
              <p className="text-gray-700 mb-2">If you have questions about this privacy policy, please contact:</p>
              <p className="text-[#7C3AED] font-medium">Email: privacy@atifarchitect.com</p>
              <p className="text-[#7C3AED] font-medium">Phone: +91 98765 43210</p>
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