import { Podcast, PodcastEpisode } from "@/common/dtos";

export interface PodcastEpisodeListProp {
  readonly podcast: Podcast;
  readonly episodes?: Readonly<PodcastEpisode[]>;
}
