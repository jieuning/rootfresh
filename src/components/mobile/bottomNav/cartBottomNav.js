import styled from "styled-components"
import "../../../pages/detailPage/style.css"
//firebase
import { firebaseAuth } from "../../../firebase"

function CartBottomNav() {

  /* firebase profile정보 가져옴 */
  const auth = firebaseAuth;
  const user = auth.currentUser;

  return (
    <NavWrap>
      {/* 로그인이 되있다면 결제하기 버튼 활성화 */}
      {/* 로그인이 안되있다면 결제하기 버튼 비활성화 */}
      {user !== null ?
        <button className="cart-btn">결제하기</button>
        : <button className="cart-btn-disable">로그인 후 이용 가능합니다.</button>
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
`