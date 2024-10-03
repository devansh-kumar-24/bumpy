import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const ProductCard = ({ name, description, image }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="image-overlay"></div>
      </div>
      <div className="product-content">
        <h3 className="product-title">{name}</h3>
        <p className="product-description">{description}</p>
        <button className="learn-more-button">
          Learn More
        </button>
      </div>
    </motion.div>
  )
}

const products = [
  {
    name: "Bumpy Navigator",
    description: "AI-powered navigation for smooth journeys on challenging terrains.",
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Terrain Analyzer",
    description: "Advanced terrain analysis for optimal route planning in diverse landscapes.",
    image: "https://via.placeholder.com/300x200"
  }
]

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

const ProductsSection = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="products-section">
      {particles.map((particle, index) => (
        <Particle key={index} x={particle.x} y={particle.y} />
      ))}
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our Products
        </motion.h2>

        <div className="products-container">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="product-wrapper"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsSection