<script>
	import { page } from '$app/state';
	import Seo from '#lib/components/Seo.svelte';

	const notFound = $derived(page.status === 404);
</script>

<Seo title={notFound ? 'Page not found' : 'Something went wrong'} noindex />

<div class="container error">
	<p class="eyebrow">Error {page.status}</p>
	<h1>{notFound ? "This page doesn't exist" : 'Something went wrong'}</h1>
	<p>
		{notFound
			? 'The link may be broken or the page may have moved.'
			: 'Please try again in a moment.'}
	</p>
	<a class="btn btn-primary" href="/">Go to the home page</a>
</div>

<style>
	.error {
		padding-top: clamp(4rem, 12vw, 8rem);
		padding-bottom: clamp(4rem, 12vw, 8rem);
		text-align: center;
		display: grid;
		justify-items: center;
		gap: 1rem;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 2.75rem);
	}
	p:not(.eyebrow) {
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}
</style>
