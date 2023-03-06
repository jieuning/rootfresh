import React, { useState } from "react";
import "./style.css"
import { Route, Routes, Link, useNavigate, Router } from "react-router-dom";
import Logo from '../../assets/logo.svg'


function Header() {

    let [menu, setMenu] = useState(["THE신선", "오늘또구매", "베스트", "신상품", "마감할인", "특별한특가"]);
    const navigate = useNavigate();

    return (
        <div id="header">
            <div className="top-banner">
                <Link className="top-banner-btn" to='#'>
                    지금 가입하면 첫 주문&nbsp;
                    <span>100원</span>
                    &nbsp;혜택!
                </Link>
            </div> {/* topBanner end */}

            <div className="container">
                <nav className="top-menu">
                    <ul>
                        <li style={{ fontWeight: '600' }}><Link className="menu-share" to='#'>회원가입</Link></li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='#'>로그인</Link></li>
                        <li className="line"></li>
                        <li><Link className="menu-share" to='#'>고객센터</Link></li>
                    </ul>
                </nav> {/* topMenu end */}

                <div className="mid-menu">
                    <h1 className="logo">
                        <img style={{cursor: 'pointer'}} src={Logo} onClick={()=>{navigate('/')}}/>
                    </h1>
                    <button className="info-delivery">
                        <span>루트</span>
                        배송 안내
                    </button>
                    <div className="search-bar">
                        <input className="search-box" type="search" placeholder="원하시는 상품을 입력해주세요"></input>
                        <button className="search-btn"></button>
                    </div>
                </div> {/* midMenu end */}

                <nav className="icon-menu">
                    <ul>
                        <li><Link className="delivery-icon icon-share" to='#'></Link></li>
                        <li><Link className="mypage-icon icon-share" to='#'></Link></li>
                        <li><Link className="zzim-icon icon-share" to='#'></Link></li>
                        <li><Link className="cart-icon icon-share" to='#'></Link></li>
                    </ul>
                </nav>

                <nav className="main-menu">
                    <div className="category">
                        <Link className="category-inner" to='#'>
                            전체상품 보기
                        </Link>
                    </div>
                    <ul>
                        {menu.map((a, i) => (
                            <li><Link key={a} className="menu" to='#'>{menu[i]}</Link></li>))}
                    </ul>
                    <button className="address">배송지 입력하기</button>
                </nav> {/* mainMenu end */}

            </div> {/* container end */}

        </div>
    )
}

export default Header;

