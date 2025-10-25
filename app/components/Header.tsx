'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
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
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm shadow-lg px-6 py-4 flex items-center justify-between" style={{borderRadius: '30px'}}>
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
                  className="text-sm font-medium hover:opacity-80 transition-opacity text-black"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="inline-block ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
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

            {/* CTA Button */}
            <Button variant="secondary" href="/contact">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#4473c5'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
