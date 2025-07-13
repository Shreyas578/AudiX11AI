import React from 'react';
import { Crown, Zap, Globe, Infinity, Star, ArrowRight } from 'lucide-react';

const PremiumFeatures: React.FC = () => {
  const features = [
    {
      icon: <Infinity className="h-6 w-6" />,
      title: 'Unlimited Uploads',
      description: 'Process unlimited files daily',
      current: '3/day limit',
      premium: 'Unlimited',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Large Files',
      description: 'Upload files up to 100MB',
      current: '5MB limit',
      premium: '100MB',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Advanced Translation',
      description: 'Multi-language support',
      current: 'Basic only',
      premium: '40+ languages',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Premium Voices',
      description: 'Studio-quality AI voices',
      current: '4 voices',
      premium: '20+ voices',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 rounded-xl text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
            <Crown className="h-6 w-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Upgrade to Pro</h3>
            <p className="text-white/80">Unlock the full potential of Audix11AI</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-accent-300">{feature.icon}</div>
                <h4 className="font-medium">{feature.title}</h4>
              </div>
              <p className="text-sm text-white/80 mb-3">{feature.description}</p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-white/60">{feature.current}</span>
                <ArrowRight className="h-3 w-3 text-white/60" />
                <span className="text-accent-300 font-medium">{feature.premium}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-4">
            <span className="text-3xl font-bold">$9.99</span>
            <span className="text-white/80">/month</span>
          </div>
          <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
          <p className="text-xs text-white/60 mt-2">7-day free trial • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;