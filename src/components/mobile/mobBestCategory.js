import styled from 'styled-components';
import { useState } from 'react';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
//data
import CategoryData from "../../dummy/categorydata.json";

function MobBestCategory({ navigate }) {

  /* 카테고리 데이터 */
  const [cateData] = useState(CategoryData);

  return (
    // 인기 카테고리 모음
    <BestCateContainer>
      {/* 스와이퍼 */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        >
        <ul className="cate-wrap">
          {cateData.map((ctdata, i) => (
            <SwiperSlide key={i}>
              <li onClick={() => navigate(`category/${cateData[i].title}`)}>
                {/* 이미지 */}
                <img src={process.env.PUBLIC_URL + ctdata.image} alt={ctdata.alt} />

                {/* 타이틀 */}
                {ctdata.title}
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </BestCateContainer>
  )
};

export default MobBestCategory;

const BestCateContainer = styled.div`
  margin-top: 30px;

  .swiper-wrapper {
    width: 18%;
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
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    text-align: center;
  }
  li img {
    width: 100%;
    border-radius: 100%;
  }
`