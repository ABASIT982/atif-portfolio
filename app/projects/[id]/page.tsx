'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id
  const [activeImage, setActiveImage] = useState(0)

  // Project data - in real app, this would come from a database
  const projects = {
    '1': {
      title: "Oceanfront Villa",
      category: "Residential",
      location: "Goa",
      year: "2024",
      area: "5,000 sq ft",
      status: "Completed",
      client: "Private Client",
      description: "A stunning oceanfront villa that embraces the coastal landscape while providing luxurious living spaces. The design maximizes natural light and ventilation while creating seamless indoor-outdoor transitions.",
      longDescription: "Perched on the cliffs of Goa, this villa offers breathtaking views of the Arabian Sea. The architecture responds to the site's natural contours, creating terraced living spaces that cascade toward the ocean. Local materials and traditional craftsmanship blend with modern design principles to create a timeless residence. The design features large glass panels that open completely to merge indoor and outdoor spaces, a infinity pool that appears to merge with the sea, and carefully curated sightlines that frame the ocean views from every room.",
      images: [
        "/images/projects/project-1/main.jpg",
        "/images/projects/project-1/main.jpg",
        "/images/projects/project-1/main.jpg",
        "/images/projects/project-1/main.jpg"
      ],
      features: [
        "Infinity pool overlooking the ocean",
        "Floor-to-ceiling glass panels",
        "Natural stone and timber finishes",
        "Outdoor terraces on every level",
        "Rainwater harvesting system",
        "Solar panel integration"
      ]
    },
    '2': {
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Mumbai",
      year: "2023",
      area: "50,000 sq ft",
      status: "Completed",
      client: "TechCorp Industries",
      description: "A modern corporate headquarters designed to foster collaboration and innovation while reflecting the company's brand identity.",
      longDescription: "Located in Mumbai's business district, this 12-story tower redefines the modern workplace. The facade features a dynamic pattern of glass and metal that changes appearance throughout the day. Inside, flexible floor plates and abundant natural light create an inspiring work environment. The design prioritizes employee wellbeing with breakout spaces, a rooftop garden, and a state-of-the-art fitness center. Sustainable features include a double-skin facade for thermal insulation and a rainwater harvesting system.",
      images: [
        "/images/projects/project-2/main.jpg",
        "/images/projects/project-2/main.jpg",
        "/images/projects/project-2/main.jpg",
        "/images/projects/project-2/main.jpg"
      ],
      features: [
        "LEED Gold certified",
        "Smart building technology",
        "Rooftop garden with city views",
        "Flexible workspace design",
        "Energy-efficient HVAC system",
        "EV charging stations"
      ]
    },
    '3': {
      title: "Urban Housing Complex",
      category: "Residential",
      location: "Delhi",
      year: "2024",
      area: "100,000 sq ft",
      status: "In Progress",
      client: "Urban Development Authority",
      description: "A sustainable urban housing complex that creates community while respecting privacy and maximizing green space.",
      longDescription: "This mixed-use development in Delhi combines residential units with retail and community spaces. The design incorporates extensive green terraces, rainwater harvesting, and solar panels. Each unit has private outdoor space, while shared gardens and amenities foster community interaction. The project aims to set a new standard for sustainable urban living in India, with 70% of the site dedicated to green space and pedestrian-friendly pathways connecting all buildings.",
      images: [
        "/images/projects/project-3/main.jpg",
        "/images/projects/project-3/main.jpg",
        "/images/projects/project-3/main.jpg",
        "/images/projects/project-3/main.jpg"

      ],
      features: [
        "120 residential units",
        "Community gardens on every level",
        "Rainwater harvesting",
        "Solar power generation",
        "Electric vehicle charging",
        "Children's play areas"
      ]
      
    },
    '4': {
      title: "Cultural Center",
      category: "Public",
      location: "Bangalore",
      year: "2023",
      area: "30,000 sq ft",
      status: "Completed",
      client: "City Council",
      description: "A vibrant cultural hub celebrating local art, music, and theater through flexible performance and exhibition spaces.",
      longDescription: "This cultural center in Bangalore serves as a gathering place for artists and the community. The design features a flexible main hall that can transform from a theater to an exhibition space, along with artist studios, a cafe, and outdoor amphitheater. The building's facade incorporates traditional Karnataka craftsmanship with modern materials, creating a dialogue between heritage and contemporary design.",
      images: [
        "/images/projects/project-4/main.jpg",
        "/images/projects/project-4/main.jpg",
        "/images/projects/project-4/main.jpg",
        "/images/projects/project-4/main.jpg"
      ],
      features: [
        "Flexible 500-seat auditorium",
        "Artist-in-residence studios",
        "Rooftop sculpture garden",
        "Cafe with outdoor seating",
        "Workshop spaces",
        "Community gallery"
      ]
    },
    '5': {
      title: "Lakeside Retreat",
      category: "Residential",
      location: "Udaipur",
      year: "2024",
      area: "3,500 sq ft",
      status: "Completed",
      client: "Private Client",
      description: "A tranquil weekend home that embraces its lakeside setting with expansive views and seamless indoor-outdoor living.",
      longDescription: "Nestled on the banks of Lake Pichola, this retreat offers uninterrupted views of the water and surrounding hills. The design draws inspiration from traditional Rajasthani architecture while incorporating modern sustainable principles. Courtyards, jharokha-inspired windows, and shaded terraces create comfortable outdoor spaces year-round. Local sandstone and handcrafted tiles connect the home to its regional context.",
      images: [
        "/images/projects/project-5/main.jpg",
        "/images/projects/project-5/main.jpg",
        "/images/projects/project-5/main.jpg",
        "/images/projects/project-5/main.jpg"
      ],
      features: [
        "Private lakefront terrace",
        "Courtyard with water feature",
        "Traditional jharokha windows",
        "Rooftop sunset deck",
        "Rainwater harvesting",
        "Passive cooling design"
      ]
    },
    '6': {
      title: "Tech Office Interior",
      category: "Interior",
      location: "Hyderabad",
      year: "2023",
      area: "25,000 sq ft",
      status: "Completed",
      client: "InnovateTech Solutions",
      description: "An innovative office interior for a tech startup, featuring open collaboration spaces, quiet focus areas, and biophilic design elements.",
      longDescription: "This office redesign transformed a conventional floor plate into a dynamic workspace that reflects the company's innovative culture. The design incorporates living walls, natural materials, and abundant daylight to enhance employee wellbeing. Flexible work settings - from quiet pods to collaborative lounges - accommodate different work styles. The color palette draws from the company's brand while creating distinct zones for different activities.",
      images: [
        "/images/projects/project-6/main.jpg",
        "/images/projects/project-6/main.jpg",
        "/images/projects/project-6/main.jpg",
        "/images/projects/project-6/main.jpg"
      ],
      features: [
        "Biophilic living walls",
        "Acoustic privacy pods",
        "Collaborative lounge areas",
        "Wellness room",
        "Smart lighting system",
        "Reconfigurable furniture"
      ]
    }
  }

  // Get current project or show not found
  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] pt-32 px-6 md:px-16 lg:px-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#15173D] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF] pt-32 pb-20">
      <div className="px-6 md:px-16 lg:px-24">
        
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[#15173D] hover:text-[#7C3AED] transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header with Underlined Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Project Tags in Styled Cards */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="px-4 py-2 bg-[#15173D] text-white rounded-lg text-sm font-medium shadow-md flex items-center gap-2">
              <span className="w-2 h-2 bg-[#7C3AED] rounded-full"></span>
              {project.category}
            </div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-lg text-sm font-medium shadow-md flex items-center gap-2 border border-white">
              <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {project.year}
            </div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-lg text-sm font-medium shadow-md flex items-center gap-2 border border-white">
              <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>
            <div className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md flex items-center gap-2 ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></span>
              {project.status}
            </div>
          </div>
          
          {/* Underlined Title */}
          <div className="relative inline-block mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              {project.title}
            </h1>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-full"></span>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mt-6">
            {project.description}
          </p>
        </motion.div>

        {/* Main Image Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          {/* Main Image with Enhanced Styling */}
          <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group">
            <img 
              src={project.images[activeImage] || project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Image counter with glass effect */}
            <div className="absolute bottom-4 right-4 bg-[#15173D]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {activeImage + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnail Strip with Better Styling */}
          {project.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#7C3AED]/20">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index 
                      ? 'border-[#7C3AED] shadow-lg scale-105 ring-2 ring-[#7C3AED]/20' 
                      : 'border-white/60 hover:border-[#15173D]/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Details in Card Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
              Project Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200/80">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a3 3 0 01-3-3V6a3 3 0 013-3z" />
                  </svg>
                  Category
                </span>
                <span className="text-gray-900 font-medium bg-[#7C3AED]/10 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200/80">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Location
                </span>
                <span className="text-gray-900 font-medium">{project.location}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200/80">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Year
                </span>
                <span className="text-gray-900 font-medium">{project.year}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200/80">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  Area
                </span>
                <span className="text-gray-900 font-medium">{project.area}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200/80">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Client
                </span>
                <span className="text-gray-900 font-medium">{project.client}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Key Features Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-xl border border-gray-100 hover:border-[#7C3AED]/20 transition-all">
                  <div className="w-6 h-6 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#7C3AED] text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Long Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#7C3AED] rounded-full"></span>
            About the Project
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {project.longDescription}
            </p>
          </div>
        </motion.div>

{/* Navigation between projects */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="flex justify-between items-center pt-8 border-t border-gray-200/80"
>
  {/* Previous Button */}
  <Link 
    href={`/projects/${Math.max(1, parseInt(projectId as string) - 1)}`}
    className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base transition-all ${
      parseInt(projectId as string) > 1
        ? 'bg-white/70 text-[#15173D] hover:bg-[#7C3AED] hover:text-white shadow-md hover:shadow-lg'
        : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-50'
    }`}
  >
    <span className="text-base md:text-lg">←</span>
    <span className="hidden md:inline">Previous</span>
    <span className="md:hidden">Prev</span>
  </Link>
  
{/* All Projects Button */}
<Link 
  href="/projects"
  className="px-3 md:px-6 py-2 md:py-3 bg-[#15173D] text-white rounded-lg md:rounded-xl hover:bg-[#7C3AED] transition-all shadow-lg hover:shadow-xl flex items-center gap-1 md:gap-2 text-sm md:text-base"
>
  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
  <span>All Projects</span>
</Link>
  
  {/* Next Button */}
  <Link 
    href={`/projects/${Math.min(6, parseInt(projectId as string) + 1)}`}
    className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base transition-all ${
      parseInt(projectId as string) < 6
        ? 'bg-white/70 text-[#15173D] hover:bg-[#7C3AED] hover:text-white shadow-md hover:shadow-lg'
        : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-50'
    }`}
  >
    <span className="hidden md:inline">Next</span>
    <span className="md:hidden">Next</span>
    <span className="text-base md:text-lg">→</span>
  </Link>
</motion.div>
      </div>
    </div>
  )
}