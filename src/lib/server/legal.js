import { parseFrontMatter, renderMarkdown } from './markdown.js';

// Every Markdown file in src/content/legal/ becomes a page at /<file-name>.
const files = import.meta.glob('/src/content/legal/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

export const legalPages = Object.fromEntries(
	Object.entries(files).map(([path, source]) => {
		const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
		const { data, body } = parseFrontMatter(/** @type {string} */ (source));
		const { html, toc } = renderMarkdown(body);
		return [
			slug,
			{
				slug,
				title: data.title ?? slug,
				description: data.description ?? '',
				updated: data.updated ?? '',
				html,
				toc
			}
		];
	})
);
