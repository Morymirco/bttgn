'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const projects = [
    {
      id: 1,
      title: "Aménagement du Quartier de Kaloum",
      category: "Aménagement Urbain",
      image: "/projet1.jpg",
      description: "Projet d'aménagement complet du quartier de Kaloum incluant la topographie, le bornage et la viabilisation des parcelles.",
      location: "Conakry, Guinée",
      year: "2023",
      features: ["Topographie complète", "Bornage des parcelles", "Viabilisation", "Plan d'aménagement"]
    },
    {
      id: 2,
      title: "Projet Minier de Boké",
      category: "Projets Miniers",
      image: "/projet2.jpg",
      description: "Expertise topographique pour un projet minier d'envergure incluant la cartographie, le bornage et l'évaluation foncière.",
      location: "Boké, Guinée",
      year: "2022",
      features: ["Cartographie minière", "Bornage industriel", "Évaluation foncière", "Expertise technique"]
    },
    {
      id: 3,
      title: "Lotissement de Dixinn",
      category: "Lotissement",
      image: "/projet3.jpg",
      description: "Création et aménagement d'un lotissement résidentiel avec viabilisation complète et bornage des parcelles.",
      location: "Dixinn, Conakry",
      year: "2023",
      features: ["Lotissement résidentiel", "Viabilisation", "Bornage", "Plan de lotissement"]
    },
    {
      id: 4,
      title: "Infrastructure Routière - Autoroute",
      category: "Infrastructure",
      image: "/projet1.jpg",
      description: "Expertise topographique pour la construction d'une autoroute incluant les études préliminaires et le suivi des travaux.",
      location: "Conakry - Kindia",
      year: "2021",
      features: ["Études préliminaires", "Suivi des travaux", "Contrôle qualité", "Livraison"]
    },
    {
      id: 5,
      title: "Audit Foncier - Secteur Public",
      category: "Audit Foncier",
      image: "/projet2.jpg",
      description: "Audit complet du patrimoine foncier d'une institution publique avec cartographie et évaluation des biens.",
      location: "Conakry, Guinée",
      year: "2022",
      features: ["Audit patrimonial", "Cartographie", "Évaluation", "Rapport d'expertise"]
    },
    {
      id: 6,
      title: "Aménagement Portuaire",
      category: "Infrastructure Portuaire",
      image: "/projet3.jpg",
      description: "Expertise topographique pour l'aménagement et l'extension du port de Conakry avec études bathymétriques.",
      location: "Port de Conakry",
      year: "2023",
      features: ["Études bathymétriques", "Aménagement portuaire", "Extension", "Expertise maritime"]
    }
  ];

  const categories = [
    "Tous",
    "Aménagement Urbain",
    "Projets Miniers", 
    "Lotissement",
    "Infrastructure",
    "Audit Foncier",
    "Infrastructure Portuaire"
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Nos Réalisations
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
              Découvrez nos projets d'excellence en topographie, aménagement et expertise foncière
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Filter Section */}
      <motion.section 
        className="py-12"
        style={{ backgroundColor: '#F4F5F7' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-[#F4A301] text-white' 
                    : 'bg-white text-gray-600 hover:bg-[#F4A301] hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-poppins)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="w-full h-64 overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{ 
                        backgroundColor: 'rgba(244, 163, 1, 0.9)',
                        color: 'white',
                        fontFamily: 'var(--font-poppins)'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#012233' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {project.description}
                  </p>

                  {/* Location and Year */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span style={{ fontFamily: 'var(--font-poppins)' }}>
                      📍 {project.location}
                    </span>
                    <span style={{ fontFamily: 'var(--font-poppins)' }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 text-xs rounded-md"
                          style={{ 
                            backgroundColor: '#F4F5F7',
                            color: '#012233',
                            fontFamily: 'var(--font-poppins)'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <motion.div
                    className="mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      href={`/portfolio/${project.id}`}
                      className="w-full"
                      style={{
                        borderColor: '#F4A301',
                        color: '#F4A301',
                        fontFamily: 'var(--font-poppins)'
                      }}
                    >
                      Voir le projet →
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
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
              Nos Chiffres Clés
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Plus de 30 ans d'expertise au service de vos projets
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#F4A301' }}>
                <AnimatedCounter end={378} duration={2.5} />+
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Projets Réalisés
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#F4A301' }}>
                <AnimatedCounter end={25} duration={2} />+
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Années d'Expérience
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#F4A301' }}>
                <AnimatedCounter end={15} duration={1.5} />+
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Secteurs d'Activité
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#F4A301' }}>
                <AnimatedCounter end={100} duration={2} />%
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                Satisfaction Client
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
            Prêt à réaliser votre projet ?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contactez-nous pour discuter de votre projet et bénéficier de notre expertise.
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
              Demander un devis →
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
