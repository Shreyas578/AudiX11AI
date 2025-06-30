import React from 'react';
import { Brain, Zap, Settings, CheckCircle, Volume2 } from 'lucide-react';
import SummarizationPanel from '../SummarizationPanel';

interface SummarizationSectionProps {
  onSummarize: (options: any) => void;
}

const SummarizationSection: React.FC<SummarizationSectionProps> = ({ onSummarize }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent Summarization
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced offline AI algorithms extract key insights from your content with precision and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Features */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Smart Algorithms</h3>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>LexRank Algorithm</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>TextRank Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>LSA Analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Luhn Method</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Offline Processing</h3>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Complete Privacy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No Internet Required</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Lightning Fast</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Unlimited Usage</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Volume2 className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">AI Voice Reading</h3>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>ElevenLabs Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Natural Voices</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>40+ Languages</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Instant Playback</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Summarization Panel */}
        <div className="max-w-4xl mx-auto">
          <SummarizationPanel onSummarize={onSummarize} />
        </div>
      </div>
    </section>
  );
};

export default SummarizationSection;