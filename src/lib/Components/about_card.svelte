<script lang="ts">

    let {
        name = "",
        funktion = "",
        picture = "",
        about = "",
    }: Props = $props();

</script>

<div class="about_card">
    <img
        class="about-image"
        src='{picture}'
        alt="{picture}"
    />
    <div class="about-meta">
        <div class="about_card_title">
            {name}    
        </div>
        <div class="blog_card_subtext">
            {funktion}
        </div>
        <div class="blog_card_publisher">
            <div>{about}</div>
        </div>
    </div>
</div>

<style lang="scss">
    img {
        height: 80px;
        width: 80px;
    }
</style>