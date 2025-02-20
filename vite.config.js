import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';
import babel from "vite-plugin-babel";
export default defineConfig({
    plugins: [
        babel(),
        react(),
        symfonyPlugin(),
        
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js",
                register: "./assets/register.js",
            },
        }
    },
});
