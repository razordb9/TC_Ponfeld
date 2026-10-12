import { h as head } from "../../../../chunks/index.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const formattedDate = (date) => date.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
    head("qt3x5v", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.post.title)} | Blog | TC Ponfeld</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `${data.post.title} – Neuigkeiten vom TC Ponfeld.`)}/>`);
    });
    $$renderer2.push(`<div class="article-page svelte-qt3x5v"><a class="back-link svelte-qt3x5v" href="/Blog"><span aria-hidden="true" class="svelte-qt3x5v">←</span> Zurück zum Blog</a> <article class="post svelte-qt3x5v"><header class="post-header svelte-qt3x5v"><p class="eyebrow svelte-qt3x5v"><span aria-hidden="true" class="svelte-qt3x5v"></span> Aus dem Vereinsleben</p> <h1 class="svelte-qt3x5v">${escape_html(data.post.title)}</h1> <div class="post-meta svelte-qt3x5v"><span class="author svelte-qt3x5v"><span class="author-mark svelte-qt3x5v" aria-hidden="true">${escape_html(data.post.authorName?.charAt(0) ?? "T")}</span> <span>${escape_html(data.post.authorName ?? "TC Ponfeld")}</span></span> <span class="meta-divider svelte-qt3x5v" aria-hidden="true"></span> <time${attr("datetime", data.post.createdAt.toISOString())}>Veröffentlicht am ${escape_html(formattedDate(data.post.createdAt))}</time> `);
    if (data.post.updatedAt !== data.post.createdAt.getTime()) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="updated-date svelte-qt3x5v">Aktualisiert am ${escape_html(formattedDate(new Date(data.post.updatedAt)))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></header> <div class="post-content svelte-qt3x5v">${html(data.post.html)}</div> <footer class="post-footer svelte-qt3x5v"><p class="svelte-qt3x5v">Das war’s fürs Erste – bis bald auf dem Platz.</p> <a class="back-link svelte-qt3x5v" href="/Blog"><span aria-hidden="true" class="svelte-qt3x5v">←</span> Alle Beiträge ansehen</a></footer></article></div>`);
  });
}
export {
  _page as default
};
