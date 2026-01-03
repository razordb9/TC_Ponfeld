import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { d as db } from "./index3.js";
import { sveltekitCookies, svelteKitHandler } from "better-auth/svelte-kit";
import { getRequestEvent } from "@sveltejs/kit/internal/server";
import "./utils.js";
import "@sveltejs/kit";
import "@sveltejs/kit/internal";
import "./query.js";
import { b as building } from "./environment.js";
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
      autoSignIn: false
    },
    plugins: [
      sveltekitCookies(getRequestEvent)
      // make sure that cookies are properly set when calling signIn/signOut
    ],
    trustedOrigins: [
      "http://localhost:8787",
      "https://tc-ponfeld.thomas-zaussnig.workers.dev"
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
