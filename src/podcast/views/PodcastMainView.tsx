import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "@/common/components";
import {
  HOME_ROUTE,
  PODCAST_DETAIL_ROUTE,
  PODCAST_EPISODE_ROUTE,
} from "@/common/data";
import { PodcastDetailsView, PodcastListView } from "@/podcast/views";

const PodcastMainView: FC = () => (
  <Routes>
    {[PODCAST_DETAIL_ROUTE, PODCAST_EPISODE_ROUTE].map((route) => (
      <Route key={route} path={route} element={<PodcastDetailsView />} />
    ))}
    <Route path="/" element={<PodcastListView />} />
    <Route path="*" element={<Redirect to={HOME_ROUTE} />} />
  </Routes>
);

export default PodcastMainView;
