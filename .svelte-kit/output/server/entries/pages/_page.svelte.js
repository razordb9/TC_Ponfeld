import { d as bind_props, e as ensure_array_like } from "../../chunks/index2.js";
/* empty css                         */
import { H as Horizontalscroller } from "../../chunks/horizontalscroller.js";
import { m as members, s as sponsors } from "../../chunks/project.config.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Contact_new($$renderer) {
  $$renderer.push(`<div id="contactform"><form method="POST" action="?/sendmail" name="contact"><fieldset><label>Name (*) <input type="text" id="name" name="name"/></label> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <label>Email (*)<input type="email" id="email" name="email" autocomplete="username" placeholder="example@domain.com"/></label> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <label>Text (*)<textarea id="message" name="message" rows="7"></textarea></label> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <button type="submit">Absenden</button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></fieldset></form></div>`);
}
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { showModal = void 0, header, children } = $$props;
    $$renderer2.push(`<dialog><div>`);
    header?.($$renderer2);
    $$renderer2.push(`<!----> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----> <button id="dialog_close" autofocus>Schließen</button></div></dialog>`);
    bind_props($$props, { showModal });
  });
}
function About_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { boardmember } = $$props;
    let showModal = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="team-member-card"><img class="team-member-image"${attr("src", boardmember.picture)}${attr("alt", boardmember.picture)} loading="lazy"/> `);
      {
        let header = function($$renderer4) {
          $$renderer4.push(`<h1>${escape_html(boardmember.name)}</h1>`);
        };
        Modal($$renderer3, {
          get showModal() {
            return showModal;
          },
          set showModal($$value) {
            showModal = $$value;
            $$settled = false;
          },
          header,
          children: ($$renderer4) => {
            $$renderer4.push(`<img${attr("src", boardmember.picture)}${attr("alt", boardmember.name)}/> <p>Funktion: ${escape_html(boardmember.function)}</p> <p>Beschreibung: ${escape_html(boardmember.description)}</p>`);
          },
          $$slots: { header: true, default: true }
        });
      }
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _page($$renderer) {
  $$renderer.push(`<section id="hero"><img src="/Tennispllatz.jpg" alt="tennisplatz" class="hero-img"/> <div class="hero-content"><h1>TC Grössinghof Ponfeld</h1> <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a></div></section> <section id="team"><h2>Our Team</h2> <div id="team-container"><!--[-->`);
  const each_array = ensure_array_like(members);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$renderer.push(`<div class="team-member"><li>`);
    About_card($$renderer, { boardmember: member });
    $$renderer.push(`<!----></li></div>`);
  }
  $$renderer.push(`<!--]--></div></section> <section id="sponsors"><h2>Unsere Sponsoren</h2> <div id="sponsors-container">`);
  Horizontalscroller($$renderer, {
    speed: "30s",
    width: "600px",
    direction: "forward",
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(sponsors);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let sponsor = each_array_1[$$index_1];
        $$renderer2.push(`<li class="sponsor"><a${attr("href", sponsor.url)} target="_blank" rel="noopener"><img${attr("src", sponsor.logo)}${attr("alt", sponsor.name)} width="100" height="100" loading="lazy"/></a></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
  });
  $$renderer.push(`<!----></div></section> <section id="contact"><h2>Wie könnt ihr mit uns in Verbindung treten?</h2> `);
  Contact_new($$renderer);
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
