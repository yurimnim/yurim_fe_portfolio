import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursorClassName?: string;
}

const TypewriterText = (props: TypewriterTextProps) => {
  const { text, speed = 100, delay = 0, className, cursorClassName } = props;
  const { displayText, isTyping } = useTypewriter({
    text,
    speed,
    delay
  });

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span 
          className={`inline-block w-[2px] h-5 ml-1 animate-pulse bg-current ${cursorClassName}`}
          aria-hidden="true"
        />
      )}
    </span>
  )
}

export default TypewriterText