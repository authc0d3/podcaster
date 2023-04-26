import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";

const cacheTime = import.meta.env.VITE_CACHE_STALE_TIME || 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: cacheTime,
    },
  },
});

export const persister = createSyncStoragePersister({
  key: "PODCASTER",
  storage: window.localStorage,
});
