import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoading } from "@/common/hooks";
import { sanitizeHtml } from "@/common/utils";
import { PodcastEpisodeLocationState } from "./types";
import styles from "./podcastEpisode.module.scss";

const PodcastEpisode: FC = () => {
  const { setIsLoading } = useLoading();
  const location = useLocation();
  const {
    episode: { title, description, trackUrl },
  } = location.state as PodcastEpisodeLocationState;

  function handleOnLoadedAudio(): void {
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className={styles.episodeCard}>
      <div className={styles.title}>
        <h3>
          <FontAwesomeIcon icon="podcast" />
          {title}
        </h3>
      </div>
      <audio
        src={trackUrl}
        controls
        autoPlay
        className={styles.controls}
        onLoadedData={handleOnLoadedAudio}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={sanitizeHtml(description)}
      ></div>
    </div>
  );
};

export default PodcastEpisode;
