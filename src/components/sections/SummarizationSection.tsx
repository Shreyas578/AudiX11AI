@@ .. @@
 interface SummarizationSectionProps {
   onSummarize: (options: any) => void;
+  inputText?: string;
 }

-const SummarizationSection: React.FC<SummarizationSectionProps> = ({ onSummarize }) => {
+const SummarizationSection: React.FC<SummarizationSectionProps> = ({ onSummarize, inputText }) => {
   return (
@@ .. @@
         {/* Summarization Panel */}
         <div className="max-w-4xl mx-auto">
-          <SummarizationPanel onSummarize={onSummarize} />
+          <SummarizationPanel onSummarize={onSummarize} inputText={inputText} />
         </div>
       </div>