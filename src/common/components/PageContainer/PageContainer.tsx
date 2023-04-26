import { FC, useEffect } from "react";
import { useLoading } from "@/common/hooks";
import { Alert, ScrollRestorator } from "@/common/components";
import { PageContainerProps } from "./types";
import styles from "./pageContainer.module.scss";

const PageContainer: FC<PageContainerProps> = ({
  children,
  name,
  isLoading,
  isError,
}) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(isLoading || false);
  }, [isLoading]);

  if (isLoading) {
    return (
      <Alert
        text={`Loading${name ? ` ${name}` : ""}, please wait...`}
        type="loading"
        className={styles.alert}
        showIcon
      />
    );
  }

  if (isError) {
    return (
      <Alert
        text={`Ups! An error occurred while loading ${name || "the page"}`}
        type="error"
        className={styles.alert}
        showIcon
      />
    );
  }
  return (
    <>
      {children}
      <ScrollRestorator />
    </>
  );
};

export default PageContainer;
