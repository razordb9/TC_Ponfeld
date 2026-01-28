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
    $$renderer2.push(`<div id="resetpassword"><form method="POST" class="reset"><fieldset><div class="header"><h1>Reset password</h1> <p>Please create a new password that you don't use on any other site</p></div> <input type="password" name="password"${attr("value", password)} id="login_password" autocomplete="current-password" required placeholder="Password"/> <button class="btn" type="submit">Change</button></fieldset></form></div>`);
  });
}
export {
  _page as default
};
