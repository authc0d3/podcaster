import { FC } from "react";
import { PodcastAuthorLabel } from "../PodcastAuthorLabel";
import { PodcastInfoCardProps } from "./types";
import styles from "./podcastInfoCard.module.scss";

const PodcastInfoCard: FC<PodcastInfoCardProps> = ({ podcast }) => {
  const { name, author, imageUrl, summary } = podcast;
  return (
    <div className={styles.podcastInfoCard}>
      <img src={imageUrl} alt={name} />
      <div className={styles.about}>
        <h2>{name}</h2>
        <PodcastAuthorLabel name={author} />
      </div>
      <div className={styles.summary}>
        <h3>Description:</h3>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
};

export default PodcastInfoCard;
