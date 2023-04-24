import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RedirectProps } from "./types";

const Redirect: FC<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, []);

  return null;
};

export default Redirect;
