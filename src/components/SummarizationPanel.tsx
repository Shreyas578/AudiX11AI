@@ .. @@
 import React, { useState } from 'react';
 import { FileText, Settings, Zap, CheckCircle, Volume2, Play } from 'lucide-react';
+import { generateSummary, SummarizationOptions, SummarizationResult } from '../services/openai';
+import { generateSpeech } from '../services/elevenlabs';

 interface SummarizationPanelProps {
-  onSummarize: (options: SummarizationOptions) => void;
+  onSummarize: (options: any) => void;
+  inputText?: string;
 }

-interface SummarizationOptions {
-  method: string;
-  sentences: number;
-  ratio: number;
-}

-const SummarizationPanel: React.FC<SummarizationPanelProps> = ({ onSummarize }) => {
+const SummarizationPanel: React.FC<SummarizationPanelProps> = ({ onSummarize, inputText = '' }) => {
   const [method, setMethod] = useState('lexrank');
   const [sentences, setSentences] = useState(3);
   const [ratio, setRatio] = useState(0.3);
   const [isProcessing, setIsProcessing] = useState(false);
-  const [summary, setSummary] = useState('');
+  const [summaryResult, setSummaryResult] = useState<SummarizationResult | null>(null);
   const [selectedVoice, setSelectedVoice] = useState('sarah');
   const [selectedLanguage, setSelectedLanguage] = useState('en-US');
   const [isReading, setIsReading] = useState(false);
+  const [error, setError] = useState<string | null>(null);
+  const [audioUrl, setAudioUrl] = useState<string | null>(null);

   const methods = [
-    { id: 'lexrank', name: 'LexRank', description: 'Graph-based algorithm' },
-    { id: 'luhn', name: 'Luhn', description: 'Frequency-based approach' },
-    { id: 'lsa', name: 'LSA', description: 'Latent Semantic Analysis' },
-    { id: 'textrank', name: 'TextRank', description: 'PageRank for text' },
+    { id: 'lexrank', name: 'LexRank', description: 'Graph-based extractive summarization' },
+    { id: 'luhn', name: 'Luhn', description: 'Frequency-based keyword extraction' },
+    { id: 'lsa', name: 'LSA', description: 'Latent Semantic Analysis approach' },
+    { id: 'textrank', name: 'TextRank', description: 'PageRank algorithm for text' },
   ];

   const voices = [
-    { id: 'sarah', name: 'Sarah' },
-    { id: 'james', name: 'James' },
-    { id: 'maria', name: 'Maria' },
-    { id: 'david', name: 'David' },
+    { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah' },
+    { id: 'ErXwobaYiN019PkySvjV', name: 'James' },
+    { id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Maria' },
+    { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'David' },
   ];

@@ .. @@
-  const handleSummarize = () => {
+  const handleSummarize = async () => {
+    if (!inputText.trim()) {
+      setError('Please provide text to summarize');
+      return;
+    }
+
     setIsProcessing(true);
-    onSummarize({ method, sentences, ratio });
-    
-    // Simulate processing time and generate summary
-    setTimeout(() => {
+    setError(null);
+    setSummaryResult(null);
+
+    try {
+      const result = await generateSummary({
+        text: inputText,
+        method,
+        sentences,
+        ratio,
+      });
+      
+      setSummaryResult(result);
+      onSummarize({ method, sentences, ratio, result });
+    } catch (err) {
+      setError(err instanceof Error ? err.message : 'Failed to generate summary');
+    } finally {
       setIsProcessing(false);
-      setSummary(`This is a generated summary using ${method} algorithm. The content has been processed and condensed into ${sentences} key sentences that capture the main ideas and important information from the original text.`);
-    }, 2000);
+    }
   };

-  const handleReadSummary = () => {
-    setIsReading(!isReading);
-    console.log(`Reading summary with voice: ${selectedVoice}, language: ${selectedLanguage}`);
+  const handleReadSummary = async () => {
+    if (!summaryResult?.summary) return;
+
+    if (isReading) {
+      setIsReading(false);
+      if (audioUrl) {
+        URL.revokeObjectURL(audioUrl);
+        setAudioUrl(null);
+      }
+      return;
+    }
+
+    try {
+      setIsReading(true);
+      const audioBlob = await generateSpeech({
+        text: summaryResult.summary,
+        voice_id: selectedVoice,
+      });
+      
+      const url = URL.createObjectURL(audioBlob);
+      setAudioUrl(url);
+      
+      const audio = new Audio(url);
+      audio.onended = () => {
+        setIsReading(false);
+        URL.revokeObjectURL(url);
+        setAudioUrl(null);
+      };
+      audio.play();
+    } catch (err) {
+      setIsReading(false);
+      setError('Failed to generate speech. Please check your ElevenLabs API key.');
+    }
   };

@@ .. @@
       {/* Generate Button */}
       <div className="flex justify-center pt-4 border-t border-gray-700">
+        {!inputText.trim() && (
+          <p className="text-yellow-400 text-sm mb-4">
+            Please upload a file or enter text to enable summarization
+          </p>
+        )}
         <button
           onClick={handleSummarize}
-          disabled={isProcessing}
+          disabled={isProcessing || !inputText.trim()}
           className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
-            isProcessing
+            isProcessing || !inputText.trim()
               ? 'bg-gray-600 cursor-not-allowed text-gray-300'
               : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
           }`}
         >
           <Zap className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} />
           <span>{isProcessing ? 'Generating Summary...' : 'Generate Summary'}</span>
         </button>
       </div>

+      {/* Error Display */}
+      {error && (
+        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
+          <p className="text-red-400 text-sm">{error}</p>
+        </div>
+      )}
+
       {/* Summary Result */}
-      {summary && (
+      {summaryResult && (
         <div className="bg-gray-700/50 rounded-xl p-6 border border-green-500/20">
           <div className="flex items-center justify-between mb-4">
             <h4 className="text-white font-medium">Generated Summary</h4>
-            <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 rounded-full">
-              <CheckCircle className="h-3 w-3 text-green-400" />
-              <span className="text-xs text-green-400 font-medium">Complete</span>
+            <div className="flex items-center space-x-4">
+              <div className="text-xs text-gray-400">
+                {summaryResult.compressionRatio}% of original
+              </div>
+              <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 rounded-full">
+                <CheckCircle className="h-3 w-3 text-green-400" />
+                <span className="text-xs text-green-400 font-medium">Complete</span>
+              </div>
             </div>
           </div>
           
-          <p className="text-gray-200 leading-relaxed mb-6">{summary}</p>
+          <div className="mb-4">
+            <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 mb-4">
+              <div>Method: <span className="text-white">{summaryResult.method}</span></div>
+              <div>Original: <span className="text-white">{summaryResult.originalLength} chars</span></div>
+              <div>Summary: <span className="text-white">{summaryResult.summaryLength} chars</span></div>
+            </div>
+          </div>
+          
+          <p className="text-gray-200 leading-relaxed mb-6">{summaryResult.summary}</p>

@@ .. @@
             <div className="flex justify-center">
               <button
                 onClick={handleReadSummary}
+                disabled={!summaryResult?.summary}
                 className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                   isReading
                     ? 'bg-red-600 hover:bg-red-700 text-white'
-                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
+                    : summaryResult?.summary
+                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
+                    : 'bg-gray-600 cursor-not-allowed text-gray-300'
                 }`}
               >
                 <Volume2 className="h-4 w-4" />
                 <span>{isReading ? 'Stop Reading' : 'Read Summary'}</span>
               </button>
             </div>
+            
+            {audioUrl && (
+              <div className="mt-4">
+                <audio controls className="w-full">
+                  <source src={audioUrl} type="audio/mpeg" />
+                  Your browser does not support the audio element.
+                </audio>
+              </div>
+            )}
           </div>
         </div>
       )}
@@ .. @@