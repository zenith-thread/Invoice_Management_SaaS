import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true, // Ensure that the SVGs are exported as default
    }),
    viteCompression({
      algorithm: "gzip", // or 'brotliCompress' for brotli
      ext: ".gz", // file extension after compression
      deleteOriginFile: false, // whether to delete the original uncompressed file
    }),
  ],
});
