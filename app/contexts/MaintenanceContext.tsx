'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MaintenanceData {
  isMaintenanceMode: boolean;
  message: string;
  lastUpdated: string;
}

interface MaintenanceContextType {
  isMaintenanceMode: boolean;
  maintenanceData: MaintenanceData | null;
  loading: boolean;
  error: string | null;
  toggleMaintenanceMode: () => Promise<void>;
  setMaintenanceMode: (value: boolean) => Promise<void>;
  refreshMaintenanceState: () => Promise<void>;
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined);

export function MaintenanceProvider({ children }: { children: ReactNode }) {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isMaintenanceMode = maintenanceData?.isMaintenanceMode || false;

  // Charger l'état depuis l'API au montage
  const fetchMaintenanceState = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/maintenance');
      const result = await response.json();
      
      if (result.success) {
        setMaintenanceData(result.data);
      } else {
        setError(result.error || 'Erreur lors du chargement');
      }
    } catch (err) {
      setError('Erreur de connexion');
      console.error('Erreur lors du chargement de l\'état de maintenance:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintenanceState();
  }, []);

  const updateMaintenanceState = async (isMaintenanceMode: boolean, message?: string) => {
    try {
      setError(null);
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isMaintenanceMode,
          message
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setMaintenanceData(result.data);
      } else {
        setError(result.error || 'Erreur lors de la mise à jour');
        throw new Error(result.error);
      }
    } catch (err) {
      setError('Erreur lors de la mise à jour');
      console.error('Erreur lors de la mise à jour de l\'état de maintenance:', err);
      throw err;
    }
  };

  const toggleMaintenanceMode = async () => {
    await updateMaintenanceState(!isMaintenanceMode);
  };

  const setMaintenanceMode = async (value: boolean) => {
    await updateMaintenanceState(value);
  };

  const refreshMaintenanceState = async () => {
    await fetchMaintenanceState();
  };

  return (
    <MaintenanceContext.Provider 
      value={{ 
        isMaintenanceMode,
        maintenanceData,
        loading,
        error,
        toggleMaintenanceMode, 
        setMaintenanceMode,
        refreshMaintenanceState
      }}
    >
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance() {
  const context = useContext(MaintenanceContext);
  if (context === undefined) {
    throw new Error('useMaintenance must be used within a MaintenanceProvider');
  }
  return context;
}
