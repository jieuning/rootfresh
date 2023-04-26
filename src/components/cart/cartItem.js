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
        <dd>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => dispatch(checkedChange(item.id))}
          />
        </dd>
        {/* 상품 이미지 */}
        <dd>
          <img className="add-item-image" src={process.env.PUBLIC_URL + item.image}
            alt="상품 이미지" />
        </dd>
        {/* 상품명 */}
        <dd className="item-name">{item.name}</dd>
        {/* 상품 수량 카운터 */}
        <dd className="count-button">
          <Button onClick={() =>
            item.count === 1 ? alert('1개 이상부터 구매 가능합니다')
              : dispatch(decrease(item.id))}>-</Button>
          <p>{item.count}</p>
          <Button onClick={() => { dispatch(increase(item.id)) }}>+</Button>
        </dd>
        {/* 상품 가격 */}
        <dd className="item-price">
          {CommaFormat(item.count * item.price)}<span>원</span>
        </dd>
        {/* 상품 개별 삭제 */}
        <dd className="item-cancle">
          <Button onClick={() => {
            dispatch(removeItem(item.id))
          }}>
            <img src={process.env.PUBLIC_URL + '/image/item_cancle.png'}
              alt="장바구니 상품 삭제 버튼" />
          </Button>
        </dd>
      </Pc>
      <Mobile>
        <MCartItemWrap>
          <div className="check-box">
            {/* 체크박스 */}
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => dispatch(checkedChange(item.id))}
            />
          </div>
          <div>
              <div className="item-name">
                {/* 상품명 */}
                {item.name}
              </div>
            <div className="m-item-bottom">
              {/* 상품 이미지 */}
              <img className="add-item-image" src={process.env.PUBLIC_URL + item.image}
                alt="상품 이미지" />
              <div style={{marginLeft: "10px"}}>
                {/* 상품 가격 */}
                <div className="item-price">
                  {CommaFormat(item.count * item.price)}<span>원</span>
                </div>
                {/* 상품 수량 카운터 */}
                <div className="count-button">
                  <Button onClick={() =>
                    item.count === 1 ? alert('1개 이상부터 구매 가능합니다')
                      : dispatch(decrease(item.id))}>-</Button>
                  <p>{item.count}</p>
                  <Button onClick={() => { dispatch(increase(item.id)) }}>+</Button>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 개별 삭제 */}
          <div className="item-cancle">
            <Button onClick={() => {
              dispatch(removeItem(item.id))
            }}>
              <img src={process.env.PUBLIC_URL + '/image/item_cancle.png'}
                alt="장바구니 상품 삭제 버튼" />
            </Button>
          </div>
        </MCartItemWrap>
      </Mobile>
    </CartItemWrap>
  )
};

export default CartItem;

const CartItemWrap = styled.dl`
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
    padding: 20px 0 20px 20px;
    .item-name {
      width: 100%;
      font-size: 12px;
      margin: 0 0 10px 10px;
    }
    .add-item-image {
      width: 58px;
      margin-left: 0;
    }
    .count-button {
      font-size: 12px;
    }
    .item-price {
      width: 100%;
      font-size: 12px;
      text-align: left;
      margin-bottom: 20px;
    }
    .item-cancle {
      position: absolute;
      right: 0;
      padding-right: 10px;
    }
    .item-cancle img {
      width: 12px;
    }
  }
`
const MCartItemWrap = styled.div`
  display: flex;
  align-items: center;
  .check-box {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .m-item-bottom {
    display: flex;
    margin-left: 10px;
  }
  .count-button {
    width: 80px;
  }
`
const Button = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  background: #fff;
  border-radius: 3px;
  text-align: center;
`
