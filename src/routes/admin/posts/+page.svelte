<script lang="ts">
    import type { BlogPost } from '../../../app';
    let { data }:{data: {posts: BlogPost[]}} = $props();

    // console.log(data.posts[0]);
    const formattedDate = (date: Date) =>
    date.toLocaleDateString('de-DE', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
</script>

<a href="/admin">Back</a>

<h1>Posts</h1>
<ul>
{#each data.posts as post} 
    <div class="post">
        <li>
            <a href="{`/admin/posts/${post.slug}`}">
                <div class="post-header">
                    <p>Erstellt am {formattedDate(post.createdAt)}</p>
                    <p>Author {post.authorName}</p>
                </div>
                <div class="post-content">
                    <h2>{post.title}</h2>
                    <p>{@html post.html as string}</p>
                </div>
            </a>
        </li>
    </div>
    
{/each}
</ul>


<!-- <style lang="scss">
    .post {
        margin: 0 auto;
        width: 50%;
        border: 1px solid red;
        margin-bottom: 20px;;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .post-header {
            border-bottom: 1px solid red;
        }

        .post-content {
            padding: 20px;
        }
    }
</style> -->