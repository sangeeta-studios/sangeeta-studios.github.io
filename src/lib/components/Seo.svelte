<script>
	import { site } from '#lib/site.js';

	/**
	 * @type {{
	 *   title?: string,
	 *   description?: string,
	 *   path?: string,
	 *   type?: 'website' | 'article' | 'profile',
	 *   jsonLd?: object | null,
	 *   noindex?: boolean
	 * }}
	 */
	let {
		title,
		description = site.description,
		path = '/',
		type = 'website',
		jsonLd = null,
		noindex = false
	} = $props();

	const fullTitle = $derived(title ? `${title} | ${site.name}` : site.title);
	const url = $derived(new URL(path, site.url).href);
	const image = new URL(site.image, site.url).href;
	// Escape "<" so content can never close the script tag early.
	const structuredData = $derived(
		jsonLd
			? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}<` +
					'/script>'
			: ''
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<link rel="canonical" href={url} />
	{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html structuredData}
</svelte:head>
