import styled from "styled-components"
import "../../../pages/detailPage/style.css"
//firebase
import { firebaseAuth } from "../../../firebase"

function CartBottomNav() {

  // firebase profile정보
  const auth = firebaseAuth;
  const user = auth.currentUser;

  return (
    <NavWrap>
      {
        // 유저 정보가 존재한다면
        user !== null ?
          // 결제하기 버튼 활성화
          <button className="cart-btn">결제하기</button>
          :
          // 결제하기 버튼 비활성화
          <button className="cart-btn-disable">로그인 후 이용 가능합니다.</button>
      }
    </NavWrap>
  )
};

export default CartBottomNav

const NavWrap = styled.div`
  width: 100%;
  height: 88px;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99;

  .cart-btn {
    width: calc(100% - 40px);
    margin-top: 10px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: #2A6834;
    color: #fff;
    font-size: 16px;
  }

  .cart-btn-disable {
    width: calc(100% - 40px);
    margin-top: 10px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: #ccc;
    color: #fff;
    font-size: 16px;
  }
`