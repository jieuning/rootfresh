import styled from "styled-components";
//image
import Logo from "../../../assets/logo.png";
//data
import { mHeader, menu } from "../../../dummy/contentOption";
//redux
import { useSelector } from "react-redux";

function MobHeader({ navigate }) {

  // redux 데이터
  const state = useSelector((state) => state);
  const cartList = state.cart;

  return (
    <>
      <HeaderTop>
        {/* 카테고리 버튼 */}
        <h2 className="hidden">카테고리 버튼</h2>
        <Image changeWidth={"20px"} style={{ marginLeft: "20px" }}
          src={process.env.PUBLIC_URL + mHeader[0]} alt="카테고리 버튼"
          onClick={() => navigate('/m_category_nav')}
        />

        {/* 로고 */}
        <LogoImage src={Logo} alt="로고" />

        {/* 유저 편의 메뉴 */}
        <div className="m-user-menu">

          {/* 주소지 입력 */}
          <Image src={process.env.PUBLIC_URL + mHeader[1]} alt="주소지 입력 아이콘" />

          {/* 장바구니 */}
          <>
            <Image src={process.env.PUBLIC_URL + mHeader[2]} alt="장바구니 아이콘"
              onClick={() => navigate('/cart')}
            />

            {/* 장바구니에 담기 상품 수량 아이콘 */}
            <span className={cartList.length === 0 ? "none" : "add-item-count"}
              onClick={() => { navigate('/Cart') }}
            >
              {cartList.length}
            </span>
          </>
        </div>
      </HeaderTop>

      {/* 메인 메뉴 */}
      <Menu>
        <h2 className="hidden">메인 메뉴</h2>
        {menu.map((data, i) =>
          <li key={i} onClick={() => navigate(`/menu/${menu[i].name}`)}>
            {data.name}
          </li>
        )}
      </Menu>
    </>
  )
};

export default MobHeader;


const HeaderTop = styled.div`
  position: fixed;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: flex-end;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 99;
  cursor: pointer;

  .m-user-menu {
    position: absolute;
    right: 0;
    display: flex;
    gap: 16px;
    margin-right: 20px;
  }
`
const Image = styled.img`
  width: ${props => props.changeWidth || '22px'};
  margin-bottom: 10px;
`
const LogoImage = styled.img`
  width: 54px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 10px;
`
const Menu = styled.ul`
  width: 100%;
  padding: 16px 0;
  position: fixed;
  top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  z-index: 99;
  
  li {
    cursor: pointer;
  }
`