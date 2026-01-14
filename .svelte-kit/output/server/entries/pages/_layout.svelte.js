import "clsx";
/* empty css                         */
import { d as attributes, e as ensure_array_like, f as element, g as spread_props, c as attr_class, h as bind_props } from "../../chunks/index2.js";
import { f as footer, n as navigation } from "../../chunks/project.config.js";
import { c as clsx, a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import "../../chunks/auth-client.js";
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      name,
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth = false,
      iconNode = [],
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...props,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(["lucide-icon lucide", name && `lucide-${name}`, props.class])
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]-->`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></svg>`);
  });
}
function At_sign($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "4" }],
      ["path", { "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "at-sign" },
      /**
       * @component @name AtSign
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xNiA4djVhMyAzIDAgMCAwIDYgMHYtMWExMCAxMCAwIDEgMC00IDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/at-sign
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Instagram($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "rect",
        {
          "width": "20",
          "height": "20",
          "x": "2",
          "y": "2",
          "rx": "5",
          "ry": "5"
        }
      ],
      [
        "path",
        { "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
      ],
      [
        "line",
        { "x1": "17.5", "x2": "17.51", "y1": "6.5", "y2": "6.5" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "instagram" },
      /**
       * @component @name Instagram
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIgLz4KICA8cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIgLz4KICA8bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/instagram
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M4 5h16" }],
      ["path", { "d": "M4 12h16" }],
      ["path", { "d": "M4 19h16" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "menu" },
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function X($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M18 6 6 18" }],
      ["path", { "d": "m6 6 12 12" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "x" },
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Footer($$renderer) {
  console.log("Footer: ", footer);
  $$renderer.push(`<section id="footer"><footer><div class="basics"><h2>TC Grössinghof Ponfeld</h2> <div class="content"><p>Größinghofstraße 18, 9061 Wölfnitz</p> <p>office@tc-ponfeld.at</p> <p>+43 463 49440</p></div></div> <div class="links"><h2>Rechtliches</h2> <div class="content"><!--[-->`);
  const each_array = ensure_array_like(footer);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let foot = each_array[index];
    $$renderer.push(`<ul><li><a${attr("href", foot.url)}>${escape_html(foot.name)}</a></li></ul>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="socialmedia"><h2>Social Media</h2> <div class="content"><ul><li><a href="https://www.instagram.com/tcgroessinghofponfeld/" target="_blank">`);
  Instagram($$renderer, {});
  $$renderer.push(`<!---->Instagram</a></li> <li><a href="mailto:tcgroessinghofponfeld@proton.me">`);
  At_sign($$renderer, {});
  $$renderer.push(`<!---->Mail</a></li></ul></div></div></footer></section>`);
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ssr = false;
    let { user, scroll } = $$props;
    var open = false;
    console.log("get user: " + user);
    $$renderer2.push(`<nav${attr_class("aside svelte-1o1at76", void 0, { "showMenu": open === true })}><div class="asideHeader svelte-1o1at76"><img src="/logo_transparent_bg.png" alt="TC-Groessinghof Ponfeld" class="logo svelte-1o1at76"/> <button class="close menu svelte-1o1at76">`);
    X($$renderer2, {});
    $$renderer2.push(`<!----></button></div> <ul class="svelte-1o1at76">`);
    if (user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(navigation);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let route = each_array[$$index];
        $$renderer2.push(`<li class="svelte-1o1at76"><a${attr("href", route.url)} class="svelte-1o1at76">${escape_html(route.name)}</a></li>`);
      }
      $$renderer2.push(`<!--]--> <li class="svelte-1o1at76"><a href="/admin" class="svelte-1o1at76">Admin Page</a></li> <li class="svelte-1o1at76"><a href="/Blog" class="svelte-1o1at76">Blog</a></li> <li class="svelte-1o1at76"><button>Logout</button></li>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(navigation);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let route = each_array_1[$$index_1];
        $$renderer2.push(`<li class="svelte-1o1at76"><a${attr("href", route.url)} class="svelte-1o1at76">${escape_html(route.name)}</a></li>`);
      }
      $$renderer2.push(`<!--]--> <li class="svelte-1o1at76"><a href="/auth/login" role="button" class="btn svelte-1o1at76">Login</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav> <div${attr_class("navbar svelte-1o1at76", void 0, { "scrolled": scroll === true })}><div class="navbar-left"><a href="/"><img src="/logo_transparent_bg.png" alt="TC-Groessinghof Ponfeld" class="logo"/></a></div> <ul class="navbar-center"><!--[-->`);
    const each_array_2 = ensure_array_like(navigation);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let route = each_array_2[$$index_2];
      $$renderer2.push(`<li class="nav-item svelte-1o1at76"><a${attr("href", route.url)}>${escape_html(route.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="navbar-right"><ul>`);
    if (user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="menu">`);
      Menu($$renderer2, {});
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<li><a href="/auth/login" role="button" class="btn">Login</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div>`);
    bind_props($$props, { ssr });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    let imageOut = false;
    console.log(data.user);
    $$renderer2.push(`<div class="app">`);
    Navigation($$renderer2, { user: data.user, scroll: imageOut });
    $$renderer2.push(`<!----> <main class="main svelte-12qhfyh"><div class="layout">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></main> <footer>`);
    Footer($$renderer2);
    $$renderer2.push(`<!----></footer></div>`);
  });
}
export {
  _layout as default
};
