'use client'

import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaBitcoin, FaEthereum } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Learn', href: '#learn' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    { Icon: FaTwitter, href: "https://x.com/W3Zetech", color: "from-blue-400 to-blue-600" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/zetech-web3-and-blockchain-club/?viewAsMember=true", color: "from-blue-600 to-blue-800" },
    { Icon: FaGithub, href: "https://github.com/web3zetech", color: "from-purple-600 to-purple-800" },
    { Icon: FaWhatsapp, href: "https://chat.whatsapp.com/IUedLvoNvNl12J2T0WT2aX", color: "from-green-500 to-green-700" },
  ];

  const floatingIcons = [
    { Icon: FaBitcoin, color: "text-yellow-500" },
    { Icon: FaEthereum, color: "text-purple-500" },
  ];

  return (
    <footer className="bg-background py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-1 to-accent-2 text-transparent bg-clip-text mb-4">W3Zetech</h3>
            <p className="text-text-secondary">Empowering the next generation of blockchain innovators</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link href={link.href} className={`text-text-secondary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-accent-${index % 3 + 1} to-accent-${(index + 1) % 3 + 1} transition duration-300`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-2 to-accent-3 mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Whitepaper', 'Privacy Policy'].map((item, index) => (
                <li key={item}>
                  <a href="#" className={`text-text-secondary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-accent-${index % 3 + 1} to-accent-${(index + 1) % 3 + 1} transition duration-300`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-3 to-accent-1 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-secondary bg-gradient-to-r ${color} bg-clip-text transition duration-300`}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Icon size={24} className="hover:text-transparent" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gradient-to-r from-accent-1 via-accent-2 to-accent-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-text-secondary">
            © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2">W3Zetech Blockchain Learning Club</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
      {floatingIcons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-accent-3 opacity-5"></div>
    </footer>
  );
}