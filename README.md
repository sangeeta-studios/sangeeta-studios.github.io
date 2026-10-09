# sangeeta-studios.github.io

Portfolio and legal pages for Sangeeta's apps, built with [SvelteKit](https://svelte.dev/docs/kit)
and published to GitHub Pages at <https://sangeeta-studios.github.io>.

Every push to `main` builds the site and deploys it (see `.github/workflows/deploy.yml`).

## Common edits

| To change…                               | Edit                                    |
| ---------------------------------------- | --------------------------------------- |
| Intro, about text, journey, skills       | `src/lib/site.js`                       |
| Site name, URL, default description      | `src/lib/site.js`                       |
| Apps (add, remove, Play Store link)      | `src/lib/apps.js` (+ icon in `static/`) |
| Privacy policy / terms text              | `src/content/legal/*.md`                |
| Colours, fonts, spacing                  | `src/app.css` (design tokens at top)    |
| Profile photo, icons, social share image | `static/`                               |

### Adding an app

Add an entry to `src/lib/apps.js`. When it is published, set `playStoreUrl` and the card
switches from "Coming soon" to a Google Play button. Keep `id` the same as the app's heading
anchor in the privacy policy (`## App name {#id}`) so the card's Privacy link works.

### Legal pages

Each Markdown file in `src/content/legal/` becomes a page at `/<file-name>` (and
`/<file-name>.html`), and is added to the sitemap automatically. The front matter at the top sets the
page title, search description and "Last updated" date:

```md
---
title: Privacy Policy
description: Shown in search results.
updated: September 2026
---
```

`##` headings appear in the "On this page" list. Add `{#some-id}` to the end of a heading to
fix its link anchor. Don't change existing anchors, since app listings may link to them.

## SEO

- Page titles, descriptions, canonical URLs, Open Graph/Twitter tags: `src/lib/components/Seo.svelte`
- Structured data (Person, WebSite, MobileApplication) is generated from `site.js` and `apps.js`
- `sitemap.xml` is generated at build time; `static/robots.txt` points to it
- Social share image: `static/og-image.jpg` (1200×630)

## Development

Requires Node 24.

```sh
npm install
npm run dev      # local server with live reload
npm run build    # static site in build/
npm run preview  # serve the build locally
npm run check    # type and Svelte checks
npm run format   # format with Prettier
```

This uses SvelteKit 3: configuration lives in `vite.config.js`, and `src/lib` is imported as
`#lib/...`.
