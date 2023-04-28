/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**
   * The cache stale time
   */
  readonly VITE_CACHE_STALE_TIME: number;

  /**
   * The URLs to AllOrigins service and API requests for podcasts
   */
  readonly VITE_ALLORIGINS_URL: string;
  readonly VITE_PODCAST_API_BASE_URL: string;

  /**
   * To check testing mode
   */
  readonly VITE_TESTING_MODE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
