<script lang="ts">
    // import { footer } from '$lib/footer';
    import { footer } from '$lib/project.config';
    import { Instagram } from '@lucide/svelte';
    import { AtSign } from '@lucide/svelte';

    console.log("Footer: ", footer);
</script>
<section id="footer">
    <footer>
        <div>
            Copyright &copy; TC Grössinghof Ponfeld 
        </div>    
        <div>
            {#each footer as foot, index}    
                {#if index < footer.length -1} 
                    <a href={foot.url}> {foot.name} |&nbsp</a>
                {:else}
                    <a href={foot.url}>{foot.name}</a>
                {/if}
            {/each}
        </div>
        <div>
            <a href="https://www.instagram.com/tcgroessinghofponfeld/" target="_blank"><Instagram /></a>
            <a href="mailto:tcgroessinghofponfeld@proton.me"><AtSign /></a>
        </div>
       
    </footer>
</section>
