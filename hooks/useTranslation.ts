"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  return {
    t: translations[language],
    language,
  };
};
