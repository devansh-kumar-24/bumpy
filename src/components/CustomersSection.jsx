import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Particle component for background animation
const Particle = ({ x, y }) => (
  <motion.div
    className="particle"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      x: [0, Math.random() * 10 - 5],
      y: [0, Math.random() * 10 - 5],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: Math.random() * 5 + 5,
    }}
  >
    <div
      style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
      }}
    />
  </motion.div>
)

const teamMembers = [
  {
    name: "John Doe",
    role: "Product Manager",
    image: "https://via.placeholder.com/250", // Replace with actual image URL
    linkedin: ""
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://via.placeholder.com/250",
    linkedin: ""
  }
]

const CustomersSection = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles for background
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="bg-gray-100 py-16 sm:py-20 Customer-Section relative">
      {/* Render particles in the background */}
      {particles.map((particle, index) => (
        <Particle key={index} x={particle.x} y={particle.y} />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-8 sm:mb-12">
          Our Team
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-80 h-auto bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mb-6 p-5"
              />
              <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-gray-500 text-lg mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                className="text-blue-500 hover:text-blue-700 font-semibold underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomersSection;
