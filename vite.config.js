import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: '/index.html',
        },
    },
    server: {
        port: 3000,
        open: true,
        fs: {
            strict: false,
        },
    },
});
