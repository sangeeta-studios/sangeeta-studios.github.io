import { site } from '#lib/site.js';
import { legalPages } from '#lib/server/legal.js';

export const prerender = true;

export function GET() {
	const paths = ['/', ...Object.keys(legalPages).map((slug) => `/${slug}`)];
	const urls = paths
		.map((path) => `\t<url><loc>${new URL(path, site.url).href}</loc></url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
