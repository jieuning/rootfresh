import React, { useState } from "react";
import styled from "styled-components";
//components
import Card from "./Card";
import Timer from "./timer";


function Tab({ items, navigate }) {

  const [currentTab, clickTab] = useState(0);

  /* 해당 아이템 필터 */
  const timeItems = items.filter(data => data.detail_menu === "타임특가");
  const limitedItems = items.filter(data => data.detail_menu === "한정특가");
  const onlyItems = items.filter(data => data.detail_menu === "대박특가");

  /* 버튼 클릭시 해당 index로 이동 */
  const handleTabClick = (index) => {
    clickTab(index);
  };

  const tabArr = [
    /* 타임특가 */
    {
      tabButton: (
        <li className={currentTab === 0 ?
          "tabButton focused" : "tabButton"}
          onClick={() => handleTabClick(0)}>
          타임특가
        </li>
      ),
      tabItems: (
        <>
          {/* 타이머 */}
          <TimerWrap>
            < Timer hh="24" mm="00" ss="00" />
            <p>딱 24시간만 특가 할인중!</p>
          </TimerWrap>
          <TapContainer>
            {timeItems.map((data) => (
              <div key={data.id} className="card-link"
                onClick={() => navigate(`/detail/${data.id}`)}>
                <Card data={data}></Card>
              </div>
            ))}
          </TapContainer>
        </>
      )
    },
    /* 한정특가 */
    {
      tabButton: (
        <li className={currentTab === 1 ?
          "tabButton focused" : "tabButton"}
          onClick={() => handleTabClick(1)}>
          한정특가
        </li>
      ),
      tabItems: (
        <>
          <TxtWrap>
            <p>200개 한정</p>
            <p>정해진 수량이 얼마 남지 않았어요!</p>
          </TxtWrap>
          <TapContainer>
            {limitedItems.map((data) => (
              <div key={data.id} className="card-link"
                onClick={() => navigate(`/detail/${data.id}`)} >
                <Card data={data}></Card>
              </div>
            ))}
          </TapContainer>
        </>
      )
    },
    /* 대박특가 */
    {
      tabButton: (
        <li className={currentTab === 2 ?
          "tabButton focused" : "tabButton"}
          onClick={() => handleTabClick(2)}>대박특가</li>
      ),
      tabItems: (
        <>
          <TxtWrap>
            <p>20%~50%</p>
            <p>대박 할인! 어머 이건 사야해!</p>
          </TxtWrap>
          <TapContainer>
            {onlyItems.map((data) => (
              <div key={data.id} className="card-link"
                onClick={() => navigate(`/detail/${data.id}`)} >
                <Card data={data}></Card>
              </div>
            ))}
          </TapContainer >
        </>
      )
    }];

  return (
    <>
      <TabBtn>
        {tabArr.map((data) => data.tabButton)}
      </TabBtn>
      <div className="tap_menu">
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
  cursor: pointer;
}
@media(max-width: 1229px) {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
`
const TimerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    color: #b1b1b1;
    font-size: 14px;
  }
`
const TxtWrap = styled.div`
  p:first-child {
    font-weight: 600;
    font-size: 20px;
    margin-top: 30px;
  }
  p:last-child {
    font-size: 14px;
    color: #b1b1b1;
    margin-top: 10px;
  }
`