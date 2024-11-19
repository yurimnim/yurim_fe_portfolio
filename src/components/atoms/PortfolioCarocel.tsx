import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface PortfolioCarocelProps {
  imagePaths: string[];
}

const PortfolioCarocel = ({ imagePaths }: PortfolioCarocelProps) => {
  //SwiperCore.use([Navigation, Pagination]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {imagePaths.map((path, index) => (
        <SwiperSlide key={index}>
          <img src={path} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default PortfolioCarocel