import { useTranslation } from 'react-i18next';

const LanguegeSwitcher = () => {
 const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-3 py-1 rounded ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded ${
          i18n.language === 'ko' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => changeLanguage('ko')}
      >
        한국어
      </button>
    </div>
  )
}

export default LanguegeSwitcher