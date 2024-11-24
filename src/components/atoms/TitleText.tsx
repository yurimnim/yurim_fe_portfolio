import { useRef, useEffect, useState } from 'react';

interface TitleTextProps {
  titleText: string;
  onClick?: () => void;
  reverse?: boolean;
}

const TitleText = ({ titleText, onClick }: TitleTextProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [titleText]);

  return (
    <div className="relative inline-block">
      <div 
        className="absolute bg-lime-300 dark:bg-white"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${dimensions.width + 32}px`,  
          height: `${dimensions.height + 5}px`,
        }}
        onClick={onClick}
      />
      <h2 
        ref={textRef}
        className="relative text-xl md:text-2xl lg:text-4xl font-mono tracking-noraml text-slate-900 dark:text-lime-500"
      >
        {titleText}
      </h2>
    </div>
  );
};

export default TitleText;