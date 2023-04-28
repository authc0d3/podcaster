/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootPath = path.resolve(__dirname, "src");

export default defineConfig(({ mode }) => {
  const prod = mode === "production";
  return {
    base: prod ? "/podcaster" : "/",
    plugins: [react()],
    build: {
      sourcemap: prod,
      minify: prod,
    },
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
      environment: "jsdom",
      setupFiles: `${rootPath}/test/setupTest.ts`,
      css: true,
      testTimeout: 60000,
      hookTimeout: 60000,
    },
  };
});
