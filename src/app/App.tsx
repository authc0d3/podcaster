import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { HOME_ROUTE } from "@/common/data";
import { PodcastListView } from "@/podcast/views";
import "./App.scss";
import AppLayout from "./layouts/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const App: FC = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path={HOME_ROUTE} element={<PodcastListView />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
};

export default App;
