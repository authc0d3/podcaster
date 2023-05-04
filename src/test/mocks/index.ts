import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  Podcast,
  PodcastDto,
  PodcastEpisode,
  PodcastEpisodeDTO,
  PodcastEpisodesResponse,
  PodcastResponse,
} from "@/common/dtos";
import {
  API_GET_EPISODES_URL,
  API_GET_POSTS_URL,
  getApiUrl,
} from "@/podcast/apis";

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

const mockedPodcastResponse: PodcastResponse = {
  feed: {
    entry: [mockedPodcastDto],
  },
};

const mockedPodcastEpisodesResponse: PodcastEpisodesResponse = {
  resultCount: 1,
  // We remove first because is not a real episode, so we need to add 2 results
  results: [mockedEpisodeDto, mockedEpisodeDto],
};

export const apiHandlers = [
  rest.get(getApiUrl(API_GET_POSTS_URL), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedPodcastResponse));
  }),
  rest.get(
    getApiUrl(API_GET_EPISODES_URL.replace(":podcastId", mockedPodcast.id)),
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedPodcastEpisodesResponse));
    }
  ),
];

export const mockApiServer = setupServer(...apiHandlers);

// react-router-dom mocked functions
export const mockedUseNavigate = vi.fn();
export const mockedUseLocation = vi.fn().mockReturnValue({
  state: {
    episode: mockedEpisode,
  },
});
