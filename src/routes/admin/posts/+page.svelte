<script lang="ts">
    import type { BlogPost } from '../../../app';
    let { data }:{data: {posts: BlogPost[]}} = $props();
</script>

<a href="/admin">Back</a>

<h1>Posts</h1>
<ul>
{#each data.posts as post} 
    <li>
        <a href="{`/admin/posts/${post.slug}`}">
            <h2>{post.title}</h2>
        </a>
    </li>
{/each}
</ul>
