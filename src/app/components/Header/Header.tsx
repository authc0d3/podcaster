import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOME_ROUTE } from "@/common/data";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to={HOME_ROUTE} className={styles.logo}>
          <FontAwesomeIcon icon="headphones" /> Podcaster
        </Link>
      </div>
    </div>
  );
};

export default Header;
