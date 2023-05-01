import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Redirect } from "@/common/components";
import { PodcasterContextProvider } from "@/common/context";
import { APP_BASE_PATH, HOME_ROUTE } from "@/common/data";
import { PodcastMainView } from "@/podcast/views";
import { AppLayout } from "@/app/layouts";
import "./App.scss";
import { queryClient, persister } from "./apis";

const App: FC = () => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <PodcasterContextProvider>
      <HelmetProvider>
        <BrowserRouter basename={APP_BASE_PATH}>
          <AppLayout>
            <Routes>
              <Route path={`${HOME_ROUTE}*`} element={<PodcastMainView />} />
              <Route path="*" element={<Redirect to={HOME_ROUTE} />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </HelmetProvider>
    </PodcasterContextProvider>
  </PersistQueryClientProvider>
);

export default App;
