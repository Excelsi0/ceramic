import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
    plugins: [
        // Without Data
        ViteEjsPlugin(),
    ],
    resolve: {
        alias: {
            fsevents: false,
        },
    },
    optimizeDeps: {
        exclude: ["fsevents"],
        entries: [],
    },
    ssr: {
        noExternal: ["fsevents"],
    },
});
