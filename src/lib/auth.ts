import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db";
import type { Platform } from "../app";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { Resend } from "resend";
import { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } from '$env/static/private';
const resend = new Resend(RESEND_API_KEY);

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
            autoSignIn: false,
            sendResetPassword: async({user, url}) => {
                await resend.emails.send({
                    from: 'TC Ponfeld Groessinghof <onboarding@resend.dev>',
                    to: user.email,
                    subject: 'Reset your password',
                    text: `Click the link to reset your password: ${url}`
                })
            }
        },
        plugins: [
            sveltekitCookies(getRequestEvent) // make sure that cookies are properly set when calling signIn/signOut
        ],
        trustedOrigins: [
            'http://localhost:8787', 
            'https://tc-ponfeld.thomas-zaussnig.workers.dev',
            'http://localhost:5173'
        ]
    })
}