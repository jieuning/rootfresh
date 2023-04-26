import styled from "styled-components";
//component
import Card from "./Card";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'

SwiperCore.use([Navigation]);

 
function NewItem({ items, navigate }) {

  const NewItems = items.filter(data =>
    data.menu === "신상품");

  return (
    <NewContainer>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }}
        breakpoints={{
          1230: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
      >
        {NewItems.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="container"
              onClick={() => navigate(`/detail/${data.id}`)}>
              <Card data={data}></Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev" />
      <button className="swiper-button-next" />
    </NewContainer>
  )
}

export default NewItem;

const NewContainer = styled.div`
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 10px);
    left: -20px;
    transform: translateY(-50%);
    z-index: 20;
    border: none;
    background: url('image/menu_arrow_prev.png');
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
    overflow: hidden;
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
    background: url('image/menu_arrow_next.png');
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
  }
  .swiper-button-prev::after,
  .swiper-button-next::after
    {
      display: none
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
    .swiper-slide:first-child{
      margin-left: 20px;
    }
    .swiper-slide:last-child {
      margin-right: 20px;
    }
  } 
`
