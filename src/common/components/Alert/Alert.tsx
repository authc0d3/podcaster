import { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertCase, AlertProps } from "./types";
import styles from "./alert.module.scss";

const alertIconName: Readonly<AlertCase> = {
  info: "info-circle",
  success: "check-circle",
  warning: "triangle-exclamation",
  error: "circle-exclamation",
  loading: "spinner",
};

const Alert: FC<AlertProps> = ({ text, type, icon, showIcon, className }) => {
  const iconName = icon || alertIconName[type || "info"];
  return (
    <div
      className={classNames(
        styles.alert,
        styles[type || "info"],
        className || ""
      )}
      role="alert"
    >
      {showIcon && (
        <FontAwesomeIcon icon={iconName} spin={type === "loading"} role="img" />
      )}
      {text}
    </div>
  );
};

export default Alert;
