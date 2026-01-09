<script lang="ts">
	import "$lib/css/custom_styles.css";
	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import type { Snippet } from "svelte";
  	import type { ExtendedUser } from "../app";
	
	let { data, children }: {data:{user:ExtendedUser}, children: Snippet} = $props();
 	let imageOut = $state(false);
	let app = $state(null);
	let user = $state<ExtendedUser | null>(null);
	
	console.log(data.user);
	
	let y = $state(0);

	const options = {
		root: null,
		threashold: 0.05
	};

	$effect(() => {
		user = data?.user;
		// console.log("y: ", y);

		const obs = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if(entry.target.className?.includes('hero')) {
                    imageOut = !entry.isIntersecting;
                }
            }
        },
            options
        );

        const targets = app.querySelectorAll('.hero');
        targets.forEach((el) => {
			obs.observe(el);	
		});

        return () => obs.disconnect();
	}) ;
</script>

<svelte:window bind:scrollY={y} />

<div class="app" bind:this={app}>
	<Navigation user={data.user} scroll={imageOut}>

	</Navigation>
	<main class="main">
		<div class="layout">
			{@render children?.()}
		</div>
	</main>
	<footer>
		<Footer/>
	</footer>

</div>