import { b as stringify } from "../../../../../chunks/index.js";
import { a as attr } from "../../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
import { h as html } from "../../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    console.log(data.post);
    const formattedDate = (date) => date.toLocaleDateString("de-DE", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    $$renderer2.push(`<article class="prose svelte-3qawfy"><a${attr("href", `/admin/posts/${stringify(data.post.slug)}/edit`)}>edit</a> <a href="/admin">back</a> <div class="post svelte-3qawfy"><h1>${escape_html(data.post.title)}</h1> <div class="basicInfo svelte-3qawfy"><p id="date">Erstellt am ${escape_html(formattedDate(data.post.createdAt))}</p> <p>Bearbeitet am ${escape_html(formattedDate(data.post.updatedAt))}</p> <p>Erstellt von ${escape_html(data.post.authorName)}</p></div> <div>${html(data.post.html)}</div></div></article>`);
  });
}
export {
  _page as default
};
