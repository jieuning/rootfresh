import { menu } from "../../dummy/contentOption";


function Menu({ navigate }) {

  return (
    // 메인 메뉴
    <ul className="main-manu-wrap">
      {menu.map((data, i) => (
        <li key={i} onClick={() => { navigate(`/menu/${menu[i].name}`) }}
          style={{ cursor: "pointer" }}>
          <span className="menu">{menu[i].name}</span>
        </li>))}
    </ul>
  )
};

export default Menu;
