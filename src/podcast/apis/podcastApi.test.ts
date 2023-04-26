import { getPodcastEpisodes, getPodcasts } from "./podcastApi";

describe("podcastApi", () => {
  let podcastId: string;

  it("should load podcasts", async () => {
    const podcasts = await getPodcasts();
    expect(podcasts?.length).toBe(100);
    podcastId = podcasts.at(0)?.id || "";
  });

  it("should load podcast episodes", async () => {
    const episodes = await getPodcastEpisodes(podcastId);
    expect(episodes?.length).toBeGreaterThan(0);
  });
});
