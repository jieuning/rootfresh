import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
    firebaseAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "../../firebase";

function Login({ isLoggedIn, setIsLoggedIn }) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    /* 현재 로그인한 사용자 가져오기 */ 
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            console.log(user)
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

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
            e.preventDefault();

            setErrorMsg("");

            let loginUser;
            /* 로그인하기 */
            loginUser = await signInWithEmailAndPassword(
                firebaseAuth, email, password);

            loggedIn(isLoggedIn);

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
        <>
            <h2>로그인</h2>
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
                <Button background
                    type="submit">로그인</Button>
            </LoginForm>
            <Button color border margin
                onClick={() => navigate('/sign-up')}>간편 회원가입</Button>
        </>
    )
}

export default Login;


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
`

const LoginInput = styled.input`
    width: 320px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 10px;
`

const Button = styled.button`
    width: 342px;
    height: 46px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: ${props => props.background ? "#2A6834" : "#fff"};
    color: ${props => props.color ? "#2A6834" : "#fff"};
    border: 1px solid #2A6834;
    margin-top: ${props => props.margin ? "10px" : "20px"}
`