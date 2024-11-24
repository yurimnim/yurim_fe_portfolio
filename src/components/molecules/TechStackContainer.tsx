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
    ];
    
    return (
        <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col justify-start">
            <h2 className="text-2xl sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-3 lg:mt-8 font-sans font-normal text-gray-800 dark:text-orange-100 text-start tracking-tight ">
                    {t('skills.frontend')}
             </h2>
                </div>
                <div className="flex flex-wrap justify-start mt-5">
                    {frontendStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>

            <div className="flex flex-col justify-start">
            <h2 className="text-2xl sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-3 lg:mt-8 font-sans font-normal text-gray-800 dark:text-orange-100 text-start tracking-tight ">
                    {t('skills.backend')}
             </h2>
                </div>
                <div className="flex flex-wrap justify-start mt-5">
                    {backendStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>

            <div className="flex flex-col justify-start">
            <h2 className="text-2xl sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-3 lg:mt-8 font-sans font-normal text-gray-800 dark:text-orange-100 text-start tracking-tight ">
                    {t('skills.backend')}
             </h2>
                </div>
                <div className="flex flex-wrap justify-start mt-5">
                    {otherStack.map((tech, index) => (
                        <TechStackChip key={index} techStack={tech} />
                    ))}
            </div>
        </div>
        
    )
    }

export default TechStackContainer