import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface ContentProps {
  imagePaths: string[];
  title: string;
  contentText: string; 
}

const ContentContainer = ({
  imagePaths, titie, contentText
}:ContentProps) => {
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
  )
}

export default ContentContainer