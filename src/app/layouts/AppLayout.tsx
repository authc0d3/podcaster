import { ReactNode } from "react";
import { Header, Footer } from "@/app/components";
import styles from "./appLayout.module.scss";

interface AppLayoutProps {
  readonly children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
}

export default AppLayout;
