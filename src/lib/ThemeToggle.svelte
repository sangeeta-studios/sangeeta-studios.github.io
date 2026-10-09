<script>
	import { onMount } from 'svelte';

	// '' means "follow the system preference"
	let theme = $state('');
	let systemDark = $state(false);

	let showSun = $derived(theme === 'dark' || (theme === '' && systemDark));

	onMount(() => {
		systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
		try {
			theme = localStorage.getItem('theme') ?? '';
		} catch {}
	});

	function toggle() {
		const html = document.documentElement;
		const isDark = html.classList.contains('dark') || (theme === '' && systemDark);
		theme = isDark ? 'light' : 'dark';
		html.classList.remove('light', 'dark');
		html.classList.add(theme);
		try {
			localStorage.setItem('theme', theme);
		} catch {}
	}
</script>

<button class="theme-toggle" aria-label="Toggle Dark Mode" onclick={toggle}>
	<svg viewBox="0 0 24 24">
		{#if showSun}
			<circle cx="12" cy="12" r="5"></circle>
			<line x1="12" y1="1" x2="12" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			<line x1="1" y1="12" x2="3" y2="12"></line>
			<line x1="21" y1="12" x2="23" y2="12"></line>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		{:else}
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		{/if}
	</svg>
</button>

<style>
	.theme-toggle {
		background: var(--surface-alt);
		border: 1px solid var(--border);
		color: var(--text-main);
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 150ms ease;
	}
	.theme-toggle:hover {
		background: var(--border);
	}
	.theme-toggle:focus-visible {
		outline: 2px solid var(--primary);
		outline-offset: 2px;
	}
	svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
