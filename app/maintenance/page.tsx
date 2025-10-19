'use client';

import { useMaintenance } from '../contexts/MaintenanceContext';
import Image from 'next/image';

export default function MaintenancePage() {
  const { maintenanceData } = useMaintenance();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFFFF'}}>
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Icône de maintenance */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse" style={{backgroundColor: '#4473c5'}}>
            <svg 
              className="w-12 h-12" 
              fill="none" 
              stroke="#FFFFFF" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Logo et Titre */}
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <Image
              src="/Logo B.T.T.svg"
              alt="BTTGN Logo"
              width={200}
              height={80}
              priority
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold" style={{color: '#4473c5'}}>
            Maintenance
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full" style={{backgroundColor: '#4473c5'}}></div>
        </div>

        {/* Message */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: '#4473c5'}}>
            Site temporairement indisponible
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{color: '#4473c5'}}>
            {maintenanceData?.message || "Nous effectuons actuellement des améliorations sur notre plateforme. Merci de votre patience, nous serons de retour très bientôt !"}
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#4473c5'}}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#4473c5', animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#4473c5', animationDelay: '0.2s'}}></div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t" style={{borderColor: '#4473c5'}}>
          <p className="text-sm" style={{color: '#4473c5'}}>
            © 2025 BTTGN. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
