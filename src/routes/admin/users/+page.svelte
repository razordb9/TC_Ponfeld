<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	type UserAccount = {
		id: string;
		name: string;
		email: string;
		isAdmin: boolean;
		createdAt: Date;
		postCount: number;
	};

	let { data, form }: { data: { users: UserAccount[] }; form: ActionData } = $props();

	const formattedDate = (date: Date) =>
		date.toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});

	const confirmDelete = (event: SubmitEvent) => {
		if (!window.confirm('Möchtest du dieses Benutzerkonto wirklich löschen?')) {
			event.preventDefault();
		}
	};
</script>

<svelte:head>
	<title>Benutzer verwalten | TC Ponfeld</title>
	<meta name="description" content="Benutzerkonten der TC-Ponfeld-Website verwalten." />
</svelte:head>

<main class="users-page">
	<a class="back-link" href="/admin"><span aria-hidden="true">←</span> Zurück zur Verwaltung</a>

	<header class="users-hero">
		<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Administration</p>
		<div class="hero-heading">
			<div>
				<h1>Benutzer <em>verwalten.</em></h1>
				<p>Konten, Kontaktdaten und Zugriffsrechte der Website im Blick.</p>
			</div>
			<a class="create-button" href="/admin/users/create">
				<span aria-hidden="true">＋</span> Benutzer anlegen
			</a>
		</div>
	</header>

	<section class="user-section" aria-labelledby="users-heading">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Kontenübersicht</p>
				<h2 id="users-heading">Alle Benutzer</h2>
			</div>
			<span class="user-count">{data.users.length} {data.users.length === 1 ? 'Konto' : 'Konten'}</span>
		</div>

		{#if form?.message}
			<p class:success={form.success} class="feedback" role="status">{form.message}</p>
		{/if}

		{#if data.users.length > 0}
			<div class="user-list">
				{#each data.users as account (account.id)}
					<article class="user-card">
						<div class="user-card-heading">
							<span class="avatar" aria-hidden="true">{account.name.charAt(0) || 'T'}</span>
							<div class="user-summary">
								<h3>{account.name}</h3>
								<p>
									{account.isAdmin ? 'Administrator' : 'Redaktion'}
									<span aria-hidden="true">·</span>
									{account.postCount} {account.postCount === 1 ? 'Beitrag' : 'Beiträge'}
								</p>
							</div>
							<time datetime={account.createdAt.toISOString()}>
								Seit {formattedDate(account.createdAt)}
							</time>
						</div>

						<div class="card-divider"></div>

						<form method="POST" action="?/updateUser" use:enhance class="edit-form">
							<input type="hidden" name="id" value={account.id} />
							<label>
								<span>Name</span>
								<input name="name" value={account.name} required minlength="2" autocomplete="name" />
							</label>
							<label>
								<span>E-Mail-Adresse</span>
								<input
									name="email"
									type="email"
									value={account.email}
									required
									autocomplete="email"
								/>
							</label>
							<label class="role-control">
								<span>Administrator</span>
								<span class="toggle-line">
									<input
										class="admin-checkbox"
										type="checkbox"
										name="isAdmin"
										value="true"
										checked={account.isAdmin}
									/>
									<span>{account.isAdmin ? 'Ja' : 'Nein'}</span>
								</span>
							</label>
							<div class="form-actions">
								<button class="save-button" type="submit">Speichern</button>
							</div>
						</form>

						<div class="card-footer">
							{#if account.postCount > 0}
								<p class="delete-note">
									Konto erst löschbar, wenn die {account.postCount === 1 ? 'Beitragsautorenschaft' : 'Beitragsautorenschaften'}
									übertragen wurde.
								</p>
							{:else}
								<p class="delete-note">Konto kann gelöscht werden.</p>
							{/if}
							<div class="user-actions">
								<form method="POST" action="?/resetPassword" use:enhance>
									<input type="hidden" name="id" value={account.id} />
									<button class="reset-button" type="submit">Passwort-Reset senden</button>
								</form>
								<form
									method="POST"
									action="?/deleteUser"
									onsubmit={confirmDelete}
									use:enhance
								>
									<input type="hidden" name="id" value={account.id} />
									<button
										class="delete-button"
										type="submit"
										disabled={account.postCount > 0}
									>
										Löschen
									</button>
								</form>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<span aria-hidden="true">✳</span>
				<h3>Noch keine Benutzerkonten vorhanden.</h3>
				<p>Lege das erste Konto für die Website-Verwaltung an.</p>
				<a class="create-button" href="/admin/users/create">Benutzer anlegen</a>
			</div>
		{/if}
	</section>
</main>

<style lang="scss">
	.users-page {
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
	button:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.users-hero {
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

	.users-hero > .eyebrow span {
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

	.user-section {
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

	.user-count {
		padding-bottom: 0.2rem;
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.88rem;
	}

	.feedback {
		margin-bottom: 1rem;
		padding: 0.9rem 1rem;
		border: 1px solid #d8b3a9;
		background: #fff4f0;
		color: #813c2e;
		font-family: var(--san-serif);
		font-size: 0.9rem;
	}

	.feedback.success {
		border-color: #b4cbb0;
		background: #f0f6eb;
		color: #326145;
	}

	.user-list {
		display: grid;
		gap: 1rem;
	}

	.user-card {
		padding: 1.35rem;
		border: 1px solid var(--admin-line);
		border-radius: 4px;
		background: var(--admin-paper);
	}

	.user-card-heading {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.avatar {
		display: inline-grid;
		width: 42px;
		height: 42px;
		flex: 0 0 42px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #3c7959;
		font-family: var(--san-serif);
		font-size: 1.05rem;
		font-weight: 700;
	}

	.user-summary {
		min-width: 0;
	}

	.user-summary h3 {
		margin: 0;
		text-align: left;
		font-size: 1.1rem;
	}

	.user-summary p,
	.user-card-heading time {
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.8rem;
	}

	.user-summary p span {
		padding: 0 0.25rem;
	}

	.user-card-heading time {
		margin-left: auto;
	}

	.card-divider {
		margin: 1.15rem 0;
		border-top: 1px solid var(--admin-line);
	}

	.edit-form {
		display: grid;
		grid-template-columns: minmax(130px, 0.8fr) minmax(200px, 1.3fr) minmax(130px, 0.65fr) auto;
		align-items: end;
		gap: 0.85rem;
	}

	.edit-form label {
		display: flex;
		min-width: 0;
		flex-direction: column;
		gap: 0.35rem;
		margin: 0;
		color: #526358;
		font-family: var(--san-serif);
		font-size: 0.77rem;
		font-weight: 700;
	}

	.edit-form input:not([type='checkbox']) {
		width: 100%;
		margin: 0;
		padding: 0.65rem 0.7rem;
		border: 1px solid #cbd4c4;
		border-radius: 3px;
		background: #fffefa;
		box-shadow: none;
		font-size: 0.9rem;
	}

	.edit-form input:not([type='checkbox']):focus {
		border-color: #3ca886;
		box-shadow: 0 0 0 2px rgb(60 168 134 / 16%);
	}

	.role-control .toggle-line {
		display: flex;
		height: 42px;
		align-items: center;
		gap: 0.5rem;
		color: var(--admin-ink);
		font-size: 0.88rem;
		font-weight: 400;
	}

	.admin-checkbox {
		width: 18px;
		height: 18px;
		margin: 0;
		accent-color: #3c7959;
	}

	.form-actions {
		display: flex;
		justify-content: flex-end;
	}

	.save-button,
	.reset-button,
	.delete-button {
		width: auto;
		margin: 0;
		padding: 0.68rem 0.9rem;
		border-radius: 3px;
		font-family: var(--san-serif);
		font-size: 0.82rem;
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

	.reset-button {
		border: 1px solid #9eb99b;
		background: transparent;
		color: #347755;
	}

	.reset-button:hover {
		background: #edf3e8;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1rem;
		padding-top: 0.8rem;
		border-top: 1px solid var(--admin-line);
	}

	.user-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.6rem;
	}

	.delete-note {
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.78rem;
	}

	.delete-button {
		border: 1px solid #c78272;
		background: transparent;
		color: #9a493a;
		cursor: pointer;
	}

	.delete-button:not(:disabled):hover {
		background: #fff0ec;
	}

	.delete-button:disabled {
		border-color: #d7d9d2;
		color: #999f98;
		cursor: not-allowed;
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

	@media (max-width: 800px) {
		.edit-form {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.users-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.users-hero {
			padding: 2rem 1.5rem;
		}

		.hero-heading {
			align-items: flex-start;
			flex-direction: column;
		}

		.edit-form {
			grid-template-columns: 1fr;
		}

		.form-actions {
			justify-content: stretch;
		}

		.form-actions button {
			width: 100%;
		}

		.user-card-heading {
			align-items: flex-start;
		}

		.user-card-heading time {
			max-width: 88px;
			text-align: right;
		}

		.card-footer {
			align-items: flex-start;
			flex-direction: column;
		}

		.user-actions {
			width: 100%;
			justify-content: flex-start;
		}

		.user-actions form {
			flex: 1;
		}

		.user-actions button {
			width: 100%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.create-button {
			transition: none;
		}
	}
</style>
