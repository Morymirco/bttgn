import { NextRequest, NextResponse } from 'next/server';

// Simuler un stockage en mémoire (en production, utilisez une base de données)
let maintenanceState = {
  isMaintenanceMode: false,
  message: "Nous effectuons actuellement des améliorations sur notre plateforme. Merci de votre patience, nous serons de retour très bientôt !",
  lastUpdated: new Date().toISOString()
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: maintenanceState
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { isMaintenanceMode, message } = body;

    // Validation
    if (typeof isMaintenanceMode !== 'boolean') {
      return NextResponse.json(
        { success: false, error: 'isMaintenanceMode must be a boolean' },
        { status: 400 }
      );
    }

    // Mettre à jour l'état
    maintenanceState = {
      isMaintenanceMode,
      message: message || maintenanceState.message,
      lastUpdated: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      data: maintenanceState,
      message: isMaintenanceMode 
        ? 'Mode maintenance activé' 
        : 'Mode maintenance désactivé'
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
