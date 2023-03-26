import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, increase } from "../../store/cartSlice";
import CommaFormat from "../../components/CommaFormat";

import CartModal from "../../components/cart/CartModal";

//css
import "./style.css"


function DetailPage({ items }) {

    const { id } = useParams();
    const findItem = items.find((x) => x.id == id)

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const [modal, setModal] = useState(false);

    const cartData = state.cart;
    const indexFind = cartData.findIndex((i) => { return i.id === findItem.id });
    const findItemId = findItem.id;

    const sameItemFind = () => {
        indexFind < 0 ?
        dispatch(addItem({ 
            id: findItem.id,
            name: findItem.title,
            price: findItem.price,
            image: findItem.image,
            count: count,
            checked: true,
        })) 
        : dispatch(increase(findItemId))
    };

    const onIncrease = () => {
        setCount(count + 1)
    };

    const onDecrease = () => {
        count === 1 ? alert('1개 이상부터 구매 가능합니다') 
        : setCount(count - 1)
    };

    useEffect(() => {
        setTimeout(() => {setModal(false)}, 3000)
    });


    return (
        <>
            <div className="about-container">
                <div className="detail-image">
                    <img src={process.env.PUBLIC_URL + findItem.image} />
                </div>
                <div className="item-info">
                    <div className="title-wrap">
                        <h4 className="detail-title">{findItem.title}</h4>
                        <p className="discount-rate">{findItem.discount_rate}</p>
                        <p>{CommaFormat(findItem.price)}<span className="won">원</span></p>
                        <p className="detail-dimmed-price">{findItem.dimmed_price}</p>
                    </div>
                    <dl>
                        <div>
                            <dt>판매단위</dt>
                            <dd>{findItem.sales_unit}</dd>
                        </div>
                        <div>
                            <dt>중량/용량</dt>
                            <dd>{findItem.net}</dd>
                        </div>
                        <div>
                            <dt>원산지</dt>
                            <dd>상품설명/상세정보 참조</dd>
                        </div>
                        <div>
                            <dt>유통기한</dt>
                            <dd>출고일 기준, 1년 이상 남은 상품을 배송해 드립니다</dd>
                        </div>
                        <div>
                            <dt>구매수량</dt>
                            <dd>
                                <div className="count-button">
                                    <button onClick={onDecrease}>-</button>
                                    <p>{count}</p>
                                    <button onClick={onIncrease}>+</button>
                                </div>
                            </dd>
                        </div>
                    </dl>
                    <div className="amount-wrap">
                        <div className="amount-price">
                            <span className="amount-title">총 상품 금액: </span>
                            {CommaFormat(count * findItem.price)}<span className="won">원</span>
                        </div>
                        <button className="cart-btn"
                            onClick={() => {
                                sameItemFind()
                                setModal(true)
                            }}>장바구니 담기</button>
                        {modal == true ? <CartModal /> : null}
                    </div>
                </div>
            </div>
            <div className="empty"></div>
        </>
    )
}

export default DetailPage;