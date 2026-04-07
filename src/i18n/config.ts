import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/enTranslation.json';
import koTranslation from './locales/koTranslation.json';

export const LANGUAGE_STORAGE_KEY = 'i18nextLng';
export type SupportedLanguage = 'en' | 'ko';

export const resources = {
  en: {
    translation: enTranslation
  },
  ko: {
    translation: koTranslation
  }
} as const;

export const normalizeLanguage = (language?: string | null): SupportedLanguage => {
  if (!language) {
    return 'en';
  }

  return language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
};

export const getStoredLanguagePreference = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return storedLanguage ? normalizeLanguage(storedLanguage) : null;
};

export const getSystemLanguage = (): SupportedLanguage => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const candidateLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const matchedLanguage = candidateLanguages.find((language) => {
    const normalizedLanguage = language.toLowerCase();
    return normalizedLanguage.startsWith('ko') || normalizedLanguage.startsWith('en');
  });

  return normalizeLanguage(matchedLanguage ?? navigator.language);
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: getStoredLanguagePreference() ?? getSystemLanguage(),
    fallbackLng: 'en',
    supportedLngs: ['en', 'ko'],
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
