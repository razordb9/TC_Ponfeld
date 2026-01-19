<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { authClient } from "$lib/auth-client";
    import { type SubmitFunction, type ActionResult } from "@sveltejs/kit";
    import { goto, invalidateAll } from "$app/navigation";
    import type { ActionData } from "./$types";

    let { form }: { form: ActionData} = $props();
    let email = $state<string>("");
    let password = $state<string>("");

    const submitFunction: SubmitFunction = (event) =>{
        return async ({result}: { result: ActionResult}) => {
            await applyAction(result);
            if (result.type == "success" && result.data?.success === true) {
                console.log(result)
                await authClient.signIn.email({
                    email,
                    password,
                },{
                    onSuccess: async (data) =>{
                        console.log(data.response.status);
                        await invalidateAll();
                        goto("/admin")
                    },
                    onError: async (error) =>{
                        let betterauthError = error instanceof Error ? error.error.message : "failed";
                        console.log(betterauthError);
                        alert(error.error.message);
                    }
                })
            }
        }
    }
</script>

<div id="login">
    <form method="POST" use:enhance={submitFunction} action="?/login">
        <h1>Login</h1>
        <fieldset>
            <label for="email">Email</label>
            <input
                type="email"
                bind:value={email}
                name="email"
                id="email"
                required
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["email"]}</p>
            {/if}
            <label for="password">Password</label>
            <input
                type="password"
                bind:value={password}
                name="password"
                id="login_password"
                autocomplete="current-password"
                required
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["password"]}</p>
            {/if}
            <p><a href="/">Forgot password?</a></p>
            <button class="btn" type="submit">Login</button>
        </fieldset>
    </form>
</div>
