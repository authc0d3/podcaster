import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
  PodcastEpisodesResponse,
  PodcastResponse,
} from "@/common/dtos";
import { TESTING_MODE } from "@/common/utils";
import {
  podcastDtoToPodcast,
  podcastEpisodeDtoToEpisode,
} from "@/podcast/utils";

export const ALLOW_ORIGINS_ENDPOINT = "/raw?url=";

export const API_GET_POSTS_URL =
  "/us/rss/toppodcasts/limit=100/genre=1310/json";

export const API_GET_EPISODES_URL =
  "/lookup?id=:podcastId&media=podcast&entity=podcastEpisode&limit=20";

export function getApiUrl(path: string, relative?: boolean): string {
  if (TESTING_MODE) {
    return `${import.meta.env.VITE_PODCAST_API_BASE_URL}${path
      .split("?")
      .at(0)}`;
  }

  const encodedUri = encodeURIComponent(
    `${import.meta.env.VITE_PODCAST_API_BASE_URL}${path}`
  );
  return `${
    !relative ? import.meta.env.VITE_ALLORIGINS_URL : ""
  }${ALLOW_ORIGINS_ENDPOINT}${encodedUri}`;
}

export function getPodcasts(): Promise<Readonly<Podcast[]>> {
  return fetch(getApiUrl(API_GET_POSTS_URL))
    .then((response) => response.json())
    .then((rawData: PodcastResponse) => rawData.feed.entry)
    .then((data: Readonly<PodcastDto[]>) => data.map(podcastDtoToPodcast));
}

export function getPodcastEpisodes(
  podcastId: string
): Promise<Readonly<PodcastEpisode[]> | undefined> {
  if (!podcastId) return Promise.resolve([]);
  return fetch(getApiUrl(API_GET_EPISODES_URL.replace(":podcastId", podcastId)))
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
