import React, { useState } from "react"
import { Link } from "react-router-dom"

//css
import "./style.css"

//components
import MainSlider from "../../components/slider/Slider"
import Card from "../../components/Card"
import TabContent from "../../components/TabContent"
import TheFresh from "../../components/thefresh"
import CustomItem from "../../components/CustomItem"

//data
import CategoryData from "../../db/categorydata.json"


function MainPage(props) {

    const bestItems = props.items.filter(data => data.id > 31 && data.id < 40);

    const cateData = useState(CategoryData);

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <React.Fragment>
            <MainSlider />
            <section>
                <h2>취향 저격 맞춤 상품</h2>
                <CustomItem items={props.items} />
            </section> 
            {/* ccustom item menu end */}

            <div className="sub-banner">
                <img src={process.env.PUBLIC_URL + '/image/sub_banner.png'} alt="감귤 배너 이미지" />
            </div>
            {/* sub banner end */}

            <section>
                <h2>특별한 특가</h2>
                <TabContent items={props.items} />
            </section>
            {/* special item menu end */}

            <div className="season-background">
                <div className="season-wrap">
                    <div className="left-content">
                        <h3>비밀 레시피<br />한 눈에 보기</h3>
                    </div>
                </div>
            </div>
            {/* recipe menu end */}

            <section>
                <h2>인기 카테고리 모음</h2>
                <ul className="cate-wrap">
                    {cateData[0].map((ctdata) => (
                        <li>
                            <img src={process.env.PUBLIC_URL + ctdata.image} />
                            <p>{ctdata.title}</p>
                        </li>
                    ))}
                </ul>
            </section>
            {/* best category end */}

            <section>
                <h2>베스트</h2>
                <div className="main-container">
                    {bestItems.map((data) => (
                        <Link to={`/detail/${data.id}`}>
                            <Card data={data}></Card>
                        </Link>
                    ))}
                </div>
                <button className="more-button">베스트 상품 더보기</button>
            </section>
            {/* best item menu end */}

            <section>
                <h2>오늘 수확, THE신선</h2>
                <TheFresh items={props.items} />
            </section>
            {/* thefresh menu end */}

            <section>
                <h2>고객 후기</h2>
                <div className="review">
                    {arr.map(data => (
                        <img src={process.env.PUBLIC_URL + '/image/review' + data + '.png'} alt="리뷰 이미지" />
                    ))}
                </div>
                <div className="review-insta">
                    <p>더 많은 후기가 궁금하다면?</p>
                    <p>@rootfresh_gramm</p>
                </div>
            </section>
            {/* review menu end */}
        </React.Fragment>
    );
}

export default MainPage;