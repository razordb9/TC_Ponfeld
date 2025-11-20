<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="error-msg">
    <img src="/error.png" alt="error"/>
    <h1>Upps an error occured</h1>
    <h1>{page?.error?.message}</h1>
</div>