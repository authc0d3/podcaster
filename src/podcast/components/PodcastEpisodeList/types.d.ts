import { PodcastEpisode } from "@/common/dtos";

export interface PodcastEpisodeListProps {
  readonly episodes: Readonly<PodcastEpisode[]>;
}
