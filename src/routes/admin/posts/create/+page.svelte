<script lang="ts">
  import { browser } from "$app/environment";
  import Quill from "quill";
  import { onMount } from "svelte";
    import "quill/dist/quill.snow.css"; 
  import { enhance } from "$app/forms";
   

    onMount(() => {
        if (browser && window) {
            const quill = new Quill('#editor', {
                theme: 'snow'
            });
        }
    })
</script>
<section id="createpost">
    <h1>Create new post</h1>

    <form method="POST" use:enhance action="?/createpost">
        <label for="title">Post Title<input type="text" id="title" name="title"></label>
        <div id="editor">

        </div>   
        <button class="btn" type="submit">Create</button> 
    </form>
</section>