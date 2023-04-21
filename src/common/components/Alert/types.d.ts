import { IconName } from "@fortawesome/fontawesome-svg-core";

export type AlertType = "info" | "success" | "warning" | "error" | "loading";

export interface AlertProps {
  readonly text: string;
  readonly type?: AlertType;
  readonly icon?: IconName;
  readonly showIcon?: boolean;
  readonly className?: string;
}

export type AlertCase = {
  // eslint-disable-next-line no-unused-vars
  readonly [key in AlertType]: IconName;
};
