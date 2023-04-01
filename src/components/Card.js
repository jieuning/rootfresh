import React from "react";
import CommaFormat from "./CommaFormat";

//css
import "../pages/mainPage/style.css"


function Card({data, bestItems}) {

    console.log(bestItems)

    return (
        <ul className="card-wrap">
            <li>
                {bestItems == data.rank ? 
                    null : <span className="rank">{data.rank}</span>
                }
                <img src={process.env.PUBLIC_URL + data.image} />
                <div className="txtarea">
                    <div className="item-price">
                        <h4 className="item-title">{data.title}</h4>
                        <span className="discount-rate" >{data.discount_rate}</span>
                        <span className="price">{CommaFormat(data.price)}<span>원</span></span>
                        <span className="dimmed-price">{data.dimmed_price}</span>
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default Card;
