import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-10 w-10 text-white" />
              <Sparkles className="h-4 w-4 text-accent-300 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-inter">Audix11AI</h1>
              <p className="text-white/80 text-sm">Multilingual Voice Assistant</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white/80 hover:text-white transition-colors">Features</button>
            <button className="text-white/80 hover:text-white transition-colors">Pricing</button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all">
              Upgrade Pro
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;