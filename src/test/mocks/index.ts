import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
} from "@/common/dtos";

// Data mocks
export const mockedPodcastDto: PodcastDto = {
  id: {
    attributes: {
      "im:id": "12345",
    },
  },
  "im:name": { label: "Lorem ipsum" },
  "im:artist": { label: "John Doe" },
  "im:image": [{ label: "logo.png" }],
  summary: { label: "Lorem ipsum dolor sit amet" },
};
export const mockedPodcast: Podcast = {
  id: "12345",
  name: "Lorem ipsum",
  author: "John Doe",
  imageUrl: "logo.png",
  summary: "Lorem ipsum dolor sit amet",
};
export const mockedEpisodeDto: PodcastEpisodeDTO = {
  trackId: 1,
  trackName: "Lorem ipsum track",
  releaseDate: "1970-01-01T04:00:00",
  trackTimeMillis: 2530000,
  episodeUrl: "file.mp3",
  description: "Lorem ipsum dolor sit amet",
};
export const mockedEpisode: PodcastEpisode = {
  id: 1,
  title: "Lorem ipsum track",
  date: "01/01/1970",
  duration: "42:10",
  trackUrl: "file.mp3",
  description: "Lorem ipsum dolor sit amet",
};

// react-router-dom mocked functions
export const mockedUseNavigate = vi.fn();
export const mockedUseLocation = vi.fn().mockReturnValue({
  state: {
    episode: mockedEpisode,
  },
});
