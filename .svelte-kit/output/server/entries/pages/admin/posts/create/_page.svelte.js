import { a as attr } from "../../../../../chunks/attributes.js";
import "quill";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import DOMPurify from "dompurify";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let html$1 = "";
    const sanitize = (rawHTML) => {
      return DOMPurify.sanitize(rawHTML);
    };
    $$renderer2.push(`<section id="createpost"><h1>Create new post</h1> <form method="POST" action="?/createpost"><label for="title">Post Title</label> <input type="text" id="title" name="title" placeholder="Blog title"/> <div id="editor" class="svelte-usekut"></div> <input${attr("value", html$1)} type="hidden" name="editorContent"/> <button class="btn" type="submit">Create</button></form> <h2>Preview</h2> <div class="preview svelte-usekut">${html(sanitize(html$1))}</div></section>`);
  });
}
export {
  _page as default
};
