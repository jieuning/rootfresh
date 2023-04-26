import { menu } from "../../dummy/contentOption";


function Menu({navigate}) {

  return (
    <>
      <ul className="main-manu-wrap">
        {menu.map((data, i) => (
          <li key={i} onClick={() => { navigate(`/menu/${menu[i].name}`) }}
            style={{ cursor: "pointer" }}>
            <div className="menu">{menu[i].name}</div>
          </li>))}
      </ul>
    </>
  )
};

export default Menu;
