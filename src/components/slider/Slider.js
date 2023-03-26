import React, { useRef } from 'react';
import styled from 'styled-components';

//css
import "./style.css";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function MySwiper() {

  const bannerArr = [1, 2, 3, 4]

  const BannerPrevRef = useRef(null);
  const BannerNextRef = useRef(null);

  return (
    <StyledSwiper
      slidesPerView={1}
      navigation={{
        prevEl: BannerPrevRef.current,
        nextEl: BannerNextRef.current
      }}
      pagination={{ type: "fraction" }}
      loop={true}
      speed={400}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = BannerPrevRef.current;
        swiper.params.navigation.nextEl = BannerNextRef.current;
      }}
    >
      {bannerArr.map(data => (
        <SwiperSlide>
          <img className='banner-image' src={process.env.PUBLIC_URL + '/image/main_banner' + data + '.png'} alt="슬라이드 배너" />
        </SwiperSlide>
      ))}
      <SlideButton style={{left: "20%"}} ref={BannerPrevRef}></SlideButton>
      <SlideButton arrowRotate style={{right: "20%"}} ref={BannerNextRef}></SlideButton>
    </StyledSwiper>
  );
};

export default MySwiper;



const StyledSwiper = styled(Swiper)`
  position: relative;
`
const SlideButton = styled.button`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  transform: translateY(-50%);
  z-index: 20;
  border: none;
  background: url('image/prev.png');
  background-size: cover;
  transform: rotate(${props => props.arrowRotate ? "180deg" : "0deg"});
  transition: .4s;
  opacity: 0;
  ${StyledSwiper}:hover & {
    opacity: 1;
  }
`
