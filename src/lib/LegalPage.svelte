<script>
	let { children } = $props();
</script>

<div class="legal-page">
	<a href="/" class="back-link">&larr; Back to Portfolio</a>
	{@render children()}
</div>

<style>
	.legal-page {
		line-height: 1.65;
		max-width: 68ch;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 4rem;
	}
	.legal-page :global(h1) {
		font-family: "Bricolage Grotesque", sans-serif;
		font-size: 2rem;
		letter-spacing: -0.02em;
		color: var(--text-main);
	}
	.legal-page :global(h2) {
		font-family: "Bricolage Grotesque", sans-serif;
		font-size: 1.15rem;
		margin-top: 2.25rem;
		margin-bottom: 0.75rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--border);
		color: var(--text-main);
	}
	.legal-page :global(p) { margin-bottom: 0.9rem; color: var(--text-main); }
	.legal-page :global(p.meta) { color: var(--text-muted); }
	.legal-page :global(ul) { padding-left: 1.25rem; margin: 0 0 0.9rem; }
	.legal-page :global(li) { margin-bottom: 0.4rem; }
	.legal-page :global(nav.apps a) { display: block; margin-bottom: 0.25rem; }
	.legal-page :global(h2.app) {
		font-size: 1.5rem;
		border-bottom: none;
		margin-top: 3rem;
	}
	.legal-page :global(h3) {
		font-family: "Bricolage Grotesque", sans-serif;
		font-size: 1.05rem;
		margin-top: 1.75rem;
		margin-bottom: 0.5rem;
	}
	.back-link {
		display: inline-block;
		font-weight: 600;
		margin-bottom: 2rem;
	}
</style>
