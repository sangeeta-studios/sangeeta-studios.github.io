<script>
	import AppCard from '#lib/components/AppCard.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { apps } from '#lib/apps.js';
	import { profile, site } from '#lib/site.js';

	const person = {
		'@type': 'Person',
		'@id': `${site.url}/#person`,
		name: site.author,
		url: site.url,
		image: `${site.url}/photo.jpg`,
		jobTitle: 'Mobile App Developer',
		knowsAbout: profile.skills,
		sameAs: [site.github]
	};

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{ '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: site.url },
			person,
			...apps.map((app) => ({
				'@type': 'MobileApplication',
				name: app.name,
				description: app.description,
				operatingSystem: 'Android',
				applicationCategory: app.category,
				url: app.playStoreUrl ?? `${site.url}/#${app.id}`,
				...(app.icon && { image: `${site.url}${app.icon}` }),
				author: { '@id': person['@id'] }
			}))
		]
	};
</script>

<Seo {jsonLd} type="profile" />

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">{profile.role}</p>
			<h1>Hi, I'm <span class="highlight">Sangeeta</span></h1>
			<p class="lead">{profile.intro}</p>
			<div class="actions">
				<a class="btn btn-primary" href="#apps">Explore my apps</a>
				<a class="btn btn-secondary" href="#about">About me</a>
			</div>
		</div>
		<div class="hero-media">
			<img
				class="portrait"
				src="/photo.jpg"
				alt="Portrait of Sangeeta"
				width="512"
				height="512"
				fetchpriority="high"
			/>
			<p class="badge"><strong>{apps.length} apps</strong> built with Flutter</p>
		</div>
	</div>
</section>

<section class="section" id="apps" aria-labelledby="apps-title">
	<div class="container">
		<p class="eyebrow">Portfolio</p>
		<h2 class="section-title" id="apps-title">My apps</h2>
		<p class="section-lead">Games and tools that teach or solve real-world problems.</p>

		<div class="app-grid">
			{#each apps as app (app.id)}
				<AppCard {app} />
			{/each}
		</div>

		<p class="legal-note">
			If you use my applications, please review the <a href="/privacy-policy">privacy policy</a> to
			understand how your data is handled, and the <a href="/terms">terms of use</a> for purchases and
			subscriptions.
		</p>
	</div>
</section>

<section class="section alt" id="about" aria-labelledby="about-title">
	<div class="container about-grid">
		<div>
			<p class="eyebrow">About</p>
			<h2 class="section-title" id="about-title">About me</h2>
			<div class="prose">
				{#each profile.about as paragraph, i (i)}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="side">
			<div class="panel">
				<h3>My journey</h3>
				<ol class="journey">
					{#each profile.journey as step, i (step)}
						<li class:current={i === profile.journey.length - 1}>{step}</li>
					{/each}
				</ol>
			</div>
			<div class="panel">
				<h3>Skills &amp; tools</h3>
				<ul class="skills">
					{#each profile.skills as skill (skill)}
						<li class="chip">{skill}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="section" id="connect" aria-labelledby="connect-title">
	<div class="container">
		<div class="cta">
			<div>
				<h2 class="section-title" id="connect-title">Let's connect</h2>
				<p class="section-lead">{profile.connect}</p>
			</div>
			<a class="btn btn-primary" href={site.github} target="_blank" rel="noopener noreferrer">
				Find me on GitHub <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</section>

<style>
	/* Hero */
	.hero {
		position: relative;
		overflow: hidden;
		padding: clamp(3rem, 8vw, 6rem) 0 clamp(3rem, 7vw, 5rem);
		border-bottom: 1px solid var(--border);
		background:
			radial-gradient(40rem 26rem at 85% 10%, var(--primary-soft), transparent 70%),
			radial-gradient(30rem 20rem at 5% 100%, var(--accent-soft), transparent 70%), var(--surface);
	}
	.hero-grid {
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		align-items: center;
		gap: clamp(2rem, 6vw, 4.5rem);
	}
	h1 {
		font-size: clamp(2.4rem, 6vw, 3.75rem);
		font-weight: 700;
		margin: 0.9rem 0 1.2rem;
	}
	.highlight {
		color: var(--primary);
	}
	.lead {
		font-size: clamp(1.05rem, 1.6vw, 1.2rem);
		color: var(--text-muted);
		max-width: 52ch;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}
	.hero-media {
		position: relative;
		justify-self: center;
		width: min(100%, 380px);
	}
	.hero-media::before {
		content: '';
		position: absolute;
		inset: -14px 14px 14px -14px;
		border-radius: 32px;
		border: 2px dashed var(--border);
	}
	.portrait {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 28px;
		box-shadow: 0 30px 60px -24px var(--shadow-color-strong);
	}
	.badge {
		position: absolute;
		left: -1.25rem;
		bottom: 1.5rem;
		padding: 0.7rem 1rem;
		border-radius: var(--radius);
		background: var(--surface);
		border: 1px solid var(--border);
		box-shadow: 0 14px 30px -12px var(--shadow-color-strong);
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.badge strong {
		display: block;
		font-family: var(--font-display);
		font-size: 1.15rem;
		color: var(--text-main);
	}

	/* Sections */
	.section {
		padding: clamp(3.5rem, 8vw, 5.5rem) 0;
	}
	.section.alt {
		background: var(--surface);
		border-block: 1px solid var(--border);
	}

	/* Apps */
	.app-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
		gap: 1.5rem;
		margin-top: 2.25rem;
	}
	.legal-note {
		margin-top: 2rem;
		font-size: 0.95rem;
		color: var(--text-muted);
	}
	.legal-note a {
		font-weight: 600;
	}

	/* About */
	.about-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: clamp(2rem, 6vw, 4rem);
		align-items: start;
	}
	.prose {
		display: grid;
		gap: 1rem;
		margin-top: 1.25rem;
		font-size: 1.05rem;
		max-width: 62ch;
	}
	.side {
		display: grid;
		gap: 1.25rem;
	}
	.panel {
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		background: var(--background);
		border: 1px solid var(--border);
	}
	.panel h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.journey {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.9rem;
	}
	.journey li {
		position: relative;
		padding-left: 1.75rem;
		font-weight: 500;
	}
	.journey li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.4em;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid var(--primary);
		background: var(--surface);
	}
	.journey li:not(:last-child)::after {
		content: '';
		position: absolute;
		left: 5px;
		top: calc(0.4em + 14px);
		height: calc(100% - 0.4em);
		width: 2px;
		background: var(--border);
	}
	.journey li.current::before {
		background: var(--primary);
		box-shadow: 0 0 0 4px var(--primary-soft);
	}
	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* Call to action */
	.cta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem 2rem;
		padding: clamp(1.75rem, 5vw, 3rem);
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
		background:
			radial-gradient(30rem 16rem at 100% 0%, var(--primary-soft), transparent 70%), var(--surface);
	}

	@media (max-width: 820px) {
		.hero-grid,
		.about-grid {
			grid-template-columns: 1fr;
		}
		.hero-media {
			order: -1;
			width: min(72%, 300px);
		}
		.badge {
			left: auto;
			right: -1rem;
			bottom: 1rem;
		}
	}
</style>
