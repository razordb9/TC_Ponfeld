import { d as bind_props, e as ensure_array_like } from "../../chunks/index2.js";
/* empty css                         */
import { H as Horizontalscroller } from "../../chunks/horizontalscroller.js";
import { m as members, s as sponsors } from "../../chunks/project.config.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { a as attr } from "../../chunks/attributes.js";
function Contact_new($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form = null } = $$props;
    $$renderer2.push(`<section id="contact"><h2>Wie könnt ihr mit uns in Verbindung treten?</h2> <form method="POST" action="?/sendmail" name="contact"><fieldset><label>Name (*) <input type="text" id="name" name="name"/></label> `);
    if (form?.errors && form?.values.name) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="error">${escape_html(form?.errors["name"]?.errors)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <label>Email (*)<input type="email" id="email" name="email" autocomplete="username" placeholder="example@domain.com"/></label> `);
    if (form?.errors && form?.values.email) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="error">${escape_html(form?.errors["email"]?.errors)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <label>Text (*)<textarea id="message" name="message" rows="7"></textarea></label> `);
    if (form?.errors && form?.values.message) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="error">${escape_html(form?.errors["message"]?.errors)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button class="btn" type="submit">Absenden</button> `);
    if (form?.success) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:green;">✅ Message sent successfully!</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (form?.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p style="color:red;">❌ ${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></fieldset></form></section>`);
    bind_props($$props, { form });
  });
}
function About_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { boardmember } = $$props;
    $$renderer2.push(`<div id="member"><div class="member_card"><img class="member-image svelte-pqwzcw"${attr(
      "src",
      // console.log("AboutCard", boardmember)
      boardmember.picture
    )}${attr("alt", boardmember.picture)}/> <div class="member-meta"><div class="about_card_title">${escape_html(boardmember.name)}</div> <div class="blog_card_subtext">${escape_html(boardmember.function)}</div> <div class="blog_card_publisher"><div>${escape_html(boardmember.description)}</div></div></div></div></div>`);
  });
}
function _page($$renderer, $$props) {
  let { form } = $$props;
  $$renderer.push(`<section id="hero"><div class="content"><h1>TC Grössinghof Ponfeld</h1> <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a></div></section> <section id="team"><h2>Our Team</h2> <article id="team-container"><!--[-->`);
  const each_array = ensure_array_like(members);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$renderer.push(`<div class="team-member"><li>`);
    About_card($$renderer, { boardmember: member });
    $$renderer.push(`<!----></li></div>`);
  }
  $$renderer.push(`<!--]--></article></section> <section id="sponsors"><h2>Unsere Sponsoren</h2> <article id="sponsors-container">`);
  Horizontalscroller($$renderer, {
    speed: "30s",
    width: "600px",
    direction: "forward",
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(sponsors);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let sponsor = each_array_1[$$index_1];
        $$renderer2.push(`<li class="sponsor"><a${attr("href", sponsor.url)} target="_blank" rel="noopener"><img${attr("src", sponsor.logo)}${attr("alt", sponsor.name)} width="100" height="100"/></a></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
  });
  $$renderer.push(`<!----></article></section> `);
  Contact_new($$renderer, { form });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
