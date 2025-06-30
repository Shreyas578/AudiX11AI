"use client"

import VoiceControls from "../components/VoiceControls"
import SetupGuide from "../components/SetupGuide"
import { useState } from "react"

export default function Page() {
  const [text, setText] = useState(
    "Hello! This is a sample text to demonstrate the AI voice generation capabilities of AudiX11AI.",
  )
  const [voice, setVoice] = useState("EXAVITQu4vr4xnSDxMaL")
  const [language, setLanguage] = useState("en-US")

  const handleVoiceChange = (voice: string) => {
    setVoice(voice)
  }

  const handleLanguageChange = (language: string) => {
    setLanguage(language)
  }

  const handleSpeak = () => {
    // Placeholder for speak logic, can be expanded if needed
    console.log("Speaking with voice:", voice, "and language:", language)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">AudiX11AI - Voice Generation</h1>
      <SetupGuide />
      <VoiceControls
        text={text}
        onVoiceChange={handleVoiceChange}
        onLanguageChange={handleLanguageChange}
        onSpeak={handleSpeak}
      />
    </div>
  )
}
