import react from "@vitejs/plugin-react-swc";

import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: path.resolve(__dirname, "./vitest.setup.ts"),
        coverage: {
            reporter: ["text", "json", "html"],
            include: ["src/**/*"],
            all: true,
            //thresholds: {
            //  lines: 100,
            //  functions: 100,
            //  branches: 100,
            //  statements: 100,
            //},
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
