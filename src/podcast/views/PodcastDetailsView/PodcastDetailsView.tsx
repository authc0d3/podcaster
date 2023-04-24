import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PageContainer, Redirect } from "@/common/components";
import { HOME_ROUTE } from "@/common/data";
import { getPodcastDetails } from "@/podcast/apis";
import {
  PodcastEpisode,
  PodcastEpisodeList,
  PodcastInfoCard,
} from "@/podcast/components";
import { PodcastDetailsLocationState } from "./types";
import styles from "./podcastDetailsView.module.scss";

const PodcastDetailsView: FC = () => {
  const location = useLocation();
  const { podcast, episode } = (location.state ||
    {}) as PodcastDetailsLocationState;
  const {
    data: episodes,
    isFetching,
    isError,
  } = useQuery([`podcast_detail_${podcast?.id}`], () =>
    getPodcastDetails(podcast?.id || "")
  );

  if (!podcast) return <Redirect to={HOME_ROUTE} />;
  return (
    <PageContainer
      name="podcast details"
      isLoading={isFetching}
      isError={isError}
    >
      <Helmet>
        <title>
          Podcaster - {`${episode?.title || podcast.name} by ${podcast.author}`}
        </title>
      </Helmet>
      <div className={styles.podcastDetails}>
        <PodcastInfoCard podcast={podcast} />
        <Routes>
          <Route
            path=":podcastId/episode/:episodeId"
            element={<PodcastEpisode />}
          />
          <Route
            path=":podcastId"
            element={
              <PodcastEpisodeList podcast={podcast} episodes={episodes} />
            }
          />
        </Routes>
      </div>
    </PageContainer>
  );
};

export default PodcastDetailsView;
