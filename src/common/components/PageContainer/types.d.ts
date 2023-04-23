import { ReactNode } from "react";

export interface PageContainerProps {
  readonly children: ReactNode;
  readonly name?: string;
  readonly isLoading?: boolean;
  readonly isError?: boolean;
}
