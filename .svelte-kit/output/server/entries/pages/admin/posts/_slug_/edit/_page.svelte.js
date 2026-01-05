import { a as attr } from "../../../../../../chunks/attributes.js";
import { h as html } from "../../../../../../chunks/html.js";
import "quill";
/* empty css                                  */
import "@sveltejs/kit/internal";
import "../../../../../../chunks/exports.js";
import "../../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../../chunks/state.svelte.js";
import DOMPurify from "dompurify";
import "slug";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let title = data.post.title;
    let html$1 = data.post.html;
    const sanitize = (rawHTML) => {
      return DOMPurify.sanitize(rawHTML);
    };
    $$renderer2.push(`<a href="/admin">Back</a> <section id="updatepost"><h1>Edit post</h1> <form method="POST" action="?/updatePost"><label for="title">Post Title</label> <input${attr("value", data.post.slug)} type="hidden" name="slug"/> <input${attr("value", title)} type="text" id="title" name="title" placeholder="Blog title"/> <div id="editor"></div> <input${attr("value", html$1)} type="hidden" name="editorContent"/> <button class="btn" type="submit">Update</button></form> <h2>Preview</h2> <div class="preview">${html(sanitize(html$1))}</div></section>`);
  });
}
export {
  _page as default
};
