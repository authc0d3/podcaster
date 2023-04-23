import { addSeconds, format, parseISO } from "date-fns";
import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
} from "@/common/dtos";
import { dateTimeFormat } from "@/common/utils";

export const podcastDtoToPodcast = (data: PodcastDto): Podcast => ({
  id: data.id.attributes["im:id"],
  name: data["im:name"].label,
  author: data["im:artist"].label,
  imageUrl: data["im:image"].pop()?.label,
  summary: data.summary.label,
});

export const podcastEpisodeDtoToEpisode = (
  data: PodcastEpisodeDTO
): PodcastEpisode => {
  const durationHelperDate = addSeconds(
    new Date(0),
    data?.trackTimeMillis || 0
  );
  return {
    id: data.trackId,
    title: data.trackName,
    date: format(parseISO(data.releaseDate), dateTimeFormat.L),
    duration: format(durationHelperDate, dateTimeFormat.MS),
  };
};
