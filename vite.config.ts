import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	root: './',
	base: "/vitaly-pro-hub",
	build: {
		outDir: './dist',
		rollupOptions: {
			input: [
				path.resolve('./', './index.html')
			],
		}
	},
	server: {
		proxy: {
			'/send': 'http://localhost:3000'
		}
	},
	plugins: [react()],
})
