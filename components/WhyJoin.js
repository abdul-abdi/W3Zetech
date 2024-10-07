'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandsHelping, FaNetworkWired, FaCalendarAlt, FaBrain, FaGlobeAmericas, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function WhyJoin() {
  const [activeSection, setActiveSection] = useState('reasons');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const reasons = [
    {
      title: "Hands-on Experience",
      description: "Gain practical experience with real blockchain projects and cutting-edge technologies.",
      icon: FaHandsHelping,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with like-minded peers, industry professionals, and potential employers in the blockchain space.",
      icon: FaNetworkWired,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Exclusive Events",
      description: "Access workshops, hackathons, and conferences focused on blockchain innovation.",
      icon: FaCalendarAlt,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Skill Development",
      description: "Build a portfolio of in-demand skills that are shaping the future of technology and finance.",
      icon: FaBrain,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Real-world Impact",
      description: "Contribute to blockchain solutions addressing global challenges in finance, supply chain, and more.",
      icon: FaGlobeAmericas,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const faqs = [
    {
      question: "Who can join w3zetech?",
      answer: "w3zetech welcomes anyone passionate about blockchain technology, regardless of their background or experience level. Whether you're a student, professional, or enthusiast, our community is open to all who want to learn and grow in the blockchain space."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "Members engage in a variety of projects, from developing smart contracts and DApps to exploring blockchain solutions for real-world problems. Projects range from beginner-friendly tutorials to advanced, industry-level applications."
    },
    {
      question: "How can w3zetech help my career?",
      answer: "w3zetech provides hands-on experience, networking opportunities, and skill development in one of the fastest-growing tech fields. Our programs and projects can significantly enhance your portfolio, making you stand out to potential employers or clients in the blockchain industry."
    },
    {
      question: "Is there a cost to join?",
      answer: "Basic membership to w3zetech is free, giving you access to our community forums, select workshops, and resources. We also offer premium memberships with additional benefits, such as exclusive events and personalized mentoring."
    },
    {
      question: "How much time commitment is required?",
      answer: "w3zetech is flexible and designed to fit your schedule. While more active participation leads to greater benefits, you can engage as much or as little as your time allows. We recommend dedicating at least a few hours per week for optimal learning and networking."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="why-join" className="min-h-screen flex items-center justify-center relative overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-8 relative overflow-hidden">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Join w3zetech
        </motion.h2>

        <div className="flex justify-center mb-8">
          <motion.button
            className={`px-6 py-2 rounded-full text-lg font-semibold mr-4 ${activeSection === 'reasons' ? 'bg-accent-1 text-background' : 'bg-transparent text-accent-1 border border-accent-1'}`}
            onClick={() => setActiveSection('reasons')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reasons to Join
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-full text-lg font-semibold ${activeSection === 'faq' ? 'bg-accent-1 text-background' : 'bg-transparent text-accent-1 border border-accent-1'}`}
            onClick={() => setActiveSection('faq')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FAQ
          </motion.button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={activeSection === 'reasons' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
            >
              {activeSection === 'reasons' ? (
                reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.title}
                    className={`bg-background bg-opacity-50 p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 bg-gradient-to-br ${reason.color} border border-accent-1`}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 text-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <reason.icon size={120} />
                    </motion.div>
                    <reason.icon size={40} className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold mb-4 text-white transition-colors duration-300">{reason.title}</h3>
                    <motion.p 
                      className="text-white text-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, height: hoveredIndex === index ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {reason.description}
                    </motion.p>
                  </motion.div>
                ))
              ) : (
                faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-background bg-opacity-50 rounded-lg shadow-lg overflow-hidden border border-accent-1"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    >
                      <span className="text-xl font-semibold text-accent-1 flex items-center">
                        <FaQuestionCircle className="mr-3" />
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`text-accent-1 transition-transform duration-300 ${
                          expandedFAQ === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-text-secondary">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  );
}