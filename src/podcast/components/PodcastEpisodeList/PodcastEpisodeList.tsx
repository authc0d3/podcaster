import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PodcastEpisodeListProps } from "./types";
import styles from "./podcastEpisodeList.module.scss";

const PodcastEpisodeList: FC<PodcastEpisodeListProps> = ({ episodes }) => {
  return (
    <div className={styles.episodes}>
      <div className={styles.title}>
        <h3>Episodes</h3>
        <div className={styles.count}>
          <FontAwesomeIcon icon="microphone" /> {episodes.length}
        </div>
      </div>
      <div className={styles.table}>
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
        {episodes.map(({ id, title, date, duration }) => (
          <div key={id} className={styles.row}>
            <div className={styles.cell}>
              <FontAwesomeIcon icon="play-circle" />
              {title}
            </div>
            <div className={styles.cell}>{date}</div>
            <div className={styles.cell}>{duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastEpisodeList;
