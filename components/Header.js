'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHero}
          >
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 font-mono">
              W3Zetech
            </span>
          </motion.div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#about" className="text-text-primary hover:text-accent-1 transition">About</Link></li>
              <li><Link href="#why-join" className="text-text-primary hover:text-accent-1 transition">Why Join</Link></li>
              <li><Link href="#learn" className="text-text-primary hover:text-accent-1 transition">Learn</Link></li>
              <li><Link href="#team" className="text-text-primary hover:text-accent-1 transition">Team</Link></li>
              <li><Link href="#faq" className="text-text-primary hover:text-accent-1 transition">FAQ</Link></li>
              <li><Link href="#contact" className="text-text-primary hover:text-accent-1 transition">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}