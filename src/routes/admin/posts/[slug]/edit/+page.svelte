<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import Quill from "quill";
    import "quill/dist/quill.snow.css"; 
    import { enhance } from "$app/forms";
    import DOMPurify from "dompurify";
  import type { BlogPost } from '../../../../../app';
  import slug from "slug";

    let quillcontainer: HTMLElement;
    let editor: Quill;
    let {data}: {data: {post: BlogPost}} = $props();

    let title = $state<string>(data.post.title);
    let html = $state<string>(data.post.html);

    onMount(() => {
        if (browser && window) {
            editor = new Quill(quillcontainer, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ["bold", "italic", "underline", "strike"],
                        [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                        ],
                        [{ align: ["center", "right", "justify"] }],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                },
            });
            editor.root.innerHTML = html;
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
<section id="updatepost">
    <h1>Edit post</h1>

    <form method="POST" use:enhance action="?/updatePost">
        <label for="title">Post Title</label>
        <input bind:value={data.post.slug} type="hidden" name="slug">
        <input bind:value={title} type="text" id="title" name="title" placeholder="Blog title">
        <div bind:this={quillcontainer} id="editor"></div>   
        <input bind:value={html} type="hidden" name="editorContent">
        <button class="btn" type="submit">Update</button> 
    </form>

    <h2>Preview</h2>
    <div class="preview">{@html sanitize(html)}</div>
</section>
