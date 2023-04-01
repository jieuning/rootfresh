import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    return (
        <SignUpContainer>
            <h2>회원가입</h2>
            <SignUpForm>
                <label>이메일</label>
                <SignUpInput 
                    type="email"
                    placeholder="이메일을 입력해주세요"/>
                <label>이름</label>
                <SignUpInput 
                    type="name"
                    placeholder="이름을 입력해주세요"/>
                <label>비밀번호</label>
                <SignUpInput 
                    type="password"
                    placeholder="비밀번호를 입력해주세요" />
                <label>비밀번호 확인</label>
                <SignUpInput 
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요" />
            </SignUpForm>
            <Button color border

            >가입하기</Button>
        </SignUpContainer>
    )
}

export default SignUp;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const SignUpInput = styled.input`
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
    background-color: #2A6834;
    color: #fff;
    border: 1px solid #2A6834;
`