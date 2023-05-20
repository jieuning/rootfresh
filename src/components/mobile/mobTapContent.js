import { useState } from 'react';
import styled from 'styled-components';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
//component
import Card from '../Card';
import Timer from '../timer';


function MobTapContent({ items, navigate }) {

  const [swiper, setSwiper] = useState(0);
  /* swiper activeIndex 슬라이드 버튼 활성화 */ 
  const [tabActiveindex, setTabActiveIndex] = useState(0);

  /* 해당 아이템 필터 */
  const timeItems = items.filter(data => data.mob_detail_menu === "타임특가");
  const limitedItems = items.filter(data => data.mob_detail_menu === "한정특가");
  const onlyItems = items.filter(data => data.mob_detail_menu === "대박특가");

  return (
    <>
      <TabBtnWrap>
        <div className={tabActiveindex === 0 ? 
            "tabBtn active" : "tabBtn"}
          onClick={() => swiper.slideTo(0, 500)}>
          타임특가
        </div>
        <div className={tabActiveindex === 1 ? 
            "tabBtn active" : "tabBtn"}
          onClick={() => swiper.slideTo(1, 500)}>
          한정특가
        </div>
        <div className={tabActiveindex === 2 ? 
            "tabBtn active" : "tabBtn"}
          onClick={() => swiper.slideTo(2, 500)}>
          대박특가
        </div>
      </TabBtnWrap>
      <StyledSwiper
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={() => setTabActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Timer hh="24" mm="00" ss="00" />
          <Content changeColor>딱 24시간만 특가 할인 중!</Content>
          <TabContent>
            {timeItems.map((data) => (
              <div className='card-link' 
                key={data.id}
                onClick={() => navigate(`/detail/${data.id}`)}>
                <Card 
                  className='card-link' 
                  data={data} />
              </div>
            ))}
          </TabContent>
        </SwiperSlide>
        <SwiperSlide>
          <Content changeMargin changeSize>200개 한정</Content>
          <Content changeColor>정해진 수량이 얼마 남지 않았어요!</Content>
          <TabContent>
            {limitedItems.map((data) => (
              <div className='card-link'
                key={data.id}
                onClick={() => navigate(`/detail/${data.id}`)}>
                <Card className='card-link' data={data}></Card>
              </div>
            ))}
          </TabContent>
        </SwiperSlide>
        <SwiperSlide>
          <Content changeMargin changeSize>20%~50%</Content>
          <Content changeColor>대박 할인! 어머 이건 사야해!</Content>
          <TabContent>
            {onlyItems.map((data) => (
              <div className='card-link'
                key={data.id}
                onClick={() => navigate(`/detail/${data.id}`)}>
                <Card className='card-link' data={data}></Card>
              </div>
            ))}
          </TabContent>
        </SwiperSlide>
      </StyledSwiper>
    </>
  )
};

export default MobTapContent;

const TabBtnWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 20px;
  font-size: 14px;
  .tabBtn {
    position: relative;
    background: none;
    border: none;
    letter-spacing: -0.06em;
  }
  .active {
    color: #2A6834;
    transition: all .4s;
  }
  .active::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    margin-top: 8px;
    background-color: #2A6834;
  }
`
const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    transition-timing-function: linear;
  }
  .swiper-slide:first-child {
    margin-left: 20px;
  }
`
const TabContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 22px;
  gap: 10px;
  .card-link {
    position: relative;
    width: calc(33.33% - 20px);
  }
`
const Content = styled.p`
  font-size: ${props => props.changeSize ? "16px" : "14px"};
  margin-top: ${props => props.changeMargin ? "30px" : "10px"};
  color: ${props => props.changeColor ? "#b1b1b1" : "#333"};
`