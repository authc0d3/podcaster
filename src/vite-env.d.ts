/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**
   * The URL base to make all API requests
   */
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
