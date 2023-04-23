import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { HOME_ROUTE, PODCAST_DETAIL_ROUTE } from "@/common/data";
import { PodcastDetailsView, PodcastListView } from "@/podcast/views";
import { PodcasterContextProvider } from "@/common/contexts";
import AppLayout from "./layouts/AppLayout";
import "./App.scss";

const staleTime = import.meta.env.VITE_CACHE_STALE_TIME || 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime,
    },
  },
});

const persister = createSyncStoragePersister({
  key: "PODCASTER",
  storage: window.localStorage,
});

const App: FC = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <PodcasterContextProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path={HOME_ROUTE} element={<PodcastListView />} />
              <Route
                path={`${PODCAST_DETAIL_ROUTE}/:podcastId`}
                element={<PodcastDetailsView />}
              />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </PodcasterContextProvider>
    </PersistQueryClientProvider>
  );
};

export default App;
