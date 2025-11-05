import "clsx";
import { m as members, s as sponsors } from "../../chunks/project.config.js";
import { x as attr, w as ensure_array_like, z as bind_props } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function About_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { boardmember } = $$props;
    $$renderer2.push(`<div class="about_card"><img class="about-image svelte-9j5a00"${attr(
      "src",
      // console.log("AboutCard", boardmember)
      boardmember.picture
    )}${attr("alt", boardmember.picture)}/> <div class="about-meta"><div class="about_card_title">${escape_html(boardmember.name)}</div> <div class="blog_card_subtext">${escape_html(boardmember.function)}</div> <div class="blog_card_publisher"><div>${escape_html(boardmember.description)}</div></div></div></div>`);
  });
}
function About($$renderer) {
  $$renderer.push(`<div id="about"><h1>Wer sind wir?</h1> <div class="about-container"><!--[-->`);
  const each_array = ensure_array_like(members);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$renderer.push(`<div class="about-item">`);
    About_card($$renderer, { boardmember: member });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Sponsors_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { sponsor } = $$props;
    $$renderer2.push(`<div class="sponsor_card"><a${attr("href", sponsor?.url)}><img class="sponsor_img"${attr("src", sponsor?.logo)}${attr("alt", sponsor?.logo)}/> <div class="sponsor_name">${escape_html(sponsor?.name)}</div></a></div>`);
  });
}
function Sponsor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    console.log(sponsors);
    $$renderer2.push(`<div id="sponsor"><h1>Wer sind unsere Sponsoren</h1> <div class="sponsor-container">`);
    if (sponsors.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(sponsors);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let sponsor = each_array[$$index];
        $$renderer2.push(`<div class="sponsor-item">`);
        Sponsors_card($$renderer2, { sponsor });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>Hier könnte Ihr Sponsoring stehen</p>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form = null } = $$props;
    $$renderer2.push(`<div id="contact"><h1>Wie könnt ihr mit uns in Verbindung treten?</h1> <form method="POST" action="?/sendmail"><fieldset><label>Name (*) <input type="text" id="name" name="name"/></label> `);
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
    $$renderer2.push(`<!--]--> <button type="submit">Absenden</button> `);
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
    $$renderer2.push(`<!--]--></fieldset></form></div>`);
    bind_props($$props, { form });
  });
}
function _page($$renderer, $$props) {
  let { form } = $$props;
  $$renderer.push(`<section class="hero"><div class="content"><h1>TC Grössinghof Ponfeld</h1> <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn">Platzreservierung</a></div></section> <main class="main">`);
  About($$renderer);
  $$renderer.push(`<!----> `);
  Sponsor($$renderer);
  $$renderer.push(`<!----> `);
  Contact($$renderer, { form });
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
