<script lang="ts">
  import type { BlogPost } from "../../../../app";

    let {data}:{data: {post: BlogPost}} = $props();  

    // console.log(data.post);

</script>

<article class="prose">
    <a href="/admin/posts/{data.post.slug}/edit">edit</a>
    <h1>{data.post.title}</h1>
    <p>{data.post.createdAt}</p>
    <p>{data.post.updatedAt}</p>

    <div class="post">
        {@html data.post.html as string}

    </div>
</article>



<!-- lucide for icons -->