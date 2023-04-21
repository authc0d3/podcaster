import { FC, ReactNode } from "react";
import { Header, Footer } from "@/app/components";
import styles from "./appLayout.module.scss";

interface AppLayoutProps {
  readonly children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
