import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/sections/HeroSection';
import FileProcessingSection from './components/sections/FileProcessingSection';
import VoiceSection from './components/sections/VoiceSection';
import SummarizationSection from './components/sections/SummarizationSection';
import ResultsSection from './components/sections/ResultsSection';
import PremiumSection from './components/sections/PremiumSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [processingStatus, setProcessingStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleFileSelect = (file: File) => {
    setProcessingStatus('processing');
    setStatusMessage(`Processing ${file.name}...`);
    setProgress(0);
    
    // Simulate file processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessingStatus('complete');
          setStatusMessage('File processed successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleTextChange = (text: string) => {
    console.log('Text changed:', text.length, 'characters');
  };

  const handleVoiceChange = (voice: string) => {
    console.log('Voice changed to:', voice);
  };

  const handleLanguageChange = (language: string) => {
    console.log('Language changed to:', language);
  };

  const handleSpeak = () => {
    setProcessingStatus('processing');
    setStatusMessage('Generating speech audio...');
    
    setTimeout(() => {
      setProcessingStatus('complete');
      setStatusMessage('Audio generated successfully!');
    }, 2000);
  };

  const handleSummarize = (options: any) => {
    setProcessingStatus('processing');
    setStatusMessage(`Creating summary using ${options.method}...`);
    
    setTimeout(() => {
      setProcessingStatus('complete');
      setStatusMessage('Summary generated successfully!');
    }, 2500);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      {/* Hero Section */}
      <HeroSection />

      {/* File Processing Section */}
      <FileProcessingSection
        onFileSelect={handleFileSelect}
        onTextChange={handleTextChange}
        processingStatus={processingStatus}
        statusMessage={statusMessage}
        progress={progress}
      />

      {/* Voice Section */}
      <VoiceSection
        onVoiceChange={handleVoiceChange}
        onLanguageChange={handleLanguageChange}
        onSpeak={handleSpeak}
      />

      {/* Summarization Section */}
      <SummarizationSection onSummarize={handleSummarize} />

      {/* Results Section */}
      <ResultsSection />

      {/* Premium Section */}
      <PremiumSection />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/AudiX11AI logo with .png" 
                  alt="AudiX11AI Logo" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AudiX11AI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The ultimate multilingual voice assistant for processing documents, audio, and video files 
                with AI-powered precision and natural speech generation.
              </p>
              <div className="flex space-x-4">
                <div className="text-xs text-gray-500">Powered by:</div>
                <div className="flex space-x-3 text-xs text-gray-400">
                  <span>ElevenLabs</span>
                  <span>•</span>
                  <span>RevenueCat</span>
                  <span>•</span>
                  <span>Supabase</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Document Processing</li>
                <li>Audio Transcription</li>
                <li>Smart Summarization</li>
                <li>Voice Generation</li>
                <li>Multi-language Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AudiX11AI. All rights reserved. Built with ❤️ for creators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;