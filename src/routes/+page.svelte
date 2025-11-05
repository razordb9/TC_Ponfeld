<script lang="ts">
	import "$lib/css/custom_styles.css";
	import About from '$lib/Components/about.svelte';
	import Sponsor from '$lib/Components/sponsor.svelte';
    import type { ActionData, PageProps } from "./$types";
    import Contact from "$lib/Components/Contact.svelte";
    let { form }: { form: ActionData } = $props(); 

</script>

<section class="hero">
    <div class="content">
        <h1>TC Grössinghof Ponfeld</h1>
        <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a>
    </div>

</section>
    <main class="main">
	<About/>

	<Sponsor>
	</Sponsor>
	<Contact {form} />
</main>