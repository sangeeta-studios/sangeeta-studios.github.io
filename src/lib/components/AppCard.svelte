<script>
	/** @type {{ app: import('#lib/apps.js').App }} */
	let { app } = $props();

	const initials = $derived(
		app.name
			.split(/\s+/)
			.filter((word) => /^[A-Z]/.test(word))
			.slice(0, 2)
			.map((word) => word[0])
			.join('')
	);
</script>

<article class="card" id={app.id}>
	<div class="head">
		{#if app.icon}
			<img class="icon" src={app.icon} alt="" width="60" height="60" loading="lazy" />
		{:else}
			<div class="icon placeholder" aria-hidden="true">{initials}</div>
		{/if}
		<div>
			<h3>{app.name}</h3>
			<ul class="highlights" aria-label="Highlights">
				{#each app.highlights as highlight (highlight)}
					<li>{highlight}</li>
				{/each}
			</ul>
		</div>
	</div>

	<p class="description">{app.description}</p>

	<div class="foot">
		{#if app.playStoreUrl}
			<a class="btn btn-primary" href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
				Get it on Google Play <span aria-hidden="true">&rarr;</span>
			</a>
		{:else}
			<span class="status">Coming soon to Google Play</span>
		{/if}
		<a class="privacy" href="/privacy-policy#{app.id}">Privacy</a>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		padding: 1.6rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: 0 1px 2px var(--shadow-color);
		transition:
			box-shadow 200ms ease,
			border-color 200ms ease,
			transform 200ms ease;
	}
	.card:hover {
		border-color: transparent;
		box-shadow: 0 18px 36px -14px var(--shadow-color-strong);
		transform: translateY(-3px);
	}
	.head {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.icon {
		width: 60px;
		height: 60px;
		flex-shrink: 0;
		border-radius: 14px;
		border: 1px solid var(--border);
		object-fit: cover;
	}
	.placeholder {
		display: grid;
		place-items: center;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		color: #fff;
		background: linear-gradient(140deg, #4a74f5, #1b3fb8);
		border: none;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
	}
	.highlights {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.5rem;
		list-style: none;
		margin: 0.3rem 0 0;
		padding: 0;
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--text-muted);
	}
	.highlights li + li::before {
		content: '•';
		margin-right: 0.5rem;
	}
	.description {
		color: var(--text-muted);
		flex: 1;
	}
	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border);
	}
	.status {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		background: var(--accent-soft);
		color: var(--text-main);
	}
	.status::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);
	}
	.privacy {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--text-muted);
	}
	.privacy:hover {
		color: var(--primary);
	}
</style>
