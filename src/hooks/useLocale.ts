import { useTranslation } from 'react-i18next';
import { normalizeLanguage } from '@/i18n/config';

export const useLocale = () => {
  const { t, i18n } = useTranslation();

  return {
    t,
    language: normalizeLanguage(i18n.resolvedLanguage ?? i18n.language),
    changeLanguage: i18n.changeLanguage
  };
};
