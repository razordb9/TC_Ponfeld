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
            sendResetPassword: async({user, url}, ctx) => {
                const promise =  resend.emails.send({
                    from: 'TC Ponfeld Groessinghof <office@tc-ponfeld.at>',
                    to: user.email,
                    subject: 'Reset your password',
                    html:`
                        <p>Hi ${user.name}!</p>
                        <p>Someone requested a password reset for your account. If it was you, click the link below</p>
                        <p><a href="${url}">Reset Password</a></p>
                        <p>This link will expire in 1 hour</p>
                        <p>If you didn't request this, please ignore this email</p>
                        <p>Thanks,<br>Your TC Groessinghof Ponfeld</p>
                    `, 
                });
                // console.log('waitUntil exists:', !!platform.ctx.waitUntil);
                platform.ctx.waitUntil?.(promise);
            }
        },
        plugins: [
            sveltekitCookies(getRequestEvent) // make sure that cookies are properly set when calling signIn/signOut
        ],
        trustedOrigins: [
            'http://localhost:8787', 
            'https://tc-ponfeld.thomas-zaussnig.workers.dev',
            'http://localhost:5173',
            'https://tc-ponfeld.at',
            'https://tc-ponfeld.at/api/auth/request-password-reset'
        ]
    })
}