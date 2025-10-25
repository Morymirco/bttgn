'use client';

import { useMaintenance } from './contexts/MaintenanceContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import { motion } from 'framer-motion';

// Composant pour l'animation d'incrémentation
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          const increment = end / (duration * 60); // 60 FPS
          const timer = setInterval(() => {
            setCount(prev => {
              if (prev >= end) {
                clearInterval(timer);
                return end;
              }
              return Math.min(prev + increment, end);
            });
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{Math.floor(count)}</span>;
}

export default function Home() {
  const { isMaintenanceMode } = useMaintenance();
  const router = useRouter();

  useEffect(() => {
    if (isMaintenanceMode) {
      router.push('/maintenance');
    }
  }, [isMaintenanceMode, router]);

  // Si en mode maintenance, ne rien afficher (redirection en cours)
  if (isMaintenanceMode) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Background Image with Overlay - Only for Hero Section */}
      <div className="relative min-h-screen">
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
        className="relative min-h-screen flex items-end justify-start overflow-hidden md:overflow-visible z-10" 
        style={{marginTop: '-120px', paddingTop: '120px', paddingBottom: '80px'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Content */}
        <div className="relative z-10 text-left px-4 md:px-12 max-w-6xl mx-auto md:mx-0" style={{marginTop: '120px', marginLeft: '0px'}}>
          <div className="md:ml-20">

          {/* Main Headline */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Précision, expertise et fiabilité au service</span>
            <span className="block">de vos projets fonciers.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-white mb-8 md:mb-12 max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Depuis plus de 20 ans, le Bureau des Travaux Topographiques</span>
            <span className="block">accompagne les institutions, entreprises et particuliers dans</span>
            <span className="block">leurs projets.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="w-full sm:w-auto mb-4 sm:mb-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" href="/contact" className="w-full sm:w-auto">
                Demander un devis
              </Button>
            </motion.div>

            <motion.div
              className="w-full sm:w-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" href="/contact" className="w-full sm:w-auto">
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </motion.section>
      </div>

      {/* About Section */}
      <motion.section 
        className="py-20" 
        style={{backgroundColor: '#F0F7FF'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - House Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                     <div>
                       <img 
                         src="/about.svg"
                         alt="À propos BTT"
                         className="w-full h-150 object-cover"
                       />
                {/* Card en haut */}
                {/* <div className="absolute top-0 left-0 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-xs text-center">
                  <p className="font-bold text-gray-800 text-lg">
                    Expertise & Innovation
                  </p>
                </div> */}
              </div>
            </motion.div>

            {/* Right Side - About Text */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                       <motion.h2 
                         className="mb-4"
                         style={{
                           fontFamily: 'var(--font-poppins)',
                           fontWeight: 400,
                           fontSize: '42px',
                           lineHeight: '40px',
                           letterSpacing: '0%',
                           color: '#012233'
                         }}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 0.4 }}
                         viewport={{ once: true }}
                       >
                         À propos du BTT
                       </motion.h2>
                <motion.div 
                  className="w-16 h-1 mb-6" 
                  style={{backgroundColor: '#F4A301'}}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              
                     <motion.p 
                       style={{
                         fontFamily: 'var(--font-poppins)',
                         fontWeight: 400,
                         fontSize: '14px',
                         lineHeight: '28px',
                         letterSpacing: '0%',
                         color: '#012233'
                       }}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: 0.8 }}
                       viewport={{ once: true }}
                     >
                Créé en 1992 par Sâa Benjamin Sandouno, Géomètre Expert Agréé et membre fondateur de l'Ordre des Géomètres-Experts de Guinée (OGEG), le Bureau des Travaux Topographiques (BTT) est l'un des cabinets de référence dans le domaine de la topographie, de l'expertise foncière et immobilière en Guinée. Depuis plus de 20 ans, le BTT accompagne les particuliers, entreprises, institutions publiques et projets miniers dans la gestion et la valorisation du foncier. Grâce à une expertise reconnue et une équipe hautement qualifiée, le cabinet a su s'imposer comme un acteur incontournable du secteur.
              </motion.p>

              <motion.div 
                className="pt-4 flex justify-end"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  href="/about"
                  style={{
                    borderColor: '#F4A300',
                    color: '#F4A300',
                    fontFamily: 'var(--font-poppins)'
                  }}
                >
                  En savoir plus →
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-16" 
        style={{backgroundColor: '#F0F7FF'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-5xl font-bold" 
                style={{color: '#F4A301'}}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter end={25} duration={2} />+
              </motion.div>
              <p className="text-lg text-black">
                Years of Experience
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-5xl font-bold" 
                style={{color: '#F4A301'}}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter end={378} duration={2.5} />+
              </motion.div>
              <p className="text-lg text-black">
                Project Complete
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-5xl font-bold" 
                style={{color: '#F4A301'}}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter end={69} duration={1.5} />+
              </motion.div>
              <p className="text-lg text-black">
                Winning Global Award
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
