import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { HOME_ROUTE, PODCAST_ROUTE } from "@/common/data";
import { PodcastDetailsView, PodcastListView } from "@/podcast/views";
import { Redirect } from "@/common/components";
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
        <HelmetProvider>
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path={HOME_ROUTE} element={<PodcastListView />} />
                <Route
                  path={`${PODCAST_ROUTE}/*`}
                  element={<PodcastDetailsView />}
                />
                <Route path="*" element={<Redirect to={HOME_ROUTE} />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </HelmetProvider>
      </PodcasterContextProvider>
    </PersistQueryClientProvider>
  );
};

export default App;
