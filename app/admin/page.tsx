'use client';

import { useMaintenance } from '../contexts/MaintenanceContext';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';

export default function AdminPage() {
  const { 
    isMaintenanceMode, 
    maintenanceData,
    loading, 
    error, 
    toggleMaintenanceMode, 
    setMaintenanceMode,
    refreshMaintenanceState 
  } = useMaintenance();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggleMaintenance = async () => {
    if (isMaintenanceMode) {
      // Désactiver la maintenance directement
      await handleSetMaintenanceMode(false);
    } else {
      // Demander confirmation pour activer la maintenance
      setShowConfirmation(true);
    }
  };

  const handleSetMaintenanceMode = async (value: boolean) => {
    try {
      setIsUpdating(true);
      await setMaintenanceMode(value);
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const confirmMaintenance = async () => {
    await handleSetMaintenanceMode(true);
    setShowConfirmation(false);
  };

  const cancelMaintenance = () => {
    setShowConfirmation(false);
  };

  // Affichage de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFFFF'}}>
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{borderColor: '#4473c5', borderTopColor: 'transparent'}}></div>
          <p style={{color: '#4473c5'}}>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFFFFF'}}>
      <Header />
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo B.T.T.svg"
              alt="BTTGN Logo"
              width={200}
              height={80}
              priority
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#4473c5'}}>
            Administration
          </h1>
          <p className="text-lg" style={{color: '#4473c5'}}>
            Gestion du mode maintenance
          </p>
          
          {/* Affichage des erreurs */}
          {error && (
            <div className="mt-4 p-4 border rounded-lg" style={{backgroundColor: '#FFFFFF', borderColor: '#4473c5'}}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="#4473c5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p style={{color: '#4473c5'}}>{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Status Card */}
        <div className="rounded-lg shadow-lg p-8 mb-8" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2" style={{color: '#4473c5'}}>
                État du site
              </h2>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#4473c5'}}></div>
                <span className="text-lg font-medium" style={{color: '#4473c5'}}>
                  {isMaintenanceMode ? 'Mode Maintenance Actif' : 'Site Opérationnel'}
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm mb-2" style={{color: '#4473c5'}}>
                Dernière modification
              </p>
              <p className="text-sm font-mono" style={{color: '#4473c5'}}>
                {maintenanceData?.lastUpdated 
                  ? new Date(maintenanceData.lastUpdated).toLocaleString('fr-FR')
                  : 'Non disponible'
                }
              </p>
              <button
                onClick={refreshMaintenanceState}
                className="mt-2 text-xs hover:underline"
                style={{color: '#4473c5'}}
                disabled={loading}
              >
                Actualiser
              </button>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="rounded-lg shadow-lg p-8" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
          <h3 className="text-xl font-semibold mb-6" style={{color: '#4473c5'}}>
            Contrôles
          </h3>

          {!showConfirmation ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
                <div>
                  <h4 className="font-medium" style={{color: '#4473c5'}}>
                    Mode Maintenance
                  </h4>
                  <p className="text-sm" style={{color: '#4473c5'}}>
                    {isMaintenanceMode 
                      ? 'Le site affiche actuellement la page de maintenance' 
                      : 'Le site est accessible normalement'
                    }
                  </p>
                </div>
                <button
                  onClick={handleToggleMaintenance}
                  disabled={isUpdating}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center text-white ${
                    isUpdating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{backgroundColor: '#4473c5'}}
                >
                  {isUpdating && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  )}
                  {isUpdating 
                    ? 'Mise à jour...' 
                    : `${isMaintenanceMode ? 'Désactiver' : 'Activer'} Maintenance`
                  }
                </button>
              </div>

              {/* Informations supplémentaires */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
                  <h5 className="font-medium mb-2" style={{color: '#4473c5'}}>
                    Mode Normal
                  </h5>
                  <p className="text-sm" style={{color: '#4473c5'}}>
                    Les visiteurs voient la landing page BTTGN avec le message "En cours de développement"
                  </p>
                </div>
                <div className="p-4 rounded-lg" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
                  <h5 className="font-medium mb-2" style={{color: '#4473c5'}}>
                    Mode Maintenance
                  </h5>
                  <p className="text-sm" style={{color: '#4473c5'}}>
                    Les visiteurs voient une page de maintenance avec un message d'indisponibilité temporaire
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Confirmation Dialog */
            <div className="text-center space-y-6">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#FFFFFF', border: '1px solid #4473c5'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#4473c5'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2" style={{color: '#4473c5'}}>
                  Confirmer l'activation du mode maintenance
                </h4>
                <p style={{color: '#4473c5'}}>
                  Cette action rendra le site temporairement inaccessible aux visiteurs.
                  <br />
                  Êtes-vous sûr de vouloir continuer ?
                </p>
              </div>
              
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={confirmMaintenance}
                  disabled={isUpdating}
                  className="px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{backgroundColor: '#4473c5'}}
                >
                  {isUpdating && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  )}
                  Oui, activer la maintenance
                </button>
                <button
                  onClick={cancelMaintenance}
                  disabled={isUpdating}
                  className="px-6 py-3 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{backgroundColor: '#4473c5'}}
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm" style={{color: '#4473c5'}}>
            © 2025 BTTGN. Administration
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
