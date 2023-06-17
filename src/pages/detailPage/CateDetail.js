import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
//component
import Card from "../../components/Card";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";
//mobile
import MobDetailHeader from "../../components/mobile/header/mobDetailHeader";


function CateDetail({ items, setItems }) {

  const navigate = useNavigate();

  const [currentTab, clickTab] = useState(0);

  // url파라미터 name
  const { category } = useParams();

  // items의 menu 와 url의 name과 같은 상품만 필터
  const catefilter = items.filter((data) => data.category === category);

  // items 복사
  const itemsCopy = [...items];

  // 최신순
  const newestPriceOrder = () => {
    itemsCopy.sort((a, b) => a.id - b.id);
    setItems(itemsCopy);
  };

  // 낮은 가격순
  const rowPriceOrder = () => {
    itemsCopy.sort((a, b) => a.price - b.price);
    setItems(itemsCopy);
  };

  // 높은 가격순
  const highPriceOrder = () => {
    itemsCopy.sort((a, b) => b.price - a.price);
    setItems(itemsCopy);
  };

  // 메뉴 클릭시 버튼 활성화
  const tabClickHandler = (index) => {
    clickTab(index);
  };

  return (
    <CateDetailContainer>
      <Pc>
        <h2 className="main-title">{category}</h2>
      </Pc>

      <Mobile>
        {/* 모바일 디테일 헤더 */}
        <MobDetailHeader category={category} />
      </Mobile>

      <ItemAlign>
        {/* 총 상품 개수 */}
        <li>총 {catefilter.length}건</li>

        {/* 필터 */}
        <BtnWrap>
          <h2 className="hidden">가격 필터</h2>
          
          {/* 최신순 */}
          <div className={currentTab === 0 ? "focus" : "sort-btn"}
            onClick={() => {
              newestPriceOrder();
              tabClickHandler(0);
            }}>
            <h2 className="hidden">최신순 버튼</h2>
            최신순
          </div>
          <Line />

          {/* 낮은 가격순 */}
          <div className={currentTab === 1 ? "focus" : "sort-btn"}
            onClick={() => {
              rowPriceOrder();
              tabClickHandler(1);
            }}>
            <h2 className="hidden">낮은 가격순 버튼</h2>
            낮은 가격순
          </div>
          <Line />

          {/* 높은 가격순 */}
          <div className={currentTab === 2 ? "focus" : "sort-btn"}
            onClick={() => {
              highPriceOrder();
              tabClickHandler(2);
            }}>
            <h2 className="hidden">높은 가격순 버튼</h2>
            높은 가격순
          </div>
        </BtnWrap>
      </ItemAlign>

      {
        catefilter.length !== 0 ?
          // 상품이 존재할 시
          <Container>
            {items.map((data, i) => data.category === category &&
              <div key={i} className="menu-item"
                onClick={() => navigate(`/detail/${data.id}`)}
              >
                {/* 카드 컴포넌트 */}
                <Card data={data} />
              </div>
            )}
          </Container>
          :
          /* 상품이 존재하지 않을 시 */
          <div style={{ margin: "180px 0" }}>
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