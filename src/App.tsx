function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [processingStatus, setProcessingStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
   const [statusMessage, setStatusMessage] = useState('');
   const [progress, setProgress] = useState(0);
   const [extractedText, setExtractedText] = useState('');

   const handleLoadingComplete = () => {
   };

   const handleTextChange = (text: string) => {
    setExtractedText(text);
   };

      {/* Summarization Section */}
      <SummarizationSection onSummarize={handleSummarize} inputText={extractedText} />
}