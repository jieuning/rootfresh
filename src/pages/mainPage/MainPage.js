import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"
//components
import MainSlider from "../../components/slider/Slider"
import Card from "../../components/Card"
import TabContent from "../../components/TabContent"
import TheFresh from "../../components/thefresh"
import NewItem from "../../components/NewItem"
import RecipeCard from "../../components/RecipeCard"
import ScrollTopButton from "../../components/topButton"
import Footer from "../../components/footer"
//data
import CategoryData from "../../dummy/categorydata.json"
import { reviewArr } from "../../dummy/contentOption"
//responsive
import { Mobile, Pc, BannerMobile, BannerPc } from "../../components/mobile/responsive"
//mobile
import MobTapContent from "../../components/mobile/mobTapContent"
import MobBestItem from "../../components/mobile/mobBestItem"
import MobReview from "../../components/mobile/mobReview"
import MobHeader from "../../components/mobile/header/mobHeader"
import BottomNav from "../../components/mobile/Nav/bottomNav"
import MobBestCategory from "../../components/mobile/mobBestCategory"


function MainPage({ items }) {

  const navigate = useNavigate();

  // 베스트 상품 필터
  const bestItems = items.filter(data => data.rank <= 8);

  // 레시피 필터
  const recipe = items.filter(data => data.menu === "레시피");

  // 카테고리 데이터 
  const [cateData] = useState(CategoryData);

  return (
    <>
      <Mobile>
        {/* 모바일 헤더 */}
        <MobHeader items={items} navigate={navigate} />
        {/* 모바일 하단 네비게이션 */}
        <BottomNav navigate={navigate} />
      </Mobile>

      <div className="main-container">
        {/* 메인 슬라이드 배너 */}
        <MainSlider />

        {/* 탑버튼 */}
        <Pc>
          <ScrollTopButton />
        </Pc>

        {/* 신상품 */}
        <section>
          <h2 className="main-title">신상품</h2>
          <NewItem items={items} navigate={navigate} />
        </section>

        {/* 서브 배너 데스크탑 */}
        <BannerPc>
          <div className="sub-banner">
            <img src={process.env.PUBLIC_URL + '/image/sub_banner.png'}
              alt="이불 속에서 까먹는 새콤달콤 감귤 배너 이미지" />
          </div>
        </BannerPc>

        {/* 서브 배너 모바일 */}
        <BannerMobile>
          <div className="sub-banner">
            <img src={process.env.PUBLIC_URL + '/image/mob_sub_banner.png'}
              alt="이불 속에서 까먹는 새콤달콤 감귤 배너 이미지" />
          </div>
        </BannerMobile>

        {/* 특가 */}
        <section>
          <Pc>
            <h2 className="main-title">특별한 특가</h2>
            <TabContent items={items} navigate={navigate} />
          </Pc>
          
          <Mobile>
            <MobTapContent items={items} navigate={navigate} />
          </Mobile>
        </section>

        {/* 레시피 */}
        <Pc>
          <div className="recipe-background">
            <div className="recipe-wrap">
              <div className="recipe-title">
                <h2 className="hidden">레시피 보기</h2>
                <h3>비밀 레시피<br />한 눈에 보기</h3>
              </div>
              <div className="recipe-box">
                {recipe.map((data, i) => (<RecipeCard key={i} data={data} />))}
              </div>
            </div>
          </div>
        </Pc>

        {/* 인기 카테고리 */}
        <section>
          <h2 className="main-title">인기 카테고리 모음</h2>
          <Pc>
            <ul className="cate-wrap">
              {cateData.map((ctdata, i) => (
                <li key={i} onClick={() => navigate(`category/${cateData[i].title}`)}>
                  <img src={process.env.PUBLIC_URL + ctdata.image}
                    alt={ctdata.title}
                  />
                  {ctdata.title}
                </li>
              ))}
            </ul>
          </Pc>

          <Mobile>
            <MobBestCategory cateData={cateData} navigate={navigate} />
          </Mobile>
        </section>

        {/* 베스트 상품 */}
        <section>
          <h2 className="main-title">베스트</h2>
          <Pc>
            <div className="container">
              {bestItems.map((data, i) => (
                <div key={i} className="card"
                  onClick={() => navigate(`/detail/${data.id}`)}
                >
                  <Card key={data.id} data={data}></Card>
                  <span className="rank">{data.rank}</span>
                </div>
              ))}
            </div>

            {/* 상품 더보기 버튼 */}
            <button className="more-button" onClick={() => navigate('/menu/베스트')}>
              <h2 className="hidden">베스트 상품 더보기 버튼</h2>
              베스트 상품 더보기
            </button>
          </Pc>

          <Mobile>
            <MobBestItem bestItems={bestItems} navigate={navigate} />
          </Mobile>
        </section>

        {/* THE신선 */}
        <section className="mob-margin">
          <h2 className="mob-margin-cancle main-title">오늘 수확, THE신선</h2>
          <TheFresh onClick={() => navigate('/')}
            items={items}
            navigate={navigate}
          />
        </section>

        {/* 후기 */}
        <section>
          <h2 className="main-title">고객 후기</h2>
          <Pc>
            <div className="review">
              {reviewArr.map(i => (
                <img src={process.env.PUBLIC_URL + '/image/review' + i + '.png'}
                  alt="리뷰 이미지"
                  key={i}
                />
              ))}
            </div>
          </Pc>

          <Mobile>
            {/* 모바일 리뷰 컴포넌트 */}
            <MobReview reviewArr={reviewArr} />
          </Mobile>

          <div className="review-insta">
            <p>더 많은 후기가 궁금하다면?</p>
            <p>@rootfresh_gramm</p>
          </div>
        </section>

        {/* 모바일 푸터 */}
        <Mobile>
          <Footer />
        </Mobile>
      </div>
    </>
  );
}

export default MainPage;