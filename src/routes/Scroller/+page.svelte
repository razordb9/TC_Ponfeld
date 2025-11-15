<script lang="ts">
    import Horizontalscroller from "$lib/Components/horizontalscroller.svelte";
    import { sponsors } from "$lib/project.config";
    import { members } from "$lib/project.config";
    console.log(members);
</script>

<section>
    <h1>Scroll Timeline</h1>
    <article>
        <h2>Lorem</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </article>
    <article class="sponsors">
        <h2>Our Sponsors</h2>
            <Horizontalscroller speed="10s" width="600px" direction="forward">
                {#each sponsors as sponsor}
                    <li class="sponsor">
                        <a href={sponsor.url} target="_blank" rel="noopener">
                            <img src={sponsor.logo} alt={sponsor.name} width="100" height="100" />
                        </a>
                    </li>
                {/each}
            </Horizontalscroller>

    </article>
     <article class="team">
        <h2>Our Team</h2>
            <Horizontalscroller speed="10s" width="1500px" direction="reverse">
                {#each members as member}
                    <li class="team-member">
                        <!-- <AboutCard boardmember={member}></AboutCard> -->
                        <img loading="eager" src={member.picture} alt={member.name}>
                    </li> 
                {/each}
            </Horizontalscroller>
    </article>
</section>

<style lang="scss">
    section {
        padding-top: 100px;
        margin: 0 auto;
        width: 100%;
    }
    h1 {
        text-align: center;
    }
    .sponsors, .team {
        width: 100%;
        height: auto;
    }
    .team-member{
        img{
            width:240px;
            height:240px;
            object-fit: cover;
            margin: .5rem;
            border-radius: 10px;
        }
    }
    .sponsor {
        /* width of the svg is 100px */
        padding: 1rem;
        border-radius: 10px;
        // box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.308);
        // background: linear-gradient(160deg, #d8d2d2, #332e2eb7);
        a {
            display: flex;
            flex: 1;
            width: 100%;
            height: auto;
            img {
                min-width: 120px;
                width: 100%;
                height: 100%;
                display: flex;
                object-fit: cover;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>