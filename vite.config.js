import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// Prerenders every route to plain HTML in build/. With the default
			// trailingSlash ('never'), /terms is written as terms.html, so the
			// old /privacy-policy.html and /terms.html URLs keep working.
			// GitHub Pages serves 404.html for unknown paths.
			adapter: adapter({ fallback: '404.html' }),
			// Absolute asset URLs, so 404.html works at any path depth.
			paths: { relative: false }
		})
	]
});
