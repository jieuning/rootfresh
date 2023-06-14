import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//mobile
import BottomNav from "./bottomNav/bottomNav";
import MobDetailHeader from "./mobDetailHeader";
//firebase
import { firebaseAuth } from "../../firebase";

function MobMypage() {

  const navigate = useNavigate();

  /* firebase 로그아웃 */
  const onLogOutClick = () => firebaseAuth.signOut();

  /* firebase profile정보 */
  const auth = firebaseAuth;
  const user = auth.currentUser;

  return (
    <MypageContainer>
      <MobDetailHeader />
      {/* 유저 정보가 있으면 로그아웃, 없으면 로그인 */}
      {user !== null ?
      
        // 로그아웃
        <div className="logout-btn">
          {/* 유저 이름 */}
          <p>{user.displayName} 님<br />환영합니다.</p>

          <Button changeBorder changeBackground changeColor
            onClick={onLogOutClick}
          >
            <h2 className="hidden">로그아웃 버튼</h2>
            로그아웃
          </Button>
        </div>
        :
        // 로그인
        <div className="login-btn">
          <p>회원가입하고<br />다양한 혜택을 받아보세요!</p>

          <Button onClick={() => navigate('/login')}>
            <h2 className="hidden">로그인 회원가입 버튼</h2>
            로그인/회원가입
          </Button>
        </div>
      }

      {/* 하단 네비게이션 */}
      <BottomNav />
    </MypageContainer>
  )
};

export default MobMypage;

const MypageContainer = styled.div`
  padding-top: 43px;
  padding-bottom: 75px;

  .login-btn {
    font-size: 16px;
    line-height: 1.4;
    margin-top: 20px;
    padding: 0 20px;
  }
  .logout-btn {
    padding: 0 20px;
    margin-top: 20px;
    line-height: 1.4;
    font-size: 16px;
  }
`
const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  font-size: 16px;
  border: ${props => props.changeBorder ? "1px solid #2A6834" : "none"};
  border-radius: 6px;
  background-color: ${props => props.changeBackground ? "#fff" : "#2A6834"};
  color: ${props => props.changeColor ? "#2A6834" : "#fff"};
  margin-top: 20px;
`