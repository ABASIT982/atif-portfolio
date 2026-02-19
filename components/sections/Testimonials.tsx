'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    location: 'Delhi',
    content: 'Atif transformed our dream home into reality. His attention to detail and innovative design exceeded our expectations. He listened to our needs and delivered something truly special.',
    rating: 5,
    image: '/images/testimonials/client1.jpg'
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'CEO, TechCorp',
    location: 'Mumbai',
    content: 'The office space he designed boosted our team\'s productivity and creativity. Absolutely brilliant work! The flow of spaces and natural light has transformed how we work.',
    rating: 5,
    image: '/images/testimonials/client2.jpg'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Developer',
    location: 'Bangalore',
    content: 'Professional, creative, and reliable. Completed our commercial project on time and within budget. His sustainable approach added immense value to our building.',
    rating: 5,
    image: '/images/testimonials/client3.jpg'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Interior Designer',
    location: 'Pune',
    content: 'Collaborating with Atif on a mixed-use project was a pleasure. His architectural vision complemented our interior design perfectly. Truly a team player.',
    rating: 5,
    image: '/images/testimonials/client4.jpg'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Hotel Owner',
    location: 'Jaipur',
    content: 'Our boutique hotel has never looked better. Guests constantly compliment the architecture. Atif understood our brand and created spaces that tell our story.',
    rating: 5,
    image: '/images/testimonials/client5.jpg'
  },
  {
    id: 6,
    name: 'Anjali Desai',
    role: 'Architect',
    location: 'Ahmedabad',
    content: 'As a fellow architect, I was impressed by his innovative solutions and attention to structural details. A true master of his craft.',
    rating: 5,
    image: '/images/testimonials/client6.jpg'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  // For desktop: show 3 at a time
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3)

  const nextSlide = () => {
    if (activeIndex + 3 < testimonials.length) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(testimonials.length - 3)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#F0E8FF] via-[#E6D8FF] to-[#D8C7FF] relative overflow-hidden">
      
      <div className="px-6 md:px-16 lg:px-24 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white text-sm tracking-wider font-semibold inline-block px-6 py-2 rounded-full bg-[#15173D] backdrop-blur-sm border border-[#7C3AED]/20 mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Clients Say</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Don't just take my word for it - hear from those I've had the privilege to work with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#6D28D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder - colored circle until images added */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#C4B5FD] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-[#7C3AED]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows at Bottom */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white hover:bg-[#7C3AED] border border-[#7C3AED]/20 hover:border-[#7C3AED] transition-all shadow-md hover:shadow-lg group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-[#7C3AED] group-hover:text-white transition-colors" />
          </button>
          
          {/* Navigation dots */}
          <div className="flex gap-2 mx-4">
            {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex 
                    ? 'w-6 bg-[#7C3AED]' 
                    : 'bg-[#7C3AED]/30 hover:bg-[#7C3AED]/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white hover:bg-[#7C3AED] border border-[#7C3AED]/20 hover:border-[#7C3AED] transition-all shadow-md hover:shadow-lg group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-[#7C3AED] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] mx-auto mt-12 rounded-full"
        />
      </div>
    </section>
  )
}