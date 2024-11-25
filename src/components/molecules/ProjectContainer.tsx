import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
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
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full rounded-lg overflow-hidden"
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={`${image}-${index}`}>
              <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800">
                <img 
                  src={image} 
                  alt={`Project image ${index + 1}`} 
                  className="h-[300px] w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-red-600">
          {title}
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          {subtitle}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectContainer;