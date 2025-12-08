<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { authClient } from "$lib/auth-client";
    import { type SubmitFunction, type ActionResult } from "@sveltejs/kit";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";

    let { form }: { form: ActionData} = $props();
    let name = $state<string>("");
    let email = $state<string>("");
    let password = $state<string>("");
    let isAdmin = $state(false);

    const submitFunction: SubmitFunction = (event) =>{
        return async ({result}: { result: ActionResult}) => {
            await applyAction(result);
            console.log("xxxxxx ", result);
            if (result.type == "success" && result.data?.success === true) {
                console.log(result)
                
                await authClient.signUp.email({
                    email,
                    name,
                    password,
                    isAdmin
                },{
                    onSuccess: async (data) =>{
                        console.log(data.response.status);
                        goto("/auth/login")
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
    <form method="POST" use:enhance={submitFunction} action="?/signup">
        <h1>Create new user</h1>
        <fieldset>
            <label for="name">Name</label>
            <input type="text" bind:value={name} name="name" id="name" required/>
            <label for="email">Email</label>
            <input type="email" bind:value={email} name="email" id="email" required/>
            <label for="password">Password</label>
            <input type="password" bind:value={password} name="password" id="login_password" autocomplete="current-password" required/>
            <!-- <label for="is_admin" data-type="checkbox">
                <input
                    type="checkbox"
                    bind:checked={isAdmin}
                    name="is_admin"
                    id="is_admin"
                />Is Admin
            </label>  -->
            <div class="checkbox-wrap">
                <input type="checkbox" name="isAdmin" id="isAdmin" bind:checked={isAdmin} data-type="checkbox">
                <label for="isAdmin">is Admin</label>
            </div>
            <br>
            <button class="btn" type="submit">Create</button>
        </fieldset>
    </form>
</div>
