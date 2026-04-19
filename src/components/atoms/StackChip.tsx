type TechStackChipProps = {
  techStack: string;
  className?: string;
}

const StackChip = ({ techStack, className = '' }: TechStackChipProps) => {
  return (
    <span className={`
      text-[10px] sm:text-xs
      py-1 px-2 sm:py-1.5 sm:px-3
      rounded-md
      inline-block
      font-mono
      border
      border-lime-400/60 dark:border-lime-400/40
      text-gray-700 dark:text-gray-300
      tracking-wide
      whitespace-nowrap
      ${className}
    `}>
      {techStack}
    </span>
  );
};

export default StackChip;
