
type TechStackChipProps = {
  techStack: string;
}

type ColorScheme = {
  background: string;
  text: string;
}

const TECH_COLORS: Record<string, ColorScheme> = {

  "React": {
    background: "bg-blue-300",
    text: "text-blue-900"
  },
  "Next.js": {
    background: "bg-gray-300",
    text: "text-gray-900"
  },
  "TypeScript": {
    background: "bg-blue-500",
    text: "text-white"
  },
  "Tailwind CSS": {
    background: "bg-blue-100",
    text: "text-blue-800"
  },
  "JavaScript": {
    background: "bg-yellow-100",
    text: "text-yellow-900"
  },
  "Emotion": {
    background: "bg-pink-100",
    text: "text-pink-900"
  },
  "Styled Components": {
    background: "bg-purple-100",
    text: "text-purple-900"
  },
  "Redux": {
    background: "bg-blue-100",
    text: "text-blue-900"
  },
  "React Query": {
    background: "bg-pink-200",
    text: "text-blue-900"
  },
  
  // Backend
  "JAVA": {
    background: "bg-red-100",
    text: "text-red-900"
  },
  "Springboot": {
    background: "bg-green-100",
    text: "text-green-900"
  },
  "RDBMS": {
    background: "bg-yellow-100",
    text: "text-yellow-900"
  }, 

  // Other
    "Docker": {
        background: "bg-blue-200",
        text: "text-blue-900"
    },
    "Git": {
        background: "bg-red-200",
        text: "text-red-900"
    },
} as const;

const DEFAULT_COLORS: ColorScheme = {
  background: "bg-blue-200",
  text: "text-gray-900"
};

const getTechColors = (tech: string): ColorScheme => {
  return TECH_COLORS[tech] || DEFAULT_COLORS;
};


const TechStackChip = ({ techStack }: TechStackChipProps) => {
  const colors = getTechColors(techStack);
  
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
      text-gray-700
      tracking-wide
    `}>
      {techStack}
    </div>
  );
};

//export { TECH_COLORS, getTechColors };
export default TechStackChip;