'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaVideo, FaPodcast, FaNewspaper, FaLink, FaChevronDown, FaCode, FaCoins, FaFileContract, FaMobile, FaGlobe, FaShieldAlt } from 'react-icons/fa';

export default function Learn() {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const topics = [
    {
      title: "Blockchain Fundamentals",
      description: "Understand the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptography.",
      icon: FaCode,
      color: "from-blue-500 to-purple-500",
      resource: {
        title: "Blockchain Basics: A Practical Approach",
        type: "Book",
        link: "https://www.amazon.com/Blockchain-Basics-Practical-Approach-Enthusiasts/dp/1484226038",
        icon: FaBook
      }
    },
    {
      title: "Cryptocurrency Ecosystems",
      description: "Explore various cryptocurrency networks, their unique features, and the economic principles behind digital assets.",
      icon: FaCoins,
      color: "from-yellow-400 to-orange-500",
      resource: {
        title: "Updraft.io Cryptocurrency Course",
        type: "Online Course",
        link: "https://updraft.io/course/cryptocurrency",
        icon: FaVideo
      }
    },
    {
      title: "Smart Contracts",
      description: "Learn to create and deploy smart contracts on platforms like Ethereum, enabling automated, trustless transactions.",
      icon: FaFileContract,
      color: "from-green-400 to-blue-500",
      resource: {
        title: "CryptoZombies",
        type: "Interactive Tutorial",
        link: "https://cryptozombies.io/",
        icon: FaCode
      }
    },
    {
      title: "Decentralized Applications (DApps)",
      description: "Build full-stack decentralized applications that interact with blockchain networks and smart contracts.",
      icon: FaMobile,
      color: "from-pink-500 to-red-500",
      resource: {
        title: "Building Ethereum DApps",
        type: "Book",
        link: "https://www.manning.com/books/building-ethereum-dapps",
        icon: FaBook
      }
    },
    {
      title: "Web3 Technologies",
      description: "Dive into the technologies powering the decentralized web, including IPFS, Filecoin, and decentralized identity solutions.",
      icon: FaGlobe,
      color: "from-indigo-500 to-purple-500",
      resource: {
        title: "Web3 University",
        type: "Online Platform",
        link: "https://www.web3.university/",
        icon: FaGlobe
      }
    },
    {
      title: "Blockchain Security",
      description: "Understand common security vulnerabilities in blockchain systems and best practices for securing decentralized applications.",
      icon: FaShieldAlt,
      color: "from-green-500 to-teal-500",
      resource: {
        title: "Blockchain Security Fundamentals",
        type: "Online Course",
        link: "https://www.coursera.org/learn/blockchain-security",
        icon: FaVideo
      }
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

  const toggleTopic = (index) => {
    if (isMobile) {
      setExpandedTopic(expandedTopic === index ? null : index);
    }
  };

  const visibleTopics = isMobile ? topics.slice(0, 3) : topics;

  return (
    <section id="learn" className="min-h-screen flex items-center justify-center relative overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-4 sm:p-8 relative overflow-hidden z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-accent-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What You'll Learn
        </motion.h2>

        <div className="flex-grow overflow-y-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          >
            {visibleTopics.map((topic, index) => (
              <motion.div 
                key={topic.title}
                className={`bg-background bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 bg-gradient-to-br ${topic.color} border border-accent-1 cursor-pointer`}
                variants={itemVariants}
                onClick={() => toggleTopic(index)}
              >
                <motion.div 
                  className="absolute top-0 right-0 text-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <topic.icon size={120} />
                </motion.div>
                <topic.icon size={40} className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-white transition-colors duration-300">{topic.title}</h3>
                <AnimatePresence>
                  {(!isMobile || expandedTopic === index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-sm sm:text-lg mb-4">
                        {topic.description}
                      </p>
                      <div className="flex items-center text-white">
                        <topic.resource.icon className="mr-2" />
                        <a href={topic.resource.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-2 transition-colors">
                          {topic.resource.title}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {isMobile && (
                  <motion.div
                    className="absolute bottom-2 right-2 text-white"
                    animate={{ rotate: expandedTopic === index ? 180 : 0 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}