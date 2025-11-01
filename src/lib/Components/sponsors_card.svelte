<script lang="ts">
    import type { Sponsor } from "$lib/types";

    // import { Sponsor } from '../../app'
    
    let {
        sponsor
    }:{sponsor:Sponsor} = $props();


</script>

<div class="sponsor_card">
    <a href={sponsor?.link}>
        <img 
            class="sponsor_img"
            src={sponsor?.logo}
            alt={sponsor?.logo}
        />
        <div class="sponsor_name">
            {sponsor?.name}
        </div>
    </a>
</div>

<style lang="scss">
    img {
        width: 150px;
        height: 150px;
        border-radius: 100px;
    }
</style>