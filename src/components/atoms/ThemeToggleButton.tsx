import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center
        w-10 h-10 min-h-[44px] min-w-[44px]
        rounded-full border border-gray-300 dark:border-gray-600
        bg-transparent
        transition-colors duration-200
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
