import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {

  const { pathname } = useLocation();

  /* 페이지 이동시 scroll top 유지 */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return null;
};

export default ScrollToTop;

