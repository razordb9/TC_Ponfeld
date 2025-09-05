<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/Components/footer.svelte';
	import Navigation from '$lib/Components/navigation.svelte';
	import About from '$lib/Components/about.svelte';
	import Sponsor from '$lib/Components/sponsor.svelte';
	import Contact from '$lib/Components/contact.svelte';
	import { routes } from '$lib/Components/routes';

	let { children } = $props();
</script>


<header>
	<Navigation routes={routes}>

	</Navigation>
</header>
<main class="main">
	{@render children?.()}
	<About />
	<Sponsor />
	<Contact />
</main>
<Footer />


<style lang="scss">
	html {
    	scroll-behavior: smooth; 
  	}

	.main{
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 190px);
		height: 100%;
		background-color: red;
	}
</style>