import { e as ensure_array_like, c as bind_props } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  let result = $$props["result"];
  $$renderer.push(`<a href="/admin">Back</a> <h1>Posts</h1> <!--[-->`);
  const each_array = ensure_array_like(result);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let blogentry = each_array[$$index];
    $$renderer.push(`<p>${escape_html(blogentry.title)}</p>`);
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { result });
}
export {
  _page as default
};
