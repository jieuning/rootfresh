import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//responsive
import { Pc, Mobile } from "../mobile/responsive";

function SearchBar() {

  // input value값 저장
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  /* onChange 핸들러 */
  const KeyWordChangeHandler = (e) => {
    setKeyword(e.target.value);
  }

  const onSubmitHandler = (e) => {
    //form 기본 동작 방지
    e.preventDefault();
    //input value값을 keyword state로 받아와 쿼리스트링
    navigate(`/search?keyword=${keyword}`);
  }

  return (
    <SearchWrap>
      <form onSubmit={onSubmitHandler}>
        <Mobile>
          <img src={process.env.PUBLIC_URL + '/image/mob_search_icon.png'}
            alt="검색 아이콘" />
        </Mobile>

        {/* 검색 박스 */}
        <input className="search-box"
          type="text"
          value={keyword}
          onChange={KeyWordChangeHandler}
          placeholder="원하시는 상품을 검색해주세요"
        />

        <Pc>
          {/* 검색하기 버튼 */}
          <button className="search-btn" type="submit">
            <h2 className="hidden">검색하기 버튼</h2>
            <img src={process.env.PUBLIC_URL + '/image/search_icon.png'} alt="검색 버튼" />
          </button>
        </Pc>
      </form>
    </SearchWrap>
  )
};

export default SearchBar;

const SearchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 420px;
  height: 38px;
  border: 1px solid #2A6834;
  border-radius: 30px;

  .search-box {
    width: 320px;
    border: none;
    font-size: 14px;
    letter-spacing: -0.06em;
    margin-left: 16px;
  }
  .search-box:focus {
    outline: none;
  }
  .search-btn {
    position: absolute;
    right: 0;
    background: none;
    border: none;
    margin-right: 16px;
  }
  .search-btn img {
    width: 20px;
    object-fit: contain;
  }

  @media(max-width: 1229px) {
    width: 100%;
    padding: 4px 0;
    border: none;
    background-color: #f2f2f2;
    border-radius: 3px;
    
    form {
      display: flex;
      align-items: center;
    }
    input {
      background-color: #f2f2f2;
    }
    input::placeholder {
      color: #b6b6b6;
    }
    .search-box {
      margin-left: 10px;
      width: 170px;
    }
    img {
      width: 14px;
      height: 14px;
      margin-left: 10px;
    }
  }
`