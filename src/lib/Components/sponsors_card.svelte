<script lang="ts">
    import type { Sponsor } from "$lib/types";

    let {
        sponsor
    }:{sponsor:Sponsor} = $props();


</script>

<div class="sponsor_card">
    <a href={sponsor?.url} target="_blank">
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
