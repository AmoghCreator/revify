'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-md shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-bold tracking-wide">
          Revify
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-200 hover:text-white transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="text-gray-200 hover:text-white transition-all duration-300"
          >
            Profile
          </Link>
          <button className="bg-gray-200/20 hover:bg-gray-200/40 text-white py-2 px-6 rounded-full transition-all duration-300">
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden flex flex-col items-center space-y-4 bg-black/30 backdrop-blur-lg py-4"
        >
          <Link
            href="/"
            className="text-gray-200 hover:text-white transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="text-gray-200 hover:text-white transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-gray-200/20 hover:bg-gray-200/40 text-white py-2 px-6 rounded-full transition-all duration-300"
          >
            Logout
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

