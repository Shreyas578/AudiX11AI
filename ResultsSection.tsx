import React from 'react';
import { FileText, MessageSquare, Globe, Download } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View transcriptions, summaries, translations, and download your processed content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transcription Results */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Transcription</h3>
                  <p className="text-gray-600">Audio to text conversion</p>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[200px]">
              <p className="text-gray-500 italic">
                Upload an audio or video file to see the transcribed text appear here. 
                Our AI will convert speech to text with high accuracy across multiple languages.
              </p>
            </div>
          </div>

          {/* Summary Results */}
          <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Summary</h3>
                  <p className="text-gray-600">Key insights extracted</p>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[200px]">
              <p className="text-gray-500 italic">
                Process a document to generate an intelligent summary using your selected method. 
                Choose from LexRank, TextRank, LSA, or Luhn algorithms for optimal results.
              </p>
            </div>
          </div>

          {/* Translation Results */}
          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-8 border border-cyan-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Translation</h3>
                  <p className="text-gray-600">Multilingual content</p>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-cyan-600 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[200px]">
              <p className="text-gray-500 italic">
                Translated content will appear here when processing multilingual documents. 
                Support for 40+ languages with accurate context preservation.
              </p>
            </div>
          </div>

          {/* Audio Output */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Audio Files</h3>
                  <p className="text-gray-600">Generated speech downloads</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[200px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">speech_output.mp3</div>
                    <div className="text-sm text-gray-600">2.3 MB • 3:45 duration</div>
                  </div>
                  <button className="text-orange-600 hover:text-orange-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-500 italic text-sm">
                  Generated audio files will appear here for download after text-to-speech processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;