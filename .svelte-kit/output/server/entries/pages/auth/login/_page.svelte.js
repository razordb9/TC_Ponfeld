import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/auth-client.js";
import { L as Log_in } from "../../../../chunks/log-in.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let email = "";
    let password = "";
    $$renderer2.push(`<div id="login"><form method="POST" action="?/login"><fieldset class="svelte-1i2smtp"><div class="header svelte-1i2smtp"><p class="logo svelte-1i2smtp">`);
    Log_in($$renderer2, {});
    $$renderer2.push(`<!----></p> <p>Anmelden mit Email Adresse</p></div> <input type="email"${attr("value", email)} name="email" id="email" required placeholder="email" class="svelte-1i2smtp"/> `);
    if (form?.errors) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.errors["email"])}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <input type="password"${attr("value", password)} name="password" id="login_password" autocomplete="current-password" required placeholder="password" class="svelte-1i2smtp"/> `);
    if (form?.errors) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.errors["password"])}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p><a href="/auth/forgotpassword">Forgot password?</a></p> <button class="btn svelte-1i2smtp" type="submit">Login</button></fieldset></form></div>`);
  });
}
export {
  _page as default
};
