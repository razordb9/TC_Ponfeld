import "clsx";
/* empty css                         */
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
    )}${attr("alt", boardmember.picture)}/> <div class="about-meta"><div class="about_card_title">${escape_html(boardmember.name)}</div> <div class="blog_card_subtext">${escape_html(boardmember.function)}</div> <div class="blog_card_publisher"><div>${escape_html(boardmember.about)}</div></div></div></div>`);
  });
}
const board_members = [
  {
    name: "Holzer Roland",
    function: "Obmann",
    picture: "/avatar_male.jpg",
    about: "Moasta"
  },
  {
    name: "Pirker Michael",
    function: "Stv. Obmann",
    picture: "/avatar_male.jpg",
    about: "Platwart/Hirsch"
  },
  {
    name: "Jakeisch Michael",
    function: "Kassier",
    picture: "/avatar_male.jpg",
    about: "Rambo"
  },
  {
    name: "Schallegger Petra",
    function: "Stv. Kassier",
    picture: "/avatar_female.jpg",
    about: "Frau"
  },
  {
    name: "Hudson-Zaußnig Thomas",
    function: "Schriftführer",
    picture: "/avatar_male.jpg",
    about: "IT guy"
  },
  {
    name: "Schallegger Gerald",
    function: "Stv. Schriftführer",
    picture: "/avatar_male.jpg",
    about: "mister lover lover"
  }
];
function About($$renderer) {
  console.log(board_members);
  $$renderer.push(`<div id="about" class="svelte-wl3o2p"><h1>Wer sind wir?</h1> <div class="about-container svelte-wl3o2p"><!--[-->`);
  const each_array = ensure_array_like(board_members);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$renderer.push(`<div class="about-item svelte-wl3o2p">`);
    About_card($$renderer, { boardmember: member });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Sponsors_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { sponsor } = $$props;
    $$renderer2.push(`<div class="sponsor_card"><a${attr("href", sponsor?.link)}><img class="sponsor_img svelte-wviayi"${attr("src", sponsor?.logo)}${attr("alt", sponsor?.logo)}/> <div class="sponsor_name">${escape_html(sponsor?.name)}</div></a></div>`);
  });
}
const sponsors = [
  {
    name: "Uniqua",
    logo: "/logo_sponsor.png",
    link: "https://www.uniqua.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  },
  {
    name: "Auto Rainer",
    logo: "/logo_sponsor.png",
    link: "https://www.auto-rainer.at"
  }
];
function Sponsor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    console.log(sponsors);
    $$renderer2.push(`<div id="sponsor" class="svelte-6ww97u"><h1>Wer sind unsere Sponsoren</h1> <div class="sponsor-container svelte-6ww97u">`);
    if (sponsors.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(sponsors);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let sponsor = each_array[$$index];
        $$renderer2.push(`<div class="sponsor-item svelte-6ww97u">`);
        Sponsors_card($$renderer2, { sponsor });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>Wir sind negger</p>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form = null } = $$props;
    $$renderer2.push(`<div id="contact" class="svelte-1d0wj5w"><h1>Wie könnt ihr mit uns in Verbindung treten?</h1> <form method="POST" action="?/sendmail" class="svelte-1d0wj5w"><fieldset><label>Name (*) <input type="text" id="name" name="name"/></label> `);
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
  $$renderer.push(`<section class="hero svelte-1uha8ag"><div class="content svelte-1uha8ag"><h1 class="svelte-1uha8ag">TC Grössinghof Ponfeld</h1> <a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" class="btn svelte-1uha8ag">Platzreservierung</a></div></section> <main class="main svelte-1uha8ag">`);
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
