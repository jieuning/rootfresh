import { Link, useSearchParams } from "react-router-dom";
import "../mainPage/style.css"

//component
import Card from "../../components/Card";

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
            {/* searchFilter에 데이터가 없거나 initKeyword가 공백이 아닐 때 */}
            {searchFilter.length !== 0 && initKeyword !== "" ?
                <div className="main-container">
                    {searchFilter.map((data) => (
                        <Link to={`/detail/${data.id}`}>
                            <Card data={data} />
                        </Link>
                    ))}
                </div>
                :
                <div style={{ margin: "180px 0" }}>
                    <img src={process.env.PUBLIC_URL + '/image/search_icon_g.png'}
                        alt="검색 아이콘" />
                    <p style={{ color: "#ccc", marginTop: "20px" }}>검색된 상품이 없습니다.</p>
                </div>
            }
        </section>
    )
}

export default SearchDetail;
