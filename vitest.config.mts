import { loadEnv } from 'vite'
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

<<<<<<< Updated upstream
export default defineConfig({
  plugins: [react()],
=======
export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
>>>>>>> Stashed changes
  test: {
    // Load variables from .env files into process.env and import.meta.env
    env: loadEnv(mode, process.cwd(), ''),
    environment: "jsdom",
  },
}));
