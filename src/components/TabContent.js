import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import styled from "styled-components";
import Card from "./Card";


const TabMenu = styled.ul`
    display: flex;
    justify-content: center;

    .tabButton {
        display: flex;
        width: clac(100% / 3)
        height: 32px;
        margin: 30px 5px 0 5px;
        padding: 6px 10px;
        font-size: 14px;
        border-radius: 30px;
        background-color: rgba(41, 66, 31, 0.45);
        color: #29421f;
        cursor: pointer;
        transition: .2s;
    }

    .focused {
        background: #29421f;
        color: #fff;
    }
`

function Tab(props) {

    const [currentTab, clickTab] = useState(0);

    const timeItems = props.items.filter(data => data.id > 7 && data.id < 16);
    const limitedItems = props.items.filter(data => data.id > 15 && data.id < 24);
    const onlyItems = props.items.filter(data => data.id > 23 && data.id < 32);

    const tabClickHandler = (index) => {
        clickTab(index);
    };

    const tabArr = [
        {
            tabButton: (
                <li className={currentTab === 0 ? "tabButton focused" : "tabButton"}
                    onClick={() => tabClickHandler(0)}>타임특가</li>
            ),
            tabItems: (
                <div className="main-container">
                    {timeItems.map((data) => (
                        <Link to={`/detail/${data.id}`} key={data.id}>
                            <Card data={data}></Card>
                        </Link>
                    ))}
                </div>
            )
        },
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
        {
            tabButton: (
                <li className={currentTab === 2 ? "tabButton focused" : "tabButton"}
                    onClick={() => tabClickHandler(2)}>루트한정특가</li>
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
            <TabMenu>
                {tabArr.map((tabData, index) => (tabData.tabButton))}
            </TabMenu>
            <div>
                {tabArr[currentTab].tabItems}
            </div>
        </>
    )
};


export default Tab;