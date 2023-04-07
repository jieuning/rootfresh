import { useNavigate } from "react-router-dom";

//data
import { menu } from "../../dummy/contentOption";

function Menu() {

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
