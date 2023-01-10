import React from "react";
import "./style.css"
import { Route, Routes, Link, NavLink, Router } from "react-router-dom";
import Logo from '../../assets/logo.svg'


function Header() {
    return (
        <header>
            <div className="topBanner">
                <Link className="banBtn" to='#'>
                    지금 가입하면 첫 주문&nbsp;
                    <span>100원</span>
                    &nbsp;혜택!
                </Link>
            </div> {/* topBanner end */}

            <div className="container">
                <nav className="topMenu">
                    <ul>
                        <li style={{ fontWeight: '600' }}><Link className="menuShare" to='#'>회원가입</Link></li>
                        <li className="line"></li>
                        <li><Link className="menuShare" to='#'>로그인</Link></li>
                        <li className="line"></li>
                        <li><Link className="menuShare" to='#'>고객센터</Link></li>
                    </ul>
                </nav> {/* topMenu end */}

                <div className="midMenu">
                    <h1 className="logo">
                        <Link to='#'><img src={Logo} /></Link>
                    </h1>
                    <button className="infoDelivery">
                        <span>루트</span>
                        배송 안내
                    </button>
                    <div className="searchBar">
                        <input className="searchBox" type="search" placeholder="원하시는 상품을 입력해주세요"></input>
                        <button className="searchBtn"></button>
                    </div>
                </div> {/* midMenu end */}

                <nav className="iconMenu">
                    <ul>
                        <li>
                            <Link className="deliveryIcon iconShare" to='#'></Link>
                        </li>
                        <li>
                            <Link className="mypageIcon iconShare" to='#'></Link>
                        </li>
                        <li>
                            <Link className="zzimIcon iconShare" to='#'></Link>
                        </li>
                        <li>
                            <Link className="cartIcon iconShare" to='#'></Link>
                        </li>
                    </ul>
                </nav>

                <nav className="mainMenu">
                    <div className="category">
                        <Link className="cateInner" to='#'>
                            전체상품 보기
                        </Link>
                    </div>
                    <ul>
                        <li><Link className="menu" to='#'>THE신선</Link></li>
                        <li><Link className="menu" to='#'>오늘또구매</Link></li>
                        <li><Link className="menu" to='#'>베스트</Link></li>
                        <li><Link className="menu" to='#'>신상품</Link></li>
                        <li><Link className="menu" to='#'>마감할인</Link></li>
                        <li><Link className="menu" to='#'>특별한특가</Link></li>
                    </ul>
                    <button className="address">배송지 입력하기</button>
                </nav> {/* mainMenu end */}

            </div> {/* container end */}

        </header>
    )
}

export default Header;

