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
        <div className="flex flex-col justify-start w-full gap-4">
            <div>
                <h2 className="text-sm font-mono text-gray-500 dark:text-gray-500 tracking-wide mb-3">
                    {t('skills.frontend')}
                </h2>
                <div className="flex flex-wrap">
                    {frontendStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-sm font-mono text-gray-500 dark:text-gray-500 tracking-wide mb-3">
                    {t('skills.backend')}
                </h2>
                <div className="flex flex-wrap">
                    {backendStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-sm font-mono text-gray-500 dark:text-gray-500 tracking-wide mb-3">
                    {t('skills.etc')}
                </h2>
                <div className="flex flex-wrap">
                    {otherStack.map((tech, index) => (
                        <StackChip key={index} techStack={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
