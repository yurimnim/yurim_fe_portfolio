import { useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY, normalizeLanguage } from '@/i18n/config';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const isKo = currentLanguage === 'ko';

  const toggle = () => {
    const nextLanguage = isKo ? 'en' : 'ko';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      onClick={toggle}
      className="
        flex items-center gap-1 px-3
        font-mono text-sm tracking-wide
        rounded-full border border-gray-300 dark:border-gray-600
        bg-transparent
        transition-colors duration-300
        hover:border-lime-400 dark:hover:border-lime-400
        h-9 justify-center
      "
      aria-label="Toggle language"
    >
      <span className={`px-1 ${isKo ? 'text-gray-900 dark:text-lime-400 font-semibold' : 'text-gray-400 dark:text-gray-500'}`}>
        KO
      </span>
      <span className="text-gray-300 dark:text-gray-600">/</span>
      <span className={`px-1 ${!isKo ? 'text-gray-900 dark:text-lime-400 font-semibold' : 'text-gray-400 dark:text-gray-500'}`}>
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
