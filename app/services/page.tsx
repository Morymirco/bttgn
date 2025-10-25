'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Topographie & Cartographie',
      description: 'Levés topographiques précis, cartographie numérique et modélisation 3D pour tous vos projets fonciers et d\'aménagement.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      features: [
        'Levés topographiques de précision',
        'Cartographie numérique et SIG',
        'Modélisation 3D et BIM',
        'Plans cadastraux et de bornage'
      ]
    },
    {
      id: 2,
      title: 'Expertise Foncière',
      description: 'Expertise complète en matière foncière, délimitation de propriétés, bornage et résolution de conflits fonciers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        'Délimitation et bornage de propriétés',
        'Expertise judiciaire foncière',
        'Résolution de conflits fonciers',
        'Certificats de propriété'
      ]
    },
    {
      id: 3,
      title: 'Aménagement & Lotissement',
      description: 'Conception et réalisation de projets d\'aménagement urbain, lotissements résidentiels et zones d\'activité.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        'Conception de lotissements',
        'Plans d\'aménagement urbain',
        'Études de faisabilité',
        'Suivi de chantier'
      ]
    },
    {
      id: 4,
      title: 'Audit Immobilier',
      description: 'Évaluation et audit de biens immobiliers, expertise en matière de construction et de conformité réglementaire.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'Évaluation de biens immobiliers',
        'Audit de conformité',
        'Expertise construction',
        'Rapports d\'expertise'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Analyse de vos besoins et définition du projet'
    },
    {
      step: '02',
      title: 'Étude',
      description: 'Réalisation des études techniques et des levés'
    },
    {
      step: '03',
      title: 'Rapport',
      description: 'Livraison des documents et rapports d\'expertise'
    },
    {
      step: '04',
      title: 'Suivi',
      description: 'Accompagnement et suivi post-projet'
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
              Nos Services
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
              Des solutions complètes en topographie, expertise foncière et aménagement
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F4A301' }}
                  >
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#012233' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-[#F4A301] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
              Notre Processus
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
              Une méthodologie éprouvée pour garantir la qualité de nos services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: '#F4A301' }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div 
                      className="hidden md:block absolute top-8 left-1/2 w-full h-0.5"
                      style={{ backgroundColor: '#F4A301' }}
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2" style={{ color: '#012233' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Notre Expertise
                </motion.h2>
                <motion.div 
                  className="w-16 h-1 mb-6" 
                  style={{ backgroundColor: '#F4A301' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
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
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Avec plus de 25 ans d'expérience, notre équipe maîtrise les dernières technologies de topographie et d'expertise foncière. Nous utilisons des équipements de pointe et des logiciels professionnels pour garantir la précision et la qualité de nos interventions.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: '#F4A301' }}>
                    25+
                  </div>
                  <p className="text-sm text-gray-600">Années d'expérience</p>
                </motion.div>

                <motion.div 
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: '#F4A301' }}>
                    378+
                  </div>
                  <p className="text-sm text-gray-600">Projets réalisés</p>
                </motion.div>
              </div>
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
                  src="/services.svg"
                  alt="Expertise BTT"
                  className="w-full h-96 object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
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
            Besoin de nos services ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" href="/contact">
              Demander un devis
            </Button>
            <Button variant="outline" href="/about">
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
