import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PodcasterContext } from "@/common/context";
import { HOME_ROUTE } from "@/common/data";
import styles from "./header.module.scss";

const Header: FC = () => {
  const { loadingView } = useContext(PodcasterContext);
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to={HOME_ROUTE} className={styles.logo} role="link">
          <FontAwesomeIcon icon="podcast" /> Podcaster
        </Link>
        {loadingView && <FontAwesomeIcon spin size="lg" icon="spinner" />}
      </div>
    </div>
  );
};

export default Header;
