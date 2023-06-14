//component
import styled from "styled-components";
import SearchBar from "../header/searchBar";
import BottomNav from "./bottomNav/bottomNav";
//mobile
import MobDetailHeader from "./mobDetailHeader";
//data
import { recoKeyword } from "../../dummy/contentOption";

function MobSearch({ navigate }) {
  return (
    <>
      <MobDetailHeader />
      <SearchBarWrap>
        <SearchBar /> {/* 검색바 컴포넌트 */}
        <RecommendWord>
          <p>추천 검색어</p>

          {/* 추천 검색어 */}
          <div>
            {recoKeyword.map((keyword, i) =>
              <button key={i} onClick={() => 
                navigate(`/search?keyword=${keyword}`)}>{keyword}</button>
            )}
          </div>
        </RecommendWord>
      </SearchBarWrap>
      <BottomNav />
    </>
  )
};

export default MobSearch;

const SearchBarWrap = styled.div`
  margin: 0 20px; 
  padding-top: 60px; 
`

const RecommendWord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  p {
    font-size: 14px;
  }
  button {
    margin-right: 10px;
    border: none;
    border-radius: 30px;
    padding: 6px 14px;
    background-color: #2A6834;
    color: #fff;
  }
` 