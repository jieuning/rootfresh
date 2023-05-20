//component
import styled from "styled-components";
import SearchBar from "../header/searchBar";
import BottomNav from "./bottomNav/bottomNav";
//mobile
import MobDetailHeader from "./mobDetailHeader";

function MobSearch() {
  return (
    <>
      <MobDetailHeader />
      <SearchBarWrap>
        <SearchBar />
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