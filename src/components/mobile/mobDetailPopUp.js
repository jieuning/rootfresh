import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//component
import CommaFormat from "../CommaFormat";
import CartModal from "../cart/CartModal";

function MobDetailPopUp({ items, setPopUp, modal, setModal, sameItemFind }) {

  /* url파라미터 가져오기 */
  const { id } = useParams();

  /* items데이터의 id와 url파라미터가 같은 데이터를 찾아줌*/
  const findItem = items.find((data) => data.id == id);

  const [count, setCount] = useState(1);

  /* 구매 수량 카운터 */
  const onIncrease = () => {
    setCount(count + 1)
  };
  const onDecrease = () => {
    count === 1 ? alert('1개 이상부터 구매 가능합니다')
      : setCount(count - 1)
  };

  return (
    <>
      {/* 장바구니 담기 버튼 클릭시 모달 */}
      {modal === true ? <CartModal/> : null}
      {/* 배경 및 팝업 닫기 */}
      <Background  onClick={() => setPopUp(false)} />
      {/* 팝업 */}
      <ModalWrap>
        <div className="detail_popup">
          <span></span>
          <div className="popup_item_info">
            <img src={process.env.PUBLIC_URL + findItem.image} />
            <p>{findItem.title}</p>
          </div>
          <div className="popup_item_price">
            <div className="price">
              <span>{CommaFormat(count * findItem.price)}원</span>
              <span>{findItem.dimmed_price}</span>
            </div>
            <div className="counter">
              <button onClick={onDecrease}>-</button>
              <p>{count}</p>
              <button onClick={onIncrease}>+</button>
            </div>
          </div>
          {/* 장바구니 담기 버튼 */}
          <CartButton onClick={() => {
            setModal(true)
            sameItemFind()
          }}>
            {CommaFormat(count * findItem.price)}
            원 장바구니 담기</CartButton>
        </div>
      </ModalWrap>
    </>
  )
};

export default MobDetailPopUp;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 100%
  height: 100vh;
  background: rgba(0,0,0,.4);
  z-index: 1;
`
const ModalWrap = styled.div`
  z-index: 2;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  .detail_popup {
    width: 100%;
    height: 34%;
    background-color: #fff;
    position: absolute;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    animation: fadeInUp .4s;
  }
  .popup_item_info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    padding: 20px;
    border-bottom: 1px solid #f2f2f2;
  }
  .popup_item_info img {
    width: 10%;
    border-radius: 3px;
  }
  .popup_item_price {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }
  .price span:last-child {
    font-size: 12px;
    font-weight: 400;
    color: #ccc;
    text-decoration: line-through;
    margin-left: 5px; 
  }
  .counter {
    background-color: #fff;
  }
  .counter p {
    font-size: 12px;
  }
  .counter button {
    font-size: 18px;
  }
`
const CartButton = styled.button`
  width: 92%;
  height: 42px;
  border: none;
  background-color: #2A6834;
  color: #fff;
  border-radius: 6px;
`