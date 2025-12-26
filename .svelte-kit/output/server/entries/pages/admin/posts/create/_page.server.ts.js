import { B as Blogapi } from "../../../../../chunks/posts.js";
import { redirect } from "@sveltejs/kit";
import slug from "slug";
const ssr = false;
const actions = {
  createpost: async (event) => {
    console.log("platform: " + event.platform?.env);
    const formData = await event.request.formData();
    const html = formData.get("editorContent");
    const title = formData.get("title");
    const _slug = slug(title, { lower: true });
    console.log("FormData: ", formData);
    console.log("Title: ", formData.get("title"));
    console.log("HTML: ", formData.get("editorContent"));
    const blogEntry = {
      title,
      html,
      slug: _slug,
      markdown: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      authorId: event.locals.user?.id
    };
    const api = new Blogapi(event.platform);
    const result = await api.createPost(blogEntry);
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
  ssr
};
