'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl sm:text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHero}
          >
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 font-mono">
              W3Zetech
            </span>
          </motion.div>
          <nav className="hidden sm:block">
            <ul className="flex space-x-4 sm:space-x-6">
              <li><Link href="#about" className="text-text-primary hover:text-accent-1 transition">About</Link></li>
              <li><Link href="#why-join" className="text-text-primary hover:text-accent-1 transition">Why Join</Link></li>
              <li><Link href="#learn" className="text-text-primary hover:text-accent-1 transition">Learn</Link></li>
              <li><Link href="#team" className="text-text-primary hover:text-accent-1 transition">Team</Link></li>
              <li><Link href="#faq" className="text-text-primary hover:text-accent-1 transition">FAQ</Link></li>
              <li><Link href="#contact" className="text-text-primary hover:text-accent-1 transition">Contact</Link></li>
            </ul>
          </nav>
          <button className="sm:hidden text-text-primary" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden bg-background bg-opacity-95 backdrop-blur-md"
        >
          <ul className="py-4 px-6 space-y-4">
            <li><Link href="#about" className="text-text-primary hover:text-accent-1 transition block">About</Link></li>
            <li><Link href="#why-join" className="text-text-primary hover:text-accent-1 transition block">Why Join</Link></li>
            <li><Link href="#learn" className="text-text-primary hover:text-accent-1 transition block">Learn</Link></li>
            <li><Link href="#team" className="text-text-primary hover:text-accent-1 transition block">Team</Link></li>
            <li><Link href="#faq" className="text-text-primary hover:text-accent-1 transition block">FAQ</Link></li>
            <li><Link href="#contact" className="text-text-primary hover:text-accent-1 transition block">Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}