import { useState } from "react";
import "./style.css"

//component
import CommaFormat from "../../components/CommaFormat";
import DeleteModal from "../../components/cart/DeleteModal";
import CartItem from "../../components/cart/cartItem"

import { useDispatch, useSelector } from "react-redux";
import { allCheckedTrue, allCheckedFalse } from "../../store/cartSlice";

function Cart() {

    const [modal, setModal] = useState(false);

    const state = useSelector((state) => state);
    const cartList = state.cart;

    const dispatch = useDispatch();

    const checkedList = cartList.filter((item) => item.checked === true);

    const handleAllCheck = (checked) => {
        if(checked) {
            cartList.forEach((item) => dispatch(allCheckedTrue(item.id)));
        } else{
            cartList.forEach((item) => dispatch(allCheckedFalse(item.id)));
        }
    };

    const checkedItemPrice = cartList.map((data) => 
    data.checked == true ? data.price * data.count : 0);

    const checkedItemSum = checkedItemPrice.reduce((acc, cur) => acc + cur, 0);

    const deliveryPrice = checkedItemSum > 40000 ? 0 : 3000;


    return (
        <>
            <h2>장바구니</h2>
            {modal === true ?
                <DeleteModal modal={modal} setModal={setModal} checkedList={checkedList} /> : null}
            <div className="cart-container">
                <dl className="cart-wrap">
                    <div className="cart-title">
                        <dt>
                            <input
                                id="check"
                                type="checkbox"
                                checked={checkedList.length === cartList.length}
                                onChange={(e) => {
                                    handleAllCheck(e.target.checked)
                                }}
                            />
                            <label htmlFor="check">전체선택</label>
                            <span></span>
                            <button className="select-remove" onClick={() =>
                                checkedList == 0 ? setModal(false) : setModal(true)
                            }>선택삭제</button>
                        </dt>
                    </div>
                    {cartList.length > 0 ? (
                        cartList.map((item, i) => <CartItem item={item} />)
                    ) : (
                        <div className="none-item">장바구니에 담긴 상품이 없습니다</div>
                    )}
                </dl>
                <div className="cart-amount">
                    <div className="amount-price-box">
                        <div>
                            <span>상품금액</span>
                            <span>
                                <p>{CommaFormat(checkedItemSum)}<span>원</span></p>
                            </span>
                        </div>
                        <div>
                            <span>배송비</span>
                            <span className="delivery-price">
                                <p>
                                    {checkedItemSum == 0 ? 
                                    0 : CommaFormat(deliveryPrice)}<span>원</span></p>
                                <p>40,000원 이상 구매시 무료배송</p>
                            </span>
                        </div>
                        <div className="payment-price">
                            <span>결제예정금액</span>
                            <span>
                                <p style={{fontWeight: '600'}}>
                                    {checkedItemSum == 0 ?
                                    0 : CommaFormat(checkedItemSum + deliveryPrice)}<span>원</span>
                                </p>
                            </span>
                        </div>
                    </div>
                    <button className="purchase-btn">상품 구매하기</button>
                </div>
            </div>
        </>
    )
};

export default Cart;
