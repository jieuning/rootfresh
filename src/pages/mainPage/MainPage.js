import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.css"

//components
import MainSlider from "../../components/slider/Slider"
import Card from "../../components/Card"
import TabContent from "../../components/TabContent"
import TheFresh from "../../components/thefresh"
import NewItem from "../../components/NewItem"
import RecipeCard from "../../components/RecipeCard"

//data
import CategoryData from "../../dummy/categorydata.json"
import { reviewArr } from "../../dummy/contentOption"


function MainPage({items}) {

    const navigate = useNavigate();

    /* 베스트 상품 필터 */
    const bestItems = items.filter(data => data.rank <= 8);
    console.log(bestItems)
    /* 레시피 필터 */
    const recipe = items.filter(data => data.id >= 52);

    /* 카테고리 데이터 */
    const cateData = useState(CategoryData);


    return (
        <React.Fragment>
            {/* 메인 슬라이드 배너 */}
            <MainSlider />

            <section>
                <h2>신상품</h2>
                <NewItem items={items} />
            </section> 
            {/* 서브 배너 */}
            <div className="sub-banner">
                <img src={process.env.PUBLIC_URL + '/image/sub_banner.png'} alt="감귤 배너 이미지" />
            </div>

            {/* 특가 */}
            <section>
                <h2>특별한 특가</h2>
                <TabContent items={items} />
            </section>

            {/* 레시피 */}
            <div className="recipe-background">
                <div className="recipe-wrap">
                    <div className="recipe-title">
                        <h3>비밀 레시피<br />한 눈에 보기</h3>
                    </div>
                    <div className="recipe-box">
                        {recipe.map((data)=>(
                            <RecipeCard data={data}/>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* 인기 카테고리 */}
            <section>
                <h2>인기 카테고리 모음</h2>
                <ul className="cate-wrap">
                    {cateData[0].map((ctdata) => (
                        <li>
                            <img src={process.env.PUBLIC_URL + ctdata.image} />
                            <p>{ctdata.title2}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 베스트 상품 */}
            <section>
                <h2>베스트</h2>
                <div className="main-container">
                    {bestItems.map((data) => (
                        <Link className="card" to={`/detail/${data.id}`}>
                            <Card data={data}></Card>
                            <span className="rank">{data.rank}</span>
                        </Link>
                    ))}
                </div>
                <button className="more-button" 
                        onClick={()=>navigate(`/menu/베스트`)}
                >베스트 상품 더보기</button>
            </section>

            {/* THE신선 */}
            <section>
                <h2>오늘 수확, THE신선</h2>
                <TheFresh items={items} />
            </section>
            
            {/* 후기 */}
            <section>
                <h2>고객 후기</h2>
                <div className="review">
                    {reviewArr.map( i => (
                        <img src={process.env.PUBLIC_URL + '/image/review' + i + '.png'} 
                        alt="리뷰 이미지" />
                    ))}
                </div>
                <div className="review-insta">
                    <p>더 많은 후기가 궁금하다면?</p>
                    <p>@rootfresh_gramm</p>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MainPage;