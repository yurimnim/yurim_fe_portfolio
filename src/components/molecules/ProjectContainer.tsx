import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '@/styles/swiperCustom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocale } from '@/hooks/useLocale';
import StackChip from '@/components/atoms/StackChip';
import { ProjectContents } from '@/types';
import { Drill } from 'lucide-react';

const ProjectPlaceholder = ({ label }: { label: string }) => (
  <div className="
    relative w-full h-[300px] sm:h-[400px] lg:h-[500px]
    rounded-lg overflow-hidden
    bg-[#1a1a1a]
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
      <span className="font-mono text-sm sm:text-base text-gray-500 tracking-wide px-4 py-2 border border-gray-700 rounded-md">
        {label}
      </span>
    </div>
  </div>
);

const ProjectContainer = ({
  imageList,
  placeholderLabel,
  title,
  subtitle,
  description,
  techStack,
  url
}: ProjectContents) => {
  const { t } = useLocale();

  return (
    <div className="
      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
      max-w-[1400px] mx-auto
      p-4 sm:p-6 md:p-8 lg:p-10
      bg-white dark:bg-[#1a1a1a]
      border border-gray-100 dark:border-gray-800
      rounded-xl
      transition-all duration-300
      hover:border-gray-200 dark:hover:border-gray-700
      hover:shadow-md dark:hover:shadow-gray-900/50
      z-20
    ">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image / Placeholder */}
        <div className="w-full lg:w-[45%]">
          {imageList && imageList.length > 0 ? (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
            >
              {imageList.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <div className="flex justify-center items-center bg-slate-50 dark:bg-gray-800">
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-auto h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ProjectPlaceholder label={placeholderLabel || ''} />
          )}
        </div>

        {/* Content */}
        <div className="w-full lg:w-[55%] space-y-6 p-2 sm:p-4 lg:p-8">
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
