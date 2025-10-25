'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      slug: "amenagement-port-conakry",
      title: "Aménagement du Port de Conakry",
      description: "Pour la Compagnie des Bauxites de Kindia (CBK), le BTT a réalisé le relevé topographique complet du chemin de fer minier.",
      image: "/projet1.jpg",
      alt: "Aménagement du Port de Conakry"
    },
    {
      id: 2,
      slug: "chantier-minier-guinee",
      title: "Chantier minier",
      description: "Relevé topographique et suivi des travaux d'excavation pour un projet minier d'envergure en Guinée.",
      image: "/projet2.jpg",
      alt: "Chantier minier"
    },
    {
      id: 3,
      slug: "infrastructure-routiere",
      title: "Infrastructure routière",
      description: "Aménagement et lotissement d'une zone industrielle avec création de voies d'accès et parkings.",
      image: "/projet3.jpg",
      alt: "Infrastructure routière"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-16 h-1 mx-auto mb-6"
            style={{backgroundColor: '#F4A301'}}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl font-bold text-black">
            Nos derniers projets
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ borderColor: '#E9E9E9' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                {/* Project Image */}
                <div className="relative h-64 p-4">
                  <div className="w-full h-full rounded-lg overflow-hidden border" style={{ borderColor: '#E9E9E9' }}>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{color: '#737373'}}>
                    {project.description}{' '}
                    <motion.span
                      className="text-[#00B7C3] text-sm font-medium hover:text-[#F4A301] transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      Voir plus
                    </motion.span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" href="/portfolio">
              Voir tous nos projets →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
