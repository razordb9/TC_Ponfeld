<script lang="ts">
    // import { footer } from '$lib/footer';
    import { footer } from '$lib/project.config';
    import { Instagram } from '@lucide/svelte';
    import { AtSign } from '@lucide/svelte';

    console.log("Footer: ", footer);
</script>
<section id="footer">
    <footer>
        <div class="basics">
            <h2>TC Grössinghof Ponfeld</h2>
            <div class="content">
                <p>Größinghofstraße 18, 9061 Wölfnitz</p>
                <p>office@tc-ponfeld.at</p>
                <p>+43 463 49440</p>
            </div>
            
        </div>    
        <div class="links">
            <h2>Rechtliches</h2>
            <div class="content">
                {#each footer as foot, index}   
                    <ul>
                        <li><a href={foot.url}>{foot.name}</a></li>
                    </ul> 
                {/each}
            </div>
            
        </div>
        <div class="socialmedia">
            <h2>Social Media</h2>
            <div class="content">
                <ul>
                    <li><a href="https://www.instagram.com/tcgroessinghofponfeld/" target="_blank"><Instagram />Instagram</a></li>
                    <li><a href="mailto:tcgroessinghofponfeld@proton.me"><AtSign />Mail</a></li>
                </ul>
            </div>
            
        </div>
    </footer>
</section>
