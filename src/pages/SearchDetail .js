import { Link, useSearchParams } from "react-router-dom";


import "../pages/mainPage/style.css"

//component
import Card from "../components/Card";

function SearchDetail({ items }) {

    /* url에 keyword값 가져옴 */ 
    const [searchParams] = useSearchParams();
    const initKeyword = searchParams.get('keyword');

    /* keyword가 포함된 문자열을 가진 아이템 필터링 */
    const searchFilter = items.filter((data) =>
        data.title.includes(initKeyword));
    console.log(searchFilter)

    return (
        <section>
            <h2>'{initKeyword}'에 대한 검색 결과</h2>
            <div className="main-container">
                {searchFilter.map((data) => (
                    <Link to={`/detail/${data.id}`}>
                        <Card data={data} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default SearchDetail;
