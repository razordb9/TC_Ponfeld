import { B as Blogapi } from "../../../../../chunks/posts.js";
const load = async ({ params, platform }) => {
  const { slug } = params;
  const { readPost } = new Blogapi(platform);
  const result = await readPost(slug);
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
export {
  load
};
