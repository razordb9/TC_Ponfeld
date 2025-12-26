import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db";
import type { Platform } from "../app";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";

// TODO figure above line out
export const auth = ({platform}: {platform: Platform}) => {
   
    return betterAuth({
        database: drizzleAdapter(db({platform}), {
            provider: "sqlite",
        }), 
        user: {
            additionalFields: {
                isAdmin: {
                    type: "boolean",
                    defaultValue: false,
                    input: true
                } 
            }
        },
        emailAndPassword: {
            enabled: true,
            autoSignIn: false
        },
        plugins: [
            sveltekitCookies(getRequestEvent) // make sure that cookies are properly set when calling signIn/signOut
        ],
        trustedOrigins: [
            'http://localhost:8787', 
            'https://tc-ponfeld.thomas-zaussnig.workers.dev'
        ]
    })
}