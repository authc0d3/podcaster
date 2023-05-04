import { mockedPodcast } from "@/test/mocks";
import { getPodcastEpisodes, getPodcasts } from "./podcastApi";

describe("podcastApi", () => {
  it("should load podcasts", async () => {
    const podcasts = await getPodcasts();
    expect(podcasts?.length).toBe(1);
  });

  it("should load podcast episodes", async () => {
    const episodes = await getPodcastEpisodes(mockedPodcast.id);
    expect(episodes?.length).toBeGreaterThan(0);
  });
});
