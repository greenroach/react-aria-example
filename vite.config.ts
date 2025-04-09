import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@tokens",
        replacement: fileURLToPath(
          new URL("./src/components/tokens", import.meta.url),
        ),
      },
    ],
  },
});
