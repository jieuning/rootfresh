import "./style.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//redux
import { addItem, increase } from "../../store/cartSlice";
//component
import CommaFormat from "../../components/CommaFormat";
import CartModal from "../../components/cart/CartModal";
//mobile
import MobDetailHeader from "../../components/mobile/header/mobDetailHeader";
import DetailBottomNav from "../../components/mobile/Nav/detailBottomNav";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";

function DetailPage({ items }) {

  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);

  // url id값 가져오기
  const { id } = useParams();

  // items데이터의 id와 url파라미터가 같은 데이터만 찾기
  const findItem = items.find((data) => data.id == id);

  // redux데이터 
  const state = useSelector((state) => state);
  const cartData = state.cart;
  const dispatch = useDispatch();

  // redux데이터와 findIndex id가 같은 index값 찾기
  const indexFind = cartData.findIndex((i) => { return i.id === findItem.id });
  const findItemId = findItem.id;

  // redux에 데이터 담기
  const sameItemFind = () => {
    indexFind < 0 ?
      // 장바구니에 상품이 존재하지 않으면 담기
      dispatch(addItem({
        id: findItem.id,
        name: findItem.title,
        alt: findItem.alt,
        price: findItem.price,
        image: findItem.image,
        count: count,
        checked: true,
      }))
      : 
      // 이미 담긴 중복된 상품은 수량만 증가
      dispatch(increase(findItemId))
  };

  // 수량 증가
  const onIncrease = () => {
    setCount(count + 1)
  };

  // 수량 감소
  const onDecrease = () => {
    count === 1 ? alert('1개 이상부터 구매 가능합니다')
      : setCount(count - 1)
  };

  // 3초 뒤에 모달 사라지게
  useEffect(() => {
    setTimeout(() => { setModal(false) }, 3000)
  });

  return (
    <>
      <Mobile>
        {/* 모바일 상단 고정 헤더 */}
        <MobDetailHeader findItem={findItem} />
      </Mobile>

      <div className="detail-container">
        {/* 상품 이미지 */}
        <div className="detail-image">
          <img src={process.env.PUBLIC_URL + findItem.image} alt={findItem.alt} />
        </div>

        {/* 상품 정보 */}
        <div className="item-info-wrap">
          <div className="title-wrap">
            {/* 상품 타이틀 */}
            <h2 className="detail-title">{findItem.title}</h2>
            {/* 할인률 */}
            <p className="discount-rate">{findItem.discount_rate}</p>
            {/* 가격 */}
            <p>{CommaFormat(findItem.price)}<span className="won">원</span></p>
            {/* 할인 전 가격 */}
            <p className="detail-dimmed-price">{findItem.dimmed_price}</p>
          </div>

          {/* 상품 세부 정보 */}
          <dl className="item-info">
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
              <dd>출고일 기준, 1년 이상 남은 상품을 배송해 드립니다.</dd>
            </div>

            <Pc>
              {/* 구매 수량 카운터 */}
              <div>
                <dt>구매수량</dt>
                <dd>
                  <div className="counter">
                    {/* 수량 빼기 */}
                    <button onClick={onDecrease}>
                      <h2 className="hidden">수량 빼기 버튼</h2>
                      -
                    </button>
                    {/* 수량 */}
                    <p>{count}</p>

                    {/* 수량 더하기 */}
                    <button onClick={onIncrease}>
                      <h2 className="hidden">수량 더하기 버튼</h2>
                      +
                    </button>
                  </div>
                </dd>
              </div>
            </Pc>
          </dl>
          
          <Pc>
            {/* 총 상품 금액 */}
            <div className="amount-wrap">
              <div className="amount-price">
                <span className="amount-title">총 상품 금액: </span>
                {CommaFormat(count * findItem.price)}
                <span className="won">원</span>
              </div>

              {/* 장바구니 담기 버튼 */}
              <button className="cart-btn"
                onClick={() => {
                  sameItemFind()
                  setModal(true)
                }}>
                <h2 className="hidden">장바구니 담기 버튼</h2>
                장바구니 담기
              </button>
              
              {/* 장바구니에 상품이 담겼을때 모달 등장 */}
              {modal === true ? <CartModal /> : null}
            </div>
          </Pc>
        </div>
      </div>

      <Mobile>
        {/* 모바일 하단 고정 네비게이션 컴포넌트(구매하기 버튼) */}
        <DetailBottomNav
          sameItemFind={sameItemFind}
          items={items}
          modal={modal}
          setModal={setModal}
        />
      </Mobile>
    </>
  )
};

export default DetailPage;