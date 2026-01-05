<script lang="ts">
	import { index } from './../../../../../Portfolio/.svelte-kit/output/server/nodes/1.js';
	import "$lib/css/custom_styles.css";
    import Horizontalscroller from "$lib/components/horizontalscroller.svelte";
    import { sponsors } from "$lib/project.config";
    import { members } from "$lib/project.config";
    import Contact from "$lib/components/contact_new.svelte";

    const images = import.meta.glob(
        ["$lib/assets/p*.jpg", "!$lib/assets/p*-small.jpg"],
        {
            eager: true,
            import: "default"
        }
    ) as Record<string, string>;

    const ph = import.meta.glob(
        ["$lib/assets/p*-small.jpg"],
        {
            eager: true,
            import: "default"
        }
    ) as Record<string, string>;

    const getImg = (name: string) => {
        const path = `/src/lib/assets/${name}.jpg`;
        return images[path];
    }

     const getPh = (name: string) => {
        const path = `/src/lib/assets/${name}.jpg`;
        return ph[path];
    }

    let loadedImages = $state<Record<string, boolean>>({});
    const iterations = Array.from(Object.entries(images).keys());
    
    let activeImage = $state(false);
    let currentIndex = $state(-1);
    
    const expand = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
        console.log("irgendwas schach")
        e.preventDefault();
        let target = e.target as HTMLElement;
        let li: HTMLLIElement | null = target.closest("li") as HTMLLIElement;

        if (li) {
            currentIndex = parseInt(li.dataset?.index ?? "-1");
            activeImage = !activeImage;
            console.log("imagestate ", activeImage)
        }
    };

    interface Member {
    name: string,
    picture: string,
    function: string,
    description: string
}
</script>


<section id="hero">
    <img src="/Tennispllatz.jpg" alt="tennisplatz" class="hero-img"/>    
    <div class="hero-content">
        <h1>TC Grössinghof Ponfeld</h1>
        <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a>
    </div>
</section>
<article id="team" class:active-image={activeImage}> 
    <div 
        class="overlay"
        role="button"
        aria-label="overlay"
        tabindex="0"
        onclick={() => {}}
        onkeydown={() => {}}
    ></div>    
    <h2>Our Team</h2> 
    <ul class="image-grid">
        {#each members as member,i}
            {@render renderImage(
                member,
                i
            )}
        {/each}
    </ul>
</article>
{#snippet renderImage(member: Member, index: number)}
    <li class="image-wrapper" data-index={index}>
        <a href="#" role="button" onclick={expand}>
            <img
                class="placeholder-img"
                sizes="100svw"
                loading="eager"
                src={getPh (`${member.picture}-small`)}
                alt={"p" + index}
            />
            <img
                class="img"
                data-index= {index}
                sizes="100svw"
                loading="eager"
                src={getImg (`${member.picture}`)}
                alt={"p" + index}
                class:completed={loadedImages[index] === true}
                class:big-image={activeImage == true && currentIndex == index}
                class:hidden-image={activeImage == true && currentIndex != index}
                onload={(e) =>{
                    loadedImages[index] = true;
                }}
            />
            <p>
                {member.function}
            </p>
        </a>

    </li>
{/snippet}
<section id="sponsors">
    <h2>Unsere Sponsoren</h2>
    <div id="sponsors-container">
        <Horizontalscroller speed="30s" width="600px" direction="forward">
            {#each sponsors as sponsor}
                <li class="sponsor">
                    <a href={sponsor.url} target="_blank" rel="noopener">
                        <img src={sponsor.logo} alt={sponsor.name} width="100" height="100" loading="lazy"/>
                    </a>
                </li>
            {/each}
        </Horizontalscroller>
    </div>
</section>
<section id="contact">
    <h2>Wie könnt ihr mit uns in Verbindung treten?</h2>    
    <Contact />
</section>

<style lang="scss">
    :root{
        --img-width: 280px;
        --img-height: 280px;
    }

    #team {
        margin: 0 auto;
        width: 100%;
        height: fit-content;
        max-width: 900px;

        .image-grid {
            display: grid;
            grid-template-columns: repeat(
                auto-fit,
                minmax(var(--img-width), var(--img-height))
            );    
            column-gap: 1rem;
            row-gap: 1rem;
            justify-content: center;
            place-content: center;
            width: 100%;
            height: max-content;
        }

        .image-wrapper {
            min-width: var(--img-width);
            max-width: 100%;
            min-height: var(--img-width);
            max-height: var(--img-height);
            height: var(--img-height);
            width: max-content;
            display: block;
        }
        a {
            height: inherit;
            width: inherit;
            max-width: inherit;
            max-height: inherit;
            min-width: inherit;
            min-height: inherit;
            display: grid;
            place-items: center;
            place-content: center;
            position: relative;
            -webkit-tap-highlight-color: transparent;
        }
        
        .placeholder-img,
        .img {
            display: block;
            object-fit: cover;
            object-position: center center;
            max-width: inherit;
            max-height: inherit;
            min-width: inherit;
            min-height: inherit;
            width: fit-content;
            height: inherit;
            border-radius: 20px;
        }

        .placeholder-img {
            opacity: 1;
            filter: blur(0.5rem);
            transition: 
                opacity 100ms ease-in-out;
            animation-name: pulse;
            animation-duration: 1000ms;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
        }

        img {
            position: absolute;
            opacity: 0;
            filter: blur(1rem);
            transition: none;
            will-change: transform, opacity;
        }

        .completed {
            opacity: 1;
            filter: blur(0);
            transition: 
                opacity 400ms ease-in-out,
                filter 400ms ease-in-out;
        }

        .image-wrapper:has(.completed) {
            .placeholder-img {
                opacity: 0;
                animation-fill-mode: forwards;
                animation-play-state: paused;
                transition: all 100ms ease-in-out;
            }
        }
        
        .big-image {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-position: center center;
            max-height: 60svh;
            min-height: 200px;
            max-width: 60svw;
            min-width: 200px;
            height: 100%;
            width: auto;
            z-index: 220;
        }

        .hidden-image {
            opacity: 0.3;

        }
        @keyframes pulse {
            0% {
                opacity: 1;
            }
            25% {
                opacity: 0.75;
            }
            50% {
                opacity: 0.5;
            }
            75% {
                opacity: 0.75;
            }
            100% {
                opacity: 1;
            }
        }
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        min-width: 100vw;
        min-height: 100svh;
        height: 100svh;
        margin: 0;
        padding: 0;
        background-color: rgba(9, 9, 9, 0.89);
        opacity: 0;
        z-index: 210;
    }

    .active-image .overlay {
        opacity: 1;
        display: block;
    }
</style>