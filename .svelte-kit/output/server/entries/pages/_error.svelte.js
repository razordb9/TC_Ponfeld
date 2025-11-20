import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import "../../chunks/state.svelte.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import { w as writable } from "../../chunks/index.js";
import "@sveltejs/kit/internal/server";
import { g as getContext } from "../../chunks/context.js";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
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
