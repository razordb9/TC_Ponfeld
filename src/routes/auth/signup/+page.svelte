<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { authClient } from "$lib/auth-client";
    import { type SubmitFunction, type ActionResult } from "@sveltejs/kit";
  import type { ActionData } from "./$types";

    let { form }: { form: ActionData} = $props();
    let name = $state<string>("");
    let email = $state<string>("");
    let password = $state<string>("");

    const submitFunction: SubmitFunction = (event) =>{
        return async ({result}: { result: ActionResult}) => {
            await applyAction(result);
            if (result.type == "success" && result.data?.success === true) {
                console.log(result)
                
                await authClient.signUp.email({
                    email,
                    name,
                    password,
                },{
                    onSuccess: async (data) =>{
                        console.log(data.response.status);
                    },
                    onError: async (error) =>{
                        let betterauthError = error instanceof Error ? error.error.message : "failed";
                        console.log(betterauthError);
                    }
                })
            }
        }
    }
</script>

<div id="signup">
    <h1>Login</h1>
    <form method="POST" use:enhance={submitFunction} action="?/signup">
        <fieldset>
            <label for="name">Name</label>
            <input
                type="text"
                bind:value={name}
                name="name"
                id="name"
                required
            />
            <label for="email">email</label>
            <input
                type="email"
                bind:value={email}
                name="email"
                id="email"
                required
            />
            <label for="password">Password</label>
            <input
                type="password"
                bind:value={password}
                name="password"
                id="login_password"
                autocomplete="current-password"
                required
            />
            <button class="btn" type="submit">Login</button>
        </fieldset>
    </form>
</div>
