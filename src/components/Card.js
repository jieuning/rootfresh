import React from "react";
import "../pages/mainPage/style.css"

function Card(props) {

    return (
        <ul className="wrap">
            <li>
                <img src={process.env.PUBLIC_URL + props.data.image} />
                <div className="txtarea">
                    <div className="item-price">
                        <h4 className="item-title">{props.data.title}</h4>
                        <span className="discount-rate" >{props.data.discount_rate}</span>
                        <span className="price">{props.data.price}</span>
                        <span className="dimmed-price">{props.data.dimmed_price}</span>
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default Card;