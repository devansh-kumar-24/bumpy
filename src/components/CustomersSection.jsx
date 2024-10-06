import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/photo.jpg'
import team3 from '../assets/sartaj.png'

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
    name: "Devansh Kumar",
    role: "Team Member",
    image: team2, // Replace with actual image URL
    linkedin: "https://www.linkedin.com/in/devansh-kumar-2oo2/"
  },
  {
    name: "Bidyashree Nayak",
    role: "Team Member",
    image: team1,
    linkedin: "https://www.linkedin.com/in/bidyashree-nayak-b8a933241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Sartaj Ahmed",
    role: "Team Mentor",
    image: team3,
    linkedin: "#"
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
    <section className="bg-yellow-50 py-16 sm:py-20 Customer-Section relative">
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
                href={member.linkedin} target='_blank'
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
