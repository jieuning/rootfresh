import React from "react";
import styled from "styled-components";
import CommaFormat from "./CommaFormat";

//css
import "../pages/mainPage/style.css"

function thefresh({items}) {

    const freshFruit = items.filter(data => data.id > 47 && data.id < 50);
    const freshSeafood = items.filter(data => data.id > 49 && data.id < 52);

    return (
        <TheFreshContainer>
            <ul style={{ marginRight: "40px" }}>
                <li className="fresh-banner">
                    <div className="fresh-title">
                        <h3>더 신선한 싱그러운 제철 채소·과일</h3>
                        <button className="fresh-more-btn">더 보기</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/image/thefresh1.png'} />
                </li>
                {freshFruit.map((data, i) => (
                    <li className="fresh-items">
                        <img src={process.env.PUBLIC_URL + data.image} />
                        <div className="fresh-txt-wrap">
                            <h5>{data.title}</h5>
                            <span>{data.content}</span>
                            <p>{CommaFormat(data.price)}<span>원</span></p>
                            <img src={data.image_icon}/>
                        </div>
                    </li>
                ))}
            </ul>
            <ul>
                <li className="fresh-banner">
                    <div className="fresh-title">
                        <h3>더 신선한 제철 해산물</h3>
                        <button className="fresh-more-btn">더 보기</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/image/thefresh2.png'} />
                </li>
                {freshSeafood.map((data, i) => (
                    <li className="fresh-items">
                        <img src={process.env.PUBLIC_URL + data.image} />
                        <div className="fresh-txt-wrap">
                            <h5>{data.title}</h5>
                            <span>{data.content}</span>
                            <p>{CommaFormat(data.price)}<span>원</span></p>
                            <img src={data.image_icon}/>
                        </div>
                    </li>
                ))}
            </ul>
        </TheFreshContainer>
    )
}

export default thefresh;

const TheFreshContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 30px;

    .fresh-items {
        display: flex;
        margin-top: 20px;
    }

    .fresh-txt-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
        line-height: 1.5;
    }

    .fresh-txt-wrap > h5 {
        font-size: 16px;
        font-weight: 600;
    }

    .fresh-txt-wrap > span {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .fresh-txt-wrap > p {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
    }

    .fresh-items > img {
        flex-direction: column;
        width: 140px;
        border-radius: 10px;
    }

    .fresh-banner {
        position: relative;
    }

    .fresh-banner > img {
        width: 580px;
        height: 320px;
        object-fit: contain;
        border-radius: 10px;
    }

    .fresh-title {
        position: absolute;
        bottom: 0;
        text-align: left;
        margin: 30px;
    }

    .fresh-title > h3 {
        z-index: 30;
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 10px;
        color: #1E1E1E;
    }

    .fresh-more-btn {
        border-radius: 30px;
        border: none;
        padding: 4px 10px;
        background-color: rgba(255,255,255,.7);
    }
`