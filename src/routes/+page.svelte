<script>
	import ThemeToggle from '#lib/ThemeToggle.svelte';
	import { apps } from '#lib/apps.js';
</script>

<svelte:head>
	<title>Sangeeta | Mobile App Developer</title>
	<meta
		name="description"
		content="Sangeeta builds clean, intuitive, and performant mobile apps with Flutter — including CG Tax Calculator and Math Sprouts, a mental maths game for kids."
	/>
</svelte:head>

<nav>
	<ThemeToggle />
</nav>

<header>
	<div class="container profile">
		<img class="avatar" src="/photo.png" alt="Sangeeta" />
		<h1>Hi, I'm Sangeeta</h1>
		<p class="tagline">
			I am a retired School Headmistress and now an independent mobile app developer. I build clean,
			intuitive, and performant mobile applications using Flutter. Passionate about creating games and
			tools that teach or solve real-world problems.
		</p>
	</div>
</header>

<main class="container">
	<section>
		<h2>About Me</h2>
		<p class="prose">
			I am an independent mobile app developer specializing in cross-platform development. With a keen
			eye for UI/UX design and a strong foundation in Dart and Flutter, I love bringing ideas to life.
		</p>
		<p class="prose">
			Before focusing on independent app development, I worked as a Maths teacher and a School's
			Headmistress. When I'm not coding, I'm usually exploring new tech, contributing to open source,
			or optimizing my workflow.
		</p>
	</section>

	<section>
		<h2>Skills &amp; Tools</h2>
		<div class="skills-grid">
			{#each ['Flutter', 'Dart', 'HTML', 'Python', 'Postgres', 'SQLite', 'Git', 'Agentic Development', 'Gemini Flow'] as skill}
				<span class="skill-tag">{skill}</span>
			{/each}
		</div>
	</section>

	<section>
		<h2>My Apps</h2>
		{#each apps as app}
			<div class="app-card">
				<div class="app-header">
					<div class="app-icon">
						{#if app.icon}
							<img src={app.icon} alt="{app.name} icon" width="64" height="64" />
						{:else}
							[App Icon]
						{/if}
					</div>
					<div class="app-title-group">
						<h3>{app.name}</h3>
						<div class="app-stats">
							{#each app.stats as stat, i}
								{#if i > 0}<span>&bull;</span>{/if}
								<span>{stat}</span>
							{/each}
						</div>
					</div>
				</div>
				<p>{app.description}</p>
				<div class="app-actions">
					{#if app.playStoreUrl}
						<a class="btn" href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
							Available on Google Play &rarr;
						</a>
					{:else}
						<span class="btn btn-outline" aria-disabled="true">Coming soon to Google Play</span>
					{/if}
				</div>
			</div>
		{/each}
	</section>

	<section>
		<h2>Let's Connect</h2>
		<p class="prose">
			I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
			vision. Feel free to reach out!
		</p>
	</section>

	<section class="legal">
		<h2>Legal</h2>
		<p>
			If you use my applications, please review the <a href="/privacy-policy">privacy policy</a> to
			understand how your data is handled, and the <a href="/terms">terms of use</a> for purchases and
			subscriptions.
		</p>
	</section>
</main>

<footer>
	<p>&copy; 2026 Sangeeta. All rights reserved.</p>
	<p class="links">
		<a href="https://github.com/sangeeta-studios" target="_blank" rel="noopener noreferrer">GitHub</a>
	</p>
</footer>

<style>
	* { margin: 0; padding: 0; }

	h1, h2 {
		font-family: "Bricolage Grotesque", "IBM Plex Sans", -apple-system, sans-serif;
		letter-spacing: -0.02em;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 2rem;
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
	}

	/* Header / hero */
	header {
		background-color: var(--surface);
		padding: 4.5rem 2rem 3.5rem;
		border-bottom: 1px solid var(--border);
	}
	.profile {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: center;
		gap: 1.25rem;
	}
	.avatar {
		width: 128px;
		height: 128px;
		border-radius: 50%;
		margin: 0 auto;
		display: block;
		object-fit: cover;
		background: linear-gradient(155deg, var(--primary-soft), var(--surface-alt));
		box-shadow: 0 6px 20px var(--shadow-color);
	}
	.profile h1 { font-size: 2.5rem; font-weight: 700; }
	.profile .tagline {
		color: var(--text-muted);
		font-size: 1.15rem;
		width: min(100%, 46ch);
		margin: 0 auto;
	}

	/* Section rhythm */
	main.container { padding-top: 3rem; padding-bottom: 1rem; }
	section { margin-bottom: 3.5rem; }
	section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
	}
	.prose {
		color: var(--text-main);
		max-width: 68ch;
	}
	.prose + .prose { margin-top: 0.75rem; }

	/* Skills Grid */
	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	.skill-tag {
		background: var(--surface-alt);
		color: var(--text-main);
		padding: 0.4rem 0.8rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid var(--border);
	}

	/* App Card */
	.app-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.75rem 2rem;
		box-shadow: 0 1px 2px var(--shadow-color);
		transition: box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.app-card:hover {
		border-color: transparent;
		box-shadow: 0 16px 32px -12px var(--shadow-color-strong);
		transform: translateY(-2px);
	}
	.app-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.app-icon {
		width: 64px;
		height: 64px;
		border-radius: 12px;
		background: var(--surface-alt);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		color: var(--text-muted);
		border: 1px solid var(--border);
		flex-shrink: 0;
	}
	.app-icon img {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		display: block;
	}
	.app-title-group h3 {
		font-family: "Bricolage Grotesque", sans-serif;
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--text-main);
		margin-bottom: 0.2rem;
	}
	.app-stats {
		display: flex;
		gap: 0.75rem;
		font-size: 0.85rem;
		color: var(--text-muted);
		font-weight: 500;
	}
	.app-card p {
		color: var(--text-muted);
		max-width: 62ch;
		margin-bottom: 0.5rem;
	}
	.app-actions {
		display: flex;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--primary);
		color: var(--on-primary);
		font-weight: 600;
		font-size: 0.95rem;
		padding: 0.65rem 1.25rem;
		border-radius: 8px;
		text-decoration: none;
		transition: background-color 150ms ease;
	}
	.btn:hover { background: var(--primary-dark); text-decoration: none; }
	.btn:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
	.btn-outline {
		background: transparent;
		color: var(--text-main);
		border: 1px solid var(--border);
		margin-top: 1.25rem;
	}
	.btn-outline:hover {
		background: var(--surface-alt);
		color: var(--text-main);
	}

	/* Legal */
	.legal {
		background: var(--surface-alt);
		border-radius: 12px;
		padding: 1.5rem 2rem;
	}
	.legal h2 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}
	.legal p { color: var(--text-muted); font-size: 0.95rem; }
	.legal a { font-weight: 600; }

	footer {
		border-top: 1px solid var(--border);
		text-align: center;
		padding: 2rem;
		color: var(--text-muted);
		font-size: 0.9rem;
	}
	footer .links { margin-top: 0.35rem; }

	@media (max-width: 480px) {
		header { padding: 3.5rem 1.25rem 2.5rem; }
		.container { padding: 0 1.25rem; }
		.profile h1 { font-size: 2rem; }
		.app-card { padding: 1.5rem; }
		.app-header { flex-direction: column; align-items: flex-start; }
		.app-actions { flex-direction: column; }
	}
</style>
