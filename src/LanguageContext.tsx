import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './locales';

type Language = 'tr' | 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['tr'];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}; 