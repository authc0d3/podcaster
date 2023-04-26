import { FC } from "react";
import { Link } from "react-router-dom";
import { PODCAST_DETAIL_ROUTE, PODCAST_ID_PARAM } from "@/common/data";
import { PodcastAuthorLabel } from "@/podcast/components";
import styles from "./podcastItem.module.scss";
import { PodcastItemProps } from "./types";

const PodcastItem: FC<PodcastItemProps> = ({ podcast }) => (
  <Link
    to={PODCAST_DETAIL_ROUTE.replace(PODCAST_ID_PARAM, podcast.id)}
    className={styles.podcastItem}
    title={`${podcast.name} - ${podcast.author}`}
    role="podcast"
  >
    <img src={podcast.imageUrl} alt={podcast.name} loading="lazy" />
    <div className={styles.podcastBox}>
      <div className={styles.podcastDescription}>
        <h4>{podcast.name}</h4>
        <PodcastAuthorLabel name={podcast.author} />
      </div>
    </div>
  </Link>
);

export default PodcastItem;
