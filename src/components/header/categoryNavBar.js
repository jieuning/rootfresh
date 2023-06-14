import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//data
import categorydata from "../../dummy/categorydata.json"


function CategoryNavBar({ fixedHeader }) {

  const [cateData] = useState(categorydata); // 카테고리 데이터

  const navigate = useNavigate();

  return (
    <NavMenuContainer>
      {/* 카테고리 메뉴 */}
      <ul className={fixedHeader > 10 ? "fixed-navmenu-wrap" : "navmenu-wrap"}> {/* 헤더 픽스. 스크롤 탑값이 10보다 클때 */}
        {cateData.map((ctdata, i) => (
          <li key={i} className="navmenu"
            onClick={() => navigate(`category/${cateData[i].title}`)}>
            <MenuButton>{ctdata.title}</MenuButton>
          </li>
        ))}
      </ul>
    </NavMenuContainer>
  )
};

export default CategoryNavBar;

const NavMenuContainer = styled.div`
  .navmenu-wrap {
    overflow-y: scroll;
    position: absolute;
    left: 0;
    top: 135px;
    height: 100vh;
    z-index: 99;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
  }
  .fixed-navmenu-wrap {
    overflow-y: scroll;
    position: absolute;
    top: 56px;
    height: 100vh;
    z-index: 99;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
  }
  .navmenu {
    width: 226px;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
  }
`

const MenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding-left: 20px;
  text-align: left;
  line-height: 45px;
  transition: all .1s;

  &:hover {
    background-color: #f0f0f0; 
    color: #2A6834;
  }
`