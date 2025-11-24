<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
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
		<!-- {user?.name ?? "guest"} -->
		<Navigation user={data.user}>

		</Navigation>
	</header>
	<main class="main">
		
		{@render children?.()}
	</main>
	<footer>
		<Footer/>
	</footer>

</div>