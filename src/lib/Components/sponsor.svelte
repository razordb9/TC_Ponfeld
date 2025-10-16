<script lang="ts">
    import SponsorsCard from "./sponsors_card.svelte";
    export let sponsors: {
        name: string,
        logo: string,
        link: string
    }[];

    console.log(sponsors);
</script>

<div id="sponsor">
    <h1>Wer sind unsere Sponsoren</h1>
    <div class="sponsor-container">
        {#each sponsors as sponsor}
            <div class=sponsor-item>
                <SponsorsCard name={sponsor.name} logo={sponsor.logo} link={sponsor.link}></SponsorsCard>
            </div>
        {/each}
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

        display:flex;
        justify-content: center;
        // max-height: 480px;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
    }
    .sponsor-item {
        flex: 0 0 calc(30% - 1rem);   /* grow/shrink with roughly half width */
        box-sizing: border-box;
        background: lightgray;
        padding: 1rem;
        text-align: center;
        // width: 150px;
        border-radius: 10px;
    }
</style>