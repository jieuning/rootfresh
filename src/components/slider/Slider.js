import { useRef } from 'react';
import styled from 'styled-components';
import "./style.css";
//data
import { slideBanImg } from '../../dummy/contentOption';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//image
import slidePrev from "../../assets/prev.png"
//responsive
import { useMediaQuery } from "react-responsive"

SwiperCore.use([Navigation, Pagination, Autoplay]);

function MainSlider() {

  const BannerPrevRef = useRef(null);
  const BannerNextRef = useRef(null);

  /* 모바일 768px 이하일때 */
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledSwiper
      slidesPerView={1}
      /* 커스텀 네비게이션 버튼 */
      navigation={{
        prevEl: BannerPrevRef.current,
        nextEl: BannerNextRef.current
      }}
      pagination={{ type: "fraction" }}
      loop={true}
      speed={400}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false

      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = BannerPrevRef.current;
        swiper.params.navigation.nextEl = BannerNextRef.current;
      }}>
      {slideBanImg.map((image, i) => (
        isMobile === false ?
          <SwiperSlide key={i}>
            <img className='banner-image'
              src={process.env.PUBLIC_URL + image.pc}
              alt="메인 배너" />
          </SwiperSlide>
          :
          <SwiperSlide key={i}>
            <img className='banner-image'
              src={process.env.PUBLIC_URL + image.mobile}
              alt="메인 배너" />
          </SwiperSlide>
      ))}
      <SlideButton
        style={{ left: "20%" }}
        ref={BannerPrevRef} />
      <SlideButton
        arrowRotate
        style={{ right: "20%" }}
        ref={BannerNextRef} />
    </StyledSwiper>
  );
};

export default MainSlider;

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
  z-index: 99;
  border: none;
  background: url(${slidePrev});
  background-size: cover;
  transform: rotate(${props => props.arrowRotate ? "180deg" : "0deg"});
  transition: .4s;
  opacity: 0;
  ${StyledSwiper}:hover & {
    opacity: 1;
  }
`
