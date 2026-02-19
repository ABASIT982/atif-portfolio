import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Oceanfront Villa",
      category: "Residential",
      location: "Goa",
      image: "/images/projects/project-1/main.jpg"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Mumbai",
      image: "/images/projects/project-2/main.jpg"
    },
    {
      id: 3,
      title: "Urban Housing Complex",
      category: "Residential",
      location: "Delhi",
      image: "/images/projects/project-3/main.jpg"
    }
  ]

return (
  <section className="py-20 bg-gradient-to-br from-[#D8C7FF] via-[#E6D8FF] to-[#F0E8FF]">
    <div className="px-6 md:px-16 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className=" text-white text-sm tracking-wider font-semibold inline-block px-10 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20">
          FEATURED WORK
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Selected Projects</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          A glimpse of my recent architectural endeavors that blend innovation with timeless design
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group cursor-pointer"
          >
            {/* Image Container with Outer Glow */}
            <div className="relative group/image">
              {/* Outer glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] rounded-2xl opacity-0 group-hover/image:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
              
              {/* Main Image Card */}
              <div className="relative h-80 rounded-xl overflow-hidden 
                shadow-lg hover:shadow-2xl 
                transition-all duration-500 
                border-2 border-white/80">
                
                {/* Image */}
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white border-2 border-white/80 px-8 py-3 rounded-full text-sm tracking-wider hover:bg-white hover:text-[#7C3AED] transition-all duration-300 transform group-hover/image:scale-105 shadow-xl">
                    View Project
                  </span>
                </div>
              </div>
            </div>

            {/* Project Info - ALL BELOW THE CARD */}
            <div className="mt-4 space-y-2">
              {/* Title */}
              <h3 className="text-gray-900 text-xl font-bold group-hover:text-[#7C3AED] transition-colors">
                {project.title}
              </h3>
              
              {/* Category and Location Row */}
              <div className="flex items-center gap-3 text-sm">
                {/* Category with purple dot */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                  <span className="text-gray-600">{project.category}</span>
                </div>
                
                {/* Divider */}
                <span className="text-gray-300">|</span>
                
                {/* Location with icon */}
                <div className="flex items-center gap-1 text-gray-500">
                  <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>
              </div>
              
              {/* Optional: Add year or short description */}
              <p className="text-gray-500 text-sm line-clamp-2">
                {project.id === 1 && "Luxurious oceanfront villa with panoramic sea views"}
                {project.id === 2 && "Modern corporate headquarters in the heart of the city"}
                {project.id === 3 && "Sustainable urban housing with green spaces"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:scale-105 transform transition-all duration-300 group font-medium shadow-lg"
        >
          <span>View All Projects</span>
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
        
      </div>
      
    </div>
  </section>
)
}