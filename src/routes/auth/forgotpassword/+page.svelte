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



<div id="forgotpassword">
    <form method="POST" onsubmit={resetPassword} class="reset">
        <fieldset>
            <div class="header">
              <h1>Forgot password?</h1>
              <p>Enter your email adress and we will send you a link to reset your password.</p>
            </div>
            <input
                type="email"
                name="email"
                id="email"
                bind:value={email}
                required
                placeholder="example@mail.com"
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["email"]}</p>
            {/if}
            <button class="btn" type="submit">Reset Passwort</button>
            <p><a href="/auth/login">Remember your password?</a></p>
        </fieldset>
    </form>
</div>


<style lang="scss">


</style>