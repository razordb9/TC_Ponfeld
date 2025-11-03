import "clsx";
/* empty css                         */
import { w as ensure_array_like, x as attr, y as attr_class } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
const footer = [
  {
    name: "AGB",
    path: "/AGB"
  },
  {
    name: "Impressum",
    path: "/Impressum"
  }
];
function Footer($$renderer) {
  console.log(footer);
  $$renderer.push(`<footer class="svelte-1klj9b5">Copyright © Thomas HUDSON-ZAUSSNIG • <!--[-->`);
  const each_array = ensure_array_like(footer);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let foot = each_array[$$index];
    $$renderer.push(`<a${attr("href", foot.path)} class="svelte-1klj9b5">${escape_html(foot.name)} •</a>`);
  }
  $$renderer.push(`<!--]--> <span class="svelte-1klj9b5"><a href="https://www.instagram.com/tsonga_64/" target="_blank" class="svelte-1klj9b5"><img class="footer-img svelte-1klj9b5" src="/instagram.svg" alt="Instagram"/></a></span></footer>`);
}
const routes = [
  {
    path: "#about",
    name: "Über uns"
  },
  {
    path: "#sponsor",
    name: "Sponsoren"
  },
  {
    path: "#contact",
    name: "Kontakt"
  }
];
function Navigation($$renderer) {
  var open = false;
  $$renderer.push(`<nav class="navbar svelte-10oa5v6"><a href="/" class="logo svelte-10oa5v6"><img src="/logo_transparent_bg.png" alt="Thomas Hudson-Zaussnig" class="svelte-10oa5v6"/></a> <ul class="nav-links svelte-10oa5v6"><!--[-->`);
  const each_array = ensure_array_like(routes);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let route = each_array[$$index];
    $$renderer.push(`<li class="nav-item svelte-10oa5v6"><a${attr("href", route.path)} class="svelte-10oa5v6">${escape_html(route.name)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul> <div class="nav-burger-menu svelte-10oa5v6"><div class="line svelte-10oa5v6"></div> <div class="line svelte-10oa5v6"></div> <div class="line svelte-10oa5v6"></div> <ul${attr_class("nav-burger-menu-links svelte-10oa5v6", void 0, { "mobile": open == true })}><!--[-->`);
  const each_array_1 = ensure_array_like(routes);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let route = each_array_1[$$index_1];
    $$renderer.push(`<li class="nav-item svelte-10oa5v6"><a${attr("href", route.path)} class="svelte-10oa5v6">${escape_html(route.name)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul></div></nav>`);
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<header class="site-header svelte-12qhfyh">`);
  Navigation($$renderer);
  $$renderer.push(`<!----></header> `);
  children?.($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
