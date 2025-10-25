'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Données du projet (en réalité, cela viendrait d'une API ou d'un CMS)
  const project = {
    id: 1,
    title: "Aménagement du Port de Conakry",
    category: "Infrastructure Portuaire",
    location: "Conakry, Guinée",
    year: "2023",
    duration: "18 mois",
    client: "Ministère des Transports",
    description: "Projet d'aménagement et de modernisation du port principal de Conakry, incluant la construction de nouveaux quais, l'amélioration des infrastructures logistiques et l'optimisation des flux de marchandises.",
    longDescription: "Ce projet ambitieux vise à transformer le port de Conakry en un hub logistique moderne et efficace. Notre équipe a réalisé une étude topographique complète, des levés bathymétriques, et a supervisé la construction de nouvelles infrastructures portuaires. Le projet inclut également l'aménagement de zones de stockage, l'optimisation des voies d'accès et l'installation de systèmes de navigation modernes.",
    challenges: [
      "Levés topographiques en milieu maritime",
      "Coordination avec les activités portuaires existantes",
      "Gestion des contraintes environnementales",
      "Optimisation des flux logistiques"
    ],
    solutions: [
      "Utilisation de technologies GPS RTK pour la précision",
      "Planification des interventions en coordination avec les autorités portuaires",
      "Mise en place de protocoles environnementaux stricts",
      "Modélisation 3D des flux pour l'optimisation"
    ],
    technologies: [
      "GPS RTK",
      "Stations totales",
      "Logiciels CAO/DAO",
      "Modélisation 3D"
    ],
    images: [
      "/projet1.jpg",
      "/projet2.jpg", 
      "/projet3.jpg",
      "/projet1.jpg",
      "/projet2.jpg"
    ],
    stats: {
      surface: "45 hectares",
      precision: "±2cm",
      duree: "18 mois",
      equipe: "12 personnes"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Image with Overlay - Hero Section */}
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
            <motion.div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#F4A301' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span 
                className="text-white font-medium text-sm"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {project.category}
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {project.title}
            </motion.h1>

            <motion.div 
              className="w-24 h-1 mx-auto mb-8" 
              style={{ backgroundColor: '#F4A301' }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p 
              className="text-xl text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Project Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Images Gallery */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Image
                    src={project.images[activeImageIndex]}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                        activeImageIndex === index 
                          ? 'ring-2 ring-[#F4A301] scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        width={150}
                        height={100}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Project Description */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 
                  className="text-3xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'var(--font-montserrat)', 
                    fontWeight: 700,
                    color: '#0A2E5C'
                  }}
                >
                  À propos du projet
                </h2>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-montserrat)', 
                    fontWeight: 400,
                    color: '#4A5565'
                  }}
                >
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ 
                      fontFamily: 'var(--font-montserrat)', 
                      fontWeight: 700,
                      color: '#0A2E5C'
                    }}
                  >
                    Défis rencontrés
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li 
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F4A301' }}></div>
                        <span 
                          style={{ 
                            fontFamily: 'var(--font-montserrat)', 
                            fontWeight: 400,
                            color: '#4A5565'
                          }}
                        >
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ 
                      fontFamily: 'var(--font-montserrat)', 
                      fontWeight: 700,
                      color: '#0A2E5C'
                    }}
                  >
                    Solutions apportées
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li 
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F4A301' }}></div>
                        <span 
                          style={{ 
                            fontFamily: 'var(--font-montserrat)', 
                            fontWeight: 400,
                            color: '#4A5565'
                          }}
                        >
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl border mb-8"
                style={{ borderColor: '#E5E7EB' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 
                  className="text-xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'var(--font-montserrat)', 
                    fontWeight: 700,
                    color: '#0A2E5C'
                  }}
                >
                  Informations du projet
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Localisation
                    </span>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#0A2E5C'
                      }}
                    >
                      {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Année
                    </span>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#0A2E5C'
                      }}
                    >
                      {project.year}
                    </p>
                  </div>
                  
                  <div>
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Durée
                    </span>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#0A2E5C'
                      }}
                    >
                      {project.duration}
                    </p>
                  </div>
                  
                  <div>
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Client
                    </span>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#0A2E5C'
                      }}
                    >
                      {project.client}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Statistics */}
              <motion.div
                className="bg-white p-6 rounded-2xl border mb-8"
                style={{ borderColor: '#E5E7EB' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 
                  className="text-xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'var(--font-montserrat)', 
                    fontWeight: 700,
                    color: '#0A2E5C'
                  }}
                >
                  Chiffres clés
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#F4A301'
                      }}
                    >
                      {project.stats.surface}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Surface
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#F4A301'
                      }}
                    >
                      {project.stats.precision}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Précision
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#F4A301'
                      }}
                    >
                      {project.stats.duree}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Durée
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#F4A301'
                      }}
                    >
                      {project.stats.equipe}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'var(--font-montserrat)', 
                        color: '#4A5565'
                      }}
                    >
                      Équipe
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                className="bg-white p-6 rounded-2xl border"
                style={{ borderColor: '#E5E7EB' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 
                  className="text-xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'var(--font-montserrat)', 
                    fontWeight: 700,
                    color: '#0A2E5C'
                  }}
                >
                  Technologies utilisées
                </h3>
                
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#F4A301' }}></div>
                      <span 
                        style={{ 
                          fontFamily: 'var(--font-montserrat)', 
                          fontWeight: 400,
                          color: '#4A5565'
                        }}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Intéressé par un projet similaire ?
          </motion.h2>
          <motion.p 
            className="text-lg text-white max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Notre équipe d'experts est prête à vous accompagner dans vos projets d'infrastructure et d'aménagement.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="primary"
              href="/contact"
              style={{ borderRadius: '10px', backgroundColor: '#F4A301' }}
            >
              Demander un devis
            </Button>
            <Button 
              variant="outline"
              href="/portfolio"
              style={{ borderRadius: '10px', borderColor: 'white', color: 'white' }}
            >
              Voir nos autres projets
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
