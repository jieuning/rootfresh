import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
    
    const navigate = useNavigate();

    return (
        <>
            <h2>로그인</h2>
            <LoginForm>
                <LoginInput 
                    type="email"
                    placeholder="이메일을 입력해주세요" 
                />
                <LoginInput 
                    type="password"
                    placeholder="비밀번호를 입력해주세요" />
            </LoginForm>
            <ButtonWrap>
                <Button background>로그인</Button>
                <Button color border
                        onClick={()=>navigate('/sign-up')}
                >간편 회원가입</Button>
            </ButtonWrap>
        </>
    )
}

export default Login;


const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 30px 0;
`

const LoginInput = styled.input`
    width: 320px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 10px;
`

const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
`