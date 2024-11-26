import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '@/styles/swiperCustom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocale } from '@/hooks/useLocale';
import StackChip from '@/components/atoms/StackChip';
import { ProjectContents } from '@/types';
import { Drill,  LaptopMinimal, Link } from 'lucide-react';

const ProjectContainer = ({
  imageList,
  title,
  subtitle,
  description, 
  techStack, 
  url
}: ProjectContents) => {
  const { t } = useLocale();

  return (
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
          max-w-[1400px] mx-auto  
          p-2 sm:p-4 md:p-6 lg:p-8 
          bg-white 
          shadow-lg rounded-xl
          z-20">
  
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Swiper */}
          <div className="w-full lg:w-[45%]">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
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
                      className="w-auto h-[400px] sm:h-[500px] lg:h-[650px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full lg:w-[55%] space-y-6 p-10">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                {title}
              </h2>
              <h3 className="text-[19px] sm:text-xl lg:text-2xl text-gray-700 font-normal dark:text-gray-300">
                {subtitle}
              </h3>
              <p className="text-lg sm:text-lg lg:text-xl font-light text-slate-600 dark:text-gray-400 leading-snug">
                {description}
              </p>
            </div>

            <div className="w-full mt-20">
              <hr className="border-t border-gray-300 dark:border-gray-700 mt-12" />
            </div>

            <div className="flex flex-col space-y-6">
              <div className='flex items-center text-emerald-600'>
                <div className='ml-1'>
                      <Drill size={25} strokeWidth={1}/>
                  </div>
                  <h1 className='text-xl font-sans ml-1 font-semibold text-gray-800'>
                    {t('contents.technology')}
                  </h1>
              </div>
                <div className="flex flex-wrap gap-0">
                  {techStack?.map((tech, index) => (
                    <StackChip key={`tech-${index}`} techStack={tech} />
                  ))}    
                </div>
                
                {url && (
                  <>
                      <div className='flex items-center text-emerald-600'>
                        <div className='ml-1'>
                            <LaptopMinimal size={25} strokeWidth={1}/>
                        </div>
                        <h1 className='text-xl font-sans text-normal ml-2 font-semibold text-gray-800'>
                          URL
                        </h1>
                        <div className='ml-3 text-lime-400 hover:text-black cursor-pointer'>
                            <Link size={25} strokeWidth={2}
                              onClick={() => window.open(url[0])}
                            />
                        </div>
                    </div>
                       
                    </>
                )}
                </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProjectContainer;