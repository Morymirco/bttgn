'use client';

import { useMaintenance } from './contexts/MaintenanceContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFFFF'}}>
      <div className="text-center space-y-8 p-8">
        {/* Logo BTTGN */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/Logo B.T.T.svg"
              alt="BTTGN Logo"
              width={300}
              height={120}
              priority
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#4473c5'}}></div>
        </div>

        {/* Message en cours de développement */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: '#4473c5'}}>
            En cours de développement
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{color: '#4473c5'}}>
            Notre plateforme est en construction. 
            <br />
            Revenez bientôt pour découvrir quelque chose d'extraordinaire.
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#4473c5'}}></div>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#4473c5', animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#4473c5', animationDelay: '0.4s'}}></div>
        </div>

        {/* Footer simple */}
        <div className="pt-8 border-t" style={{borderColor: '#4473c5'}}>
          <p className="text-sm" style={{color: '#4473c5'}}>
            © 2025 BTTGN. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
