<script lang="ts">
    let {
        boardmember
    }=$props();

    // console.log("AboutCard", boardmember)
</script>

<div class="about_card">
    <img
        class="about-image"
        src='{boardmember.picture}'
        alt="{boardmember.picture}"
    />
    <div class="about-meta">
        <div class="about_card_title">
            {boardmember.name}    
        </div>
        <div class="blog_card_subtext">
            {boardmember.function}
        </div>
        <div class="blog_card_publisher">
            <div>{boardmember.about}</div>
        </div>
    </div>
</div>

<style lang="scss">
    img {
        height: 80px;
        width: 80px;
    }
</style>