<script lang="ts">
	import "$lib/css/custom_styles.css";
    import type { ActionData, PageProps } from "./$types";
    import Horizontalscroller from "$lib/components/horizontalscroller.svelte";
    import { sponsors } from "$lib/project.config";
    import { members } from "$lib/project.config";
    // import Contact from "$lib/components/contact_new.svelte";
    let { form }: { form: ActionData } = $props(); 

</script>

<section class="hero">
    <div class="content">
        <h1>TC Grössinghof Ponfeld</h1>
        <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a>
    </div>

</section>
<main class="main">
     <article id="team">
        <h2>Our Team</h2>
            <Horizontalscroller speed="20s" width="1500px" direction="reverse">
                {#each members as member}
                    <li class="team-member">
                        <!-- <AboutCard boardmember={member}></AboutCard> -->
                        <img loading="eager" src={member.picture} alt={member.name}>
                        <h3>{member.name}</h3>
                        <h4>{member.function}</h4>
                    </li> 
                {/each}
            </Horizontalscroller>
    </article>
	<article id="sponsors">
        <h2>Unsere Sponsoren</h2>
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
    
	<!-- <Contact {form} /> -->
</main>