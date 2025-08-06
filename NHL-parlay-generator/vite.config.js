import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // any request starting with /api/nhl will be forwarded...
      "/api/nhl": {
        target: "https://api-web.nhle.com/v1/partner-game/US/now",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nhl/, ""),
      },
    },
  },
});
