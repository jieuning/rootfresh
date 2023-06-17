import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//redux
import { useSelector } from "react-redux";
//data
import { mHeader } from "../../../dummy/contentOption";

function MobSearchResultHeader() {

  const navigate = useNavigate();

  // redux 데이터
  const state = useSelector((state) => state);
  const cartList = state.cart;

  const [keyword, setKeyword] = useState("");

  // onChange 핸들러
  const KeyWordChangeHandler = (e) => {
    setKeyword(e.target.value);
  }

  // 기본 동작 방지 navigate 작동
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${keyword}`);
  }

  return (
    <DetailHeader>
      {/* 이전 버튼 */}
      <Image
        src={process.env.PUBLIC_URL + mHeader[3]}
        alt="이전 페이지 버튼"
        onClick={() => navigate('/')}
      />

      {/* 검색 바 */}
      <SearchWrap>
        <h2 className="hidden">검색바</h2>
        <form onSubmit={onSubmitHandler}>
          <img src={process.env.PUBLIC_URL + '/image/mob_search_icon.png'} alt="검색 아이콘" />
          <input className="search-box"
            type="text"
            value={keyword}
            onChange={KeyWordChangeHandler}
            placeholder="원하시는 상품을 검색해주세요" />
        </form>
      </SearchWrap>

      {/* 장바구니 버튼 */}
      <div style={{ position: "relative" }}>
        <Image changeWidth={"22px"}
          src={process.env.PUBLIC_URL + mHeader[2]} alt="장바구니"
          onClick={() => navigate('/cart')}
        />
        {/* 장바구니에 담긴 상품 수량 아이콘 */}
        <span className={cartList.length === 0 ?
          "none" : "m_add-item-count"}
          onClick={() => { navigate('/Cart') }}>
          {/* 수량 */}
          {cartList.length}
        </span>
      </div>
    </DetailHeader>
  )
};

export default MobSearchResultHeader;

const DetailHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 99;

  .m_add-item-count {
    position: absolute;
    top: 13px;
    left: 33px;
    width: 14px;
    height: 14px;
    background: #BAE900;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    color: #fff;
    cursor: pointer;
  }
`
const Image = styled.img`
  width: ${props => props.changeWidth || '18px'};
  padding: 20px;
  cursor: pointer;
`
const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 0;
  border-radius: 6px;
  background-color: #f2f2f2;
  margin-right: 20px;

  .search-box {
    width: 170px;
    border: none;
    font-size: 14px;
    letter-spacing: -0.06em;
    margin-left: 5px;
  }
  .search-box:focus {
    outline: none;
  }
  input {
    background-color: #f2f2f2;
  }
  input::placeholder {
    color: #b6b6b6;
  }
  img {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
`