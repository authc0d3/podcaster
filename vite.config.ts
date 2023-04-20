import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootPath = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
});
