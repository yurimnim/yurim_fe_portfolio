import { useTranslation } from 'react-i18next';

export const useLocale = () => {
  const { t, i18n } = useTranslation();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(i18n.language).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(i18n.language, {
      style: 'currency',
      currency: i18n.language === 'ko' ? 'KRW' : 'USD'
    }).format(amount);
  };

  return {
    t,
    language: i18n.language,
    formatDate,
    formatCurrency,
    changeLanguage: i18n.changeLanguage
  };
};
