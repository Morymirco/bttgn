'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Français');

  const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Service 1', href: '/services/service1' },
        { name: 'Service 2', href: '/services/service2' },
        { name: 'Service 3', href: '/services/service3' }
      ]
    },
    { name: 'Réalisations', href: '/portfolio' },
    { name: 'Équipe', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ];

  const languages = [
    { name: 'Français', code: 'fr' },
    { name: 'English', code: 'en' }
  ];

  return (
    <motion.header 
      className="w-full py-4 px-6 relative z-30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm shadow-lg px-6 py-4 flex items-center justify-between" 
          style={{borderRadius: '30px'}}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            scale: 1.01
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo B.T.T.svg"
                alt="B.T.T. Logo"
                width={120}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-black relative group transition-all duration-300"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="inline-block ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A301] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Services Dropdown */}
                {link.hasDropdown && isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
                    style={{borderColor: '#4473c5'}}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-black"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity text-black"
              >
                {currentLanguage}
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50" style={{borderColor: '#4473c5'}}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.name);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-black"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" href="/contact">
                Demander un devis
              </Button>
            </motion.div>

            {/* CTA Button - Mobile */}
            <motion.button
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#4473c5'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-50"
            // style={{ backgroundColor: 'rgba(255,0,0,0.1)' }} // Debug: fond rouge léger
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Mobile menu clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#4473c5'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#4473c5'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg border-t relative z-40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-black hover:text-[#4473c5] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Mobile Services Dropdown */}
                  {link.hasDropdown && (
                    <div className="ml-4 space-y-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#4473c5] transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-black">Langue</span>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        currentLanguage === lang.name
                          ? 'bg-[#4473c5] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <motion.button
                className="w-full bg-[#4473c5] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#3a5f9a] transition-colors"
              onClick={() => {
                console.log('Opening drawer, closing mobile menu');
                setIsMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Drawer for "Demander un devis" */}
      {isDrawerOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Drawer Content */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-black">Demander un devis</h3>
              <motion.button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4473c5] focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4473c5] focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4473c5] focus:border-transparent"
                  placeholder="+224 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4473c5] focus:border-transparent">
                  <option>Topographie & Cartographie</option>
                  <option>Expertise foncière</option>
                  <option>Aménagement & Lotissement</option>
                  <option>Audit immobilier</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4473c5] focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#4473c5] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#3a5f9a] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  alert('Demande envoyée ! Nous vous contacterons bientôt.');
                  setIsDrawerOpen(false);
                }}
              >
                Envoyer la demande
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
