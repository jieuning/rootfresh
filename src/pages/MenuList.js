import { Link, useParams } from "react-router-dom";

import "../pages/mainPage/style.css"

import Card from "../components/Card";

function MenuList({items}) {

    const {name} = useParams();

    const findMenu = items.filter((i) => i.menu === name);

    return(
        <section>
            <h2>{name}</h2>

            
            <div className="main-container">
                {findMenu.map((data) => (
                    <Link to={`/detail/${data.id}`}>
                        <Card data={data}/>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default MenuList;
