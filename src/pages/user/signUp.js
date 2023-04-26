import styled from "styled-components";
import { useState } from "react";
//component
import SignUpModal from "../../components/signUpModal";
//firebase
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "../../firebase";
//responsive
import { Mobile } from "../../components/mobile/responsive";
import { useNavigate } from "react-router-dom";


function SignUp() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [signUpModal, setSignUpModal] = useState(false);

  const handleOnChange = (e) => {
    const type = e.target.name
    if (type === "name") {
      setName(e.target.value)
    } else if (type === "email") {
      setEmail(e.target.value)
    } else if (type === "password") {
      setPassword(e.target.value)
    } else if (type === "confirmPassword") {
      setConfirmPassword(e.target.value)
    }
  };

  /* 비밀번호 확인 */
  const isPasswordConfirmed = (password, confirmPassword) => {
    if (password === confirmPassword)
      return true;
  };

  const register = async () => {
    try {
      setErrorMsg("");

      /* 비밀번호 확인 불일치시 에러 */
      if (!isPasswordConfirmed(password, confirmPassword)) {
        setErrorMsg("비밀번호가 일치하지 않습니다")
        return;
      };

      /* firebase authentication에 이메일 비밀번호 저장 */
      const createUser = await createUserWithEmailAndPassword(
        firebaseAuth, email, password, confirmPassword);
      console.log(createUser);

      /* firebase profile에 이름 저장 */
      const createUserName = await updateProfile(
        firebaseAuth.currentUser, { displayName: name });
      console.log(createUserName);

      /* 가입 성공시 모달 */
      setSignUpModal(true);

      /* 조건 일치하지 않을 시 에러 메세지 */
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입된 계정입니다');
          break;
      };
    };
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, confirmPassword);
  };

  const navigate = useNavigate();

  return (
    <SignUpContainer>
      <Mobile>
        <img src={process.env.PUBLIC_URL + "/image/mob_cancle_btn.png"}
          onClick={() => navigate(-1)}
          alt="닫기버튼" />
      </Mobile>
      <h2 style={{ margin: "50px 0 0 0" }}>회원가입</h2>
      {signUpModal === true ? <SignUpModal /> : null}{/* 회원가입 성공시 모달 */}
      <SignUpForm onSubmit={handleOnSubmit}>
        <label>이름</label>
        <SignUpInput
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="이름을 입력해주세요" />
        <label>이메일</label>
        <SignUpInput
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="이메일을 입력해주세요" />
        <label>비밀번호</label>
        <SignUpInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="비밀번호를 입력해주세요 (6자리 이상)" />
        <label>비밀번호 확인</label>
        <SignUpInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          placeholder="비밀번호를 한번 더 입력해주세요 (6자리 이상)" />
        <p className="errMsg">{errorMsg}</p>{/* 에러 메세지 출력 */}
        <Button type="submit" >가입하기</Button>
      </SignUpForm>
    </SignUpContainer>
  )
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 30px 0;
  label {
    font-size: 14px;
    font-weight: 500;
  }
  .errMsg {
    font-size: 14px;
    font-weight: 500;
    color: #D70F0F;
  }
  @media(max-width: 1229px) {
    width: 100%;
  }
`
const SignUpInput = styled.input`
  width: 320px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 10px;
  @media(max-width: 1229px) {
    width: calc(100% - 20px);
  }
`
const Button = styled.button`
  width: 342px;
  height: 46px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2A6834;
  color: #fff;
  border: 1px solid #2A6834;
  margin-top: 20px;
  @media(max-width: 1229px) {
    width: 100%;
  }
`