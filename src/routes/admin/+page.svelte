<script lang="ts">
    let { data } = $props();
    let user = $state(data.user);

</script>

<section id="adminPage">
    <h1>AdminPage</h1>
    <div class="posts">
        <li><a href="/admin/posts/create">Create Post</a></li>
        <li><a href="/admin/posts">All blog posts</a></li>
    </div>
    {#if user?.isAdmin}
        <div class="adminstuff">
            <li><a href="/admin/users/create">Create new user</a></li>
            <li><a href="/admin/design">Check design</a></li>
        </div>
    {/if}
</section>