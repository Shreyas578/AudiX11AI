import React, { useState } from 'react';
import { Volume2, Globe, Play, Pause, RotateCcw } from 'lucide-react';

interface VoiceControlsProps {
  onVoiceChange: (voice: string) => void;
  onLanguageChange: (language: string) => void;
  onSpeak: () => void;
}

const VoiceControls: React.FC<VoiceControlsProps> = ({
  onVoiceChange,
  onLanguageChange,
  onSpeak,
}) => {
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [isPlaying, setIsPlaying] = useState(false);

  const voices = [
    { id: 'sarah', name: 'Sarah', description: 'Natural & Warm' },
    { id: 'james', name: 'James', description: 'Professional & Clear' },
    { id: 'maria', name: 'Maria', description: 'Expressive & Friendly' },
    { id: 'david', name: 'David', description: 'Deep & Authoritative' },
  ];

  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'pt-BR', name: 'Portuguese' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'ko-KR', name: 'Korean' },
    { code: 'zh-CN', name: 'Chinese' },
  ];

  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    onVoiceChange(voice);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    onLanguageChange(language);
  };

  const handleSpeak = () => {
    setIsPlaying(!isPlaying);
    onSpeak();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Volume2 className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-medium text-gray-900">Voice & Language</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Voice Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Voice Selection
          </label>
          <div className="grid grid-cols-2 gap-2">
            {voices.map((voice) => (
              <button
                key={voice.id}
                onClick={() => handleVoiceChange(voice.id)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedVoice === voice.id
                    ? 'border-primary-500 bg-primary-50 text-primary-900'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium text-sm">{voice.name}</div>
                <div className="text-xs text-gray-500">{voice.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Globe className="inline h-4 w-4 mr-1" />
            Language
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
        <button
          onClick={handleSpeak}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isPlaying
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              <span>Speak</span>
            </>
          )}
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors">
          <RotateCcw className="h-4 w-4" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default VoiceControls;