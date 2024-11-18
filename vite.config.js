import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
		  external: ['ol/ol.css'], // Exclude the CSS from the build
		},
	  },
	
});
