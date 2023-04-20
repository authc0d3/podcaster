import { Link } from "react-router-dom";
import { HOME_ROUTE } from "@/common/data";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to={HOME_ROUTE} className={styles.logo}>Podcaster</Link>
      </div>
    </div>
  );
}

export default Header;
