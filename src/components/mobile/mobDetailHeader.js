import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//data
import { mHeader } from "../../dummy/contentOption";
//redux
import { useSelector } from "react-redux";
//mobile
import MobHeaderTitle from "./mobHeaderTitle";


function MobDetailHeader({ findItem, category, name }) {

  /* redux 데이터 */
  const state = useSelector((state) => state);
  const cartList = state.cart;

  const navigate = useNavigate();

  return (
    <DetailHeader>
      {/* 이전 버튼 */}
      <Image
        src={process.env.PUBLIC_URL + mHeader[3]}
        alt="이전 페이지 버튼"
        onClick={() => navigate(-1)} />
      {/* 카테고리, 카테고리메뉴 , 메인메뉴, 검색, 마이페지이 타이틀 */}
      {findItem ?
        <p>{findItem.title}</p>
        : <MobHeaderTitle />
      }
      <p>{category}</p>
      <p>{name}</p>
      {/* 장바구니 버튼 */}
      <div style={{ position: "relative" }}>
        <Image
          changeWidth={"18px"}
          src={process.env.PUBLIC_URL + mHeader[2]}
          alt="장바구니"
          onClick={() => navigate('/cart')} />
        <span className={cartList.length === 0 ?
          "none" : "m_add-item-count"}
          onClick={() => { navigate('/Cart') }}>
          {cartList.length}
        </span>
      </div>
    </DetailHeader>
  )
};

export default MobDetailHeader;

const DetailHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 99;
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .m_add-item-count {
    position: absolute;
    top: 12px;
    left: 30px;
    width: 14px;
    height: 14px;
    background: #BAE900;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    color: #fff;
    cursor: pointer;
  }
`
const Image = styled.img`
  width: ${props => props.changeWidth || '14px'};
  padding: 20px;
  cursor: pointer;
`