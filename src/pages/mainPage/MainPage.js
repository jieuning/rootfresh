import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import MainSlider from "../../components/slider/Slider"
import { mainTitle, mainitems} from "../../data"
import styled from "styled-components";


const TabButtom = styled.button`
    height: 32px;
    background: rgba(41, 66, 31, 0.45);
    border: none;
    border-radius: 30px;
    margin: 30px 5px 0 5px;
    padding: 0 10px;
    font-size: 14px;
    color: #29421f;
`

function MainPage() {

    let [title, setTitle] = useState(mainTitle);
    let [images, setImages] = useState(['/image/custom_item', '/image/sale_item', '/image/best_item']);
    let [items, setItems] = useState(mainitems);

    const spacialItem = items.filter(spacial => {
        return spacial.id < 4;
    })
    const saleItem = items.filter(sale => {
        return sale.id > 3 && sale.id < 12;
    })

    return (
        <React.Fragment>
            <MainSlider />
            <section>
                <h2>{title[0]}</h2>
                <div className="main-container">
                    {spacialItem.map((spacial, i) => (
                        <Link to="/detail">
                            <ul className="wrap">
                                <li>
                                    <img style={{ borderRadius: '10px' }} src={process.env.PUBLIC_URL + images[0] + (i + 1) + '.png'} />
                                    <div className="txtarea">
                                        <div>
                                            <h4 className="item-title">{spacial.title}</h4>
                                            <span className="price">{spacial.price}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Link>))}
                </div>
            </section>

            <div className="sub-banner">
                <img src={process.env.PUBLIC_URL + '/image/sub_banner.png'} />
            </div>

            <section>
                <h2>{title[1]}</h2>
                <div>
                    <TabButtom>타임특가</TabButtom>
                    <TabButtom>한정특가</TabButtom>
                    <TabButtom>루트한정특가</TabButtom>
                </div>
                <div className="main-container">
                    {saleItem.map((sale, i) => (
                        <Link to="/detail">
                            <ul className="wrap">
                                <li>
                                    <img style={{ borderRadius: '10px' }} src={process.env.PUBLIC_URL + images[1] + (i + 1) + '.png'} />
                                    <div className="txtarea">
                                        <div className="item-price">
                                            <h4 className="item-title">{sale.title}</h4>
                                            <span className="discount-rate" >{sale.discount_rate}</span>
                                            <span className="price">{sale.price}</span>
                                            <span className="dimmed-price">{sale.dimmed_price}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Link>))}
                </div>
            </section>
        </React.Fragment>
    );
}

export default MainPage;