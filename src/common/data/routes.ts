// Route params
export const PODCAST_ID_PARAM = ":podcastId";
export const PODCAST_EPISODE_ID_PARAM = ":episodeId";

// Routes
export const HOME_ROUTE = "/";
export const PODCAST_ROUTE = "/podcast";
export const PODCAST_DETAIL_ROUTE = `${PODCAST_ROUTE}/${PODCAST_ID_PARAM}`;
export const PODCAST_EPISODE_ROUTE = `${PODCAST_DETAIL_ROUTE}/episode/${PODCAST_EPISODE_ID_PARAM}`;
