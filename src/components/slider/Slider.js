import React from 'react';
import "./style.css";
import useHover from "../useHover";
import styled from 'styled-components';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const NeviHover = styled.button`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border: none;
  left: 20%;
  background: url(./prev.png);
  background-size: cover;
  opacity: 1;
  transition: opacity 0.3s;
`


function MySwiper() {

  const [ref, hovering] = useHover();

  return (
    <>
      <NeviHover ref={ref} />
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
        <div>
          {hovering ? <button className='button-prev-slide'></button> : null}
          <button className='button-next-slide navi-share'></button>
        </div>
      </Swiper>
    </>
  );
};

export default MySwiper;