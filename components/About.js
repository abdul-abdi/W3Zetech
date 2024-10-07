'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBitcoin, FaEthereum, FaChartLine, FaLock, FaCode, FaLightbulb, FaHandshake, FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function About() {
  const [activeSection, setActiveSection] = useState(0)
  const sections = [
    {
      title: "Our Story",
      content: "W3Zetech was born in September 2023 when our three founders attended their first blockchain event. Inspired by the revolutionary potential of this technology, Abdullahi Abdi, Fadhil Mulinya, and Nelly Njeri began attending more events and eventually decided to bring this knowledge to their university. What started as a shared passion has grown into a vibrant community dedicated to blockchain education and innovation.",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Our Mission",
      content: "At W3Zetech, our mission is to empower university students with cutting-edge blockchain knowledge and hands-on experience. We strive to create a collaborative environment where students can learn, innovate, and shape the future of Web3 technology.",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Our Vision",
      content: "We envision a future where blockchain technology is accessible to all university students, fostering a new generation of innovators and leaders in the Web3 space. W3Zetech aims to be the premier blockchain learning hub, bridging the gap between academic knowledge and real-world blockchain applications.",
      color: "from-yellow-400 to-orange-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const icons = [
    { Icon: FaBitcoin, x: '10%', y: '20%', color: 'text-yellow-500' },
    { Icon: FaEthereum, x: '80%', y: '15%', color: 'text-purple-500' },
    { Icon: FaChartLine, x: '70%', y: '70%', color: 'text-green-500' },
    { Icon: FaLock, x: '20%', y: '80%', color: 'text-red-500' },
    { Icon: FaCode, x: '50%', y: '50%', color: 'text-blue-500' },
    { Icon: FaLightbulb, x: '30%', y: '40%', color: 'text-yellow-300' },
    { Icon: FaHandshake, x: '60%', y: '30%', color: 'text-indigo-500' },
    { Icon: FaRocket, x: '90%', y: '60%', color: 'text-pink-500' },
  ]

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  return (
    <section id="about" className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 w-full max-w-7xl">
        <motion.div 
          className="bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About W3Zetech
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8 flex flex-col justify-center relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center p-6 rounded-lg bg-gradient-to-br bg-opacity-10"
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${sections[activeSection].color})` }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                    {sections[activeSection].title}
                  </h3>
                  <p className="text-base md:text-lg text-white">
                    {sections[activeSection].content}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center items-center space-x-6 mt-8">
                <motion.button
                  onClick={prevSection}
                  className="text-accent-1 hover:text-accent-2 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft size={32} />
                </motion.button>
                {sections.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-4 h-4 rounded-full ${index === activeSection ? 'bg-accent-1' : 'bg-gray-400'}`}
                    onClick={() => setActiveSection(index)}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
                <motion.button
                  onClick={nextSection}
                  className="text-accent-1 hover:text-accent-2 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight size={32} />
                </motion.button>
              </div>
            </motion.div>
            <div className="relative h-96 lg:h-full">
              {icons.map(({ Icon, x, y, color }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${color}`}
                  style={{ left: x, top: y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  >
                    <Icon size={48} />
                  </motion.div>
                </motion.div>
              ))}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-accent-3 opacity-30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </div>
          </div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Our Journey So Far</h3>
            <p className="text-base md:text-lg text-text-secondary">
              Since our inception in September 2023, we've grown from three passionate founders to a thriving community of blockchain enthusiasts at our university. We've organized <span className="text-blue-500 font-bold">multiple workshops</span>, collaborated with <span className="text-green-400 font-bold">industry experts</span>, and are continuously expanding our network to bring the best of blockchain education to our members.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  )
}