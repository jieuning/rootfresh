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
      <MobDetailHeader/>
      <NavMenuContainer>
        <ul>
          {cateData.map((ctdata, i) => (
            <li onClick={() => navigate(`category/${cateData[i].title}`)}
              key={i} >
              <MenuButton>
                {ctdata.title}
                <img src={process.env.PUBLIC_URL + '/image/mob_right_arrow.png'}
                alt="화살표"/>
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
    padding-top: 43px;
  }
  li {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    border: 1px solid #f2f2f2;
  }
`
const MenuButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0 20px;
  text-align: left;
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 10px;
  }
`