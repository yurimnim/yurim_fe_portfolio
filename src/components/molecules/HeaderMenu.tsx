import { ContactRound, Hand, Presentation, RotateCcw } from "lucide-react";

interface MenuItem {
  title: string;
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
  const menuItems: MenuItem[] = [
    { 
      title: 'Home', 
      icon: <RotateCcw strokeWidth={1} />,
      onClick: onHomeClick
    },
    { 
      title: 'Hello', 
      icon: <Hand strokeWidth={1} />,
      onClick: onHelloClick
    },
    { 
      title: 'Projects', 
      icon: <Presentation strokeWidth={1} />,
      onClick: onProjectsClick
    },
    { 
      title: 'Contact', 
      icon: <ContactRound strokeWidth={1} />,
      onClick: onContactClick
    },
  ];

  return (
    <header className="flex absolute flex-row min-w-fit top-0 right-0 mr-8 cursor-pointer">
      {menuItems.map((menuItem, index) => (
        <div 
          key={index}
          className="flex items-center text-emerald-600"
          onClick={menuItem.onClick}
        >
          <div className="mr-1 ml-2 lg:ml-5">
            {menuItem.icon}
          </div>
          <h1
            className="
              text-md
              lg:text-lg
              font-mono
              text-gray-800
              tracking-normal
              hover:bg-lime-200
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-lime-800
              rounded-sm
              transition-all
              duration-100
              z-10
            "
          >
            {menuItem.title}
          </h1>
        </div>
      ))}
    </header>
  );
};

export default HeaderMenu;