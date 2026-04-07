// import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PortfolioMain from "@/components/pages/PortfolioMain";
import { useEffect } from 'react';
import i18n, { getStoredLanguagePreference, getSystemLanguage } from '@/i18n/config';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/portfolio" replace />
//   },
//   {
//     path: '/portfolio',
//     element: <PortfolioMain />
//   }
// ]);

function App() {
//test
  useEffect(() => {
    console.log('App mounted');
    console.log('Environment:', import.meta.env);
    console.log('Base URL:', import.meta.env.BASE_URL);
  }, []);

  useEffect(() => {
    const applyDocumentLanguage = (language: string) => {
      document.documentElement.lang = language;
    };

    applyDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);

    const handleLanguageChanged = (language: string) => {
      applyDocumentLanguage(language);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    if (getStoredLanguagePreference()) {
      return () => {
        i18n.off('languageChanged', handleLanguageChanged);
      };
    }

    const handleSystemLanguageChange = () => {
      i18n.changeLanguage(getSystemLanguage());
    };

    window.addEventListener('languagechange', handleSystemLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
      window.removeEventListener('languagechange', handleSystemLanguageChange);
    };
  }, []);

  return (
    <div className="App">
      <PortfolioMain />
    </div>
  );
}

export default App;
