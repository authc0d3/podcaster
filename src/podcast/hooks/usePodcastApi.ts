import { useQuery } from "@tanstack/react-query";
import { Podcast, PodcastEpisode } from "@/common/dtos";
import { getPodcastEpisodes, getPodcasts } from "@/podcast/apis";
import { useMemo } from "react";

interface UsePodcastApiParams {
  readonly podcastId?: string;
  readonly episodeId?: number;
  readonly searchPodcast?: string;
}

interface UsePodcastApiReturn {
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly podcasts?: Readonly<Podcast[]>;
  readonly podcast?: Podcast;
  readonly episodes?: Readonly<PodcastEpisode[]>;
  readonly episode?: PodcastEpisode;
}

// TODO: Mock useQuery functions to test the hook
export function usePodcastApi(
  props?: UsePodcastApiParams
): UsePodcastApiReturn {
  const { podcastId, episodeId, searchPodcast } =
    props || ({} as UsePodcastApiParams);

  const searchPodcastLower = searchPodcast?.toLowerCase();

  const {
    data: podcastsData,
    isFetching: isFetchingPodcasts,
    isError: isErrorPodcasts,
  } = useQuery(["podcasts"], getPodcasts);

  const {
    data: episodes,
    isFetching: isFetchingEpisodes,
    isError: isErrorEpisodes,
  } = useQuery(
    [`podcast_detail_${podcastId}`],
    () => getPodcastEpisodes(podcastId || ""),
    { enabled: !!podcastId }
  );

  // Memoize calculated data to improve performance
  const podcasts = useMemo(
    () =>
      podcastsData?.filter(
        ({ name, author }) =>
          !searchPodcastLower ||
          name.toLowerCase().includes(searchPodcastLower) ||
          author.toLowerCase().includes(searchPodcastLower)
      ),
    [searchPodcastLower, podcastsData]
  );
  const podcast = useMemo(
    () => podcasts?.find(({ id }) => id === podcastId),
    [podcastId, podcastsData]
  );
  const episode = useMemo(
    () => episodes?.find(({ id }) => id === episodeId),
    [episodeId, episodes]
  );

  return {
    isLoading: isFetchingPodcasts || isFetchingEpisodes,
    isError: isErrorPodcasts || isErrorEpisodes,
    podcasts,
    podcast,
    episodes,
    episode,
  };
}
