'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A2E5C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Company Information */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="BTT Logo"
                width={80}
                height={80}
                className="text-white"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm">Bureau des Travaux Topographiques -</p>
              <p className="text-sm">Précision et expertise depuis 1992.</p>
            </div>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm hover:text-[#F4A301] transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="block text-sm hover:text-[#F4A301] transition-colors">
                À propos
              </Link>
              <Link href="/services" className="block text-sm hover:text-[#F4A301] transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="block text-sm hover:text-[#F4A301] transition-colors">
                Réalisations
              </Link>
              <Link href="/team" className="block text-sm hover:text-[#F4A301] transition-colors">
                Équipe
              </Link>
              <Link href="/contact" className="block text-sm hover:text-[#F4A301] transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">Nos Services</h3>
            <div className="space-y-2">
              <p className="text-sm">Topographie & Cartographie</p>
              <p className="text-sm">Expertise foncière</p>
              <p className="text-sm">Aménagement & Lotissement</p>
              <p className="text-sm">Audit immobilier</p>
            </div>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#F4A301] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Conakry, Guinée</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#F4A301] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm">+224 XXX XXX XXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#F4A301] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm">contact@btt-guinee.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Separator Line */}
        <motion.div 
          className="border-t border-gray-400 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-300">
            © 2025 Bureau des Travaux Topographiques. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
