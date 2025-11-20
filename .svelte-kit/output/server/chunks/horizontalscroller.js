import { a as attr_style, b as stringify } from "./index2.js";
import { a as attr } from "./attributes.js";
function Horizontalscroller($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, width, speed, direction } = $$props;
    $$renderer2.push(`<div class="scroller"${attr("data-animated", "true")}${attr_style(width ? `--horizontal-scroller-width: ${width};` : "")}><ul${attr_style(`${stringify(speed ? `--horizontal-scroller-animation-speed: ${speed};` : "")} ${stringify(direction ? `--horizontal-scroller-animation-direction: ${direction};` : "")} `)} class="sponsor-list inner-scroller">`);
    children($$renderer2);
    $$renderer2.push(`<!----></ul></div>`);
  });
}
export {
  Horizontalscroller as H
};
