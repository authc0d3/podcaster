import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Redirect } from "@/common/components";
import { PodcasterContextProvider } from "@/common/context";
import {
  HOME_ROUTE,
  PODCAST_DETAIL_ROUTE,
  PODCAST_EPISODE_ROUTE,
} from "@/common/data";
import { PodcastView, PodcastListView } from "@/podcast/views";
import AppLayout from "./layouts/AppLayout";
import "./App.scss";
import { queryClient, persister } from "./apis";

const App: FC = () => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <PodcasterContextProvider>
      <HelmetProvider>
        <BrowserRouter
          basename={import.meta.env.VITE_TESTING_MODE ? "/" : "/podcaster"}
        >
          <AppLayout>
            <Routes>
              {[PODCAST_DETAIL_ROUTE, PODCAST_EPISODE_ROUTE].map((route) => (
                <Route key={route} path={route} element={<PodcastView />} />
              ))}
              <Route path={HOME_ROUTE} element={<PodcastListView />} />
              <Route path="*" element={<Redirect to={HOME_ROUTE} />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </HelmetProvider>
    </PodcasterContextProvider>
  </PersistQueryClientProvider>
);

export default App;
