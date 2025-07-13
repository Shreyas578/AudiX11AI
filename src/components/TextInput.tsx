import React, { useState } from 'react';
import { Type, Wand2, Volume2 } from 'lucide-react';

interface TextInputProps {
  onTextChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onTextChange }) => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [isReading, setIsReading] = useState(false);

  const voices = [
    { id: 'sarah', name: 'Sarah' },
    { id: 'james', name: 'James' },
    { id: 'maria', name: 'Maria' },
    { id: 'david', name: 'David' },
  ];

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'es-ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'French', flag: '🇫🇷' },
    { code: 'de-DE', name: 'German', flag: '🇩🇪' },
    { code: 'it-IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt-BR', name: 'Portuguese', flag: '🇧🇷' },
    { code: 'ja-JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko-KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ru-RU', name: 'Russian', flag: '🇷🇺' },
  ];

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  const handleReadAloud = () => {
    setIsReading(!isReading);
    console.log(`Reading text with voice: ${selectedVoice}, language: ${selectedLanguage}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Type className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">Direct Text Input</h3>
      </div>
      
      <div className="relative">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Paste or type your text here for immediate processing..."
          className="w-full h-40 p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
        />
        
        {text && (
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-sm text-gray-400">
            <Wand2 className="h-4 w-4" />
            <span>{text.length} characters</span>
          </div>
        )}
      </div>

      {text && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
          <h4 className="text-white font-medium mb-4">Read Text Aloud</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Voice</label>
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
              >
                {voices.map((voice) => (
                  <option key={voice.id} value={voice.id}>{voice.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleReadAloud}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isReading
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
              }`}
            >
              <Volume2 className="h-4 w-4" />
              <span>{isReading ? 'Stop Reading' : 'Read Aloud'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;