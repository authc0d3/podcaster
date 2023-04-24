import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()} -
      <span>
        Dev. by{" "}
        <a href="https://programadorweb.dev" target="_blank" rel="noreferrer">
          Antonio González
        </a>
      </span>{" "}
      -
      <span>
        Contents by{" "}
        <a
          href="https://www.apple.com/apple-podcasts/"
          target="_blank"
          rel="noreferrer"
        >
          Apple Podcasts &copy;
        </a>
      </span>
    </div>
  );
};

export default Footer;
