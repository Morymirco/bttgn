export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-8 p-8">
        {/* Logo/Titre BTTGN */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-wider">
            BTTGN
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Message en cours de développement */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            En cours de développement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Notre plateforme est en construction. 
            <br />
            Revenez bientôt pour découvrir quelque chose d'extraordinaire.
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>

        {/* Footer simple */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 BTTGN. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
