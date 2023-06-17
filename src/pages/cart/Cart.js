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
import MobCartHeader from "../../components/mobile/header/mobCartHeader";
import CartBottomNav from "../../components/mobile/Nav/cartBottomNav";


function Cart() {

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  // firebase profile정보
  const auth = firebaseAuth;
  const user = auth.currentUser;

  // redux데이터
  const state = useSelector((state) => state);
  const cartList = state.cart;
  console.log(cartList)

  const dispatch = useDispatch();

  // 체크된 아이템 필터
  const checkedList = cartList.filter((item) => item.checked === true);

  // 전체 선택, 해제
  const handleAllCheck = (checked) => {
    if (checked) {
      cartList.forEach((item) =>
        dispatch(allCheckedTrue(item.id)));
    } else {
      cartList.forEach((item) =>
        dispatch(allCheckedFalse(item.id)));
    }
  };

  // 체크된 아이템 가격 총 합
  const checkedItemPrice = cartList.map((data) =>
    data.checked === true ? data.price * data.count : 0);
  const checkedItemSum = checkedItemPrice.reduce((acc, cur) => acc + cur, 0);

  // 상품 가격 총 합이 4만원 초과시 무료배송
  const deliveryPrice = checkedItemSum > 40000 ? 0 : 3000;

  // 결제할 상품이 존재하지 않을 시
  const onclickHandle = () => {
    if (checkedItemSum === 0) {
      alert('결제할 상품이 없습니다.')
    }
  };

  return (
    <>
      <Mobile>
        {/* 모바일 장바구니 헤더 컴포넌트 */}
        <MobCartHeader
          navigate={navigate}
          setModal={setModal}
          checkedList={checkedList}
          handleAllCheck={handleAllCheck} />
      </Mobile>

      <Pc>
        {/* 타이틀 */}
        <h4 className="main-title">장바구니</h4>
      </Pc>

      {/* 전체 삭제 모달 컴포넌트 */}
      {modal === true ?
        <DeleteModal
          modal={modal}
          setModal={setModal}
          checkedList={checkedList}
        /> : null}

      <div className="cart-container">
        <div className="cart-wrap">
          <Pc>

            {/* 전체 선택 및 선택 삭제*/}
            <div className="cart-check">
              {/* 체크 박스 */}
              <h2 className="hidden">장바구니 상품 체크박스</h2>
              <input
                id="check"
                type="checkbox"
                checked={checkedList.length === cartList.length}
                onChange={(e) => { handleAllCheck(e.target.checked) }}
              />

              {/* 전체 선택 레이블 */}
              <h2 className="hidden">전체 선택 버튼</h2>
              <label htmlFor="check">
                전체선택

                {/* 선택된 상품 개수 */}
                &#40;{checkedList.length}/{cartList.length}&#41;
              </label>

              <span></span>

              {/* 선택 삭제 버튼 */}
              <button className="select-remove-btn" onClick={() =>
                checkedList === 0 ? setModal(false) : setModal(true)}>
                <h2 className="hidden">선택 삭제 버튼</h2>
                선택삭제
              </button>
            </div>
          </Pc>

          {
            cartList.length > 0 ?
              // 장바구니에 담긴 상품이 있을 시
              (cartList.map((item, i) => <CartItem key={item.id} item={item} />))
              : 
              // 장바구니에 담긴 상품이 없을 시
              (<div className="none-item">장바구니에 담긴 상품이 없습니다</div>)
          }
        </div>

        {/* 선택된 상품 총 결제 금액 박스 */}
        <div className="cart-amount">
          <div className="amount-price-box-wrap">
            <ul className="amount-price-box">

              <h2 className="hidden">선택된 상품 총 결제 금액</h2>

              {/* 상품 금액 */}
              <li>
                상품금액
                <span>
                  <p>
                    {CommaFormat(checkedItemSum)}
                    <span>원</span>
                  </p>
                </span>
              </li>

              {/* 배송비 */}
              <li>
                배송비
                <span className="delivery-price">
                  <p>
                    {checkedItemSum === 0 ? 0 : CommaFormat(deliveryPrice)}
                    <span>원</span>
                  </p>
                  <p>40,000원 이상 구매시 무료배송</p>
                </span>
              </li>

              {/* 결제 예정 금액 */}
              <li className="payment-price">
                결제예정금액
                <span>
                  <p style={{ fontWeight: '600' }}>
                    {checkedItemSum === 0 ? 0 : CommaFormat(checkedItemSum + deliveryPrice)}
                    <span>원</span>
                  </p>
                </span>
              </li>
            </ul>

            <Pc>
              {/* 구매하기 버튼 */}
              {
                user !== null ?
                  // 유저 정보가 있을 시
                  <button className="purchase-btn" onClick={onclickHandle} >
                    <h2 className="hidden">결제하기 버튼</h2>
                    결제하기
                  </button>
                  :
                  // 유저 정보가 없을 시
                  <button className="none-purchase-btn">
                    <h2 className="hidden">결제는 로그인 후 이용 가능 합니다</h2>
                    로그인시 이용 가능 합니다
                  </button>
              }
            </Pc>

            {/* 모바일 하단 네비게이션 */}
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
