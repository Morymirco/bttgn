'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sâa Benjamin Sandouno",
      role: "Fondateur & Géomètre Expert Agréé",
      image: "https://www.morykoulibaly.me/images/profile-mory.png",
      description: "Fondateur du BTT en 1992, Géomètre Expert Agréé et membre fondateur de l'Ordre des Géomètres-Experts de Guinée (OGEG). Plus de 30 ans d'expérience dans la topographie et l'expertise foncière.",
      expertise: ["Topographie", "Expertise foncière", "Aménagement", "Formation"]
    },
    {
      name: "David Sandouno",
      role: "Géomètre Expert Agréé",
      image: "https://www.morykoulibaly.me/images/profile-mory.png",
      description: "Géomètre Expert Agréé spécialisé dans les projets miniers et l'aménagement urbain. Expert en technologies modernes de mesure et de cartographie.",
      expertise: ["Projets miniers", "Aménagement urbain", "Technologies modernes", "Cartographie"]
    },
    {
      name: "Kadiatou Sow",
      role: "Ingénieure Génie Civil",
      image: "https://www.morykoulibaly.me/images/profile-mory.png",
      description: "Ingénieure Génie Civil spécialisée dans les infrastructures et l'aménagement. Expertise en conception et supervision de projets d'infrastructure.",
      expertise: ["Infrastructures", "Conception", "Supervision", "Aménagement"]
    }
  ];

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
              Notre Équipe
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
              Une équipe engagée, experte et passionnée par la précision
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Team Section */}
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
              Rencontrez Notre Équipe
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Des professionnels qualifiés et expérimentés au service de vos projets
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Photo */}
                <div className="w-full h-56 mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#012233' }}>
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-lg mb-4" style={{ color: '#F4A301', fontFamily: 'var(--font-poppins)' }}>
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(244, 163, 1, 0.1)',
                        color: '#F4A301',
                        fontFamily: 'var(--font-poppins)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quote Section */}
      <motion.section 
        className="py-12"
        style={{ backgroundColor: '#0A2E5C' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Orange Quotation Marks */}
            <div className="mb-8">
              <svg 
                className="w-16 h-16 mx-auto" 
                style={{ color: '#F4A301' }} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
              </svg>
            </div>

            {/* Quote Text */}
            <motion.blockquote 
              className="font-medium text-white leading-relaxed mb-8"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: '24px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "La précision n'est pas un luxe, c'est une nécessité. Notre engagement<br />
              envers l'excellence guide chacune de nos actions."
            </motion.blockquote>

            {/* Attribution */}
            <motion.div
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: '#D1D5DC'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              — Sâa Benjamin Sandouno, Fondateur
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pourquoi nous rejoindre Section */}
      <motion.section 
        className="py-20"
        style={{ backgroundColor: '#F4F5F7' }}
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
              Pourquoi nous rejoindre ?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Découvrez les avantages de rejoindre notre équipe d'experts
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Formation Continue */}
            <motion.div 
              className="p-6 bg-white rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(244, 163, 1, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm-2 15.5l-4-2.18v-4.09l4 2.18v4.09zm6-2.18l-4 2.18v-4.09l4-2.18v4.09z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#012233' }}>
                Formation Continue
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Développement professionnel constant avec les dernières technologies et méthodes
              </p>
            </motion.div>

            {/* Projets d'envergure */}
            <motion.div 
              className="p-6 bg-white rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(244, 163, 1, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#012233' }}>
                Projets d'envergure
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Participation à des projets miniers, urbains et d'infrastructure de grande ampleur
              </p>
            </motion.div>

            {/* Environnement stimulant */}
            <motion.div 
              className="p-6 bg-white rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(244, 163, 1, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 15.5V22h2v-6h2.5l2.54 7.63A1.5 1.5 0 0 0 9.46 24H12c.8 0 1.54-.37 2.01-.99L16 21l1.99 2.01A2.5 2.5 0 0 0 20 24h3.5V22H22v6h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#012233' }}>
                Environnement stimulant
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Collaboration avec des experts passionnés dans un cadre de travail motivant
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#012233' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prêt à travailler avec notre équipe ?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contactez-nous dès aujourd'hui pour discuter de votre projet avec nos experts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" href="/contact">
              Nous contacter →
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
