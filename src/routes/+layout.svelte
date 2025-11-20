<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/Components/footer.svelte';
	import Navigation from '$lib/Components/navigation.svelte';
	import type { Snippet } from "svelte";
  	import type { ExtendedUser } from "../app";
	
	let { data, children }: {data:{user:ExtendedUser}, children: Snippet} = $props();

	let user = $state<ExtendedUser | null>(null);
	console.log(data.user);
	
	$effect(() => {
		user = data?.user;
	}) 

</script>
<div class="app">
	<header class="site-header">
		{user?.name ?? "guest"}
		<Navigation user={data.user}>

		</Navigation>
	</header>
	<main>
		
		{@render children?.()}
		<Footer/>
	</main>
</div>





<style lang="scss">
	html {
    	scroll-behavior: smooth; 
  	}

	.site-header {
		top: 0;
		position: fixed;
		z-index: 2;
	}

	main {
		margin-top: 150px;
	}
	
</style>