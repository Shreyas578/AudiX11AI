# AudiX11AI - Multilingual Voice Assistant

A powerful web application that processes documents, audio, and video files with AI-powered transcription, summarization, and natural speech generation.

## Features

- **Document Processing**: Upload PDFs, Word docs, and text files
- **Audio/Video Processing**: Transcribe audio and video content
- **AI Summarization**: Generate intelligent summaries using OpenAI GPT-4o-mini
- **Voice Generation**: Natural speech synthesis with ElevenLabs AI voices
- **Multilingual Support**: 40+ languages supported
- **Offline Capabilities**: Core features work without internet

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file and add your API keys:
   ```bash
   cp .env.example .env
   ```

4. Add your API keys to the `.env` file:
   - Get your ElevenLabs API key from [ElevenLabs Dashboard](https://elevenlabs.io/app/settings/api-keys)
   - Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_ELEVENLABS_API_KEY`: Your ElevenLabs API key for voice generation
- `VITE_OPENAI_API_KEY`: Your OpenAI API key for summarization
- `VITE_OPENAI_MODEL`: OpenAI model to use (default: gpt-4o-mini)

## API Integration

### OpenAI Integration
- Uses GPT-4o-mini for intelligent text summarization
- Supports multiple summarization methods (LexRank, TextRank, LSA, Luhn)
- Configurable summary length and compression ratio

### ElevenLabs Integration
- High-quality voice synthesis
- Multiple voice options with different characteristics
- Real-time audio generation and playback

## Security Note

This application uses API keys in the browser for demonstration purposes. In a production environment, you should:
- Use a backend proxy to handle API calls
- Keep API keys secure on the server side
- Implement proper authentication and rate limiting

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- OpenAI SDK for summarization
- ElevenLabs API for voice generation
- Lucide React for icons

## License

MIT License - see LICENSE file for details