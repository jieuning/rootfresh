import { useSearchParams } from "react-router-dom";
import "../mainPage/style.css"
//component
import Card from "../../components/Card";
//responsive
import { Mobile } from "../../components/mobile/responsive";
//mobile
import MobSearchResultHeader from "../../components/mobile/mobSearchResultHeader";
import styled from "styled-components";


function SearchDetail({ items, navigate }) {

  /* url에 keyword값 가져옴 */
  const [searchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');

  /* keyword가 포함된 문자열을 가진 데이터 필터링 */
  const searchFilter = items.filter((data) =>
    data.title.includes(initKeyword));

  return (
    <>
      <Mobile>
        <MobSearchResultHeader />
      </Mobile>
      <section style={{ paddingTop: "43px" }}>
        <h2>'{initKeyword}'에 대한 검색 결과</h2>
        {/* searchFilter에 데이터가 없거나 initKeyword가 공백이 아닐 때 */}
        {searchFilter.length !== 0 && initKeyword !== "" ?
          <Container>
            {searchFilter.map((data, i) => (
              <div key={i} className="menu-item" 
                onClick={() => navigate(`/detail/${data.id}`)} >
                <Card data={data} />
              </div>
            ))}
          </Container>
          :
          <div style={{ margin: "180px 0", textAlign: "center" }}>
            <img src={process.env.PUBLIC_URL + '/image/search_icon_g.png'}
              alt="검색 아이콘" />
            <p style={{ color: "#ccc", marginTop: "20px" }}>검색된 상품이 없습니다.</p>
          </div>
        }
      </section>
    </>
  )
};

export default SearchDetail;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
  margin-top: 30px;
  cursor: pointer;
  @media(max-width: 1229px) {
    padding-left: 20px; 
    .menu-item {
      width: calc(50% - 20px);
    }
  `
