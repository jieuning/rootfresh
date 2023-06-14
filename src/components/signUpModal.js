import { useNavigate } from "react-router-dom";
import styled from "styled-components";


function SignUpModal() {

  const navigate = useNavigate();

  return (
    // 회원가입 완료 모달
    <ModalContainer>
      <div className="modal-container modal-background">
        <div className="modal-container delete-modal">
          <h3>가입이 완료되었습니다!</h3>
          
          <ButtonWrap>
            {/* 홈 버튼 */}
            <button className="cancle-button" onClick={() => navigate('/')}>
              <h2 className="hidden">홈으로 가기 버튼</h2>
              홈
            </button>

            {/* 로그인 버튼 */}
            <button className="ok-button" onClick={() => navigate('/login')}>
              <h2 className="hidden">로그인하기 버튼</h2>
              로그인하기
            </button>
          </ButtonWrap>
        </div>
      </div>
    </ModalContainer>
  )
};

export default SignUpModal;

const ModalContainer = styled.div`
  .modal-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .modal-background {
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0,0,0,.4);
  }
  .delete-modal {
    width: 360px;
    height: 156px;
    z-index: 1;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
  }
  h3 {
    font-size: 16px;
    text-align: center;
    margin: 50px 20px;
  }
`
const ButtonWrap = styled.div`
  display: flex;
  height: 56px;
  border-top: 1px solid #f5f5f5;
  .cancle-button {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    background: #fff;
    font-weight: 500;
    color: #2A6834;
    border-right: 1px solid #f5f5f5;
    border-bottom-left-radius: 6px;
  }
  .ok-button {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    background: #fff;
    font-weight: 500;
    color: #2A6834;
    border-bottom-right-radius: 6px;
  }
`