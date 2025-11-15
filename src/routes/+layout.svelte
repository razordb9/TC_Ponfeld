<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	
	let { children } = $props();
</script>


<header class="site-header">
	<Navigation>

	</Navigation>
</header>
	{@render children?.()}

<Footer/>


<style lang="scss">
	html {
    	scroll-behavior: smooth; 
  	}

	.site-header {
		position: relative;
		z-index: 2;
	}
	
</style>