<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import Quill from 'quill';
	import 'quill/dist/quill.snow.css';

	let quillContainer: HTMLElement;
	let editor: Quill | undefined;
	let html = $state('');
	let title = $state('');
	let { form }: { form: { error?: string } | null } = $props();

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
</script>

<svelte:head>
	<title>Beitrag erstellen | TC Ponfeld</title>
	<meta name="description" content="Einen neuen Blogbeitrag für den TC Ponfeld erstellen." />
</svelte:head>

<main class="create-page">
	<a class="back-link" href="/admin/posts">
		<span aria-hidden="true">←</span> Zurück zu den Beiträgen
	</a>

	<header class="create-hero">
		<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Redaktion</p>
		<h1>Neue Geschichte <em>erzählen.</em></h1>
		<p class="hero-intro">
			Teile Spielberichte, Vereinsneuigkeiten und besondere Momente mit allen Besucherinnen und
			Besuchern.
		</p>
	</header>

	{#if form?.error}
		<p class="feedback" role="alert">{form.error}</p>
	{/if}

	<form method="POST" use:enhance action="?/createpost" class="create-form">
		<section class="editor-panel" aria-labelledby="editor-heading">
			<div class="panel-heading">
				<div>
					<p class="eyebrow">Inhalt</p>
					<h2 id="editor-heading">Dein Beitrag</h2>
				</div>
				<span class="step-number" aria-hidden="true">01</span>
			</div>

			<label class="title-field" for="title">Titel des Beitrags</label>
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
				<p>Dein Beitrag wird mit deinem Benutzerkonto als Autor veröffentlicht.</p>
				<button class="publish-button" type="submit">Beitrag veröffentlichen</button>
			</div>
		</section>

		<section class="preview-panel" aria-labelledby="preview-heading">
			<div class="panel-heading">
				<div>
					<p class="eyebrow">Live-Vorschau</p>
					<h2 id="preview-heading">So sieht es aus</h2>
				</div>
				<span class="step-number" aria-hidden="true">02</span>
			</div>
			<article class="preview-card">
				<div class="preview-meta">
					<span class="post-label">Vereinsblog</span>
					<span>Neuer Beitrag</span>
				</div>
				<h3>{title || 'Dein Beitragstitel'}</h3>
				{#if html.trim() && html !== '<p><br></p>'}
					<div class="preview-content">
						{@html sanitize(html)}
					</div>
				{:else}
					<p class="preview-placeholder">
						Dein formatierter Beitragstext erscheint hier, während du schreibst.
					</p>
				{/if}
				<p class="preview-author">
					<span class="avatar" aria-hidden="true">T</span>
					<span>Dein Benutzerkonto</span>
				</p>
			</article>
		</section>
	</form>
</main>

<style lang="scss">
	.create-page {
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

	.create-hero {
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

	.create-hero > .eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.create-hero h1 {
		margin: 1rem 0 0.6rem;
		text-align: left;
		font-size: clamp(2.3rem, 5vw, 4rem);
		line-height: 1.05;
		letter-spacing: -0.04em;
	}

	.create-hero h1 em {
		color: #3c7959;
		font-weight: 500;
	}

	.hero-intro {
		max-width: 65ch;
		color: #526358;
		font-family: var(--san-serif);
		line-height: 1.65;
	}

	.feedback {
		margin-top: 1rem;
		padding: 0.9rem 1rem;
		border: 1px solid #d8b3a9;
		background: #fff4f0;
		color: #813c2e;
		font-family: var(--san-serif);
	}

	.create-form {
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

	.panel-heading h2 {
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

	.publish-button {
		width: auto;
		margin: 0;
		padding: 0.75rem 1rem;
		border: 1px solid #3c7959;
		border-radius: 3px;
		background: #3c7959;
		color: white;
		font-family: var(--san-serif);
		font-size: 0.86rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.publish-button:hover {
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

	.preview-placeholder {
		color: #8a9589;
		font-family: var(--san-serif);
		font-size: 0.9rem;
		font-style: italic;
		line-height: 1.7;
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

	@media (max-width: 900px) {
		.create-form {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.create-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.create-hero {
			padding: 2rem 1.5rem;
		}

		.form-footer {
			align-items: stretch;
			flex-direction: column;
		}

		.publish-button {
			width: 100%;
		}
	}
</style>
