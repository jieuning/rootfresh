import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//data
import { mHeader } from "../../dummy/contentOption";


function MobSearchResultHeader() {

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  /* onChange 핸들러 */
  const KeyWordChangeHandler = (e) => {
    setKeyword(e.target.value);
  }

  /* 기본 동작 방지 navigate 작동 */
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
        onClick={() => navigate('/')} />
      {/* 검색 바 */}
      <SearchWrap>
        <form onSubmit={onSubmitHandler}>
          <img src={process.env.PUBLIC_URL + '/image/mob_search_icon.png'}
            alt="검색 아이콘" />
          <input className="search-box"
            type="text"
            value={keyword}
            onChange={KeyWordChangeHandler}
            placeholder="원하시는 상품을 검색해주세요" />
        </form>
      </SearchWrap>
    </DetailHeader>
  )
};

export default MobSearchResultHeader;

const DetailHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 99;
`
const Image = styled.img`
  width: 14px;
  padding: 20px;
  cursor: pointer;
`
const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  border-radius: 6px;
  background-color: #f2f2f2;
  margin-right: 20px;
  .search-box {
    width: 170px;
    border: none;
    font-size: 12px;
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