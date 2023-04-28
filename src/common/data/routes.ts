import { PRODUCTION_MODE } from "../utils";

// Route params
export const PODCAST_ID_PARAM = ":podcastId";
export const PODCAST_EPISODE_ID_PARAM = ":episodeId";

// Routes
export const HOME_ROUTE = "/";
export const PODCAST_DETAIL_ROUTE = `${HOME_ROUTE}podcast/${PODCAST_ID_PARAM}`;
export const PODCAST_EPISODE_ROUTE = `${PODCAST_DETAIL_ROUTE}/episode/${PODCAST_EPISODE_ID_PARAM}`;

// Main router base path
export const APP_BASE_PATH = PRODUCTION_MODE ? "/podcaster" : HOME_ROUTE;
