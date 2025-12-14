<script lang="ts">
    import { members } from "$lib/project.config";
    import p1 from "$lib/assets/avatar_female.jpg"; 
    import p2 from "$lib/assets/avatar_female.jpg"; 
    import p3 from "$lib/assets/avatar_female.jpg"; 
    import p4 from "$lib/assets/avatar_female.jpg"; 
    import p5 from "$lib/assets/avatar_female.jpg"; 
    import p6 from "$lib/assets/avatar_female.jpg"; 

    let activeImage = $state(false);
    let index = $state("-1");

    const expand = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
        e.preventDefault();
        let target = e.target as HTMLElement;
        let li: HTMLLIElement | null = target.closest("li") as HTMLLIElement;

        if (li) {
            index = li.dataset?.index ?? "-1";
            document.startViewTransition(() => {
                activeImage = !activeImage;
            });
        }
    };
    const closeOverlay = (e: MouseEvent | TouchEvent | KeyboardEvent) =>
        document.startViewTransition(() => {
            activeImage = false;
    }); 

</script>

<section class="grid-images" class:image-active={activeImage} >
    <div
            class="overlay"
            role="button"
            aria-label="dd"
            tabindex="0"
            onclick={closeOverlay}
            onkeydown={closeOverlay}
        ></div> 
    <!-- <h1>Design pattern</h1>
    
        <h1>Heading h1</h1>
        <h2>Heading h2</h2>
        <h3>Heading h3</h3>
        <h4>Heading h4</h4>
        <h5>Heading h5</h5>
        <h6>Heading h6</h6>

    <h2>Colors used</h2>
    <div class="colors">
        <ul>
            <li></li>
        </ul>
    </div> -->
         
        <h2>Grid Members</h2>
        <ul class="image-grid match-element-applied">
        {@render imageCard(p1, "0", "Roli1")}
        {@render imageCard(p2, "1", "Roli2")}
        {@render imageCard(p3, "2", "Roli3")}
        {@render imageCard(p4, "3", "Roli4")}
        {@render imageCard(p5, "4", "Roli5")}
        {@render imageCard(p6, "5", "Roli6")}  
        </ul> 
</section>

{#snippet imageCard(src: string, _index: string, text: string)}
        <li
            class="image"
            data-index={_index}
            class:big-image={activeImage == true && index == _index}
            class:hidden-image={activeImage == true && index != _index}
            style="view-transition-name: {activeImage && index != _index
                ? 'none'
                : `image-${_index}`}"
        >
            <a href="#" role="button" onclick={expand} onkeydown={expand}>
                <img src={src} alt="dummy image1 ${_index}" />
                <div>
                    <p>{text}</p>
                </div>
            </a>
        </li>
{/snippet} 

<style lang="scss">
    :root {
        --image-width: 200px;
        --image-height: calc(var(--image-width * 1.5));
    }
    .grid-images {
        margin: 0 auto;
        // width: 800px;
        margin-top: 1rem;
        text-align: center;
    }
    .image-grid {
        display: grid;
        grid-template-columns: repeat(
            auto-fit,
            minmax(var(--image-width), 1fr)
        );
        // overflow: hidden;
        grid-auto-flow: dense;
        row-gap: 1rem;
        column-gap: 1rem;
        place-items: center;
        height: auto;

        .image,
        a {
            display: grid;
            place-items: center;
            min-width: var(--image-width);
            max-width: 100%; //var(--image-width)
            min-height: var(--image-width);
            max-height: 100%;
            height: fit-content; //max-content
            width: fit-content; //max-content
            @media (width < 700px) {
                max-width: 100%;
                width: 100%;
                max-height: 100%;
                height: 100%;
            }
            img {
                display: block;
                object-fit: cover;
                object-position: center center;
                max-height: inherit;
                min-height: inherit;
                min-width: inherit;
                max-width: inherit;
                height: inherit;
                width: inherit;
                border-radius: 20px;
                box-shadow: 1px 3px 5px hsla(0, 2%, 12%, 0.4);
                border: 1px solid inherit;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: box-shadow;
                transition: box-shadow 200ms ease-in-out;

                &:hover {
                    box-shadow: 1px 3px 7px hsla(0, 2%, 12%, 0.6);
                    transition: box-shadow 200ms ease-in-out;
                }
            }
        }
        .big-image {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 15;
            min-height: auto;
            max-height: none;
            min-width: auto;
            max-width: none;
            @media (width < 700px) {
                max-width: 100%;
                width: 100%;
                max-height: auto;
                height: auto;
            }
            a {
                min-width: auto;
                max-width: none;
                min-height: auto;
                max-height: none;
                width: auto;
                height: auto;
            }

            img {
                max-height: 70svh;
                min-height: 200px;
                max-width: 70svw;
                min-width: 200px;
                height: 100%;
                width: auto;
                @media (width < 700px) {
                    max-width: 95svw;
                    width: 95svw;
                    height: minmax(70svh, 100%);
                    min-height: 50svh;
                    max-height: 70svh;
                    width: 100%;
                }
            }
        }
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: hsla(0, 0%, 20%, 0.856);
        z-index: 5;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        view-transition-name: none;
    }
    .image-active .overlay {
        opacity: 1;
        pointer-events: auto;
    }
    .hidden-image {
        opacity: 0.3;
        view-transition-name: none;
    }
</style> 