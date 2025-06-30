import React from 'react';
import { Volume2, Globe, Headphones } from 'lucide-react';
import VoiceControls from '../VoiceControls';
import AudioPlayer from '../AudioPlayer';

interface VoiceSectionProps {
  onVoiceChange: (voice: string) => void;
  onLanguageChange: (language: string) => void;
  onSpeak: () => void;
}

const VoiceSection: React.FC<VoiceSectionProps> = ({
  onVoiceChange,
  onLanguageChange,
  onSpeak
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Natural AI Voices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from premium AI voices in 40+ languages. Experience natural, expressive speech generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Voice Controls */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Volume2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Voice Settings</h3>
                  <p className="text-gray-600">Customize your audio experience</p>
                </div>
              </div>
              <VoiceControls
                onVoiceChange={onVoiceChange}
                onLanguageChange={onLanguageChange}
                onSpeak={onSpeak}
              />
            </div>

            {/* Language Features */}
            <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-2xl p-8 border border-cyan-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Multilingual Support</h3>
                  <p className="text-gray-600">40+ languages available</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl font-bold text-cyan-600">40+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600">20+</div>
                  <div className="text-sm text-gray-600">Premium Voices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Audio Output</h3>
                  <p className="text-gray-600">High-quality generated speech</p>
                </div>
              </div>
              <AudioPlayer title="Generated Speech" />
            </div>

            {/* Voice Samples */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Voice Samples</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Sarah (English)</div>
                    <div className="text-sm text-gray-600">Natural & Warm</div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700">
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">James (English)</div>
                    <div className="text-sm text-gray-600">Professional & Clear</div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700">
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Maria (Spanish)</div>
                    <div className="text-sm text-gray-600">Expressive & Friendly</div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700">
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;