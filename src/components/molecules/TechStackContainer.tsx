import TechStackChip from "@/components/atoms/TechStackChip";
import { useLocale } from "@/hooks/useLocale";

const TechStackContainer = () => {
    const { t } = useLocale();

    const frontendStack = [
        'HTML',
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Emotion',
        'Styled Components',
        'Redux',
        'ESLint',
        'React Query',
        'Zustand'
    ];

    const backendStack = [
        'JAVA',
        'Springboot',
        'RDBMS'
    ];

    const otherStack = [
        'Docker',
        'Git',
        'AWS S3',
        'Figma',
        'Zeplin',
    ];
    
    return (
        <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col justify-start ml-1">
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-xl mt-1 md:mt-1 lg:mt-3 font-mono text-gray-800 dark:text-orange-100 text-start tracking-normal ">
                        {t('skills.frontend')}
                </h2>
                </div>
                <div className="flex flex-wrap justify-start mt-3">
                    {frontendStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>

            <div className="flex flex-col justify-start ml-1">
            <h2 className="text-lg sm:text-lg md:text-xl lg:text-xl mt-3 md:mt-3 lg:mt-5 font-mono text-gray-800 dark:text-orange-100 text-start tracking-normal ">
                    {t('skills.backend')}
             </h2>
                </div>
                <div className="flex flex-wrap justify-start mt-3">
                    {backendStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>

            <div className="flex flex-col justify-start ml-1">
                    <h2 className="text-lg sm:text-lg md:text-xl lg:text-xl mt-3 md:mt-3 lg:mt-5 font-mono text-gray-800 dark:text-orange-100 text-start tracking-normal ">
                            {t('skills.etc')}, Collab tools
                </h2>
            </div>
                <div className="flex flex-wrap justify-start mt-3">
                    {otherStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>
        </div>
        
    )
    }

export default TechStackContainer