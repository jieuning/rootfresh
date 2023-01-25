import React, { useState } from 'react';
import "./style.css";
import { mainSliderTxt } from "../../data";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';


function MySwiper() {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={{
          prevEl: ".button-prev-slide",
          nextEl: ".button-next-slide"
        }}
        pagination={{ type: "fraction" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        speed={300}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <a href='#' className='bg slide1'></a>
          <div className='bantxt white'>
            <h4 className='slide-title-w'>{mainSliderTxt[0].title}</h4>
            <h3 className='slide-subtitle-w'>{mainSliderTxt[0].subtitle}</h3>
            <p className='content-w'>{mainSliderTxt[0].content}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='bg slide2'></a>
          <div className='bantxt'>
            <h4 className='slide-title'>{mainSliderTxt[1].title}</h4>
            <h3 className='slide-subtitle'>{mainSliderTxt[1].subtitle}</h3>
            <p className='content'>{mainSliderTxt[1].content}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='bg slide3'></a>
          <div className='bantxt'>
            <h4 className='slide-title'>{mainSliderTxt[2].title}</h4>
            <h3 className='slide-subtitle'>{mainSliderTxt[2].subtitle}</h3>
            <p className='content'>{mainSliderTxt[2].content}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='bg slide4'></a>
          <div className='bantxt'>
            <h4 className='slide-title'>{mainSliderTxt[3].title}</h4>
            <h3 className='slide-subtitle'>{mainSliderTxt[3].subtitle}</h3>
            <p className='content'>{mainSliderTxt[3].content}</p>
          </div>
        </SwiperSlide>
        <button className='button-prev-slide'></button>
        <button className='button-next-slide'></button>
      </Swiper>
    </div>
  );
};


export default MySwiper;