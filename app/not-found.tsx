'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* Background Image with Overlay */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              filter: 'blur(2px)'
            }}
          />
          <div
            className="absolute inset-0"
            style={{backgroundColor: 'rgba(29, 59, 73, 0.8)'}}
          />
        </div>
        
        <div className="relative z-20">
          <Header />
        </div>
        
        {/* 404 Content */}
        <motion.section 
          className="relative h-full flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* 404 Number */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 
                className="text-8xl md:text-9xl font-bold text-white mb-4"
                style={{ 
                  fontFamily: 'var(--font-montserrat)', 
                  fontWeight: 700,
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                404
              </h1>
            </motion.div>

            {/* Orange Line */}
            <motion.div 
              className="w-24 h-1 mx-auto mb-8" 
              style={{ backgroundColor: '#F4A301' }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Error Message */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 700 
              }}
            >
              Page non trouvée
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ 
                fontFamily: 'var(--font-montserrat)', 
                fontWeight: 400 
              }}
            >
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                variant="primary"
                href="/"
                style={{ borderRadius: '10px', backgroundColor: '#F4A301' }}
              >
                Retour à l'accueil
              </Button>
              <Button 
                variant="outline"
                href="/contact"
                style={{ 
                  borderRadius: '10px', 
                  borderColor: 'white', 
                  color: 'white',
                  backgroundColor: 'transparent'
                }}
              >
                Nous contacter
              </Button>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p 
                className="text-sm text-white/80"
                style={{ 
                  fontFamily: 'var(--font-montserrat)', 
                  fontWeight: 400 
                }}
              >
                Vous pouvez également essayer de :
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <Link 
                  href="/about" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  À propos
                </Link>
                <Link 
                  href="/services" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Services
                </Link>
                <Link 
                  href="/portfolio" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Réalisations
                </Link>
                <Link 
                  href="/team" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Équipe
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
