import { useState, useEffect, useCallback } from 'react';

type TextSegment = {
  text: string;
  className?: string;
};

interface TypewriterTextProps {
  segments: TextSegment[];
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

const useTypewriter = ({ 
  segments, 
  speed = 100, 
  delay = 0 
}: { 
  segments: TextSegment[];
  speed?: number;
  delay?: number;
}) => {
  const [displaySegments, setDisplaySegments] = useState<TextSegment[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    if (currentSegmentIndex < segments.length) {
      const currentSegment = segments[currentSegmentIndex];
      
      if (currentCharIndex < currentSegment.text.length) {
        const timeout = setTimeout(() => {
          setDisplaySegments(prev => {
            const newSegments = [...prev];
            if (!newSegments[currentSegmentIndex]) {
              newSegments[currentSegmentIndex] = {
                ...currentSegment,
                text: currentSegment.text[currentCharIndex]
              };
            } else {
              newSegments[currentSegmentIndex] = {
                ...currentSegment,
                text: prev[currentSegmentIndex].text + currentSegment.text[currentCharIndex]
              };
            }
            return newSegments;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, speed);
        
        return () => clearTimeout(timeout);
      } else {
        setCurrentSegmentIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentSegmentIndex, currentCharIndex, segments, speed]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => clearTimeout(initialDelay);
  }, [currentSegmentIndex, currentCharIndex, delay, startTyping]);

  return {
    displaySegments,
    isComplete
  };
};

const TypewriterText = ({
  segments,
  speed = 100,
  delay = 0,
  className = '',
  cursorClassName = '',
  showCursor = false,
  onComplete
}: TypewriterTextProps) => {
  const { displaySegments, isComplete } = useTypewriter({
    segments,
    speed,
    delay
  });

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
    {displaySegments.map((segment, index) => (
      <span key={index} className={segment.className}>
        {segment.text}
      </span>
    ))}
    {showCursor && (
      <span 
        className={`inline-block w-5 h-[8px] ml-1 mt-4 animate-[blink_1s_infinite] bg-lime-500 ${cursorClassName}`}
        aria-hidden="true"
      />
    )}
  </span>
  );
};

export default TypewriterText;