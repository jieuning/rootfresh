import React, { useEffect, useState } from "react";
import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import { useSelector } from "react-redux";


function Header() {
    const [menu] = useState(["THE신선", "오늘또구매", "베스트", "신상품", "마감할인", "특별한특가"]);
    const [scrollHeader, setScrollHeader] = useState(0);

    const state = useSelector((state) => state);
    const cartList = state.cart;

    const navigate = useNavigate();


    const updateScroll = () => {
        setScrollHeader(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        return () => { 
            window.removeEventListener('scroll', updateScroll)}
    });

    return (
        <header className={scrollHeader > 10 ? 
            "main-header fixed-header" : "main-header"}>
            <div className={scrollHeader > 10 ? 
                "fixed-top-banner" : "top-banner" }>
                <Link className="top-banner-btn" to='#'>
                    지금 가입하면 첫 주문&nbsp;
                    <span>100원</span>
                    &nbsp;혜택!
                </Link>
            </div> {/* top banner end */}

            <div className={scrollHeader > 10 ? 
                "fixed-header-container" : "header-container"}>
                <div className={scrollHeader > 10 ? 
                    "fixed-login-menu" : "login-menu"}>
                    <ul>
                        <li style={{ fontWeight: '600' }}>
                            <Link className="menu-share" to='#'>회원가입</Link>
                        </li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='#'>로그인</Link></li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='#'>고객센터</Link></li>
                    </ul>
                </div> {/* login menu end */}

                <div className={scrollHeader > 10 ? 
                    "fixed-logo-search-menu" : "logo-search-menu"}>
                    <h1 className="logo">
                        <img style={{ cursor: 'pointer' }} 
                        src={Logo} onClick={()=>{navigate('/')}}
                        alt="로고" />
                    </h1>
                    <button className="delivery-info">
                        <span>루트</span>배송 안내
                    </button>
                    <div className="search-bar">
                        <input className="search-box" type="search" placeholder="원하시는 상품을 입력해주세요" />
                        <button className="search-btn"></button>
                    </div>
                </div> {/* logo search menu end */}

                <div className="menu-wrap">
                    <ul className={scrollHeader > 10 ?
                        "fixed-user-menu" : "user-menu"}>
                        <li><img className="user-menu-icon"
                            src={process.env.PUBLIC_URL + '/image/header_icon1.png'}
                            alt="주문/배송" />
                        </li>
                        <li><img className="user-menu-icon"
                            src={process.env.PUBLIC_URL + '/image/header_icon2.png'}
                            alt="마이페이지" />
                        </li>
                        <li><img className="user-menu-icon"
                            src={process.env.PUBLIC_URL + '/image/header_icon3.png'}
                            alt="찜하기" />
                        </li>
                        <li><img className="user-menu-icon"
                            src={process.env.PUBLIC_URL + '/image/header_icon4.png'} 
                            onClick={()=>{navigate('/Cart')}} 
                            alt="장바구니" />
                            <span 
                            className={cartList.length == 0 ? "none" : "add-item-count"}
                            onClick={()=>{navigate('/Cart')}}>{cartList.length}</span>
                        </li>
                    </ul> {/* user menu end */}


                    <div className="main-menu">
                        <div className={scrollHeader > 10 ? 
                            "fixed-category" : "category"}>
                            <Link className="category-inner" to='#'>
                                전체상품 보기
                            </Link>
                        </div>
                        <ul>
                            {menu.map((a, i) => (
                                <li>
                                    <Link key={a} className="menu" to='#'>{menu[i]}</Link>
                                </li>))}
                        </ul>
                        <button className={scrollHeader > 10 ? 
                            "fixed-address" : "address"}>배송지 입력하기</button>
                    </div> {/* main menu end */}
                </div> {/* fixed align end */}
            </div> {/* container end */}
        </header>
    )
}

export default Header;


