import React, { useState } from "react";
import "../pages/mainPage/style.css"
// import {mainitems, timeSaleItem } from "../../data"
import styled, { css } from "styled-components";

const TitleSize = styled.h4`
    margin-top: 10px;
    font-size: ${(props) => props.size ? '' : '16px'};
    font-weight: ${(props) => props.weight ? '400' : '700'};
    font-family: ${(props) => props.fontFamily};
    line-height: 1.5;
`

function Card(props) {

    return (
        <Link to="/detail">
            <ul className="wrap">
                <li>
                    <img style={{ borderRadius: '10px' }} src={process.env.PUBLIC_URL + images[0] + (i + 1) + '.png'} />
                    <div className="txtarea">
                        <h4 className="item-title">{spacialitem.title}</h4>
                        <div>
                            <span className="discount-rate">{spacialitem[i].discount_rate}</span>                                            
                            <span className="price">{slaeItem[i].price}</span>
                            <span className="dimmed-price">{slaeItem[i].dimmed_price}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </Link>
    )
};

export default Card;