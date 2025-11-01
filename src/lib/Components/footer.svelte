<script lang="ts">
    import { footer } from '$lib/Components/footer';

    console.log(footer);
</script>

<footer>
    Copyright &copy; Thomas HUDSON-ZAUSSNIG •
    {#each footer as foot}        
        <a href={foot.path}>{foot.name} •</a>
        <!-- <a href="/AGB">AGB •</a> k -->
    {/each}
        <span>
        <a href="https://www.instagram.com/tsonga_64/" target="_blank"><img class="footer-img" src="/instagram.svg" alt="Instagram"/></a>
    </span>
</footer>



<style lang="scss">
    footer {
        position: relative;
        width: 100%;
        text-align: center;
        background-color: greenyellow;
        color: var(--surface-1-light);
        padding: 20px 0px 20px 0px;
        height: auto;
        a {
            text-decoration: none;
            color: var(--surface-1-light);
        }
        .footer-img {
            filter: invert(1); 
        }

        span{
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
        }
    }
</style>
