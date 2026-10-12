<script lang="ts">
	let { data } = $props();
	let user = $derived(data.user);
</script>

<svelte:head>
	<title>Admin | TC Ponfeld</title>
	<meta name="description" content="Verwalte Blogbeiträge und Vereinsinhalte des TC Ponfeld." />
</svelte:head>

<main class="admin-page">
	<header class="dashboard-hero">
		<div class="hero-copy">
			<p class="eyebrow"><span aria-hidden="true"></span> TC Ponfeld · Verwaltung</p>
			<h1>Dein <em>Arbeitsbereich.</em></h1>
			<p class="hero-intro">
				Willkommen{#if user?.name}, {user.name}{/if}. Was möchtest du heute erledigen?
			</p>
		</div>
		<div class="account-badge">
			<span class="account-mark" aria-hidden="true">{user?.name?.charAt(0) ?? 'T'}</span>
			<span class="account-details">
				<strong>{user?.name ?? 'Vereinsmitglied'}</strong>
				<span>{user?.isAdmin ? 'Administrator' : 'Redaktion'}</span>
			</span>
		</div>
		<!-- <div class="hero-seal" aria-hidden="true">
			<span>TC</span>
			<span>PONFELD</span>
		</div> -->
	</header>

	<section class="dashboard-section" aria-labelledby="posts-heading">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Redaktion</p>
				<h2 id="posts-heading">Blogbeiträge</h2>
			</div>
			<span class="section-number" aria-hidden="true">01</span>
		</div>

		<div class="action-grid">
			<a class="action-card primary-card" href="/admin/posts/create">
				<span class="card-icon" aria-hidden="true">＋</span>
				<span class="card-copy">
					<strong>Beitrag erstellen</strong>
					<span>Eine neue Geschichte aus dem Vereinsleben veröffentlichen.</span>
				</span>
				<span class="card-arrow" aria-hidden="true">↗</span>
			</a>
			<a class="action-card" href="/admin/posts">
				<span class="card-icon list-icon" aria-hidden="true">≡</span>
				<span class="card-copy">
					<strong>Beiträge verwalten</strong>
					<span>Alle Blogbeiträge ansehen und bearbeiten.</span>
				</span>
				<span class="card-arrow" aria-hidden="true">↗</span>
			</a>
		</div>
	</section>

	{#if user?.isAdmin}
		<section class="dashboard-section admin-tools" aria-labelledby="admin-tools-heading">
			<div class="section-heading">
				<div>
					<p class="eyebrow">Zugriff nur für Admins</p>
					<h2 id="admin-tools-heading">Administration</h2>
				</div>
				<span class="section-number" aria-hidden="true">02</span>
			</div>

			<div class="action-grid">
				<a class="action-card" href="/admin/users">
					<span class="card-icon user-icon" aria-hidden="true">＋</span>
					<span class="card-copy">
						<strong>Benutzer verwalten</strong>
						<span>Konten ansehen, bearbeiten und neue Benutzer anlegen.</span>
					</span>
					<span class="card-arrow" aria-hidden="true">↗</span>
				</a>
				<a class="action-card" href="/admin/design">
					<span class="card-icon design-icon" aria-hidden="true">✳</span>
					<span class="card-copy">
						<strong>Design prüfen</strong>
						<span>Zur Designvorschau der Vereinswebsite wechseln.</span>
					</span>
					<span class="card-arrow" aria-hidden="true">↗</span>
				</a>
			</div>
		</section>
	{/if}
</main>

<style lang="scss">
	.admin-page {
		--admin-ink: #263d34;
		--admin-muted: #69766c;
		--admin-paper: #fbfaf4;
		--admin-line: #dfe3d6;
		max-width: 1280px;
		margin: 0 auto;
		padding: 3rem clamp(1.25rem, 5vw, 5rem) 6rem;
		color: var(--admin-ink);
	}

	.dashboard-hero {
		position: relative;
		display: flex;
		min-height: 280px;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		overflow: hidden;
		padding: clamp(2rem, 6vw, 4.5rem);
		background:
			radial-gradient(ellipse at 88% 16%, rgb(239 238 166 / 55%), transparent 34%),
			linear-gradient(125deg, #e7eedc 0%, #f5f4df 56%, #e8f1df 100%);
		border-radius: 4px;
	}

	.hero-copy {
		position: relative;
		z-index: 1;
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

	.hero-copy > .eyebrow span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #3ca886;
	}

	.dashboard-hero h1 {
		margin: 1rem 0 0.75rem;
		text-align: left;
		font-size: clamp(2.5rem, 5.5vw, 4.5rem);
		line-height: 1.04;
		letter-spacing: -0.045em;
	}

	.dashboard-hero h1 em {
		color: #3c7959;
		font-weight: 500;
	}

	.hero-intro {
		color: #526358;
		font-family: var(--san-serif);
		font-size: 1.05rem;
	}

	.account-badge {
		position: relative;
		z-index: 1;
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.75rem;
		padding: 0.65rem 1rem 0.65rem 0.65rem;
		border: 1px solid rgb(60 121 89 / 20%);
		border-radius: 40px;
		background: rgb(251 250 244 / 75%);
	}

	.account-mark {
		display: inline-grid;
		width: 40px;
		height: 40px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #3c7959;
		font-family: var(--san-serif);
		font-size: 1.1rem;
		font-weight: 700;
	}

	.account-details {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		font-family: var(--san-serif);
		font-size: 0.8rem;
		line-height: 1.3;
	}

	.account-details strong {
		color: var(--admin-ink);
	}

	.account-details > span {
		color: var(--admin-muted);
	}

	.dashboard-section {
		padding-top: clamp(2.75rem, 5vw, 4rem);
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

	.section-number {
		padding-bottom: 0.2rem;
		color: #9aa69a;
		font-family: var(--san-serif);
		font-size: 0.85rem;
		font-weight: 700;
	}

	.action-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.action-card {
		display: flex;
		min-height: 142px;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.4rem;
		border: 1px solid var(--admin-line);
		border-radius: 4px;
		background: var(--admin-paper);
		color: var(--admin-ink);
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			border-color 180ms ease;
	}

	.action-card:hover {
		transform: translateY(-3px);
		border-color: #9eb99b;
		box-shadow: 0 12px 28px rgb(38 61 52 / 8%);
	}

	.action-card:focus-visible {
		outline: 3px solid #3ca886;
		outline-offset: 4px;
	}

	.primary-card {
		background: #f2f4e9;
	}

	.card-icon {
		display: inline-grid;
		width: 42px;
		height: 42px;
		flex: 0 0 42px;
		place-items: center;
		border-radius: 50%;
		background: #dce9d5;
		color: #347755;
		font-family: var(--san-serif);
		font-size: 1.6rem;
		line-height: 1;
	}

	.list-icon {
		font-size: 1.8rem;
	}

	.user-icon {
		background: #e7eddb;
	}

	.design-icon {
		background: #eeeedd;
		font-size: 1.25rem;
	}

	.card-copy {
		display: flex;
		min-width: 0;
		flex: 1;
		flex-direction: column;
		gap: 0.4rem;
		padding-top: 0.15rem;
	}

	.card-copy strong {
		font-size: 1.15rem;
		line-height: 1.3;
	}

	.card-copy > span {
		color: var(--admin-muted);
		font-family: var(--san-serif);
		font-size: 0.88rem;
		line-height: 1.55;
	}

	.card-arrow {
		margin-left: auto;
		color: #3c7959;
		font-size: 1.1rem;
		transition: transform 180ms ease;
	}

	.action-card:hover .card-arrow {
		transform: translate(2px, -2px);
	}

	@media (max-width: 760px) {
		.dashboard-hero {
			align-items: flex-start;
			flex-direction: column;
		}

		.account-badge {
			align-self: flex-start;
		}

	}

	@media (max-width: 560px) {
		.admin-page {
			padding-top: 1.5rem;
			padding-bottom: 4rem;
		}

		.dashboard-hero {
			min-height: 0;
			gap: 1.5rem;
			padding: 2rem 1.5rem;
		}

		.hero-intro {
			max-width: 28ch;
			font-size: 0.95rem;
		}

		.action-grid {
			grid-template-columns: 1fr;
		}

		.action-card {
			min-height: 125px;
			padding: 1.15rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.action-card,
		.card-arrow {
			transition: none;
		}
	}
</style>
