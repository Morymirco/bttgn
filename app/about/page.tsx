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

      {/* Nos Valeurs */}
      <motion.section 
        className="py-20"
        style={{ backgroundColor: '#F8F8F8' }}
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
              Nos Valeurs
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Les principes qui guident notre travail quotidien et notre engagement envers nos clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Précision */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/precison.svg" alt="Précision" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Précision
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Nous garantissons une exactitude maximale dans chacune de nos interventions techniques.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Intégrité */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/integrite.svg" alt="Intégrité" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Intégrité
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Nos pratiques sont fondées sur l'honnêteté, la transparence et le respect des normes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Innovation */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/innovation.svg" alt="Innovation" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Nous adoptons les technologies les plus avancées pour optimiser nos services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professionnalisme */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/pro.svg" alt="Professionnalisme" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Professionnalisme
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Une équipe qualifiée et expérimentée au service de l'excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Engagement */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/engagement.svg" alt="Engagement" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Engagement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Nous nous engageons pleinement dans la réussite de chaque projet confié.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div 
              className="p-6 bg-white rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/expertige.svg" alt="Expertise" className="w-8 h-8" style={{ color: '#F4A301' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#012233' }}>
                    Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Plus de 30 ans d'expérience dans les domaines de la topographie et de l'aménagement.
                  </p>
                </div>
              </div>
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
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Une équipe engagée, experte et passionnée par la précision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sâa Benjamin Sandouno */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-72 h-56 mx-auto mb-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://www.morykoulibaly.me/images/profile-mory.png"
                  alt="Sâa Benjamin Sandouno"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#012233' }}>
                Sâa Benjamin Sandouno
              </h3>
              <p className="text-base" style={{ color: '#F4A301', fontFamily: 'var(--font-poppins)' }}>
                Fondateur & Géomètre Expert Agréé
              </p>
            </motion.div>

            {/* David Sandouno */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-72 h-56 mx-auto mb-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://www.morykoulibaly.me/images/profile-mory.png"
                  alt="David Sandouno"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#012233' }}>
                David Sandouno
              </h3>
              <p className="text-base" style={{ color: '#F4A301', fontFamily: 'var(--font-poppins)' }}>
                Géomètre Expert Agréé
              </p>
            </motion.div>

            {/* Kadiatou Sow */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-72 h-56 mx-auto mb-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://www.morykoulibaly.me/images/profile-mory.png"
                  alt="Kadiatou Sow"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#012233' }}>
                Kadiatou Sow
              </h3>
              <p className="text-base" style={{ color: '#F4A301', fontFamily: 'var(--font-poppins)' }}>
                Ingénieure Génie Civil
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
