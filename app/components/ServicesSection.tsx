'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Topographie et Cartographie",
      description: "Le BTT réalise des levés topographiques et cartographiques de haute précision pour tous types de projets : aménagements urbains, infrastructures routières, ouvrages hydrauliques..."
    },
    {
      id: 2,
      title: "Aménagement et lotissement",
      description: "Le BTT accompagne ses clients dans la planification, la conception et le suivi de chantiers d'aménagement et de construction..."
    },
    {
      id: 3,
      title: "Expertise foncière",
      description: "Notre équipe d'experts évalue la valeur vénale, locative et d'assurance des biens immobiliers et fonciers. Nous réalisons des audits, expertises et états des lieux pour les particuliers..."
    },
    {
      id: 4,
      title: "Audit immobilier",
      description: "Nos consultants offrent des services de conseil stratégique et d'audit immobilier : analyse de la situation foncière, évaluation des risques,..."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/services.png')"
          }}
        />
        <div 
          className="absolute inset-0"
          style={{backgroundColor: 'rgba(33, 43, 54, 0.8)'}}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          <h2 className="text-4xl font-bold text-white">
            Nos services et domaines d'expertise
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="rounded-2xl p-6 shadow-lg"
              style={{backgroundColor: '#E9F1FA'}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Accent Line */}
              <motion.div 
                className="w-12 h-1 mb-4"
                style={{backgroundColor: '#F4A301'}}
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              />
              
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
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
            <Button variant="outline" href="/services">
              Voir plus →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
