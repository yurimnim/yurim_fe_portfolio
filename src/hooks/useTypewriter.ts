import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const startTyping = useCallback(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      startTyping();
    }, delay);
    return () => clearTimeout(initialDelay);
  }, [currentIndex, delay, startTyping]);

  return {
    displayText,
    isTyping,
    currentIndex,
    reset: () => {
      setDisplayText('');
      setCurrentIndex(0);
      setIsTyping(true);
    }
  };
};