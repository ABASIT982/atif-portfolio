'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronUp, ChevronDown, Grid3x3, Home, Building2, PenTool, Ruler, Map, Camera, Palette, Compass } from 'lucide-react'

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [filter, setFilter] = useState('all')

  // 10 main cards - each with multiple images
  const galleryProjects = [
    {
      id: 1,
      title: "Residential Interiors",
      type: "Interior",
      icon: Home,
      coverImage: "/images/gallery/interior-1.jpg",
      description: "Beautiful interior spaces",
      images: [
        { url: "/images/gallery/interior-1.jpg", caption: "Living Room" },
        { url: "/images/gallery/interior-2.jpg", caption: "Kitchen" },
        { url: "/images/gallery/interior-3.jpg", caption: "Bedroom" },
        { url: "/images/gallery/interior-4.jpg", caption: "Bathroom" },
        { url: "/images/gallery/interior-5.jpg", caption: "Staircase" },
      ]
    },
    {
      id: 2,
      title: "Exterior Designs",
      type: "Exterior",
      icon: Building2,
      coverImage: "/images/gallery/exterior-1.jpg",
      description: "Building facades and landscapes",
      images: [
        { url: "/images/gallery/exterior-1.jpg", caption: "Modern Villa" },
        { url: "/images/gallery/exterior-2.jpg", caption: "Office Building" },
        { url: "/images/gallery/exterior-3.jpg", caption: "Entrance Design" },
        { url: "/images/gallery/exterior-4.jpg", caption: "Roof Terrace" },
        { url: "/images/gallery/exterior-5.jpg", caption: "Pool Area" },
      ]
    },
    {
      id: 3,
      title: "Architectural Sketches",
      type: "Sketch",
      icon: PenTool,
      coverImage: "/images/gallery/sketch-1.jpg",
      description: "Concept drawings and sketches",
      images: [
        { url: "/images/gallery/sketch-1.jpg", caption: "Concept Sketch" },
        { url: "/images/gallery/sketch-2.jpg", caption: "Perspective" },
        { url: "/images/gallery/sketch-3.jpg", caption: "Elevation" },
        { url: "/images/gallery/sketch-4.jpg", caption: "Section" },
        { url: "/images/gallery/sketch-5.jpg", caption: "Detail Sketch" },
      ]
    },
    {
      id: 4,
      title: "Floor Plans",
      type: "Plan",
      icon: Map,
      coverImage: "/images/gallery/plan-1.jpg",
      description: "Architectural drawings",
      images: [
        { url: "/images/gallery/plan-1.jpg", caption: "Ground Floor Plan" },
        { url: "/images/gallery/plan-2.jpg", caption: "First Floor Plan" },
        { url: "/images/gallery/plan-3.jpg", caption: "Site Plan" },
        { url: "/images/gallery/plan-4.jpg", caption: "Roof Plan" },
        { url: "/images/gallery/plan-5.jpg", caption: "Master Plan" },
      ]
    },
    {
      id: 5,
      title: "Construction Details",
      type: "Detail",
      icon: Ruler,
      coverImage: "/images/gallery/detail-1.jpg",
      description: "Technical drawings",
      images: [
        { url: "/images/gallery/detail-1.jpg", caption: "Wall Section" },
        { url: "/images/gallery/detail-2.jpg", caption: "Window Detail" },
        { url: "/images/gallery/detail-3.jpg", caption: "Door Detail" },
        { url: "/images/gallery/detail-4.jpg", caption: "Stair Detail" },
        { url: "/images/gallery/detail-5.jpg", caption: "Foundation Detail" },
      ]
    },
{
      id: 6,
      title: "Residential Interiors",
      type: "Interior",
      icon: Home,
      coverImage: "/images/gallery/interior-1.jpg",
      description: "Beautiful interior spaces",
      images: [
        { url: "/images/gallery/interior-1.jpg", caption: "Living Room" },
        { url: "/images/gallery/interior-2.jpg", caption: "Kitchen" },
        { url: "/images/gallery/interior-3.jpg", caption: "Bedroom" },
        { url: "/images/gallery/interior-4.jpg", caption: "Bathroom" },
        { url: "/images/gallery/interior-5.jpg", caption: "Staircase" },
      ]
    },
    {
      id: 7,
      title: "Exterior Designs",
      type: "Exterior",
      icon: Building2,
      coverImage: "/images/gallery/exterior-1.jpg",
      description: "Building facades and landscapes",
      images: [
        { url: "/images/gallery/exterior-1.jpg", caption: "Modern Villa" },
        { url: "/images/gallery/exterior-2.jpg", caption: "Office Building" },
        { url: "/images/gallery/exterior-3.jpg", caption: "Entrance Design" },
        { url: "/images/gallery/exterior-4.jpg", caption: "Roof Terrace" },
        { url: "/images/gallery/exterior-5.jpg", caption: "Pool Area" },
      ]
    },
    {
      id: 8,
      title: "Architectural Sketches",
      type: "Sketch",
      icon: PenTool,
      coverImage: "/images/gallery/sketch-1.jpg",
      description: "Concept drawings and sketches",
      images: [
        { url: "/images/gallery/sketch-1.jpg", caption: "Concept Sketch" },
        { url: "/images/gallery/sketch-2.jpg", caption: "Perspective" },
        { url: "/images/gallery/sketch-3.jpg", caption: "Elevation" },
        { url: "/images/gallery/sketch-4.jpg", caption: "Section" },
        { url: "/images/gallery/sketch-5.jpg", caption: "Detail Sketch" },
      ]
    },
    {
      id: 9,
      title: "Floor Plans",
      type: "Plan",
      icon: Map,
      coverImage: "/images/gallery/plan-1.jpg",
      description: "Architectural drawings",
      images: [
        { url: "/images/gallery/plan-1.jpg", caption: "Ground Floor Plan" },
        { url: "/images/gallery/plan-2.jpg", caption: "First Floor Plan" },
        { url: "/images/gallery/plan-3.jpg", caption: "Site Plan" },
        { url: "/images/gallery/plan-4.jpg", caption: "Roof Plan" },
        { url: "/images/gallery/plan-5.jpg", caption: "Master Plan" },
      ]
    },
    {
      id: 10,
      title: "Construction Details",
      type: "Detail",
      icon: Ruler,
      coverImage: "/images/gallery/detail-1.jpg",
      description: "Technical drawings",
      images: [
        { url: "/images/gallery/detail-1.jpg", caption: "Wall Section" },
        { url: "/images/gallery/detail-2.jpg", caption: "Window Detail" },
        { url: "/images/gallery/detail-3.jpg", caption: "Door Detail" },
        { url: "/images/gallery/detail-4.jpg", caption: "Stair Detail" },
        { url: "/images/gallery/detail-5.jpg", caption: "Foundation Detail" },
      ]
    }
  ]

  const types = ['all', 'Interior', 'Exterior', 'Sketch', 'Plan', 'Detail', '3D', 'Material', 'Commercial', 'Construction', 'Landscape']

  const filteredProjects = filter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.type === filter)

  const openProject = (id: number) => {
    setSelectedProject(id)
    setSelectedImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    const project = galleryProjects.find(p => p.id === selectedProject)
    if (project) {
      setSelectedImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    const project = galleryProjects.find(p => p.id === selectedProject)
    if (project) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }

  const selectedProjectData = galleryProjects.find(p => p.id === selectedProject)

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
            GALLERY
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Architectural Portfolio</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our complete collection of architectural work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-[#7C3AED] text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-[#7C3AED]/20'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 10 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openProject(project.id)}
                className="cursor-pointer group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-white/80 hover:border-[#7C3AED]/30">
                  
                  {/* Cover Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Image count badge */}
                    <div className="absolute top-2 right-2 bg-[#15173D]/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {project.images.length} photos
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Icon className="w-3 h-3 text-[#7C3AED]" />
                      <span className="text-xs text-[#7C3AED] font-medium">{project.type}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{project.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Project Modal - Opens when card clicked */}
        <AnimatePresence>
          {selectedProjectData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#15173D] rounded-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedProjectData.title}</h2>
                    <p className="text-sm text-white/70">{selectedProjectData.type}</p>
                  </div>
                  <button
                    onClick={closeProject}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Image Gallery */}
                <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
                  
                  {/* Main Image */}
                  <div className="flex-1 relative bg-black/40 flex items-center justify-center p-4">
                    <img
                      src={selectedProjectData.images[selectedImageIndex].url}
                      alt={selectedProjectData.images[selectedImageIndex].caption}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 p-2 bg-black/50 hover:bg-[#7C3AED] rounded-full text-white transition-colors"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 p-2 bg-black/50 hover:bg-[#7C3AED] rounded-full text-white transition-colors"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                      {selectedImageIndex + 1} / {selectedProjectData.images.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="w-full md:w-64 bg-[#1E1F4A] p-3 overflow-y-auto">
                    <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                      <Grid3x3 className="w-4 h-4" />
                      All Images
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProjectData.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === idx 
                              ? 'border-[#7C3AED] scale-105' 
                              : 'border-transparent hover:border-white/50'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-16 object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    {/* Caption */}
                    <div className="mt-3 p-2 bg-white/5 rounded">
                      <p className="text-white text-xs">
                        {selectedProjectData.images[selectedImageIndex].caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}