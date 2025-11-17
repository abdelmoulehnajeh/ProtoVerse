"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "fr" | "pl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // ✅ Charger la langue sauvegardée côté client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language | null;
      if (saved) setLanguageState(saved);
    }
  }, []);

  // ✅ Mettre à jour le localStorage quand la langue change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
