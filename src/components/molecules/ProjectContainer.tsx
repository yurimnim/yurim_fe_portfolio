import { useLocale } from '@/hooks/useLocale';
import StackChip from '@/components/atoms/StackChip';
import GradientBlurShowcase from '@/components/molecules/GradientBlurShowcase';
import { ProjectContents } from '@/types';
import { Drill } from 'lucide-react';

const ProjectPlaceholder = ({ label }: { label: string }) => (
  <div className="
    relative w-full h-[300px] sm:h-[400px] lg:h-[500px]
    overflow-hidden
    bg-gray-100 dark:bg-gray-800
  ">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: 'linear-gradient(rgba(185,245,66,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(185,245,66,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />
    {/* Pulse overlay */}
    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-lime-400/5 to-transparent" />
    {/* Label */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-sm sm:text-base text-gray-600 dark:text-gray-400 tracking-wide px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">
        {label}
      </span>
    </div>
  </div>
);

interface ProjectContainerProps extends ProjectContents {
  index?: number;
}

const ProjectContainer = ({
  imageList,
  placeholderLabel,
  title,
  subtitle,
  description,
  techStack,
  url,
  index = 0
}: ProjectContainerProps) => {
  const { t } = useLocale();
  
  // Alternate layout: even indices = left, odd indices = right
  const isImageOnLeft = index % 2 === 0;

  return (
    <div className="
      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
      max-w-[1400px] mx-auto
      bg-white dark:bg-[#1a1a1a]
      border border-gray-100 dark:border-gray-800
      rounded-xl
      overflow-hidden
      z-20
    ">
      <div className="flex flex-col lg:flex-row">
        {/* Image / Showcase - extends to edges */}
        <div 
          className="w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[500px]"
          style={{ order: isImageOnLeft ? 1 : 2 }}
        >
          {imageList && imageList.length > 0 ? (
            <GradientBlurShowcase
              images={imageList}
              altText="Project showcase"
            />
          ) : (
            <ProjectPlaceholder label={placeholderLabel || ''} />
          )}
        </div>

        {/* Content */}
        <div 
          className="w-full lg:w-[55%] space-y-6 p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ order: isImageOnLeft ? 2 : 1 }}
        >
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {title}
            </h2>
            <h3 className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-normal">
              {subtitle}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-light text-slate-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <hr className="border-t border-gray-200 dark:border-gray-700 mt-8" />

          <div className="flex flex-col space-y-5">
            {techStack && techStack.length > 0 && (
              <>
                <div className='flex items-center gap-2 text-lime-500 dark:text-lime-400'>
                  <Drill size={20} strokeWidth={1.5} />
                  <span className='text-base font-mono font-semibold text-gray-800 dark:text-gray-200'>
                    {t('contents.technology')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-0">
                  {techStack.map((tech, index) => (
                    <StackChip key={`tech-${index}`} techStack={tech} />
                  ))}
                </div>
              </>
            )}

            {url && url.length > 0 && (
              <a
                href={url[0]}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-1.5 text-sm font-mono text-lime-500 dark:text-lime-400 hover:underline transition-colors'
              >
                {url[0]}
                <span className="text-xs">&#8599;</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
