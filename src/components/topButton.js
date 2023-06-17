import { useEffect, useState } from "react";
import styled from "styled-components";

function ScrollTopButton() {

  const [showBtn, setShowBtn] = useState(false);

  // scroll top값 0 부드럽게
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  // scrollY값이 500일 때 버튼 등장
  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 500) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      };
    };
    // clean-up
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  return showBtn && (
    <TopWrap>
      {/* 탑 버튼 */}
      <TopButton onClick={scrollToTop}>
        <h2 className="hidden">스크롤 처음으로 이동 버튼</h2>
        TOP
      </TopButton>
    </TopWrap>
  )
};

export default ScrollTopButton;

const TopWrap = styled.div`
  position: fixed;
  right: 3%;
  bottom: 5%;
  z-index: 99;
`
const TopButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  font-weight: 500;
  color: #5b5b5b;
`