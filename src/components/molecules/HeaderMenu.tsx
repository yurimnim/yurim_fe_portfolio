import { ContactRound, Hand, Presentation, RotateCcw, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggleButton from "@/components/atoms/ThemeToggleButton";

interface MenuItem {
  title: string;
  sectionId: string;
  icon: JSX.Element;
  onClick: () => void;
}

interface HeaderMenuProps {
  onHomeClick: () => void;
  onHelloClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const HeaderMenu = ({
  onHomeClick,
  onHelloClick,
  onProjectsClick,
  onContactClick
}: HeaderMenuProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      sectionId: 'home',
      icon: <RotateCcw size={16} strokeWidth={1.5} />,
      onClick: onHomeClick
    },
    {
      title: 'Hello',
      sectionId: 'hello',
      icon: <Hand size={16} strokeWidth={1.5} />,
      onClick: onHelloClick
    },
    {
      title: 'Projects',
      sectionId: 'projects',
      icon: <Presentation size={16} strokeWidth={1.5} />,
      onClick: onProjectsClick
    },
    {
      title: 'Contact',
      sectionId: 'contact',
      icon: <ContactRound size={16} strokeWidth={1.5} />,
      onClick: onContactClick
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }
      const scrollY = window.scrollY + 200;
      const sections = ['contact', 'projects', 'hello', 'home'];
      for (const id of sections) {
        const el = document.getElementById(`section-${id}`);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: MenuItem) => {
    item.onClick();
    setMobileOpen(false);
  };

  return (
    <header className="flex items-center justify-between w-full px-4 md:px-8 py-3">
      {/* Logo - left side */}
      <button
        onClick={onHomeClick}
        className="font-mono text-lg text-gray-900 dark:text-lime-400 tracking-tight hover:opacity-70 transition-opacity"
      >
        {'< YL />'}
      </button>

      {/* Desktop nav - right side */}
      <div className="hidden md:flex items-center gap-2">
        {menuItems.map((item) => (
          // biome-ignore lint/a11y/useButtonType: <explanation>
<button
            key={item.sectionId}
            className={`
              relative flex items-center gap-1.5
              px-3 py-2
              font-mono text-sm
              tracking-normal
              rounded-md
              transition-colors duration-300
              h-9
              ${activeSection === item.sectionId
                ? 'text-gray-900 dark:text-lime-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }
            `}
            onClick={() => handleNavClick(item)}
          >
            <span className="text-lime-500 dark:text-lime-400">{item.icon}</span>
            <span>{item.title}</span>
            {activeSection === item.sectionId && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 inset-x-2 h-[2px] bg-lime-400 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />
        <LanguageSwitcher />
        <ThemeToggleButton />
      </div>

      {/* Mobile controls */}
      <div className="flex md:hidden items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggleButton />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-10 h-10 min-h-[44px] min-w-[44px] text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="
          absolute top-full left-0 right-0
          bg-white/95 dark:bg-[#111111]/95 backdrop-blur-sm
          border-b border-gray-200 dark:border-gray-800
          shadow-lg
          md:hidden
          z-50
        ">
          {menuItems.map((item) => (
            <button
              key={item.sectionId}
              className={`
                flex items-center gap-3 w-full
                px-6 py-4
                font-mono text-base
                transition-colors duration-200
                min-h-[44px]
                ${activeSection === item.sectionId
                  ? 'text-lime-500 dark:text-lime-400 bg-lime-50 dark:bg-lime-400/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }
              `}
              onClick={() => handleNavClick(item)}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
