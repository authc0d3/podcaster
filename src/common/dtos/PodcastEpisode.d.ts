export interface PodcastEpisodeDTO {
  readonly wrapperType: string;
  readonly kind: string;
  readonly artistId: number;
  readonly collectionId: number;
  readonly trackId: number;
  readonly artistName: string;
  readonly collectionName: string;
  readonly trackName: string;
  readonly collectionCensoredName: string;
  readonly trackCensoredName: string;
  readonly artistViewUrl: string;
  readonly collectionViewUrl: string;
  readonly feedUrl: string;
  readonly trackViewUrl: string;
  readonly artworkUrl30: string;
  readonly artworkUrl60: string;
  readonly artworkUrl100: string;
  readonly collectionPrice: number;
  readonly trackPrice: number;
  readonly collectionHdPrice: number;
  readonly releaseDate: string;
  readonly collectionExplicitness: string;
  readonly trackExplicitness: string;
  readonly trackCount: number;
  readonly trackTimeMillis?: number;
  readonly country: string;
  readonly currency: string;
  readonly primaryGenreName: string;
  readonly artworkUrl600: string;
  readonly genreIds: string[];
  readonly genres: string[];
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
