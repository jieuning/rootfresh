import { Link, useParams } from "react-router-dom";

import "../pages/mainPage/style.css"

import Card from "../components/Card";

function MenuDetail({items}) {

    const {name} = useParams();

    /* url의 name과 같은 아이템 필터 */ 
    const filterMenu = items.filter((i) => i.menu === name);

    return(
        <section>
            <h2>{name}</h2>
            <div className="main-container">
                {filterMenu.map((data) => (
                    <Link to={`/detail/${data.id}`}>
                        <Card data={data}/>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default MenuDetail;
