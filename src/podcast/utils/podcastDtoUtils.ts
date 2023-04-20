import { Podcast, PodcastDto } from "@/common/dtos";

export const podcastDtoToPodcast = (data: PodcastDto): Podcast => ({
  id: data.id.attributes["im:id"],
  name: data["im:name"].label,
  author: data["im:artist"].label,
  imageUrl: data["im:image"].pop()?.label,
});
