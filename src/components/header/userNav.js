import { Link } from "react-router-dom";
import "./style.css"

import { firebaseAuth } from "../../firebase";

function UserNav({ isLoggedIn }) {

    const onLogOutClick = () => firebaseAuth.signOut();

    return (
        <>
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