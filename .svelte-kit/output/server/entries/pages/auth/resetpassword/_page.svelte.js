import { a as attr } from "../../../../chunks/attributes.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/auth-client.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let password = "";
    $$renderer2.push(`<div id="login"><h2>Reset password</h2> <form method="POST"><fieldset><label for="password">Password</label> <input type="password" name="password"${attr("value", password)} id="login_password" autocomplete="current-password" required/> <button class="btn" type="submit">Login</button></fieldset></form></div>`);
  });
}
export {
  _page as default
};
