import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	root: './',
	port: 3000,
	open: true,
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: '/public/index.html',
		},
	},
	server: {
		open: true,
	},
});
