import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestorator: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0 }), [pathname]);
  return null;
};

export default ScrollRestorator;
