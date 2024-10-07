'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = [
    { text: 'Blockchain', color: 'from-blue-500 to-purple-500' },
    { text: 'Web3', color: 'from-green-400 to-blue-500' },
    { text: 'DeFi', color: 'from-yellow-400 to-orange-500' },
    { text: 'NFTs', color: 'from-pink-500 to-red-500' },
    { text: 'DAOs', color: 'from-indigo-500 to-purple-500' },
    { text: 'Smart Contract', color: 'from-purple-500 to-blue-500' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div 
        className="text-center space-y-8 px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock the Future of <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              className={`bg-gradient-to-r ${words[currentWord].color} text-transparent bg-clip-text inline-block`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {words[currentWord].text}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-text-secondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join W3Zetech and empower yourself with cutting-edge blockchain knowledge and hands-on experience
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href="https://chat.whatsapp.com/IUedLvoNvNl12J2T0WT2aX"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${words[currentWord].color} text-white px-8 py-3 rounded-full font-semibold transition duration-300 glow`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Community
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaChevronDown className="text-accent-1 text-4xl" />
      </motion.div>
    </section>
  )
}