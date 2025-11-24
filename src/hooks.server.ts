import { auth } from "$lib/auth"; // path to your auth file
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from '$app/environment'
import type { Platform } from "./app";

export async function handle({ event, resolve }) {
    let pl: Platform = event.platform;
    // console.log("Platform: ", pl);
    const session = await auth({platform:pl}).api.getSession({
        headers: event.request.headers
    });

    
    if(session) {
        event.locals.user = session?.user;
        event.locals.session = session?.session;
    }
    
    return svelteKitHandler({ event, resolve, auth:auth({platform: pl}), building });
}