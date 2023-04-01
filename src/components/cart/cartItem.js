import styled from "styled-components"
import { useDispatch } from "react-redux";
import CommaFormat from "../../components/CommaFormat";
import { increase, decrease, removeItem, checkedChange } from "../../store/cartSlice";


function CartItem({item}) {

    const dispatch = useDispatch();
    
    return (
        <CartWrap>
            <div className="cart-item">
                <dd>
                    <input 
                    type="checkbox" 
                    checked={item.checked} 
                    onChange={() => dispatch(checkedChange(item.id))}
                    />
                </dd>
                <dd>
                    <img className="cart-image" src={process.env.PUBLIC_URL + item.image} />
                </dd>
                <dd className="cart-name">{item.name}</dd>
                <dd className="count-button">
                    <Button onClick={() => 
                    item.count === 1 ? alert('1개 이상부터 구매 가능합니다') 
                    : dispatch(decrease(item.id))}>-</Button>
                    <p>{item.count}</p>
                    <Button onClick={() => {dispatch(increase(item.id))}}>+</Button>
                </dd>
                <dd className="item-price">
                    {CommaFormat(item.count * item.price)}<span>원</span>
                </dd>
                <dd className="item-price">
                    <Button onClick={() => {
                        dispatch(removeItem(item.id))}}>
                        <img className="cancle-image" 
                        src={process.env.PUBLIC_URL + '/image/cancle_icon.png'} />
                    </Button>
                </dd>
            </div>
        </CartWrap>
    )
};

export default CartItem;


const CartWrap = styled.dl`
    .cart-item {
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
    }

    .cart-image {
        width: 86px;
        object-fit: contain;
    }

    .cart-name {
        width: 200px;
        margin-right: 150px;
        line-height: 1.2;
        text-align: left;
    }

    .count-button {
        width: 92px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .item-price {
        font-weight: 600;
    }

    .cancle-image {
        width: 16px;
        height: 16px;
        object-fit: contain;
        display: block;
        margin-right: 10px;
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
