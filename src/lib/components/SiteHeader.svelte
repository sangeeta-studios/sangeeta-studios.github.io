<script>
	import { page } from '$app/state';
	import { site } from '#lib/site.js';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ href: '/#apps', label: 'Apps' },
		{ href: '/#about', label: 'About' },
		{ href: '/privacy-policy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' }
	];
</script>

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/">
			<img src="/favicon.svg" alt="" width="30" height="30" />
			<span>{site.name}</span>
		</a>
		<nav aria-label="Main">
			<ul>
				{#each links as link (link.href)}
					<li class:secondary={!link.href.startsWith('/#')}>
						<a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
			<ThemeToggle />
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--header-bg);
		backdrop-filter: saturate(180%) blur(12px);
		-webkit-backdrop-filter: saturate(180%) blur(12px);
		border-bottom: 1px solid var(--border);
	}
	.bar {
		height: var(--header-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.1rem;
		letter-spacing: -0.01em;
		white-space: nowrap;
		color: var(--text-main);
	}
	.brand:hover {
		text-decoration: none;
	}
	.brand img {
		border-radius: 8px;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	ul {
		display: flex;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul a {
		display: block;
		padding: 0.4rem 0.75rem;
		border-radius: 999px;
		color: var(--text-muted);
		font-weight: 500;
		font-size: 0.95rem;
		transition:
			color 150ms ease,
			background-color 150ms ease;
	}
	ul a:hover {
		color: var(--text-main);
		background: var(--surface-alt);
		text-decoration: none;
	}
	ul a[aria-current='page'] {
		color: var(--primary);
		background: var(--primary-soft);
	}

	@media (max-width: 640px) {
		.secondary {
			display: none;
		}
		.brand {
			font-size: 1rem;
			gap: 0.5rem;
		}
		nav {
			gap: 0.4rem;
		}
		ul a {
			padding: 0.4rem 0.55rem;
		}
	}
	@media (max-width: 380px) {
		.brand span {
			display: none;
		}
	}
</style>
