import "../../../pages/detailPage/style.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
//component
import MobDetailPopUp from "../mobDetailPopUp";

function DetailBottomNav({ sameItemFind, items, modal, setModal }) {

  const [popUp, setPopUp] = useState(false);

  /* pathname 불러오기 */
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [location]);

  return (
    <NavWrap>
      {/* 구매하기 버튼 */}
      <button className="cart-btn" onClick={() => { setPopUp(true) }}>
        <h2 className="hidden">구매하기 버튼</h2>
        구매하기
      </button>

      {/* 장바구니 담기 팝업 */}
      {popUp === true ?
        <MobDetailPopUp
          setPopUp={setPopUp}
          items={items}
          modal={modal}
          setModal={setModal}
          sameItemFind={sameItemFind}
        />
        : null
      }
    </NavWrap>
  )
};

export default DetailBottomNav;

const NavWrap = styled.div`
  width: 100%;
  height: 86px;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99;
`