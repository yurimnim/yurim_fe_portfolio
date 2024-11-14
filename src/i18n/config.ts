import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/enTranslation.json';
import koTranslation from './locales/koTranslation.json';

export const resources = {
  en: {
    translation: enTranslation
  },
  ko: {
    translation: koTranslation
  }
} as const;

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;