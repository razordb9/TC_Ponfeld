import { a as attr } from "../../../../../chunks/attributes.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import "../../../../../chunks/auth-client.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let name = "";
    let email = "";
    let password = "";
    let isAdmin = true;
    $$renderer2.push(`<div id="signup"><form method="POST" action="?/signup"><h1>Create new user</h1> <fieldset><label for="name">Name</label> <input type="text"${attr("value", name)} name="name" id="name" required/> <label for="email">email</label> <input type="email"${attr("value", email)} name="email" id="email" required/> <label for="password">Password</label> <input type="password"${attr("value", password)} name="password" id="login_password" autocomplete="current-password" required/> <div class="checkbox-wrap"><input type="checkbox" name="isAdmin" id="isAdmin"${attr("checked", isAdmin, true)} data-type="checkbox"/> <label for="isAdmin">is Admin</label></div> <button class="btn" type="submit">Create</button></fieldset></form></div>`);
  });
}
export {
  _page as default
};
