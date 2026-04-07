import StackChip from "@/components/atoms/StackChip";
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
        'Redux Toolkit',
        'RTK Query',
        'React Query',
        'Zustand',
        'Framer Motion',
        '@tanstack/react-virtual',
        'Vitest',
        'ESLint',
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
        <div className="flex flex-col items-center w-full gap-4">
            <div className="w-full">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.frontend')}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {frontendStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.backend')}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {backendStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.etc')}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {otherStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
