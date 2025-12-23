import { B as Blogapi } from "../../../../chunks/posts.js";
const load = async (event) => {
  const api = new Blogapi(event.platform);
  const result = await api.readPost();
  if (result.success) {
    return result;
  } else {
    return {
      success: result.success,
      error: result.error
    };
  }
};
export {
  load
};
