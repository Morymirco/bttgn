'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#0A2E5C' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Logo B.T.T.svg"
            alt="B.T.T. Logo"
            className="h-16 w-auto mx-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>

        {/* Spinner circulaire */}
        <motion.div
          className="relative w-16 h-16 mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Cercle de fond */}
          <div 
            className="absolute inset-0 rounded-full border-4"
            style={{ borderColor: 'rgba(244, 163, 1, 0.2)' }}
          />
          
          {/* Cercle animé */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-4"
            style={{ borderColor: 'transparent', borderTopColor: '#F4A301' }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>

        {/* Texte de chargement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p 
            className="text-white text-lg font-medium"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Chargement...
          </p>
        </motion.div>

        {/* Points animés */}
        <motion.div
          className="flex justify-center space-x-1 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#F4A301' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
