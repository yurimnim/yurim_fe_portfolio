import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    
    return (
        <button
        onClick={toggleTheme}
        className="relative w-20 h-10 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
        <div className="absolute inset-1 flex items-center justify-between px-2">
            <Sun className={`w-4 h-4 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-400'}`} />
            <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`} />
        </div>

        <div
            className={`
            absolute w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
            ${theme === 'dark' ? 'translate-x-11' : 'translate-x-1'}
            flex items-center justify-center top-1
            `}
        >
            {theme === 'light' ? (
            <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
            <Moon className="w-4 h-4 text-blue-400" />
            )}
        </div>
        </button>
    )
}

export default ThemeToggleButton