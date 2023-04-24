import { Podcast, PodcastEpisode } from "@/common/dtos";

export interface PodcastDetailsRouteParams {
  readonly podcastId: string;
}
export interface PodcastDetailsLocationState {
  readonly podcast?: Podcast;
  readonly episode?: PodcastEpisode;
}
