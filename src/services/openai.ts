import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, use a backend proxy
});

export interface SummarizationOptions {
  method: string;
  sentences: number;
  ratio: number;
  text: string;
}

export interface SummarizationResult {
  summary: string;
  method: string;
  originalLength: number;
  summaryLength: number;
  compressionRatio: number;
}

export const generateSummary = async (options: SummarizationOptions): Promise<SummarizationResult> => {
  try {
    const { text, sentences, method } = options;
    
    const prompt = `Please summarize the following text using a ${method}-style approach. 
    Provide a concise summary in exactly ${sentences} sentences that captures the key points and main ideas.
    
    Text to summarize:
    ${text}
    
    Summary:`;

    const response = await openai.chat.completions.create({
      model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert text summarization assistant. Provide clear, concise summaries that capture the essential information from the given text.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: sentences * 50, // Approximate tokens per sentence
      temperature: 0.3,
    });

    const summary = response.choices[0]?.message?.content || '';
    
    return {
      summary,
      method,
      originalLength: text.length,
      summaryLength: summary.length,
      compressionRatio: Math.round((summary.length / text.length) * 100)
    };
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate summary. Please check your OpenAI API key and try again.');
  }
};

export const validateApiKey = async (): Promise<boolean> => {
  try {
    await openai.models.list();
    return true;
  } catch (error) {
    console.error('OpenAI API key validation failed:', error);
    return false;
  }
};