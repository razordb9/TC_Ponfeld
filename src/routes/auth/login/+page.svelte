<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { authClient } from "$lib/auth-client";
    import { type SubmitFunction, type ActionResult } from "@sveltejs/kit";
    import { goto, invalidateAll } from "$app/navigation";
    import type { ActionData } from "./$types";
    import { LogIn } from '@lucide/svelte';


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
        <fieldset>
            <div class="header">
                <p class="logo"><LogIn/></p>
                <p>Anmelden mit Email Adresse</p>
            </div>
            <!-- <label for="email">Email</label> -->
            <input
                type="email"
                bind:value={email}
                name="email"
                id="email"
                required
                placeholder="email"
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["email"]}</p>
            {/if}
            <!-- <label for="password">Password</label> -->
            <input
                type="password"
                bind:value={password}
                name="password"
                id="login_password"
                autocomplete="current-password"
                required
                placeholder="password"
            />
            {#if form?.errors}
                <p style="color:red;">❌ {form.errors["password"]}</p>
            {/if}
            <p><a href="/auth/forgotpassword">Forgot password?</a></p>
            <button class="btn" type="submit">Login</button>
        </fieldset>
    </form>
</div>

<style lang="scss">
    button {
        display: flex;
        justify-content: center;
    }
    fieldset {
        width: 50vw;
        padding: 50px;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.366);

        input {
            background-color: inherit;
        }
        .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            
            .logo {
                display: flex;
                align-items: center;
                padding: 15px;
                border-radius: 15px;
                background-color: white;
                margin-bottom: 20px;
            }
        }
    }

    @media (width < 650px) {
        fieldset {
            width: 90vw;
        }
    }
</style>