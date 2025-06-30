import React, { useState } from 'react';
import { FileText, Settings, Zap, CheckCircle, Volume2, Play } from 'lucide-react';

interface SummarizationPanelProps {
  onSummarize: (options: SummarizationOptions) => void;
}

interface SummarizationOptions {
  method: string;
  sentences: number;
  ratio: number;
}

const SummarizationPanel: React.FC<SummarizationPanelProps> = ({ onSummarize }) => {
  const [method, setMethod] = useState('lexrank');
  const [sentences, setSentences] = useState(3);
  const [ratio, setRatio] = useState(0.3);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [isReading, setIsReading] = useState(false);

  const methods = [
    { id: 'lexrank', name: 'LexRank', description: 'Graph-based algorithm' },
    { id: 'luhn', name: 'Luhn', description: 'Frequency-based approach' },
    { id: 'lsa', name: 'LSA', description: 'Latent Semantic Analysis' },
    { id: 'textrank', name: 'TextRank', description: 'PageRank for text' },
  ];

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

  const handleSummarize = () => {
    setIsProcessing(true);
    onSummarize({ method, sentences, ratio });
    
    // Simulate processing time and generate summary
    setTimeout(() => {
      setIsProcessing(false);
      setSummary(`This is a generated summary using ${method} algorithm. The content has been processed and condensed into ${sentences} key sentences that capture the main ideas and important information from the original text.`);
    }, 2000);
  };

  const handleReadSummary = () => {
    setIsReading(!isReading);
    console.log(`Reading summary with voice: ${selectedVoice}, language: ${selectedLanguage}`);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">Smart Summarization</h3>
        <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 rounded-full">
          <CheckCircle className="h-3 w-3 text-green-400" />
          <span className="text-xs text-green-400 font-medium">Offline</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Method Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Summarization Method
          </label>
          <div className="space-y-2">
            {methods.map((methodOption) => (
              <label key={methodOption.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value={methodOption.id}
                  checked={method === methodOption.id}
                  onChange={(e) => setMethod(e.target.value)}
                  className="text-purple-500 focus:ring-purple-400 bg-gray-700 border-gray-600"
                />
                <div>
                  <div className="font-medium text-sm text-white">{methodOption.name}</div>
                  <div className="text-xs text-gray-400">{methodOption.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <Settings className="inline h-4 w-4 mr-1" />
              Number of Sentences
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="1"
                max="10"
                value={sentences}
                onChange={(e) => setSentences(Number(e.target.value))}
                className="flex-1 accent-purple-500"
              />
              <span className="text-sm font-medium text-white w-8">{sentences}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Summary Ratio
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.1"
                value={ratio}
                onChange={(e) => setRatio(Number(e.target.value))}
                className="flex-1 accent-purple-500"
              />
              <span className="text-sm font-medium text-white w-12">{Math.round(ratio * 100)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center pt-4 border-t border-gray-700">
        <button
          onClick={handleSummarize}
          disabled={isProcessing}
          className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
            isProcessing
              ? 'bg-gray-600 cursor-not-allowed text-gray-300'
              : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          <Zap className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} />
          <span>{isProcessing ? 'Generating Summary...' : 'Generate Summary'}</span>
        </button>
      </div>

      {/* Summary Result */}
      {summary && (
        <div className="bg-gray-700/50 rounded-xl p-6 border border-green-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-medium">Generated Summary</h4>
            <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 rounded-full">
              <CheckCircle className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400 font-medium">Complete</span>
            </div>
          </div>
          
          <p className="text-gray-200 leading-relaxed mb-6">{summary}</p>

          {/* Voice Reading Controls for Summary */}
          <div className="border-t border-gray-600 pt-4">
            <h5 className="text-white font-medium mb-4">Read Summary Aloud</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Voice</label>
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
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
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
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
                onClick={handleReadSummary}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isReading
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                }`}
              >
                <Volume2 className="h-4 w-4" />
                <span>{isReading ? 'Stop Reading' : 'Read Summary'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummarizationPanel;