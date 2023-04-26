import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
//component
import Card from "../../components/Card";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";
//mobile
import MobDetailHeader from "../../components/mobile/mobDetailHeader";

function MenuDetail({ items, setItems, navigate }) {

  const [currentTab, clickTab] = useState(0);

  /* url파라미터 name을 가져옴 */
  const { name } = useParams();

  /* items의 menu 와 url의 name과 같은 아이템 필터 */
  const menufilter = items.filter((data) => data.menu === name);

  /* items 복사 */
  const itemsCopy = [...items];
  /* 최신순 */
  const newestPriceOrder = () => {
    itemsCopy.sort((a, b) => a.id - b.id);
    setItems(itemsCopy);
  };
  /* 낮은 가격순 */
  const rowPriceOrder = () => {
    itemsCopy.sort((a, b) => a.price - b.price);
    setItems(itemsCopy);
  };
  /* 높은 가격순 */
  const highPriceOrder = () => {
    itemsCopy.sort((a, b) => b.price - a.price);
    setItems(itemsCopy);
  };
  /* 탭 클릭시 버튼 활성화 */
  const tabClickHandler = (index) => {
    clickTab(index);
  };

  return (
    <MenuDetailContainer>
      <Pc>
        <h2>{name}</h2>
      </Pc>
      <Mobile>
        <MobDetailHeader name={name}/>
      </Mobile>
      <ItemAlign>
        <li>총 {menufilter.length}건</li>
        <BtnWrap>
          <div className={currentTab === 0 ? "focus" : "sort-btn"}
            onClick={() => {
              newestPriceOrder();
              tabClickHandler(0);
            }}>
            최신순
          </div>
          <Line />
          <div className={currentTab === 1 ? "focus" : "sort-btn"}
            onClick={() => {
              rowPriceOrder();
              tabClickHandler(1);
            }}>
            낮은 가격순
          </div>
          <Line />
          <div className={currentTab === 2 ? "focus" : "sort-btn"}
            onClick={() => {
              highPriceOrder();
              tabClickHandler(2);
            }}>
            높은 가격순
          </div>
        </BtnWrap>
      </ItemAlign>
      <Container>
        {items.map((data, i) => data.menu === name &&
          <div key={i} className="menu-item" 
            onClick={() => navigate(`/detail/${data.id}`)} >
            <Card data={data} />
          </div>
        )}
      </Container>
    </MenuDetailContainer>
  )
};

export default MenuDetail;

const MenuDetailContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media(max-width: 1229px) {
    width: 100%;
    padding-top: 43px;
    overflow-y: hidden;
  }
`
const ItemAlign = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  letter-spacing: -0.06em;
  font-size: 14px;
  font-weight: 500;
  @media(max-width: 1229px) {
    padding: 0 20px;
    font-size: 12px;
  }
`
const BtnWrap = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  .sort-btn {
    color: #b5b5b5;
  }
  .focus {
    color: #333;
  }
`
const Line = styled.span`
  width: 1px;
  height: 12px;
  background-color: #ccc;
  margin: 0 7px;
  @media(max-width: 1229px) {
    height: 10px;
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  @media(max-width: 1229px) {
    padding-left: 20px; 
    .menu-item {
      width: calc(50% - 20px);
      cursor: pointer;
    }
  }
`
