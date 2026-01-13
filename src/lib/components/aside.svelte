<script lang="ts">
    import { navigation } from '$lib/project.config';
    import { LucideX} from '@lucide/svelte';
    let {showMenu = $bindable(false)}:{showMenu: boolean} = $props();
</script>

<nav class="aside" class:showMenu={showMenu === true}>
    <div class="asideHeader">
        <button class="close menu" onclick={()=> {
            showMenu = false;
        }}><LucideX/></button>
    </div>
    <ul>
        {#each navigation as route}
            <li><a href={route.url}>{route.name}</a></li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    .aside {
        width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 500;
        background-color: #000000;
        position: fixed;
        height: 100vh;
        transform: translateX(200vw);
        transition: all 200ms ease-in-out;

        ul, li {
            width: 100%;
            height: 50px;
            text-align: center;
        }
        ul {
            margin-top: 7rem;
        }
        .asideHeader {
            .close {
                position: absolute;
                right: 0;
                margin: 1rem;
                display: flex;
                padding: 0;
            }
        }
    }

    .showMenu {
        transform: translateX(0);
        transition: all 200ms ease-in-out;
    }
</style>