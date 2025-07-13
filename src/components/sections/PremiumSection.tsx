import React from 'react';
import { Crown, Star, Zap, Infinity, Globe, Headphones } from 'lucide-react';
import PremiumFeatures from '../PremiumFeatures';

const PremiumSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unlock Premium Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upgrade to Pro and experience the full power of AudiX11AI with unlimited processing, 
            premium voices, and advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Premium Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Infinity className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Unlimited Processing</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Process unlimited files daily without restrictions. No more waiting or limits.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Large Files</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Upload files up to 100MB. Perfect for long documents and high-quality media.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Advanced Translation</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Professional translation in 40+ languages with context preservation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Premium Voices</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Access to 20+ studio-quality AI voices with emotional expression.
              </p>
            </div>
          </div>

          {/* Premium Card */}
          <div className="max-w-md mx-auto lg:mx-0">
            <PremiumFeatures />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Free vs Pro Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 text-white font-medium">Feature</th>
                    <th className="text-center py-4 text-white font-medium">Free</th>
                    <th className="text-center py-4 text-white font-medium">Pro</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4">Daily Uploads</td>
                    <td className="text-center py-4">3 files</td>
                    <td className="text-center py-4 text-green-400">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4">File Size Limit</td>
                    <td className="text-center py-4">5MB</td>
                    <td className="text-center py-4 text-green-400">100MB</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4">AI Voices</td>
                    <td className="text-center py-4">4 voices</td>
                    <td className="text-center py-4 text-green-400">20+ voices</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4">Languages</td>
                    <td className="text-center py-4">Basic</td>
                    <td className="text-center py-4 text-green-400">40+ languages</td>
                  </tr>
                  <tr>
                    <td className="py-4">Priority Support</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4 text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;