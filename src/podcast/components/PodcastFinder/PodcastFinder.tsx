import { FC, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PodcastFinderProps } from "./types";
import styles from "./podcastFinder.module.scss";

const PodcastFinder: FC<PodcastFinderProps> = ({ onSearch }) => (
  <div className={styles.podcastFinder}>
    <FontAwesomeIcon icon="search" />
    <input
      type="text"
      placeholder="Search podcasts by name or author..."
      onChange={(e: ChangeEvent<HTMLInputElement>): void =>
        onSearch(e.target.value)
      }
    />
  </div>
);

export default PodcastFinder;
