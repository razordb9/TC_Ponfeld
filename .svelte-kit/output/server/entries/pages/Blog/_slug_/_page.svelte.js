import { e as escape_html } from "../../../../chunks/escaping.js";
import "clsx";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const formattedDate = (date) => date.toLocaleDateString("de-DE", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    $$renderer2.push(`<article class="prose"><a href="/Blog">back</a> <div class="post"><div class="basicInfo"><p id="date">Erstellt am ${escape_html(formattedDate(data.post.createdAt))}</p> <p>Bearbeitet am ${escape_html(formattedDate(data.post.updatedAt))}</p> <p>Erstellt von ${escape_html(data.post.authorName)}</p></div> <h1>${escape_html(data.post.title)}</h1> <div class="post-content">${html(data.post.html)}</div></div></article>`);
  });
}
export {
  _page as default
};
