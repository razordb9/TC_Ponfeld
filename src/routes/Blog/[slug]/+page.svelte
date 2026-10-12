<script lang="ts">
	import type { BlogPost } from '../../../app';

	let { data }: { data: { post: BlogPost } } = $props();

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
</script>

<svelte:head>
	<title>{data.post.title} | Blog | TC Ponfeld</title>
	<meta name="description" content={`${data.post.title} – Neuigkeiten vom TC Ponfeld.`} />
</svelte:head>

<div class="article-page">
	<a class="back-link" href="/Blog">
		<span aria-hidden="true">←</span>
		Zurück zum Blog
	</a>

	<article class="post">
		<header class="post-header">
			<p class="eyebrow"><span aria-hidden="true"></span> Aus dem Vereinsleben</p>
			<h1>{data.post.title}</h1>
			<div class="post-meta">
				<span class="author">
					<span class="author-mark" aria-hidden="true">{data.post.authorName?.charAt(0) ?? 'T'}</span>
					<span>{data.post.authorName ?? 'TC Ponfeld'}</span>
				</span>
				<span class="meta-divider" aria-hidden="true"></span>
				<time datetime={data.post.createdAt.toISOString()}>
					Veröffentlicht am {formattedDate(data.post.createdAt)}
				</time>
				{#if data.post.updatedAt !== data.post.createdAt.getTime()}
					<span class="updated-date">
						Aktualisiert am {formattedDate(new Date(data.post.updatedAt))}
					</span>
				{/if}
			</div>
		</header>

		<div class="post-content">
			{@html data.post.html}
		</div>

		<footer class="post-footer">
			<p>Das war’s fürs Erste – bis bald auf dem Platz.</p>
			<a class="back-link" href="/Blog">
				<span aria-hidden="true">←</span>
				Alle Beiträge ansehen
			</a>
		</footer>
	</article>
</div>

<style lang="scss">
	.article-page {
		--blog-ink: #263d34;
		--blog-muted: #69766c;
		--blog-paper: #fbfaf4;
		--blog-line: #dfe3d6;
		max-width: 1080px;
		margin: 0 auto;
		padding: 2rem clamp(1.25rem, 5vw, 5rem) 6rem;
		color: var(--blog-ink);
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
		transition: color 160ms ease;
	}

	.back-link:hover {
		color: #263d34;
	}

	.back-link:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.back-link span {
		font-size: 1.15rem;
		transition: transform 160ms ease;
	}

	.back-link:hover span {
		transform: translateX(-3px);
	}

	.post {
		max-width: 850px;
		margin: 2rem auto 0;
	}

	.post-header {
		padding: clamp(2rem, 6vw, 4rem);
		background:
			radial-gradient(ellipse at 90% 5%, rgb(239 238 166 / 55%), transparent 34%),
			linear-gradient(125deg, #e7eedc 0%, #f5f4df 58%, #e8f1df 100%);
		border-radius: 4px 4px 0 0;
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

	.eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.post-header h1 {
		margin: 1.25rem 0 1.7rem;
		text-align: left;
		font-size: clamp(2.2rem, 5.5vw, 4.3rem);
		line-height: 1.08;
		letter-spacing: -0.04em;
	}

	.post-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.7rem 1rem;
		color: var(--blog-muted);
		font-family: var(--san-serif);
		font-size: 0.82rem;
	}

	.author {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--blog-ink);
		font-weight: 700;
	}

	.author-mark {
		display: inline-grid;
		width: 30px;
		height: 30px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #3c7959;
	}

	.meta-divider {
		width: 1px;
		height: 18px;
		background: #b7c4ae;
	}

	.updated-date {
		color: #778278;
	}

	.post-content {
		padding: clamp(1.5rem, 6vw, 4rem);
		background: var(--blog-paper);
		border: 1px solid var(--blog-line);
		border-top: 0;
		font-family: var(--san-serif);
		font-size: clamp(1rem, 1.5vw, 1.08rem);
		line-height: 1.85;
		overflow-wrap: anywhere;
	}

	.post-content :global(p) {
		margin: 0 0 1.3rem;
		color: #45554a;
	}

	.post-content :global(h2),
	.post-content :global(h3),
	.post-content :global(h4) {
		margin: 2.2rem 0 0.8rem;
		color: var(--blog-ink);
		text-align: left;
		line-height: 1.25;
	}

	.post-content :global(h2) {
		font-size: clamp(1.55rem, 3vw, 2rem);
	}

	.post-content :global(h3) {
		font-size: clamp(1.25rem, 2.5vw, 1.6rem);
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin: 0 0 1.4rem 1.5rem;
		padding: 0;
		color: #45554a;
	}

	.post-content :global(li) {
		margin: 0.35rem 0;
		padding-left: 0.25rem;
		list-style: revert;
	}

	.post-content :global(a) {
		color: #347755;
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.post-content :global(blockquote) {
		margin: 1.8rem 0;
		padding: 0.4rem 0 0.4rem 1.2rem;
		border-left: 3px solid #3ca886;
		color: #5d6a60;
		font-size: 1.08em;
		font-style: italic;
	}

	.post-content :global(img) {
		height: auto;
		margin: 1.8rem auto;
		border-radius: 3px;
	}

	.post-content :global(hr) {
		margin: 2rem 0;
		border: 0;
		border-top: 1px solid var(--blog-line);
	}

	.post-content :global(> :last-child) {
		margin-bottom: 0;
	}

	.post-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.5rem clamp(1.5rem, 6vw, 4rem);
		background: #f2f4e9;
		border: 1px solid var(--blog-line);
		border-top: 0;
		border-radius: 0 0 4px 4px;
	}

	.post-footer p {
		color: var(--blog-muted);
		font-family: var(--san-serif);
		font-size: 0.9rem;
	}

	@media (max-width: 640px) {
		.article-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.post {
			margin-top: 1.5rem;
		}

		.post-header {
			padding: 2rem 1.5rem;
		}

		.post-meta {
			gap: 0.65rem 0.8rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.back-link,
		.back-link span {
			transition: none;
		}
	}
</style>
