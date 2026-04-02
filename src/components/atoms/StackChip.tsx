type TechStackChipProps = {
  techStack: string;
}

const StackChip = ({ techStack }: TechStackChipProps) => {
  return (
    <span className="
      text-xs
      py-1.5
      px-3
      rounded-md
      inline-block
      font-mono
      mr-2
      mb-2
      transition-colors
      duration-200
      border
      border-lime-400/60 dark:border-lime-400/40
      text-gray-700 dark:text-gray-300
      hover:border-lime-400 dark:hover:border-lime-400
      hover:text-gray-900 dark:hover:text-lime-400
      tracking-wide
    ">
      {techStack}
    </span>
  );
};

export default StackChip;
