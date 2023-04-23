import { FC, ReactNode, createContext, useState } from "react";

interface PodcasterContextValue {
  readonly loadingView: boolean;
  readonly setLoadingView: (state: boolean) => void;
}

interface PodcasterContextProviderProps {
  readonly children: ReactNode;
}

export const PodcasterContext = createContext<PodcasterContextValue>({
  loadingView: false,
  setLoadingView: () => undefined,
});

export const PodcasterContextProvider: FC<PodcasterContextProviderProps> = ({
  children,
}) => {
  const [loadingView, setLoadingView] = useState<boolean>(false);
  return (
    <PodcasterContext.Provider value={{ loadingView, setLoadingView }}>
      {children}
    </PodcasterContext.Provider>
  );
};
