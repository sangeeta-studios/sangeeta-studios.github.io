import { error } from '@sveltejs/kit';
import { legalPages } from '#lib/server/legal.js';

export const entries = () => Object.keys(legalPages).map((legal) => ({ legal }));

export function load({ params }) {
	const page = legalPages[params.legal];
	if (!page) error(404, 'Page not found');
	return page;
}
