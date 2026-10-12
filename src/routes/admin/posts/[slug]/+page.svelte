<script lang="ts">
	import type { BlogPost } from '../../../../app';

	let { data }: { data: { post: BlogPost } } = $props();

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
</script>

<svelte:head>
	<title>{data.post.title} | Beitragsverwaltung | TC Ponfeld</title>
	<meta name="description" content={`${data.post.title} – Beitrag in der TC-Ponfeld-Verwaltung.`} />
</svelte:head>

<main class="post-page">
	<a class="back-link" href="/admin/posts">
		<span aria-hidden="true">←</span> Zurück zu den Beiträgen
	</a>

	<article class="post">
		<header class="post-header">
			<div class="header-topline">
				<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Beitragsverwaltung</p>
				<a class="edit-button" href={`/admin/posts/${data.post.slug}/edit`}>
					<span aria-hidden="true">↗</span> Beitrag bearbeiten
				</a>
			</div>

			<span class="post-label">Vereinsblog</span>
			<h1>{data.post.title}</h1>

			<div class="post-meta">
				<span class="author">
					<span class="avatar" aria-hidden="true">{data.post.authorName?.charAt(0) ?? 'T'}</span>
					<span>{data.post.authorName ?? 'TC Ponfeld'}</span>
				</span>
				<span class="meta-divider" aria-hidden="true"></span>
				<span>
					Veröffentlicht am
					<time datetime={data.post.createdAt.toISOString()}>
						{formattedDate(data.post.createdAt)}
					</time>
				</span>
				<span class="updated-date">
					Zuletzt bearbeitet am {formattedDate(new Date(data.post.updatedAt))}
				</span>
			</div>
		</header>

		<div class="post-content">
			{@html data.post.html ?? ''}
		</div>

		<footer class="post-footer">
			<div>
				<p class="footer-label">Permalink</p>
				<p class="slug">/Blog/{data.post.slug}</p>
			</div>
			<a class="back-link footer-back" href="/admin/posts">
				<span aria-hidden="true">←</span> Alle Beiträge
			</a>
		</footer>
	</article>
</main>

<style lang="scss">
	.post-page {
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
		transition: color 160ms ease;
	}

	.back-link:hover {
		color: #263d34;
	}

	.back-link:focus-visible,
	.edit-button:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.post {
		max-width: 930px;
		margin: 1.5rem auto 0;
	}

	.post-header {
		padding: clamp(1.75rem, 5vw, 3.5rem);
		background:
			radial-gradient(ellipse at 90% 8%, rgb(239 238 166 / 55%), transparent 35%),
			linear-gradient(125deg, #e7eedc 0%, #f5f4df 58%, #e8f1df 100%);
		border-radius: 4px 4px 0 0;
	}

	.header-topline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 2.2rem;
	}

	.eyebrow {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		color: #4c7457;
		font-family: var(--san-serif);
		font-size: 0.73rem;
		font-weight: 700;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	.eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.edit-button {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.5rem;
		padding: 0.68rem 0.9rem;
		border: 1px solid #3c7959;
		border-radius: 3px;
		background: #3c7959;
		color: white;
		font-family: var(--san-serif);
		font-size: 0.84rem;
		font-weight: 700;
		text-decoration: none;
		transition: background 160ms ease;
	}

	.edit-button:hover {
		background: #2f6248;
	}

	.post-label {
		display: inline-block;
		padding: 0.3rem 0.6rem;
		border-radius: 2px;
		background: #e3eddf;
		color: #3c7959;
		font-family: var(--san-serif);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.post-header h1 {
		margin: 1rem 0 1.5rem;
		text-align: left;
		font-size: clamp(2.1rem, 5vw, 4rem);
		line-height: 1.08;
		letter-spacing: -0.04em;
	}

	.post-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.7rem 1rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.8rem;
	}

	.author {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--admin-ink);
		font-weight: 700;
	}

	.avatar {
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
		padding: clamp(1.5rem, 5vw, 3.5rem);
		border: 1px solid var(--admin-line);
		border-top: 0;
		background: var(--admin-paper);
		color: #45554a;
		font-family: var(--san-serif);
		font-size: clamp(1rem, 1.5vw, 1.08rem);
		line-height: 1.85;
		overflow-wrap: anywhere;
	}

	.post-content :global(p) {
		margin: 0 0 1.3rem;
	}

	.post-content :global(h1),
	.post-content :global(h2),
	.post-content :global(h3),
	.post-content :global(h4) {
		margin: 2rem 0 0.8rem;
		color: var(--admin-ink);
		text-align: left;
		line-height: 1.25;
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin: 0 0 1.4rem 1.5rem;
		padding: 0;
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
		border-top: 1px solid var(--admin-line);
	}

	.post-content :global(> :last-child) {
		margin-bottom: 0;
	}

	.post-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.2rem clamp(1.5rem, 5vw, 3.5rem);
		border: 1px solid var(--admin-line);
		border-top: 0;
		border-radius: 0 0 4px 4px;
		background: #f2f4e9;
	}

	.footer-label {
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.slug {
		margin-top: 0.2rem;
		color: var(--admin-ink);
		font-family: var(--san-serif);
		font-size: 0.85rem;
		overflow-wrap: anywhere;
	}

	@media (max-width: 600px) {
		.post-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.header-topline {
			align-items: flex-start;
			flex-direction: column;
			margin-bottom: 1.7rem;
		}

		.post-header {
			padding: 1.75rem 1.4rem;
		}

		.post-footer {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.back-link,
		.edit-button {
			transition: none;
		}
	}
</style>
