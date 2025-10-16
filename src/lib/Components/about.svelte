<script lang="ts">
    import AboutCard from "./about_card.svelte";
    export let board_members: {
        name:string;
        function:string;
        picture:string;
        about:string;
    }[];

    console.log(board_members)
</script>


<div id="about">   
        <h1>Wer sind wir?</h1>

    <div class="about-container">
        {#each board_members as member}
            <div class="about-item">
                <AboutCard name={member.name} funktion={member.function} picture={member.picture} about={member.about}></AboutCard>
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

        display:flex;
        // max-height: 480px;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
    }
    .about-item {
        flex: 1 1 45%;   /* grow/shrink with roughly half width */
        box-sizing: border-box;
        background: lightgray;
        padding: 1rem;
        text-align: center;
        border-radius: 10px;
    }
    

    // .item {
    //     flex: 1 1 45%;   /* grow/shrink with roughly half width */
    //     box-sizing: border-box;
    //     background: lightgray;
    //     padding: 1rem;
    //     text-align: center;
    // }
</style>