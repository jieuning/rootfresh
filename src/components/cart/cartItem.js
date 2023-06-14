import styled from "styled-components"
//component
import CommaFormat from "../CommaFormat";
//redux
import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
  checkedChange
} from "../../store/cartSlice";
//responsive
import { Pc, Mobile } from "../mobile/responsive";

function CartItem({ item }) {

  const dispatch = useDispatch();

  return (
    <CartItemWrap>
      <Pc>
        {/* 체크박스 */}
        <th>
          <h2 className="hidden">체크 박스</h2>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => dispatch(checkedChange(item.id))}
          />
        </th>

        {/* 상품 이미지 */}
        <th>
          <img className="add-item-image" src={process.env.PUBLIC_URL + item.image} alt={item.alt} />
        </th>

        {/* 상품명 */}
        <th className="item-name">{item.name}</th>

        {/* 상품 수량 카운터 */}
        <th className="count-button">
          <h2 className="hidden">상품 수량 변경 버튼</h2>
          {/* 빼기 버튼 */}
          <Button onClick={() =>
            item.count === 1 ? alert('1개 이상부터 구매 가능합니다') : dispatch(decrease(item.id))}>
            <h2 className="hidden">수량 빼기 버튼</h2>
            -
          </Button>
          {/* 상품 수량 */}
          <p>{item.count}</p>
          {/* 더하기 버튼 */}
          <Button onClick={() => { dispatch(increase(item.id)) }}>
            <h2 className="hidden">수량 더하기 버튼</h2>
            +
          </Button>
        </th>

        {/* 상품 가격 */}
        <th className="item-price">
          {CommaFormat(item.count * item.price)}<span>원</span>
        </th>

        {/* 상품 개별 삭제 */}
        <th className="item-cancle">
          <h2 className="hidden">상품 개별 삭제 버튼</h2>
          <Button onClick={() => { dispatch(removeItem(item.id)) }}>
            <img src={process.env.PUBLIC_URL + '/image/item_cancle.png'} alt="상품 개별 삭제 버튼" />
          </Button>
        </th>
      </Pc>

      <Mobile>
        <MCartItemWrap>
          {/* 체크박스 */}
          <div className="check-box">
            <h2 className="hidden">체크 박스</h2>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => dispatch(checkedChange(item.id))}
            />
          </div>

          {/* 상품 정보 */}
          <div className="item-info-wrap">
            {/* 상품명 */}
            <div className="item-name">
              {item.name}
            </div>

            <div className="m-item-info">
              {/* 상품 이미지 */}
              <img className="add-item-image" src={process.env.PUBLIC_URL + item.image} alt={item.alt} />

              <div style={{ marginLeft: "10px" }}>
                {/* 상품 가격 */}
                <div className="item-price">
                  {CommaFormat(item.count * item.price)}
                  <span>원</span>
                </div>

                {/* 상품 수량 카운터 */}
                <div className="count-button">
                  <h2 className="hidden">상품 수량 변경 버튼</h2>
                  {/* 빼기 버튼 */}
                  <Button onClick={() =>
                    item.count === 1 ? alert('1개 이상부터 구매 가능합니다') : dispatch(decrease(item.id))}>
                    <h2 className="hidden">수량 빼기 버튼</h2>
                    -
                  </Button>
                  {/* 수량 */}
                  <p>{item.count}</p>
                  {/* 더하기 버튼 */}
                  <Button onClick={() => { dispatch(increase(item.id)) }}>
                    <h2 className="hidden">수량 더하기 버튼</h2>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 상품 개별 삭제 */}
          <div className="item-cancle">
            <h2 className="hidden">상품 개별 삭제 버튼</h2>
            <Button onClick={() => { dispatch(removeItem(item.id)) }}>
              <img src={process.env.PUBLIC_URL + '/image/item_cancle.png'} alt="상품 개별 삭제 버튼" />
            </Button>
          </div>
        </MCartItemWrap>
      </Mobile>
    </CartItemWrap>
  )
};

export default CartItem;

// pc
const CartItemWrap = styled.tr`
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  
  .add-item-image {
    width: 86px;
    margin-left: 10px;
  }
  .item-name {
    width: 480px;
    margin: 0 20px; 
    line-height: 1.2;
    text-align: left;
    font-weight: 400;
  }
  .count-button {
    width: 125px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .item-price {
    font-size: 14px;
    font-weight: 600;
    width: 136px;
    text-align: right;
  }
  .item-cancle {
    margin-left: 20px;
  }
  .item-cancle img {
    width: 16px;
    display: block;
  }

  @media(max-width: 1229px) {
    display: block;
    padding: 20px;
    box-sizing: border-box;

    .item-name {
      width: 100%;
      font-size: 14px;
      margin: 0 0 10px 10px;
    }
    .add-item-image {
      width: 68px;
      margin-left: 0;
    }
    .count-button {
      font-size: 14px;
    }
    .item-price {
      width: 100%;
      font-size: 14px;
      text-align: left;
      margin-bottom: 20px;
    }
    .item-cancle {
      position: absolute;
      right: 0;
      padding-right: 20px;
    }
    .item-cancle img {
      width: 16px;
    }
  }
`
// mobile
const MCartItemWrap = styled.div`
  display: flex;
  align-items: center;

  .check-box {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .m-item-info {
    display: flex;
    margin-left: 10px;
  }
  .count-button {
    width: 80px;
  }
`
// 버튼 공통
const Button = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  background: #fff;
  border-radius: 3px;
  text-align: center;

  @media(max-width: 1229px) {
    width: 32px;
    height: 32px;
  }  
`
