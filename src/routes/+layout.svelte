<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/Components/footer.svelte';
	import Navigation from '$lib/Components/navigation.svelte';
	import About from '$lib/Components/about.svelte';
	import Sponsor from '$lib/Components/sponsor.svelte';
	import Contact from '$lib/Components/contact.svelte';
	import { routes } from '$lib/Components/routes';
	import { board_members } from "$lib/Components/board_members";
	import { sponsors } from '$lib/Components/sponsors';
	let { children } = $props();
</script>


<header class="site-header">
	<Navigation routes={routes}>

	</Navigation>
</header>
<main class="main">
	{@render children?.()}
	<About board_members={board_members}>

	</About>
	<Sponsor sponsors={sponsors}>
	</Sponsor>
	<Contact />
</main>
<Footer />


<style lang="scss">
	html {
    	scroll-behavior: smooth; 
  	}

	.site-header {
		position: relative;
		z-index: 2;
	}
	.main{
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 190px);
		height: 100%;
		// background-color: red;
		z-index: 1;
	}
</style>