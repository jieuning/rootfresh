import { useState } from "react";
import styled from "styled-components";
import categorydata from "../db/categorydata.json"


function MenuNavBar({scrollHeader}) {

    const cateData = useState(categorydata);
    console.log(cateData)

    return (
        <NavMenuContainer>
            <ul className={scrollHeader > 10 ? 
                "fixed-navmenu-wrap" : "navmenu-wrap"}>
                {cateData[0].map((ctdata) => (
                    <li className="navmanu">
                        <MenuButton>{ctdata.title}</MenuButton>
                    </li>
                ))}
            </ul>
        </NavMenuContainer>
    )
};

export default MenuNavBar;

const NavMenuContainer = styled.div`
    .navmenu-wrap {
        overflow-y: scroll;
        position: absolute;
        left: 0;
        top: 142px;
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

    .navmanu {
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