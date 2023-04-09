import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

//component
import Card from "../../components/Card";

function MenuDetail({ items, setItems }) {

    /* url의 name을 가져옴 */
    const { name } = useParams();

    /* items의 menu 와 url의 name과 같은 아이템 필터 */
    const menufilter = items.filter((data) => data.menu === name);

    /* items 복사 */ 
    const itemsCopy = [...items];
    /* 최신순 */
    const newestPriceOrder = () => {
        itemsCopy.sort((a, b) => a.id - b.id);
        setItems(itemsCopy);
    };
    /* 낮은 가격순 */
    const rowPriceOrder = () => {
        itemsCopy.sort((a, b) => a.price - b.price);
        setItems(itemsCopy);
    };
    /* 높은 가격순 */
    const highPriceOrder = () => {
        itemsCopy.sort((a, b) => b.price - a.price);
        setItems(itemsCopy);
    };

    return (
        <section>
            <h2>{name}</h2>
            <ItemAlign>
                <li>총 {menufilter.length}건</li>
                <li className="align-btn">
                        <div onClick={newestPriceOrder}>
                            최신순
                        </div>
                        <Line/>
                        <div onClick={rowPriceOrder}>
                            낮은 가격순
                        </div>
                        <Line/>
                        <div onClick={highPriceOrder}>
                            높은 가격순
                        </div>
                </li>
            </ItemAlign>
            <Container>
                {items.map((data) => data.menu === name && 
                    <Link to={`/detail/${data.id}`}>
                        <Card data={data}/>
                    </Link>
                )}
            </Container>
        </section>
    )
}

export default MenuDetail;

const ItemAlign = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    letter-spacing: -0.06em;
    font-size: 14px;
    font-weight: 500;

    .align-btn {
        display: flex;
        cursor: pointer;
        align-items: center;
    }
`

const Line = styled.span`
    width: 1px;
    height: 12px;
    background-color: #ccc;
    margin: 0 7px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;
`
