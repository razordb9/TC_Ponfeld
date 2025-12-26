<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import Quill from "quill";
    import "quill/dist/quill.snow.css"; 
    import { enhance } from "$app/forms";
    import DOMPurify from "dompurify";

    let quillcontainer: HTMLElement;
    let editor: Quill;
    let html = $state<string>("");

    onMount(() => {
        if (browser && window) {
            editor = new Quill(quillcontainer, {
                theme: 'snow'
            });
            editor.on('text-change', refresh);
        }
    });

    const refresh = () => {
        html = editor.root.innerHTML;
        console.log(html);
    }

    const sanitize = (rawHTML: string | Node) => {
        return DOMPurify.sanitize(rawHTML);
    }
</script>
<a href="/admin">Back</a>
<section id="createpost">
    <h1>Create new post</h1>

    <form method="POST" use:enhance action="?/createpost">
        <label for="title">Post Title</label>
        <input type="text" id="title" name="title" placeholder="Blog title">
        <div bind:this={quillcontainer} id="editor"></div>   
        <input bind:value={html} type="hidden" name="editorContent">
        <button class="btn" type="submit">Create</button> 
    </form>

    <h2>Preview</h2>
    <div class="preview">{@html sanitize(html)}</div>
</section>

<!-- <style>
    #editor {
        height: 400px;
        margin-bottom: 20px; 
    }

    .preview {
        border: 1px solid #ddd;
        padding: 10px;
        min-height: 200px;
    }
</style> -->