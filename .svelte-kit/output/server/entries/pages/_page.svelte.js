import { e as ensure_array_like } from "../../chunks/index2.js";
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
function Contact_new($$renderer) {
  $$renderer.push(`<form method="POST" action="?/sendmail" name="contact"><fieldset><label>Name (*) <input type="text" id="name" name="name"/></label> `);
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
  $$renderer.push(`<!--]--></fieldset></form>`);
}
function About_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { boardmember } = $$props;
    $$renderer2.push(`<div class="team-member-card"><img class="team-member-image"${attr(
      "src",
      //   console.log("AboutCard", boardmember)
      //   const modal = document.getElementById("modal");
      //   const open = document.getElementById("open-modal");
      //   const close = document.getElementById("close-modal");
      //   const modalImg = document.getElementById("modal-img");
      //   open.onclick = () => {
      //     modal.classList.add("show");
      //     modalImg.src = open.src; // show the clicked image in the modal
      //   };
      //   close.onclick = () => {
      //     modal.classList.remove("show");
      //   };
      //   // Close on background click
      //   modal.onclick = (e) => {
      //     if (e.target === modal) {
      //       modal.classList.remove("show");
      //     }
      //   };
      boardmember.picture
    )}${attr("alt", boardmember.picture)} loading="lazy" id="open-modal"/> <div class="modal" id="modal"><span class="close" id="close-modal">×</span> <img class="modal-content" id="modal-img"/></div></div>`);
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
