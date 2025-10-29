'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaDiscord, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Mission', href: '/mission' },
    { name: 'Groups', href: '/groups' },
    { name: 'Community', href: '/community' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin },
    { name: 'Discord', href: 'https://discord.com', icon: FaDiscord },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full bg-white shadow-lg overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 w-full">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex-shrink-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Oman Developers Club Logo"
                  width={50}
                  height={30}
                  className="object-contain w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black hidden sm:block font-sans"
              >
                Oman Developers Club
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#369182] hover:bg-gray-50 rounded-lg transition-all duration-300 font-sans border border-transparent hover:border-[#369182]/20 hover:shadow-sm whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Language Toggle & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 flex-shrink-0"
          >
            {/* Language Toggle */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#369182] transition-colors duration-200 border border-gray-300 rounded-full hover:border-[#369182] font-sans whitespace-nowrap"
            >
              <FaGlobe className="w-4 h-4" />
              <span>العربية</span>
            </motion.button>

            {/* Social Links */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  variants={itemVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1 sm:p-2 text-gray-600 hover:text-[#369182] transition-colors duration-200 hover:bg-[#369182]/10 rounded-full"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#369182] hover:bg-[#369182]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#369182]"
            >
              <motion.svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  variants={{
                    open: { d: 'M6 18L18 6M6 6l12 12' },
                    closed: { d: 'M4 6h16M4 12h16M4 18h16' },
                  }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-[#369182] hover:bg-[#369182]/10 rounded-md transition-colors duration-200 font-sans"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Language Toggle */}
                <motion.div variants={mobileItemVariants}>
                  <button className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-[#369182] hover:bg-[#369182]/10 rounded-md transition-colors duration-200 font-sans">
                    <FaGlobe className="w-4 h-4" />
                    <span>العربية</span>
                  </button>
                </motion.div>

                {/* Mobile Social Links Section */}
                <motion.div variants={mobileItemVariants} className="border-t border-gray-200 pt-3 mt-2">
                  <div className="px-3 pb-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">
                      Follow Us
                    </h3>
                  </div>
                  <div className="px-3 space-y-1">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#369182] hover:bg-[#369182]/10 rounded-md transition-colors duration-200 font-sans"
                      >
                        <social.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

