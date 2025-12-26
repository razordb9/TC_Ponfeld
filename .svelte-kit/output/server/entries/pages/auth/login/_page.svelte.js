import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/auth-client.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let email = "";
    let password = "";
    $$renderer2.push(`<div id="login"><form method="POST" action="?/login"><h1>Login</h1> <fieldset><label for="email">Email</label> <input type="email"${attr("value", email)} name="email" id="email" required/> `);
    if (form?.errors) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.errors["email"])}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <label for="password">Password</label> <input type="password"${attr("value", password)} name="password" id="login_password" autocomplete="current-password" required/> `);
    if (form?.errors) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.errors["password"])}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button class="btn" type="submit">Login</button></fieldset></form></div>`);
  });
}
export {
  _page as default
};
