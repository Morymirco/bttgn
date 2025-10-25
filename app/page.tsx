'use client';

import { useMaintenance } from './contexts/MaintenanceContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Button from './components/Button';

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
    <div className="min-h-screen relative">
      {/* Background Image with Overlay - Full Screen */}
      <div className="fixed inset-0 z-0">
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
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden z-10" style={{marginTop: '-120px', paddingTop: '120px', paddingBottom: '80px'}}>

        {/* Content */}
        <div className="relative z-10 text-left px-12 max-w-6xl" style={{marginTop: '120px', marginLeft: '80px'}}>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Précision, expertise et fiabilité au service<br />
            de vos projets fonciers.
          </h1>

          {/* Description */}
          <p className="text-white mb-12 max-w-3xl leading-relaxed" style={{fontSize: '20px'}}>
            Depuis plus de 20 ans, le Bureau des Travaux Topographiques<br />
            accompagne les institutions, entreprises et particuliers dans<br />
            leurs projets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <Button variant="primary" href="/contact">
              Demander un devis
            </Button>

            <Button variant="outline" href="/contact">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
