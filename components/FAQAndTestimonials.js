'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

export default function FAQAndTestimonials() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const faqs = [
    {
      question: "Who can join W3Zetech?",
      answer: "W3Zetech welcomes anyone passionate about blockchain technology, regardless of their background or experience level. Whether you're a student, professional, or enthusiast, our community is open to all who want to learn and grow in the blockchain space.",
      color: "from-blue-500 to-purple-500"
    },
    {
      question: "What kind of projects will I work on?",
      answer: "Members engage in a variety of projects, from developing smart contracts and DApps to exploring blockchain solutions for real-world problems. Projects range from beginner-friendly tutorials to advanced, industry-level applications.",
      color: "from-green-400 to-blue-500"
    },
    {
      question: "How can W3Zetech help my career?",
      answer: "W3Zetech provides hands-on experience, networking opportunities, and skill development in one of the fastest-growing tech fields. Our programs and projects can significantly enhance your portfolio, making you stand out to potential employers or clients in the blockchain industry.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      question: "Is there a cost to join?",
      answer: "Basic membership to W3Zetech is free, giving you access to our community forums, select workshops, and resources. We also offer premium memberships with additional benefits, such as exclusive events and personalized mentoring.",
      color: "from-pink-500 to-red-500"
    },
    {
      question: "How much time commitment is required?",
      answer: "W3Zetech is flexible and designed to fit your schedule. While more active participation leads to greater benefits, you can engage as much or as little as your time allows. We recommend dedicating at least a few hours per week for optimal learning and networking.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      quote: "W3Zetech opened my eyes to the vast potential of blockchain. It's not just about cryptocurrencies – it's a whole new way of thinking about trust and transactions.",
      author: "Alex K., Computer Science Major",
      color: "from-blue-500 to-purple-500"
    },
    {
      quote: "Thanks to W3Zetech, I landed an internship at a blockchain startup. The skills I learned here were invaluable!",
      author: "Priya M., Finance Student",
      color: "from-green-400 to-blue-500"
    },
    {
      quote: "The hands-on projects and collaborative environment at W3Zetech helped me understand complex blockchain concepts in a practical way.",
      author: "Jordan L., Engineering Student",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="faq-and-testimonials" className="min-h-screen flex items-center justify-center relative overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-8 relative overflow-hidden z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent-1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`bg-background bg-opacity-50 rounded-lg shadow-lg overflow-hidden border border-accent-1 bg-gradient-to-br ${faq.color}`}
                  variants={itemVariants}
                >
                  <motion.button
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <span className="text-xl font-semibold text-white flex items-center">
                      <FaQuestionCircle className="mr-3" />
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`text-white transition-transform duration-300 ${
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
                        <p className="text-white">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent-1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What Our Members Say
            </motion.h2>
            <div className="relative w-full max-w-md">
              <FaQuoteLeft className="absolute top-0 left-0 text-6xl text-accent-1 opacity-20" />
              <FaQuoteRight className="absolute bottom-0 right-0 text-6xl text-accent-1 opacity-20" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-background bg-opacity-50 p-12 rounded-lg shadow-lg bg-gradient-to-br ${testimonials[currentTestimonial].color}`}
                >
                  <blockquote className="text-2xl italic mb-8 text-white text-center">{testimonials[currentTestimonial].quote}</blockquote>
                  <p className="text-center text-xl font-semibold text-white">- {testimonials[currentTestimonial].author}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  );
}