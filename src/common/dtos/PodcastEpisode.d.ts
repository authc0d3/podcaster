export interface PodcastEpisodeDTO {
  readonly trackId: number;
  readonly trackName: string;
  readonly releaseDate: string;
  readonly trackTimeMillis?: number;
  readonly episodeUrl: string;
  readonly description?: string;
}

export interface PodcastEpisodesResponse {
  readonly resultCount: number;
  readonly results: PodcastEpisodeDTO[];
}

export interface PodcastEpisode {
  readonly id: number;
  readonly title: string;
  readonly date: string;
  readonly duration: string;
  readonly trackUrl: string;
  readonly description?: string;
}
