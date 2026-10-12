<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import Quill from 'quill';
	import 'quill/dist/quill.snow.css';
	import type { BlogPost } from '../../../../../app';

	let quillContainer: HTMLElement;
	let editor: Quill | undefined;
	let { data, form }: { data: { post: BlogPost }; form: { error?: string } | null } = $props();

	let title = $state(data.post.title);
	let html = $state(data.post.html ?? '');

	onMount(() => {
		if (!browser) return;

		editor = new Quill(quillContainer, {
			theme: 'snow',
			placeholder: 'Schreibe hier deinen Beitrag …',
			modules: {
				toolbar: [
					[{ header: [1, 2, 3, false] }],
					['bold', 'italic', 'underline', 'strike'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					[{ align: ['center', 'right', 'justify'] }],
					['link', 'image', 'video'],
					['clean']
				]
			}
		});

		editor.root.innerHTML = html;
		editor.on('text-change', refresh);

		return () => {
			editor?.off('text-change', refresh);
			editor = undefined;
		};
	});

	const refresh = () => {
		if (editor) html = editor.root.innerHTML;
	};

	const sanitize = (rawHTML: string) => DOMPurify.sanitize(rawHTML);

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
</script>

<svelte:head>
	<title>Beitrag bearbeiten | TC Ponfeld</title>
	<meta name="description" content="Blogbeitrag des TC Ponfeld bearbeiten und Vorschau ansehen." />
</svelte:head>

<main class="edit-page">
	<a class="back-link" href={`/admin/posts/${data.post.slug}`}>
		<span aria-hidden="true">←</span> Zurück zum Beitrag
	</a>

	<header class="edit-hero">
		<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Redaktion</p>
		<h1>Beitrag <em>bearbeiten.</em></h1>
		<p class="hero-intro">
			Überarbeite Inhalt und Titel. Sieh dir die Vorschau an, bevor du deine Änderungen speicherst.
		</p>
		<div class="post-meta">
			<span>Erstellt von {data.post.authorName ?? 'TC Ponfeld'}</span>
			<span aria-hidden="true">·</span>
			<time datetime={data.post.createdAt.toISOString()}>
				{formattedDate(data.post.createdAt)}
			</time>
		</div>
	</header>

	{#if form?.error}
		<p class="feedback" role="alert">{form.error}</p>
	{/if}

	<form method="POST" use:enhance action="?/updatePost" class="edit-form">
		<section class="editor-panel" aria-labelledby="editor-heading">
			<div class="panel-heading">
				<div>
					<p class="eyebrow">Inhalt</p>
					<h2 id="editor-heading">Beitragsdetails</h2>
				</div>
				<span class="step-number" aria-hidden="true">01</span>
			</div>

			<label class="title-field" for="title">Titel des Beitrags</label>
			<input type="hidden" name="slug" value={data.post.slug} />
			<input
				bind:value={title}
				type="text"
				id="title"
				name="title"
				placeholder="Zum Beispiel: Ein erfolgreicher Saisonstart"
				required
				minlength="2"
				maxlength="160"
			/>

			<label class="editor-label" for="editor">Beitragstext</label>
			<div class="editor-frame">
				<div bind:this={quillContainer} id="editor"></div>
			</div>

			<input bind:value={html} type="hidden" name="editorContent" />

			<div class="form-footer">
				<p>Änderungen werden sofort im Beitrag übernommen, sobald du speicherst.</p>
				<button class="save-button" type="submit">Änderungen speichern</button>
			</div>
		</section>

		<section class="preview-panel" aria-labelledby="preview-heading">
			<div class="panel-heading">
				<div>
					<p class="eyebrow">Vorschau</p>
					<h2 id="preview-heading">So sieht es aus</h2>
				</div>
				<span class="step-number" aria-hidden="true">02</span>
			</div>
			<article class="preview-card">
				<div class="preview-meta">
					<span class="post-label">Vereinsblog</span>
					<span>{formattedDate(data.post.createdAt)}</span>
				</div>
				<h3>{title || 'Dein Beitragstitel'}</h3>
				<div class="preview-content">
					{@html sanitize(html)}
				</div>
				<p class="preview-author">
					<span class="avatar" aria-hidden="true">{data.post.authorName?.charAt(0) ?? 'T'}</span>
					<span>{data.post.authorName ?? 'TC Ponfeld'}</span>
				</p>
			</article>
		</section>
	</form>

	<section class="danger-zone" aria-labelledby="danger-heading">
		<div>
			<p class="eyebrow">Unwiderruflich</p>
			<h2 id="danger-heading">Beitrag löschen</h2>
			<p>Der Beitrag wird dauerhaft entfernt und kann danach nicht wiederhergestellt werden.</p>
		</div>
		<form
			method="POST"
			use:enhance
			action="?/deletePost"
			onsubmit={(event) => {
				if (!confirm('Diesen Beitrag wirklich dauerhaft löschen?')) event.preventDefault();
			}}
		>
			<button class="delete-button" type="submit">Beitrag löschen</button>
		</form>
	</section>
</main>

<style lang="scss">
	.edit-page {
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
	button:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.edit-hero {
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

	.edit-hero > .eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.edit-hero h1 {
		margin: 1rem 0 0.6rem;
		text-align: left;
		font-size: clamp(2.3rem, 5vw, 4rem);
		line-height: 1.05;
		letter-spacing: -0.04em;
	}

	.edit-hero h1 em {
		color: #3c7959;
		font-weight: 500;
	}

	.hero-intro {
		max-width: 65ch;
		color: #526358;
		font-family: var(--san-serif);
		line-height: 1.65;
	}

	.post-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.2rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.82rem;
	}

	.feedback {
		margin-top: 1rem;
		padding: 0.9rem 1rem;
		border: 1px solid #d8b3a9;
		background: #fff4f0;
		color: #813c2e;
		font-family: var(--san-serif);
	}

	.edit-form {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
		align-items: start;
		gap: 1.2rem;
		margin-top: 2rem;
	}

	.editor-panel,
	.preview-panel {
		min-width: 0;
		padding: clamp(1.2rem, 3vw, 1.8rem);
		border: 1px solid var(--admin-line);
		border-radius: 4px;
		background: var(--admin-paper);
	}

	.panel-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.4rem;
		padding-bottom: 0.9rem;
		border-bottom: 1px solid var(--admin-line);
	}

	.panel-heading h2,
	.danger-zone h2 {
		margin: 0.35rem 0 0;
		text-align: left;
		font-size: 1.45rem;
		letter-spacing: -0.02em;
	}

	.step-number {
		color: #9aa69a;
		font-family: var(--san-serif);
		font-size: 0.85rem;
		font-weight: 700;
	}

	.title-field,
	.editor-label {
		display: block;
		margin: 0 0 0.45rem;
		color: #526358;
		font-family: var(--san-serif);
		font-size: 0.82rem;
		font-weight: 700;
	}

	.editor-panel input:not([type='hidden']) {
		width: 100%;
		margin: 0 0 1.3rem;
		padding: 0.8rem 0.9rem;
		border: 1px solid #cbd4c4;
		border-radius: 3px;
		background: #fffefa;
		box-shadow: none;
		font-family: var(--san-serif);
		font-size: 1rem;
	}

	.editor-panel input:not([type='hidden']):focus {
		border-color: #3ca886;
		box-shadow: 0 0 0 2px rgb(60 168 134 / 16%);
	}

	.editor-frame {
		overflow: hidden;
		border: 1px solid #cbd4c4;
		border-radius: 3px;
		background: white;
	}

	.editor-frame :global(.ql-toolbar.ql-snow) {
		border: 0;
		border-bottom: 1px solid #dfe3d6;
		background: #f4f5ed;
	}

	.editor-frame :global(.ql-container.ql-snow) {
		min-height: 310px;
		border: 0;
		font-family: var(--san-serif);
		font-size: 1rem;
	}

	.editor-frame :global(.ql-editor) {
		min-height: 310px;
		line-height: 1.75;
	}

	.form-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1.2rem;
	}

	.form-footer p {
		max-width: 36ch;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.78rem;
		line-height: 1.5;
	}

	.save-button,
	.delete-button {
		width: auto;
		margin: 0;
		padding: 0.75rem 1rem;
		border-radius: 3px;
		font-family: var(--san-serif);
		font-size: 0.86rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.save-button {
		border: 1px solid #3c7959;
		background: #3c7959;
		color: white;
	}

	.save-button:hover {
		background: #2f6248;
	}

	.preview-card {
		padding: 1.1rem;
		border: 1px solid var(--admin-line);
		background: white;
	}

	.preview-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.72rem;
	}

	.post-label {
		padding: 0.25rem 0.5rem;
		border-radius: 2px;
		background: #e3eddf;
		color: #3c7959;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.preview-card h3 {
		margin: 1rem 0 0.7rem;
		text-align: left;
		font-size: 1.5rem;
		line-height: 1.2;
	}

	.preview-content {
		max-height: 420px;
		overflow: auto;
		color: #45554a;
		font-family: var(--san-serif);
		font-size: 0.9rem;
		line-height: 1.7;
		overflow-wrap: anywhere;
	}

	.preview-content :global(p) {
		margin: 0 0 0.9rem;
	}

	.preview-content :global(h1),
	.preview-content :global(h2),
	.preview-content :global(h3) {
		margin: 1.2rem 0 0.55rem;
		text-align: left;
		line-height: 1.25;
	}

	.preview-content :global(ul),
	.preview-content :global(ol) {
		margin: 0 0 1rem 1.3rem;
		padding: 0;
	}

	.preview-content :global(li) {
		list-style: revert;
	}

	.preview-content :global(a) {
		color: #347755;
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.preview-content :global(img) {
		height: auto;
		margin: 1rem auto;
	}

	.preview-author {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		margin-top: 1rem;
		padding-top: 0.8rem;
		border-top: 1px solid var(--admin-line);
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.78rem;
	}

	.avatar {
		display: inline-grid;
		width: 27px;
		height: 27px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #3c7959;
		font-weight: 700;
	}

	.danger-zone {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2rem;
		padding: 1.4rem 1.6rem;
		border: 1px solid #e4c9c2;
		border-radius: 4px;
		background: #fff9f6;
	}

	.danger-zone .eyebrow {
		color: #9a493a;
	}

	.danger-zone h2 {
		font-size: 1.2rem;
	}

	.danger-zone > div > p:last-child {
		margin-top: 0.35rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.82rem;
	}

	.delete-button {
		border: 1px solid #c78272;
		background: transparent;
		color: #9a493a;
		cursor: pointer;
	}

	.delete-button:hover {
		background: #fff0ec;
	}

	@media (max-width: 900px) {
		.edit-form {
			grid-template-columns: 1fr;
		}

		.preview-card {
			max-width: none;
		}
	}

	@media (max-width: 560px) {
		.edit-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.edit-hero {
			padding: 2rem 1.5rem;
		}

		.form-footer,
		.danger-zone {
			align-items: stretch;
			flex-direction: column;
		}

		.save-button,
		.delete-button {
			width: 100%;
		}
	}
</style>
