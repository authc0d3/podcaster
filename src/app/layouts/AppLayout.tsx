import { FC, ReactNode } from "react";
import { Header, Footer } from "@/app/components";
import { ScrollRestorator } from "@/common/components";
import styles from "./appLayout.module.scss";

interface AppLayoutProps {
  readonly children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.appContainer}>{children}</div>
      </main>
      <Footer />
      <ScrollRestorator />
    </>
  );
};

export default AppLayout;
