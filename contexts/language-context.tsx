"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Language } from "@/data/site-content"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const languages: Language[] = ["pt", "en", "es"]

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(language)
    setLanguage(languages[(currentIndex + 1) % languages.length])
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
