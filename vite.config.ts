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
		host: '0.0.0.0',
		proxy: {
			'/vitaly-pro-hub/send': 'http://localhost:3000'
		}
	},
	preview: {
		host: '0.0.0.0',
		port: process.env.PORT ? Number(process.env.PORT) : 4173,
		allowedHosts: ['vitaly-pro-hub-client.onrender.com', 'localhost']
	},
	plugins: [react()],
})
