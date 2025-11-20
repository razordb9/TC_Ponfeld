import { e as ensure_array_like } from "../../../chunks/index2.js";
import { H as Horizontalscroller } from "../../../chunks/horizontalscroller.js";
import { m as members, s as sponsors } from "../../../chunks/project.config.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  console.log(members);
  $$renderer.push(`<section class="svelte-16pj3wv"><h1 class="svelte-16pj3wv">Scroll Timeline</h1> <article><h2>Lorem</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></article> <article class="sponsors svelte-16pj3wv"><h2>Our Sponsors</h2> `);
  Horizontalscroller($$renderer, {
    speed: "10s",
    width: "600px",
    direction: "forward",
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(sponsors);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let sponsor = each_array[$$index];
        $$renderer2.push(`<li class="sponsor svelte-16pj3wv"><a${attr("href", sponsor.url)} target="_blank" rel="noopener" class="svelte-16pj3wv"><img${attr("src", sponsor.logo)}${attr("alt", sponsor.name)} width="100" height="100" class="svelte-16pj3wv"/></a></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
  });
  $$renderer.push(`<!----></article> <article class="team svelte-16pj3wv"><h2>Our Team</h2> `);
  Horizontalscroller($$renderer, {
    speed: "10s",
    width: "1500px",
    direction: "reverse",
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(members);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let member = each_array_1[$$index_1];
        $$renderer2.push(`<li class="team-member svelte-16pj3wv"><img loading="eager"${attr("src", member.picture)}${attr("alt", member.name)} class="svelte-16pj3wv"/></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
  });
  $$renderer.push(`<!----></article></section>`);
}
export {
  _page as default
};
