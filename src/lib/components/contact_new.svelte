<script lang="ts">
    import { enhance } from "$app/forms";

   let form=$state<HTMLFormElement>();

</script>
<div id="contactform">
    <form bind:this={form} method="POST" use:enhance action="?/sendmail" name="contact">
        <fieldset>
            <label>Name (*) <input type="text" id="name" name="name"></label>
            {#if form?.errors && form?.values.name}
                <p class="error">{form?.errors["name"]?.errors}</p>
            {/if} 
            <label>Email (*)<input type="email" id="email" name="email" autocomplete="username" placeholder="example@domain.com" ></label>
            {#if form?.errors && form?.values.email}
                <p class="error">{form?.errors["email"]?.errors}</p>
            {/if} 
            <label>Text (*)<textarea id="message" name="message" rows="7"></textarea></label>    
            {#if form?.errors && form?.values.message}
                <p class="error">{form?.errors["message"]?.errors}</p>
            {/if}     
            <button type="submit">Absenden</button>
            {#if form?.success}
                <p style="color:green;">✅ Message sent successfully!</p>
            {/if}
            {#if form?.error}
                <p style="color:red;">❌ {form.error}</p>
            {/if}
        </fieldset>
    </form>
</div>