<script>
	import Seo from '#lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo title={data.title} description={data.description} path="/{data.slug}" type="article" />

<div class="page-header">
	<div class="container">
		<a class="back" href="/"><span aria-hidden="true">&larr;</span> Back to portfolio</a>
		<h1>{data.title}</h1>
		{#if data.updated}
			<p class="updated">Last updated: {data.updated}</p>
		{/if}
	</div>
</div>

<div class="container layout">
	{#if data.toc.length > 1}
		<aside>
			<nav class="toc" aria-label="On this page">
				<p>On this page</p>
				<ul>
					{#each data.toc as item (item.id)}
						<li><a href="#{item.id}">{item.text}</a></li>
					{/each}
				</ul>
			</nav>
		</aside>
	{/if}

	<article class="prose">
		{@html data.html}
	</article>
</div>

<style>
	.page-header {
		padding: clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 4vw, 2.75rem);
		background:
			radial-gradient(36rem 18rem at 90% 0%, var(--primary-soft), transparent 70%), var(--surface);
		border-bottom: 1px solid var(--border);
	}
	.back {
		display: inline-flex;
		gap: 0.4rem;
		font-weight: 600;
		font-size: 0.95rem;
		margin-bottom: 1.25rem;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 2.75rem);
		font-weight: 700;
	}
	.updated {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.3rem 0.8rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 500;
		background: var(--surface-alt);
		border: 1px solid var(--border);
		color: var(--text-muted);
	}

	.layout {
		display: grid;
		grid-template-columns: 220px minmax(0, 1fr);
		gap: clamp(2rem, 5vw, 4rem);
		align-items: start;
		padding-top: clamp(2rem, 5vw, 3rem);
		padding-bottom: 5rem;
	}
	.layout:not(:has(aside)) {
		grid-template-columns: minmax(0, 1fr);
	}
	aside {
		position: sticky;
		top: calc(var(--header-height) + 1.5rem);
	}
	.toc p {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}
	.toc ul {
		list-style: none;
		margin: 0;
		padding: 0;
		border-left: 2px solid var(--border);
	}
	.toc a {
		display: block;
		margin-left: -2px;
		padding: 0.35rem 0 0.35rem 1rem;
		border-left: 2px solid transparent;
		color: var(--text-muted);
		font-size: 0.925rem;
		line-height: 1.4;
	}
	.toc a:hover {
		color: var(--primary);
		border-left-color: var(--primary);
		text-decoration: none;
	}

	/* Rendered Markdown */
	.prose {
		max-width: 70ch;
		line-height: 1.7;
	}
	.prose :global(h2) {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 3rem 0 1rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}
	.prose :global(h3) {
		font-size: 1.1rem;
		font-weight: 600;
		margin: 2rem 0 0.6rem;
	}
	.prose :global(p),
	.prose :global(ul) {
		margin: 0 0 1rem;
	}
	.prose :global(ul) {
		padding-left: 1.25rem;
	}
	.prose :global(li) {
		margin-bottom: 0.5rem;
	}
	.prose :global(li::marker) {
		color: var(--primary);
	}
	.prose :global(em) {
		color: var(--text-muted);
	}
	.prose :global(code) {
		font-size: 0.875em;
		padding: 0.1rem 0.4rem;
		border-radius: 6px;
		background: var(--surface-alt);
		border: 1px solid var(--border);
		font-style: normal;
	}
	.prose :global(a) {
		text-decoration: underline;
		text-decoration-color: color-mix(in srgb, var(--primary) 35%, transparent);
		text-underline-offset: 3px;
	}
	.prose :global(a:hover) {
		text-decoration-color: currentColor;
	}

	@media (max-width: 820px) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
		}
		aside {
			position: static;
			padding: 1.25rem 1.5rem;
			border-radius: var(--radius);
			background: var(--surface);
			border: 1px solid var(--border);
		}
	}
</style>
