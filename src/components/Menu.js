import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { menu } from "../dummy/contentOption";

function Menu({items}) {

    // const [menu] = useState(mainMenu);

    const navigate = useNavigate();
 
    return (
        <>
            <ul className="main-manu-wrap">
                {menu.map((data, i) => (
                    <li onClick={()=>{navigate(`/menu/${menu[i].name}`)}} 
                        style={{cursor: "pointer"}}>
                        <div className="menu" key={menu.id}>{menu[i].name}</div>
                    </li>))}
            </ul>
        </>
    )
}

export default Menu;
