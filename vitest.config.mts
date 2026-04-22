import { loadEnv } from 'vite'
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  test: {
    // Load variables from .env files into process.env and import.meta.env
    env: loadEnv(mode, process.cwd(), ''),
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
}));
