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
      // 슬라이드 설정
      slidesPerView={1}
      pagination={{ type: "fraction" }}
      loop={true} //무한 재생
      speed={400}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}

      // 커스텀 네비게이션 버튼
      navigation={{
        prevEl: BannerPrevRef.current,
        nextEl: BannerNextRef.current
      }}

      // 커스텀 네이게이션으로 초기화 작업
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = BannerPrevRef.current;
        swiper.params.navigation.nextEl = BannerNextRef.current;
      }}
    >
      {slideBanImg.map((image, i) => (
        // 모바일, 데스크탑 구분
        isMobile === false ?
          // 모바일
          <SwiperSlide key={i}>
            <img className='banner-image'
              src={process.env.PUBLIC_URL + image.pc}
              alt={image.alt}
            />
          </SwiperSlide>
          :
          // 데스크탑
          <SwiperSlide key={i}>
            <img className='banner-image'
              src={process.env.PUBLIC_URL + image.mobile}
              alt={image.alt}
            />
          </SwiperSlide>
      ))}
      {/* 커스텀 이전 버튼 */}
      <SlideButton style={{ left: "20%" }} ref={BannerPrevRef} />
      {/* 커스텀 다음 버튼 */}
      <SlideButton arrowRotate style={{ right: "20%" }} ref={BannerNextRef} />
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
