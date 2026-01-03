import "clsx";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let user = data.user;
    $$renderer2.push(`<section id="adminPage"><h1>AdminPage</h1> <div class="posts"><li><a href="/admin/posts/create">Create Post</a></li> <li><a href="/admin/posts">All blog posts</a></li></div> `);
    if (user?.isAdmin) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="adminstuff"><li><a href="/admin/users/create">Create new user</a></li> <li><a href="/admin/design">Check design</a></li></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
export {
  _page as default
};
