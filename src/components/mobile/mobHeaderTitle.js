import { useLocation } from "react-router-dom"

function MobHeaderTitle() {
  
  const location = useLocation();

  if (location.pathname === "/m_category_nav") {
    return <p>카테고리</p>
  } else if (location.pathname === "/m_search") {
    return <p>검색</p>
  } else if (location.pathname === "/m_mypage") {
    return <p>마이페이지</p>
  }
};

export default MobHeaderTitle;