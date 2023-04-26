import {
  mockedEpisode,
  mockedEpisodeDto,
  mockedPodcast,
  mockedPodcastDto,
} from "@/test/mocks";
import {
  podcastDtoToPodcast,
  podcastEpisodeDtoToEpisode,
} from "./podcastDtoUtils";
import deepEqual from "deep-equal";

describe("podcastDtoUtils", () => {
  it("should transform PodcastDto to Podcast", () => {
    const result = podcastDtoToPodcast(mockedPodcastDto);
    expect(deepEqual(result, mockedPodcast)).toBe(true);
  });

  it("should transform PodcastEpisodeDto to PodcastEpisode", () => {
    const result = podcastEpisodeDtoToEpisode(mockedEpisodeDto);
    expect(deepEqual(result, mockedEpisode)).toBe(true);
  });
});
