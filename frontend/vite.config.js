import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "../static/dist"),
        emptyOutDir: true,
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, "src/matchday/main.jsx"),
            formats: ["es"],
            fileName: () => "matchday-island.js",
        },
    },
});
