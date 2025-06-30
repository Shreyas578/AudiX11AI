import React, { useState } from 'react';
import { FileText, Upload, Mic2, Video, Volume2, Play } from 'lucide-react';
import FileUpload from '../FileUpload';
import TextInput from '../TextInput';
import ProcessingStatus from '../ProcessingStatus';

interface FileProcessingSectionProps {
  onFileSelect: (file: File) => void;
  onTextChange: (text: string) => void;
  processingStatus: 'idle' | 'processing' | 'complete' | 'error';
  statusMessage: string;
  progress: number;
}

const FileProcessingSection: React.FC<FileProcessingSectionProps> = ({
  onFileSelect,
  onTextChange,
  processingStatus,
  statusMessage,
  progress
}) => {
  const [extractedText, setExtractedText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [isReading, setIsReading] = useState(false);

  const voices = [
    { id: 'sarah', name: 'Sarah', description: 'Natural & Warm' },
    { id: 'james', name: 'James', description: 'Professional & Clear' },
    { id: 'maria', name: 'Maria', description: 'Expressive & Friendly' },
    { id: 'david', name: 'David', description: 'Deep & Authoritative' },
    { id: 'emma', name: 'Emma', description: 'Youthful & Energetic' },
    { id: 'alex', name: 'Alex', description: 'Neutral & Versatile' },
  ];

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'es-ES', name: 'Spanish (Spain)', flag: '🇪🇸' },
    { code: 'es-MX', name: 'Spanish (Mexico)', flag: '🇲🇽' },
    { code: 'fr-FR', name: 'French (France)', flag: '🇫🇷' },
    { code: 'fr-CA', name: 'French (Canada)', flag: '🇨🇦' },
    { code: 'de-DE', name: 'German', flag: '🇩🇪' },
    { code: 'it-IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt-BR', name: 'Portuguese (Brazil)', flag: '🇧🇷' },
    { code: 'pt-PT', name: 'Portuguese (Portugal)', flag: '🇵🇹' },
    { code: 'ja-JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko-KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇹🇼' },
    { code: 'ru-RU', name: 'Russian', flag: '🇷🇺' },
    { code: 'ar-SA', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi-IN', name: 'Hindi', flag: '🇮🇳' },
    { code: 'th-TH', name: 'Thai', flag: '🇹🇭' },
    { code: 'vi-VN', name: 'Vietnamese', flag: '🇻🇳' },
    { code: 'nl-NL', name: 'Dutch', flag: '🇳🇱' },
    { code: 'sv-SE', name: 'Swedish', flag: '🇸🇪' },
    { code: 'da-DK', name: 'Danish', flag: '🇩🇰' },
    { code: 'no-NO', name: 'Norwegian', flag: '🇳🇴' },
    { code: 'fi-FI', name: 'Finnish', flag: '🇫🇮' },
    { code: 'pl-PL', name: 'Polish', flag: '🇵🇱' },
    { code: 'tr-TR', name: 'Turkish', flag: '🇹🇷' },
    { code: 'he-IL', name: 'Hebrew', flag: '🇮🇱' },
    { code: 'cs-CZ', name: 'Czech', flag: '🇨🇿' },
    { code: 'hu-HU', name: 'Hungarian', flag: '🇭🇺' },
    { code: 'ro-RO', name: 'Romanian', flag: '🇷🇴' },
    { code: 'bg-BG', name: 'Bulgarian', flag: '🇧🇬' },
    { code: 'hr-HR', name: 'Croatian', flag: '🇭🇷' },
    { code: 'sk-SK', name: 'Slovak', flag: '🇸🇰' },
    { code: 'sl-SI', name: 'Slovenian', flag: '🇸🇮' },
    { code: 'et-EE', name: 'Estonian', flag: '🇪🇪' },
    { code: 'lv-LV', name: 'Latvian', flag: '🇱🇻' },
    { code: 'lt-LT', name: 'Lithuanian', flag: '🇱🇹' },
    { code: 'uk-UA', name: 'Ukrainian', flag: '🇺🇦' },
    { code: 'id-ID', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'ms-MY', name: 'Malay', flag: '🇲🇾' },
    { code: 'tl-PH', name: 'Filipino', flag: '🇵🇭' },
  ];

  const handleFileSelect = (file: File) => {
    onFileSelect(file);
    // Simulate text extraction
    setTimeout(() => {
      setExtractedText(`This is the extracted text from ${file.name}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
    }, 2000);
  };

  const handleReadAloud = () => {
    setIsReading(!isReading);
    // Simulate ElevenLabs API call
    console.log(`Reading with voice: ${selectedVoice}, language: ${selectedLanguage}`);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Process Any Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload documents, audio, video files, or paste text directly. Our AI will handle the rest.
          </p>
        </div>

        {/* Processing Status */}
        <div className="mb-8">
          <ProcessingStatus
            status={processingStatus}
            message={statusMessage}
            progress={progress}
          />
        </div>

        {/* File Upload Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Documents</h3>
                <p className="text-gray-400">PDFs, Word files, text</p>
              </div>
            </div>
            <FileUpload
              title="Upload Documents"
              description="Drag & drop or click to upload"
              acceptedTypes={['.pdf', '.docx', '.txt']}
              onFileSelect={handleFileSelect}
            />
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Mic2 className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Audio Files</h3>
                <p className="text-gray-400">MP3, WAV, recordings</p>
              </div>
            </div>
            <FileUpload
              title="Upload Audio"
              description="For transcription & analysis"
              acceptedTypes={['.mp3', '.wav', '.m4a']}
              onFileSelect={handleFileSelect}
            />
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Video className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Video Files</h3>
                <p className="text-gray-400">MP4, MOV, AVI</p>
              </div>
            </div>
            <FileUpload
              title="Upload Video"
              description="Extract audio for processing"
              acceptedTypes={['.mp4', '.mov', '.avi']}
              onFileSelect={handleFileSelect}
            />
          </div>
        </div>

        {/* Text Input Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-500/20 p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Upload className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Direct Text Input</h3>
              <p className="text-gray-400">Paste or type your content directly</p>
            </div>
          </div>
          <TextInput onTextChange={onTextChange} />
        </div>

        {/* AI Voice Reading Section */}
        {(extractedText || processingStatus === 'complete') && (
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Volume2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">AI Voice Reading</h3>
                <p className="text-gray-300">Listen to your content with ElevenLabs AI voices</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              {/* Voice Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Select Voice
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {voices.map((voice) => (
                    <button
                      key={voice.id}
                      onClick={() => setSelectedVoice(voice.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedVoice === voice.id
                          ? 'border-purple-400 bg-purple-500/20 text-white'
                          : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-500/50'
                      }`}
                    >
                      <div className="font-medium text-sm">{voice.name}</div>
                      <div className="text-xs text-gray-400">{voice.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Select Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-gray-800">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extracted Text Preview */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Content to Read:</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                {extractedText || "Your processed content will appear here..."}
              </p>
            </div>

            {/* Read Aloud Button */}
            <div className="flex justify-center">
              <button
                onClick={handleReadAloud}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                  isReading
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                }`}
              >
                <Volume2 className="h-5 w-5" />
                <span>{isReading ? 'Stop Reading' : 'Read Aloud with AI'}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FileProcessingSection;