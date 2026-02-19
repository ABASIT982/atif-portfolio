'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Oceanfront Villa",
      category: "Residential",
      location: "Goa",
      year: "2024",
      image: "/images/projects/project-1/main.jpg"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Mumbai",
      year: "2023",
      image: "/images/projects/project-2/main.jpg"
    },
    {
      id: 3,
      title: "Urban Housing Complex",
      category: "Residential",
      location: "Delhi",
      year: "2024",
      image: "/images/projects/project-3/main.jpg"
    },
    {
      id: 4,
      title: "Cultural Center",
      category: "Public",
      location: "Bangalore",
      year: "2023",
      image: "/images/projects/project-4/main.jpg"
    },
    {
      id: 5,
      title: "Lakeside Retreat",
      category: "Residential",
      location: "Udaipur",
      year: "2024",
      image: "/images/projects/project-5/main.jpg"
    },
    {
      id: 6,
      title: "Tech Office Interior",
      category: "Interior",
      location: "Hyderabad",
      year: "2023",
      image: "/images/projects/project-6/main.jpg"
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter)

  const categories = ['all', 'residential', 'commercial', 'public', 'interior']

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] pt-32 pb-20">
      <div className="px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All Projects</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive collection of my architectural work spanning residential, commercial, and public spaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                filter === cat
                  ? 'bg-[#7C3AED] text-white shadow-lg'
                  : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-[#7C3AED]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="group cursor-pointer">
                <div className="relative h-80 bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/60 group-hover:border-[#7C3AED]/30 transition-all duration-500">
                  
                  {/* ACTUAL IMAGE - ADDED HERE */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Semi-transparent colored overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    project.id === 1 ? 'from-[#7C3AED]/40 to-[#C4B5FD]/30' :
                    project.id === 2 ? 'from-[#6D28D9]/40 to-[#9F7AEA]/30' :
                    project.id === 3 ? 'from-[#5B21B6]/40 to-[#8B5CF6]/30' :
                    project.id === 4 ? 'from-[#7C3AED]/40 to-[#A78BFA]/30' :
                    project.id === 5 ? 'from-[#6D28D9]/40 to-[#C4B5FD]/30' :
                    'from-[#5B21B6]/40 to-[#9F7AEA]/30'
                  } mix-blend-overlay group-hover:scale-110 transition-transform duration-700`}></div>
                  
                  {/* Project number */}
                  <div className="absolute top-4 right-4 text-white/80 text-4xl font-bold drop-shadow-lg z-10">
                    0{project.id}
                  </div>

                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                      <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white border-2 border-white/80 px-6 py-2 rounded-full text-sm tracking-wider hover:bg-white hover:text-[#7C3AED] transition-all duration-300 transform group-hover:scale-105">
                      View Details
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                    <p className="text-gray-500 text-sm">{project.category} • {project.year}</p>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}