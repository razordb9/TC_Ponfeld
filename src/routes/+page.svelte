<script lang="ts">
	import "$lib/css/custom_styles.css";
    import type { ActionData, PageProps } from "./$types";
    import Horizontalscroller from "$lib/Components/horizontalscroller.svelte";
    import { sponsors } from "$lib/project.config";
    import { members } from "$lib/project.config";
    import Contact from "$lib/Components/contact_new.svelte";
    import AboutCard from "$lib/components/about_card.svelte";
    let { form }: { form: ActionData } = $props(); 

</script>

<section class="hero">
    <div class="content">
        <h1>TC Grössinghof Ponfeld</h1>
        <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a>
    </div>

</section>
<main class="main">
    <section id="team"> 
        <h2>Our Team</h2> 
        <article id="team-container">
        
            <!-- <Horizontalscroller speed="20s" width="1500px" direction="reverse"> -->

            {#each members as member}
                <div class="team-member">
                    <li>
                        <AboutCard boardmember={member}></AboutCard>
                        <!-- <img loading="eager" src={member.picture} alt={member.name}>
                        <h3>{member.name}</h3>
                        <h4>{member.function}</h4>-->
                    </li>  
                </div>
            {/each}
            <!-- </Horizontalscroller> -->
        </article>
    </section>
    <section id="sponsors">
        <h2>Unsere Sponsoren</h2>
        <article id="sponsors-container">
            <Horizontalscroller speed="30s" width="600px" direction="forward">
                {#each sponsors as sponsor}
                    <li class="sponsor">
                        <a href={sponsor.url} target="_blank" rel="noopener">
                            <img src={sponsor.logo} alt={sponsor.name} width="100" height="100" />
                        </a>
                    </li>
                {/each}
            </Horizontalscroller>
        </article>
    </section>
	
    
	<Contact {form} />
</main>