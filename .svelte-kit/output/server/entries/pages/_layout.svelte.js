import "clsx";
import { f as footer, n as navigation } from "../../chunks/project.config.js";
import { w as ensure_array_like, x as attr, y as attr_class } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
function Footer($$renderer) {
  console.log("Footer: ", footer);
  $$renderer.push(`<footer>Copyright © Thomas HUDSON-ZAUSSNIG • <!--[-->`);
  const each_array = ensure_array_like(footer);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let foot = each_array[$$index];
    $$renderer.push(`<a${attr("href", foot.url)}>${escape_html(foot.name)} •</a>`);
  }
  $$renderer.push(`<!--]--> <span><a href="https://www.instagram.com/tcgroessinghofponfeld/" target="_blank"><img class="footer-img" src="/instagram.svg" alt="Instagram"/></a></span></footer>`);
}
function Navigation($$renderer) {
  var open = false;
  $$renderer.push(`<nav class="navbar"><a href="/" class="logo"><img src="/logo_transparent_bg.png" alt="Thomas Hudson-Zaussnig"/></a> <ul class="nav-links"><!--[-->`);
  const each_array = ensure_array_like(navigation);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let route = each_array[$$index];
    $$renderer.push(`<li class="nav-item"><a${attr("href", route.url)}>${escape_html(route.name)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul> <div class="nav-burger-menu"><div class="line"></div> <div class="line"></div> <div class="line"></div> <ul${attr_class("nav-burger-menu-links", void 0, { "mobile": open == true })}><!--[-->`);
  const each_array_1 = ensure_array_like(navigation);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let route = each_array_1[$$index_1];
    $$renderer.push(`<li class="nav-item"><a${attr("href", route.url)}>${escape_html(route.name)}</a></li>`);
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
