import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // algorithm: "gzip", // or 'brotliCompress' for brotli
      // ext: ".gz", // file extension after compression
      algorithm: "brotliCompress", // Change to 'gzip' if you prefer Gzip
      ext: ".br", // Use '.gz' for Gzip
      deleteOriginFile: false, // whether to delete the original uncompressed file
    }),
    visualizer({ open: true }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
