'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentColor, setCurrentColor] = useState(0);

  const colors = [
    'from-blue-500 to-purple-500',
    'from-green-400 to-blue-500',
    'from-yellow-400 to-orange-500',
    'from-pink-500 to-red-500',
    'from-indigo-500 to-purple-500'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const floatingIcons = [
    { Icon: FaCode, delay: 0 },
    { Icon: FaLightbulb, delay: 0.2 },
    { Icon: FaRocket, delay: 0.4 },
  ];

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 z-10 py-20 flex-grow flex flex-col">
        <motion.div 
          className="bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-12 relative overflow-hidden flex-grow flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accent-1 to-accent-2 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-accent-1 to-accent-2 p-3 rounded-full">
                  <FaEnvelope className="text-background text-xl" />
                </div>
                <div>
                  <p className="text-text-secondary">Email:</p>
                  <a href="mailto:W3Zetech@gmail.com" className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 hover:from-accent-2 hover:to-accent-1 transition-all duration-300">W3Zetech@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-accent-2 to-accent-3 p-3 rounded-full">
                  <FaPhone className="text-background text-xl" />
                </div>
                <div>
                  <p className="text-text-secondary">Phone:</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-3">+254 720 987311 - Abdi</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-3">+254 780 519700 - Nelly</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-3">+254 794 213469 - Fadhil</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-accent-3 to-accent-1 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-background text-xl" />
                </div>
                <div>
                  <p className="text-text-secondary">Location:</p>
                  <a 
                    href="https://www.google.com/maps/place/Zetech+University+Main+Campus+-+Ruiru/@-1.1526374,36.9598857,17z/data=!3m1!4b1!4m6!3m5!1s0x182f470046ca69a7:0x87177424bfce7082!8m2!3d-1.1526374!4d36.9624606!16s%2Fg%2F11lcr26qq5?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-accent-3 to-accent-1 hover:from-accent-1 hover:to-accent-3 transition-all duration-300"
                  >
                    Zetech University
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-background border border-accent-1 rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-1 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-background border border-accent-2 rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-2 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full bg-background border border-accent-3 rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-3 transition-all duration-300"
                  rows="4"
                  required
                />
              </div>
              <motion.button 
                type="submit" 
                className={`bg-gradient-to-r ${colors[currentColor]} text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-spin mr-2">&#9696;</span>
                ) : (
                  <FaPaperPlane className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 font-semibold"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden" // Adjusted height here
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0573095097!2d36.95988571475205!3d-1.1526373991614787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f470046ca69a7:0x87177424bfce7082!2sZetech%20University%20Main%20Campus%20-%20Ruiru!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zetech University Location"
            ></iframe>
            {floatingIcons.map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                className="absolute text-accent-1"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Icon size={24} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3"></div>
      <Footer />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  );
}