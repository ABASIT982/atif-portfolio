'use client'

import { Award, Users, Home, Star, TrendingUp, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { 
    icon: Award, 
    value: '12+', 
    label: 'Years of Excellence',
    description: 'Serving since 2012',
    color: 'from-[#7C3AED] to-[#8B5CF6]',
    bgColor: 'bg-[#7C3AED]/10',
    delay: 0.1
  },
  { 
    icon: Users, 
    value: '50+', 
    label: 'Happy Clients',
    description: 'Across India',
    color: 'from-[#6D28D9] to-[#7C3AED]',
    bgColor: 'bg-[#6D28D9]/10',
    delay: 0.2
  },
  { 
    icon: Home, 
    value: '80+', 
    label: 'Projects Completed',
    description: 'Residential & Commercial',
    color: 'from-[#5B21B6] to-[#6D28D9]',
    bgColor: 'bg-[#5B21B6]/10',
    delay: 0.3
  },
  { 
    icon: Star, 
    value: '20+', 
    label: 'Design Awards',
    description: 'National & International',
    color: 'from-[#8B5CF6] to-[#C4B5FD]',
    bgColor: 'bg-[#8B5CF6]/10',
    delay: 0.4
  }
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#7C3AED]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6D28D9]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white text-sm tracking-wider font-semibold inline-block px-6 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20 mb-4">
            BY THE NUMBERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Impact in Numbers</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A decade of dedication to architectural excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card with gradient border */}
                <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/80 hover:border-[#7C3AED]/30 transition-all duration-300 overflow-hidden">
                  
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon with colored background */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-4 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors`} />
                  </div>

                  {/* Value with gradient */}
                  <div className="relative z-10 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#15173D] to-[#7C3AED] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#7C3AED]/20 rounded-tr-xl"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#7C3AED]/20 rounded-bl-xl"></div>
                </div>

                {/* Floating shadow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500 rounded-2xl`}></div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] mx-auto mt-12 rounded-full"
        />
      </div>
    </section>
  )
}