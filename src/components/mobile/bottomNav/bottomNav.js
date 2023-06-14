import "./style.css"
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
//data
import { mNavIcon } from "../../../dummy/contentOption";


function BottomNav() {

  /* 홈 아이콘 클릭시 scroll을 맨 위로 부드럽게 이동 */
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavWrap>
      {/* 아이콘 리프레시 후에도 고정 */}
      <NavLink to='/'
        onClick={scrollToTop}
        className={({ isActive }) => (isActive ? "active1" : "nav_image1")}
      >
        <h2 className="hidden">홈 버튼</h2>
      </NavLink>
      <Link>
        <h2 className="hidden">배송조회 버튼</h2>
        <NavImage src={process.env.PUBLIC_URL + mNavIcon[1].image} alt="배송조회" />
      </Link>
      <Link>
        <h2 className="hidden">찜하기 버튼</h2>
        <NavImage src={process.env.PUBLIC_URL + mNavIcon[2].image} alt="찜하기" />
      </Link>
      <NavLink to='/m_search'
        className={({ isActive }) => (isActive ? "active2" : "nav_image2")}
      >
      </NavLink>
      <NavLink to='/m_mypage'
        className={({ isActive }) => (isActive ? "active3" : "nav_image3")}
      >
        <h2 className="hidden">마이페이지 버튼</h2>
      </NavLink>
    </NavWrap>
  )
};

export default BottomNav;

const NavWrap = styled.nav`.
  width: 100%;
  height: 66px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  padding: 15px 30px 0 30px;
  border-top: 1px solid #e5e5e5;
  z-index: 99;
`
const NavImage = styled.img`
  width: 22px;
`