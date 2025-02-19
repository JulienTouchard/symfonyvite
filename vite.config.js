import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';
import babel from "vite-plugin-babel";
export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
        babel(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js",
                register: "./assets/register.jsx",
            },
        }
    },
});
