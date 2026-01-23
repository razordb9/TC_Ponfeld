import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import "../../chunks/client.js";
import { g as getContext } from "../../chunks/context.js";
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  }
};
const page = page$1;
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="error-msg"><img src="/error.png" alt="error"/> <h1>Upps an error occured</h1> <h1>${escape_html(page?.error?.message)}</h1></div>`);
  });
}
export {
  _error as default
};
