import React, { useState } from 'react';
import "./style.css";
import { mainSliderTxt } from '../../data';

//image
import mainBanner1 from './image/main_banner1.png'
import mainBanner2 from './image/main_banner2.png'
import mainBanner3 from './image/main_banner3.png'
import mainBanner4 from './image/main_banner4.png'

//components
import {MainBanner1, MainBanner2} from './MainBanner'

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

function MySwiper() {

  let [banText] = useState(mainSliderTxt);
  // let [mainBanner, setMainBanner]  = useState[MainBanner1, MainBanner2, MainBanner2, MainBanner2];
  // console.log(mainBanner)

  return (
    <div>
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
          <MainBanner1
              banText={banText[0]}
              bannerImage={bannerImage[0]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner2
            banText={banText[1]}
            bannerImage={bannerImage[1]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner2
            banText={banText[2]}
            bannerImage={bannerImage[2]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner2
            banText={banText[3]}
            bannerImage={bannerImage[3]}
          />
        </SwiperSlide>
        <button className='button-prev-slide'></button>
        <button className='button-next-slide'></button>
      </Swiper>
    </div>
  );
};

export default MySwiper;