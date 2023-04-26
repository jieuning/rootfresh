import "./style.css"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
//data
import { mNavIcon } from "../../../dummy/contentOption";

function BottomNav() {

  /* scroll을 맨 위로 */
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  

  return (
    <NavWrap>
      <NavLink to='/' 
        onClick={scrollToTop}
        className={({isActive}) => 
        (isActive? "active1" : "nav_image1")}>
      </NavLink>
      <Link>
        <NavImage src={process.env.PUBLIC_URL + mNavIcon[1].image}
          alt="배송조회" />
      </Link>
      <Link>
        <NavImage src={process.env.PUBLIC_URL + mNavIcon[2].image}
          alt="찜하기" />
      </Link>
      <NavLink to='/m_search'
        className={({isActive}) =>
        (isActive ? "active2" : "nav_image2")}>
      </NavLink>
      <NavLink to='/m_mypage'
        className={({isActive}) =>
        (isActive ? "active3" : "nav_image3")}>
      </NavLink>
    </NavWrap>
  )
};

export default BottomNav;

const NavWrap = styled.nav`.
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  padding: 10px 30px 0 30px;
  border-top: 1px solid #e5e5e5;
  z-index: 99;
`
const NavImage = styled.img`
  width: 18px;
`