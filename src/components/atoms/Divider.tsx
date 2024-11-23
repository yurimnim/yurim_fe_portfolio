interface DividerProps {
  className?: string;
  height?: 'sm' | 'md' | 'lg' | 'full';
  color?: string;
}

const Divider = ({ 
  className = '', 
  height = 'md',
  color = 'bg-gray-500 dark:bg-gray-700'
}: DividerProps) => {
  const heightClasses = {
    sm: 'h-16 md:h-20 lg:h-24',
    md: 'h-24 md:h-32 lg:h-40',
    lg: 'h-32 md:h-40 lg:h-48',
    full: 'h-full'
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div 
        className={`
          w-[1px]
          ${heightClasses[height]}
          ${color}
          ${className}
        `}
        role="separator"
        aria-orientation="vertical"
      />
    </div>
  );
};

export default Divider;