<script lang="ts">

    let {
        name = "",
        logo = "",
        link = ""
    }: Props = $props();
</script>

<div class="sponsor_card">
    <a href={link}>
        <img 
            class="sponsor_img"
            src={logo}
            alt={logo}
        />
        <!-- <div class="sponsor_name">
            {name}
        </div> -->
    </a>
</div>

<style lang="scss">
    img {
        width: 150px;
        height: 150px;
    }
</style>