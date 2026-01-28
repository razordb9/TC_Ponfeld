import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "../../../../chunks/client.js";
import "../../../../chunks/auth-client.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let email = "";
    $$renderer2.push(`<div id="forgotpassword"><form method="POST" class="reset"><fieldset><div class="header"><h1>Forgot password?</h1> <p>Enter your email adress and we will send you a link to reset your password.</p></div> <input type="email" name="email" id="email"${attr("value", email)} required placeholder="example@mail.com"/> `);
    if (form?.errors) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.errors["email"])}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button class="btn" type="submit">Reset Passwort</button> <p><a href="/auth/login">Remember your password?</a></p></fieldset></form></div>`);
  });
}
export {
  _page as default
};
