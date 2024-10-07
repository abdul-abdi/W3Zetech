'use client'

import { motion } from 'framer-motion';
import { FaHandsHelping, FaNetworkWired, FaCalendarAlt, FaBrain, FaGlobeAmericas, FaRocket } from 'react-icons/fa';

export default function WhyJoin() {
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
    },
    {
      title: "Career Acceleration",
      description: "Fast-track your career in the rapidly growing blockchain industry with our resources and support.",
      icon: FaRocket,
      color: "from-teal-400 to-cyan-500"
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
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-8 relative overflow-hidden z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Join W3Zetech
        </motion.h2>

        <div className="flex-grow overflow-y-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.title}
                className={`bg-background bg-opacity-50 p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 bg-gradient-to-br ${reason.color} border border-accent-1`}
                variants={itemVariants}
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
                <p className="text-white text-lg">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  );
}