import { d as attributes, e as ensure_array_like, f as element, g as spread_props } from "./index.js";
import { c as clsx } from "./attributes.js";
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
function Log_in($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m10 17 5-5-5-5" }],
      ["path", { "d": "M15 12H3" }],
      ["path", { "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "log-in" },
      /**
       * @component @name LogIn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTAgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNMTUgMTJIMyIgLz4KICA8cGF0aCBkPSJNMTUgM2g0YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/log-in
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
export {
  Icon as I,
  Log_in as L
};
