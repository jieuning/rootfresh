import React from 'react';
import "./style.css";

//Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <a href='#' className='bg slide1'></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#' className='bg slide2'></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#' className='bg slide3'></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#' className='bg slide4'></a>
      </SwiperSlide>
    </Swiper>
  );
};
