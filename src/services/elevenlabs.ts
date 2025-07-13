export interface VoiceOption {
  voice_id: string;
  name: string;
  description: string;
  category: string;
}

export interface SpeechOptions {
  text: string;
  voice_id: string;
  model_id?: string;
  voice_settings?: {
    stability: number;
    similarity_boost: number;
    style?: number;
    use_speaker_boost?: boolean;
  };
}

const ELEVENLABS_API_BASE = 'https://api.elevenlabs.io/v1';

export const getVoices = async (): Promise<VoiceOption[]> => {
  try {
    const response = await fetch(`${ELEVENLABS_API_BASE}/voices`, {
      headers: {
        'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch voices');
    }

    const data = await response.json();
    return data.voices || [];
  } catch (error) {
    console.error('Error fetching voices:', error);
    // Return default voices if API fails
    return [
      { voice_id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah', description: 'Natural & Warm', category: 'premade' },
      { voice_id: 'ErXwobaYiN019PkySvjV', name: 'James', description: 'Professional & Clear', category: 'premade' },
      { voice_id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Maria', description: 'Expressive & Friendly', category: 'premade' },
      { voice_id: 'TxGEqnHWrfWFTfGW9XjX', name: 'David', description: 'Deep & Authoritative', category: 'premade' },
    ];
  }
};

export const generateSpeech = async (options: SpeechOptions): Promise<Blob> => {
  try {
    const response = await fetch(`${ELEVENLABS_API_BASE}/text-to-speech/${options.voice_id}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        text: options.text,
        model_id: options.model_id || 'eleven_monolingual_v1',
        voice_settings: options.voice_settings || {
          stability: 0.5,
          similarity_boost: 0.5,
          style: 0.0,
          use_speaker_boost: true,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate speech');
    }

    return await response.blob();
  } catch (error) {
    console.error('Error generating speech:', error);
    throw new Error('Failed to generate speech. Please check your ElevenLabs API key and try again.');
  }
};

export const validateApiKey = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${ELEVENLABS_API_BASE}/user`, {
      headers: {
        'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY,
      },
    });
    return response.ok;
  } catch (error) {
    console.error('ElevenLabs API key validation failed:', error);
    return false;
  }
};