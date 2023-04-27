import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            Dev. by{" "}
            <a
              href="https://programadorweb.dev"
              target="_blank"
              rel="noreferrer"
            >
              Antonio González
            </a>
          </span>
        </div>
        <div>
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
      </div>
    </footer>
  );
};

export default Footer;
