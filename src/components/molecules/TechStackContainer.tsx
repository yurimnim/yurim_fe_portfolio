import StackChip from "@/components/atoms/StackChip";
import { useLocale } from "@/hooks/useLocale";

const TechStackContainer = () => {
    const { t } = useLocale();

    const frontendRows = [
        ['HTML', 'React', 'Next.js', 'JavaScript'],
        ['TypeScript', 'Tailwind CSS', 'Emotion', 'Redux'],
        ['Redux Toolkit', 'RTK Query', 'React Query', 'Zustand'],
        ['Framer Motion', '@tanstack/react-virtual', 'Vitest', 'Playwright'],
    ];

    const backendStack = ['JAVA', 'Springboot', 'RDBMS'];

    const otherStack = ['Docker', 'Git', 'AWS S3', 'Figma', 'Zeplin'];

    return (
        <div className="flex flex-col items-center w-full gap-4 mt-3">
            <div className="w-full">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.frontend')}
                </h2>
                <div className="flex flex-col items-center gap-2">
                    {frontendRows.map((row) => (
                        <div key={row.join("|")} className="flex flex-nowrap justify-center gap-2">
                            {row.map((tech) => (
                                <StackChip key={tech} techStack={tech} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-3">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.backend')}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {backendStack.map((tech) => (
                        <StackChip key={tech} techStack={tech} />
                    ))}
                </div>
            </div>

            <div className="w-full mt-3">
                <h2 className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide mb-3 text-center">
                    {t('skills.etc')}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {otherStack.map((tech) => (
                        <StackChip key={tech} techStack={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
