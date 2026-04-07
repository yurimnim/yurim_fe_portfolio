import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggleButton = () => {
  const [usesSystemTheme, setUsesSystemTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return !window.localStorage.getItem('theme');
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return (window.localStorage.getItem('theme') as ThemeMode | null) ?? getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;

    if (usesSystemTheme) {
      window.localStorage.removeItem('theme');
      return;
    }

    window.localStorage.setItem('theme', theme);
  }, [theme, usesSystemTheme]);

  useEffect(() => {
    if (!usesSystemTheme || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = (event: MediaQueryListEvent | MediaQueryList) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    syncSystemTheme(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      syncSystemTheme(event);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [usesSystemTheme]);

  const toggleTheme = () => {
    setUsesSystemTheme(false);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center
        w-9 h-9
        rounded-full border border-gray-300 dark:border-gray-600
        bg-transparent
        transition-colors duration-300
        hover:border-lime-400 dark:hover:border-lime-400
        text-gray-700 dark:text-gray-300
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={1.5} />
      ) : (
        <Sun size={18} strokeWidth={1.5} className="text-lime-400" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
