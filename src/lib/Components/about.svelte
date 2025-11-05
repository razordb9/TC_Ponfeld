<script lang="ts">
    import AboutCard from "./about_card.svelte";
    import { members } from "$lib/project.config";
    
</script>


<div id="about">   
    <h1>Wer sind wir?</h1>
    <div class="about-container">
        {#each members as member}
            <div class="about-item">
                <AboutCard boardmember={member}></AboutCard>
            </div>
        {/each}
    </div>
</div>