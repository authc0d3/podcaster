import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PODCAST_EPISODE_ID_PARAM,
  PODCAST_EPISODE_ROUTE,
  PODCAST_ID_PARAM,
} from "@/common/data";
import { PodcastEpisodeListProp } from "./types";
import styles from "./podcastEpisodeList.module.scss";

const PodcastEpisodeList: FC<PodcastEpisodeListProp> = ({
  podcastId,
  episodes,
}) => {
  const getEpisodeLink = (episodeId: number): string =>
    PODCAST_EPISODE_ROUTE.replace(PODCAST_ID_PARAM, podcastId || "").replace(
      PODCAST_EPISODE_ID_PARAM,
      episodeId.toString()
    );

  return (
    <div className={styles.episodes}>
      <div className={styles.title}>
        <h3>
          <FontAwesomeIcon icon="list" />
          Episodes
        </h3>
        <div className={styles.count}>
          <FontAwesomeIcon icon="microphone" />{" "}
          <span data-testid="count">{episodes?.length || 0}</span>
        </div>
      </div>
      {episodes?.length ? (
        <div className={styles.table} role="list">
          <div className={styles.head}>
            <div className={styles.cell}>
              <FontAwesomeIcon icon="play" />
              Title
            </div>
            <div className={styles.cell}>
              <FontAwesomeIcon icon="calendar-alt" />
              Date
            </div>
            <div className={styles.cell}>
              <FontAwesomeIcon icon="clock" />
              Duration
            </div>
          </div>
          {episodes?.map((episode) => {
            const { id, title, date, duration } = episode;
            return (
              <Link
                key={id}
                to={getEpisodeLink(id)}
                className={styles.row}
                role="episode"
              >
                <div className={styles.cell}>
                  <FontAwesomeIcon icon="play-circle" />
                  {title}
                </div>
                <div className={styles.cell}>{date}</div>
                <div className={styles.cell}>{duration}</div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={styles.noEpisodes}>
          There is no episodes to listen to.
        </div>
      )}
    </div>
  );
};

export default PodcastEpisodeList;
