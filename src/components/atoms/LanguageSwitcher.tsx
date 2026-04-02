import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isKo = i18n.language === 'ko';

  const toggle = () => {
    i18n.changeLanguage(isKo ? 'en' : 'ko');
  };

  return (
    <button
      onClick={toggle}
      className="
        flex items-center gap-1 px-2 py-1
        font-mono text-sm tracking-wide
        rounded-full border border-gray-300 dark:border-gray-600
        bg-transparent
        transition-colors duration-200
        hover:border-lime-400 dark:hover:border-lime-400
        min-h-[44px] min-w-[44px] justify-center
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
