import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
/* empty css                         */
import { e as ensure_array_like, d as attr_class } from "../../chunks/index2.js";
import { f as footer, n as navigation } from "../../chunks/project.config.js";
import { a as attr } from "../../chunks/attributes.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import "../../chunks/auth-client.js";
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
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { user } = $$props;
    var open = false;
    console.log("get user: " + user);
    $$renderer2.push(`<nav class="navbar"><a href="/" class="logo"><img src="/logo_transparent_bg.png" alt="Thomas Hudson-Zaussnig"/></a> <ul class="nav-links"><!--[-->`);
    const each_array = ensure_array_like(navigation);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let route = each_array[$$index];
      $$renderer2.push(`<li class="nav-item"><a${attr("href", route.url)}>${escape_html(route.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li class="nav-item"><a href="/admin">Admin Page</a></li> <li class="nav-item"><button class="btn">Logout</button></li>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<li class="nav-item"><a role="button" class="btn" href="/auth/login">Login</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="nav-burger-menu"><div class="line"></div> <div class="line"></div> <div class="line"></div> <ul${attr_class("nav-burger-menu-links", void 0, { "mobile": open == true })}><!--[-->`);
    const each_array_1 = ensure_array_like(navigation);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let route = each_array_1[$$index_1];
      $$renderer2.push(`<li class="nav-item"><a${attr("href", route.url)}>${escape_html(route.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></nav>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    console.log(data.user);
    $$renderer2.push(`<div class="app"><header class="site-header svelte-12qhfyh">${escape_html("guest")} `);
    Navigation($$renderer2, { user: data.user });
    $$renderer2.push(`<!----></header> <main class="svelte-12qhfyh">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></main></div>`);
  });
}
export {
  _layout as default
};
