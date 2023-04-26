import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
//component
import CommaFormat from "../../components/CommaFormat";
import DeleteModal from "../../components/cart/DeleteModal";
import CartItem from "../../components/cart/cartItem"
//firebase
import { firebaseAuth } from "../../firebase";
//redux
import { useDispatch, useSelector } from "react-redux";
import { allCheckedTrue, allCheckedFalse } from "../../store/cartSlice";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";
//mobile
import MobCartHeader from "../../components/mobile/mobCartHeader";
import CartBottomNav from "../../components/mobile/bottomNav/cartBottomNav";


function Cart() {

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  /* firebase profile정보 가져옴 */
  const auth = firebaseAuth;
  const user = auth.currentUser;

  /* redux데이터 */
  const state = useSelector((state) => state);
  const cartList = state.cart;

  const dispatch = useDispatch();

  /* 체크된 아이템 필터 */
  const checkedList = cartList.filter((item) => item.checked === true);

  /* 전체 선택, 해제 */
  const handleAllCheck = (checked) => {
    if (checked) {
      cartList.forEach((item) =>
        dispatch(allCheckedTrue(item.id)));
    } else {
      cartList.forEach((item) =>
        dispatch(allCheckedFalse(item.id)));
    }
  };

  /* 체크된 아이템 가격 총 합 */
  const checkedItemPrice = cartList.map((data) =>
    data.checked === true ? data.price * data.count : 0);
  const checkedItemSum = checkedItemPrice.reduce((acc, cur) => acc + cur, 0);

  /* 상품 가격 총 합이 4만원 초과시 무료배송 */
  const deliveryPrice = checkedItemSum > 40000 ? 0 : 3000;

  /* 결제할 상품이 존재하지 않을 시 */
  const onclickHandle = () => {
    if (checkedItemSum === 0) {
      alert('결제할 상품이 없습니다.')
    }
  };

  return (
    <>
      <Mobile>
        <MobCartHeader
          navigate={navigate}
          setModal={setModal}
          checkedList={checkedList}
          handleAllCheck={handleAllCheck} />
      </Mobile>
      <Pc>
        <h2>장바구니</h2>
      </Pc>
      {/* 전체 삭제 모달 */}
      {modal === true ?
        <DeleteModal
          modal={modal}
          setModal={setModal}
          checkedList={checkedList} />
        : null}
      <div className="cart-container">
        <dl className="cart-wrap">
          <Pc>
            {/* 전체 선택 및 삭제*/}
            <div className="cart-check">
              <dt>
                <input
                  id="check"
                  type="checkbox"
                  checked={checkedList.length === cartList.length}
                  onChange={(e) => {
                    handleAllCheck(e.target.checked)
                  }}
                />
                <label htmlFor="check">
                  전체선택
                  &#40;{checkedList.length}/{cartList.length}&#41;
                </label>
                <span></span>
                <button className="select-remove" onClick={() =>
                  checkedList === 0 ?
                    setModal(false) : setModal(true)}>
                  선택삭제
                </button>
              </dt>
            </div>
          </Pc>
          {/* 장바구니 아이템 유무 */}
          {cartList.length > 0 ? (
            cartList.map((item, i) => 
            <CartItem key={item.id} item={item} />))
            : (<div className="none-item">장바구니에 담긴 상품이 없습니다</div>)}
        </dl>
        {/* 결제 합계 금액 박스 */}
        <div className="cart-amount">
          <div className="amount-price-box-wrap">
            <div className="amount-price-box">
              <div>
                상품금액
                <span>
                  <p>
                    {CommaFormat(checkedItemSum)}
                    <span>원</span>
                  </p>
                </span>
              </div>
              <div>
                배송비
                <span className="delivery-price">
                  <p>
                    {checkedItemSum === 0 ?
                      0 : CommaFormat(deliveryPrice)}
                    <span>원</span>
                  </p>
                  <p>40,000원 이상 구매시 무료배송</p>
                </span>
              </div>
              <div className="payment-price">
                결제예정금액
                <span>
                  <p style={{ fontWeight: '600' }}>
                    {checkedItemSum === 0 ?
                      0 : CommaFormat(checkedItemSum + deliveryPrice)}
                    <span>원</span>
                  </p>
                </span>
              </div>
            </div>
            <Pc>
              {/* 구매하기 버튼 */}
              {user !== null ?
                <button className="purchase-btn"
                  onClick={onclickHandle}
                >결제하기</button>
                : <button className="none-purchase-btn">
                  로그인시 이용 가능 합니다</button>
              }
            </Pc>
            <Mobile>
              <CartBottomNav />
            </Mobile>
          </div>
        </div>
      </div>
    </>
  )
};

export default Cart;
