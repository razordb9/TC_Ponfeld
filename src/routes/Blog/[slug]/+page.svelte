<script lang="ts">
  import type { BlogPost } from "../../../app";

    let {data}:{data: {post: BlogPost}} = $props();  

    // console.log(data.post);
    const formattedDate = (date: Date) =>
    date.toLocaleDateString('de-DE', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

</script>


<article class="prose">
    <a href="/Blog">back</a>
    <div class="post">
        <div class="basicInfo">
            <p id="date">Erstellt am {formattedDate(data.post.createdAt)}</p>
            <p>Bearbeitet am {formattedDate(data.post.updatedAt)}</p>
            <p>Erstellt von {data.post.authorName}</p>
        </div>
        <h1>{data.post.title}</h1>
        
        <div class="post-content">
            {@html data.post.html as string}
        </div>
    </div>
</article>



<style lang="scss">
    // .prose {
    //     width: 90vw;
    //     margin: 0 auto;
    // }
    // .post {
    //     padding: 20px;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     width: 400px;
    //     height: 100%;
    //     margin-bottom: 20px;

    //     .basicInfo {
    //         border-bottom: 1px solid black;
    //         margin-bottom: 20px;
    //     }
    // }
</style>