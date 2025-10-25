'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Background Image with Overlay - Only for Hero Section */}
      <div className="relative h-[60vh]">
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
        
        {/* Hero Section */}
        <motion.section 
          className="relative h-full flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              À propos du BTT
            </motion.h1>
            <motion.div 
              className="w-24 h-1 mx-auto mb-8" 
              style={{ backgroundColor: '#F4A301' }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-xl text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Découvrez l'histoire, l'expertise et les valeurs du Bureau des Travaux Topographiques
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Histoire Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  style={{ color: '#012233' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Notre Histoire
                </motion.h2>
                <motion.div 
                  className="w-16 h-1 mb-6" 
                  style={{ backgroundColor: '#F4A301' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '16px',
                  lineHeight: '28px'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Créé en 1992 par Sâa Benjamin Sandouno, Géomètre Expert Agréé et membre fondateur de l'Ordre des Géomètres-Experts de Guinée (OGEG), le Bureau des Travaux Topographiques (BTT) est l'un des cabinets de référence dans le domaine de la topographie, de l'expertise foncière et immobilière en Guinée.
              </motion.p>

              <motion.p 
                className="text-gray-600 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '16px',
                  lineHeight: '28px'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Depuis plus de 20 ans, le BTT accompagne les particuliers, entreprises, institutions publiques et projets miniers dans la gestion et la valorisation du foncier. Grâce à une expertise reconnue et une équipe hautement qualifiée, le cabinet a su s'imposer comme un acteur incontournable du secteur.
              </motion.p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/histoire.jpg"
                  alt="Histoire BTT"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-20"
        style={{ backgroundColor: '#F0F7FF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#012233' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notre Mission & Vision
            </motion.h2>
            <motion.div 
              className="w-24 h-1 mx-auto mb-8" 
              style={{ backgroundColor: '#F4A301' }}
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4A301' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#012233' }}>
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                Fournir des services topographiques et d'expertise foncière de haute qualité, en respectant les normes internationales et en contribuant au développement durable de la Guinée.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4A301' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#012233' }}>
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                Devenir le leader incontournable de la topographie et de l'expertise foncière en Afrique de l'Ouest, en innovant constamment et en formant la prochaine génération d'experts.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Équipe */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#012233' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notre Équipe
            </motion.h2>
            <motion.div 
              className="w-24 h-1 mx-auto mb-8" 
              style={{ backgroundColor: '#F4A301' }}
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Une équipe d'experts passionnés et qualifiés
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fondateur */}
            <motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#012233' }}>
                Sâa Benjamin Sandouno
              </h3>
              <p className="text-sm text-gray-500 mb-2">Fondateur & Géomètre Expert</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Membre fondateur de l'OGEG, expert reconnu avec plus de 30 ans d'expérience
              </p>
            </motion.div>

            {/* Équipe technique */}
            <motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#012233' }}>
                Équipe Technique
              </h3>
              <p className="text-sm text-gray-500 mb-2">Géomètres & Techniciens</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Des professionnels qualifiés et certifiés, formés aux dernières technologies
              </p>
            </motion.div>

            {/* Support client */}
            <motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#012233' }}>
                Support Client
              </h3>
              <p className="text-sm text-gray-500 mb-2">Service Client</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Une équipe dédiée à votre satisfaction et à l'accompagnement de vos projets
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        style={{ backgroundColor: '#F0F7FF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#012233' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prêt à travailler avec nous ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrez nos services et contactez-nous pour votre projet
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" href="/services">
              Nos Services
            </Button>
            <Button variant="outline" href="/contact">
              Nous Contacter
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
