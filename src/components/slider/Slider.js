import React from 'react';
import "./style.css";
import styled from 'styled-components';

//image
import mainBanner1 from './image/main_banner1.png'
import mainBanner2 from './image/main_banner2.png'
import mainBanner3 from './image/main_banner3.png'
import mainBanner4 from './image/main_banner4.png'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const bannerImage = [
  mainBanner1,
  mainBanner2,
  mainBanner3,
  mainBanner4
]

const Slide = styled.a`
  width: 100%;
  height: 400px;
  display: block;
  background: url(${(props) => props.bannerImage || bannerImage[0]});
  background-size: cover;
  background-position: center center;
`;

function MySwiper() {

  return (
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
      speed={400}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <a href='#'><Slide bannerImage={bannerImage[0]}></Slide></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#'><Slide bannerImage={bannerImage[1]}></Slide></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#'><Slide bannerImage={bannerImage[2]}></Slide></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#'><Slide bannerImage={bannerImage[3]}></Slide></a>
      </SwiperSlide>
      <button className='button-prev-slide'></button>
      <button className='button-next-slide'></button>
    </Swiper>
  );
};

export default MySwiper;