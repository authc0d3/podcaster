import { useContext } from "react";
import { PodcasterContext } from "../contexts";

interface UseLoadingReturn {
  readonly isLoading: boolean;
  readonly setIsLoading: (isLoading: boolean) => void;
}

export function useLoading(): UseLoadingReturn {
  const { loadingView: isLoading, setLoadingView: setIsLoading } =
    useContext(PodcasterContext);
  return {
    isLoading,
    setIsLoading,
  };
}
