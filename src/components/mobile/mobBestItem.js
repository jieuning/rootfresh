//component
import Card from "../Card";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

function mobBestItem({ bestItems, navigate }) {
  return (
    <BestContainer>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {bestItems.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="container">
              <div className="card"
                onClick={() => navigate(`/detail/${data.id}`)}>
                <Card data={data}></Card>
                <span className="rank">{data.rank}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </BestContainer>
  )
};

export default mobBestItem;

const BestContainer = styled.div`
  .swiper-wrapper {
    width: 40%;
  }
  .swiper-slide:first-child{
    margin-left: 20px;
  }
  .swiper-slide:last-child {
    margin-right: 20px;
  }
`