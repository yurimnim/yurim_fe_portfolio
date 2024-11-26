
type TechStackChipProps = {
  techStack: string;
}


const StackChip = ({ techStack }: TechStackChipProps) => {
  return (
    <div className={`
      text-[15px]
      py-1 
      px-3 
      rounded-full 
      inline-block 
      font-mono
      mr-3 
      mb-2
      transition-colors
      duration-200
      hover:opacity-90
      border-2
      border-lime-400
      text-gray-800
      tracking-wide
    `}>
      {techStack}
    </div>
  );
};

export default StackChip;