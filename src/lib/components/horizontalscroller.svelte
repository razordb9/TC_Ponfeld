<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount, type Snippet } from "svelte";

    //incoming props
    let {
        children,
        width,
        speed,
        direction,
    }: { children: Snippet; speed?: string; direction?: string; width?: string } =
        $props();

    //might hold an HTMLUListElement but it might initially be undefined
    let innerScroller: HTMLUListElement | undefined =
        $state<HTMLUListElement>();
    
    //checks if os setting is enabled
    let matchMedaia = browser
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    
    //Duplicates every <li> inside the list
    onMount(() => {
        if (!innerScroller) return;
        const sponsorListItems = Array.from(innerScroller.children);
        sponsorListItems.forEach((item) => {
            const duplicateItem = item.cloneNode(true) as HTMLLIElement;
            duplicateItem.setAttribute("aria-hidden", "true");
            innerScroller?.appendChild(duplicateItem);
        });
    });
</script>

<div
    class="scroller"
    data-animated={matchMedaia?.matches ? "false" : "true"}
    style={width ? `--horizontal-scroller-width: ${width};` : ""}
>
    <ul
        bind:this={innerScroller}
        style="{speed ? `--horizontal-scroller-animation-speed: ${speed};` : ''} 
        {direction ? `--horizontal-scroller-animation-direction: ${direction};` : ''}
        "
        class="sponsor-list inner-scroller"
    >
        {@render children()}
    </ul>
</div>

<style lang="scss">
    .sponsor-list {
        height: 300px;
        width: 300px;
    }
</style>