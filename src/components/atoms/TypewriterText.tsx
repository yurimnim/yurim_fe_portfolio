import { useState, useEffect, useRef } from 'react';

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
  const [isComplete, setIsComplete] = useState(false);

  const segIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const cancelledRef = useRef(false);
  // Only play the animation once — never restart on re-renders
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (hasPlayedRef.current) return;

    segIndexRef.current = 0;
    charIndexRef.current = 0;
    cancelledRef.current = false;
    setDisplaySegments([]);
    setIsComplete(false);

    const tick = () => {
      if (cancelledRef.current) return;

      const si = segIndexRef.current;
      const ci = charIndexRef.current;

      if (si >= segments.length) {
        hasPlayedRef.current = true;
        setIsComplete(true);
        return;
      }

      const seg = segments[si];

      if (ci < seg.text.length) {
        setDisplaySegments(prev => {
          const next = [...prev];
          next[si] = {
            ...seg,
            text: seg.text.slice(0, ci + 1)
          };
          return next;
        });

        charIndexRef.current = ci + 1;
        setTimeout(tick, speed);
      } else {
        segIndexRef.current = si + 1;
        charIndexRef.current = 0;
        tick();
      }
    };

    const initialTimeout = setTimeout(tick, delay);

    return () => {
      cancelledRef.current = true;
      clearTimeout(initialTimeout);
    };
  }, [segments, speed, delay]);

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
          className={`inline-block font-mono text-[1.44rem] leading-none align-baseline animate-[blink_1s_infinite] text-lime-400 ${cursorClassName}`}
          style={{ WebkitTextStroke: '2px currentColor' }}
          aria-hidden="true"
        >_</span>
      )}
    </span>
  );
};

export default TypewriterText;
