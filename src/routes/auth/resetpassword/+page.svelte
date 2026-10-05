<script lang="ts">
    import { goto } from "$app/navigation";
    import { resolve } from "$app/paths";
    import { authClient } from "$lib/auth-client";
    import type { ActionData } from "../../$types";
    
    let { form }: { form: ActionData} = $props();
    let password = $state<string>("");


  async function resetPassword(event: SubmitEvent) {
    event.preventDefault();
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
        console.log("No token found");
    } else {
        const { data, error } = await authClient.resetPassword({
            newPassword: password, // required
            token, // required
        });
        if(!error) {
            goto(resolve("/auth/login"));
        }
        console.log("error reset: ", error);
    }
  }
</script>

<div id="resetpassword">

    <form method="POST" onsubmit={resetPassword} class="reset">
        <fieldset>
            <div class="header">
                <h1>Reset password</h1>
                <p>Please create a new password that you don't use on any other site</p>
            </div>
            <input
                type="password"
                name="password"
                bind:value={password}
                id="login_password"
                autocomplete="current-password"
                required
                placeholder="Password"
            />
            <button class="btn" type="submit">Change</button>
        </fieldset>
    </form>
</div>
