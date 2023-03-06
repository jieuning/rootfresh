import React from "react"
import { Link } from "react-router-dom"

//css
import "./style.css"

//components
import MainSlider from "../../components/slider/Slider"
import Card from "../../components/Card"
import TabContent from "../../components/TabContent"


function MainPage(props) {

    const customItems = props.items.filter(data => data.id < 4);

    return (
        <React.Fragment>
            <MainSlider />
            <section>
                <h2>취향 저격 맞춤 상품</h2>
                <div className="main-container">
                    {customItems.map((data) => (
                        <Link to={`/detail/${data.id}`}>
                            <Card data={data}></Card>
                        </Link>
                            
                    ))}
                </div>
            </section>

            <div className="sub-banner">
                <img src={process.env.PUBLIC_URL + '/image/sub_banner.png'} />
            </div>

            <section>
                <h2>특별한 특가</h2>
                <TabContent items={props.items} />
            </section>
        </React.Fragment>
    );
}

export default MainPage;