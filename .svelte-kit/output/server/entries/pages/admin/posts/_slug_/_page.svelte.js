import { b as stringify } from "../../../../../chunks/index2.js";
import { a as attr } from "../../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
import { h as html } from "../../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<article class="prose"><a${attr("href", `/admin/posts/${stringify(
      // console.log(data.post);
      data.post.slug
    )}/edit`)}>edit</a> <h1>${escape_html(data.post.title)}</h1> <div class="post">${html(data.post.html)}</div></article>`);
  });
}
export {
  _page as default
};
