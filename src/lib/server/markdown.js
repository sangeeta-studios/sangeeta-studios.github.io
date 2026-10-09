import { Marked } from 'marked';

/** @param {string} text */
const slugify = (text) =>
	text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-');

/** @param {string} text */
const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/**
 * Splits a Markdown file into its front matter (simple `key: value` lines
 * between `---` fences) and body.
 * @param {string} source
 */
export function parseFrontMatter(source) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
	/** @type {Record<string, string>} */
	const data = {};
	if (!match) return { data, body: source };

	for (const line of match[1].split(/\r?\n/)) {
		const colon = line.indexOf(':');
		if (colon > 0) data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
	}
	return { data, body: source.slice(match[0].length) };
}

/**
 * Renders Markdown to HTML. Headings can set their anchor with a trailing
 * `{#id}` (otherwise the id is derived from the text), level-2 headings are
 * collected into a table of contents, and external links open in a new tab.
 * @param {string} markdown
 */
export function renderMarkdown(markdown) {
	/** @type {Map<string, string>} */
	const customIds = new Map();
	/** @type {{ id: string, text: string }[]} */
	const toc = [];

	const body = markdown.replace(/^(#{1,6}) (.+?)\s*\{#([\w-]+)\}\s*$/gm, (_, hashes, text, id) => {
		customIds.set(text, id);
		return `${hashes} ${text}`;
	});

	const marked = new Marked({
		gfm: true,
		renderer: {
			heading({ tokens, depth, text }) {
				const id = customIds.get(text) ?? slugify(text);
				if (depth === 2) toc.push({ id, text });
				return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
			},
			link({ href, title, tokens }) {
				const external = /^https?:\/\//.test(href);
				return `<a href="${escapeAttr(href)}"${title ? ` title="${escapeAttr(title)}"` : ''}${
					external ? ' target="_blank" rel="noopener noreferrer"' : ''
				}>${this.parser.parseInline(tokens)}</a>`;
			}
		}
	});

	return { html: /** @type {string} */ (marked.parse(body)), toc };
}
