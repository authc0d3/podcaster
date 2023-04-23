import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()}
      <a href="https://programadorweb.dev" target="_blank" rel="noreferrer">
        Antonio González
      </a>
    </div>
  );
};

export default Footer;
