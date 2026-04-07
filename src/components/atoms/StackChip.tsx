type TechStackChipProps = {
  techStack: string;
  className?: string;
}

const StackChip = ({ techStack, className = '' }: TechStackChipProps) => {
  return (
    <span className={`
      text-xs
      py-1.5
      px-3
      rounded-md
      inline-block
      font-mono
      border
      border-lime-400/60 dark:border-lime-400/40
      text-gray-700 dark:text-gray-300
      tracking-wide
      ${className}
    `}>
      {techStack}
    </span>
  );
};

export default StackChip;
