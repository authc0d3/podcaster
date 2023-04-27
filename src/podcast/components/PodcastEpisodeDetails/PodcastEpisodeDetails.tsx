import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@/common/components";
import { useLoading } from "@/common/hooks";
import { sanitizeHtml } from "@/common/utils";
import { PodcastEpisodeProps } from "./types";
import styles from "./podcastEpisode.module.scss";

const PodcastEpisodeDetails: FC<PodcastEpisodeProps> = ({ episode }) => {
  const { title, description, trackUrl } = episode;
  const { setIsLoading } = useLoading();

  function handleOnLoadedAudio(): void {
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    return () => setIsLoading(false);
  }, []);

  if (!episode) return null;

  return (
    <div className={styles.episodeCard}>
      <div className={styles.title}>
        <h3>
          <FontAwesomeIcon icon="podcast" />
          {title}
        </h3>
      </div>
      <div className={styles.audio}>
        <audio
          autoPlay
          playsInline
          controls
          src={trackUrl}
          className={styles.controls}
          onLoadedData={handleOnLoadedAudio}
        >
          <Alert
            text="Your browser does not support the audio element."
            type="warning"
            showIcon
          />
        </audio>
      </div>
      <div
        role="article"
        className={styles.description}
        dangerouslySetInnerHTML={sanitizeHtml(description)}
      ></div>
    </div>
  );
};

export default PodcastEpisodeDetails;
