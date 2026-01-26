import { c as attr_class, a as attr_style, b as stringify } from "../../../../chunks/index.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
const p6 = "/_app/immutable/assets/avatar_female.OIHQwPzh.jpg";
function _page($$renderer) {
  let activeImage = false;
  function imageCard($$renderer2, src, _index, text) {
    $$renderer2.push(`<li${attr_class("image svelte-12sz2af", void 0, {
      "big-image": activeImage == true,
      "hidden-image": activeImage == true
    })}${attr("data-index", _index)}${attr_style(`view-transition-name: ${stringify(`image-${_index}`)}`)}><a href="#" role="button" class="svelte-12sz2af"><img${attr("src", src)}${attr("alt", `dummy image1 $${stringify(_index)}`)} class="svelte-12sz2af"/> <div><p>${escape_html(text)}</p></div></a></li>`);
  }
  $$renderer.push(`<a href="/admin">Back</a> <section${attr_class("grid-images svelte-12sz2af", void 0, { "image-active": activeImage })}><div class="overlay svelte-12sz2af" role="button" aria-label="dd" tabindex="0"></div> <h2>Grid Members</h2> <ul class="image-grid match-element-applied svelte-12sz2af">`);
  imageCard($$renderer, p6, "0", "Roli1");
  $$renderer.push(`<!----> `);
  imageCard($$renderer, p6, "1", "Roli2");
  $$renderer.push(`<!----> `);
  imageCard($$renderer, p6, "2", "Roli3");
  $$renderer.push(`<!----> `);
  imageCard($$renderer, p6, "3", "Roli4");
  $$renderer.push(`<!----> `);
  imageCard($$renderer, p6, "4", "Roli5");
  $$renderer.push(`<!----> `);
  imageCard($$renderer, p6, "5", "Roli6");
  $$renderer.push(`<!----></ul></section>`);
}
export {
  _page as default
};
