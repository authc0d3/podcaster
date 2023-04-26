import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
} from "@/common/dtos";
import { toDate, toDuration } from "@/common/utils";

export const podcastDtoToPodcast = (data: PodcastDto): Podcast => ({
  id: data.id.attributes["im:id"],
  name: data["im:name"].label,
  author: data["im:artist"].label,
  imageUrl: data["im:image"].pop()?.label,
  summary: data.summary.label,
});

export const podcastEpisodeDtoToEpisode = (
  data: PodcastEpisodeDTO
): PodcastEpisode => ({
  id: data.trackId,
  title: data.trackName,
  date: toDate(data.releaseDate),
  duration: toDuration(data?.trackTimeMillis),
  description: data.description?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
  trackUrl: data.episodeUrl,
});
