<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import type { User } from "better-auth";
	import type { Snippet } from "svelte";
	
	let { data, children }: {data:{user:User}, children: Snippet} = $props();

	let user = $state<User | null>(null);
	
	
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