import { a as auth } from "./auth2.js";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { b as building } from "./environment.js";
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
