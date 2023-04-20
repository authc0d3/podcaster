import { Podcast, PodcastDto, PodcastResponse } from "@/common/dtos";
import { podcastDtoToPodcast } from "../utils";

export const getPodcasts = (): Promise<Readonly<Podcast[]>> => {
  return fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/us/rss/toppodcasts/limit=100/genre=1310/json`
  )
    .then((response) => response.json())
    .then((rawData: PodcastResponse) => rawData.feed.entry)
    .then((data: Readonly<PodcastDto[]>) => data.map(podcastDtoToPodcast));
};
