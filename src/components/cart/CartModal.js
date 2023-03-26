import styled from "styled-components";

function cartModal() {
    return (
        <>
            <CartModal>
               <p>장바구니에 상품을 담았습니다</p>
            </CartModal>
        </>

    )
}

export default cartModal;

const CartModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 240px;
    height: 56px;
    color: #fff;
    background-color: #2A6834;
    border-radius: 6px;
    line-height: 56px;
`



