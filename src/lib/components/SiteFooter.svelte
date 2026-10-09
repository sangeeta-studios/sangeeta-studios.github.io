<script>
	import { site } from '#lib/site.js';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container inner">
		<p>&copy; {year} {site.author}. All rights reserved.</p>
		<nav aria-label="Footer">
			<a href="/privacy-policy">Privacy Policy</a>
			<a href="/terms">Terms of Use</a>
			<a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
		</nav>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		background: var(--surface);
		color: var(--text-muted);
		font-size: 0.9rem;
		padding: 1.75rem 0;
	}
	.inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem 2rem;
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
	}
	a {
		color: var(--text-muted);
		font-weight: 500;
	}
	a:hover {
		color: var(--primary);
	}
</style>
