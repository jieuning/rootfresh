import styled from "styled-components";

function cartModal() {
  return (
    // 디테일 페이지에서 장바구니에 상품 담았을때 등장하는 모달
    <CartModal>
      <p>장바구니에 상품을 담았습니다</p>
    </CartModal>
  )
};

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
  z-index: 99;

  @media(max-width: 1229px) {
    font-size: 14px;
    top: -400px;
  }
`



