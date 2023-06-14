import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//data
import categorydata from "../../dummy/categorydata.json"
//responsive
import { Mobile } from "./responsive";
//mobile
import MobDetailHeader from "./mobDetailHeader";

function MobCategoryNav() {

  const [cateData] = useState(categorydata);

  const navigate = useNavigate();

  return (
    <Mobile>
      {/* 카테고리 헤더 */}
      <MobDetailHeader />

      {/* 카테고리 메뉴 */}
      <NavMenuContainer>
        <ul>
          {cateData.map((ctdata, i) => (
            <li onClick={() => navigate(`category/${cateData[i].title}`)}
              key={i} >
              <MenuButton>
                {/* 메뉴 타이틀 */}
                {ctdata.title}

                {/* 바로가기 아이콘 */}
                <img src={process.env.PUBLIC_URL + '/image/mob_right_arrow.png'}
                  alt={cateData[i].title + " " + "바로가기 아이콘"}
                />
              </MenuButton>
            </li>
          ))}
        </ul>
      </NavMenuContainer>
    </Mobile>
  )
};

export default MobCategoryNav;

const NavMenuContainer = styled.div`
  ul {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  li:first-child {
    padding-top: 60px;
  }
  li {
    width: 100%;
    padding: 12px 0;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
`
const MenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  img {
    width: 14px;
  }
`