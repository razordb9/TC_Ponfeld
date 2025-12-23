<script lang="ts">
    export let result;

</script>

<a href="/admin">Back</a>

<h1>Posts</h1>

{#each result as blogentry} 
    <p>{blogentry.title}</p>
{/each}