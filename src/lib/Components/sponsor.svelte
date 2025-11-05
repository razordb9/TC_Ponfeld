<script lang="ts">
    import SponsorsCard from "./sponsors_card.svelte";
    import { sponsors } from '$lib/project.config';
    
    console.log(sponsors);
</script>

<div id="sponsor">
    <h1>Wer sind unsere Sponsoren</h1>
    <div class="sponsor-container">
        {#if sponsors.length}
        {#each sponsors as sponsor}
            <div class=sponsor-item>
                <SponsorsCard sponsor={sponsor}></SponsorsCard>
            </div>
        {/each}
        {:else}
            <p>Hier könnte Ihr Sponsoring stehen</p>
        {/if}
    </div>
</div>