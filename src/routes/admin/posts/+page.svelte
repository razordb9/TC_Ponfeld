<script lang="ts">
	import type { BlogPost } from '../../../app';

	let { data }: { data: { posts: BlogPost[] } } = $props();

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});

	const getExcerpt = (html: string | null) => {
		const text = (html ?? '')
			.replace(/<[^>]*>/g, ' ')
			.replace(/&nbsp;|&#160;/gi, ' ')
			.replace(/&amp;/gi, '&')
			.replace(/&lt;/gi, '<')
			.replace(/&gt;/gi, '>')
			.replace(/&quot;/gi, '"')
			.replace(/&#39;|&apos;/gi, "'")
			.replace(/\s+/g, ' ')
			.trim();

		return text.length > 220 ? `${text.slice(0, 220).trimEnd()}…` : text;
	};
</script>

<svelte:head>
	<title>Beiträge verwalten | TC Ponfeld</title>
	<meta name="description" content="Blogbeiträge des TC Ponfeld ansehen und verwalten." />
</svelte:head>

<main class="posts-page">
	<a class="back-link" href="/admin"><span aria-hidden="true">←</span> Zurück zur Verwaltung</a>

	<header class="posts-hero">
		<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Redaktion</p>
		<div class="hero-heading">
			<div>
				<h1>Beiträge <em>verwalten.</em></h1>
				<p>Geschichten, Spielberichte und Neuigkeiten aus dem Verein.</p>
			</div>
			<a class="create-button" href="/admin/posts/create">
				<span aria-hidden="true">＋</span> Beitrag erstellen
			</a>
		</div>
	</header>

	<section class="posts-section" aria-labelledby="posts-heading">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Redaktion</p>
				<h2 id="posts-heading">Alle Beiträge</h2>
			</div>
			<span class="post-count">
				{data.posts.length} {data.posts.length === 1 ? 'Beitrag' : 'Beiträge'}
			</span>
		</div>

		{#if data.posts.length > 0}
			<div class="post-list">
				{#each data.posts as post (post.slug)}
					<article class="post-card">
						<div class="post-content">
							<div class="post-meta">
								<span class="post-label">Blogbeitrag</span>
								<time datetime={post.createdAt.toISOString()}>
									{formattedDate(post.createdAt)}
								</time>
							</div>
							<h3>{post.title}</h3>
							<p class="excerpt">
								{getExcerpt(post.html) || 'Für diesen Beitrag gibt es noch keine Vorschau.'}
							</p>
							<p class="author">
								<span class="avatar" aria-hidden="true">{post.authorName?.charAt(0) ?? 'T'}</span>
								<span>{post.authorName ?? 'TC Ponfeld'}</span>
							</p>
						</div>
						<div class="post-actions">
							<a class="view-link" href={`/admin/posts/${post.slug}`}>
								Beitrag öffnen <span aria-hidden="true">↗</span>
							</a>
							<a class="edit-link" href={`/admin/posts/${post.slug}/edit`}>Bearbeiten</a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<span aria-hidden="true">✳</span>
				<h3>Noch keine Beiträge veröffentlicht.</h3>
				<p>Erstelle den ersten Beitrag und teile Neuigkeiten aus dem Vereinsleben.</p>
				<a class="create-button" href="/admin/posts/create">Ersten Beitrag erstellen</a>
			</div>
		{/if}
	</section>
</main>

<style lang="scss">
	.posts-page {
		--admin-ink: #263d34;
		--admin-muted: #69766c;
		--admin-paper: #fbfaf4;
		--admin-line: #dfe3d6;
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem clamp(1.25rem, 5vw, 5rem) 6rem;
		color: var(--admin-ink);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #3c7959;
		font-family: var(--san-serif);
		font-size: 0.9rem;
		font-weight: 700;
		text-decoration: none;
	}

	.back-link:focus-visible,
	.create-button:focus-visible,
	.post-actions a:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.posts-hero {
		margin-top: 1.5rem;
		padding: clamp(2rem, 5vw, 3.5rem);
		background:
			radial-gradient(ellipse at 90% 10%, rgb(239 238 166 / 55%), transparent 35%),
			linear-gradient(125deg, #e7eedc 0%, #f5f4df 58%, #e8f1df 100%);
		border-radius: 4px;
	}

	.eyebrow {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		color: #4c7457;
		font-family: var(--san-serif);
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.posts-hero > .eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.hero-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-top: 1.1rem;
	}

	h1 {
		margin: 0 0 0.6rem;
		text-align: left;
		font-size: clamp(2.3rem, 5vw, 4rem);
		line-height: 1.05;
		letter-spacing: -0.04em;
	}

	h1 em {
		color: #3c7959;
		font-weight: 500;
	}

	.hero-heading p {
		color: #526358;
		font-family: var(--san-serif);
	}

	.create-button {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.8rem 1rem;
		border: 1px solid #3c7959;
		border-radius: 3px;
		background: #3c7959;
		color: white;
		font-family: var(--san-serif);
		font-size: 0.88rem;
		font-weight: 700;
		text-decoration: none;
		transition: background 160ms ease;
	}

	.create-button:hover {
		background: #2f6248;
	}

	.create-button span {
		font-size: 1.1rem;
		line-height: 1;
	}

	.posts-section {
		padding-top: clamp(2.5rem, 5vw, 4rem);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--admin-line);
	}

	.section-heading h2 {
		margin: 0.35rem 0 0;
		text-align: left;
		font-size: clamp(1.7rem, 3vw, 2.3rem);
		letter-spacing: -0.03em;
	}

	.post-count {
		padding-bottom: 0.2rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.88rem;
	}

	.post-list {
		display: grid;
		gap: 1rem;
	}

	.post-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(1.25rem, 3vw, 1.8rem);
		border: 1px solid var(--admin-line);
		border-radius: 4px;
		background: var(--admin-paper);
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			border-color 180ms ease;
	}

	.post-card:hover {
		transform: translateY(-2px);
		border-color: #9eb99b;
		box-shadow: 0 10px 24px rgb(38 61 52 / 7%);
	}

	.post-content {
		min-width: 0;
		flex: 1;
	}

	.post-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.7rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.78rem;
	}

	.post-label {
		padding: 0.28rem 0.55rem;
		border-radius: 2px;
		background: #e3eddf;
		color: #3c7959;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.post-card h3 {
		margin: 0.85rem 0 0.4rem;
		text-align: left;
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		line-height: 1.25;
		letter-spacing: -0.02em;
	}

	.excerpt {
		max-width: 75ch;
		color: #5d6a60;
		font-family: var(--san-serif);
		font-size: 0.9rem;
		line-height: 1.65;
	}

	.author {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		margin-top: 1rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.8rem;
	}

	.avatar {
		display: inline-grid;
		width: 28px;
		height: 28px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #3c7959;
		font-weight: 700;
	}

	.post-actions {
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.65rem;
		font-family: var(--san-serif);
		font-size: 0.84rem;
		font-weight: 700;
	}

	.view-link {
		color: #3c7959;
		text-decoration: none;
	}

	.view-link span {
		display: inline-block;
		margin-left: 0.15rem;
		transition: transform 180ms ease;
	}

	.view-link:hover span {
		transform: translate(2px, -2px);
	}

	.edit-link {
		color: var(--admin-muted);
		text-decoration: underline;
		text-decoration-color: #b7c4ae;
		text-underline-offset: 0.2em;
	}

	.empty-state {
		padding: 3rem 1.5rem;
		border: 1px dashed #b7c4ae;
		background: var(--admin-paper);
		text-align: center;
	}

	.empty-state > span {
		color: #3ca886;
		font-size: 1.8rem;
	}

	.empty-state h3 {
		margin: 0.6rem 0 0.35rem;
		font-size: 1.25rem;
	}

	.empty-state p {
		margin-bottom: 1.2rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
	}

	@media (max-width: 700px) {
		.post-card {
			align-items: flex-start;
			flex-direction: column;
			gap: 1.2rem;
		}

		.post-actions {
			width: 100%;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-top: 0.9rem;
			border-top: 1px solid var(--admin-line);
		}
	}

	@media (max-width: 560px) {
		.posts-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.posts-hero {
			padding: 2rem 1.5rem;
		}

		.hero-heading {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.create-button,
		.post-card,
		.view-link span {
			transition: none;
		}
	}
</style>
