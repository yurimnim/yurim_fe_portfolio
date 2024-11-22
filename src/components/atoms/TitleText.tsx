import { useRef, useEffect, useState } from 'react';

interface TitleTextProps {
  titleText: string;
}

const TitleText = ({ titleText }: TitleTextProps) => {
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
        className="absolute bg-lime-500 dark:bg-white"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${dimensions.width + 32}px`,  
          height: `${dimensions.height + 5}px`,
        }}
      />
      
      <h2 
        ref={textRef}
        className="relative text-xl md:text-2xl lg:text-6xl font-mono font-extralight tracking-normal text-slate-100"
      >
        {titleText}
      </h2>
    </div>
  );
};

export default TitleText;