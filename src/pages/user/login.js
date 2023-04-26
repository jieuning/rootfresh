import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//firebase
import {
  firebaseAuth,
  signInWithEmailAndPassword,
} from "../../firebase";
//responsive
import { Pc, Mobile } from "../../components/mobile/responsive";


function Login({ isLoggedIn }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  /* isLoggedIn가 true면 홈으로 */
  const loggedIn = () => {
    if (isLoggedIn === true) {
      return navigate('/')
    };
  };

  const handleOnChange = (e) => {
    const type = e.target.name
    if (type === "email") {
      setEmail(e.target.value)
    } else if (type === "password") {
      setPassword(e.target.value)
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      /* 이벤트 기본 동작 막기 */
      e.preventDefault();

      setErrorMsg("");
      loggedIn(isLoggedIn);

      /* 로그인하기 */
      let loginUser
      loginUser = await signInWithEmailAndPassword(
        firebaseAuth, email, password);

      /* 조건 일치하지 않을 시 에러 메세지 */
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case 'auth/wrong-password':
          setErrorMsg('입력하신 이메일 또는 비밀번호가 일치하지 않습니다');
          break;
        case 'auth/user-not-found':
          setErrorMsg('입력하신 이메일 또는 비밀번호가 일치하지 않습니다');
          break;
      };
    };
  };

  return (
    <LoginWrap>
      <Mobile>
        <img src={process.env.PUBLIC_URL + "/image/mob_cancle_btn.png"}
          onClick={() => navigate('/')}
          alt="닫기버튼" />
      </Mobile>
      <h2 style={{ margin: "50px 0 0 0" }}>로그인</h2>
      <LoginForm onSubmit={handleOnSubmit}>
        <LoginInput
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="이메일을 입력해주세요"
          required
        />
        <LoginInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <p className="errMsg">{errorMsg}</p>{/* 에러 메세지 출력 */}
        <Button changeBackground
          type="submit">로그인</Button>
      </LoginForm>
      <Button changeColor changeMargin
        onClick={() => navigate('/sign-up')}>
        간편 회원가입
      </Button>
    </LoginWrap>
  )
};

export default Login;

const LoginWrap = styled.div`
@media(max-width: 1229px) {
  padding: 0 20px;
  img {
    position: absolute;
    left: 0;
    top: 0;
    padding: 50px 20px 20px 20px;
    width: 14px;
  }
}
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  .errMsg {
    font-size: 14px;
    font-weight: 500;
    color: #D70F0F;
  }
  @media(max-width: 1229px) {
    .errMsg {
      font-size: 12px;
    }
  }
`
const LoginInput = styled.input`
  width: 330px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 10px;
  &::placeholder {
    color: #ccc;
  }
  @media(max-width: 1229px) {
    width: calc(100% - 20px);
    font-size: 12px;
  }
`
const Button = styled.button`
  width: 342px;
  height: 46px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  @media(max-width: 1229px) {
    width: 100%;
    font-size: 12px;
    padding: 0 10px;
  }
  background-color: ${props => props.changeBackground ? "#2A6834" : "#fff"};
  color: ${props => props.changeColor ? "#2A6834" : "#fff"};
  border: 1px solid #2A6834;
  margin-top: ${props => props.changeMargin ? "10px" : "20px"}
`