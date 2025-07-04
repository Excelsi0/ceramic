import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    optimizeDeps: {
    exclude: ['fsevents'],
  }
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                catalog: resolve(__dirname, "catalog/index.html"),
                blog: resolve(__dirname, "blog/index.html"),
                about: resolve(__dirname, "about/index.html"),
            },
        },
    },
});
