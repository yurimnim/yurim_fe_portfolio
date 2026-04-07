interface SectionTitleProps {
  text: string;
  isMainTitle?: boolean;
}

const SectionTitle = ({ text, isMainTitle = false }: SectionTitleProps) => {
  const baseClasses = "font-mono tracking-wider";
  const sizeClasses = isMainTitle ? "text-xl sm:text-lg md:text-2xl lg:text-3xl" : "text-sm sm:text-base md:text-lg lg:text-xl";

  return (
    <span className={`${baseClasses} ${sizeClasses}`}>
      <span className="text-lime-400">{'// '}</span>
      <span className="text-gray-900 dark:text-gray-100">{text}</span>
    </span>
  );
};

export default SectionTitle;
