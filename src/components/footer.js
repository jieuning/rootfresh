import styled from "styled-components";
//data
import { snsImg } from "../dummy/contentOption";
//responsive
import { Mobile, Pc } from "./mobile/responsive";


function footer() {
  return (
    <FooterContainer>
      <Pc>
        {/* 푸터 탑 메뉴 */}
        <FooterMenu>
          <li>루트프레시소개</li>
          <li>매장안내</li>
          <li>이용약관</li>
          <li className="personal-info">
            개인정보처리방침
          </li>
          <li>고객센터</li>
          <li>인재채용</li>
        </FooterMenu>
      </Pc>

      <div className="footer-content">
        <Mobile>
          <div className="m-footer-menu">
            <span>루트프레시소개</span>
            <span>이용약관</span>
            <span style={{ fontWeight: "500" }}>개인정보처리방침</span>
          </div>
        </Mobile>

        <FtCsCenter>
          <div className="cscenter-info">
            <p className="cecenter-number">
              고객센터
              <span className="number">1670-1544</span>
            </p>
            <p>상담시간: 10:00 ~ 18:00(공휴일 휴무)</p>
            <p>점심시간: 12:00 ~ 13:00</p>
            <p>email: rootfresh@fresh.co.kr</p>
          </div>
          
          {/* sns 바로가기 */}
          <div className="sns">
            {snsImg.map((data, i) => (
              <img src={process.env.PUBLIC_URL + data.image}
                alt={data.alt}
                key={i}
              />
            ))}
          </div>
        </FtCsCenter>

        <FtcompanyInfo>
          <span className="company-name">(주)루트프레시</span><br />
          <span>주소: 서울특별시 광진구 화양동</span><br />
          <span>사업자등록번호: 123-45-67891</span><br />
          <span>[사업자정보확인]</span>
          <span>통신판매업 신고번호: 제2023-12345 호</span><br />
          <span>대표이사: 황지은</span>
          <span>개인정보보호책임자: 황지은</span><br />
          <span className="copy">copyright &copy; rootfresh All Right Reserved.</span>
        </FtcompanyInfo>
      </div>
    </FooterContainer>
  )
};

export default footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 90px 0;
  .footer-content {
    padding: 50px 18.18%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media(max-width: 1229px) {
    background-color: #f5f5f5;
    padding: 0;
    .footer-content {
      padding: 50px 20px;
      flex-direction: column;
    }
    .m-footer-menu {
      font-size: 12px;
      text-align: left;
      margin-bottom: 20px;
    }
    .m-footer-menu span {
      margin-right: 10px;
    }
  }
`
const FooterMenu = styled.ul`
  padding: 20px 18.18%;
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #5f5f5f;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  .personal-info {
    color: #2A6834;
    font-weight: 500;
  }
`
const FtCsCenter = styled.div`
  text-align: left;
  .cscenter-info {
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .cecenter-number {
    font-weight: 600;
    font-size: 18px;
  }
  .number {
    color: #2A6834;
  }
  .sns {
    display: flex;
    gap: 6px;
  }
  .sns img {
    width: 36px;
  }
  @media(max-width: 1229px) {
    .cscenter-info {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .cecenter-number {
      font-weight: 500;
      font-size: 14px;
    }
    .sns {
      margin-bottom: 20px;
    }
    .sns img {
      width: 30px;
    }
  }
`
const FtcompanyInfo = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 1.5;
  .company-name {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    margin-right: 10px;
  }
  @media(max-width: 1229px) {
    font-size: 12px;
    .company-name {
      font-size: 14px;
      font-weight: 500;
    }
    span {
      margin-right: 0;
    }
  }
`