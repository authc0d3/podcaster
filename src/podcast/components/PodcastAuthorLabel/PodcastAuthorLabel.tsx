import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PodcastAuthorLabelProps } from "./types";
import styles from "./podcastAuthorLabel.module.scss";

const PodcastAuthorLabel: FC<PodcastAuthorLabelProps> = ({ name }) => (
  <div className={styles.author}>
    <FontAwesomeIcon icon="microphone" /> {name}
  </div>
);

export default PodcastAuthorLabel;
