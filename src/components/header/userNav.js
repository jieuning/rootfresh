import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/arrow.png"
//firebase
import { firebaseAuth } from "../../firebase";

function UserNav() {

  /* firebase 로그아웃 */
  const onLogOutClick = () =>
    firebaseAuth.signOut();

  /* firebase profile정보 */
  const auth = firebaseAuth;
  const user = auth.currentUser;

  return (
    <>
      {user !== null ?
        // 로그인시 보여질 메뉴
        <UserMenu>
          {/* 로그인된 유저 이름 */}
          <UserName>
            {user.displayName} 님
            <LogoutModal
              style={{
                cursor: "pointer",
                marginTop: "4px"
              }}
              onClick={onLogOutClick}>
              로그아웃
            </LogoutModal>
          </UserName>

          {/* 구분선 */}
          <Line />

          {/* 고객센터 */}
          <li><Link to='#'>고객센터</Link></li>
        </UserMenu>
        :
        // 로그아웃시 보여질 메뉴
        <UserMenu>
          <li style={{ fontWeight: '600' }}>
            <Link to='/sign-up'>회원가입</Link>
          </li>
          {/* 구분선 */}
          <Line />
          <li><Link to='/login'>로그인</Link></li>
          {/* 구분선 */}
          <Line />
          <li><Link to='#'>고객센터</Link></li>
        </UserMenu>
      }
    </>
  )
};

export default UserNav;

const UserMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px; 
  li {
    font-size: 12px;
    letter-spacing: -0.06em;
    position: relative;
    padding: 5px;
    cursor: pointer;
  }
`
const UserName = styled.li`
  position: relative;
  margin-right: 10px;
  &::after {
    content:'';
    position absolute;
    top: 10px;
    right: -5px;
    width: 6px;
    height: 6px;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
`
const LogoutModal = styled.div`
  position: absolute;
  top: 18px;
  left: -16px;
  width: 82px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 12px;
  padding: 6px 0;
  z-index: 20;
  opacity: 0;
  ${UserName}:hover & {
    opacity: 1;
  }
`
const Line = styled.div`
  width: 1px;
  height: 12px;
  margin: 5px 8px;
  background-color: #ccc;
`