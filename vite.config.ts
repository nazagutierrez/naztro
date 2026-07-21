import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("gsap")) return "vendor-gsap";
            if (id.includes("motion")) return "vendor-motion";
            if (id.includes("lenis")) return "vendor-lenis";
            return "vendor";
          }
        },
      },
    },
  },
});
