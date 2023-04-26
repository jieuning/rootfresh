import { useMediaQuery } from "react-responsive"

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 1230px)"
  });
  return <>{isPc && children}</>
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1229px)"
  });
  return <>{isMobile && children}</>
}

export const BannerPc = ({ children }) => {
  const isBannerPc = useMediaQuery({
    query: "(min-width: 501px)"
  });
  return <>{isBannerPc && children}</>
};

export const BannerMobile = ({ children }) => {
  const isBannerMobile = useMediaQuery({
    query: "(max-width: 500px)"
  });
  return <>{isBannerMobile && children}</>
}