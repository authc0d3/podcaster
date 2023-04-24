import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
  PodcastEpisodesResponse,
  PodcastResponse,
} from "@/common/dtos";
import { podcastDtoToPodcast, podcastEpisodeDtoToEpisode } from "../utils";

export function getPodcasts(): Promise<Readonly<Podcast[]>> {
  return fetch(
    `${import.meta.env.VITE_ALLORIGINS_URL}${encodeURIComponent(
      `${
        import.meta.env.VITE_PODCAST_API_BASE_URL
      }/us/rss/toppodcasts/limit=100/genre=1310/json`
    )}`
  )
    .then((response) => response.json())
    .then((rawData: PodcastResponse) => rawData.feed.entry)
    .then((data: Readonly<PodcastDto[]>) => data.map(podcastDtoToPodcast));
}

export function getPodcastDetails(
  podcastId: string
): Promise<Readonly<PodcastEpisode[]> | undefined> {
  return fetch(
    `${import.meta.env.VITE_ALLORIGINS_URL}${encodeURIComponent(
      `${
        import.meta.env.VITE_PODCAST_API_BASE_URL
      }/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`
  )
    .then((response) => response.json())
    .then(({ results }: PodcastEpisodesResponse) => {
      // Remove first result because is not a real episode
      if (results && results.length) results.shift();
      return results || [];
    })
    .then((data: Readonly<PodcastEpisodeDTO[]>) =>
      data.map(podcastEpisodeDtoToEpisode)
    );
}
