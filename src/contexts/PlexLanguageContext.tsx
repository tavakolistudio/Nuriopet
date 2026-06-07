'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import tr from '@/locales/plex/tr.json';
import en from '@/locales/plex/en.json';

export type Lang = 'tr' | 'en';

type Translations = typeof tr;

interface PlexLanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const PlexLanguageContext = createContext<PlexLanguageContextType | undefined>(undefined);

export function PlexLanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('tr');
  const t = lang === 'tr' ? tr : (en as unknown as Translations);

  return (
    <PlexLanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </PlexLanguageContext.Provider>
  );
}

export function usePlexLang() {
  const ctx = useContext(PlexLanguageContext);
  if (!ctx) throw new Error('usePlexLang must be used within PlexLanguageProvider');
  return ctx;
}
