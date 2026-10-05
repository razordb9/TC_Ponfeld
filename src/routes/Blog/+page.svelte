<script lang="ts">
    import type { BlogPost } from '../../app';
    let { data }:{data: {posts: BlogPost[]}} = $props();

    console.log(data.posts[0]);
    const formattedDate = (date: Date) =>
    date.toLocaleDateString('de-DE', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
</script>

<div id="Blog">
    <h1>Blog des TC Ponfeld</h1>
</div>
<ul>
{#each data.posts as post} 
    <div class="post">
        <li>
            <a href="{`/Blog/${post.slug}`}">
                <div class="post-header">
                    <p>Erstellt am {formattedDate(post.createdAt)}</p>
                    <p>Author: {post.authorName}</p>
                </div>
                <div class="post-preview">
                    <h2>{post.title}</h2>
                    <p>{@html post.html as string}</p>
                </div>
            </a>
        </li>
    </div>
    
{/each}
</ul>


<style lang="scss">
    
</style>