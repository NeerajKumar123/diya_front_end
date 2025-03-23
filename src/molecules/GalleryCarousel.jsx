import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const GalleryCarousel = ({images}) => { 
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <p className="text-black">
              {img.imageName}
            </p>
            <img
              src={img.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 rounded-lg object-contain mt-3"
            />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
