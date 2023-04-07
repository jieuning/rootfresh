import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//components
import Card from "./Card";
import Timer from "./timer";


function Tab(props) {

    const [currentTab, clickTab] = useState(0);

    const timeItems = props.items.filter(data => data.id > 7 && data.id < 16);
    const limitedItems = props.items.filter(data => data.id > 15 && data.id < 24);
    const onlyItems = props.items.filter(data => data.id > 23 && data.id < 32);

    const tabClickHandler = (index) => {
        clickTab(index);
    };

    const tabArr = [
        /* 타임특가 */ 
        {
            tabButton: (
                <li className={currentTab === 0 ? 
                    "tabButton focused" : "tabButton"}
                    onClick={() => tabClickHandler(0)}>
                    타임특가
                </li>
            ),
            tabItems: (
                <TapContainer>
                    {timeItems.map((data) => (
                        <Link className="card-link" 
                            to={`/detail/${data.id}`} 
                            key={data.id}>
                            <Card data={data}></Card>
                            <span className="timer-wrap">
                                <div style={{display: "flex"}}>
                                    <img src={process.env.PUBLIC_URL + '/image/clock.png'}
                                        alt="검색 버튼" />
                                    <Timer hh="24" mm="00" ss="00" />
                                </div>
                                <span style={{
                                    fontSize: "14px", marginRight: "20px"}}>
                                        절찬 구매 중!
                                </span>
                            </span>
                        </Link>
                    ))}
                </TapContainer>
            )
        },
        /* 한정특가 */ 
        {
            tabButton: (
                <li className={currentTab === 1 ? "tabButton focused" : "tabButton"}
                    onClick={() => tabClickHandler(1)}>한정특가</li>
            ),
            tabItems: (
                <div className="main-container">
                    {limitedItems.map((data) => (
                        <Link to={`/detail/${data.id}`} key={data.id}>
                            <Card data={data}></Card>
                        </Link>
                    ))}
                </div>
            )
        },
        /* 대박특가 */
        {
            tabButton: (
                <li className={currentTab === 2 ? "tabButton focused" : "tabButton"}
                    onClick={() => tabClickHandler(2)}>대박특가</li>
            ),
            tabItems: (
                <div className="main-container">
                    {onlyItems.map((data) => (
                        <Link to={`/detail/${data.id}`} key={data.id}>
                            <Card data={data}></Card>
                        </Link>))}
                </div>
            )
        }];

    return (
        <>
            <TabBtn>
                {tabArr.map((tabData) => tabData.tabButton)}
            </TabBtn>
            <div>
                {tabArr[currentTab].tabItems}
            </div>
        </>
    )
};


export default Tab;


const TabBtn = styled.ul`
    display: flex;
    justify-content: center;

    .tabButton {
        display: flex;
        width: clac(100% / 3)
        height: 32px;
        margin: 30px 5px 0 5px;
        padding: 8px 14px;
        font-size: 14px;
        border-radius: 30px;
        background-color: rgba(42, 104, 52, 0.25);
        cursor: pointer;
        transition: .2s;

        &:hover {
            background-color: rgba(42, 104, 52, 0.45);
            color: #2A6834;
        }
    }

    .focused {
        background: #2A6834;
        color: #fff;

        &:hover {
            background: #2A6834;
            color: #fff;
        }
    }
`

const TapContainer = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
gap: 20px;
margin-top: 30px;

.card-link {
    position: relative;
}

.timer-wrap {
    position: absolute;
    top: 250px;
    left: 0;
    width: 285px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(42, 104, 52,.7);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
}

.timer-wrap img {
    width: 18px;
    object-fit: contain;
    margin: 0 10px 0 20px;
}
`