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
    <h2>Reset password</h2>

    <form method="POST" onsubmit={resetPassword}>
        <fieldset>
            <label for="password">Password</label>
            <input
                type="password"
                name="password"
                bind:value={password}
                id="login_password"
                autocomplete="current-password"
                required
            />
            <button class="btn" type="submit">Login</button>
        </fieldset>
    </form>
</div>
