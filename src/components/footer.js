import React from "react";
import styled from "styled-components";

function footer() {

    const btArr = [0, 1, 2, 3, 4]

    return (
        <FooterContainer>
            <div className="footer-inner">
                <FtCompanyMenu>
                    <li>루트프레시 소개</li>
                    <li>매장안내</li>
                    <li>약관 및 정책</li>
                    <li className="personal-info">개인정보 취급방침</li>
                    <li>고객센터</li>
                    <li>인재채용</li>
                </FtCompanyMenu>
                <div className="footer-content">
                    <FtCsCenter>
                        <div className="cscenter-info">
                            <p className="cecenter-number">고객센터 <span className="number">1670-1544</span></p>
                            <p>상담시간: 10:00 ~ 18:00(공휴일 휴무)</p>
                            <p>점심시간: 12:00 ~ 13:00</p>
                            <p>email: rootfresh@fresh.co.kr</p>
                        </div>
                        <div className="sns">
                            {btArr.map((data) => (
                                <img src={process.env.PUBLIC_URL + '/image/SNS' + data + '.png'} alt="sns 이미지" />
                            ))}
                        </div>
                    </FtCsCenter>
                    <FtcompanyInfo>
                        <p className="company-name">(주)루트프레시</p>
                        주소: 서울특별시 광진구 화양동
                        <ul className="company-info">
                            <li>사업자등록번호: 123-45-67891</li>
                            <li><a href="#">[사업자정보확인]</a></li>
                            <li>통신판매업 신고번호: 제2023-12345 호</li>
                        </ul>
                        <ul className="company-info">
                            <li>대표이사: 황지은</li>
                            <li>개인정보보호책임자: 황지은</li>
                        </ul>
                        copyright &copy; rootfresh All Right Reserved.
                    </FtcompanyInfo>
                </div>
            </div>
        </FooterContainer>
    )
};

export default footer;


const FooterContainer = styled.div`
    width: 100%;
    // max-width: 1200px;
    margin: 0 auto;

    .footer-inner {
        margin: 90px 0;
        // min-width: 1200px;
    }

    .footer-content {
        padding: 50px 18.18%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const FtCompanyMenu = styled.ul`
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
        width: 32px;
        display: flex;
        gap: 6px;
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
    .company-info {
        display: flex;
        gap: 10px
    }
`