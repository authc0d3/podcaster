/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootPath = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: [{ find: "@", replacement: rootPath }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${rootPath}/common/styles/_index";`,
      },
    },
  },
  test: {
    globals: true,
    exclude: ["node_modules/", "src/test/setupTests.ts"],
    environment: "jsdom",
    setupFiles: `${rootPath}/test/setupTest.ts`,
    css: true,
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
