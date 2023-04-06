import { Link } from "react-router-dom";

import { firebaseAuth } from "../../firebase";

function UserNav({ isLoggedIn }) {

    /* 로그아웃 */ 
    const onLogOutClick = () => firebaseAuth.signOut();

    return (
        <>
            {/* 로그인, 로그아웃시 보여질 nav */}
            {isLoggedIn === true ?
                <ul>
                    <li><div className="menu-share"
                        style={{ cursor: "pointer", marginTop: "4px" }}
                        onClick={onLogOutClick}>로그아웃</div></li>
                    <li className="line"></li>
                    <li><Link className="menu-share" to='#'>고객센터</Link></li>
                </ul>
                :
                <ul>
                    <li style={{ fontWeight: '600' }}>
                        <Link className="menu-share" to='/sign-up'>회원가입</Link>
                    </li>
                    <li className="line"></li>
                    <li><Link className="menu-share" to='/login'>로그인</Link></li>
                    <li className="line"></li>
                    <li><Link className="menu-share" to='#'>고객센터</Link></li>
                </ul>
            }
        </>
    )
};

export default UserNav;