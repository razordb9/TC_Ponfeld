<script lang="ts">
    // import { footer } from '$lib/footer';
    import { footer } from '$lib/project.config';

    console.log("Footer: ", footer);
</script>
<section id="footer">
    <footer>
        Copyright &copy; Thomas HUDSON-ZAUSSNIG •
        {#each footer as foot}        
            <a href={foot.url}>{foot.name} •</a>
            <!-- <a href="/AGB">AGB •</a> k -->
        {/each}
        <span>
            <a href="https://www.instagram.com/tcgroessinghofponfeld/" target="_blank">Instagram</a>
        </span>
    </footer>
</section>
