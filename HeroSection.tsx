import React from 'react';
import { Brain, Sparkles, Play, FileText, Mic } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/AudiX11AI logo with .png" 
              alt="AudiX11AI Logo" 
              className="w-20 h-20 mr-4 drop-shadow-2xl"
            />
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AudiX11AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-2">
                The Ultimate Multilingual Voice Assistant
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform any document, audio, or video into natural speech. Transcribe, summarize, 
            and translate content across 40+ languages with AI-powered precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl">
              <Play className="h-5 w-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20">
              <FileText className="h-5 w-5" />
              <span>View Demo</span>
            </button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
              <FileText className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Processing</h3>
            <p className="text-gray-300">Upload PDFs, Word docs, audio, and video files for instant AI processing</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
              <Mic className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural Voices</h3>
            <p className="text-gray-300">Premium AI voices in 40+ languages with emotional expression</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <Brain className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Offline Power</h3>
            <p className="text-gray-300">Core features work offline for privacy and reliability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;