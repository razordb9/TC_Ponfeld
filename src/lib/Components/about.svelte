<script lang="ts">
    import AboutCard from "./about_card.svelte";
	import { board_members } from "$lib/Components/board_members";
    

    

    console.log(board_members)
</script>


<div id="about">   
    <h1>Wer sind wir?</h1>
    <div class="about-container">
        {#each board_members as member}
            <div class="about-item">
                <AboutCard boardmember={member}></AboutCard>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    #about {
        // display: flex;
        // height:600px;
        padding-top: 150px;
        background-color: turquoise;
        text-align: center;
    }
    .about-container {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        align-items: center;
        justify-items: center;
        margin: 2rem auto;
        width: 900px;
        
    }
    .about-item {
        //Flex
        background: lightgray;
        padding: 1rem;
        text-align: center;
        border-radius: 10px;
        width: 150px;
    }
</style>