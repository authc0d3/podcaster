import { Podcast, PodcastEpisode } from "@/common/dtos";

export interface PodcastEpisodeListProp {
  readonly podcastId: string;
  readonly episodes: Readonly<PodcastEpisode[]>;
}
