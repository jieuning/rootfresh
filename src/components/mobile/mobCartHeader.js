import styled from "styled-components";
import "../../pages/cart/style.css"
//data
import { mHeader } from "../../dummy/contentOption";
//redux
import { useSelector } from "react-redux";


function MobMenuHeader({ navigate, setModal, checkedList, handleAllCheck }) {

  /* redux 데이터 */
  const state = useSelector((state) => state);
  const cartList = state.cart;

  return (
    <>
      <Header>
        <div  className={"menu-header"}>
          <div className="header-top">
            <Image
              src={process.env.PUBLIC_URL + mHeader[4]}
              alt="이전 페이지 버튼"
              onClick={() => navigate(-1)} />
            <span>장바구니</span>
          </div>
          {/* 전체 선택 및 삭제*/}
          <div className="cart-wrap">
            <div className="cart-check">
              <div style={{ display: "flex", alignItems: "center" }}>
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
              </div>
              <div className="select-remove" onClick={() =>
                checkedList === 0 ?
                  setModal(false) : setModal(true)}>
                선택삭제
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  )
};

export default MobMenuHeader;

const Header = styled.div`
  .menu-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    z-index: 99;
  }
  .header-top {
    display: flex;
    align-items: center; 
    margin: 30px 0 20px 0;
  }
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
  }
`
const Image = styled.img`
  width: 12px;
  padding: 5px;
  margin-left: 15px;
  cursor: pointer;
`