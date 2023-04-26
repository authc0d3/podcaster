import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PODCAST_DETAIL_ROUTE, PODCAST_ID_PARAM } from "@/common/data";
import { PodcastAuthorLabel } from "@/podcast/components";
import { PodcastInfoCardProps } from "./types";
import styles from "./podcastInfoCard.module.scss";

const PodcastInfoCard: FC<PodcastInfoCardProps> = ({ podcast }) => {
  const { id, name, author, imageUrl, summary } = podcast;
  const navigate = useNavigate();

  function handleNavigateToPodcast(): void {
    navigate(PODCAST_DETAIL_ROUTE.replace(PODCAST_ID_PARAM, id), {
      state: { podcast },
    });
  }

  return (
    <div className={styles.podcastInfoCard} role="podcast">
      <button
        className={styles.about}
        onClick={handleNavigateToPodcast}
        role="button"
      >
        <img src={imageUrl} alt={name} role="img" />
        <div>
          <h2>{name}</h2>
          <PodcastAuthorLabel name={author} />
        </div>
      </button>
      <div className={styles.summary}>
        <h3>Description:</h3>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
};

export default PodcastInfoCard;
