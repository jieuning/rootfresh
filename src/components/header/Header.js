import "./style.css"
import Logo from '../../assets/logo.png'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//component
import CategoryNavBar from "./categoryNavBar";
import Menu from "./Menu";
import UserNav from "./userNav";
import SearchBar from "./searchBar";
//redux
import { useSelector } from "react-redux";
//data
import { userMenuAlt } from "../../dummy/contentOption";


function Header({ items, isLoggedIn }) {

  const [fixedHeader, setFixedHeader] = useState(0); //헤더 픽스
  const [mouseOver, setMouseOver] = useState(false); // 카테고리 메뉴

  const navigate = useNavigate();

  // redux 데이터
  const state = useSelector((state) => state);
  const cartList = state.cart;

  // 스크롤시 헤더 고정
  const updateScroll = () => {
    setFixedHeader(window.scrollY ||
      document.documentElement.scrollTop)
  };

  // clean-up
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });

  return (
    <header className={fixedHeader > 10 ? "main-header fixed-header" : "main-header"}>

      {/* 탑 배너 */}
      <div className={fixedHeader > 10 ? "fixed-top-banner" : "top-banner"}>
        <Link className="top-banner-btn" to='#'>
          지금 가입하면 첫 주문&nbsp;
          <span>100원</span>
          &nbsp;혜택!
        </Link>
      </div>

      {/* 헤더 */}
      <div className={fixedHeader > 10 ? "fixed-header-wrap" : "header-wrap"}>

        {/* 유저 메뉴(로그아웃 기능 위치)*/}
        <div className={fixedHeader > 10 ? "fixed-login-menu" : "login-menu"}>
          <UserNav isLoggedIn={isLoggedIn} />
        </div>

        {/* 로고, 배송 안내, 검색바 */}
        <div className={fixedHeader > 10 ? "fixed-logo-search-menu" : "logo-search-menu"}>

          {/* 로고 */}
          <h2 className="logo">
            <img style={{ cursor: 'pointer' }}
              src={Logo} onClick={() => { navigate('/') }}
              alt="로고" />
          </h2>

          {/* 배송 안내 버튼 */}
          <button className="delivery-info">
            <h2 className="hidden">배송 안내 버튼</h2>
            <span>루트</span>배송 안내
          </button>

          {/* 검색 바 */}
          <h2 className="hidden">검색바</h2>
          <SearchBar items={items} />
        </div>

        <div className="menu-wrap">
          {/* 유저 편의 메뉴 */}
          <ul className={fixedHeader > 10 ? "fixed-user-menu" : "user-menu"}>
            {/* 배송 확인, 마이페이지, 찜하기 메뉴 */}
            {
              [0, 1, 2].map((i) => (
                <li key={i}>
                  <h2 className="hidden">{userMenuAlt[i]}</h2>
                  <img className="user-menu-icon"
                    src={process.env.PUBLIC_URL + '/image/header_icon' + i + '.png'}
                    alt={userMenuAlt[i]}
                  />
                </li>
              ))
            }

            {/* 장바구니(담긴 상품 수량 표시 아이콘 때문에 따로 작성 ) */}
            <li>
              <h2 className="hidden">장바구니</h2>
              <img className="user-menu-icon"
                src={process.env.PUBLIC_URL + '/image/header_icon3.png'} alt="장바구니"
                onClick={() => { navigate('/Cart') }}
              />
              {/* 장바구니에 상품이 없으면 아이콘 제거 */}
              <span className={cartList.length === 0 ? "none" : "add-item-count"}
                onClick={() => { navigate('/Cart') }}>
                {cartList.length}
              </span>
            </li>
          </ul>

          <div className="main-menu">

            {/* 카테고리 */}
            <div className={fixedHeader > 10 ? "fixed-category" : "category"}>
              <h2 className="hidden">전체상품 보기</h2>
              <div className="category-btn"
                // 마우스 오버시 카테고리 메뉴 등장
                onMouseOver={() => setMouseOver(true)}
                // 마우스 아웃시 카테고리 메뉴 제거
                onMouseOut={() => setMouseOver(false)}
              >
                전체상품 보기
                {/* state가 true면 카테고리 메뉴 등장 */}
                {mouseOver === true ?
                  <CategoryNavBar fixedHeader={fixedHeader} /> : null}
              </div>
            </div>

            {/* 메인 메뉴 */}
            <Menu items={items} navigate={navigate} />

            {/* 배송지 입력 버튼 */}
            <button className={fixedHeader > 10 ? "fixed-address" : "address"}>
              <h2 className="hidden">배송지 입력하기 버튼</h2>
              배송지 입력하기
            </button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;


