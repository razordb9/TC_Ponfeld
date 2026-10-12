<script lang="ts">
	import type { BlogPost } from '../../app';

	let { data }: { data: { posts: BlogPost[] } } = $props();

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});

	const getExcerpt = (html: string) => {
		const text = html
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
	<title>Blog | TC Ponfeld</title>
	<meta
		name="description"
		content="Neuigkeiten, Spielberichte und Geschichten aus dem Vereinsleben des TC Ponfeld."
	/>
</svelte:head>

<div class="blog-page">
	<header class="blog-hero">
		<p class="eyebrow"><span aria-hidden="true"></span> Neuigkeiten vom TC Ponfeld</p>
		<h1>Vereinsleben, <em>aufgeschlagen.</em></h1>
		<p class="hero-intro">
			Spielberichte, Einblicke und alles, was sich auf und neben dem Platz bei uns tut.
		</p>
		<!-- <div class="hero-note" aria-hidden="true">
			<span>TC</span>
			<span>PONFELD</span>
		</div> -->
	</header>

	<section class="posts-section" aria-labelledby="posts-heading">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Aus dem Club</p>
				<h2 id="posts-heading">Das Neueste</h2>
			</div>
			<p class="post-count">
				{data.posts.length} {data.posts.length === 1 ? 'Beitrag' : 'Beiträge'}
			</p>
		</div>

		{#if data.posts.length > 0}
			<div class="post-grid">
				{#each data.posts as post, index (post.slug)}
					<article class:featured={index === 0} class="post-card">
						<a class="post-link" href={`/Blog/${post.slug}`}>
							<div class="card-topline">
								<span class="post-category">{index === 0 ? 'Aktuell' : 'Vereinsblog'}</span>
								<time datetime={post.createdAt.toISOString()}>
									{formattedDate(post.createdAt)}
								</time>
							</div>
							<h3>{post.title}</h3>
							<p class="post-excerpt">{getExcerpt(post.html as string)}</p>
							<div class="card-footer">
								<span class="author">
									<span class="author-mark" aria-hidden="true">
										{post.authorName?.charAt(0) ?? 'T'}
									</span>
									<span>{post.authorName}</span>
								</span>
								<span class="read-more">
									Weiterlesen <span aria-hidden="true">↗</span>
								</span>
							</div>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<span class="empty-icon" aria-hidden="true">✳</span>
				<h3>Hier ist noch Platz für die erste Geschichte.</h3>
				<p>Schau bald wieder vorbei – neue Beiträge aus dem Vereinsleben folgen.</p>
			</div>
		{/if}
	</section>
</div>

<style lang="scss">
	.blog-page {
		--blog-ink: #263d34;
		--blog-muted: #69766c;
		--blog-paper: #fbfaf4;
		--blog-line: #dfe3d6;
		max-width: 1280px;
		margin: 0 auto;
		padding: 3rem clamp(1.25rem, 5vw, 5rem) 6rem;
		color: var(--blog-ink);
	}

	.blog-hero {
		position: relative;
		overflow: hidden;
		min-height: 320px;
		padding: clamp(2rem, 7vw, 5.5rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		background:
			radial-gradient(ellipse at 88% 18%, rgb(239 238 166 / 60%), transparent 32%),
			linear-gradient(125deg, #e7eedc 0%, #f5f4df 56%, #e8f1df 100%);
		border-radius: 4px;
	}

	.eyebrow {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		color: #4c7457;
		font-family: var(--san-serif);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.blog-hero .eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.blog-hero h1 {
		max-width: 760px;
		margin: 1.2rem 0 0.75rem;
		text-align: left;
		font-size: clamp(2.6rem, 6vw, 5rem);
		line-height: 1.02;
		letter-spacing: -0.045em;
	}

	.blog-hero h1 em {
		color: #3c7959;
		font-weight: 500;
	}

	.hero-intro {
		max-width: 490px;
		color: #526358;
		font-family: var(--san-serif);
		font-size: clamp(1rem, 1.4vw, 1.15rem);
		line-height: 1.7;
	}

	.hero-note {
		position: absolute;
		right: clamp(1.25rem, 5vw, 4.5rem);
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 94px;
		height: 94px;
		border: 1px solid rgb(60 121 89 / 42%);
		border-radius: 50%;
		color: #3c7959;
		transform: rotate(-12deg);
	}

	.hero-note span:first-child {
		font-size: 1.7rem;
		font-weight: 700;
		line-height: 1;
	}

	.hero-note span:last-child {
		margin-top: 0.35rem;
		font-family: var(--san-serif);
		font-size: 0.48rem;
		font-weight: 700;
		letter-spacing: 0.16em;
	}

	.posts-section {
		padding-top: clamp(3rem, 6vw, 5.5rem);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.2rem;
		border-bottom: 1px solid var(--blog-line);
	}

	.section-heading h2 {
		margin: 0.4rem 0 0;
		text-align: left;
		font-size: clamp(1.8rem, 3vw, 2.5rem);
		letter-spacing: -0.03em;
	}

	.post-count {
		padding-bottom: 0.3rem;
		color: var(--blog-muted);
		font-family: var(--san-serif);
		font-size: 0.9rem;
	}

	.post-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.15rem;
	}

	.post-card {
		min-width: 0;
		background: var(--blog-paper);
		border: 1px solid var(--blog-line);
		border-radius: 4px;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			border-color 180ms ease;
	}

	.post-card:hover {
		transform: translateY(-3px);
		border-color: #9eb99b;
		box-shadow: 0 12px 28px rgb(38 61 52 / 8%);
	}

	.post-card.featured {
		grid-column: 1 / -1;
		background: #f2f4e9;
	}

	.post-link {
		display: flex;
		min-height: 250px;
		height: 100%;
		flex-direction: column;
		padding: clamp(1.35rem, 3vw, 2rem);
		color: inherit;
	}

	.post-link:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.card-topline,
	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.card-topline {
		color: var(--blog-muted);
		font-family: var(--san-serif);
		font-size: 0.78rem;
	}

	.card-topline time {
		text-align: right;
	}

	.post-category {
		padding: 0.32rem 0.6rem;
		border-radius: 2px;
		background: #e3eddf;
		color: #3c7959;
		font-size: 0.69rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.post-card h3 {
		margin: 1.4rem 0 0.65rem;
		text-align: left;
		font-size: clamp(1.35rem, 2.4vw, 1.85rem);
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.featured h3 {
		max-width: 760px;
		font-size: clamp(1.7rem, 3.8vw, 2.65rem);
	}

	.post-excerpt {
		max-width: 72ch;
		color: #5d6a60;
		font-family: var(--san-serif);
		font-size: 0.96rem;
		line-height: 1.75;
	}

	.card-footer {
		margin-top: auto;
		padding-top: 1.5rem;
	}

	.author {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		color: var(--blog-muted);
		font-family: var(--san-serif);
		font-size: 0.82rem;
	}

	.author-mark {
		display: inline-grid;
		width: 30px;
		height: 30px;
		place-items: center;
		border-radius: 50%;
		background: #e1ebd8;
		color: #3c7959;
		font-weight: 700;
	}

	.read-more {
		color: #3c7959;
		font-family: var(--san-serif);
		font-size: 0.82rem;
		font-weight: 700;
	}

	.read-more span {
		display: inline-block;
		margin-left: 0.2rem;
		transition: transform 180ms ease;
	}

	.post-link:hover .read-more span {
		transform: translate(2px, -2px);
	}

	.empty-state {
		padding: clamp(2rem, 6vw, 4.5rem) 1.5rem;
		border: 1px dashed #b7c4ae;
		background: var(--blog-paper);
		text-align: center;
	}

	.empty-icon {
		color: #3ca886;
		font-size: 1.8rem;
	}

	.empty-state h3 {
		margin: 0.8rem 0 0.45rem;
		font-size: 1.35rem;
	}

	.empty-state p {
		color: var(--blog-muted);
		font-family: var(--san-serif);
	}

	@media (max-width: 640px) {
		.blog-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.blog-hero {
			min-height: 300px;
			padding: 2rem 1.5rem 6rem;
		}

		.hero-note {
			right: 1.5rem;
			bottom: 1.1rem;
			width: 72px;
			height: 72px;
		}

		.hero-note span:first-child {
			font-size: 1.3rem;
		}

		.post-grid {
			grid-template-columns: 1fr;
		}

		.post-card.featured {
			grid-column: auto;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.post-card,
		.read-more span {
			transition: none;
		}
	}
</style>
