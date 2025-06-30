import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse-glow">
          <img 
            src="/AudiX11AI logo with .png" 
            alt="AudiX11AI Logo" 
            className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="text-4xl font-bold text-white mb-2">AudiX11AI</h1>
          <p className="text-xl text-gray-300">Multilingual Voice Assistant</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-8">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 mt-2">{progress}% Loading...</p>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-sm">Powered by</p>
          <div className="grid grid-cols-5 gap-6 max-w-md mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">11L</span>
              </div>
              <span className="text-gray-400 text-xs">ElevenLabs</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">RC</span>
              </div>
              <span className="text-gray-400 text-xs">RevenueCat</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-gray-400 text-xs">Netlify</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-gray-400 text-xs">Supabase</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <span className="text-gray-400 text-xs">Entri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;