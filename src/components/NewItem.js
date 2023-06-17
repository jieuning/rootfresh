import styled from "styled-components";
//component
import Card from "./Card";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
//image
import menuPrev from "../assets/menu_arrow_prev.png"
import menuNext from "../assets/menu_arrow_next.png"

SwiperCore.use([Navigation]);


function NewItem({ items, navigate }) {

  const NewItems = items.filter(data => data.menu === "신상품");

  return (
    <NewItemContainer>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        // 1230px 이상에서만 
        breakpoints={{
          1230: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            navigation: {
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next"
            }
          }
        }}
      >
        {NewItems.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="container"
              onClick={() => navigate(`/detail/${data.id}`)}>
              {/* 카드 컴포넌트 */}
              <Card data={data}></Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 이전 버튼 */}
      <button className="swiper-button-prev">
        <h2 className="hidden">이전 상품 버튼</h2>
      </button>

      {/* 다음 버튼 */}
      <button className="swiper-button-next">
        <h2 className="hidden">다음 상품 버튼</h2>
      </button>
    </NewItemContainer>
  )
}

export default NewItem;

const NewItemContainer = styled.div`
  position: relative;

  .swiper-button-prev {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 10px);
    left: -20px;
    transform: translateY(-50%);
    z-index: 20;
    border: none;
    background: url(${menuPrev});
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
  }
  .swiper-button-next {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 10px);
    right: -20px;
    transform: translateY(-50%); 
    z-index: 20;
    border: none;
    background: url(${menuNext});
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
  }
  .swiper-button-prev::after,
  .swiper-button-next::after
    {
      display: none
    }

  @media(max-width: 1260px) {
    .swiper-button-prev {
      width: 35px;
      height: 35px;
      left: -10px;
    }
    .swiper-button-next {
      width: 35px;
      height: 35px;
      right: -10px;
    }
  }
    
  @media(max-width: 1229px) {
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next {
      display: none;
    }
    .swiper-wrapper {
      width: 40%;
    }
    .swiper-wrapper {
      transition-timing-function: linear;
    }
    .swiper-slide:first-child{
      margin-left: 20px;
    }
    .swiper-slide:last-child {
      margin-right: 20px;
    }
`