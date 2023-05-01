import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PageContainer } from "@/common/components";
import {
  PodcastEpisodeList,
  PodcastEpisodeDetails,
  PodcastInfoCard,
} from "@/podcast/components";
import styles from "./podcastView.module.scss";
import { usePodcastApi } from "@/podcast/hooks";

const PodcastView: FC = () => {
  const { podcastId, episodeId } = useParams();
  const { podcast, episode, episodes, isLoading, isError } = usePodcastApi({
    podcastId,
    episodeId: Number(episodeId),
  });

  const pageTitle = `Podcaster - ${episode?.title || podcast?.name} by ${
    podcast?.author
  }`;

  const leftColumn: ReactNode = podcast ? (
    <PodcastInfoCard podcast={podcast} />
  ) : null;

  const rightColumn: ReactNode = episode ? (
    <PodcastEpisodeDetails episode={episode} />
  ) : episodes && podcastId ? (
    <PodcastEpisodeList episodes={episodes} podcastId={podcastId} />
  ) : null;

  return (
    <PageContainer
      name="podcast details"
      isLoading={isLoading}
      isError={isError}
    >
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className={styles.podcastDetails} role="details">
        {leftColumn}
        {rightColumn}
      </div>
    </PageContainer>
  );
};

export default PodcastView;
