import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PageContainer } from "@/common/components";
import { getPodcastDetails } from "@/podcast/apis";
import { PodcastEpisodeList, PodcastInfoCard } from "@/podcast/components";
import { PodcastDetailsLocationState } from "./types";
import styles from "./podcastDetailsView.module.scss";

const PodcastDetailsView: FC = () => {
  const location = useLocation();
  const { podcast } = location.state as PodcastDetailsLocationState;
  const {
    data: episodes,
    isFetching,
    isError,
  } = useQuery([`podcast_detail_${podcast.id}`], () =>
    getPodcastDetails(podcast.id || "")
  );

  return (
    <PageContainer
      name="podcast details"
      isLoading={isFetching}
      isError={isError}
    >
      <div className={styles.podcastDetails}>
        <div className={styles.left}>
          <PodcastInfoCard podcast={podcast} />
        </div>
        <div className={styles.right}>
          {episodes && <PodcastEpisodeList episodes={episodes} />}
        </div>
      </div>
    </PageContainer>
  );
};

export default PodcastDetailsView;
