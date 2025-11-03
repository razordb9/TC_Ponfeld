<script lang="ts">
    import SponsorsCard from "./sponsors_card.svelte";
	import { sponsors } from '$lib/sponsors';
    
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
            <p>Wir sind negger</p>
        {/if}
    </div>
</div>

<style lang="scss">
    #sponsor {
        // height:620px;
        padding-top:150px;
        background-color: maroon;
        text-align: center;
    }
    .sponsor-container {
        //Grid
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        align-items: center;
        justify-items: center;
        margin: 2rem auto;
        width: 900px;
    }
    .sponsor-item {
        background: lightgray;
        padding: 1rem;
        text-align: center;
        // width: 150px;
        border-radius: 10px;
    }
</style>