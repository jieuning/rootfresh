import React, { useState, useRef } from 'react';
import "./style.css";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';


function MySwiper() {

  return (
    <div>
      <Swiper
         slidesPerView={1}
         navigation={{
          prevEl: ".button-prev-slide",
          nextEl: ".button-next-slide"
         }}
         modules={[Navigation]}
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
        <div className='button-prev-slide'>
          <img src={process.env.PUBLIC_URL + '/image/prev.png'} alt='prevButton' />
        </div>
        <div className='button-next-slide'>
          <img src={process.env.PUBLIC_URL + '/image/next.png'} alt='nextButton' />
        </div>
      </Swiper>
    </div>
  );
};

export default MySwiper;