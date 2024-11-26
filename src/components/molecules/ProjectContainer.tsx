import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '@/styles/swiperCustom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectProps {
  imageList: string[];
  title: string;
  subtitle: string;
  description: string;
}

const ProjectContainer = ({
  imageList,
  title,
  subtitle,
  description
}: ProjectProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
          max-w-[1400px] mx-auto 
          p-2 sm:p-4 md:p-6 lg:p-8 
          bg-white 
          shadow-lg rounded-xl
          z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
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

          <div className="w-full lg:w-[55%] space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-600">
                {title}
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                {subtitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;