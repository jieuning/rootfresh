import styled from 'styled-components';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';


function mobReview({ reviewArr }) {
  return (
    <ReviewWrap>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={6}>
        {reviewArr.map(i => (
          <SwiperSlide key={i}>
            <div className='review'>
              <img src={process.env.PUBLIC_URL + '/image/review' + i + '.png'}
                alt="리뷰 이미지" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ReviewWrap>
  )
};

export default mobReview;

const ReviewWrap = styled.div`
  .swiper-wrapper {
    width: calc(45% - 100px);
  }
  .swiper-slide:first-child{
    margin-left: 20px;
  }
  .swiper-slide:last-child {
    margin-right: 20px;
  }
`