import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { d as db } from "./index2.js";
import { sveltekitCookies, svelteKitHandler } from "better-auth/svelte-kit";
import { getRequestEvent } from "@sveltejs/kit/internal/server";
import "./utils.js";
import "@sveltejs/kit";
import "@sveltejs/kit/internal";
import "./query.js";
import { Resend } from "resend";
import { R as RESEND_API_KEY } from "./private.js";
import { b as building } from "./environment.js";
const resend = new Resend(RESEND_API_KEY);
const auth = ({ platform }) => {
  return betterAuth({
    database: drizzleAdapter(db({ platform }), {
      provider: "sqlite"
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
      sendResetPassword: async ({ user, url }) => {
        await resend.emails.send({
          from: "TC Ponfeld Groessinghof <onboarding@resend.dev>",
          to: user.email,
          subject: "Reset your password",
          html: `
                        <p>Hi ${user.name}!</p>
                        <p>Someone requested a password reset for your account. If it was you, click the link below</p>
                        <p><a href="${url}">Reset Password</a></p>
                        <p>This link will expire in 1 hour</p>
                        <p>If you didn't request this, please ignore this email</p>
                        <p>Thanks,<br>Your TC Groessinghof Ponfeld</p>
                    `
        });
      }
    },
    plugins: [
      sveltekitCookies(getRequestEvent)
      // make sure that cookies are properly set when calling signIn/signOut
    ],
    trustedOrigins: [
      "http://localhost:8787",
      "https://tc-ponfeld.thomas-zaussnig.workers.dev",
      "http://localhost:5173",
      "https://www.tc-ponfeld.at",
      "https://tc-ponfeld.at"
    ]
  });
};
async function handle({ event, resolve }) {
  let pl = event.platform;
  const session = await auth({ platform: pl }).api.getSession({
    headers: event.request.headers
  });
  if (session) {
    event.locals.user = session?.user;
    event.locals.session = session?.session;
  }
  return svelteKitHandler({ event, resolve, auth: auth({ platform: pl }), building });
}
export {
  handle
};
