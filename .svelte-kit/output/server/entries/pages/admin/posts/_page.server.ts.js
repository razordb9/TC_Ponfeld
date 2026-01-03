import { B as Blogapi } from "../../../../chunks/posts.js";
const load = async (event) => {
  const api = new Blogapi(event.platform);
  const result = await api.readPosts();
  if (result.success) {
    return {
      posts: result.posts
    };
  } else {
    return {
      posts: []
    };
  }
};
export {
  load
};
