import { PodcastItemProps } from "./types";
import styles from "./podcastItem.module.scss";
import { Link } from "react-router-dom";
import { PODCAST_DETAIL_ROUTE } from "@/common/data";

function PodcastItem({ podcast }: PodcastItemProps) {
  return (
    <Link
      to={`${PODCAST_DETAIL_ROUTE}/${podcast.id}`}
      className={styles.podcastItem}
    >
      <img src={podcast.imageUrl} alt={podcast.name} loading="lazy" />
      <div className={styles.podcastBox}>
        <div className={styles.podcastDescription}>
          <h4>{podcast.name}</h4>
          <div className={styles.author}>Author: {podcast.author}</div>
        </div>
      </div>
    </Link>
  );
}

export default PodcastItem;
