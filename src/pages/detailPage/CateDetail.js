import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
//component
import Card from "../../components/Card";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";
//mobile
import MobDetailHeader from "../../components/mobile/mobDetailHeader";


function CateDetail({ items, setItems }) {

  const navigate = useNavigate();

  const [currentTab, clickTab] = useState(0);

  /* url파라미터 name을 가져옴 */
  const { category } = useParams();

  /* items의 menu 와 url의 name과 같은 아이템 필터 */
  const catefilter = items.filter((data) => data.category === category);

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
    <CateDetailContainer>
      <Pc>
        <h2>{category}</h2>
      </Pc>
      <Mobile>
        <MobDetailHeader category={category} />
      </Mobile>
      <ItemAlign>
        <li>총 {catefilter.length}건</li>
        {/* 필터 */}
        <BtnWrap>
          <div className={currentTab === 0 ?
            "focus" : "sort-btn"}
            onClick={() => {
              newestPriceOrder();
              tabClickHandler(0);
            }}>
            최신순
          </div>
          <Line />
          <div className={currentTab === 1 ?
            "focus" : "sort-btn"}
            onClick={() => {
              rowPriceOrder();
              tabClickHandler(1);
            }}>
            낮은 가격순
          </div>
          <Line />
          <div className={currentTab === 2 ?
            "focus" : "sort-btn"}
            onClick={() => {
              highPriceOrder();
              tabClickHandler(2);
            }}>
            높은 가격순
          </div>
        </BtnWrap>
      </ItemAlign>
      {catefilter.length !== 0 ?
        <Container>
          {items.map((data, i) => data.category === category &&
            <div key={i} className="menu-item"
              onClick={() => navigate(`/detail/${data.id}`)}>
              <Card data={data} />
            </div>
          )}
        </Container>
        /* 일치하는 상품이 없을시 */
        : <div style={{ margin: "180px 0" }}>
          <p style={{ color: "#ccc", marginTop: "20px" }}>
            상품이 없습니다.
          </p>
        </div>
      }
    </CateDetailContainer>
  )
};

export default CateDetail;

const CateDetailContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media(max-width: 1229px) {
    width: 100%;
    padding: 43px 0 90px;
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
  cursor: pointer;
  @media(max-width: 1229px) {
    padding-left: 20px; 
    .menu-item {
      width: calc(50% - 20px);
    }
  }
`