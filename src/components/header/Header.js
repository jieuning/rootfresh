import { useEffect, useState } from "react";
import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import { useSelector } from "react-redux";

import MenuNavBar from "../MenuNavBar";
import Menu from "../Menu";

import { userMenuAlt } from "../../dummy/contentOption";


function Header({items}) {
    const [scrollHeader, setScrollHeader] = useState(0);
    const [mouseOver, setMouseOver] = useState(false);

    const navigate = useNavigate();

    //redux데이터
    const state = useSelector((state) => state);
    const cartList = state.cart;

    //스크롤시 헤더 고정
    const updateScroll = () => {
        setScrollHeader(window.scrollY || document.documentElement.scrollTop)};

    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
        return () => {
            window.removeEventListener('scroll', updateScroll)}});


    return (
        <header className={scrollHeader > 10 ?
            "main-header fixed-header" : "main-header"}>
            {/* 헤더 탑 배너 */}
            <div className={scrollHeader > 10 ?
                "fixed-top-banner" : "top-banner"}>
                <Link className="top-banner-btn" to='#'>
                    지금 가입하면 첫 주문&nbsp;
                    <span>100원</span>
                    &nbsp;혜택!
                </Link>
            </div>

            <div className={scrollHeader > 10 ?
                "fixed-header-container" : "header-container"}>
                {/* 로그인 관련 메뉴 */}
                <div className={scrollHeader > 10 ?
                    "fixed-login-menu" : "login-menu"}>
                    <ul>
                        <li style={{ fontWeight: '600' }}>
                            <Link className="menu-share" to='/sign-up'>회원가입</Link>
                        </li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='/login'>로그인</Link></li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='#'>고객센터</Link></li>
                    </ul>
                </div> 
                <div className={scrollHeader > 10 ?
                    "fixed-logo-search-menu" : "logo-search-menu"}>
                    {/* 로고 */}
                    <h1 className="logo">
                        <img style={{ cursor: 'pointer' }}
                            src={Logo} onClick={() => { navigate('/') }}
                            alt="로고" />
                    </h1>
                    <button className="delivery-info">
                        <span>루트</span>배송 안내
                    </button>
                    {/* 검색 바 */}
                    <div className="search-bar">
                        <input className="search-box" type="search" placeholder="원하시는 상품을 입력해주세요" />
                        <button className="search-btn"></button>
                    </div>
                </div>

                <div className="menu-wrap">
                    {/* 장바구니 그 외 메뉴 */}
                    <ul className={scrollHeader > 10 ?
                        "fixed-user-menu" : "user-menu"}>
                        {[1, 2, 3].map((i) => (
                            <li><img className="user-menu-icon"
                                src={process.env.PUBLIC_URL + '/image/header_icon'+ i +'.png'}
                                alt={userMenuAlt[i]} />
                            </li>
                        ))}
                        <li><img className="user-menu-icon"
                            src={process.env.PUBLIC_URL + '/image/header_icon4.png'}
                            onClick={() => { navigate('/Cart') }}
                            alt="장바구니" />
                            <span
                                className={cartList.length === 0 ? "none" : "add-item-count"}
                                onClick={() => { navigate('/Cart') }}>{cartList.length}</span>
                        </li>
                    </ul>
                    <div className="main-menu">
                        {/* 카테고리 */}
                        <div className={scrollHeader > 10 ?
                            "fixed-category" : "category"}>
                            <div className="category-btn"
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}>
                                전체상품 보기
                                {mouseOver == true ?
                                    <MenuNavBar scrollHeader={scrollHeader} /> : null}
                            </div>
                        </div>
                        {/* 메인 메뉴 */}
                            <Menu items={items}/>
                        <button className={scrollHeader > 10 ?
                            "fixed-address" : "address"}>배송지 입력하기</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;


