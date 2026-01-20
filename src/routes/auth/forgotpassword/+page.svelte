<script lang="ts">
  import { page } from "$app/state";
  import { authClient } from "$lib/auth-client";
    import type { ActionData } from "../../$types";

    let { form }: { form: ActionData} = $props();
    let email = $state<string>("");



  async function resetPassword(event: SubmitEvent) {
    event.preventDefault();
    const baseURL = page.url.origin;
    const redirectURL = `${baseURL}/auth/resetpassword`;
    console.log("url: ", redirectURL);

    const { data, error } = await authClient.requestPasswordReset({
        email: email, // required
        redirectTo: redirectURL,
    });
  }
</script>

<h2>Forgot password?</h2>

<div id="forgotpassword">
    <form method="POST" onsubmit={resetPassword}>
        <fieldset>
            <label for="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                bind:value={email}
                required
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["email"]}</p>
            {/if}
            <button class="btn" type="submit">Reset Passwort</button>
        </fieldset>
    </form>
</div>
