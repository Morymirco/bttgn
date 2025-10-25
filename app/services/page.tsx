'use client';

import { motion } from 'framer-motion';
import { Open_Sans, Montserrat } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Topographie & Cartographie",
      description: "Levés topographiques de haute précision, cartographie numérique, plans de masse et plans topographiques détaillés pour tous types de projets. Utilisation de technologies GPS RTK et stations totales dernière génération.",
      icon: "map"
    },
    {
      id: 2,
      title: "Expertise & Évaluation foncière",
      description: "Expertise immobilière, évaluation de biens fonciers et immobiliers, études de valorisation, rapports d'expertise conformes aux normes internationales. Accompagnement dans les transactions et litiges fonciers.",
      icon: "clipboard"
    },
    {
      id: 3,
      title: "Construction & Aménagement",
      description: "Suivi et contrôle de travaux de construction, implantation de bâtiments, récolement de constructions, vérification de conformité. Assistance technique durant toutes les phases de construction.",
      icon: "construction"
    },
    {
      id: 4,
      title: "Lotissement & Urbanisation",
      description: "Conception et réalisation de lotissements résidentiels et commerciaux, plans d'aménagement urbain, découpage parcellaire, voiries et réseaux divers (VRD). Études d'impact et dossiers réglementaires.",
      icon: "grid"
    },
    {
      id: 5,
      title: "Études & Contrôle de travaux",
      description: "Études techniques préalables, études d'impact environnemental, contrôle qualité des travaux, réception de chantiers. Établissement de rapports techniques détaillés et recommandations.",
      icon: "search"
    },
    {
      id: 6,
      title: "Conseil & Audit immobilier",
      description: "Conseil stratégique en gestion foncière et immobilière, audit de patrimoine, optimisation de portefeuilles immobiliers. Accompagnement dans les projets de développement et d'investissement.",
      icon: "building"
    }
  ];

  return (
    <div className={`min-h-screen ${openSans.variable} ${montserrat.variable}`}>
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
                className="bg-white rounded-2xl p-8 flex flex-col h-full border"
                style={{ borderColor: '#E5E7EB' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 flex items-center justify-center"
                  >
                    {service.icon === 'map' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    )}
                    {service.icon === 'clipboard' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    )}
                    {service.icon === 'construction' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    )}
                    {service.icon === 'grid' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,3V11H11V3H3M9,9H5V5H9V9M13,3V11H21V3H13M19,9H15V5H19V9M3,13V21H11V13H3M9,19H5V15H9V19M13,13V21H21V13H13M19,19H15V15H19V19Z"/>
                      </svg>
                    )}
                    {service.icon === 'search' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                      </svg>
                    )}
                    {service.icon === 'building' && (
                      <svg className="w-12 h-12" style={{ color: '#F4A301' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.5V19H7.5V17.5C7.5,15.75 10.5,15 12,15Z"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="mb-4" 
                  style={{ 
                    fontFamily: 'var(--font-montserrat)',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: '33px',
                    letterSpacing: '0px',
                    color: '#0A2E5C'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="mb-6 flex-grow" 
                  style={{ 
                    fontFamily: 'var(--font-open-sans)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '25.5px',
                    letterSpacing: '0px',
                    color: '#4A5565'
                  }}
                >
                  {service.description}
                </p>


                {/* CTA Button */}
                <motion.div
                  className="mt-auto flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    href="/contact"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#F4A301',
                      fontFamily: 'var(--font-poppins)',
                      border: 'none'
                    }}
                  >
                    Demander un devis →
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
              Notre Processus de Travail
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Une méthodologie éprouvée pour garantir la qualité et la précision de nos interventions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyse", description: "Étude de votre projet et définition des besoins spécifiques" },
              { step: "02", title: "Planification", description: "Élaboration du plan d'intervention et des ressources nécessaires" },
              { step: "03", title: "Exécution", description: "Réalisation des travaux avec nos équipes et technologies" },
              { step: "04", title: "Livraison", description: "Remise des documents finaux et suivi post-projet" }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: '#F4A301' }}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#012233' }}>
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        style={{ backgroundColor: '#0A2E5C' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Besoin d'un service spécifique ?
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto mb-10"
            style={{ color: '#E5E7EB' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="primary" 
              href="/contact"
              style={{ borderRadius: '10px' }}
            >
              Nous contacter →
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}