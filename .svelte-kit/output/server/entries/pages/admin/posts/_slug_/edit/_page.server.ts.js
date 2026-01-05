import { B as Blogapi } from "../../../../../../chunks/posts.js";
import { redirect } from "@sveltejs/kit";
import slug from "slug";
const ssr = false;
const load = async ({ params, platform }) => {
  const { slug: slug2 } = params;
  const { readPost } = new Blogapi(platform);
  const result = await readPost(slug2);
  if (result.success) {
    return {
      post: result.post
    };
  } else {
    return {
      success: result.success,
      error: "No post found "
    };
  }
};
const actions = {
  updatePost: async (event) => {
    const formData = await event.request.formData();
    const html = formData.get("editorContent");
    const title = formData.get("title");
    const orgSlug = formData.get("slug");
    const _slug = slug(title, { lower: true });
    console.log("FormData: ", formData);
    const blogEntry = {
      title,
      html,
      slug: _slug,
      updatedAt: Date.now(),
      authorId: event.locals.user?.id
    };
    const api = new Blogapi(event.platform);
    const result = await api.updatePost(blogEntry, orgSlug);
    console.log(result);
    if (result.success) {
      redirect(303, "/admin/posts");
    } else {
      return {
        success: result.success,
        error: result.error
      };
    }
  }
};
export {
  actions,
  load,
  ssr
};
